import { motion, useInView } from "motion/react";
import { useRef } from "react";

const FOCUS_AREAS = [
  {
    num: "01",
    title: "Future of Work",
    desc: "AI-driven project scheduling and autonomous construction monitoring to enhance productivity and safety on capital projects.",
    color: "border-t-gold",
  },
  {
    num: "02",
    title: "Green Technology",
    desc: "Carbon capture utilization and storage (CCUS) engineering to support industrial decarbonization and energy transition.",
    color: "border-t-steel",
  },
  {
    num: "03",
    title: "Smart Cities",
    desc: "Urban Operating Systems (UOS) — integrating mobility, utilities, environment, and governance into a unified digital platform.",
    color: "border-t-gold",
  },
  {
    num: "04",
    title: "Digital Asset Intelligence",
    desc: "Advanced simulation and multi-physics modelling for plant, infrastructure, and asset performance optimization.",
    color: "border-t-steel",
  },
];

const PLATFORMS = [
  {
    name: "AditaSim™",
    tagline: "Simulation & Performance Modelling",
    desc: "Multi-physics simulation, scenario analysis, energy efficiency studies, and performance optimization for plants and infrastructure assets.",
    capabilities: [
      "Multi-physics simulation",
      "Scenario analysis",
      "Energy efficiency studies",
      "Performance optimization",
    ],
    accent: "border-t-2 border-t-steel",
    badgeStyle: "text-steel-light border-steel/30",
  },
  {
    name: "AditaTwin™",
    tagline: "Digital Twin & Asset Intelligence",
    desc: "Real-time digital replicas of plants, buildings, and infrastructure for predictive maintenance, scenario planning, and operational optimization.",
    capabilities: [
      "Real-time digital replicas",
      "Predictive maintenance",
      "Scenario planning",
      "Operational optimization",
    ],
    accent: "border-t-2 border-t-gold",
    badgeStyle: "text-gold border-gold/30",
  },
  {
    name: "AditaBuild™",
    tagline: "Digital Construction & EPC Platform",
    desc: "Integrated project controls, progress monitoring, document management, and owner-contractor collaboration hub.",
    capabilities: [
      "Integrated project controls",
      "Progress monitoring",
      "Document management",
      "Collaboration hub",
    ],
    accent: "border-t-2 border-t-steel",
    badgeStyle: "text-steel-light border-steel/30",
  },
];

const TECH_PARTNERS = [
  "Microsoft",
  "SAP",
  "Oracle",
  "AWS",
  "Google Cloud",
  "Siemens",
  "Autodesk",
  "Bentley",
  "Schneider Electric",
];

export function InnovationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="innovation"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "oklch(var(--navy-900))" }}
    >
      {/* ── Full-bleed image banner ── */}
      <div className="relative h-[320px] sm:h-[400px] overflow-hidden">
        <img
          src="/assets/generated/section-innovation.dim_1400x700.jpg"
          alt="Digital twin and innovation technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(var(--navy-900) / 0.92) 0%, oklch(var(--navy-900) / 0.6) 55%, oklch(var(--navy-900) / 0.25) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, oklch(var(--navy-900)) 0%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-7xl mx-auto px-6 sm:px-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="accent-line" />
                <span className="section-label">R&D Wing</span>
              </div>
              <h2
                className="font-display font-extrabold text-foreground leading-tight"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
              >
                Technology & <span className="text-gold">Innovation Labs</span>
              </h2>
              <p className="mt-3 text-sm text-foreground/65 font-body max-w-xl leading-relaxed">
                Aditattva Innovation Labs incubates next-generation solutions at
                the intersection of engineering, AI, data science, and
                sustainability — solving Grand Challenges in infrastructure and
                technology.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Focus areas ── */}
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {FOCUS_AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className={`p-7 border-t-2 border border-border/40 hover:border-border rounded transition-all duration-300 card-lift ${area.color}`}
              style={{ background: "oklch(var(--navy-800))" }}
            >
              <div className="text-gold font-display font-extrabold text-3xl mb-4 opacity-25">
                {area.num}
              </div>
              <h3 className="font-heading font-bold text-foreground mb-3 text-sm">
                {area.title}
              </h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Proprietary Platforms ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="accent-line" />
            <span className="section-label">Proprietary Technology</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-12">
            Our <span className="text-gold">Platforms</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {PLATFORMS.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.1 }}
              className={`p-8 border border-border/50 hover:border-border rounded transition-all duration-300 card-lift ${platform.accent}`}
              style={{ background: "oklch(var(--navy-800))" }}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {platform.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body mt-1 tracking-wide">
                    {platform.tagline}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-body font-bold px-2.5 py-1 border rounded-sm tracking-wider uppercase ${platform.badgeStyle}`}
                  style={{ background: "oklch(var(--navy-700))" }}
                >
                  Platform
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                {platform.desc}
              </p>
              <ul className="space-y-2 border-t border-border/30 pt-5">
                {platform.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-2.5 text-xs text-foreground/70 font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Tech Partners ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="accent-line" />
              <span className="section-label">Technology Ecosystem</span>
              <span className="accent-line" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              Strategic Technology <span className="text-gold">Partners</span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_PARTNERS.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55 + i * 0.04 }}
                className="px-6 py-3 border border-border/50 hover:border-gold/40 hover:text-foreground rounded transition-all duration-200"
                style={{ background: "oklch(var(--navy-800))" }}
              >
                <span className="font-heading font-semibold text-sm text-foreground/60 hover:text-foreground transition-colors">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
