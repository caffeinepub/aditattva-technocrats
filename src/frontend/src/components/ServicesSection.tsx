import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";

const SERVICES = [
  {
    id: "engineering-consulting",
    label: "Engineering Consulting",
    shortLabel: "Eng. Consulting",
    badge: "Advisory",
    desc: "We bridge the gap between strategic intent and technical execution — acting as Independent Engineer, Lender's Engineer, and Owner's Representative to provide unbiased guidance.",
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
    label: "Engineering Design",
    shortLabel: "Eng. Design",
    badge: "Design",
    desc: "Comprehensive engineering and design services across the full asset lifecycle — from conceptualization and FEED to detailed engineering, leveraging advanced BIM and simulation-led design.",
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
    label: "PMC / PMO",
    shortLabel: "PMC",
    badge: "Management",
    desc: "We act as the client's trusted Owner's Engineer and PMC, providing end-to-end governance, cost control, schedule management, and quality oversight.",
    items: [
      "Owner's Engineer & Client Representative Services",
      "Project Planning & Scheduling (Primavera/MSP)",
      "Earned Value Management",
      "Program Management Office (PMO) Setup",
      "Cost Management & Budget Control",
      "Contract Administration",
      "QA/QC, HSE Oversight, and Construction Supervision",
      "Project Health Checks, Audits & Independent Reviews",
      "Commissioning Support & Handover Management",
    ],
  },
  {
    id: "epcm",
    label: "EPCM",
    shortLabel: "EPCM",
    badge: "Construction",
    desc: "Through EPCM advisory, Aditattva provides comprehensive management oversight of complex projects — acting solely as client's representative.",
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
    label: "MEP & Specialized",
    shortLabel: "MEP",
    badge: "Systems",
    desc: "We design and technically supervise efficient, safe, and compliant MEP and building technology systems for commercial, healthcare, data center, and industrial environments.",
    items: [
      "HVAC & Mechanical Services",
      "Electrical Systems (MV/LV)",
      "Plumbing & Public Health Engineering",
      "BMS / IBMS & Building Automation",
      "Fire Detection & Protection",
      "ELV & ICT Systems (CCTV, Access Control, PA/VA)",
      "Data Center & Mission-Critical MEP",
      "Solar PV & Energy Management",
    ],
  },
  {
    id: "digital",
    label: "Digital & IT/OT",
    shortLabel: "Digital",
    badge: "Technology",
    desc: "We advise organizations on modernizing enterprise IT landscapes, bridging IT and OT systems, and unlocking data-driven intelligence.",
    items: [
      "Digital Strategy & IT Advisory",
      "Cloud Architecture & Infrastructure (AWS/Azure/GCP)",
      "Enterprise Platforms (ERP, CRM, HRMS)",
      "Application Development & Modernization",
      "Data, AI & Advanced Analytics",
      "Cybersecurity & IT Assurance (VAPT, SOC Advisory)",
      "IT/OT Convergence & Industrial IoT",
      "Managed IT & Support Services",
    ],
  },
  {
    id: "smart-systems",
    label: "Smart Systems",
    shortLabel: "Industry 4.0",
    badge: "Innovation",
    desc: "We guide organizations in transitioning to intelligent, connected, and human-centric ecosystems by integrating automation, AI, sustainability, and digital intelligence.",
    items: [
      "Industrial IoT (IIoT) and Connected Asset Advisory",
      "Smart Factory & Manufacturing Automation Strategy",
      "Digital Twin Development",
      "IT–OT Convergence Strategy & Cybersecurity Roadmap",
      "Intelligent Building, Campus & Smart City Solutions",
      "Edge Computing, Sensor Integration & Real-Time Analytics",
      "GIS-Enabled Urban Platforms & Command & Control Centers",
      "Industry 5.0 Human-Centric Automation",
    ],
  },
  {
    id: "esg",
    label: "ESG & Sustainability",
    shortLabel: "ESG",
    badge: "Sustainability",
    desc: "Sustainability is woven into every stage of Aditattva's advisory and delivery model. We help organizations achieve their environmental goals and build long-term climate resilience.",
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
    label: "Capacity Building",
    shortLabel: "Training",
    badge: "Education",
    desc: "We empower organizations, governments, and development agencies with the skills, knowledge, and systems required to sustain and continuously improve their operations.",
    items: [
      "Engineering & Technical Skills Training",
      "PMP, PRINCE2, PMI-ACP Certification Prep",
      "BIM & Digital Engineering Training Programs",
      "Institutional Strengthening for Government & PSUs",
      "Digital Literacy & Industry 4.0 Readiness Workshops",
      "ESG and Sustainability Awareness Programs",
    ],
  },
  {
    id: "international",
    label: "International Advisory",
    shortLabel: "International",
    badge: "Global",
    desc: "Leveraging India's engineering talent and global standards expertise, we support both Indian companies expanding internationally and international clients entering the Indian market.",
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
  {
    num: "01",
    title: "Discovery & Assessment",
    desc: "Stakeholder interviews, due diligence, site surveys, infrastructure audits",
  },
  {
    num: "02",
    title: "Strategy & Solution Design",
    desc: "Conceptualization, techno-economic analysis, business case, FEED",
  },
  {
    num: "03",
    title: "Engineering & Architecture",
    desc: "Detailed engineering (Civil, MEP, Process), BIM/digital engineering, IT architecture",
  },
  {
    num: "04",
    title: "Tendering & Procurement",
    desc: "Bid process management, tender documentation, vendor evaluation, contract advisory",
  },
  {
    num: "05",
    title: "Construction Supervision",
    desc: "Site supervision, QA/QC, HSE monitoring, contract administration, progress reporting",
  },
  {
    num: "06",
    title: "Testing & Commissioning",
    desc: "FAT, SAT, SIT, UAT, cybersecurity assessment, performance validation, handover",
  },
  {
    num: "07",
    title: "Optimization & Capacity",
    desc: "Operations advisory, digital twin utilization, managed services, continuous improvement",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
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
              10 Practice Areas
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-gold">Service Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            End-to-end consulting across engineering, project management,
            digital transformation, and sustainability.
          </p>
        </motion.div>

        {/* Services Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <Tabs defaultValue="engineering-consulting">
            <ScrollArea className="w-full">
              <TabsList
                className="flex w-max gap-1 mb-8 bg-navy-mid/50 p-1 rounded-lg border border-border h-auto flex-wrap"
                data-ocid="services.tabs.list"
              >
                {SERVICES.map((s) => (
                  <TabsTrigger
                    key={s.id}
                    value={s.id}
                    className="text-xs font-heading font-medium px-3 py-2 data-[state=active]:bg-gold data-[state=active]:text-navy-deep whitespace-nowrap"
                    data-ocid={`services.${s.id}.tab`}
                  >
                    {s.shortLabel}
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>

            {SERVICES.map((s) => (
              <TabsContent key={s.id} value={s.id}>
                <div className="bg-navy-mid border border-border rounded-xl p-6 md:p-8">
                  <div className="flex flex-wrap items-start gap-4 mb-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-gold/15 text-gold border border-gold/30 text-xs">
                          {s.badge}
                        </Badge>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                        {s.label}
                      </h3>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {s.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 py-2 border-b border-border/40 last:border-0"
                      >
                        <span className="text-gold text-xs mt-1 shrink-0">
                          ▸
                        </span>
                        <span className="text-sm text-foreground/80 font-body">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Lifecycle Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold/50" />
              <span className="text-xs tracking-[0.3em] uppercase font-body text-gold font-medium">
                Structured Delivery
              </span>
              <div className="h-px w-12 bg-gold/50" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              End-to-End Consulting <span className="text-gold">Lifecycle</span>
            </h3>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-8 left-0 right-0 h-px bg-gold/25" />
              <div className="grid grid-cols-7 gap-2">
                {LIFECYCLE.map((phase, i) => (
                  <motion.div
                    key={phase.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-navy-mid border-2 border-gold/50 flex items-center justify-center mb-3 relative z-10 hover:border-gold hover:bg-navy-light transition-all duration-300">
                      <span className="text-gold font-heading font-bold text-sm">
                        {phase.num}
                      </span>
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-xs mb-1 leading-tight">
                      {phase.title}
                    </h4>
                    <p className="text-muted-foreground text-xs font-body leading-relaxed line-clamp-3">
                      {phase.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-4">
            {LIFECYCLE.map((phase, i) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 bg-navy-mid border border-border rounded-lg p-4"
              >
                <div className="w-12 h-12 rounded-full bg-navy-light border-2 border-gold/50 flex items-center justify-center shrink-0">
                  <span className="text-gold font-heading font-bold text-xs">
                    {phase.num}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {phase.title}
                  </h4>
                  <p className="text-muted-foreground text-xs font-body leading-relaxed">
                    {phase.desc}
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
