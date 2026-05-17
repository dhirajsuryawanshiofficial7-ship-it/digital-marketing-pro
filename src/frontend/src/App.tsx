import { CTABanner } from "@/components/CTABanner";
import { ContactSection } from "@/components/ContactSection";
import { CoursesSection } from "@/components/CoursesSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyUsSection } from "@/components/WhyUsSection";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a1a" }}>
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <WhyUsSection />
        <CurriculumSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
