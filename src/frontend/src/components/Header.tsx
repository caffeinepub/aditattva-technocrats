import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const INDUSTRIES_NAV = [
  {
    label: "Infrastructure & Smart Cities",
    sectorId: "infrastructure-smart-cities",
  },
  { label: "Power & Renewable Energy", sectorId: "power-renewable-energy" },
  { label: "Oil, Gas & Petrochemicals", sectorId: "oil-gas-petrochemicals" },
  { label: "Mining, Metals & Cement", sectorId: "mining-metals-cement" },
  { label: "Water & Environment", sectorId: "water-environment" },
  { label: "Manufacturing & Process", sectorId: "manufacturing-process" },
  { label: "Real Estate & Data Centers", sectorId: "real-estate-data-centers" },
  { label: "Healthcare & Education", sectorId: "healthcare-education" },
  { label: "Government & Public Sector", sectorId: "government-public-sector" },
  { label: "Agriculture & Rural Dev.", sectorId: "agriculture-rural" },
];

const NAV = [
  {
    label: "About",
    href: "#about",
    children: [
      { label: "Our Identity", href: "#about", sectorId: null },
      { label: "Vision & Mission", href: "#about", sectorId: null },
      { label: "Core Values", href: "#about", sectorId: null },
      { label: "Independence Commitment", href: "#about", sectorId: null },
    ],
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Engineering Consulting", href: "#services", sectorId: null },
      { label: "Engineering Design", href: "#services", sectorId: null },
      { label: "PMC / PMO", href: "#services", sectorId: null },
      { label: "EPCM Advisory", href: "#services", sectorId: null },
      { label: "MEP & Specialized Systems", href: "#services", sectorId: null },
      { label: "Digital & IT/OT", href: "#services", sectorId: null },
      {
        label: "Smart Systems & Industry 4.0",
        href: "#services",
        sectorId: null,
      },
      { label: "ESG & Sustainability", href: "#services", sectorId: null },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    children: INDUSTRIES_NAV.map((ind) => ({
      label: ind.label,
      href: "#industries",
      sectorId: ind.sectorId,
    })),
  },
  { label: "Innovation", href: "#innovation", children: null },
  { label: "Advantage", href: "#advantage", children: null },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    // If we're on a sector page, navigate back to home first
    if (window.location.hash !== "" || window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSectorClick = (sectorId: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    window.location.href = `/sectors/${sectorId}`;
  };

  const handleLogoClick = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div
        className={`hidden lg:block transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"
        }`}
        style={{ background: "oklch(var(--navy-900))" }}
      >
        <div className="container max-w-7xl mx-auto px-6 h-full flex items-center justify-end gap-6">
          <a
            href="tel:+919288363351"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors"
          >
            <Phone size={11} />
            <span>+91 92883 63351</span>
          </a>
          <a
            href="mailto:info@aditattva.com"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors"
          >
            <Mail size={11} />
            <span>info@aditattva.com</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-navy-900/97 backdrop-blur-xl shadow-navy border-b border-border/50"
            : "bg-navy-900/85 backdrop-blur-md"
        }`}
        ref={dropdownRef}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-[70px]">
            {/* Logo — Text only: ADITATTVA */}
            <button
              type="button"
              onClick={handleLogoClick}
              className="flex items-center gap-2 group shrink-0"
              data-ocid="nav.logo.link"
            >
              <span
                className="font-display font-black tracking-[0.18em] uppercase text-foreground group-hover:text-gold transition-colors duration-300"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                  letterSpacing: "0.22em",
                }}
              >
                ADI<span className="text-gold">TATTVA</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label,
                        )
                      }
                      className={`flex items-center gap-1 px-4 py-2 text-[13px] font-medium font-body tracking-wide transition-colors duration-200 ${
                        activeDropdown === item.label
                          ? "text-gold"
                          : "text-foreground/75 hover:text-foreground"
                      }`}
                      data-ocid={`nav.${item.label.toLowerCase()}.link`}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180 text-gold" : ""}`}
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className="px-4 py-2 text-[13px] font-medium font-body text-foreground/75 hover:text-foreground transition-colors duration-200 tracking-wide"
                      data-ocid={`nav.${item.label.toLowerCase()}.link`}
                    >
                      {item.label}
                    </button>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 w-68 bg-navy-800 border border-border rounded shadow-navy overflow-hidden z-50"
                        style={{ minWidth: "260px" }}
                      >
                        <div className="h-0.5 w-full bg-gradient-to-r from-gold-bright to-gold-dim" />
                        {item.children.map((child) => (
                          <button
                            type="button"
                            key={child.label}
                            onClick={() => {
                              if (child.sectorId) {
                                handleSectorClick(child.sectorId);
                              } else {
                                handleNavClick(child.href);
                              }
                            }}
                            className="w-full text-left px-5 py-3 text-[13px] font-body text-muted-foreground hover:text-foreground hover:bg-navy-700 border-b border-border/40 last:border-0 transition-colors duration-150"
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="ml-4 flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gold/40 text-gold hover:bg-gold/10 hover:border-gold font-body text-[13px] font-semibold tracking-wide h-8 px-4"
                  onClick={() => handleNavClick("#contact")}
                  data-ocid="nav.contact.secondary_button"
                >
                  Get In Touch
                </Button>
              </div>
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              className="lg:hidden p-2 text-foreground/80 hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.hamburger.toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden border-t border-border overflow-hidden"
              style={{ background: "oklch(var(--navy-800))" }}
            >
              <nav className="px-4 py-4 flex flex-col gap-0.5">
                {NAV.map((item) => (
                  <button
                    type="button"
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left px-3 py-3 text-sm font-medium font-body text-muted-foreground hover:text-gold transition-colors border-b border-border/40 last:border-0"
                    data-ocid={`nav.mobile.${item.label.toLowerCase()}.link`}
                  >
                    {item.label}
                  </button>
                ))}
                {/* Mobile industry links */}
                <div className="pt-2 pb-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-body px-3 pb-2">
                    Industry Sectors
                  </p>
                  {INDUSTRIES_NAV.slice(0, 6).map((ind) => (
                    <button
                      type="button"
                      key={ind.sectorId}
                      onClick={() => handleSectorClick(ind.sectorId)}
                      className="w-full text-left px-3 py-2 text-xs font-body text-muted-foreground hover:text-gold transition-colors"
                      data-ocid="nav.mobile.sector.link"
                    >
                      → {ind.label}
                    </button>
                  ))}
                </div>
                <Button
                  className="mt-3 bg-gold text-navy-900 hover:bg-gold-bright font-heading font-bold text-sm"
                  onClick={() => handleNavClick("#contact")}
                  data-ocid="nav.mobile.contact.primary_button"
                >
                  Get In Touch
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
