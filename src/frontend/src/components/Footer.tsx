import { Heart } from "lucide-react";

const scrollTo = (id: string) => {
  document
    .querySelector(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const QUICK_LINKS = [
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
    <footer className="bg-navy-deep border-t border-border/50 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/aditattva-logo-transparent.dim_400x120.png"
              alt="Aditattva Technocrats"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-xs text-muted-foreground font-body leading-relaxed mb-4">
              Engineering Intelligence. Delivering Impact.
            </p>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              Independent · Multidisciplinary · Digital-First · ESG-Aligned
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-muted-foreground hover:text-gold transition-colors font-body"
                  data-ocid={`footer.${link.label.toLowerCase()}.link`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <p>Ratu Road, Ranchi</p>
              <p>Jharkhand – 834001, India</p>
              <p className="pt-2">+91 92883 63351</p>
              <p>info@aditattva.com</p>
              <p>www.aditattva.com</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/50 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-body">
          <p>
            © {year} Aditattva Technocrats Private Limited. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-gold mx-0.5" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-bright transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
