import { motion, useInView } from "motion/react";
import { useRef } from "react";

const QHSE_STANDARDS = [
  {
    standard: "ISO 9001:2015",
    scope: "Quality Management System",
    status: "Under Implementation",
  },
  {
    standard: "ISO 45001:2018",
    scope: "Occupational Health & Safety Management",
    status: "Under Implementation",
  },
  {
    standard: "ISO 14001:2015",
    scope: "Environmental Management System",
    status: "Under Implementation",
  },
  {
    standard: "UN SDGs",
    scope: "Sustainable Development Goals Alignment",
    status: "Active",
  },
  {
    standard: "OSHA / ILO",
    scope: "International HSE Compliance for Global Deployments",
    status: "Active",
  },
  {
    standard: "GRI / BRSR / TCFD",
    scope: "ESG Reporting and Disclosure Frameworks",
    status: "Active",
  },
  {
    standard: "World Bank / IFC",
    scope: "Social and Environmental Safeguard Frameworks",
    status: "Active",
  },
];

const PHILOSOPHY = [
  {
    title: "Ethical Governance & Transparency",
    desc: "Accountability and integrity embedded in every client engagement and internal decision.",
  },
  {
    title: "Long-Term Client Relationships",
    desc: "Built on trust, consistent performance, and genuine alignment of interests.",
  },
  {
    title: "Strategic Risk-Taking",
    desc: "Disciplined ambition — bold in vision, rigorous in execution.",
  },
  {
    title: "Empowerment & Accountability",
    desc: "Teams are given ownership and the resources to excel — and held accountable for outcomes.",
  },
];

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="relative"
      style={{ background: "oklch(var(--navy-800))" }}
    >
      {/* ── Header ── */}
      <div
        className="border-b border-border/40"
        style={{ background: "oklch(var(--navy-900))" }}
      >
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="accent-line" />
              <span className="section-label">Our Team</span>
            </div>
            <h2
              className="font-display font-extrabold text-foreground leading-tight"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              Leadership &amp; <span className="text-gold">Governance</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* ── Founder bio ── */}
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-14 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start gap-5 mb-7">
              <div
                className="w-16 h-16 rounded border border-gold/30 flex items-center justify-center shrink-0"
                style={{ background: "oklch(var(--navy-700))" }}
              >
                <span className="font-display text-2xl font-bold text-gold">
                  A
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Founder &amp; Managing Director
                </h3>
                <p className="text-xs text-muted-foreground font-body mt-1">
                  Aditattva Technocrats Private Limited
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span
                    className="text-[10px] font-body font-bold px-2.5 py-1 border border-gold/30 text-gold rounded-sm tracking-wider uppercase"
                    style={{ background: "oklch(var(--navy-700))" }}
                  >
                    10+ Years Experience
                  </span>
                  <span
                    className="text-[10px] font-body font-bold px-2.5 py-1 border border-border/50 text-foreground/60 rounded-sm tracking-wider uppercase"
                    style={{ background: "oklch(var(--navy-700))" }}
                  >
                    Cross-Domain Expert
                  </span>
                </div>
              </div>
            </div>

            <div
              className="p-6 border border-border/50 rounded mb-5"
              style={{ background: "oklch(var(--navy-700))" }}
            >
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                Founded and led by an engineering and consulting professional
                with over 10 years of multidisciplinary experience spanning
                infrastructure development, power systems, information
                technology, telecommunications, and advanced audio-visual (AV)
                systems.
              </p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Brings a distinctive cross-domain perspective — bridging
                physical infrastructure and digital technologies, with
                particular strength in IT–OT convergence, smart systems, and
                technology-enabled project delivery. Career encompasses complex
                projects for government bodies, public sector organizations, and
                infrastructure developers across urban infrastructure, power
                distribution, digital infrastructure, IT systems, and
                large-scale smart systems deployments.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                "Infrastructure Development",
                "Power Systems & IT/OT",
                "Smart Systems",
              ].map((domain) => (
                <div
                  key={domain}
                  className="p-3 border border-border/40 rounded text-center"
                  style={{ background: "oklch(var(--navy-700))" }}
                >
                  <p className="text-[10px] text-foreground/60 font-body leading-tight">
                    {domain}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="accent-line" />
              <span className="section-label">Leadership Philosophy</span>
            </div>
            <div className="space-y-4">
              {PHILOSOPHY.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.09 }}
                  className="flex gap-4 p-5 border border-border/40 hover:border-gold/30 rounded transition-all duration-300"
                  style={{ background: "oklch(var(--navy-700))" }}
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground text-sm mb-1">
                      {p.title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── QHSE Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="accent-line" />
            <span className="section-label">QHSE Standards</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-8">
            Quality, Health, Safety &amp;{" "}
            <span className="text-gold">Environment</span>
          </h3>

          <div className="border border-border/50 rounded overflow-hidden">
            <div
              className="grid grid-cols-3 px-6 py-3 border-b border-border/50"
              style={{ background: "oklch(var(--navy-700))" }}
            >
              <span className="text-[10px] font-body font-bold text-gold uppercase tracking-[0.18em]">
                Standard
              </span>
              <span className="text-[10px] font-body font-bold text-gold uppercase tracking-[0.18em]">
                Scope
              </span>
              <span className="text-[10px] font-body font-bold text-gold uppercase tracking-[0.18em]">
                Status
              </span>
            </div>
            {QHSE_STANDARDS.map((row, i) => (
              <motion.div
                key={row.standard}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="grid grid-cols-3 px-6 py-4 border-b border-border/30 last:border-0 hover:bg-navy-600/20 transition-colors gap-4"
                style={{ background: "oklch(var(--navy-800))" }}
                data-ocid={`qhse.row.${i + 1}`}
              >
                <span className="text-sm font-heading font-semibold text-foreground">
                  {row.standard}
                </span>
                <span className="text-sm text-muted-foreground font-body">
                  {row.scope}
                </span>
                <div>
                  <span
                    className={`text-[10px] font-body font-bold px-2.5 py-1 border rounded-sm tracking-wider uppercase ${
                      row.status === "Active"
                        ? "text-green-400 border-green-500/30 bg-green-500/10"
                        : "text-yellow-400 border-yellow-500/30 bg-yellow-500/10"
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
