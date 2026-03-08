import { motion, useInView } from "motion/react";
import { useRef } from "react";

const DIFFERENTIATORS = [
  {
    num: "01",
    title: "Independent Advisory",
    desc: "We represent only your interests — never contractors, vendors, or suppliers. Zero conflicts, zero compromises.",
  },
  {
    num: "02",
    title: "Multidisciplinary Depth",
    desc: "Engineering, IT, and management consulting under one trusted roof across 10 integrated practice areas.",
  },
  {
    num: "03",
    title: "Digital-First Delivery",
    desc: "BIM, digital twins, AI, and IoT embedded across every service line and project lifecycle.",
  },
  {
    num: "04",
    title: "ESG at Core",
    desc: "Sustainability embedded from concept design through operations — not a compliance checkbox.",
  },
  {
    num: "05",
    title: "Globally Scalable",
    desc: "India-rooted, globally benchmarked with onsite / offshore / hybrid delivery across four regions.",
  },
  {
    num: "06",
    title: "First-Principles Thinking",
    desc: "Rigorous analysis grounded in engineering fundamentals — stripping assumptions to solve from the ground up.",
  },
];

const VALUES = [
  { label: "Integrity", color: "border-l-gold" },
  { label: "Innovation", color: "border-l-steel" },
  { label: "Excellence", color: "border-l-gold" },
  { label: "Collaboration", color: "border-l-steel" },
  { label: "Sustainability", color: "border-l-gold" },
  { label: "Resilience", color: "border-l-steel" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "oklch(var(--navy-900))" }}
    >
      {/* ── Hero strip: Image + Tagline ── */}
      <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
        <img
          src="/assets/generated/section-about.dim_900x700.jpg"
          alt="Engineering leadership at a project site"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(var(--navy-900) / 0.9) 0%, oklch(var(--navy-900) / 0.55) 60%, oklch(var(--navy-900) / 0.3) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-7xl mx-auto px-6 sm:px-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="accent-line" />
                <span className="section-label">Our Identity</span>
              </div>
              <h2
                className="font-display font-extrabold leading-tight text-foreground"
                style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)" }}
              >
                About <span className="text-gold">Aditattva</span>
              </h2>
              <p className="mt-4 max-w-lg text-base text-foreground/65 font-body leading-relaxed">
                Strategy-led, independent consulting at the convergence of
                physical assets and digital intelligence — headquartered in
                Ranchi, India's mineral and industrial heartland.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Name Origin + Who We Are ── */}
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Name origin */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Our Name. Our Identity.
            </h3>
            <div className="space-y-6 mb-8">
              <div className="pl-5 border-l-2 border-gold">
                <div className="text-gold font-display font-extrabold text-3xl mb-1">
                  Adi
                </div>
                <div className="font-heading font-semibold text-foreground mb-1">
                  The Primordial / Foundational
                </div>
                <div className="text-sm text-muted-foreground font-body leading-relaxed">
                  Core engineering principles that have stood the test of time.
                </div>
              </div>
              <div className="pl-5 border-l-2 border-steel">
                <div className="text-steel-light font-display font-extrabold text-3xl mb-1">
                  Tattva
                </div>
                <div className="font-heading font-semibold text-foreground mb-1">
                  The Fundamental Truth
                </div>
                <div className="text-sm text-muted-foreground font-body leading-relaxed">
                  Commitment to rigorous, first-principles thinking.
                </div>
              </div>
            </div>
            <blockquote className="relative pl-6 border-l border-gold/40">
              <p className="text-sm text-foreground/75 font-body italic leading-relaxed">
                "Together, Aditattva embodies First-Principles Thinking —
                stripping away assumptions to solve complex engineering and
                technology challenges from the ground up."
              </p>
            </blockquote>
          </motion.div>

          {/* Who we are + info grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-5">
              Who We Are
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
              Aditattva Technocrats is a strategy-led, independent consulting
              firm that brings together engineers, architects, planners, project
              managers, IT professionals, data scientists, and domain experts to
              deliver integrated, lifecycle-spanning solutions. We act as an
              independent strategic partner — not a contractor or supplier —
              providing unbiased technical, commercial, and strategic counsel.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  label: "Legal Entity",
                  val: "Aditattva Technocrats Pvt. Ltd.",
                },
                { label: "Headquarters", val: "Ranchi, Jharkhand, India" },
                { label: "Delivery", val: "Onsite · Offshore · Hybrid" },
                { label: "Global Reach", val: "India · ME · Africa · SE Asia" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded border border-border/60 hover:border-gold/40 transition-colors"
                  style={{ background: "oklch(var(--navy-800))" }}
                >
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-body mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-foreground font-heading font-semibold leading-snug">
                    {item.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Core values pills */}
            <div className="flex flex-wrap gap-2">
              {VALUES.map((v) => (
                <span
                  key={v.label}
                  className={`pl-3 pr-4 py-1.5 text-xs font-body font-semibold text-foreground/75 rounded border-l-2 border border-border/50 hover:text-gold transition-colors ${v.color}`}
                  style={{ background: "oklch(var(--navy-700))" }}
                >
                  {v.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Differentiators ── */}
      <div
        className="border-t border-border/40"
        style={{ background: "oklch(var(--navy-800))" }}
      >
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="accent-line" />
              <span className="section-label">What Sets Us Apart</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Our <span className="text-gold">Differentiators</span>
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.07 }}
                className="group p-7 border border-border/50 hover:border-gold/40 rounded transition-all duration-300 hover:shadow-gold card-lift"
                style={{ background: "oklch(var(--navy-700))" }}
              >
                <div className="text-gold font-display font-extrabold text-4xl mb-4 opacity-30 group-hover:opacity-60 transition-opacity">
                  {item.num}
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Independence Commitment ── */}
      <div style={{ background: "oklch(var(--navy-900))" }}>
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="accent-line" />
              <span className="section-label">Pure-Play Consulting</span>
              <span className="accent-line" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Our <span className="text-gold">Independence</span> Commitment
            </h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-body">
              Independence is our most critical asset and the foundation of
              trust with every client.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {[
              {
                title: "No EPC Works",
                desc: "No conflict of interest in recommending solutions or designs.",
              },
              {
                title: "No Equipment Supply",
                desc: "Technology recommendations driven solely by client value.",
              },
              {
                title: "No Vendor Commissions",
                desc: "Every recommendation is transparent and commercially independent.",
              },
              {
                title: "Client-Only Representation",
                desc: "Our success is defined entirely by your outcomes.",
              },
              {
                title: "Lender's Engineer Services",
                desc: "Trusted by banks, DFIs, and multilateral agencies.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.06 }}
                className="p-5 border border-gold/15 hover:border-gold/40 rounded text-center transition-all duration-300"
                style={{ background: "oklch(var(--navy-800))" }}
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mx-auto mb-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>
                <h4 className="font-heading font-bold text-foreground text-xs mb-2">
                  {item.title}
                </h4>
                <p className="text-[11px] text-muted-foreground font-body leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Vision & Mission ── */}
      <div
        className="border-t border-border/40"
        style={{ background: "oklch(var(--navy-800))" }}
      >
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="p-8 border border-border/50 rounded hover:border-gold/30 transition-colors"
              style={{ background: "oklch(var(--navy-700))" }}
            >
              <div className="text-[10px] tracking-[0.22em] uppercase text-gold font-body font-semibold mb-4">
                Vision
              </div>
              <p className="font-display text-lg font-semibold text-foreground leading-relaxed">
                To be a globally trusted engineering and digital consulting
                partner — enabling sustainable growth, intelligent
                infrastructure, and digitally empowered enterprises across India
                and the world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="p-8 border border-border/50 rounded hover:border-steel/40 transition-colors"
              style={{ background: "oklch(var(--navy-700))" }}
            >
              <div className="text-[10px] tracking-[0.22em] uppercase text-steel-light font-body font-semibold mb-4">
                Mission
              </div>
              <ul className="space-y-3">
                {[
                  "Deliver world-class engineering, PM, and IT advisory with precision.",
                  "Act as a trusted, independent advisor — always representing the client's interests.",
                  "Engineer sustainable, resilient, and intelligent infrastructure for future generations.",
                  "Enable enterprise-wide digital transformation through scalable, future-ready solutions.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-muted-foreground font-body"
                  >
                    <span className="text-gold mt-0.5 shrink-0 text-xs">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
