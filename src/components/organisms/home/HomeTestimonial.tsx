"use client";

import LandingTitle from "@/components/atoms/typography/LandingTitle";
import { MessageSquareText, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Marquee from "@/components/molecules/marquee/MarqueeTestimonial";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Anindita",
    text: "Sejak menggunakan Fitbite, saya jadi lebih disiplin dalam menghitung kalori. Awalnya sulit, tapi kini saya bisa tahu kalori harian dengan jelas sehingga pola makan jadi lebih sehat dan stabil.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Andi Pratama",
    text: "User interface Fitbite sangat simple dan mudah dipahami. Saya tidak perlu ribet mencatat manual, cukup beberapa klik semua makanan langsung tercatat rapi dan bisa dipantau kapan saja.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Rina Kartikasari",
    text: "Berat badan saya turun 5kg hanya dalam dua bulan berkat Fitbite. Saya tetap bisa makan favorit tapi porsinya lebih terkontrol, dan laporan mingguan membuat saya terus termotivasi.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Dimas Saputra",
    text: "Fitbite sangat membantu saya tracking progress harian. Notifikasinya membuat saya konsisten, dan setiap catatan terasa ringan tapi sangat berguna untuk evaluasi pola makan jangka panjang.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Lia Anggraini",
    text: "Saya suka fitur report mingguan Fitbite. Melihat grafik perkembangan membuat saya semangat menjaga pola makan. Rasanya seperti memiliki personal coach digital yang selalu mendampingi.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Budi Santoso",
    text: "Aplikasi ini simple, cepat, dan jelas. Semua fiturnya langsung to the point sehingga tidak membingungkan. Sangat cocok untuk orang yang ingin hidup sehat dengan cara praktis dan efisien.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Maya Putri",
    text: "Saya suka sekali dengan tampilan Fitbite. Desainnya modern, clean, dan enak digunakan setiap hari. Rasanya jauh lebih nyaman dibanding aplikasi kesehatan lain yang pernah saya coba.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    name: "Rizky Adi Nugroho",
    text: "Fitbite praktis dipakai sehari-hari, bahkan ketika saya sedang sibuk kerja. Update makanan bisa dilakukan hanya dalam hitungan detik tanpa mengganggu aktivitas, benar-benar efisien.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Tari Widyaningsih",
    text: "Fitbite membantu saya lebih sadar dengan nutrisi harian. Dulu sering asal makan, sekarang saya bisa memastikan makanan yang masuk sesuai kebutuhan tubuh tanpa harus ribet menghitung manual.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Yoga Mahendra",
    text: "Cocok banget untuk gaya hidup modern. Fitbite tidak kaku, tapi memberi fleksibilitas sambil tetap menjaga asupan. Saya bisa tetap sehat tanpa merasa terbatasi, sangat menyenangkan.",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Citra Ayu Lestari",
    text: "Hidup saya jadi lebih teratur berkat Fitbite. Sekarang saya tidak asal makan karena ada panduan kalori yang jelas. Berat badan lebih stabil dan tubuh terasa jauh lebih bertenaga.",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    name: "Fajar Nugraha",
    text: "Kalori harian lebih mudah dipantau dengan Fitbite. Saya jadi lebih fit dan punya energi lebih saat olahraga. Aplikasi ini benar-benar membantu menjaga keseimbangan makan dan aktivitas.",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Anita Puspitasari",
    text: "Saya paling suka fitur tracking nutrisi di Fitbite. Bukan hanya kalori, tapi juga zat gizi penting bisa dipantau. Hal ini membuat saya lebih paham pentingnya makan sehat secara menyeluruh.",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
  },
  {
    name: "Roni Hidayat",
    text: "Fitbite mantap banget untuk siapa saja yang serius menjaga kesehatan. Saya merasa punya kontrol penuh terhadap pola makan, tapi tetap dengan cara yang simpel dan tidak menyulitkan.",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
];

export default function HomeTestimonial() {
  return (
    <section className="space-y-10 overflow-hidden pt-20">
      <LandingTitle
        badgeTitle="Our Testimonials"
        icon={MessageSquareText}
        title="What Are People Saying?"
        description="Discover how Fitbite has helped our users achieve their health goals through their own stories and experiences."
      />
      <div>
        <Marquee pauseOnHover className="[--duration:35s]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-shrink-0 px-4"
            >
              <Card className="w-90 rounded-2xl bg-gradient-to-b from-white to-gray-50 shadow-lg transition-all hover:shadow-xl dark:from-zinc-900 dark:to-zinc-800">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="ring-primary mb-3 rounded-full border-4 border-white object-cover shadow-md ring-2"
                      unoptimized
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  <div className="mt-3 flex items-center justify-center space-x-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-foreground mt-3 font-semibold">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
