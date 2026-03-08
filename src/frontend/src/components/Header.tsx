import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Innovation", href: "#innovation" },
  { label: "Advantage", href: "#advantage" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md border-b border-border shadow-navy-glow"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/aditattva-logo-transparent.dim_400x120.png"
              alt="Aditattva Technocrats"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium font-body text-muted-foreground hover:text-gold transition-colors duration-200 tracking-wide uppercase"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="ml-4 bg-gold text-navy-deep hover:bg-gold-bright font-heading font-bold tracking-wide"
              onClick={() => handleNavClick("#contact")}
              data-ocid="nav.contact.primary_button"
            >
              Get In Touch
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.hamburger.toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-navy-deep/98 backdrop-blur-md border-b border-border"
          >
            <nav className="container px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium font-body text-muted-foreground hover:text-gold transition-colors duration-200 tracking-wide uppercase border-b border-border/50 last:border-0"
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="mt-3 bg-gold text-navy-deep hover:bg-gold-bright font-heading font-bold"
                onClick={() => handleNavClick("#contact")}
                data-ocid="nav.mobile.contact.primary_button"
              >
                Get In Touch
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
