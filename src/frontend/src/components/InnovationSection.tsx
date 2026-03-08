import { Badge } from "@/components/ui/badge";
import { BarChart3, Building2, Cpu, FlaskConical } from "lucide-react";
import { motion } from "motion/react";

const FOCUS_AREAS = [
  {
    icon: Cpu,
    title: "Future of Work",
    desc: "AI-driven project scheduling and autonomous construction monitoring to enhance productivity and safety on capital projects.",
  },
  {
    icon: FlaskConical,
    title: "Green Technology",
    desc: "Carbon capture utilization and storage (CCUS) engineering to support industrial decarbonization and energy transition.",
  },
  {
    icon: Building2,
    title: "Smart Cities",
    desc: "Urban Operating Systems (UOS) — integrating mobility, utilities, environment, and governance into a unified digital platform.",
  },
  {
    icon: BarChart3,
    title: "Digital Asset Intelligence",
    desc: "Advanced simulation and multi-physics modelling for plant, infrastructure, and asset performance optimization.",
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
    color: "border-blue-500/30 hover:border-blue-400/60",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
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
    color: "border-gold/30 hover:border-gold/60",
    badge: "bg-gold/15 text-gold border-gold/30",
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
    color: "border-green-500/30 hover:border-green-400/60",
    badge: "bg-green-500/15 text-green-300 border-green-500/30",
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
  return (
    <section
      id="innovation"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "oklch(var(--gold))" }}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative">
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
              R&D Wing
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Technology & <span className="text-gold">Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Aditattva Innovation Labs incubates next-generation solutions at the
            intersection of engineering, AI, data science, and sustainability.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {FOCUS_AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy-mid border border-border rounded-xl p-6 text-center hover:border-gold/50 hover:shadow-gold transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <area.icon size={26} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Proprietary Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Proprietary <span className="text-gold">Platforms</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {PLATFORMS.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-navy-mid border rounded-xl p-7 transition-all duration-300 ${platform.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {platform.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-body mt-1 tracking-wide">
                      {platform.tagline}
                    </p>
                  </div>
                  <Badge
                    className={`text-xs font-medium border ${platform.badge}`}
                  >
                    Platform
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                  {platform.desc}
                </p>
                <ul className="space-y-2">
                  {platform.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-center gap-2 text-xs text-foreground/70 font-body"
                    >
                      <span className="text-gold text-xs">▸</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-display text-xl md:text-2xl font-bold text-center text-foreground mb-8">
            Strategic Technology <span className="text-gold">Partners</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_PARTNERS.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-navy-mid border border-border rounded-lg px-5 py-3 hover:border-gold/50 hover:bg-navy-light transition-all duration-200 cursor-default"
              >
                <span className="font-heading font-semibold text-sm text-foreground/80">
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
