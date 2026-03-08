import { Mail, MapPin, Phone } from "lucide-react";

const scrollTo = (id: string) => {
  document
    .querySelector(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const SERVICES_LINKS = [
  "Engineering Consulting",
  "Engineering Design",
  "PMC / PMO",
  "EPCM Advisory",
  "MEP & Specialized Systems",
  "Digital & IT/OT",
  "Smart Systems",
  "ESG & Sustainability",
];

const SECTORS_LINKS = [
  { label: "Infrastructure & Smart Cities", id: "infrastructure-smart-cities" },
  { label: "Power & Renewable Energy", id: "power-renewable-energy" },
  { label: "Oil, Gas & Petrochemicals", id: "oil-gas-petrochemicals" },
  { label: "Mining, Metals & Cement", id: "mining-metals-cement" },
  { label: "Water & Environment", id: "water-environment" },
  { label: "Manufacturing & Process", id: "manufacturing-process" },
  { label: "Real Estate & Data Centers", id: "real-estate-data-centers" },
  { label: "Healthcare & Education", id: "healthcare-education" },
  { label: "Government & Public Sector", id: "government-public-sector" },
  { label: "Agriculture & Rural Dev.", id: "agriculture-rural" },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Innovation", href: "#innovation" },
  { label: "Advantage", href: "#advantage" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border/40"
      style={{ background: "oklch(var(--navy-900))" }}
    >
      {/* Main footer grid */}
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => {
                if (window.location.pathname !== "/") {
                  window.location.href = "/";
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="block mb-5"
            >
              <span
                className="font-display font-black uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors duration-300"
                style={{ fontSize: "1.2rem", letterSpacing: "0.22em" }}
              >
                ADI<span className="text-gold">TATTVA</span>
              </span>
            </button>
            <p className="text-xs text-muted-foreground font-body leading-relaxed mb-5">
              Engineering Intelligence. Delivering Impact.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {[
                "Independent",
                "Multidisciplinary",
                "Digital-First",
                "ESG-Aligned",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-body font-bold px-2 py-1 border border-border/50 text-muted-foreground uppercase tracking-wider rounded-sm"
                  style={{ background: "oklch(var(--navy-800))" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="space-y-2">
              <a
                href="tel:+919288363351"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-gold transition-colors font-body"
              >
                <Phone size={11} className="text-gold" />
                +91 92883 63351
              </a>
              <a
                href="mailto:info@aditattva.com"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-gold transition-colors font-body"
              >
                <Mail size={11} className="text-gold" />
                info@aditattva.com
              </a>
              <div className="flex items-start gap-2 text-xs text-muted-foreground font-body">
                <MapPin size={11} className="text-gold mt-0.5 shrink-0" />
                Ratu Road, Ranchi, Jharkhand – 834001, India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-body font-bold text-foreground uppercase tracking-[0.2em] mb-5">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES_LINKS.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#services")}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors font-body text-left"
                    data-ocid="footer.services.link"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-[10px] font-body font-bold text-foreground uppercase tracking-[0.2em] mb-5">
              Sectors
            </h3>
            <ul className="space-y-2">
              {SECTORS_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => {
                      window.location.href = `/sectors/${link.id}`;
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors font-body text-left"
                    data-ocid="footer.sectors.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav + Certifications */}
          <div>
            <h3 className="text-[10px] font-body font-bold text-foreground uppercase tracking-[0.2em] mb-5">
              Navigation
            </h3>
            <ul className="space-y-2 mb-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors font-body"
                    data-ocid={`footer.${link.label.toLowerCase()}.link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="text-[10px] font-body font-bold text-foreground uppercase tracking-[0.2em] mb-3">
              Standards
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {["ISO 9001", "ISO 45001", "UN SDGs", "IFC"].map((std) => (
                <span
                  key={std}
                  className="text-[9px] font-body px-2 py-0.5 border border-border/40 text-muted-foreground rounded-sm"
                  style={{ background: "oklch(var(--navy-800))" }}
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <hr className="gold-rule mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground font-body">
          <p>
            © {year} Aditattva Technocrats Private Limited. All Rights Reserved.
          </p>
          <p>
            Built with{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-bright transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
