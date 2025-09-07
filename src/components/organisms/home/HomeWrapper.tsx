import FooterContent from "@/components/molecules/footer/FooterContent";
import Navbar from "../navbar/Navbar";
import HomeAbout from "./HomeAbout";
import HomeAboutFitbite from "./HomeAboutFitbite";
import HomeHero from "./HomeHero";
import HomeTestimonial from "./HomeTestimonial";
import HomeFAQ from "./HomeFAQ";

export default function HomeWrapper() {
  return (
    <div>
      <Navbar />
      <div className="overflow-hidden md:space-y-24">
        <HomeHero />
        <HomeAbout />
        <HomeAboutFitbite />
        <HomeTestimonial />
        <HomeFAQ />
        <FooterContent />
      </div>
    </div>
  );
}
