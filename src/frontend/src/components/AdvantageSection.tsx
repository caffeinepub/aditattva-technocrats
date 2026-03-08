import { motion, useInView } from "motion/react";
import { useRef } from "react";

const FEATURE_BLOCKS = [
  {
    image: "/assets/generated/section-engineering-design.dim_1200x700.jpg",
    tag: "Integrated Expertise",
    title: "Engineering + IT + Consulting Under One Roof",
    desc: "A truly integrated partner from concept through operations — no need for multiple specialist firms. Our teams span civil, mechanical, electrical, IT, data science, project management, and sustainability under a single accountable partner.",
    points: [
      "Single point of accountability across the lifecycle",
      "No coordination friction between disciplines",
      "Faster decisions, fewer errors, better outcomes",
    ],
    imgRight: false,
  },
  {
    image: "/assets/generated/section-global.dim_1400x600.jpg",
    tag: "Global Standards",
    title: "Global Benchmarks at Indian Value",
    desc: "Delivery benchmarked against ISO, World Bank, IFC, and international lending agency standards — at cost-competitive rates. India-rooted talent delivering globally comparable quality across four international regions.",
    points: [
      "ISO 9001, 45001, 14001 aligned processes",
      "World Bank & IFC environmental safeguard frameworks",
      "Onsite · Offshore · Hybrid delivery models",
    ],
    imgRight: true,
  },
  {
    image: "/assets/generated/section-esg.dim_1200x700.jpg",
    tag: "Sustainability First",
    title: "ESG & Climate Advisory at Core",
    desc: "Sustainability is not a compliance checkbox at Aditattva — it is embedded in our design philosophy and delivery model from day one. We help clients achieve net-zero targets, comply with evolving regulations, and build long-term climate resilience.",
    points: [
      "Net-zero roadmaps and carbon accounting",
      "LEED, IGBC, GRIHA green building advisory",
      "GHG inventory and Science Based Targets",
    ],
    imgRight: false,
  },
];

const ADVANTAGES = [
  {
    value: "100%",
    label: "Client Independence",
    desc: "Zero conflicts, zero compromises",
  },
  { value: "10+", label: "Years Experience", desc: "Deep domain expertise" },
  {
    value: "10",
    label: "Practice Areas",
    desc: "Fully integrated capabilities",
  },
  { value: "4", label: "Global Regions", desc: "India, ME, Africa, SE Asia" },
];

export function AdvantageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="advantage"
      ref={sectionRef}
      className="relative"
      style={{ background: "oklch(var(--navy-900))" }}
    >
      {/* ── Header ── */}
      <div
        className="border-b border-border/40"
        style={{ background: "oklch(var(--navy-800))" }}
      >
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="accent-line" />
              <span className="section-label">Why Aditattva</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2
                className="font-display font-extrabold text-foreground leading-tight"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
              >
                The Aditattva <span className="text-gold">Advantage</span>
              </h2>
              <p className="text-sm text-muted-foreground font-body max-w-md leading-relaxed">
                A unique combination of independence, integrated expertise,
                digital capability, and global delivery — at Indian value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div
        className="border-b border-border/40"
        style={{ background: "oklch(var(--navy-700))" }}
      >
        <div className="container max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {ADVANTAGES.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                className={`py-8 px-6 text-center border-r border-border/30 last:border-0 ${
                  i % 2 === 0 ? "" : ""
                }`}
              >
                <div className="stat-number text-3xl xl:text-4xl text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-foreground font-body font-semibold mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Feature blocks: alternating image + text ── */}
      {FEATURE_BLOCKS.map((block, i) => (
        <div
          key={block.title}
          className="border-b border-border/40 last:border-0"
          style={{
            background:
              i % 2 === 0 ? "oklch(var(--navy-900))" : "oklch(var(--navy-800))",
          }}
        >
          <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-0">
            <div
              className={`flex flex-col ${
                block.imgRight ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-0 items-stretch min-h-[380px]`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: block.imgRight ? 32 : -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
                className="lg:w-1/2 relative overflow-hidden min-h-[260px] lg:min-h-0"
              >
                <img
                  src={block.image}
                  alt={block.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: block.imgRight
                      ? "linear-gradient(to left, oklch(var(--navy-900) / 0.1), oklch(var(--navy-900) / 0.4))"
                      : "linear-gradient(to right, oklch(var(--navy-900) / 0.1), oklch(var(--navy-900) / 0.4))",
                  }}
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: block.imgRight ? -24 : 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                className="lg:w-1/2 flex items-center py-14 lg:py-16 px-0 lg:px-12 xl:px-16"
              >
                <div>
                  <div className="section-label mb-4">{block.tag}</div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5 leading-snug">
                    {block.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-7">
                    {block.desc}
                  </p>
                  <ul className="space-y-3">
                    {block.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-sm text-foreground/75 font-body"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      {/* ── QHSE Zero harm strip ── */}
      <div className="py-16" style={{ background: "oklch(var(--navy-700))" }}>
        <div className="container max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label mb-3">QHSE Philosophy</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                <span className="text-gold">Zero Harm.</span>{" "}
                <span className="text-foreground">Right First Time.</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground font-body max-w-lg leading-relaxed">
                Our Quality, Health, Safety & Environment philosophy drives
                every engagement — from initial advisory through commissioning
                and operations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="shrink-0 flex flex-wrap gap-3"
            >
              {[
                "ISO 9001",
                "ISO 45001",
                "ISO 14001",
                "UN SDGs",
                "GRI / BRSR",
                "IFC Standards",
              ].map((std) => (
                <span
                  key={std}
                  className="px-4 py-2 text-xs font-body font-semibold text-foreground/70 border border-border/50 hover:border-gold/40 rounded transition-colors"
                  style={{ background: "oklch(var(--navy-800))" }}
                >
                  {std}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
