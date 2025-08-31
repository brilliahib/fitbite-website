import Navbar from "../navbar/Navbar";
import HomeAbout from "./HomeAbout";
import HomeAboutFitbite from "./HomeAboutFitbite";
import HomeHero from "./HomeHero";

export default function HomeWrapper() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <HomeAboutFitbite />
    </div>
  );
}
