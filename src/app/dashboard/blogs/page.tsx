import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel Kesehatan - Fitbite",
};

export default function DashboardBloPage() {
  return (
    <section>
      <DashboardTitle
        head="Artikel Kesehatan"
        body="Baca artikel terbaru tentang kesehatan dan kebugaran."
      />
    </section>
  );
}
