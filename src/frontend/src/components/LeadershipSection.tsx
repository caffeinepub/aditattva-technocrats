import { Badge } from "@/components/ui/badge";
import { Handshake, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const PHILOSOPHY = [
  {
    icon: ShieldCheck,
    title: "Ethical Governance & Transparency",
    desc: "Accountability and integrity embedded in every client engagement and internal decision.",
  },
  {
    icon: Handshake,
    title: "Long-Term Client Relationships",
    desc: "Built on trust, consistent performance, and genuine alignment of interests.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Risk-Taking",
    desc: "Disciplined ambition — bold in vision, rigorous in execution.",
  },
  {
    icon: Users,
    title: "Empowerment & Accountability",
    desc: "Teams are given ownership and the resources to excel — and held accountable for outcomes.",
  },
];

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

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 md:py-32 bg-background relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-xs tracking-[0.3em] uppercase font-body text-gold font-medium">
              Our Team
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Leadership & <span className="text-gold">QHSE</span>
          </h2>
        </motion.div>

        {/* Leadership bio */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-navy-mid border border-border rounded-xl p-8"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                <span className="font-display text-2xl font-bold text-gold">
                  A
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Founder & Managing Director
                </h3>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  Aditattva Technocrats Private Limited
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge className="text-xs bg-gold/10 text-gold border border-gold/30">
                    10+ Years Experience
                  </Badge>
                  <Badge className="text-xs bg-navy-light border border-border text-foreground/70">
                    Cross-Domain Expert
                  </Badge>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
              Founded and led by an engineering and consulting professional with
              over 10 years of multidisciplinary experience spanning
              infrastructure development, power systems, information technology,
              telecommunications, and advanced audio-visual (AV) systems.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Brings a distinctive cross-domain perspective — bridging physical
              infrastructure and digital technologies, with particular strength
              in IT–OT convergence, smart systems, and technology-enabled
              project delivery. Career encompasses complex projects for
              government bodies, public sector organizations, and infrastructure
              developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Leadership Philosophy
            </h3>
            <div className="grid gap-4">
              {PHILOSOPHY.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 bg-navy-mid border border-border rounded-lg p-4 hover:border-gold/40 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                    <p.icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
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

        {/* QHSE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Quality, Health, Safety &{" "}
              <span className="text-gold">Environment</span>
            </h3>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Our QHSE philosophy in four words:{" "}
              <strong className="text-foreground">
                Zero Harm. Right First Time.
              </strong>
            </p>
          </div>

          <div className="bg-navy-mid border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-navy-light px-6 py-3 border-b border-border">
              <span className="text-xs font-heading font-bold text-gold uppercase tracking-wider">
                Standard
              </span>
              <span className="text-xs font-heading font-bold text-gold uppercase tracking-wider">
                Scope
              </span>
              <span className="text-xs font-heading font-bold text-gold uppercase tracking-wider">
                Status
              </span>
            </div>
            {QHSE_STANDARDS.map((row, i) => (
              <motion.div
                key={row.standard}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="grid grid-cols-3 px-6 py-4 border-b border-border/50 last:border-0 hover:bg-navy-light/30 transition-colors gap-4"
                data-ocid={`qhse.row.${i + 1}`}
              >
                <span className="text-sm font-heading font-semibold text-foreground">
                  {row.standard}
                </span>
                <span className="text-sm text-muted-foreground font-body">
                  {row.scope}
                </span>
                <div>
                  <Badge
                    className={`text-xs font-medium ${
                      row.status === "Active"
                        ? "bg-green-500/15 text-green-400 border border-green-500/30"
                        : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    {row.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
