import FooterContent from "@/components/molecules/footer/FooterContent";
import Navbar from "../navbar/Navbar";
import HomeAbout from "./HomeAbout";
import HomeAboutFitbite from "./HomeAboutFitbite";
import HomeHero from "./HomeHero";
import HomeTestimonial from "./HomeTestimonial";

export default function HomeWrapper() {
  return (
    <div className="overflow-hidden md:space-y-24">
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <HomeAboutFitbite />
      <HomeTestimonial />
      <FooterContent />
    </div>
  );
}
