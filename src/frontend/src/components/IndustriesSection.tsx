import {
  Building2,
  Droplets,
  Factory,
  Flame,
  Heart,
  Landmark,
  Mountain,
  Server,
  Sprout,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const INDUSTRIES = [
  {
    icon: Building2,
    name: "Infrastructure & Smart Cities",
    services:
      "Master planning, urban transport, smart city platforms, water, waste, roads & bridges",
    color: "from-blue-900/20 to-navy-mid",
  },
  {
    icon: Zap,
    name: "Power & Renewable Energy",
    services:
      "Thermal, hydro, solar, wind advisory; grid management; energy audits; storage systems",
    color: "from-yellow-900/20 to-navy-mid",
  },
  {
    icon: Flame,
    name: "Oil, Gas & Petrochemicals",
    services:
      "Process engineering advisory, FEED, HAZOP, HSE, EIA, and project management",
    color: "from-orange-900/20 to-navy-mid",
  },
  {
    icon: Mountain,
    name: "Mining, Metals & Cement",
    services:
      "Mine planning advisory, mineral processing, DGMS compliance, digital mine consulting",
    color: "from-stone-800/20 to-navy-mid",
  },
  {
    icon: Droplets,
    name: "Water & Environment",
    services:
      "WTP/STP design advisory, environmental compliance, EIA, and reclamation planning",
    color: "from-teal-900/20 to-navy-mid",
  },
  {
    icon: Factory,
    name: "Manufacturing & Process",
    services:
      "Factory automation advisory, Industry 4.0, OEE improvement, and supply chain optimization",
    color: "from-gray-800/20 to-navy-mid",
  },
  {
    icon: Server,
    name: "Real Estate & Data Centers",
    services:
      "MEP design, data center tier advisory, campus smart systems, BIM coordination",
    color: "from-indigo-900/20 to-navy-mid",
  },
  {
    icon: Heart,
    name: "Healthcare & Education",
    services:
      "Hospital engineering, campus planning, specialized MEP design, regulatory compliance",
    color: "from-red-900/20 to-navy-mid",
  },
  {
    icon: Sprout,
    name: "Agriculture & Rural",
    services:
      "Rural infrastructure advisory, irrigation systems, storage, and cold chain consulting",
    color: "from-green-900/20 to-navy-mid",
  },
  {
    icon: Landmark,
    name: "Government & Public Sector",
    services:
      "Policy advisory, PSU consulting, institutional strengthening, and PMU services",
    color: "from-purple-900/20 to-navy-mid",
  },
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
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
              Sectors We Serve
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Industry <span className="text-gold">Sectors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Deep domain expertise across infrastructure, industrial, and
            enterprise technology sectors.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`group bg-gradient-to-b ${industry.color} border border-border rounded-xl p-6 hover:border-gold/50 hover:shadow-gold transition-all duration-300 cursor-default`}
              data-ocid={`industries.item.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <industry.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-sm mb-3 leading-tight">
                {industry.name}
              </h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                {industry.services}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Segments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h3 className="font-display text-2xl font-bold text-center text-foreground mb-8">
            Who We <span className="text-gold">Serve</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                segment: "Central, State & Local Governments",
                examples:
                  "Ministries, Smart City SPVs, PWD, Urban Local Bodies, JRDA, JUIDCO",
              },
              {
                segment: "Public Sector Enterprises & Utilities",
                examples:
                  "Coal India, SAIL, NTPC, DVC, JSEB, NMDC, NALCO, GAIL, ONGC",
              },
              {
                segment: "Multilateral & Bilateral Agencies",
                examples:
                  "World Bank, ADB, KfW — Lender's Engineer & IE services",
              },
              {
                segment: "Infrastructure Developers & Asset Owners",
                examples:
                  "PPP developers, road & port concessionaires, renewable energy IPPs",
              },
              {
                segment: "Industrial & Manufacturing Enterprises",
                examples:
                  "Steel, cement, chemicals, process industries, auto ancillaries",
              },
              {
                segment: "Technology & Digital Infrastructure",
                examples:
                  "Telecom companies, cloud service providers, smart city platform vendors",
              },
            ].map((c, i) => (
              <motion.div
                key={c.segment}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-navy-mid border border-border rounded-lg p-5 hover:border-gold/30 transition-all duration-300"
              >
                <h4 className="font-heading font-semibold text-foreground text-sm mb-2">
                  {c.segment}
                </h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {c.examples}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
