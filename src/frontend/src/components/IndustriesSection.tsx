import { ExternalLink } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const INDUSTRIES = [
  {
    name: "Infrastructure & Smart Cities",
    services:
      "Master planning, urban transport, smart city platforms, water, waste, roads & bridges",
    image: "/assets/generated/section-smartcity.dim_1400x800.jpg",
    span: "lg:col-span-2",
    sectorId: "infrastructure-smart-cities",
  },
  {
    name: "Power & Renewable Energy",
    services:
      "Solar, wind, hydro, thermal advisory; grid management; energy audits; storage systems",
    image: "/assets/generated/section-energy.dim_1200x700.jpg",
    span: "",
    sectorId: "power-renewable-energy",
  },
  {
    name: "Oil, Gas & Petrochemicals",
    services:
      "Process engineering advisory, FEED, HAZOP, HSE, EIA, and project management",
    image: "/assets/generated/section-industrial.dim_1200x700.jpg",
    span: "",
    sectorId: "oil-gas-petrochemicals",
  },
  {
    name: "Mining, Metals & Cement",
    services:
      "Mine planning advisory, DGMS compliance, digital mine consulting, beneficiation engineering",
    image: "/assets/generated/section-digital.dim_1200x700.jpg",
    span: "",
    sectorId: "mining-metals-cement",
  },
  {
    name: "Manufacturing & Process",
    services:
      "Factory automation, Industry 4.0, OEE improvement, supply chain optimization",
    image: "/assets/generated/section-infrastructure.dim_1400x700.jpg",
    span: "",
    sectorId: "manufacturing-process",
  },
  {
    name: "Water, Environment & Waste",
    services:
      "WTP/STP design advisory, EIA, solid waste management, industrial effluent advisory",
    image: "/assets/generated/section-esg.dim_1200x700.jpg",
    span: "lg:col-span-2",
    sectorId: "water-environment",
  },
];

const CLIENT_SEGMENTS = [
  {
    segment: "Central & State Governments",
    examples:
      "Ministries, Smart City SPVs, PWD, Urban Local Bodies, JRDA, JUIDCO",
    icon: "🏛️",
  },
  {
    segment: "Public Sector Enterprises",
    examples: "Coal India, SAIL, NTPC, DVC, JSEB, NMDC, NALCO, GAIL, ONGC",
    icon: "🏭",
  },
  {
    segment: "Multilateral Agencies",
    examples: "World Bank, ADB, KfW — Lender's Engineer & IE services",
    icon: "🌐",
  },
  {
    segment: "Infrastructure Developers",
    examples:
      "PPP developers, road & port concessionaires, renewable energy IPPs",
    icon: "🏗️",
  },
  {
    segment: "Industrial Enterprises",
    examples: "Steel, cement, chemicals, process industries, auto ancillaries",
    icon: "⚙️",
  },
  {
    segment: "Technology Providers",
    examples:
      "Telecom companies, cloud service providers, smart city platform vendors",
    icon: "💻",
  },
];

export function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative"
      style={{ background: "oklch(var(--navy-900))" }}
    >
      {/* ── Header ── */}
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="accent-line" />
            <span className="section-label">Sectors We Serve</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-display font-extrabold text-foreground leading-tight"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              Industry <span className="text-gold">Sectors</span> &amp; Domains
            </h2>
            <p className="text-sm text-muted-foreground font-body max-w-md leading-relaxed">
              Deep domain expertise across infrastructure, industrial, and
              enterprise technology sectors — combining engineering depth with
              digital innovation.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Image grid ── */}
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.button
              type="button"
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              onClick={() => {
                window.location.href = `/sectors/${industry.sectorId}`;
              }}
              className={`group relative overflow-hidden rounded h-52 sm:h-60 cursor-pointer text-left w-full ${industry.span}`}
              data-ocid={`industries.item.${i + 1}`}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Default overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, oklch(var(--navy-900) / 0.88) 0%, oklch(var(--navy-900) / 0.4) 60%, oklch(var(--navy-900) / 0.15) 100%)",
                }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "oklch(var(--navy-900) / 0.72)",
                }}
              />
              {/* Gold accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-foreground text-base leading-snug">
                    {industry.name}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-0.5"
                  />
                </div>
                <p className="text-xs text-foreground/60 font-body leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {industry.services}
                </p>
                <span className="mt-2 text-[10px] font-body font-semibold text-gold/80 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Sector Report →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Other sectors ticker ── */}
      <div
        className="border-t border-border/40 py-4 ticker-wrap"
        style={{ background: "oklch(var(--navy-800))" }}
      >
        <div className="ticker-inner gap-0">
          {[
            {
              label: "Real Estate & Data Centers",
              id: "real-estate-data-centers",
            },
            { label: "Healthcare & Education", id: "healthcare-education" },
            {
              label: "Agriculture & Rural Development",
              id: "agriculture-rural",
            },
            {
              label: "Government & Public Sector",
              id: "government-public-sector",
            },
            {
              label: "Real Estate & Data Centers",
              id: "real-estate-data-centers",
            },
            { label: "Healthcare & Education", id: "healthcare-education" },
            {
              label: "Agriculture & Rural Development",
              id: "agriculture-rural",
            },
            {
              label: "Government & Public Sector",
              id: "government-public-sector",
            },
          ].map((sector, i) => (
            <button
              type="button"
              // biome-ignore lint/suspicious/noArrayIndexKey: ticker has duplicate items by design
              key={`ticker-${sector.id}-${i}`}
              onClick={() => {
                window.location.href = `/sectors/${sector.id}`;
              }}
              className="inline-flex items-center gap-4 px-8 text-xs font-body font-medium text-muted-foreground uppercase tracking-[0.15em] shrink-0 hover:text-gold transition-colors cursor-pointer"
            >
              {sector.label}
              <span className="w-1 h-1 rounded-full bg-gold/40" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Client Segments ── */}
      <div style={{ background: "oklch(var(--navy-800))" }}>
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="accent-line" />
              <span className="section-label">Who We Serve</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Our <span className="text-gold">Client</span> Base
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CLIENT_SEGMENTS.map((c, i) => (
              <motion.div
                key={c.segment}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.07 }}
                className="p-6 border border-border/50 hover:border-gold/35 rounded transition-all duration-300 card-lift"
                style={{ background: "oklch(var(--navy-700))" }}
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <h4 className="font-heading font-bold text-foreground text-sm mb-2">
                  {c.segment}
                </h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {c.examples}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
