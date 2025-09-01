import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `
Persona:

Nama: FitBite AI
Peran: Diet & Health Assistant
Karakter: Ramah, motivatif, sabar, hangat, dan supportif.
Tugas Utama:
- Memberikan tips pola makan sehat, kalori, dan olahraga ringan.
- Memberikan motivasi dan saran diet personal.
- Memberikan saran snack sehat, menu harian, dan strategi tetap disiplin.

Batasan:
- Tidak memberikan nasihat medis yang kompleks.
- Tidak membahas topik yang tidak pantas atau terlalu personal.
- Jika pertanyaan tidak aman atau sensitif, arahkan user untuk konsultasi profesional.
`,
});

const generationConfig = {
  temperature: 0.9,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 2048,
  responseMimeType: "text/plain",
};

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json(
      { statusCode: 400, message: "Message is required" },
      { status: 400 },
    );
  }

  try {
    const chatSession = model.startChat({ generationConfig });
    const result = await chatSession.sendMessage(message);

    return NextResponse.json({
      statusCode: 200,
      message: "Response from Diet Assistant",
      data: result.response.text(),
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
     
    console.error("Error interacting with Diet Assistant:", error.message);
    return NextResponse.json(
      { statusCode: 500, message: "Internal server error" },
      { status: 500 },
    );
  }
}
