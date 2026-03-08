import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronDown, Play } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const STATS = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "", label: "Practice Areas" },
  { value: 100, suffix: "%", label: "Client Independence" },
  { value: 4, suffix: "", label: "Global Regions" },
];

function StatItem({
  value,
  suffix,
  label,
  animate,
}: {
  value: number;
  suffix: string;
  label: string;
  animate: boolean;
}) {
  const count = useCountUp(value, 1800, animate);
  return (
    <div className="text-center lg:text-left">
      <div className="stat-number text-3xl xl:text-4xl text-foreground">
        <span className="text-gold">{count}</span>
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="text-xs text-foreground/55 uppercase tracking-[0.18em] mt-1 font-body">
        {label}
      </div>
    </div>
  );
}

const SLIDES = [
  {
    id: "advisory",
    image: "/assets/generated/hero-infrastructure.dim_1920x900.jpg",
    headline: ["Independent", "Engineering", "& Digital Consulting"],
    headlineGold: 1,
    subheadline:
      "Advisory · Engineering Design · Project Management · Digital Transformation · ESG",
    eyebrow: "Engineering Intelligence · Delivering Impact",
  },
  {
    id: "pmc",
    image: "/assets/generated/hero-slide-infrastructure.dim_1920x900.jpg",
    headline: ["End-to-End Project", "Management &", "Owner's Engineering"],
    headlineGold: 1,
    subheadline:
      "PMC · PMO · Owner's Engineer · Lender's Engineer · EPCM Advisory",
    eyebrow: "Project & Program Management",
  },
  {
    id: "digital",
    image: "/assets/generated/hero-slide-digital.dim_1920x900.jpg",
    headline: ["Digital Transformation", "& IT/OT", "Consulting"],
    headlineGold: 0,
    subheadline:
      "Cloud · AI · Cybersecurity · IoT · Industry 4.0 · Smart Systems",
    eyebrow: "Digital & Technology Advisory",
  },
  {
    id: "energy",
    image: "/assets/generated/hero-slide-energy.dim_1920x900.jpg",
    headline: ["Engineering India's", "Energy", "Transition"],
    headlineGold: 1,
    subheadline:
      "Solar · Wind · Hydro · Grid Management · Energy Audits · Storage Systems",
    eyebrow: "Power & Renewable Energy",
  },
  {
    id: "esg",
    image: "/assets/generated/hero-slide-esg.dim_1920x900.jpg",
    headline: ["ESG, Sustainability", "& Climate", "Advisory"],
    headlineGold: 2,
    subheadline:
      "Net-Zero Roadmaps · Carbon Accounting · Green Building · Climate Resilience",
    eyebrow: "ESG & Sustainability",
  },
];

const scrollTo = (id: string) => {
  document
    .querySelector(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToSlide = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % SLIDES.length;
    goToSlide(next, 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + SLIDES.length) % SLIDES.length;
    goToSlide(prev, -1);
  }, [currentSlide, goToSlide]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    };
  }, [nextSlide]);

  const slide = SLIDES[currentSlide];

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.04,
      x: dir * 30,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.97,
      x: dir * -30,
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Slide backgrounds with crossfade */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      </AnimatePresence>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-navy-900/65 z-[1]" />
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(105deg, oklch(var(--navy-900) / 0.95) 0%, oklch(var(--navy-900) / 0.72) 55%, oklch(var(--navy-900) / 0.25) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-64 z-[2]"
        style={{
          background:
            "linear-gradient(to top, oklch(var(--navy-900)) 0%, transparent 100%)",
        }}
      />

      {/* Gold accent bar — left edge */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-1 z-[3]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(var(--gold) / 0.8), transparent)",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 flex-1 flex items-center"
        style={{ zIndex: 4 }}
      >
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`eyebrow-${slide.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="flex items-center gap-3 mb-7"
              >
                <span className="accent-line" />
                <span className="section-label">{slide.eyebrow}</span>
              </motion.div>
            </AnimatePresence>

            {/* Main headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`headline-${slide.id}`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="font-display font-extrabold leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 6vw, 4.25rem)" }}
              >
                {slide.headline.map((line, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: headline lines are positional
                  <span
                    key={`headline-line-${slide.id}-${i}`}
                    className={
                      i === slide.headlineGold ? "text-gold" : "text-foreground"
                    }
                  >
                    {line}
                    {i < slide.headline.length - 1 && <br />}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Sub-headline */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${slide.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-foreground/70 font-body leading-relaxed mb-10 max-w-xl"
              >
                {slide.subheadline}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Button
                size="lg"
                className="bg-gold text-navy-900 hover:bg-gold-bright font-body font-bold text-sm tracking-wide px-7 h-12 group shadow-gold-sm"
                onClick={() => scrollTo("#services")}
                data-ocid="hero.explore_services.primary_button"
              >
                Explore Our Services
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border border-foreground/25 text-foreground hover:border-gold hover:text-gold font-body font-semibold text-sm tracking-wide px-7 h-12 bg-transparent hover:bg-gold/5"
                onClick={() => scrollTo("#about")}
                data-ocid="hero.about.secondary_button"
              >
                <Play size={14} className="mr-2" />
                Our Story
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-foreground/15 max-w-xl"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                >
                  <StatItem
                    value={s.value}
                    suffix={s.suffix}
                    label={s.label}
                    animate={statsInView}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide controls — dots + arrows */}
      <div
        className="relative z-10 flex items-center justify-center gap-6 pb-6"
        style={{ zIndex: 5 }}
      >
        {/* Prev arrow */}
        <button
          type="button"
          onClick={prevSlide}
          className="flex items-center justify-center w-9 h-9 rounded-full border border-foreground/20 text-foreground/60 hover:border-gold hover:text-gold transition-colors duration-200 bg-navy-900/40 backdrop-blur-sm"
          aria-label="Previous slide"
          data-ocid="hero.slider.pagination_prev"
        >
          <ArrowLeft size={15} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              type="button"
              key={s.id}
              onClick={() => goToSlide(i, i > currentSlide ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
              data-ocid="hero.slider.tab"
              className={`transition-all duration-300 rounded-full ${
                i === currentSlide
                  ? "w-7 h-2 bg-gold"
                  : "w-2 h-2 bg-foreground/30 hover:bg-foreground/60"
              }`}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          type="button"
          onClick={nextSlide}
          className="flex items-center justify-center w-9 h-9 rounded-full border border-foreground/20 text-foreground/60 hover:border-gold hover:text-gold transition-colors duration-200 bg-navy-900/40 backdrop-blur-sm"
          aria-label="Next slide"
          data-ocid="hero.slider.pagination_next"
        >
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 flex justify-center pb-6"
        style={{ zIndex: 5 }}
      >
        <button
          type="button"
          onClick={() => scrollTo("#about")}
          className="flex flex-col items-center gap-2 text-foreground/40 hover:text-gold transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-body">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>
      </motion.div>

      {/* Service tags strip */}
      <div
        className="relative z-10 border-t border-foreground/10"
        style={{ background: "oklch(var(--navy-900) / 0.9)", zIndex: 5 }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide">
            {[
              "Advisory & Consulting",
              "Engineering Design",
              "Project Management",
              "Digital Transformation",
              "ESG & Sustainability",
              "Smart Systems",
              "Capacity Building",
              "International Advisory",
            ].map((tag, i) => (
              <button
                type="button"
                key={tag}
                onClick={() => scrollTo("#services")}
                className={`shrink-0 px-5 py-3.5 text-[11px] font-body font-semibold tracking-wider uppercase transition-colors duration-200 whitespace-nowrap ${
                  i === 0
                    ? "text-gold border-b-2 border-gold"
                    : "text-foreground/45 hover:text-foreground/80 border-b-2 border-transparent hover:border-foreground/20"
                }`}
                data-ocid="hero.service_tag.tab"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
