import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Sector Data ──────────────────────────────────────────────
type KeyService = { title: string; desc: string };

type Sector = {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  keyServices: KeyService[];
  clientSegments: string[];
  relatedCapabilities: string[];
};

const SECTORS: Sector[] = [
  {
    id: "infrastructure-smart-cities",
    name: "Infrastructure, Smart Cities & Urban Development",
    tagline: "Engineering Tomorrow's Cities Today",
    overview:
      "Aditattva provides integrated advisory and engineering services for India's most complex urban infrastructure challenges — from master planning and smart city platforms to transport networks, water systems, and digital governance frameworks. We work alongside governments, SPVs, and development agencies to deliver cities that are livable, resilient, and future-ready.",
    keyServices: [
      {
        title: "Urban Master Planning",
        desc: "Integrated land use, transport, utilities, and digital infrastructure planning for new and expanding urban areas.",
      },
      {
        title: "Smart City Platforms",
        desc: "Urban Operating Systems integrating mobility, utilities, environment, and governance into unified digital command centers.",
      },
      {
        title: "Roads, Bridges & Transport",
        desc: "Feasibility, DPR preparation, and PMC for highways, urban roads, flyovers, and mass transit infrastructure.",
      },
      {
        title: "Water & Sewerage Systems",
        desc: "WTP/STP design advisory, distribution network planning, and O&M optimization for urban water utilities.",
      },
      {
        title: "Solid Waste Management",
        desc: "Integrated SWM advisory covering collection, processing, disposal, and waste-to-energy feasibility.",
      },
      {
        title: "PMC & Owner's Engineer",
        desc: "Project management consultancy and owner's engineering for government-funded smart city and urban infrastructure projects.",
      },
    ],
    clientSegments: [
      "Ministry of Housing & Urban Affairs",
      "Smart City SPVs",
      "Urban Local Bodies",
      "State PWD",
      "JRDA, JUIDCO & State Urban Development Authorities",
      "ADB & World Bank funded urban programs",
    ],
    relatedCapabilities: [
      "Engineering Consulting & Advisory",
      "Project Management Consultancy",
      "Digital Transformation & IT/OT",
    ],
  },
  {
    id: "power-renewable-energy",
    name: "Power & Renewable Energy",
    tagline: "Powering India's Clean Energy Future",
    overview:
      "India's energy transition demands engineering expertise that spans conventional and renewable systems. Aditattva provides independent advisory across the full power sector lifecycle — from feasibility and FEED to lender's engineer services and operations optimization — helping clients navigate the complexities of grid integration, regulatory compliance, and technology selection.",
    keyServices: [
      {
        title: "Solar & Wind Advisory",
        desc: "Techno-economic feasibility, technology selection, yield assessment, and FEED for solar PV and wind projects.",
      },
      {
        title: "Thermal & Hydro Advisory",
        desc: "Technical due diligence, independent review, and PMC for thermal power stations and hydroelectric projects.",
      },
      {
        title: "Grid Management & T&D",
        desc: "Transmission and distribution network advisory, substation design review, and smart grid integration consulting.",
      },
      {
        title: "Energy Audits & Efficiency",
        desc: "Detailed energy audits, efficiency improvement roadmaps, and ISO 50001 energy management advisory.",
      },
      {
        title: "Lender's Engineer Services",
        desc: "Technical advisory to banks and DFIs on renewable energy capital projects — due diligence, progress monitoring, and reporting.",
      },
      {
        title: "Battery Storage & Hybrid Systems",
        desc: "BESS feasibility, technology evaluation, and integration advisory for hybrid renewable energy systems.",
      },
    ],
    clientSegments: [
      "NTPC, DVC, NHPC & State Gencos",
      "Renewable Energy IPPs",
      "State Electricity Boards & DISCOMs",
      "Infrastructure Developers",
      "World Bank & ADB funded power programs",
      "Industrial captive power consumers",
    ],
    relatedCapabilities: [
      "Engineering Consulting & Advisory",
      "ESG & Sustainability",
      "Project Management Consultancy",
    ],
  },
  {
    id: "oil-gas-petrochemicals",
    name: "Oil, Gas & Petrochemicals",
    tagline: "Process Engineering Excellence",
    overview:
      "Aditattva's oil, gas, and petrochemical advisory practice delivers rigorous technical and safety-focused consulting for refineries, pipelines, LNG terminals, and petrochemical complexes. We provide independent engineering assessment, HAZOP studies, and project management oversight — ensuring projects meet international safety, environmental, and performance standards.",
    keyServices: [
      {
        title: "Process Engineering Advisory",
        desc: "FEED support, PFD/P&ID review, equipment sizing, process optimization, and technical due diligence.",
      },
      {
        title: "HAZOP & Safety Studies",
        desc: "HAZOP, HAZID, Bow-Tie analysis, and quantitative risk assessment for process plants and pipeline systems.",
      },
      {
        title: "Pipeline & Terminal Advisory",
        desc: "Feasibility and design review for cross-country pipelines, city gas distribution, and LNG/LPG terminals.",
      },
      {
        title: "HSE & Regulatory Compliance",
        desc: "HSE management system advisory, OISD compliance, environmental clearance support, and incident investigation.",
      },
      {
        title: "EIA & Environmental Advisory",
        desc: "Environmental Impact Assessment, Environmental Management Plan, and statutory clearance support.",
      },
      {
        title: "PMC & Owner's Engineer",
        desc: "Project management consultancy for refinery upgrades, grassroots plants, and pipeline network expansion.",
      },
    ],
    clientSegments: [
      "ONGC, GAIL, IOCL & PSU Refiners",
      "City Gas Distribution Companies",
      "Petrochemical Manufacturers",
      "Pipeline Infrastructure Developers",
      "Private Refinery Operators",
      "Lenders to Oil & Gas Capital Projects",
    ],
    relatedCapabilities: [
      "Engineering Consulting & Advisory",
      "ESG & Sustainability",
      "Project Management Consultancy",
    ],
  },
  {
    id: "mining-metals-cement",
    name: "Mining, Metals & Cement",
    tagline: "Engineering India's Industrial Backbone",
    overview:
      "Jharkhand and central India's mineral wealth forms the foundation of India's industrial economy. Aditattva brings deep regional expertise and multidisciplinary capabilities to mining, metals, and cement clients — from mine planning advisory and DGMS compliance to digital mine consulting, beneficiation plant engineering, and ESG-aligned sustainability programs.",
    keyServices: [
      {
        title: "Mine Planning Advisory",
        desc: "Feasibility studies, mine design review, slope stability, and strategic mine planning for opencast and underground operations.",
      },
      {
        title: "Mineral Processing Advisory",
        desc: "Beneficiation plant design review, equipment selection, metallurgical test work interpretation, and optimization advisory.",
      },
      {
        title: "DGMS & Regulatory Compliance",
        desc: "Mines Act compliance advisory, DGMS statutory approvals support, and mine safety management system development.",
      },
      {
        title: "Digital Mine Consulting",
        desc: "Mine automation, fleet management, real-time monitoring, and Industry 4.0 transformation for mining operations.",
      },
      {
        title: "ESG & Reclamation Planning",
        desc: "Mine closure plans, progressive reclamation, biodiversity management, and community impact programs.",
      },
      {
        title: "PMC for Industrial Projects",
        desc: "Project management for ore handling systems, processing plants, stockyards, and infrastructure at mine sites.",
      },
    ],
    clientSegments: [
      "Coal India Limited & Subsidiaries",
      "SAIL, NMDC & NALCO",
      "Private Mining Companies",
      "Steel & Aluminium Producers",
      "Cement Manufacturers",
      "Mine Developers under MDO model",
    ],
    relatedCapabilities: [
      "Engineering Consulting & Advisory",
      "ESG & Sustainability",
      "Smart Systems & Industry 4.0",
    ],
  },
  {
    id: "water-environment",
    name: "Water, Environment & Waste Management",
    tagline: "Clean Water, Clean Future",
    overview:
      "Water scarcity, pollution, and waste management are among India's most pressing development challenges. Aditattva provides specialist advisory for water treatment, sewage management, environmental compliance, and solid waste infrastructure — supporting governments and utilities in delivering safe, sustainable water and environmental services.",
    keyServices: [
      {
        title: "WTP & STP Design Advisory",
        desc: "Design review, technology selection, and PMC for water treatment plants, sewage treatment plants, and ZLD systems.",
      },
      {
        title: "Environmental Impact Assessment",
        desc: "EIA studies, Environmental Management Plans, forest and environmental clearance support under MoEFCC norms.",
      },
      {
        title: "Solid Waste Management",
        desc: "Integrated SWM master plans, processing facility advisory, landfill engineering, and waste-to-energy feasibility.",
      },
      {
        title: "Industrial Effluent Advisory",
        desc: "CETP design review, effluent treatment advisory, zero liquid discharge (ZLD) studies, and pollution control compliance.",
      },
      {
        title: "Groundwater & Hydrology",
        desc: "Hydrogeological studies, groundwater impact assessment, recharge feasibility, and water balance modeling.",
      },
      {
        title: "Climate Resilience Planning",
        desc: "Climate risk assessments for water infrastructure, adaptation strategies, and WASH program advisory.",
      },
    ],
    clientSegments: [
      "Urban Local Bodies & Jal Boards",
      "State PCBs & CPCB",
      "Industrial Estates & SEZs",
      "PPP Water Concessionaires",
      "AMRUT & Smart City Programs",
      "World Bank / ADB funded WASH projects",
    ],
    relatedCapabilities: [
      "Engineering Consulting & Advisory",
      "ESG & Sustainability",
      "Project Management Consultancy",
    ],
  },
  {
    id: "manufacturing-process",
    name: "Manufacturing & Process Industries",
    tagline: "Driving Industrial Excellence",
    overview:
      "As India's manufacturing sector embraces Industry 4.0 and smart factory transformation, Aditattva helps manufacturers modernize operations, improve efficiency, and navigate digital transformation. Our advisory spans factory automation strategy, OEE improvement, supply chain optimization, and ESG compliance — helping manufacturers stay globally competitive.",
    keyServices: [
      {
        title: "Factory Automation Advisory",
        desc: "Automation strategy, PLC/SCADA/DCS system evaluation, robotics feasibility, and smart factory roadmapping.",
      },
      {
        title: "Industry 4.0 Transformation",
        desc: "IIoT implementation roadmaps, digital twin development, predictive maintenance, and connected factory advisory.",
      },
      {
        title: "OEE & Productivity Improvement",
        desc: "Operational efficiency assessments, OEE benchmarking, lean manufacturing advisory, and productivity improvement programs.",
      },
      {
        title: "Supply Chain & Logistics Advisory",
        desc: "Supply chain network design, warehouse management system advisory, and logistics optimization for manufacturers.",
      },
      {
        title: "MEP & Utilities Engineering",
        desc: "Factory MEP design, compressed air, industrial HVAC, power distribution, and utilities optimization.",
      },
      {
        title: "Greenfield Plant Advisory",
        desc: "Location advisory, master planning, layout optimization, and PMC for new greenfield manufacturing facilities.",
      },
    ],
    clientSegments: [
      "Auto Ancillary Manufacturers",
      "Chemical & Pharmaceutical Plants",
      "FMCG & Consumer Goods",
      "Steel & Metal Fabricators",
      "Electronics & Precision Engineering",
      "Industrial Park Developers",
    ],
    relatedCapabilities: [
      "Smart Systems & Industry 4.0",
      "Digital Transformation & IT/OT",
      "Engineering Design Services",
    ],
  },
  {
    id: "real-estate-data-centers",
    name: "Real Estate, Data Centers & Digital Infrastructure",
    tagline: "Building the Infrastructure of Tomorrow",
    overview:
      "India's booming commercial real estate and data center markets require engineering expertise that bridges conventional building systems with cutting-edge digital infrastructure. Aditattva delivers MEP design, data center tier advisory, BIM coordination, and smart campus consulting — ensuring facilities are efficient, resilient, and future-ready.",
    keyServices: [
      {
        title: "Data Center MEP Design",
        desc: "Tier-rated MEP design, cooling redundancy, power resilience, UPS/generator systems, and DCIM advisory for data centers.",
      },
      {
        title: "MEP Design & Coordination",
        desc: "Complete MEP design services for commercial offices, IT parks, retail, and mixed-use developments.",
      },
      {
        title: "Smart Building & IBMS",
        desc: "Integrated Building Management Systems, EMS, access control, CCTV, and smart campus automation design.",
      },
      {
        title: "BIM Coordination",
        desc: "3D BIM modeling, clash detection, 4D simulation, and digital handover packages for complex buildings.",
      },
      {
        title: "Green Building Certification",
        desc: "LEED, IGBC, GRIHA advisory — design support, documentation, and certification management.",
      },
      {
        title: "Technical Due Diligence",
        desc: "MEP and building systems due diligence for investors, acquirers, and lenders in real estate transactions.",
      },
    ],
    clientSegments: [
      "Commercial Real Estate Developers",
      "Data Center Operators",
      "IT Parks & SEZ Developers",
      "Healthcare Campus Developers",
      "Hotels & Hospitality Groups",
      "Real Estate Investment Trusts (REITs)",
    ],
    relatedCapabilities: [
      "MEP & Specialized Systems",
      "Digital Transformation & IT/OT",
      "ESG & Sustainability",
    ],
  },
  {
    id: "healthcare-education",
    name: "Healthcare & Education Infrastructure",
    tagline: "Engineering Better Outcomes",
    overview:
      "Healthcare and education infrastructure requires a unique blend of engineering precision, regulatory compliance, and human-centric design. Aditattva provides specialized advisory for hospitals, medical colleges, campus infrastructure, and educational institutions — ensuring facilities meet international safety, clinical, and environmental standards.",
    keyServices: [
      {
        title: "Hospital Engineering Advisory",
        desc: "Specialized MEP design for clinical areas, ICU, OT, radiology, and laboratory environments per NABH/JCI standards.",
      },
      {
        title: "Medical Gas & Fire Safety",
        desc: "Medical gas pipeline design, NFPA fire protection systems, and emergency power systems for healthcare facilities.",
      },
      {
        title: "Campus Master Planning",
        desc: "Integrated campus planning for medical colleges, universities, and educational campuses including utilities and digital infrastructure.",
      },
      {
        title: "Green & Sustainable Healthcare",
        desc: "LEED / IGBC advisory for hospitals and healthcare campuses with energy efficiency and water conservation focus.",
      },
      {
        title: "Regulatory Compliance Advisory",
        desc: "NABH, BIS, MCI, and AERB compliance advisory for healthcare facility approvals and accreditation.",
      },
      {
        title: "PMC for Healthcare Projects",
        desc: "Project management consultancy for hospital greenfield, expansion, and renovation projects.",
      },
    ],
    clientSegments: [
      "Government Hospital Projects (PMAY, PMSSY)",
      "Private Hospital Chains",
      "Medical Colleges & Universities",
      "State Health Infrastructure Corporations",
      "AIIMS & ESIC Hospital Programs",
      "NGO & CSR funded health projects",
    ],
    relatedCapabilities: [
      "Engineering Design Services",
      "MEP & Specialized Systems",
      "Project Management Consultancy",
    ],
  },
  {
    id: "government-public-sector",
    name: "Government & Public Sector",
    tagline: "Strengthening Public Systems",
    overview:
      "Government and public sector organizations face unique challenges — from managing large, multi-stakeholder programs to ensuring accountability, transparency, and inclusive outcomes. Aditattva serves as a trusted advisory partner to ministries, PSUs, and development agencies — providing policy advisory, PMU services, and institutional strengthening programs.",
    keyServices: [
      {
        title: "Project Management Units (PMU)",
        desc: "Setting up and managing PMUs for government infrastructure programs, centrally sponsored schemes, and state development projects.",
      },
      {
        title: "Policy & Strategy Advisory",
        desc: "Sector policy development, regulatory framework advisory, and strategic planning for government departments and ministries.",
      },
      {
        title: "Institutional Strengthening",
        desc: "Capacity building, process reengineering, digital transformation, and governance improvement for public sector organizations.",
      },
      {
        title: "Independent Engineer / IE Services",
        desc: "Third-party technical assessment and reporting for multilateral-funded government capital projects.",
      },
      {
        title: "Lender's Engineer Services",
        desc: "Technical advisory to World Bank, ADB, KfW, and bilateral agencies on government-backed infrastructure programs.",
      },
      {
        title: "Public Financial Management Advisory",
        desc: "Budget planning, expenditure monitoring, and financial management system advisory for public sector programs.",
      },
    ],
    clientSegments: [
      "Central Government Ministries & Departments",
      "State Governments & SPVs",
      "Public Sector Undertakings (PSUs)",
      "Urban Development Authorities",
      "World Bank & ADB Program Implementing Agencies",
      "National Infrastructure Finance Institutions",
    ],
    relatedCapabilities: [
      "Engineering Consulting & Advisory",
      "Project Management Consultancy",
      "Capacity Building & Training",
    ],
  },
  {
    id: "agriculture-rural",
    name: "Agriculture & Rural Development",
    tagline: "Building Foundations for Rural Prosperity",
    overview:
      "Rural India's infrastructure gap presents one of the country's greatest development opportunities. Aditattva supports agricultural modernization and rural infrastructure programs with advisory spanning irrigation systems, rural connectivity, cold chain infrastructure, and agri-processing facilities — contributing to sustainable rural economic growth.",
    keyServices: [
      {
        title: "Irrigation Systems Advisory",
        desc: "Feasibility and design advisory for canal systems, micro-irrigation networks, check dams, and watershed development programs.",
      },
      {
        title: "Rural Roads & Connectivity",
        desc: "PMGSY/rural road program PMC, all-weather rural road design, and rural transport infrastructure advisory.",
      },
      {
        title: "Cold Chain & Storage Advisory",
        desc: "Cold storage, warehousing, silos, and logistics infrastructure advisory for agri commodities and horticulture.",
      },
      {
        title: "Agri-Processing Facilities",
        desc: "Food processing park advisory, agro-industrial estate planning, and value chain infrastructure development.",
      },
      {
        title: "Rural Water Supply (JJMY)",
        desc: "Jal Jeevan Mission program support, rural WTP design advisory, and piped water supply network PMC.",
      },
      {
        title: "Social Impact Assessment",
        desc: "SIA studies, tribal welfare planning, community engagement, and resettlement advisory for rural infrastructure projects.",
      },
    ],
    clientSegments: [
      "Ministry of Agriculture & DARE",
      "State Agriculture Departments",
      "NABARD & Rural Development Banks",
      "PMGSY & MNREGA Program Agencies",
      "Agri-Commodity Boards & FPOs",
      "Rural Infrastructure Developers",
    ],
    relatedCapabilities: [
      "Engineering Consulting & Advisory",
      "ESG & Sustainability",
      "Project Management Consultancy",
    ],
  },
];

// ─── SectorPage Component ──────────────────────────────────────
export function SectorPage() {
  // Extract sectorId from URL path: /sectors/:sectorId
  const pathParts = window.location.pathname.split("/");
  const sectorId =
    pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];

  const [sector, setSector] = useState<Sector | null>(null);
  const [notFound, setNotFound] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const found = SECTORS.find((s) => s.id === sectorId);
    if (found) {
      setSector(found);
      document.title = `${found.name} | Aditattva Technocrats`;
    } else {
      setNotFound(true);
    }
    window.scrollTo(0, 0);
  }, [sectorId]);

  // All sectors for navigation
  const currentIndex = SECTORS.findIndex((s) => s.id === sectorId);
  const prevSector = currentIndex > 0 ? SECTORS[currentIndex - 1] : null;
  const nextSector =
    currentIndex < SECTORS.length - 1 ? SECTORS[currentIndex + 1] : null;

  if (notFound) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <p className="text-6xl font-display font-black text-gold mb-4">
              404
            </p>
            <p className="text-xl font-body text-muted-foreground mb-8">
              Sector not found
            </p>
            <Button
              onClick={() => {
                window.location.href = "/#industries";
              }}
              className="bg-gold text-navy-900 hover:bg-gold-bright font-body font-bold"
              data-ocid="sector.back.primary_button"
            >
              ← All Industries
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!sector) return null;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <main>
        {/* ── Hero Banner ── */}
        <section
          ref={heroRef}
          className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, oklch(0.18 0.06 255 / 0.8) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, oklch(0.14 0.04 230 / 0.6) 0%, transparent 50%),
              oklch(var(--navy-900))
            `,
          }}
        >
          {/* Geometric pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  oklch(var(--foreground)) 0px,
                  oklch(var(--foreground)) 1px,
                  transparent 1px,
                  transparent 80px
                ),
                repeating-linear-gradient(
                  90deg,
                  oklch(var(--foreground)) 0px,
                  oklch(var(--foreground)) 1px,
                  transparent 1px,
                  transparent 80px
                )
              `,
            }}
          />

          {/* Gold diagonal accent */}
          <div
            className="absolute top-0 right-0 w-96 h-96 opacity-10"
            style={{
              background:
                "conic-gradient(from 45deg, oklch(var(--gold)), transparent, oklch(var(--gold-dim)), transparent)",
              transform: "translate(30%, -30%)",
              borderRadius: "50%",
            }}
          />

          <div className="relative z-10 container max-w-7xl mx-auto px-6 sm:px-8 pt-36 pb-16">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-[11px] font-body text-muted-foreground mb-8 uppercase tracking-[0.15em]"
              aria-label="breadcrumb"
            >
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/";
                }}
                className="hover:text-gold transition-colors"
                data-ocid="sector.home.link"
              >
                Home
              </button>
              <ChevronRight size={11} />
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/#industries";
                }}
                className="hover:text-gold transition-colors"
                data-ocid="sector.industries.link"
              >
                Industries
              </button>
              <ChevronRight size={11} />
              <span className="text-gold">{sector.name}</span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="accent-line" />
              <span className="section-label">Sector Report</span>
            </motion.div>

            {/* Sector name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display font-extrabold text-foreground leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              {sector.name.split(" & ")[0]}
              {sector.name.includes(" & ") && (
                <>
                  {" "}
                  <span className="text-gold">
                    &amp; {sector.name.split(" & ").slice(1).join(" & ")}
                  </span>
                </>
              )}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-muted-foreground font-body italic"
            >
              {sector.tagline}
            </motion.p>
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 z-[1]"
            style={{
              background:
                "linear-gradient(to top, oklch(var(--navy-900)), transparent)",
            }}
          />
        </section>

        {/* ── Main Content ── */}
        <div
          ref={contentRef}
          className="container max-w-7xl mx-auto px-6 sm:px-8 py-16"
        >
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <button
              type="button"
              onClick={() => {
                window.location.href = "/#industries";
              }}
              className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-gold transition-colors"
              data-ocid="sector.back.link"
            >
              <ArrowLeft size={14} />
              All Industries
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left: Overview + Services */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-ocid="sector.overview.section"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="accent-line" />
                  <span className="section-label">Sector Overview</span>
                </div>
                <p className="text-base text-foreground/80 font-body leading-relaxed">
                  {sector.overview}
                </p>
              </motion.section>

              {/* Key Services */}
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                data-ocid="sector.services.section"
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="accent-line" />
                  <span className="section-label">Key Services</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {sector.keyServices.map((service, i) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={contentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
                      className="p-5 border border-border/50 hover:border-gold/40 rounded transition-all duration-300 card-lift"
                      style={{ background: "oklch(var(--navy-800))" }}
                      data-ocid="sector.service.card"
                    >
                      <div className="w-6 h-0.5 bg-gradient-to-r from-gold to-gold-dim mb-3" />
                      <h3 className="font-heading font-bold text-foreground text-sm mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-body leading-relaxed">
                        {service.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right sidebar */}
            <div className="space-y-10">
              {/* Client Segments */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 border border-border/50 rounded"
                style={{ background: "oklch(var(--navy-800))" }}
                data-ocid="sector.clients.panel"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="accent-line" style={{ width: "1.5rem" }} />
                  <span className="section-label" style={{ fontSize: "9px" }}>
                    Client Segments
                  </span>
                </div>
                <ul className="space-y-3">
                  {sector.clientSegments.map((client, i) => (
                    <motion.li
                      key={client}
                      initial={{ opacity: 0, x: 10 }}
                      animate={contentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.35 + i * 0.05 }}
                      className="flex items-start gap-3 text-xs font-body text-muted-foreground"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-gold shrink-0 mt-0.5"
                      />
                      {client}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>

              {/* Related Capabilities */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 border border-border/50 rounded"
                style={{ background: "oklch(var(--navy-800))" }}
                data-ocid="sector.capabilities.panel"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="accent-line" style={{ width: "1.5rem" }} />
                  <span className="section-label" style={{ fontSize: "9px" }}>
                    Related Capabilities
                  </span>
                </div>
                <ul className="space-y-2">
                  {sector.relatedCapabilities.map((cap) => (
                    <li key={cap}>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.href = "/#services";
                        }}
                        className="w-full text-left text-xs font-body text-muted-foreground hover:text-gold transition-colors py-2 border-b border-border/30 last:border-0 flex items-center justify-between gap-2 group"
                        data-ocid="sector.capability.link"
                      >
                        <span>{cap}</span>
                        <ArrowRight
                          size={11}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-gold"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* Sector index list */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 border border-border/50 rounded"
                style={{ background: "oklch(var(--navy-800))" }}
                data-ocid="sector.index.panel"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="accent-line" style={{ width: "1.5rem" }} />
                  <span className="section-label" style={{ fontSize: "9px" }}>
                    All Sectors
                  </span>
                </div>
                <ul className="space-y-1">
                  {SECTORS.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.href = `/sectors/${s.id}`;
                        }}
                        className={`w-full text-left text-xs font-body py-2 border-b border-border/30 last:border-0 flex items-center justify-between gap-2 group transition-colors ${
                          s.id === sectorId
                            ? "text-gold font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        data-ocid="sector.index.link"
                      >
                        <span>{s.name}</span>
                        {s.id === sectorId && (
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>

          {/* Sector navigation: prev / next */}
          {(prevSector || nextSector) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-10 border-t border-border/40 grid sm:grid-cols-2 gap-4"
            >
              {prevSector ? (
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = `/sectors/${prevSector.id}`;
                  }}
                  className="flex items-center gap-4 p-5 border border-border/40 hover:border-gold/40 rounded text-left transition-all duration-300 group card-lift"
                  style={{ background: "oklch(var(--navy-800))" }}
                  data-ocid="sector.prev.button"
                >
                  <ArrowLeft
                    size={18}
                    className="text-gold shrink-0 group-hover:-translate-x-1 transition-transform"
                  />
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-body mb-1">
                      Previous Sector
                    </p>
                    <p className="text-sm font-heading font-bold text-foreground leading-snug">
                      {prevSector.name}
                    </p>
                  </div>
                </button>
              ) : (
                <div />
              )}

              {nextSector && (
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = `/sectors/${nextSector.id}`;
                  }}
                  className="flex items-center justify-end gap-4 p-5 border border-border/40 hover:border-gold/40 rounded text-right transition-all duration-300 group card-lift"
                  style={{ background: "oklch(var(--navy-800))" }}
                  data-ocid="sector.next.button"
                >
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-body mb-1">
                      Next Sector
                    </p>
                    <p className="text-sm font-heading font-bold text-foreground leading-snug">
                      {nextSector.name}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-gold shrink-0 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              )}
            </motion.div>
          )}
        </div>

        {/* ── CTA Banner ── */}
        <section
          className="relative overflow-hidden py-24"
          style={{
            background: `
              linear-gradient(135deg, oklch(var(--navy-900)) 0%, oklch(var(--navy-800)) 50%, oklch(var(--navy-900)) 100%)
            `,
          }}
          data-ocid="sector.cta.section"
        >
          {/* Decorative gold line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <div className="container max-w-4xl mx-auto px-6 sm:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="accent-line" />
                <span className="section-label">Partner with Aditattva</span>
                <span className="accent-line" />
              </div>
              <h2
                className="font-display font-extrabold text-foreground mb-4 leading-tight"
                style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}
              >
                Ready to partner on your next{" "}
                <span className="text-gold">
                  {sector.name.split(",")[0].split(" &")[0]}
                </span>{" "}
                project?
              </h2>
              <p className="text-base text-muted-foreground font-body mb-10 max-w-xl mx-auto leading-relaxed">
                Aditattva brings independent engineering expertise, deep domain
                knowledge, and a commitment to your outcomes. Let's start a
                conversation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gold text-navy-900 hover:bg-gold-bright font-body font-bold px-8 h-12 shadow-gold-sm"
                  onClick={() => {
                    window.location.href = "/#contact";
                  }}
                  data-ocid="sector.cta.primary_button"
                >
                  Contact Us
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/25 text-foreground hover:border-gold hover:text-gold font-body font-semibold px-8 h-12 bg-transparent"
                  onClick={() => {
                    window.location.href = "/#industries";
                  }}
                  data-ocid="sector.cta.secondary_button"
                >
                  ← All Industries
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
