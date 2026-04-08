import { Toaster } from "@/components/ui/sonner";
import {
  Award,
  Building2,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Star,
  ThumbsUp,
  Truck,
  Users,
  X,
  ZoomIn,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const HERO_SLIDES = [
  {
    img: "/assets/generated/rajgreen-sandstone-hero.dim_1600x800.jpg",
    title: "Rajgreen — Born in Rajasthan",
    subtitle:
      "India's most sought-after sandstone, straight from our own quarries in Bijoliya.",
    tag: "Rajgreen Sandstone",
  },
  {
    img: "/assets/generated/mine-quarry.dim_1600x700.jpg",
    title: "We Own the Mines",
    subtitle:
      "No third-party sourcing. Every slab traced back to our quarry face in Rajasthan.",
    tag: "Direct from Our Quarry",
  },
  {
    img: "/assets/uploads/bl11-019d244f-f8c1-742d-b7f7-fca4715bfb21-1.jpeg",
    title: "Shipping to 50+ Countries",
    subtitle:
      "Bulk export orders handled with care — from our yard to your port, on schedule.",
    tag: "Global Export",
  },
  {
    img: "/assets/generated/stone-factory.dim_1600x700.jpg",
    title: "Factory Direct. No Middlemen.",
    subtitle:
      "Buy at quarry price. Custom sizes cut fresh in our own processing unit.",
    tag: "Our Factory",
  },
];

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  {
    label: "Sandstone",
    href: "#products",
    sub: [
      "Rajgreen",
      "Kandla Grey",
      "Autumn Brown",
      "Rippon Buff",
      "Mint",
      "Modak",
    ],
  },
  {
    label: "Granite",
    href: "#products",
    sub: ["Black Galaxy", "Steel Grey", "Kashmir White"],
  },
  {
    label: "Marble",
    href: "#products",
    sub: ["White Marble", "Pink Marble", "Green Marble"],
  },
  {
    label: "Limestone",
    href: "#products",
    sub: ["Black", "Blue", "Grey", "Yellow"],
  },
  {
    label: "Slate",
    href: "#products",
    sub: ["Green", "Black", "Silver"],
  },
  {
    label: "Stone Blocks",
    href: "#products",
    sub: ["Sandstone Blocks"],
  },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const TRUST_BADGES = [
  { icon: Shield, label: "ISO Certified Quality" },
  { icon: Clock, label: "In Business Since 2012" },
  { icon: CheckCircle, label: "Mine-to-Market Sourcing" },
  { icon: MessageCircle, label: "Dedicated Export Support" },
  { icon: Truck, label: "Reliable On-Time Dispatch" },
];

const STONES = [
  {
    name: "Kandla Grey",
    cat: "Sandstone",
    img: "/assets/uploads/img_20210220_181921-019d2438-dfc4-736a-afbc-0cdd53c71867-1.jpg",
    desc: "Cool-toned grey sandstone with a dense, even grain. Hugely popular across European paving and driveway projects.",
  },
  {
    name: "Rajgreen",
    cat: "Sandstone",
    img: "/assets/generated/sandstone-rajgreen.dim_600x400.jpg",
    desc: "A rare green-hued sandstone native to Bijoliya. Prized for garden patios, landscape steps, and feature walling.",
  },
  {
    name: "Rippon Buff",
    cat: "Sandstone",
    img: "/assets/uploads/img_0687-019d2435-194c-765d-abdb-60a12d8fc189-1.jpg",
    desc: "Honey-gold buff sandstone — India's highest-volume export variety. Versatile for paving, coping, and facades.",
  },
  {
    name: "Mint",
    cat: "Sandstone",
    img: "/assets/generated/sandstone-mint.dim_600x400.jpg",
    desc: "Pale sage sandstone with a clean, fresh look. Ideal for interior floors, courtyard paving, and wall cladding.",
  },
  {
    name: "Granite",
    cat: "Granite",
    img: "/assets/generated/granite.dim_600x400.jpg",
    desc: "Hard-wearing Indian granite with striking natural patterns. Built for countertops, heavy traffic floors, and exteriors.",
  },
  {
    name: "Marble",
    cat: "Marble",
    img: "/assets/generated/marble.dim_600x400.jpg",
    desc: "Silky-smooth marble with rich veining. The mark of premium interiors, hotel lobbies, and luxury residences.",
  },
];

const ALL_PRODUCTS = [
  {
    name: "Sandstone",
    img: "/assets/generated/sandstone.dim_600x400.jpg",
    desc: "Rajasthan sandstone in a full spectrum of colours and textures — naturally durable, suitable for both architectural cladding and landscape paving. Available in honed, natural, flamed, and bush-hammered finishes for export.",
    varieties: [
      {
        name: "Rajgreen",
        img: "/assets/generated/sandstone-rajgreen.dim_600x400.jpg",
      },
      {
        name: "Kandla Grey",
        img: "/assets/uploads/img_20210220_181921-019d2438-dfc4-736a-afbc-0cdd53c71867-1.jpg",
      },
      {
        name: "Autumn Brown",
        img: "/assets/generated/sandstone-autumn-brown.dim_600x400.jpg",
      },
      {
        name: "Rippon Buff",
        img: "/assets/uploads/img_0687-019d2435-194c-765d-abdb-60a12d8fc189-1.jpg",
      },
      { name: "Mint", img: "/assets/generated/sandstone-mint.dim_600x400.jpg" },
      {
        name: "Modak",
        img: "/assets/generated/sandstone-modak.dim_600x400.jpg",
      },
    ],
  },
  {
    name: "Granite",
    img: "/assets/generated/granite.dim_600x400.jpg",
    desc: "Indian granite sourced from South India's finest quarries — exceptionally hard, scratch-resistant, and bacteria-free. Used extensively in commercial countertops, flooring, and exterior cladding across global projects.",
  },
  {
    name: "Marble",
    img: "/assets/generated/marble.dim_600x400.jpg",
    desc: "Hand-selected Indian marble with rich veining and a luminous polish. Perfect for luxury hotel lobbies, residential interiors, feature staircases, and bathroom surfaces — available in blocks, slabs, or cut-to-size tiles.",
  },
  {
    name: "Limestone",
    img: "/assets/generated/limestone.dim_600x400.jpg",
    desc: "Earthy-toned Indian limestone valued for its understated texture and versatility. Widely specified for heritage restoration, building facades, and decorative flooring — available in multiple surface finishes for export.",
  },
  {
    name: "Slate",
    img: "/assets/generated/slate.dim_600x400.jpg",
    desc: "Dense, fine-grained Indian slate in classic dark tones with a characteristic natural split face. Frost-resistant and low-maintenance, making it a strong choice for roofing, wall cladding, and outdoor flooring.",
  },
  {
    name: "Quartzite",
    img: "/assets/generated/quartzite.dim_600x400.jpg",
    desc: "Ultra-hard metamorphic quartzite with a crystalline, shimmering surface. Ideal for high-traffic interior floors, staircases, and feature walls where strength and beauty are equally important.",
  },
  {
    name: "Woodland Sandstone Blocks",
    img: "/assets/uploads/bl11-019d244f-f8c1-742d-b7f7-fca4715bfb21-1.jpeg",
    desc: "Massive sandstone blocks direct from our own woodland quarry in Rajasthan. Each block is inspection-graded before loading, ensuring consistent colour and structural integrity for monumental and architectural projects worldwide.",
  },
  {
    name: "Rajgreen Bullnose Shootblast Tiles",
    cat: "Sandstone",
    img: "/assets/uploads/img_20251212_124950-019d287a-4a2a-73de-b938-87ca8950a96d-1.jpg",
    desc: "Precision-crafted Rajgreen sandstone tiles in 600×300×30mm with a shot-blasted surface finish and a clean machine-cut bullnose edge on one long side. The textured surface provides excellent grip — ideal for pool copings, outdoor steps, and garden borders.",
    images: [
      "/assets/uploads/img_20251212_124950-019d287a-4a2a-73de-b938-87ca8950a96d-1.jpg",
      "/assets/uploads/img_20251212_125004-019d287a-4a6d-7728-a93d-5fe2a67bafa8-2.jpg",
      "/assets/uploads/img_20251212_125003-019d287a-4ab3-773c-a1b6-f803922f4607-3.jpg",
    ],
  },
  {
    name: "Rajgreen Block Step",
    cat: "Sandstone",
    img: "/assets/placeholder-stone.jpg",
    desc: "Rajgreen sandstone block steps with a natural split face finish — robust, weather-resistant, and beautifully textured. Available in a range of custom dimensions to suit garden paths, entrance steps, and commercial landscaping. Suitable for both residential and large-scale landscape projects.",
  },
  {
    name: "Kandla Grey Sandstone Tiles",
    cat: "Sandstone",
    img: "/assets/img_20210220_181921-019d6b59-fa51-73f1-945d-8370cdae18bd.jpg",
    desc: "Consistent cool-grey sandstone tiles in a range of formats including cobbles, pavers, and large-format slabs. Kandla Grey is a favourite for contemporary driveways, garden paths, and terrace flooring — low maintenance and frost-resistant for year-round outdoor use.",
    images: [
      "/assets/img_20210220_181921-019d6b59-fa51-73f1-945d-8370cdae18bd.jpg",
      "/assets/img_20210215_122920-019d6b59-fc6b-7599-9da8-eb1870148496.jpg",
    ],
  },
  {
    name: "Teak Brown Sandstone Tiles",
    cat: "Sandstone",
    img: "/assets/img_0686-019d6b59-fec7-702d-9bf5-bdccc1748294.jpg",
    desc: "Warm teak-brown sandstone tiles with golden undertones that deepen with age. Available in natural, honed, and flamed finishes — widely used for interior flooring, exterior paving, and decorative façade cladding in residential and commercial builds.",
    images: [
      "/assets/img_0686-019d6b59-fec7-702d-9bf5-bdccc1748294.jpg",
      "/assets/img_0685-019d6b59-fef3-7479-9cbd-3fe7d0c8dccb.jpg",
    ],
  },
  {
    name: "Camel Dust Sandstone Tiles",
    cat: "Sandstone",
    img: "/assets/img_0683-019d6b59-ff48-744a-971e-085628625e5b.jpg",
    desc: "Soft buff-gold sandstone with a fine grain and warm camel tone that complements both modern and traditional architecture. Popular for pool surrounds, garden patios, and exterior wall cladding — available in natural split and sandblasted finishes for export.",
    images: [
      "/assets/img_0683-019d6b59-ff48-744a-971e-085628625e5b.jpg",
      "/assets/img_0684-019d6b59-ff88-743b-9ab9-c36557e49ddf.jpg",
    ],
  },
  {
    name: "Mint Sandstone Tiles",
    cat: "Sandstone",
    img: "/assets/img_0682-019d6b59-ff45-7202-ac92-736869eca7c9.jpg",
    desc: "Pale-toned mint sandstone with a subtle beige-cream base and light grey veining. Smooth-textured and versatile — a go-to choice for indoor floors, covered verandas, garden walkways, and feature walling in the UK and Australian markets.",
    images: [
      "/assets/img_0682-019d6b59-ff45-7202-ac92-736869eca7c9.jpg",
      "/assets/img_0681-019d6b5a-006c-747e-9dd0-6a860718f012.jpg",
    ],
  },
  {
    name: "Rippon Buff Sandstone Tiles",
    cat: "Sandstone",
    img: "/assets/img_0687-019d6b59-fc05-711f-94c8-6d5d78c68dbc.jpg",
    desc: "India's most trusted export-grade sandstone in a warm honey-yellow tone. Rippon Buff tiles are specified by UK and European landscape architects for driveway paving, garden coping, and heritage-style wall facing — available in standard and bespoke sizes.",
    images: ["/assets/img_0687-019d6b59-fc05-711f-94c8-6d5d78c68dbc.jpg"],
  },
  {
    name: "Multi Color Sandstone Tiles",
    cat: "Sandstone",
    img: "/assets/fb_img_1532922101056-019d6b59-f631-708a-a235-32c3e7b9708e.jpg",
    desc: "A naturally blended sandstone palette combining buff, grey, brown, and rust tones in a single tile. Creates eye-catching, organic-looking surfaces for patios, poolside areas, and stepping stone pathways — each batch uniquely different.",
    images: [
      "/assets/fb_img_1532922101056-019d6b59-f631-708a-a235-32c3e7b9708e.jpg",
      "/assets/img_20251209_085719-019d6b59-fd87-72e6-8547-4c32291e9b6e.jpg",
    ],
  },
  {
    name: "Sandstone Factory Yard — Mixed Slabs",
    cat: "Sandstone",
    img: "/assets/img_20251209_085937-019d6b59-fbc1-71ef-8f3a-834639a430c4.jpg",
    desc: "A selection of mixed natural sandstone slabs directly from our Rajasthan factory yard — quality-sorted, colour-graded, and ready for immediate bulk export. Ideal for importers and distributors who need variety in a single container shipment.",
    images: [
      "/assets/img_20251209_085937-019d6b59-fbc1-71ef-8f3a-834639a430c4.jpg",
    ],
  },
];

const WHY_CHOOSE = [
  {
    icon: CheckCircle,
    title: "Direct Mine Owners",
    desc: "We quarry, process, and export from our own mines in Bijoliya, Rajasthan — giving you complete traceability and zero supply-chain uncertainty.",
  },
  {
    icon: Award,
    title: "Custom Sizes Cut to Order",
    desc: "Need an unusual dimension? Our factory cuts to your specifications. No standard-size-only restrictions — you spec it, we manufacture it.",
  },
  {
    icon: Clock,
    title: "Zero Middlemen Pricing",
    desc: "Buying direct from the quarry owner means no agent markups. You receive factory-gate prices with no hidden layers between you and the source.",
  },
  {
    icon: ThumbsUp,
    title: "15+ Years Export Experience",
    desc: "Since 2012, we have shipped to over 50 countries. Our export documentation, packaging, and logistics are handled in-house by an experienced team.",
  },
  {
    icon: Shield,
    title: "Strict Pre-Shipment Testing",
    desc: "Every consignment is inspected for colour consistency, thickness tolerance, and surface defects before it leaves our yard — rejections happen at our cost, not yours.",
  },
  {
    icon: Users,
    title: "On-Time Dispatch, Every Time",
    desc: "We commit to delivery dates and honour them. Our dispatch team tracks every order from processing to port, keeping you informed at every stage.",
  },
];

const PROJECTS = [
  {
    title: "Luxury Hotel Lobby Flooring",
    location: "Dubai, UAE",
    year: 2023,
    area: "18,000 sqft",
    material: "Sandstone",
    stone: "Rajgreen Honed",
    img: "/assets/generated/project-facade.dim_700x500.jpg",
  },
  {
    title: "Heritage Building Restoration",
    location: "Yorkshire, United Kingdom",
    year: 2022,
    area: "32,000 sqft",
    material: "Sandstone",
    stone: "Rajgreen Pitched",
    img: "/assets/generated/project-patio.dim_700x500.jpg",
  },
  {
    title: "Residential Estate Paving",
    location: "Melbourne, Australia",
    year: 2021,
    area: "22,500 sqft",
    material: "Sandstone",
    stone: "Rippon Buff Natural",
    img: "/assets/generated/quarry.dim_800x600.jpg",
  },
];

const TESTIMONIALS = [
  {
    name: "Ahmed Al-Rashid",
    location: "UAE",
    flag: "🇦🇪",
    text: "The colour consistency across the entire shipment was exceptional — every pallet matched perfectly. Stone Heritage delivered on time and the packing was solid. We have already placed a repeat order.",
    rating: 5,
  },
  {
    name: "David Thompson",
    location: "United Kingdom",
    flag: "🇬🇧",
    text: "We specified custom dimensions for a heritage restoration project and Stone Heritage cut every piece to tolerance. The Rajgreen pitched face was exactly what the architect required. Professional team throughout.",
    rating: 5,
  },
  {
    name: "Marco Rossi",
    location: "Italy",
    flag: "🇮🇹",
    text: "We have been sourcing Indian sandstone for ten years and Stone Heritage stands out for their consistency. No surprises on quality, no delays on dispatch. That kind of reliability is rare in this trade.",
    rating: 5,
  },
];

const CERTIFICATIONS = [
  { icon: Shield, title: "ISO 9001:2015", sub: "Quality Management" },
  { icon: Award, title: "MSME Certified", sub: "Govt. of India" },
  { icon: Building2, title: "Export House", sub: "Recognised Exporter" },
  { icon: CheckCircle, title: "GST Verified", sub: "Tax Compliant" },
  { icon: HeartHandshake, title: "Member", sub: "FIEO India" },
];

const WA_NUMBER = "919828100255";
const waLink = (product: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hello, I am interested in ${product}. Please share pricing and availability.`)}`;

// ── Sub-components ────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <div
      style={{
        background: "#1b3a2d",
        color: "#aaa",
        fontSize: 12,
        padding: "6px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+919828100255"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              color: "#aaa",
              textDecoration: "none",
            }}
            className="hover:text-white transition-colors"
          >
            <Phone size={11} />
            <span>+91 9828100255</span>
          </a>
          <a
            href="mailto:stonekota@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              color: "#aaa",
              textDecoration: "none",
            }}
            className="hover:text-white transition-colors"
          >
            <Mail size={11} />
            <span>stonekota@gmail.com</span>
          </a>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <MapPin size={11} />
            <span>Bijoliya, Bhilwara, Rajasthan</span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            style={{ color: "#aaa" }}
            className="hover:text-white transition-colors"
          >
            <Facebook size={13} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            style={{ color: "#aaa" }}
            className="hover:text-white transition-colors"
          >
            <Instagram size={13} />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            style={{ color: "#aaa" }}
            className="hover:text-white transition-colors"
          >
            <Linkedin size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  return (
    <div
      className="stone-texture-cream"
      style={{ background: "#f0ece2", borderBottom: "1px solid #e0dbd3" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: 0,
          }}
        >
          {TRUST_BADGES.map((b) => (
            <div
              key={b.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                padding: "14px 16px",
                borderRight: "1px solid #e0dbd3",
                flex: 1,
                minWidth: 100,
              }}
            >
              <b.icon size={22} style={{ color: "#c9a84c" }} />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  color: "#1b3a2d",
                  textTransform: "uppercase",
                  textAlign: "center",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type NavItem = { label: string; href: string; sub?: string[] };

function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav
      style={{
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "#1b3a2d",
                  textTransform: "uppercase",
                  fontFamily: "Georgia, serif",
                }}
              >
                Stone Heritage
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  color: "#c9a84c",
                  textTransform: "uppercase",
                  marginTop: 2,
                }}
              >
                Manufacturer &amp; Exporter of Natural Stone
              </span>
            </div>
          </a>

          <div
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: 2 }}
          >
            {NAV_ITEMS.map((item: NavItem) => (
              <div key={item.label} className="nav-item">
                <a
                  href={item.href}
                  data-ocid={`nav.${item.label.toLowerCase().replace(/\s+/g, "-")}.link`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    padding: "8px 10px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#1b3a2d",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    fontFamily: "Playfair Display, serif",
                    textDecoration: "none",
                  }}
                  className="hover:text-yellow-700 transition-colors"
                >
                  {item.label}
                  {item.sub && <ChevronDown size={12} />}
                </a>
                {item.sub && (
                  <div className="nav-dropdown">
                    {item.sub.map((s) => (
                      <a
                        key={s}
                        href={item.href}
                        style={{
                          display: "block",
                          padding: "9px 16px",
                          fontSize: 12,
                          color: "#374151",
                          borderBottom: "1px solid #f3f4f6",
                          textDecoration: "none",
                        }}
                        className="hover:bg-emerald-50 hover:text-yellow-800 transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href={waLink("Natural Stone")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta hidden lg:inline-block"
              data-ocid="nav.quote.button"
            >
              Request Quote
            </a>
            <button
              type="button"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                padding: 8,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#1b3a2d",
              }}
              data-ocid="nav.mobile.toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "#fff",
              borderTop: "2px solid #c9a84c",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                maxWidth: 1280,
                margin: "0 auto",
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {NAV_ITEMS.map((item: NavItem) => (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => {
                      if (item.sub) {
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label,
                        );
                      } else {
                        window.location.href = item.href;
                        setMobileOpen(false);
                      }
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 8px",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1b3a2d",
                      fontFamily: "Playfair Display, serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    className="hover:text-yellow-700"
                  >
                    {item.label}
                    {item.sub && (
                      <ChevronDown
                        size={14}
                        style={{
                          transform:
                            mobileExpanded === item.label
                              ? "rotate(180deg)"
                              : "none",
                          transition: "transform 0.2s",
                        }}
                      />
                    )}
                  </button>
                  {item.sub && mobileExpanded === item.label && (
                    <div style={{ paddingLeft: 16, paddingBottom: 6 }}>
                      {item.sub.map((s) => (
                        <a
                          key={s}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            display: "block",
                            padding: "7px 0",
                            fontSize: 12,
                            color: "#6b7280",
                            borderBottom: "1px solid #f3f4f6",
                            textDecoration: "none",
                          }}
                          className="hover:text-yellow-700"
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href={waLink("Natural Stone")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                style={{ marginTop: 12, textAlign: "center", display: "block" }}
                data-ocid="nav.mobile.quote.button"
              >
                Request Quote via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((p) => (p + 1) % HERO_SLIDES.length),
      5000,
    );
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: startTimer uses only refs
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const go = (n: number) => {
    setCurrent((p) => (p + n + HERO_SLIDES.length) % HERO_SLIDES.length);
    startTimer();
  };

  const slide = HERO_SLIDES[current];

  return (
    <section
      id="home"
      style={{ position: "relative", overflow: "hidden", height: 520 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: "absolute", inset: 0 }}
        >
          <img
            src={slide.img}
            alt={slide.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(26,35,50,0.82) 0%, rgba(26,35,50,0.35) 60%, transparent 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: "#c9a84c",
                  fontFamily: "Playfair Display, serif",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {slide.tag}
              </div>
              <h1
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(28px, 5vw, 52px)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: 12,
                }}
              >
                {slide.title}
              </h1>
              <p
                style={{
                  fontSize: "clamp(14px, 2vw, 18px)",
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: 28,
                  maxWidth: 480,
                }}
              >
                {slide.subtitle}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href="#products" className="btn-cta">
                  Explore Products
                </a>
                <a
                  href={waLink("Natural Stone")}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 22px",
                    border: "2px solid #fff",
                    color: "#fff",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    borderRadius: 3,
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  className="hover:bg-white hover:text-navy"
                  data-ocid="hero.quote.button"
                >
                  <MessageCircle size={15} /> Request Quote
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous"
        style={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          background: "rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: "50%",
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <ChevronLeft size={20} color="#fff" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next"
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          background: "rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: "50%",
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <ChevronRight size={20} color="#fff" />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          gap: 8,
        }}
      >
        {HERO_SLIDES.map((slide, i) => (
          <button
            type="button"
            key={slide.tag}
            onClick={() => {
              setCurrent(i);
              startTimer();
            }}
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? "#c9a84c" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ tag, title }: { tag: string; title: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.18em",
          color: "#c9a84c",
          fontFamily: "Playfair Display, serif",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {tag}
      </div>
      <h2
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: 700,
          color: "#1b3a2d",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: 50,
          height: 3,
          background: "#c9a84c",
          margin: "8px auto 0",
          borderRadius: 2,
        }}
      />
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="stone-texture-cream"
      style={{ background: "#f7f4ef", padding: "72px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative" }}
          >
            <img
              src="/assets/generated/quarry.dim_800x600.jpg"
              alt="Stone Heritage Quarry"
              style={{
                width: "100%",
                height: 380,
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                background: "#c9a84c",
                padding: "20px 24px",
                borderRadius: 4,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Years in Business
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                fontFamily: "Playfair Display, serif",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              About Stone Heritage
            </div>
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 700,
                color: "#1b3a2d",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Quarry Owners. Manufacturers.
              <br />
              Direct Exporters.
            </h2>
            <div
              style={{
                width: 50,
                height: 3,
                background: "#c9a84c",
                marginBottom: 20,
                borderRadius: 2,
              }}
            />
            <p
              style={{
                color: "#4b5563",
                lineHeight: 1.8,
                marginBottom: 16,
                fontSize: 14,
              }}
            >
              Stone Heritage is a family-run natural stone business founded in
              2012, based at Bijoliya, Bhilwara — right in the heart of
              Rajasthan's stone belt. We are not agents or traders. We own our
              quarries, run our own factory, and manage every export shipment
              ourselves.
            </p>
            <p
              style={{
                color: "#4b5563",
                lineHeight: 1.8,
                marginBottom: 28,
                fontSize: 14,
              }}
            >
              From Rajgreen sandstone to granite, marble, and limestone — our
              range covers hundreds of colours and finishes. We supply landscape
              architects, stone importers, and construction firms across the UK,
              Europe, the Middle East, USA, and Australia with factory-direct
              pricing and bulk order capability.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                ["50+ Countries", "Export Markets"],
                ["1000+ Projects", "Successfully Delivered"],
                ["500+ Products", "In Our Range"],
                ["15+ Years", "Since 2012"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  style={{ borderLeft: "3px solid #c9a84c", paddingLeft: 12 }}
                >
                  <div
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#1b3a2d",
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={waLink("Natural Stone")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
              data-ocid="about.quote.button"
            >
              Talk to Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section
      style={{ background: "#fff", padding: "72px 0" }}
      className="stone-texture-white"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <SectionHeading
          tag="The Stone Heritage Advantage"
          title="Why We're Different"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                background: "#f7f4ef",
                borderRadius: 4,
                padding: "28px 24px",
                borderBottom: "3px solid #c9a84c",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              className="stone-texture-cream hover:shadow-stone hover:-translate-y-1"
            >
              <item.icon
                size={32}
                style={{ color: "#c9a84c", marginBottom: 12 }}
              />
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#1b3a2d",
                  marginBottom: 8,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrendingProducts({
  onZoom,
}: { onZoom: (img: string, name: string) => void }) {
  return (
    <section
      id="products"
      className="stone-texture-cream"
      style={{ background: "#f7f4ef", padding: "72px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <SectionHeading
          tag="Quarry-to-Market Picks"
          title="Our Most Exported Stones"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {STONES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="product-card"
              data-ocid={`trending.item.${i + 1}`}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: 160,
                }}
              >
                <img
                  src={s.img}
                  alt={s.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                  className="hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => onZoom(s.img, s.name)}
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.5)",
                    borderRadius: "50%",
                    padding: 4,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label={`Zoom ${s.name}`}
                  className="hover:bg-black/70 transition-colors"
                >
                  <ZoomIn size={13} color="#fff" />
                </button>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(212,118,10,0.9)",
                    padding: "3px 8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      color: "#fff",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    {s.cat}
                  </div>
                </div>
              </div>
              <div style={{ padding: "10px 12px 12px" }}>
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#1b3a2d",
                    marginBottom: 4,
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: 11,
                    color: "#9ca3af",
                    lineHeight: 1.5,
                    marginBottom: 8,
                  }}
                >
                  {s.desc.slice(0, 55)}...
                </p>
                <a
                  href={waLink(s.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta"
                  style={{
                    fontSize: 10,
                    padding: "6px 12px",
                    width: "100%",
                    textAlign: "center",
                    display: "block",
                  }}
                  data-ocid={`trending.quote.button.${i + 1}`}
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowseRange() {
  const categories = [
    { label: "Sandstone", img: "/assets/generated/sandstone.dim_600x400.jpg" },
    { label: "Granite", img: "/assets/generated/granite.dim_600x400.jpg" },
    { label: "Marble", img: "/assets/generated/marble.dim_600x400.jpg" },
    { label: "Limestone", img: "/assets/generated/limestone.dim_600x400.jpg" },
    { label: "Slate", img: "/assets/generated/slate.dim_600x400.jpg" },
    { label: "Quartzite", img: "/assets/generated/quartzite.dim_600x400.jpg" },
  ];
  return (
    <section style={{ background: "#1b3a2d", padding: "64px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#c9a84c",
              fontFamily: "Playfair Display, serif",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            Explore by Stone Type
          </div>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Find Your Stone
          </h2>
          <div
            style={{
              width: 50,
              height: 3,
              background: "#c9a84c",
              margin: "8px auto 0",
              borderRadius: 2,
            }}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((c, i) => (
            <motion.a
              key={c.label}
              href="#all-products"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="group relative overflow-hidden rounded block"
              style={{ height: 120, textDecoration: "none" }}
              data-ocid={`range.${c.label.toLowerCase()}.button`}
            >
              <img
                src={c.img}
                alt={c.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s",
                }}
                className="group-hover:scale-110"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  paddingBottom: 12,
                  background:
                    "linear-gradient(to top, rgba(26,35,50,0.85) 0%, transparent 60%)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 600,
                    fontSize: 13,
                    color: "#fff",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {c.label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AllProductsSection({
  onZoom,
}: { onZoom: (img: string, name: string) => void }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    "All",
    "Sandstone",
    "Granite",
    "Marble",
    "Limestone",
    "Slate",
    "Quartzite",
    "Blocks",
  ];

  const filtered = ALL_PRODUCTS.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Blocks")
      return p.name.toLowerCase().includes("block");
    return (
      p.name.toLowerCase().includes(activeFilter.toLowerCase()) ||
      (p as { cat?: string }).cat?.toLowerCase() === activeFilter.toLowerCase()
    );
  });

  return (
    <section
      id="all-products"
      className="stone-texture-white"
      style={{ background: "#fff", padding: "72px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <SectionHeading
          tag="Full Stone Catalogue"
          title="Our Stone Collection"
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            marginBottom: 32,
          }}
        >
          {filters.map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setActiveFilter(f)}
              data-ocid="products.filter.tab"
              style={{
                padding: "7px 16px",
                fontSize: 12,
                fontFamily: "Playfair Display, serif",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: "2px solid",
                borderRadius: 3,
                cursor: "pointer",
                transition: "all 0.2s",
                borderColor: activeFilter === f ? "#c9a84c" : "#e5e7eb",
                background: activeFilter === f ? "#c9a84c" : "#fff",
                color: activeFilter === f ? "#fff" : "#374151",
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="product-card"
              data-ocid={`products.item.${i + 1}`}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: 200,
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                  className="hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => onZoom(p.img, p.name)}
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.5)",
                    borderRadius: "50%",
                    padding: 6,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label={`Zoom ${p.name}`}
                  className="hover:bg-black/70 transition-colors"
                  data-ocid={`products.zoom.button.${i + 1}`}
                >
                  <ZoomIn size={14} color="#fff" />
                </button>
              </div>
              {(p as { images?: string[] }).images &&
                (p as { images?: string[] }).images!.length > 1 && (
                  <div
                    style={{ display: "flex", gap: 3, padding: "4px 4px 0" }}
                  >
                    {(p as { images?: string[] }).images!.map(
                      (thumb: string, ti: number) => (
                        <button
                          key={thumb}
                          type="button"
                          onClick={() =>
                            onZoom(thumb, `${p.name} - Photo ${ti + 1}`)
                          }
                          style={{
                            flex: 1,
                            height: 44,
                            border:
                              ti === 0
                                ? "2px solid #c8a96e"
                                : "1px solid #e5e7eb",
                            borderRadius: 2,
                            overflow: "hidden",
                            cursor: "pointer",
                            background: "none",
                            padding: 0,
                          }}
                          aria-label={`View photo ${ti + 1}`}
                        >
                          <img
                            src={thumb}
                            alt={`${p.name} ${ti + 1}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </button>
                      ),
                    )}
                  </div>
                )}
              <div style={{ padding: "14px 16px 16px" }}>
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#1b3a2d",
                    marginBottom: 6,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    color: "#6b7280",
                    lineHeight: 1.65,
                    marginBottom: 12,
                  }}
                >
                  {p.desc}
                </p>
                {p.varieties && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 4,
                      marginBottom: 12,
                    }}
                  >
                    {p.varieties.map((v) => (
                      <span
                        key={v.name}
                        style={{
                          fontSize: 10,
                          background: "#f0ece2",
                          color: "#6b7280",
                          padding: "2px 7px",
                          borderRadius: 2,
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        {v.name}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={waLink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta"
                  style={{
                    fontSize: 11,
                    padding: "8px 16px",
                    width: "100%",
                    textAlign: "center",
                    display: "block",
                  }}
                  data-ocid={`products.quote.button.${i + 1}`}
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiningSection({
  onZoom,
}: { onZoom: (img: string, name: string) => void }) {
  const mineImages = [
    {
      img: "/assets/generated/mine-quarry.dim_1600x700.jpg",
      label: "Live Quarry Face",
    },
    {
      img: "/assets/uploads/bl11-019d244f-f8c1-742d-b7f7-fca4715bfb21-1.jpeg",
      label: "Blocks Ready for Export",
    },
    {
      img: "/assets/generated/mine-blocks.dim_1600x700.jpg",
      label: "Graded Stone Blocks",
    },
    {
      img: "/assets/generated/stone-factory.dim_1600x700.jpg",
      label: "In-House Processing",
    },
  ];
  return (
    <section style={{ background: "#1b3a2d", padding: "72px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#c9a84c",
              fontFamily: "Playfair Display, serif",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            Straight from the Earth
          </div>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            From Our Own Quarries
          </h2>
          <div
            style={{
              width: 50,
              height: 3,
              background: "#c9a84c",
              margin: "8px auto 0",
              borderRadius: 2,
            }}
          />
          <p
            style={{
              color: "#9ca3af",
              fontSize: 13,
              maxWidth: 560,
              margin: "12px auto 0",
            }}
          >
            Every stone you see on this site starts its journey in our Bijoliya
            quarries in Rajasthan. We control extraction, sizing, finishing, and
            loading — no outside sourcing, no compromised quality.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {mineImages.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded cursor-pointer"
              style={{ height: 200 }}
              onClick={() => onZoom(m.img, m.label)}
              data-ocid={`mining.item.${i + 1}`}
            >
              <img
                src={m.img}
                alt={m.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s",
                }}
                className="group-hover:scale-105"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "flex-end",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                }}
              >
                <div style={{ padding: "12px 14px", width: "100%" }}>
                  <div
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#fff",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  opacity: 0,
                  transition: "opacity 0.2s",
                }}
                className="group-hover:opacity-100"
              >
                <ZoomIn size={18} color="#fff" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section
      className="stone-texture-cream"
      style={{ background: "#f7f4ef", padding: "60px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <SectionHeading
          tag="Verified & Accredited"
          title="Our Certifications"
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
          }}
        >
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{
                background: "#fff",
                border: "2px solid #e8e3dc",
                borderRadius: 6,
                padding: "18px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                minWidth: 130,
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              className="hover:border-amber-500 hover:shadow-stone"
            >
              <c.icon size={32} style={{ color: "#c9a84c" }} />
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#1b3a2d",
                  textAlign: "center",
                  letterSpacing: "0.04em",
                }}
              >
                {c.title}
              </div>
              <div
                style={{ fontSize: 11, color: "#6b7280", textAlign: "center" }}
              >
                {c.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({
  onZoom,
}: { onZoom: (img: string, name: string) => void }) {
  return (
    <section
      id="projects"
      className="stone-texture-white"
      style={{ background: "#fff", padding: "72px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <SectionHeading
          tag="Projects We're Proud Of"
          title="Delivered Worldwide"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="product-card"
              data-ocid={`projects.item.${i + 1}`}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: 220,
                }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                  className="hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => onZoom(p.img, p.title)}
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.5)",
                    borderRadius: "50%",
                    padding: 6,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                  }}
                  aria-label={`Zoom ${p.title}`}
                >
                  <ZoomIn size={14} color="#fff" />
                </button>
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "#c9a84c",
                    padding: "3px 10px",
                    borderRadius: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    {p.year}
                  </span>
                </div>
              </div>
              <div style={{ padding: "16px 18px 18px" }}>
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#1b3a2d",
                    marginBottom: 4,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 12, color: "#c9a84c", marginBottom: 10 }}>
                  {p.location}
                </p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    ["Area", p.area],
                    ["Material", p.material],
                    ["Stone", p.stone],
                  ].map(([k, v]) => (
                    <div key={k} style={{ fontSize: 11 }}>
                      <span
                        style={{
                          color: "#9ca3af",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          display: "block",
                        }}
                      >
                        {k}
                      </span>
                      <span style={{ color: "#374151" }}>{v}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={waLink(p.stone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    display: "block",
                    fontSize: 12,
                  }}
                  data-ocid={`projects.quote.button.${i + 1}`}
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section
      className="stone-texture-cream"
      style={{ background: "#f7f4ef", padding: "72px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <SectionHeading
          tag="Words from Our Clients"
          title="What Buyers Say About Us"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              style={{
                background: "#fff",
                borderLeft: "4px solid #c9a84c",
                borderRadius: 4,
                padding: 24,
                boxShadow: "0 2px 12px rgba(26,35,50,0.07)",
              }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div style={{ display: "flex", marginBottom: 12 }}>
                {Array.from({ length: t.rating }, (_, j) => j).map((j) => (
                  <Star
                    key={`star-${j}`}
                    size={15}
                    fill="#c9a84c"
                    color="#c9a84c"
                  />
                ))}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "#4b5563",
                  lineHeight: 1.75,
                  marginBottom: 16,
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#c9a84c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1b3a2d",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af" }}>
                    {t.flag} {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Thank you! We will contact you within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setSending(false);
    }, 800);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: 3,
    fontSize: 13,
    outline: "none",
    background: "#f7f4ef",
    fontFamily: "DM Sans, sans-serif",
  };
  const labelStyle = {
    fontSize: 12,
    fontWeight: 600,
    color: "#374151",
    display: "block",
    marginBottom: 5,
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    fontFamily: "Playfair Display, serif",
  };

  return (
    <section
      id="contact"
      className="stone-texture-white"
      style={{ background: "#fff", padding: "72px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <SectionHeading tag="Get in Touch" title="Send Us Your Requirement" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#1b3a2d",
                marginBottom: 20,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Tell Us What You Need
            </h3>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
              data-ocid="contact.form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your Name"
                    style={inputStyle}
                    data-ocid="contact.name.input"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@company.com"
                    style={inputStyle}
                    data-ocid="contact.email.input"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-phone" style={labelStyle}>
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  placeholder="+91 00000 00000"
                  style={inputStyle}
                  data-ocid="contact.phone.input"
                />
              </div>
              <div>
                <label htmlFor="contact-message" style={labelStyle}>
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  style={{ ...inputStyle, resize: "vertical" }}
                  data-ocid="contact.message.textarea"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-cta"
                style={{
                  alignSelf: "flex-start",
                  minWidth: 160,
                  opacity: sending ? 0.7 : 1,
                }}
                data-ocid="contact.submit.button"
              >
                {sending ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#1b3a2d",
                marginBottom: 20,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Our India Office
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  val: "NH. 27 Kota Road, Opposite Charbhuja Palace, Bijoliya, Bhilwara, Rajasthan 311602, India",
                },
                { icon: Phone, label: "Phone", val: "+91 9828100255" },
                { icon: Mail, label: "Email", val: "stonekota@gmail.com" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 16 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "#c9a84c",
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={18} color="#fff" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#9ca3af",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: 2,
                        fontFamily: "Playfair Display, serif",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#374151",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={waLink("Natural Stone")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 24,
                background: "#25D366",
                color: "#fff",
                padding: "14px 20px",
                borderRadius: 4,
                fontFamily: "Playfair Display, serif",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "opacity 0.2s",
                textDecoration: "none",
              }}
              className="hover:opacity-90"
              data-ocid="contact.whatsapp.button"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>
            <div
              style={{
                marginTop: 20,
                borderRadius: 4,
                border: "1px solid #e5e7eb",
                height: 180,
                background: "#f0ece2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <MapPin
                  size={32}
                  style={{
                    color: "#c9a84c",
                    margin: "0 auto 8px",
                    display: "block",
                  }}
                />
                <div style={{ fontSize: 12, color: "#6b7280" }}>
                  Bijoliya, Bhilwara, Rajasthan
                </div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>
                  NH-27, Rajasthan 311602
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
    <footer style={{ background: "#1b3a2d", color: "#9ca3af" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 16px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1,
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Stone Heritage
                </span>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    color: "#c9a84c",
                    textTransform: "uppercase",
                    marginTop: 3,
                  }}
                >
                  Manufacturer &amp; Exporter of Natural Stone
                </span>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.7 }}>
              Quarry owners, manufacturers, and direct exporters of Indian
              natural stone since 2012. From our mines in Rajasthan to your
              project site — anywhere in the world.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                style={{
                  width: 30,
                  height: 30,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                className="hover:bg-yellow-700"
              >
                <Facebook size={13} color="#fff" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                style={{
                  width: 30,
                  height: 30,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                className="hover:bg-yellow-700"
              >
                <Instagram size={13} color="#fff" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                style={{
                  width: 30,
                  height: 30,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                className="hover:bg-yellow-700"
              >
                <Linkedin size={13} color="#fff" />
              </a>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 14,
                borderBottom: "2px solid #c9a84c",
                paddingBottom: 8,
              }}
            >
              Stone Types
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Sandstone",
                "Granite",
                "Marble",
                "Limestone",
                "Slate",
                "Quartzite",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#all-products"
                    style={{
                      fontSize: 12,
                      color: "#9ca3af",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      textDecoration: "none",
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        background: "#c9a84c",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 14,
                borderBottom: "2px solid #c9a84c",
                paddingBottom: 8,
              }}
            >
              Quick Links
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Products", "#products"],
                ["Projects", "#projects"],
                ["Contact Us", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a
                    href={h}
                    style={{
                      fontSize: 12,
                      color: "#9ca3af",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      textDecoration: "none",
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        background: "#c9a84c",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 14,
                borderBottom: "2px solid #c9a84c",
                paddingBottom: 8,
              }}
            >
              Contact Info
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <MapPin
                  size={14}
                  style={{ color: "#c9a84c", flexShrink: 0, marginTop: 2 }}
                />
                <span
                  style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.6 }}
                >
                  NH. 27 Kota Road, Bijoliya, Bhilwara, Rajasthan 311602
                </span>
              </div>
              <a
                href="tel:+919828100255"
                style={{ display: "flex", gap: 8, textDecoration: "none" }}
                className="hover:text-white transition-colors"
              >
                <Phone size={14} style={{ color: "#c9a84c", flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "#9ca3af" }}>
                  +91 9828100255
                </span>
              </a>
              <a
                href="mailto:stonekota@gmail.com"
                style={{ display: "flex", gap: 8, textDecoration: "none" }}
                className="hover:text-white transition-colors"
              >
                <Mail size={14} style={{ color: "#c9a84c", flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "#9ca3af" }}>
                  stonekota@gmail.com
                </span>
              </a>
              <a
                href={waLink("Natural Stone")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#25D366",
                  padding: "8px 14px",
                  borderRadius: 3,
                  textDecoration: "none",
                }}
                className="hover:opacity-90 transition-opacity wa-blink"
                data-ocid="footer.whatsapp.button"
              >
                <MessageCircle size={14} color="#fff" />
                <span style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>
                  WhatsApp Us
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: 36,
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 11, color: "#6b7280" }}>
            © {year} Stone Heritage. All rights reserved.
          </span>
          <span style={{ fontSize: 11, color: "#6b7280" }}>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9a84c", textDecoration: "none" }}
              className="hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function ZoomModal({
  img,
  name,
  onClose,
}: { img: string; name: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.92)",
      }}
      onClick={onClose}
      data-ocid="zoom.modal"
    >
      <motion.div
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.85 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}
      >
        <img
          src={img}
          alt={name}
          style={{
            maxWidth: "90vw",
            maxHeight: "85vh",
            objectFit: "contain",
            borderRadius: 4,
            display: "block",
          }}
        />
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: -16,
            right: -16,
            background: "#c9a84c",
            border: "none",
            borderRadius: "50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          aria-label="Close"
          data-ocid="zoom.close.button"
        >
          <X size={16} color="#fff" />
        </button>
        <div
          style={{
            textAlign: "center",
            marginTop: 8,
            color: "rgba(255,255,255,0.7)",
            fontSize: 13,
            fontFamily: "Playfair Display, serif",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {name}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [zoom, setZoom] = useState<{ img: string; name: string } | null>(null);
  const openZoom = (img: string, name: string) => setZoom({ img, name });
  const closeZoom = () => setZoom(null);

  return (
    <>
      <Toaster richColors />
      <AnimatePresence>
        {zoom && (
          <ZoomModal img={zoom.img} name={zoom.name} onClose={closeZoom} />
        )}
      </AnimatePresence>

      <TopBar />
      <TrustBar />
      <MainNav />

      <main>
        <HeroSlider />
        <AboutSection />
        <WhyChooseSection />
        <TrendingProducts onZoom={openZoom} />
        <BrowseRange />
        <AllProductsSection onZoom={openZoom} />
        <MiningSection onZoom={openZoom} />
        <CertificationsSection />
        <ProjectsSection onZoom={openZoom} />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
