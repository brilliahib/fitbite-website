import type { Metadata } from "next";
import { Figtree, Paytone_One } from "next/font/google";
import "./globals.css";
import GlobalProvider from "@/components/organisms/GlobalProvider";

const paytoneOne = Paytone_One({
  variable: "--font-paytone-one",
  weight: "400",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Track Your Calories - FitBite",
  description:
    "FitBite adalah aplikasi website untuk menghitung kalori, memantau asupan makanan, dan membantu kamu mencapai tujuan diet serta hidup lebih sehat.",
  keywords: [
    "hitung kalori online",
    "aplikasi diet Indonesia",
    "atur pola makan sehat",
    "track kalori harian",
    "aplikasi gaya hidup sehat",
    "penghitung kalori makanan",
    "diet sehat online",
    "kalkulator kalori gratis",
    "aplikasi kesehatan dan kebugaran",
    "cara menurunkan berat badan",
  ],
  openGraph: {
    title: "FitBite",
    description:
      "FitBite membantu kamu menghitung kalori, melacak makanan, dan mencapai tujuan kesehatan dengan mudah.",
    url: "https://fitbite.brilliahib.tech",
    siteName: "FitBite",
    images: [
      {
        url: "https://fitbite.brilliahib.tech/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "FitBite",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${paytoneOne.variable} antialiased`}
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
