import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const scrollTo = (id: string) => {
  document
    .querySelector(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x900.jpg')",
        }}
      />
      {/* Multi-layer dark overlay */}
      <div className="absolute inset-0 bg-navy-deep/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/90" />

      {/* Geometric accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-px h-64 opacity-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(var(--gold)), transparent)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-16 w-px h-48 opacity-15"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(var(--gold)), transparent)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-48 h-px opacity-10"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(var(--gold)), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gold/50" />
          <span className="text-xs tracking-[0.3em] uppercase font-body text-gold font-medium">
            Ranchi · India · Global
          </span>
          <div className="h-px w-12 bg-gold/50" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          <span className="text-foreground">Engineering</span>
          <br />
          <span className="text-gold">Intelligence.</span>
          <br />
          <span className="text-foreground">Delivering</span>{" "}
          <span className="text-gold">Impact.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-heading font-medium text-foreground/80 mb-4 tracking-wide"
        >
          Independent. Multidisciplinary. Digital-First.
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {[
            "Advisory",
            "Engineering",
            "Project Management",
            "Digital",
            "ESG",
          ].map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-sm md:text-base font-body text-foreground/60 tracking-wider uppercase">
                {item}
              </span>
              {i < 4 && <span className="text-gold/50 text-xs">|</span>}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gold text-navy-deep hover:bg-gold-bright font-heading font-bold text-base tracking-wide px-8 py-6 shadow-gold group"
            onClick={() => scrollTo("#services")}
            data-ocid="hero.explore_services.primary_button"
          >
            Explore Services
            <ChevronRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/30 text-foreground hover:border-gold hover:text-gold font-heading font-medium text-base tracking-wide px-8 py-6 bg-transparent"
            onClick={() => scrollTo("#contact")}
            data-ocid="hero.contact_us.secondary_button"
          >
            Contact Us
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6 }}
          >
            <ArrowDown size={16} className="text-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
