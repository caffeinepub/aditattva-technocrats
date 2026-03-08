import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  CheckCircle2,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function ContactSection() {
  const { actor } = useActor();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      if (!actor) throw new Error("Backend not available");
      await actor.submitContactForm(
        form.name,
        form.email,
        form.company,
        form.message,
      );
      setSubmitted(true);
      toast.success("Message sent successfully! We'll be in touch soon.", {
        duration: 5000,
      });
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      toast.error(
        "Failed to send message. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative"
      style={{ background: "oklch(var(--navy-900))" }}
    >
      {/* ── Full-bleed map/global banner ── */}
      <div className="relative h-52 overflow-hidden">
        <img
          src="/assets/generated/section-global.dim_1400x600.jpg"
          alt="Global delivery network"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(var(--navy-900)) 0%, oklch(var(--navy-900) / 0.6) 60%, oklch(var(--navy-900) / 0.3) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-7xl mx-auto px-6 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="accent-line" />
                <span className="section-label">Get In Touch</span>
              </div>
              <h2
                className="font-display font-extrabold text-foreground leading-tight"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
              >
                Contact <span className="text-gold">Aditattva</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* ── Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-10">
              Ready to partner with an independent, world-class engineering and
              digital consulting firm? Let's start a conversation.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Ratu Road, Ranchi, Jharkhand – 834001, India",
                },
                { icon: Phone, label: "Phone", value: "+91 92883 63351" },
                { icon: Mail, label: "Email", value: "info@aditattva.com" },
                { icon: Globe, label: "Website", value: "www.aditattva.com" },
              ].map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded border border-border/50 flex items-center justify-center shrink-0"
                    style={{ background: "oklch(var(--navy-700))" }}
                  >
                    <info.icon size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5 font-body">
                      {info.label}
                    </p>
                    <p className="text-sm text-foreground font-body font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery model */}
            <div
              className="p-6 border border-border/40 rounded"
              style={{ background: "oklch(var(--navy-800))" }}
            >
              <div className="section-label mb-4">Global Delivery Model</div>
              <div className="space-y-4">
                {[
                  {
                    mode: "Onsite",
                    desc: "Dedicated team embedded at client location",
                    best: "Owner's Engineer, PMC, Site Supervision",
                  },
                  {
                    mode: "Offshore",
                    desc: "Work from Ranchi delivery center",
                    best: "Design, IT consulting, analytics",
                  },
                  {
                    mode: "Hybrid",
                    desc: "Blended onsite and offshore model",
                    best: "EPC management, digital transformation",
                  },
                ].map((item) => (
                  <div key={item.mode} className="flex gap-3">
                    <span className="text-gold font-heading font-bold text-xs mt-0.5 min-w-[52px]">
                      {item.mode}
                    </span>
                    <div>
                      <p className="text-xs text-foreground/75 font-body">
                        {item.desc}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-body mt-0.5">
                        {item.best}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full border border-gold/20 rounded p-16 text-center"
                style={{ background: "oklch(var(--navy-800))" }}
                data-ocid="contact.success_state"
              >
                <CheckCircle2 size={52} className="text-gold mb-6" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Message Received
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-8 max-w-sm">
                  Thank you for reaching out. Our team will review your inquiry
                  and get back to you within 1–2 business days.
                </p>
                <Button
                  variant="outline"
                  className="border-gold/40 text-gold hover:bg-gold/10 font-body font-semibold"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-border/50 rounded p-8 sm:p-10 space-y-6"
                style={{ background: "oklch(var(--navy-800))" }}
                noValidate
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-muted-foreground font-body">
                    We typically respond within 1–2 business days.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="text-xs font-body font-semibold text-foreground/75 uppercase tracking-wider"
                    >
                      Full Name <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="font-body text-sm h-11 rounded-sm border-border/60 focus:border-gold focus:ring-0"
                      style={{ background: "oklch(var(--navy-700))" }}
                      data-ocid="contact.name.input"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p
                        className="text-xs text-destructive font-body"
                        data-ocid="contact.name.error_state"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-email"
                      className="text-xs font-body font-semibold text-foreground/75 uppercase tracking-wider"
                    >
                      Email Address <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="font-body text-sm h-11 rounded-sm border-border/60 focus:border-gold focus:ring-0"
                      style={{ background: "oklch(var(--navy-700))" }}
                      data-ocid="contact.email.input"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p
                        className="text-xs text-destructive font-body"
                        data-ocid="contact.email.error_state"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-company"
                    className="text-xs font-body font-semibold text-foreground/75 uppercase tracking-wider"
                  >
                    Company / Organization
                  </Label>
                  <Input
                    id="contact-company"
                    placeholder="Your company or organization"
                    value={form.company}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, company: e.target.value }))
                    }
                    className="font-body text-sm h-11 rounded-sm border-border/60 focus:border-gold focus:ring-0"
                    style={{ background: "oklch(var(--navy-700))" }}
                    data-ocid="contact.company.input"
                    autoComplete="organization"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="text-xs font-body font-semibold text-foreground/75 uppercase tracking-wider"
                  >
                    Message <span className="text-gold">*</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us about your project, requirements, or how we can help..."
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="font-body text-sm rounded-sm border-border/60 focus:border-gold focus:ring-0 resize-none"
                    style={{ background: "oklch(var(--navy-700))" }}
                    data-ocid="contact.message.textarea"
                  />
                  {errors.message && (
                    <p
                      className="text-xs text-destructive font-body"
                      data-ocid="contact.message.error_state"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gold text-navy-900 hover:bg-gold-bright font-body font-bold text-sm tracking-wide rounded-sm"
                  data-ocid="contact.form.submit_button"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
