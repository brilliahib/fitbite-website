import HomeAbout from "./HomeAbout";
import HomeHero from "./HomeHero";

export default function HomeWrapper() {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
    </div>
  );
}
