"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";

export default function DashboardVoiceAssistantWrapper() {
  const { data: session } = useSession();
  const [interim, setInterim] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState<React.ReactNode[]>(
    [],
  );
  const [recording, setRecording] = useState(false);
  const responseRef = useRef("");

  const parseResponse = (text: string) => {
    const elements: React.ReactNode[] = [];
    const regex = /\*(.*?)\*/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        elements.push(
          <span key={lastIndex}>{text.slice(lastIndex, match.index)}</span>,
        );
      }
      elements.push(<strong key={match.index}>{match[1]}</strong>);
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      elements.push(<span key={lastIndex}>{text.slice(lastIndex)}</span>);
    }

    return elements;
  };

  const startRecording = () => {
    const SpeechRecognitionConstructor =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).SpeechRecognition ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionConstructor) {
      alert("Browser Anda tidak mendukung Speech Recognition");
      return;
    }

    const recognition: SpeechRecognition = new SpeechRecognitionConstructor();
    recognition.lang = "id-ID";
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setRecording(true);
    recognition.onend = () => setRecording(false);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          fetch("/api/bot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: transcript }),
          })
            .then((res) => res.json())
            .then((data) => {
              responseRef.current = data.data;
              setDisplayedResponse([]);

              const words = parseResponse(responseRef.current);
              let wordIndex = 0;

              const interval = setInterval(() => {
                wordIndex++;
                setDisplayedResponse(words.slice(0, wordIndex));
                if (wordIndex >= words.length) clearInterval(interval);
              }, 120);

              const cleanText = data.data.replace(/\*/g, "");

              const utterance = new SpeechSynthesisUtterance(cleanText);
              utterance.lang = "id-ID";
              speechSynthesis.speak(utterance);
            })
            .catch((err) => console.error(err));
        } else {
          interimTranscript += transcript;
        }
      }
      setInterim(interimTranscript);
    };

    recognition.start();
  };

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-col items-center gap-4 text-center"
      >
        <h1 className="text-4xl font-bold">Hello, {session?.user?.name}!</h1>
        <p className="text-muted-foreground">Your personal diet assistant</p>
      </motion.div>

      <div className="relative">
        <AnimatePresence>
          {recording && (
            <motion.div
              key="ripple"
              initial={{ opacity: 0.4, scale: 1 }}
              animate={{ opacity: 0, scale: 1.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
              className="bg-primary absolute inset-0 m-auto h-24 w-24 rounded-full"
            />
          )}
        </AnimatePresence>

        <Button
          onClick={startRecording}
          variant="default"
          className={`relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-full shadow-xl transition-all duration-300`}
        >
          {recording ? (
            <Phone className="h-8! w-8! animate-pulse text-white" />
          ) : (
            <Mic className="h-8! w-8! text-white" />
          )}
        </Button>
      </div>

      <Card className="mt-8 w-full rounded-3xl bg-white/80 shadow-xl md:max-w-3xl">
        <CardContent className="min-h-[140px] p-6 text-center text-lg">
          {interim ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground italic"
            >
              {interim}
            </motion.span>
          ) : displayedResponse.length ? (
            <AnimatePresence>
              {displayedResponse.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.02,
                    delay: idx * 0.2,
                    ease: "linear",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </AnimatePresence>
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground"
            >
              Ada yang bisa saya bantu?
            </motion.span>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
