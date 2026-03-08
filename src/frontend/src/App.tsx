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
import { SectorPage } from "./pages/SectorPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
            background: "oklch(0.16 0.028 258)",
            border: "1px solid oklch(0.23 0.032 258)",
            color: "oklch(0.97 0.004 250)",
          },
        }}
      />
    </div>
  );
}

export default function App() {
  const path = window.location.pathname;

  // Route: /sectors/:sectorId
  if (path.startsWith("/sectors/")) {
    return (
      <>
        <SectorPage />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "oklch(0.16 0.028 258)",
              border: "1px solid oklch(0.23 0.032 258)",
              color: "oklch(0.97 0.004 250)",
            },
          }}
        />
      </>
    );
  }

  // Default: homepage
  return <HomePage />;
}
