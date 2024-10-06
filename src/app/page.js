import Image from "next/image";
import Hero from "./components/hero";
import FeaturedHero from "./components/featuredHero";
import CardGroup from "./components/cardGroup";

export default function Home() {
  return (
    <div className="">
      <FeaturedHero/>
      <Hero/> 
      <CardGroup/>    
    </div>
  );
}
