import { Toaster } from "@/components/ui/sonner";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Diamond,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Twitter,
  X,
  ZoomIn,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
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
    description:
      "Quarried from the mineral-rich plains of Rajasthan, our sandstone offers warm earthy tones and exceptional durability. Ideal for flooring, cladding, paving, and landscaping worldwide.",
    img: "/assets/uploads/img_0687-019d2435-194c-765d-abdb-60a12d8fc189-1.jpg",
  },
  {
    name: "Marble",
    subtitle: "Elegant & Timeless",
    description:
      "Sourced from the renowned quarries of Kishangarh, our marble delivers timeless elegance with lustrous veining. Perfect for interiors, countertops, and luxury architectural installations.",
    img: "/assets/generated/marble.dim_600x400.jpg",
  },
  {
    name: "Granite",
    subtitle: "Strong & Lustrous",
    description:
      "Our premium Indian granite combines extraordinary hardness with natural beauty. Available in multiple finishes, it is engineered for countertops, monuments, and high-traffic commercial surfaces.",
    img: "/assets/generated/granite.dim_600x400.jpg",
  },
  {
    name: "Limestone",
    subtitle: "Classic & Versatile",
    description:
      "A classic building material prized for its subtle texture and soft neutral palette. Stone Heritage limestone is widely used in facades, flooring, and heritage restoration projects.",
    img: "/assets/generated/limestone.dim_600x400.jpg",
  },
  {
    name: "Slate",
    subtitle: "Natural & Refined",
    description:
      "Our natural slate offers fine-grained texture with rich, dark tones. Highly resistant to frost and water, it is the preferred choice for roofing, wall cladding, and exterior paving.",
    img: "/assets/generated/slate.dim_600x400.jpg",
  },
  {
    name: "Quartzite",
    subtitle: "Pure & Resilient",
    description:
      "An ultra-hard metamorphic stone with crystalline shimmer and superior strength. Stone Heritage quartzite is sought after for luxury surfaces, stairs, and feature walls.",
    img: "/assets/generated/quartzite.dim_600x400.jpg",
  },
];

const SANDSTONE_VARIETIES = [
  {
    name: "Rajgreen",
    subtitle: "Earthy Green Tones",
    description:
      "A distinctive green-hued sandstone with natural moss-like tones, widely exported for garden patios and landscape architecture.",
    img: "/assets/generated/sandstone-rajgreen.dim_600x400.jpg",
  },
  {
    name: "Kandla Grey",
    subtitle: "Cool Grey Tones",
    description:
      "Premium grey sandstone with a cool, uniform tone. A top choice for contemporary outdoor paving and pool surrounds.",
    img: "/assets/uploads/img_20210220_181921-019d2438-dfc4-736a-afbc-0cdd53c71867-1.jpg",
  },
  {
    name: "Autumn Brown",
    subtitle: "Warm Rustic Browns",
    description:
      "Rich rustic brown tones with natural grain. Highly popular for driveway paving, wall cladding, and garden steps.",
    img: "/assets/generated/sandstone-autumn-brown.dim_600x400.jpg",
  },
  {
    name: "Rippon Buff",
    subtitle: "Classic Buff Cream",
    description:
      "Classic warm buff-cream sandstone, one of India's most exported varieties. Ideal for traditional and contemporary paving projects.",
    img: "/assets/uploads/img_0687-019d2435-194c-765d-abdb-60a12d8fc189-1.jpg",
  },
  {
    name: "Mint",
    subtitle: "Soft Mint Greens",
    description:
      "Soft sage-green sandstone with smooth texture, widely used in garden landscaping, terraces, and feature walls.",
    img: "/assets/generated/sandstone-mint.dim_600x400.jpg",
  },
  {
    name: "Modak",
    subtitle: "Pinkish Beige Hues",
    description:
      "A beautiful pinkish-beige sandstone unique to Rajasthan, popular in residential and commercial flooring and cladding.",
    img: "/assets/generated/sandstone-modak.dim_600x400.jpg",
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

function whatsappUrl(productName: string) {
  const text = `Hello, I would like a quote for ${productName}`;
  return `https://wa.me/919828100255?text=${encodeURIComponent(text)}`;
}

// ─── Zoom Modal ───────────────────────────────────────────────────────────────

interface ZoomModalProps {
  src: string | null;
  caption?: string;
  onClose: () => void;
}

function ZoomModal({ src, caption, onClose }: ZoomModalProps) {
  useEffect(() => {
    if (!src) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [src, onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (src) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [src]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          key="zoom-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 p-4"
          onClick={onClose}
          data-ocid="zoom.modal"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close zoom"
            data-ocid="zoom.close_button"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <motion.div
            key="zoom-image-wrap"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={caption ?? "Product image"}
              className="max-h-[82vh] max-w-[92vw] object-contain rounded-sm shadow-2xl"
            />
            {caption && (
              <p className="text-white/80 text-xs font-semibold tracking-[0.16em] uppercase">
                {caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

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

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919828100255?text=Hello%2C%20I%20would%20like%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-stone-gold text-white text-[11px] font-semibold tracking-widest uppercase rounded-sm hover:bg-stone-brown transition-colors duration-200"
              data-ocid="header.request_quote"
            >
              Request Quote
            </a>
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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const slides = [
    {
      img: "/assets/generated/rajgreen-sandstone-hero.dim_1600x800.jpg",
      caption: "Crafting Nature's Finest Stones",
      subtitle: "Manufacturer & Exporter of Premium Indian Natural Stone",
    },
    {
      img: "/assets/generated/mine-quarry.dim_1600x700.jpg",
      caption: "Our Own Mines in Rajasthan",
      subtitle: "Direct sourcing ensures quality and competitive pricing",
    },
    {
      img: "/assets/generated/mine-blocks.dim_1600x700.jpg",
      caption: "Stone Blocks Ready for Export",
      subtitle: "Sandstone, Marble, Granite & More — Shipped Worldwide",
    },
    {
      img: "/assets/generated/stone-factory.dim_1600x700.jpg",
      caption: "State-of-the-Art Processing Factory",
      subtitle:
        "Precision cutting, polishing and finishing for global standards",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 400);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!transitioning) {
        setTransitioning(true);
        setTimeout(() => {
          setCurrent((c) => (c + 1) % slides.length);
          setTransitioning(false);
        }, 400);
      }
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitioning]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative w-full min-h-[560px] lg:min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background images - crossfade */}
      {slides.map((s, i) => (
        <div
          key={s.img}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url('${s.img}')`,
            opacity: i === current ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-darker/80 via-stone-darker/60 to-stone-darker/20 z-[1]" />

      {/* Arrow buttons */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 border border-white/20 text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
        aria-label="Previous slide"
        data-ocid="hero.toggle"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 border border-white/20 text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
        aria-label="Next slide"
        data-ocid="hero.toggle"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
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
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 transition-opacity duration-300"
            style={{ opacity: transitioning ? 0 : 1 }}
          >
            {slide.caption}
          </h1>
          <p
            className="text-stone-tan text-base lg:text-lg font-medium mb-8 leading-relaxed transition-opacity duration-300"
            style={{ opacity: transitioning ? 0 : 1 }}
          >
            {slide.subtitle}
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
              href="https://wa.me/919828100255?text=Hello%2C%20I%20would%20like%20a%20quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-tan/30 border border-stone-tan text-white text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-stone-tan/50 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.secondary_button"
            >
              Request Quote
            </a>
          </div>
        </motion.div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((s, i) => (
            <button
              type="button"
              key={s.img}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-stone-gold w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Products ─────────────────────────────────────────────────────────────────

interface ProductsProps {
  onZoom: (src: string, caption: string) => void;
}

function Products({ onZoom }: ProductsProps) {
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
              <div className="overflow-hidden h-52 relative">
                <button
                  type="button"
                  className="w-full h-full cursor-zoom-in border-0 p-0 bg-transparent"
                  onClick={() => onZoom(stone.img, stone.name)}
                  aria-label={`Zoom ${stone.name}`}
                >
                  <img
                    src={stone.img}
                    alt={stone.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
                <div className="absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase text-stone-darker">
                    {stone.name}
                  </h3>
                  <p className="text-stone-muted text-xs tracking-wide mt-0.5">
                    {stone.subtitle}
                  </p>
                  <p className="text-stone-muted text-xs leading-relaxed mt-1">
                    {stone.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={whatsappUrl(stone.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-stone-gold text-stone-gold text-[10px] font-semibold tracking-widest uppercase rounded-sm hover:bg-stone-gold hover:text-white transition-colors duration-200"
                    data-ocid={`products.primary_button.${i + 1}`}
                  >
                    <MessageCircle className="w-3 h-3" />
                    Request Quote
                  </a>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-stone-gold hover:text-stone-dark transition-colors"
                    data-ocid={`products.button.${i + 1}`}
                  >
                    View More <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sandstone Varieties Sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-stone-taupe" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-6 h-px bg-stone-gold" />
                <Diamond
                  className="w-3 h-3 text-stone-gold"
                  fill="currentColor"
                />
                <div className="w-6 h-px bg-stone-gold" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold tracking-[0.14em] uppercase text-stone-darker">
                Sandstone Varieties
              </h3>
              <p className="mt-1 text-stone-muted text-xs tracking-wide">
                Explore our range of premium Indian sandstone colours
              </p>
            </div>
            <div className="flex-1 h-px bg-stone-taupe" />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="sandstone.list"
          >
            {SANDSTONE_VARIETIES.map((variety, i) => (
              <motion.div
                key={variety.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card border border-stone-taupe rounded-sm overflow-hidden hover:shadow-stone transition-shadow duration-300"
                data-ocid={`sandstone.item.${i + 1}`}
              >
                <div className="overflow-hidden h-40 relative">
                  <button
                    type="button"
                    className="w-full h-full cursor-zoom-in border-0 p-0 bg-transparent"
                    onClick={() => onZoom(variety.img, variety.name)}
                    aria-label={`Zoom ${variety.name}`}
                  >
                    <img
                      src={variety.img}
                      alt={variety.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                  <div className="absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <div>
                    <h4 className="font-bold text-xs tracking-widest uppercase text-stone-darker">
                      {variety.name}
                    </h4>
                    <p className="text-stone-muted text-[11px] tracking-wide mt-0.5">
                      {variety.subtitle}
                    </p>
                    <p className="text-stone-muted text-xs leading-snug mt-1">
                      {variety.description}
                    </p>
                  </div>
                  <a
                    href={whatsappUrl(variety.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 border border-stone-gold text-stone-gold text-[10px] font-semibold tracking-widest uppercase rounded-sm hover:bg-stone-gold hover:text-white transition-colors duration-200"
                    data-ocid={`sandstone.primary_button.${i + 1}`}
                  >
                    <MessageCircle className="w-3 h-3" />
                    Request Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Woodland Sandstone Blocks – Mine Direct Export */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-stone-taupe" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-6 h-px bg-stone-gold" />
                <Diamond
                  className="w-3 h-3 text-stone-gold"
                  fill="currentColor"
                />
                <div className="w-6 h-px bg-stone-gold" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold tracking-[0.14em] uppercase text-stone-darker">
                Woodland Sandstone Blocks
              </h3>
              <p className="mt-1 text-stone-muted text-xs tracking-wide">
                Direct from our own mines — bulk export available
              </p>
            </div>
            <div className="flex-1 h-px bg-stone-taupe" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-card border border-stone-taupe rounded-sm overflow-hidden hover:shadow-stone transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2"
            data-ocid="woodland.blocks.card"
          >
            <div className="overflow-hidden h-72 md:h-auto relative">
              <button
                type="button"
                className="w-full h-full cursor-zoom-in border-0 p-0 bg-transparent"
                onClick={() =>
                  onZoom(
                    "/assets/uploads/bl11-019d244f-f8c1-742d-b7f7-fca4715bfb21-1.jpeg",
                    "Woodland Sandstone Blocks",
                  )
                }
                aria-label="Zoom Woodland Sandstone Blocks"
              >
                <img
                  src="/assets/uploads/bl11-019d244f-f8c1-742d-b7f7-fca4715bfb21-1.jpeg"
                  alt="Woodland Sandstone Blocks — Mine Direct"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </button>
              <div className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center gap-5">
              <div>
                <span className="text-stone-gold text-xs font-semibold tracking-[0.18em] uppercase">
                  Mine Direct Export
                </span>
                <h4 className="text-xl font-bold tracking-wider uppercase text-stone-darker mt-2 mb-3">
                  Woodland Sandstone Blocks
                </h4>
                <p className="text-stone-muted text-sm leading-relaxed">
                  Sourced directly from our own woodland sandstone mines in
                  Rajasthan, these large-format raw blocks are precision-cut for
                  bulk export. The stone showcases warm buff-brown layered tones
                  with uniform grain — ideal for architectural cladding,
                  monumental projects, and dimensional stone processing.
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  "Direct from our own quarry — no middlemen",
                  "Large-format blocks available for bulk export",
                  "Warm buff-brown tones, fine natural grain",
                  "Custom dimensions on request",
                  "Export-ready with full documentation",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-xs text-stone-muted"
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-stone-gold shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={whatsappUrl("Woodland Sandstone Blocks")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-dark text-white text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-stone-brown transition-colors duration-200"
                  data-ocid="woodland.primary_button"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request Quote on WhatsApp
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-gold text-stone-gold text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-stone-gold hover:text-white transition-colors duration-200"
                  data-ocid="woodland.secondary_button"
                >
                  Send Enquiry
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

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

// ─── Projects ─────────────────────────────────────────────────────────────────

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

// ─── Contact ──────────────────────────────────────────────────────────────────

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
                  className="block text-xs font-semibold tracking-widests uppercase text-stone-darker mb-2"
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
                  className="block text-xs font-semibold tracking-widests uppercase text-stone-darker mb-2"
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
                  <div className="text-xs font-semibold tracking-widests uppercase text-stone-darker mb-1">
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
                  <div className="text-xs font-semibold tracking-widests uppercase text-stone-darker mb-1">
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
                  <div className="text-xs font-semibold tracking-widests uppercase text-stone-darker mb-1">
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
                  <div className="text-xs font-semibold tracking-widests uppercase text-stone-darker mb-1">
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

// ─── Footer ───────────────────────────────────────────────────────────────────

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
              <li className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href="https://wa.me/919828100255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-[#25D366] transition-colors font-medium"
                >
                  WhatsApp Us
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

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  const handleZoom = (src: string, caption: string) => {
    setZoomedImage({ src, caption });
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <ZoomModal
        src={zoomedImage?.src ?? null}
        caption={zoomedImage?.caption}
        onClose={handleCloseZoom}
      />
      <Header />
      <main>
        <Hero />
        <Products onZoom={handleZoom} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
