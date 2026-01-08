import HeroSection from "@/component/Hero";
import { HowItWorks } from "@/component/Howitworks";
import { InstallGuide } from "@/component/InstallGuide";
import { MarketPreview } from "@/component/MarketPreview";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <MarketPreview />
      <InstallGuide />
    </div>
  );
}
