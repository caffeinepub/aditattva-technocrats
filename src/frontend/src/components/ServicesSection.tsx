import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const SERVICE_IMAGES: Record<string, string> = {
  "engineering-consulting": "/assets/generated/section-about.dim_900x700.jpg",
  "engineering-design":
    "/assets/generated/section-engineering-design.dim_1200x700.jpg",
  pmc: "/assets/generated/section-infrastructure.dim_1400x700.jpg",
  epcm: "/assets/generated/section-industrial.dim_1200x700.jpg",
  mep: "/assets/generated/section-digital.dim_1200x700.jpg",
  digital: "/assets/generated/section-digital.dim_1200x700.jpg",
  "smart-systems": "/assets/generated/section-innovation.dim_1400x700.jpg",
  esg: "/assets/generated/section-esg.dim_1200x700.jpg",
  capacity: "/assets/generated/section-engineering-design.dim_1200x700.jpg",
  international: "/assets/generated/section-global.dim_1400x600.jpg",
};

const SERVICES = [
  {
    id: "engineering-consulting",
    num: "01",
    label: "Engineering Consulting & Advisory",
    badge: "Advisory",
    desc: "We bridge the gap between strategic intent and technical execution — acting as Independent Engineer, Lender's Engineer, and Owner's Representative to provide unbiased guidance ensuring projects are viable, bankable, and technically robust.",
    items: [
      "Project Conceptualization & Feasibility Studies",
      "Independent Engineer (IE) Services",
      "Lender's Engineer Services",
      "Technology Selection & Evaluation",
      "Risk Assessment & Mitigation Planning",
      "Regulatory, Statutory & Compliance Advisory",
      "Technical Due Diligence",
      "Tendering, Bid Evaluation & Contract Advisory",
    ],
  },
  {
    id: "engineering-design",
    num: "02",
    label: "Engineering Design Services",
    badge: "Design",
    desc: "Comprehensive engineering and design services across the full asset lifecycle — from conceptualization and FEED to detailed engineering, leveraging advanced BIM and simulation-led design to optimize safety, cost, and lifecycle performance.",
    items: [
      "Conceptual & FEED Engineering",
      "Civil & Structural Engineering",
      "Mechanical & Process Engineering",
      "Electrical, Instrumentation & Control",
      "HVAC, Plumbing & Fire Protection",
      "BIM & Digital Engineering",
      "Value Engineering & Design Optimization",
      "As-Built Documentation",
    ],
  },
  {
    id: "pmc",
    num: "03",
    label: "Project Management Consultancy",
    badge: "PMC / PMO",
    desc: "We act as the client's trusted Owner's Engineer and PMC, providing end-to-end governance, cost control, schedule management, and quality oversight — ensuring projects are delivered on time, within budget, and to the highest standards.",
    items: [
      "Owner's Engineer & Client Representative Services",
      "Project Planning & Scheduling (Primavera/MSP)",
      "Program Management Office (PMO) Setup",
      "Cost Management & Budget Control",
      "Contract Administration",
      "QA/QC, HSE Oversight & Construction Supervision",
      "Project Health Checks & Independent Reviews",
      "Commissioning Support & Handover Management",
    ],
  },
  {
    id: "epcm",
    num: "04",
    label: "EPCM & Construction Management",
    badge: "EPCM",
    desc: "Through EPCM advisory, Aditattva provides comprehensive management oversight of complex projects — acting solely as client's representative without engaging in direct procurement or construction contracting.",
    items: [
      "EPCM Strategy & Project Structuring",
      "Procurement Strategy & Tender Management",
      "Construction Supervision & Contract Administration",
      "Project Controls: Cost, Schedule, Risk",
      "QA/QC Management & Third-Party Inspection",
      "HSE Program Management",
      "Commissioning Support & Project Close-Out",
    ],
  },
  {
    id: "mep",
    num: "05",
    label: "MEP & Specialized Systems",
    badge: "MEP",
    desc: "We design and technically supervise efficient, safe, and compliant MEP and building technology systems for commercial, healthcare, data center, and industrial environments.",
    items: [
      "HVAC & Mechanical Services",
      "Electrical Systems (MV/LV Distribution)",
      "Plumbing & Public Health Engineering",
      "BMS / IBMS & Building Automation",
      "Fire Detection & Protection Systems",
      "ELV & ICT Systems (CCTV, Access Control, PA/VA)",
      "Data Center & Mission-Critical MEP",
      "Solar PV & Energy Management",
    ],
  },
  {
    id: "digital",
    num: "06",
    label: "Digital Transformation & IT/OT",
    badge: "Technology",
    desc: "We advise organizations on modernizing enterprise IT landscapes, bridging IT and OT systems, and unlocking data-driven intelligence — ensuring digital transformation is aligned with business strategy and cybersecurity imperatives.",
    items: [
      "Digital Strategy & IT Advisory",
      "Cloud Architecture & Infrastructure (AWS/Azure/GCP)",
      "Enterprise Platforms (ERP, CRM, HRMS)",
      "Application Development & Modernization",
      "Data, AI & Advanced Analytics",
      "Cybersecurity & IT Assurance (VAPT, SOC)",
      "IT/OT Convergence & Industrial IoT",
      "Managed IT & Support Services",
    ],
  },
  {
    id: "smart-systems",
    num: "07",
    label: "Smart Systems & Industry 4.0",
    badge: "Innovation",
    desc: "We guide organizations in transitioning to intelligent, connected, human-centric ecosystems by integrating automation, AI, sustainability, and digital intelligence with their physical infrastructure.",
    items: [
      "Industrial IoT & Connected Asset Advisory",
      "Smart Factory & Manufacturing Automation Strategy",
      "Digital Twin Development",
      "IT–OT Convergence & Cybersecurity Roadmap",
      "Intelligent Building, Campus & Smart City Solutions",
      "Edge Computing & Real-Time Analytics",
      "GIS-Enabled Urban Platforms & Command Centers",
      "Industry 5.0 Human-Centric Automation",
    ],
  },
  {
    id: "esg",
    num: "08",
    label: "ESG, Sustainability & Climate",
    badge: "Sustainability",
    desc: "Sustainability is woven into every stage of Aditattva's advisory and delivery model. We help organizations achieve their environmental goals, comply with evolving regulations, and build long-term climate resilience.",
    items: [
      "ESG Framework Development & Reporting (GRI, BRSR, TCFD)",
      "Environmental Impact Assessment (EIA)",
      "Climate Risk & Resilience Advisory",
      "Carbon Accounting & Net-Zero Roadmaps",
      "Carbon Credit & CDM Advisory",
      "Social Impact & CSR Advisory",
      "Green Building Certification (LEED, IGBC, GRIHA)",
      "Energy Transition Advisory",
    ],
  },
  {
    id: "capacity",
    num: "09",
    label: "Capacity Building & Training",
    badge: "Education",
    desc: "We empower organizations, governments, and development agencies with the skills, knowledge, and systems required to sustain and continuously improve their assets, programs, and operations.",
    items: [
      "Engineering & Technical Skills Training",
      "PMP, PRINCE2, PMI-ACP Certification Prep",
      "BIM & Digital Engineering Training Programs",
      "Institutional Strengthening for Govt & PSUs",
      "Digital Literacy & Industry 4.0 Workshops",
      "ESG and Sustainability Awareness Programs",
    ],
  },
  {
    id: "international",
    num: "10",
    label: "International Advisory",
    badge: "Global",
    desc: "Leveraging India's engineering talent and global standards expertise, we support Indian companies expanding internationally and international clients entering the Indian market.",
    items: [
      "Advisory for Indian EPC contractors in international bids",
      "Regulatory framework & local market entry strategy",
      "Cross-border risk management",
      "World Bank, ADB, and IFC standards advisory",
      "Technical advisory for infrastructure in ME, Africa, SE Asia",
    ],
  },
];

const LIFECYCLE = [
  { num: "01", title: "Discovery & Assessment" },
  { num: "02", title: "Strategy & Solution Design" },
  { num: "03", title: "Engineering & Architecture" },
  { num: "04", title: "Tendering & Procurement" },
  { num: "05", title: "Construction & Oversight" },
  { num: "06", title: "Testing & Commissioning" },
  { num: "07", title: "Optimization & Growth" },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState("engineering-consulting");
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const active = SERVICES.find((s) => s.id === activeService)!;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative"
      style={{ background: "oklch(var(--navy-800))" }}
    >
      {/* ── Section header ── */}
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
              <span className="section-label">10 Practice Areas</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2
                className="font-display font-extrabold text-foreground leading-tight"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
              >
                Comprehensive{" "}
                <span className="text-gold">Service Portfolio</span>
              </h2>
              <p className="text-sm text-muted-foreground font-body max-w-md leading-relaxed">
                End-to-end consulting across engineering, project management,
                digital transformation, and sustainability — from concept to
                operations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── AECOM-style: Left nav + Right content ── */}
      <div className="container max-w-7xl mx-auto px-0 sm:px-0">
        <div className="flex flex-col lg:flex-row min-h-[640px]">
          {/* Left sidebar */}
          <div
            className="lg:w-72 xl:w-80 shrink-0 border-r border-border/40 overflow-y-auto"
            style={{ background: "oklch(var(--navy-900))" }}
          >
            <nav className="py-4" data-ocid="services.nav.list">
              {SERVICES.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setActiveService(s.id)}
                  className={`w-full text-left px-6 py-4 flex items-start gap-3 border-l-2 transition-all duration-200 ${
                    activeService === s.id
                      ? "border-l-gold bg-navy-800/80 text-foreground"
                      : "border-l-transparent text-muted-foreground hover:text-foreground hover:bg-navy-800/40"
                  }`}
                  data-ocid={`services.${s.id}.tab`}
                >
                  <span
                    className={`text-[10px] font-body font-bold shrink-0 mt-0.5 ${
                      activeService === s.id
                        ? "text-gold"
                        : "text-muted-foreground/50"
                    }`}
                  >
                    {s.num}
                  </span>
                  <span className="text-[13px] font-body font-medium leading-snug">
                    {s.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Right content panel */}
          <div className="flex-1 flex flex-col">
            {/* Service image */}
            <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
              <motion.img
                key={activeService}
                src={SERVICE_IMAGES[activeService]}
                alt={active.label}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(var(--navy-800)) 0%, oklch(var(--navy-800) / 0.4) 60%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-6 left-8">
                <span
                  className="inline-block px-3 py-1 text-[10px] font-body font-bold tracking-wider uppercase border border-gold/40 text-gold rounded-sm"
                  style={{ background: "oklch(var(--navy-900) / 0.8)" }}
                >
                  {active.badge}
                </span>
              </div>
            </div>

            {/* Service detail */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 p-8"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-gold font-display font-extrabold text-4xl opacity-25">
                  {active.num}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {active.label}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8 max-w-2xl">
                {active.desc}
              </p>

              <div className="grid sm:grid-cols-2 gap-0">
                {active.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 py-3 border-b border-border/30 last:border-0 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                    <span className="text-sm text-foreground/80 font-body leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Lifecycle timeline ── */}
      <div
        className="border-t border-border/40"
        style={{ background: "oklch(var(--navy-900))" }}
      >
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="accent-line" />
              <span className="section-label">Structured Delivery</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              End-to-End Consulting <span className="text-gold">Lifecycle</span>
            </h3>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div
              className="absolute top-6 left-6 right-6 h-px hidden lg:block"
              style={{
                background:
                  "linear-gradient(to right, oklch(var(--gold) / 0.5), oklch(var(--gold) / 0.1))",
              }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {LIFECYCLE.map((phase, i) => (
                <motion.div
                  key={phase.num}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center mb-3 relative z-10 hover:border-gold hover:shadow-gold-sm transition-all duration-300"
                    style={{ background: "oklch(var(--navy-800))" }}
                  >
                    <span className="text-gold font-heading font-bold text-xs">
                      {phase.num}
                    </span>
                  </div>
                  <p className="text-xs font-body text-muted-foreground leading-snug">
                    {phase.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
