import Image from "next/image";
import Hero from "./components/hero";
import FeaturedHero from "./components/featuredHero";

export default function Home() {
  return (
    <div className="">
      <FeaturedHero/>
      <Hero/>     
    </div>
  );
}
