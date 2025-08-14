import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import LaunchOfferSection from "@/components/LaunchOfferSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <AboutSection />
        <LaunchOfferSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
