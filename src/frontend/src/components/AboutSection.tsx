import {
  Award,
  Compass,
  Eye,
  Globe2,
  Layers,
  Leaf,
  Lightbulb,
  RefreshCw,
  Shield,
  Star,
  Target,
  TreePine,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const DIFFERENTIATORS = [
  {
    icon: Shield,
    title: "Independent Advisory",
    desc: "We represent only your interests — never contractors, vendors, or suppliers.",
  },
  {
    icon: Layers,
    title: "Multidisciplinary",
    desc: "Engineering, IT, and management consulting under one trusted roof.",
  },
  {
    icon: Zap,
    title: "Digital-First",
    desc: "BIM, digital twins, AI, and IoT embedded across every service line.",
  },
  {
    icon: Leaf,
    title: "ESG-Committed",
    desc: "Sustainability embedded from concept design through operations.",
  },
  {
    icon: Globe2,
    title: "Globally Scalable",
    desc: "India-rooted, globally benchmarked with onsite / offshore / hybrid delivery.",
  },
  {
    icon: Compass,
    title: "First-Principles Driven",
    desc: "Rigorous analysis grounded in engineering depth, not assumptions.",
  },
];

const COMMITMENTS = [
  {
    title: "No EPC or Construction Works",
    desc: "No conflict of interest in recommending solutions, contractors, or designs.",
  },
  {
    title: "No Equipment Supply",
    desc: "Technology and vendor recommendations driven solely by client value.",
  },
  {
    title: "No Vendor Commissions",
    desc: "Every recommendation is transparent, unbiased, and commercially independent.",
  },
  {
    title: "Client-Only Representation",
    desc: "Our success is defined entirely by your outcomes — not our order books.",
  },
  {
    title: "Lender's Engineer & IE Services",
    desc: "Trusted by banks, DFIs, and multilateral agencies to protect their capital.",
  },
];

const VALUES = [
  {
    icon: Shield,
    label: "Integrity",
    desc: "Ethical, transparent, independent advisory. No conflicts. No compromises.",
  },
  {
    icon: Lightbulb,
    label: "Innovation",
    desc: "Technology-driven problem solving embedded in our culture.",
  },
  {
    icon: Award,
    label: "Excellence",
    desc: "Delivery aligned to global standards in quality, safety, and technical performance.",
  },
  {
    icon: Users,
    label: "Collaboration",
    desc: "Partnership-led engagement with clients, communities, and stakeholders.",
  },
  {
    icon: TreePine,
    label: "Sustainability",
    desc: "Environmental, social, and economic responsibility in every decision.",
  },
  {
    icon: RefreshCw,
    label: "Resilience",
    desc: "Future-ready, adaptable solutions built to withstand disruption.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-navy-deep relative overflow-hidden"
    >
      {/* Subtle bg pattern */}
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
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-xs tracking-[0.3em] uppercase font-body text-gold font-medium">
              Our Identity
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gold">Aditattva</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Strategy-led, independent consulting at the convergence of physical
            assets and digital intelligence.
          </p>
        </motion.div>

        {/* Name Origin — Two-column */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-navy-mid border border-border rounded-lg p-8"
          >
            <h3 className="font-display text-2xl font-bold text-gold mb-6">
              Our Name. Our Identity.
            </h3>
            <p className="text-muted-foreground font-body mb-6">
              The name{" "}
              <em className="text-foreground not-italic font-semibold">
                Aditattva
              </em>{" "}
              is derived from two powerful Sanskrit roots:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-4 items-start">
                <span className="text-gold text-2xl font-serif font-bold shrink-0 w-8">
                  Adi
                </span>
                <div>
                  <p className="text-foreground font-heading font-semibold">
                    The Primordial / Foundational
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    Core engineering principles that have stood the test of
                    time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-gold text-2xl font-serif font-bold shrink-0 w-8">
                  Tattva
                </span>
                <div>
                  <p className="text-foreground font-heading font-semibold">
                    The Fundamental Truth
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    Commitment to rigorous, first-principles thinking.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-foreground/80 font-body text-sm leading-relaxed border-l-2 border-gold pl-4 italic">
              Together, Aditattva embodies First-Principles Thinking — stripping
              away assumptions to solve complex engineering and technology
              challenges from the ground up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Who We Are
              </h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Aditattva Technocrats is a strategy-led, independent consulting
                firm headquartered in Ranchi, Jharkhand — India's mineral and
                industrial heartland. We bring together engineers, architects,
                planners, project managers, IT professionals, data scientists,
                and domain experts to deliver integrated, lifecycle-spanning
                solutions.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Headquarters", val: "Ranchi, Jharkhand" },
                  { label: "Delivery", val: "Onsite | Offshore | Hybrid" },
                  {
                    label: "Global Reach",
                    val: "India | ME | Africa | SE Asia",
                  },
                  { label: "Engagement", val: "Advisory-Led & Outcome-Based" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-navy-light/50 rounded-md p-3 border border-border"
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-foreground font-heading font-medium">
                      {item.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Our <span className="text-gold">Differentiators</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-navy-mid border border-border rounded-lg p-6 hover:border-gold/50 hover:shadow-gold transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <item.icon size={20} className="text-gold" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Independence Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our <span className="text-gold">Independence</span> Commitment
            </h3>
            <p className="text-muted-foreground font-body">
              Independence is our most critical asset and the foundation of
              trust.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {COMMITMENTS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-navy-mid border border-gold/20 rounded-lg p-5 text-center hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-3">
                  <Eye size={14} className="text-gold" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-navy-mid border border-border rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target size={20} className="text-gold" />
              <h3 className="font-heading font-bold text-xl text-gold">
                Vision
              </h3>
            </div>
            <p className="text-foreground/80 font-body leading-relaxed">
              To be a globally trusted engineering and digital consulting
              partner — enabling sustainable growth, intelligent infrastructure,
              and digitally empowered enterprises across India and the world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-navy-mid border border-border rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Compass size={20} className="text-gold" />
              <h3 className="font-heading font-bold text-xl text-gold">
                Mission
              </h3>
            </div>
            <ul className="space-y-2">
              {[
                "Deliver world-class engineering, project management, and IT advisory with precision and reliability.",
                "Act as a trusted, independent advisor — always representing the client's best interests.",
                "Engineer sustainable, resilient, and intelligent infrastructure for future generations.",
                "Enable enterprise-wide digital transformation through scalable, secure, and future-ready solutions.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-muted-foreground font-body"
                >
                  <span className="text-gold mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Core <span className="text-gold">Values</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4 bg-navy-mid border border-border rounded-lg p-5 hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                  <v.icon size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">
                    {v.label}
                  </h4>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
