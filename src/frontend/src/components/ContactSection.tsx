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
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: "Ratu Road, Ranchi, Jharkhand – 834001, India",
  },
  { icon: Phone, label: "Phone", value: "+91 92883 63351" },
  { icon: Mail, label: "Email", value: "info@aditattva.com" },
  { icon: Globe, label: "Website", value: "www.aditattva.com" },
];

export function ContactSection() {
  const { actor } = useActor();
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
              Get In Touch
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-gold">Aditattva</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Ready to partner with an independent, world-class engineering and
            digital consulting firm? Let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-8">
              Our Offices
            </h3>

            <div className="space-y-6 mb-10">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <info.icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5 font-body">
                      {info.label}
                    </p>
                    <p className="text-foreground font-heading font-medium text-sm">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Model */}
            <div className="bg-navy-mid border border-border rounded-xl p-6">
              <h4 className="font-heading font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                Global Delivery Model
              </h4>
              <div className="space-y-3">
                {[
                  {
                    mode: "Onsite",
                    desc: "Dedicated team embedded at client location",
                    best: "Owner's Engineer, PMC, Construction Supervision",
                  },
                  {
                    mode: "Offshore",
                    desc: "Work delivered from Ranchi delivery center",
                    best: "Design, IT consulting, data analytics, digital services",
                  },
                  {
                    mode: "Hybrid",
                    desc: "Blended onsite and offshore model",
                    best: "EPC management, digital transformation, large programs",
                  },
                ].map((item) => (
                  <div key={item.mode} className="flex gap-3">
                    <span className="text-gold font-heading font-bold text-xs mt-0.5 min-w-[52px]">
                      {item.mode}
                    </span>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full bg-navy-mid border border-gold/30 rounded-xl p-12 text-center"
                data-ocid="contact.success_state"
              >
                <CheckCircle2 size={56} className="text-gold mb-6" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Thank you for reaching out. Our team will review your inquiry
                  and get back to you within 1–2 business days.
                </p>
                <Button
                  variant="outline"
                  className="border-gold/50 text-gold hover:bg-gold/10"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-navy-mid border border-border rounded-xl p-8 space-y-5"
                noValidate
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-name"
                      className="text-sm font-heading text-foreground/80"
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
                      className="bg-navy-light border-border focus:border-gold focus:ring-gold/30 font-body text-sm"
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
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-email"
                      className="text-sm font-heading text-foreground/80"
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
                      className="bg-navy-light border-border focus:border-gold focus:ring-gold/30 font-body text-sm"
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

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-company"
                    className="text-sm font-heading text-foreground/80"
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
                    className="bg-navy-light border-border focus:border-gold focus:ring-gold/30 font-body text-sm"
                    data-ocid="contact.company.input"
                    autoComplete="organization"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-heading text-foreground/80"
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
                    className="bg-navy-light border-border focus:border-gold focus:ring-gold/30 font-body text-sm resize-none"
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
                  className="w-full bg-gold text-navy-deep hover:bg-gold-bright font-heading font-bold text-sm tracking-wide py-5"
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

                <p className="text-xs text-muted-foreground font-body text-center">
                  We typically respond within 1–2 business days.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
