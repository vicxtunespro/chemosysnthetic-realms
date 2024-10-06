import Image from "next/image";
import Hero from "./components/hero";
import FeaturedHero from "./components/featuredHero";
import CardGroup from "./components/cardGroup";
import EcoSection from "./components/ecoSecttion";
import Photosynthesis from "./components/photosynthe";
import Action from "./components/CTA";

export default function Home() {
  return (
    <div className="">
      <FeaturedHero/>
      <Hero/> 
      <CardGroup/>
      <Photosynthesis/> 
      <Action/>
      
    </div>
  );
}
