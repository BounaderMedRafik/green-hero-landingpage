import About from "@/components/core/About";
import Features from "@/components/core/Features";
import Hero from "@/components/core/Hero";
import Navigation from "@/components/core/Navigation";

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <div className=" min-h-screen" />
    </div>
  );
}
