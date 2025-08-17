import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IndustrySection from "@/components/IndustrySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import LaunchOfferSection from "@/components/LaunchOfferSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <IndustrySection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <FAQSection />
        <LaunchOfferSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
