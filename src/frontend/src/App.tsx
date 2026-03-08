import { Toaster } from "@/components/ui/sonner";
import { AboutSection } from "./components/AboutSection";
import { AdvantageSection } from "./components/AdvantageSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { InnovationSection } from "./components/InnovationSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { ServicesSection } from "./components/ServicesSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <InnovationSection />
        <AdvantageSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "oklch(0.18 0.03 263)",
            border: "1px solid oklch(0.25 0.04 265)",
            color: "oklch(0.96 0.006 250)",
          },
        }}
      />
    </div>
  );
}
