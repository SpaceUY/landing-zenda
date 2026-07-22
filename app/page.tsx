import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import InternationalCard from "@/components/InternationalCard";
import UsdtBenefits from "@/components/UsdtBenefits";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <InternationalCard />
      <UsdtBenefits />
      <HowItWorks />
      <Faq />
      <Footer />
    </main>
  );
}
