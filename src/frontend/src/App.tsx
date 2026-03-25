import { Toaster } from "@/components/ui/sonner";
import {
  ArrowRight,
  ChevronRight,
  Diamond,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "PRODUCTS", href: "#products" },
  { label: "ABOUT US", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT US", href: "#contact" },
];

const STONES = [
  {
    name: "Sandstone",
    subtitle: "Warm & Durable",
    img: "/assets/generated/sandstone.dim_600x400.jpg",
  },
  {
    name: "Marble",
    subtitle: "Elegant & Timeless",
    img: "/assets/generated/marble.dim_600x400.jpg",
  },
  {
    name: "Granite",
    subtitle: "Strong & Lustrous",
    img: "/assets/generated/granite.dim_600x400.jpg",
  },
  {
    name: "Limestone",
    subtitle: "Classic & Versatile",
    img: "/assets/generated/limestone.dim_600x400.jpg",
  },
  {
    name: "Slate",
    subtitle: "Natural & Refined",
    img: "/assets/generated/slate.dim_600x400.jpg",
  },
  {
    name: "Quartzite",
    subtitle: "Pure & Resilient",
    img: "/assets/generated/quartzite.dim_600x400.jpg",
  },
];

const PROJECTS = [
  {
    title: "Luxury Outdoor Patio",
    category: "Residential",
    description:
      "A stunning outdoor retreat in Dubai featuring premium Rajasthan sandstone flooring. The natural warm tones complement the surrounding landscape, creating a seamless blend of indoor elegance and outdoor living.",
    stone: "Sandstone Flooring",
    img: "/assets/generated/project-patio.dim_700x500.jpg",
  },
  {
    title: "Commercial Facade Cladding",
    category: "Commercial",
    description:
      "A landmark commercial building in London clad in precision-cut granite and marble panels. The stone's natural lustre and durability make it ideal for high-traffic architectural facades with lasting visual impact.",
    stone: "Granite & Marble Cladding",
    img: "/assets/generated/project-facade.dim_700x500.jpg",
  },
];

const SOCIAL_LINKS = [
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-beige/95 backdrop-blur-sm shadow-stone border-b border-stone-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#home"
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/stone-heritage-logo-transparent.dim_800x800.png"
              alt="Stone Heritage Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="leading-tight">
              <div className="text-stone-darker font-bold text-sm tracking-[0.18em] uppercase">
                Stone Heritage
              </div>
              <div className="text-stone-muted text-[10px] tracking-[0.12em] uppercase">
                Est. Rajasthan, India
              </div>
            </div>
          </a>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-semibold tracking-[0.12em] uppercase text-stone-darker hover:text-stone-gold transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 rounded text-stone-darker hover:text-stone-gold transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-stone-beige border-t border-stone-taupe overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[13px] font-semibold tracking-[0.12em] uppercase text-stone-darker hover:text-stone-gold transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[560px] lg:min-h-[700px] flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-stone.dim_1400x700.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-darker/80 via-stone-darker/60 to-stone-darker/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-stone-gold" />
            <span className="text-stone-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Premium Quality
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Crafting Nature's
            <br />
            Finest Stones
          </h1>
          <p className="text-stone-tan text-base lg:text-lg font-medium mb-8 leading-relaxed">
            Manufacturer &amp; Exporter of Premium
            <br className="hidden sm:block" /> Indian Natural Stone
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-dark text-white text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-stone-brown transition-colors duration-200"
              data-ocid="hero.primary_button"
            >
              Explore Products <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-tan/30 border border-stone-tan text-white text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-stone-tan/50 transition-colors duration-200"
              data-ocid="hero.secondary_button"
            >
              Request Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-px bg-stone-gold" />
            <Diamond className="w-4 h-4 text-stone-gold" fill="currentColor" />
            <div className="w-10 h-px bg-stone-gold" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-[0.12em] uppercase text-stone-darker">
            Our Premium Stone Collections
          </h2>
          <p className="mt-3 text-stone-muted text-sm max-w-xl mx-auto leading-relaxed">
            Sourced from the finest quarries across Rajasthan and beyond, our
            stones are crafted to meet global standards of quality and beauty.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="products.list"
        >
          {STONES.map((stone, i) => (
            <motion.div
              key={stone.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card border border-stone-taupe rounded-sm overflow-hidden hover:shadow-stone transition-shadow duration-300"
              data-ocid={`products.item.${i + 1}`}
            >
              <div className="overflow-hidden h-52">
                <img
                  src={stone.img}
                  alt={stone.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase text-stone-darker">
                    {stone.name}
                  </h3>
                  <p className="text-stone-muted text-xs tracking-wide mt-0.5">
                    {stone.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-stone-gold hover:text-stone-dark transition-colors"
                  data-ocid={`products.button.${i + 1}`}
                >
                  View More <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-stone-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-sm"
          >
            <img
              src="/assets/generated/quarry.dim_800x600.jpg"
              alt="Stone Heritage Quarry Operations"
              className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stone-gold" />
              <span className="text-stone-gold text-xs font-semibold tracking-[0.2em] uppercase">
                Our Legacy
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-[0.1em] uppercase text-stone-darker mb-6">
              Our Craft &amp; Heritage
            </h2>
            <p className="text-stone-muted text-sm leading-relaxed mb-4">
              Stone Heritage is a trusted manufacturer and exporter of premium
              Indian natural stone with decades of craftsmanship passed through
              generations. Our quarries span the mineral-rich lands of
              Rajasthan, yielding stones of unparalleled character and quality.
            </p>
            <p className="text-stone-muted text-sm leading-relaxed mb-4">
              From the golden sandstone of Jodhpur to the lustrous marble of
              Kishangarh, each slab is carefully cut, finished, and
              quality-checked to meet the rigorous demands of international
              markets.
            </p>
            <p className="text-stone-muted text-sm leading-relaxed mb-8">
              We export to clients across UAE, UK, USA, Europe, and Australia —
              building lasting relationships founded on quality, reliability,
              and a deep respect for natural stone.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-dark text-white text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-stone-brown transition-colors duration-200"
              data-ocid="about.primary_button"
            >
              Our Story <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-stone-gold" />
            <span className="text-stone-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-[0.1em] uppercase text-stone-darker">
            Featured Projects
          </h2>
          <p className="mt-2 text-stone-muted text-sm">
            A showcase of our stone in iconic installations around the world.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8" data-ocid="projects.list">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card border border-stone-taupe rounded-sm overflow-hidden hover:shadow-stone transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2"
              data-ocid={`projects.item.${i + 1}`}
            >
              <div className="overflow-hidden h-64 md:h-auto">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-stone-gold text-xs font-semibold tracking-[0.18em] uppercase mb-2">
                  {proj.category}
                </span>
                <h3 className="text-lg font-bold tracking-wider uppercase text-stone-darker mb-3">
                  {proj.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-stone-beige text-stone-muted px-2 py-1 rounded-sm font-medium">
                    {proj.stone}
                  </span>
                </div>
                <p className="text-stone-muted text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
                <button
                  type="button"
                  className="self-start flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-stone-dark border border-stone-dark px-4 py-2.5 rounded-sm hover:bg-stone-dark hover:text-white transition-colors duration-200"
                  data-ocid={`projects.button.${i + 1}`}
                >
                  View More <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { actor } = useActor();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    try {
      await actor?.submitContactForm(form.name, form.email, form.message);
      setSubmitted(true);
      toast.success("Message sent! We will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-stone-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-px bg-stone-gold" />
            <Diamond className="w-4 h-4 text-stone-gold" fill="currentColor" />
            <div className="w-10 h-px bg-stone-gold" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-[0.12em] uppercase text-stone-darker">
            Contact Us
          </h2>
          <p className="mt-3 text-stone-muted text-sm max-w-md mx-auto">
            Get in touch with our team for quotes, samples, or project
            consultations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-ocid="contact.modal"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold tracking-widest uppercase text-stone-darker mb-2"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-white border border-stone-taupe rounded-sm text-sm text-stone-darker placeholder-stone-muted/60 focus:outline-none focus:ring-2 focus:ring-stone-gold/40 focus:border-stone-gold transition-colors"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold tracking-widest uppercase text-stone-darker mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-white border border-stone-taupe rounded-sm text-sm text-stone-darker placeholder-stone-muted/60 focus:outline-none focus:ring-2 focus:ring-stone-gold/40 focus:border-stone-gold transition-colors"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold tracking-widest uppercase text-stone-darker mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Describe your project requirements, stone type needed, quantity, etc."
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-white border border-stone-taupe rounded-sm text-sm text-stone-darker placeholder-stone-muted/60 focus:outline-none focus:ring-2 focus:ring-stone-gold/40 focus:border-stone-gold transition-colors resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-dark text-white text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-stone-brown disabled:opacity-60 transition-colors duration-200"
                data-ocid="contact.submit_button"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              {submitted && (
                <div
                  className="text-green-700 text-sm text-center font-medium"
                  data-ocid="contact.success_state"
                >
                  ✓ Your message has been sent successfully!
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-lg font-bold tracking-widest uppercase text-stone-darker mb-1">
                Stone Heritage
              </h3>
              <p className="text-stone-gold text-xs font-semibold tracking-[0.18em] uppercase">
                Manufacturer &amp; Exporter
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-dark/10 shrink-0">
                  <MapPin className="w-4 h-4 text-stone-gold" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-stone-darker mb-1">
                    Address
                  </div>
                  <div className="text-stone-muted text-sm leading-relaxed">
                    NH. 27 Kota Road, Opposite Charbhuja Palace
                    <br />
                    Bijoliya, Bhilwara, Rajasthan 311602, India
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-dark/10 shrink-0">
                  <Mail className="w-4 h-4 text-stone-gold" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-stone-darker mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:stonekota@gmail.com"
                    className="text-stone-muted text-sm hover:text-stone-gold transition-colors"
                  >
                    stonekota@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-dark/10 shrink-0">
                  <Phone className="w-4 h-4 text-stone-gold" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-stone-darker mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:+919828100255"
                    className="text-stone-muted text-sm hover:text-stone-gold transition-colors"
                  >
                    +91 9828100255
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-dark/10 shrink-0">
                  <Globe className="w-4 h-4 text-stone-gold" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-stone-darker mb-1">
                    Export Destinations
                  </div>
                  <div className="text-stone-muted text-sm">
                    UAE · UK · USA · Europe · Australia
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-stone-dark/5 border border-stone-taupe rounded-sm">
              <div className="text-xs font-semibold tracking-widest uppercase text-stone-darker mb-3">
                Business Hours
              </div>
              <div className="space-y-1 text-sm text-stone-muted">
                <div className="flex justify-between">
                  <span>Mon – Sat</span>
                  <span>9:00 AM – 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-darker text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/stone-heritage-logo-transparent.dim_800x800.png"
                alt="Stone Heritage Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="text-white font-bold text-sm tracking-[0.18em] uppercase">
                  Stone Heritage
                </div>
                <div className="text-stone-gold/70 text-[10px] tracking-[0.12em] uppercase">
                  Est. Rajasthan, India
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium manufacturer &amp; exporter of Indian natural stone.
              Quality craftsmanship trusted by clients worldwide.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-stone-gold/30 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-stone-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-stone-gold transition-colors flex items-center gap-2"
                    data-ocid="nav.link"
                  >
                    <ChevronRight className="w-3 h-3 text-stone-gold/50" />{" "}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-stone-gold mb-5">
              Our Stones
            </h4>
            <ul className="space-y-3">
              {STONES.map((stone) => (
                <li key={stone.name}>
                  <a
                    href="#products"
                    className="text-white/60 text-sm hover:text-stone-gold transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-3 h-3 text-stone-gold/50" />{" "}
                    {stone.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-stone-gold mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-stone-gold shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  NH. 27 Kota Road, Opposite Charbhuja Palace, Bijoliya,
                  Bhilwara, Rajasthan 311602, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-stone-gold shrink-0 mt-0.5" />
                <a
                  href="mailto:stonekota@gmail.com"
                  className="text-white/60 text-sm hover:text-stone-gold transition-colors"
                >
                  stonekota@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-stone-gold shrink-0 mt-0.5" />
                <a
                  href="tel:+919828100255"
                  className="text-white/60 text-sm hover:text-stone-gold transition-colors"
                >
                  +91 9828100255
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} Stone Heritage. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-gold/60 hover:text-stone-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
