import Navbar from "../navbar/Navbar";
import HomeAbout from "./HomeAbout";
import HomeHero from "./HomeHero";

export default function HomeWrapper() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeAbout />
    </div>
  );
}
