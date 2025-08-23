"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function DashboardCheckObesityWrapper() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState<null | {
    bmi: number;
    status: string;
    recommendations: string[];
  }>(null);

  const handleSubmit = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    let status = "";
    let recommendations: string[] = [];

    if (bmi < 18.5) {
      status = "Kurus";
      recommendations = [
        "Tingkatkan asupan kalori dengan makanan bergizi.",
        "Konsumsi protein dan karbohidrat kompleks secara rutin.",
        "Pertimbangkan untuk berkonsultasi dengan ahli gizi.",
        "Lakukan latihan kekuatan untuk menambah massa otot.",
      ];
    } else if (bmi >= 18.5 && bmi < 25) {
      status = "Normal";
      recommendations = [
        "Pertahankan pola makan seimbang.",
        "Tetap aktif secara fisik minimal 30 menit per hari.",
        "Lakukan pemeriksaan kesehatan secara berkala.",
        "Hindari stres dan tidur cukup setiap malam.",
      ];
    } else if (bmi >= 25 && bmi < 30) {
      status = "Overweight";
      recommendations = [
        "Kurangi konsumsi makanan tinggi gula dan lemak.",
        "Tingkatkan aktivitas fisik seperti jalan cepat atau olahraga ringan.",
        "Perbanyak konsumsi sayuran dan buah-buahan.",
        "Buat jadwal makan teratur dan hindari ngemil berlebihan.",
      ];
    } else {
      status = "Obesitas";
      recommendations = [
        "Mulai program diet rendah kalori dengan pengawasan ahli.",
        "Lakukan olahraga secara teratur, seperti kardio dan latihan kekuatan.",
        "Hindari minuman manis dan makanan olahan.",
        "Konsultasikan ke dokter atau ahli gizi untuk penanganan lebih lanjut.",
      ];
    }

    setResult({
      bmi: parseFloat(bmi.toFixed(1)),
      status,
      recommendations,
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="weight">Berat Badan (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Contoh: 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Tinggi Badan (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="Contoh: 170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="age">Umur</Label>
              <Input
                id="age"
                type="number"
                placeholder="Contoh: 25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleSubmit}>Cek Obesitas</Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="animate-fade-in mt-6">
          <CardHeader className="flex flex-col items-start gap-2">
            <CardTitle className="text-xl font-bold">
              Hasil Cek Obesitas
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Berikut adalah analisis berdasarkan data Anda
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border bg-gray-50 p-4 shadow-sm">
                <p className="text-muted-foreground text-sm font-medium">
                  BMI Anda
                </p>
                <p className="text-primary text-3xl font-bold">{result.bmi}</p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl border bg-gray-50 p-4 shadow-sm">
                <p className="text-muted-foreground text-sm font-medium">
                  Status
                </p>
                <span
                  className={`w-fit rounded-full px-3 py-1 text-sm font-bold ${
                    result.status === "Kurus"
                      ? "bg-blue-100 text-blue-700"
                      : result.status === "Normal"
                        ? "bg-green-100 text-green-700"
                        : result.status === "Overweight"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                  }`}
                >
                  {result.status === "Kurus" && "🍃 Kurus"}
                  {result.status === "Normal" && "✅ Normal"}
                  {result.status === "Overweight" && "⚠️ Overweight"}
                  {result.status === "Obesitas" && "❌ Obesitas"}
                </span>
              </div>
            </div>

            <div>
              <p className="mb-2 font-semibold">Rekomendasi untuk Anda:</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {result.recommendations.map((rec, idx) => (
                  <li
                    key={idx}
                    className="bg-background hover:bg-accent flex items-center gap-2 rounded-md border p-4 text-sm shadow-sm transition"
                  >
                    <Check className="h-4 w-4 text-green-500" /> {rec}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
