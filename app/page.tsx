import About from "@/components/core/About";
import Hero from "@/components/core/Hero";
import Navigation from "@/components/core/Navigation";

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <About />

      {/* <div className="h-screen" /> */}
    </div>
  );
}
