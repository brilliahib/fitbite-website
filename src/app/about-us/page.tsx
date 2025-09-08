import FooterContent from "@/components/molecules/footer/FooterContent";
import AboutWrapper from "@/components/organisms/about/AboutWrapper";
import Navbar from "@/components/organisms/navbar/Navbar";

export default function AboutPage() {
  return (
    <section>
      <Navbar />
      <AboutWrapper />
      <FooterContent />
    </section>
  );
}
