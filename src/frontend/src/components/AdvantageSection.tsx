import {
  BarChart3,
  Cpu,
  Globe2,
  GraduationCap,
  Layers,
  Leaf,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

const ADVANTAGES = [
  {
    icon: Layers,
    title: "Engineering + IT + Consulting Under One Roof",
    desc: "A truly integrated partner from concept through operations — no need for multiple specialist firms.",
  },
  {
    icon: ShieldCheck,
    title: "100% Independent & Conflict-Free",
    desc: "We never supply equipment, undertake construction, or accept vendor fees. Your interests are always first.",
  },
  {
    icon: Lightbulb,
    title: "Consulting-Led, Execution-Driven",
    desc: "Strategies that are actionable and grounded in real-world engineering and project management depth.",
  },
  {
    icon: Cpu,
    title: "Digital-First & BIM-Enabled",
    desc: "BIM, digital twins, IoT, AI, and advanced analytics embedded across every service and project.",
  },
  {
    icon: Globe2,
    title: "Global Standards, Indian Value",
    desc: "Delivery benchmarked against ISO, World Bank, IFC, and international lending agency standards — at cost-competitive rates.",
  },
  {
    icon: Leaf,
    title: "ESG & Sustainability at Core",
    desc: "Not a compliance checkbox — sustainability is embedded in our design philosophy and delivery model.",
  },
  {
    icon: BarChart3,
    title: "Outcome-Based Engagement",
    desc: "Clear KPIs, shared accountability, and measurable value at every stage of the client relationship.",
  },
  {
    icon: GraduationCap,
    title: "Knowledge Partner & Capacity Builder",
    desc: "We build client capability and institutional self-sufficiency — not dependency on consultants.",
  },
];

export function AdvantageSection() {
  return (
    <section
      id="advantage"
      className="py-24 md:py-32 bg-navy-deep relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(var(--gold)) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
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
              Why Aditattva
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            The Aditattva <span className="text-gold">Advantage</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            A unique combination of independence, integrated expertise, digital
            capability, and global delivery — at Indian value.
          </p>
        </motion.div>

        {/* Advantage Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group bg-navy-mid border border-border rounded-xl p-6 hover:border-gold/50 hover:shadow-gold transition-all duration-300"
              data-ocid={`advantage.item.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <adv.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-sm mb-3 leading-tight">
                {adv.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-navy-mid border border-gold/20 rounded-2xl p-8"
        >
          {[
            { value: "10+", label: "Years of Experience" },
            { value: "10", label: "Practice Areas" },
            { value: "100%", label: "Client Independence" },
            { value: "4", label: "Global Delivery Regions" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
