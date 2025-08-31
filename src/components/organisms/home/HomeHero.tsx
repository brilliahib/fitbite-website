"use client";

import PageContainer from "@/components/atoms/container/PageContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center space-y-10 text-center">
        <motion.div
          className="flex w-full flex-col items-center justify-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-black md:text-6xl">
            Mulai Hari Sehatmu <br />
            dengan <span className="text-primary">Fitbite.</span>
          </h1>

          <p className="text-muted-foreground flex w-full items-center justify-center md:max-w-md md:text-lg">
            Aplikasi website untuk membantu kamu mengatur pola makan dan
            mencapai tujuan kesehatanmu.
          </p>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Button size={"lg"}>Coba Sekarang</Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Button size={"lg"} variant={"outline"}>
                Masuk Komunitas
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[200px] w-full max-w-4xl overflow-hidden md:h-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/hero/phone-hero.png"
            alt="Fitbite"
            width={1000}
            height={1000}
            loading="lazy"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </PageContainer>
  );
}
