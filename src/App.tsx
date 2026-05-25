import { useState } from "react";
import {
  PhoneCall,
  Tablet,
  Users,
  MessageSquare,
  BadgeDollarSign,
  Check,
  ChevronDown,
  ArrowRight,
  Star,
  Menu,
  X,
  TrendingDown,
  Shield,
  Zap,
} from "lucide-react";

const GOLD = "#d4a017";
const BG = "#0a0f1e";
const BG_CARD = "#0f1628";
const BG_CARD2 = "#131c30";
const BORDER = "rgba(212, 160, 23, 0.15)";
const BORDER_MED = "rgba(212, 160, 23, 0.3)";

function GoldButton({
  children,
  href,
  large,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  large?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] ${large ? "px-8 py-4 text-lg" : "px-5 py-2.5 text-sm"} ${className}`;
  const style = { background: `linear-gradient(135deg, #d4a017 0%, #b8860b 100%)`, color: "#0a0f1e" };
  if (href) return <a href={href} className={cls} style={style}>{children}</a>;
  return <button className={cls} style={style}>{children}</button>;
}

function OutlineButton({
  children,
  href,
  large,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  large?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/5 ${large ? "px-8 py-4 text-lg" : "px-5 py-2.5 text-sm"} ${className}`;
  const style = { border: `1.5px solid ${BORDER_MED}`, color: "#e8d5a0" };
  if (href) return <a href={href} className={cls} style={style}>{children}</a>;
  return <button className={cls} style={style}>{children}</button>;
}

function GHLogo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt="GoldenHost AI"
      width={size}
      height={size}
      className={className}
      style={{ filter: "brightness(1)" }}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: `${BG}e8`,
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <GHLogo size={36} />
          <span
            className="font-bold text-lg tracking-tight hidden sm:block"
            style={{ color: GOLD, fontFamily: "Inter, sans-serif" }}
          >
            GoldenHost AI
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors duration-150 hover:opacity-100"
              style={{ color: "rgba(232, 213, 160, 0.7)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d5a0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232, 213, 160, 0.7)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.goldenhost.app/auth"
            className="text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150"
            style={{ color: "rgba(232, 213, 160, 0.7)" }}
          >
            Sign In
          </a>
          <GoldButton href="https://app.goldenhost.app/auth">Start Free Trial</GoldButton>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#e8d5a0" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ borderTop: `1px solid ${BORDER}`, background: BG }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="py-2 text-sm font-medium"
              style={{ color: "rgba(232, 213, 160, 0.8)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <GoldButton href="https://app.goldenhost.app/auth" className="w-full mt-2">
            Start Free Trial
          </GoldButton>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 pb-24 overflow-hidden"
      style={{ background: BG }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,160,23,0.12) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 40% at 50% 100%, rgba(212,160,23,0.06) 0%, transparent 70%)`,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(212,160,23,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
          style={{
            border: `1px solid ${BORDER_MED}`,
            background: "rgba(212,160,23,0.08)",
            color: GOLD,
          }}
        >
          <Star size={12} fill={GOLD} />
          No per-cover fees · No setup costs · Just $250/month
        </div>

        {/* Logo centrepiece */}
        <div className="flex justify-center mb-8">
          <div
            className="relative p-6 rounded-2xl"
            style={{
              background: "rgba(212,160,23,0.06)",
              border: `1px solid ${BORDER_MED}`,
              boxShadow: `0 0 60px rgba(212,160,23,0.2), 0 0 120px rgba(212,160,23,0.08)`,
            }}
          >
            <GHLogo size={120} />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,160,23,0.15), transparent 70%)",
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
        >
          The Smarter Way to{" "}
          <span style={{ color: GOLD }}>Run Your Restaurant</span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
          style={{ color: "rgba(232,213,160,0.7)", fontFamily: "Inter, sans-serif" }}
        >
          Sofia, your AI phone agent, answers every call and books every reservation 24/7. GoldenHost AI handles reservations, no-shows, floor management, and guest relationships — for a flat $250/month.
        </p>

        <p
          className="text-sm mb-10 font-medium"
          style={{ color: "rgba(212,160,23,0.8)" }}
        >
          Built for independent mid-to-high-end restaurants in the GTA
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <GoldButton href="https://app.goldenhost.app/auth" large>
            Start Your 30-Day Free Trial
            <ArrowRight size={18} />
          </GoldButton>
          <OutlineButton href="#how-it-works" large>
            See How It Works
          </OutlineButton>
        </div>

        <p
          className="mt-5 text-xs"
          style={{ color: "rgba(232,213,160,0.4)" }}
        >
          Cancel anytime · Setup in under 5 minutes
        </p>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 mt-20 w-full max-w-4xl mx-auto rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden"
        style={{ background: BORDER, border: `1px solid ${BORDER}` }}
      >
        {[
          { value: "$0", label: "Per-cover fees" },
          { value: "24/7", label: "AI availability" },
          { value: "30%", label: "Fewer no-shows" },
          { value: "5 min", label: "Setup time" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="py-6 px-4 text-center"
            style={{ background: BG_CARD }}
          >
            <div
              className="text-2xl sm:text-3xl font-bold mb-1"
              style={{ color: GOLD, fontFamily: "Inter, sans-serif" }}
            >
              {stat.value}
            </div>
            <div
              className="text-xs sm:text-sm"
              style={{ color: "rgba(232,213,160,0.5)" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    icon: PhoneCall,
    title: "AI Phone Agent — Sofia",
    description:
      "Sofia answers every call, takes reservations, handles special requests, and responds to inquiries 24/7. Never miss a booking again — not even at 2am.",
    highlight: true,
  },
  {
    icon: TrendingDown,
    title: "No-Show Risk Scoring",
    description:
      "AI predicts which reservations are likely to cancel and automatically requests a deposit. Protect your revenue before the no-show happens.",
  },
  {
    icon: Tablet,
    title: "iPad Floor Management",
    description:
      "A beautiful, touch-first floor plan lets your team seat guests, manage table turns, and track covers — all from a single iPad on the floor.",
  },
  {
    icon: Users,
    title: "Guest CRM",
    description:
      "Every guest's allergy notes, dietary preferences, visit history, and VIP status in one place. Your team knows who walks through the door before they sit down.",
  },
  {
    icon: MessageSquare,
    title: "SMS Confirmations & Reminders",
    description:
      "Automated text confirmations and 24-hour reminders go out without you lifting a finger — cutting no-shows and keeping guests informed.",
  },
  {
    icon: BadgeDollarSign,
    title: "Deposit Collection",
    description:
      "Collect deposits for large parties and special events automatically. Stripe-powered, fully integrated — no separate tools needed.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 px-6" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: GOLD }}
          >
            Everything You Need
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
          >
            One Platform. Every Tool.
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(232,213,160,0.6)" }}
          >
            GoldenHost AI replaces three or four separate tools with one seamless platform — at a fraction of the cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className="group relative p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: highlight
                  ? `linear-gradient(135deg, rgba(212,160,23,0.1) 0%, rgba(212,160,23,0.04) 100%)`
                  : BG_CARD,
                border: `1px solid ${highlight ? BORDER_MED : BORDER}`,
                boxShadow: highlight ? `0 0 30px rgba(212,160,23,0.08)` : undefined,
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: "rgba(212,160,23,0.12)",
                  border: `1px solid ${BORDER_MED}`,
                }}
              >
                <Icon size={20} style={{ color: GOLD }} />
              </div>
              <h3
                className="font-semibold text-base mb-2"
                style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(232,213,160,0.55)" }}
              >
                {description}
              </p>
              {highlight && (
                <span
                  className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(212,160,23,0.15)", color: GOLD }}
                >
                  AI-Powered
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Zap,
      title: "Set Up in 5 Minutes",
      description:
        "Create your account, upload your floor plan, and configure your tables. Our onboarding wizard walks you through everything — no tech expertise required.",
    },
    {
      number: "02",
      icon: PhoneCall,
      title: "Sofia Handles Your Calls",
      description:
        "Forward your reservation line to Sofia. She answers in your restaurant's name, books reservations, answers questions, and logs everything automatically.",
    },
    {
      number: "03",
      icon: Tablet,
      title: "Manage Everything From the Floor",
      description:
        "Your team uses the iPad floor plan to seat guests, manage waitlists, and see every reservation detail. Managers get the full dashboard on any device.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 px-6"
      style={{ background: `linear-gradient(180deg, ${BG} 0%, #0c1020 50%, ${BG} 100%)` }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: GOLD }}
          >
            How It Works
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
          >
            Up and Running in an Afternoon
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(232,213,160,0.6)" }}
          >
            No lengthy onboarding. No third-party consultants. No IT department.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 relative"
                style={{
                  background: "rgba(212,160,23,0.08)",
                  border: `1px solid ${BORDER_MED}`,
                }}
              >
                <Icon size={24} style={{ color: GOLD }} />
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: GOLD, color: BG }}
                >
                  {number.replace("0", "")}
                </span>
              </div>
              <h3
                className="font-semibold text-lg mb-3"
                style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(232,213,160,0.55)" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    { label: "Monthly cost", gh: "$250 flat", ot: "$449+ base + per-cover fees" },
    { label: "Per-cover fees", gh: "None", ot: "$1.00–$1.50 per network cover" },
    { label: "AI phone agent", gh: "Included (Sofia)", ot: "Not available" },
    { label: "No-show prediction", gh: "Included", ot: "Not available" },
    { label: "Deposit collection", gh: "Included", ot: "Via third-party integration only" },
    { label: "Floor plan management", gh: "Full iPad mode", ot: "Basic" },
    { label: "Guest CRM", gh: "Full CRM with allergies", ot: "Limited" },
    { label: "SMS reminders", gh: "Included", ot: "Add-on" },
    { label: "Free trial", gh: "30 days, no card", ot: "None" },
  ];

  return (
    <section className="py-24 px-6" style={{ background: BG }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: GOLD }}
          >
            Why Switch
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
          >
            GoldenHost AI vs. OpenTable
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(232,213,160,0.6)" }}
          >
            OpenTable charges per diner. A busy Saturday night can cost you $200+ in fees alone. Stop paying for every seat you fill.
          </p>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${BORDER}` }}
        >
          <div
            className="grid grid-cols-3 text-sm font-semibold py-3 px-6"
            style={{
              background: "rgba(212,160,23,0.08)",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            <span style={{ color: "rgba(232,213,160,0.5)" }}>Feature</span>
            <span style={{ color: GOLD }}>GoldenHost AI</span>
            <span style={{ color: "rgba(232,213,160,0.4)" }}>OpenTable</span>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-3 items-center py-4 px-6 text-sm"
              style={{
                background: i % 2 === 0 ? BG_CARD : BG_CARD2,
                borderBottom: i < rows.length - 1 ? `1px solid ${BORDER}` : undefined,
              }}
            >
              <span style={{ color: "rgba(232,213,160,0.6)" }}>{row.label}</span>
              <span className="flex items-center gap-2 font-medium" style={{ color: "#c8f5c4" }}>
                <Check size={14} style={{ color: "#4ade80" }} />
                {row.gh}
              </span>
              <span style={{ color: "rgba(232,213,160,0.4)" }}>{row.ot}</span>
            </div>
          ))}
        </div>

        <p
          className="text-center text-xs mt-6"
          style={{ color: "rgba(232,213,160,0.3)" }}
        >
          OpenTable pricing as of May 2026. Actual costs vary by plan and reservation volume.
        </p>
      </div>
    </section>
  );
}

function Pricing() {
  const everything = [
    "Sofia AI phone agent — 24/7 reservation booking",
    "No-show risk scoring & automatic deposit collection",
    "iPad floor management with live table status",
    "Full guest CRM — allergies, preferences, VIP notes",
    "SMS confirmations and 24-hour reminders",
    "Waitlist management",
    "Analytics dashboard",
    "Square POS integration",
    "Unlimited reservations, unlimited covers",
    "Priority support",
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-6"
      style={{ background: `linear-gradient(180deg, ${BG} 0%, #0b1124 100%)` }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: GOLD }}
          >
            Pricing
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
          >
            One Plan. Everything Included.
          </h2>
          <p
            className="text-lg"
            style={{ color: "rgba(232,213,160,0.6)" }}
          >
            No tiers. No add-ons. No surprises.
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden p-8 sm:p-10"
          style={{
            background: BG_CARD,
            border: `1px solid ${BORDER_MED}`,
            boxShadow: `0 0 60px rgba(212,160,23,0.12), 0 0 120px rgba(212,160,23,0.05)`,
          }}
        >
          {/* Top glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(212,160,23,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <div
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: GOLD }}
              >
                GoldenHost AI — Full Platform
              </div>
              <div
                className="flex items-end gap-2"
                style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
              >
                <span className="text-6xl font-bold">$250</span>
                <span
                  className="text-xl mb-2"
                  style={{ color: "rgba(232,213,160,0.5)" }}
                >
                  /month
                </span>
              </div>
              <p
                className="text-sm mt-1"
                style={{ color: "rgba(232,213,160,0.5)" }}
              >
                No per-cover fees. No setup fees.
              </p>
            </div>
            <div
              className="px-4 py-2 rounded-xl text-center"
              style={{
                background: "rgba(212,160,23,0.12)",
                border: `1px solid ${BORDER_MED}`,
              }}
            >
              <div className="text-xs font-medium mb-0.5" style={{ color: "rgba(212,160,23,0.7)" }}>Try free for</div>
              <div className="text-2xl font-bold" style={{ color: GOLD }}>30 days</div>
              <div className="text-xs" style={{ color: "rgba(212,160,23,0.7)" }}>then $250/month</div>
            </div>
          </div>

          <div
            className="h-px mb-8"
            style={{ background: BORDER }}
          />

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {everything.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(74,222,128,0.15)" }}
                >
                  <Check size={11} style={{ color: "#4ade80" }} />
                </div>
                <span
                  className="text-sm leading-snug"
                  style={{ color: "rgba(232,213,160,0.7)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <GoldButton href="https://app.goldenhost.app/auth" large className="w-full justify-center">
            Start Your Free 30-Day Trial
            <ArrowRight size={18} />
          </GoldButton>
          <p
            className="text-center text-xs mt-3"
            style={{ color: "rgba(232,213,160,0.35)" }}
          >
            Cancel anytime · Instant access
          </p>
        </div>

        <div
          className="mt-6 rounded-xl p-5 flex items-start gap-4"
          style={{
            background: "rgba(212,160,23,0.05)",
            border: `1px solid ${BORDER}`,
          }}
        >
          <Shield size={20} style={{ color: GOLD, flexShrink: 0, marginTop: 2 }} />
          <div>
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: "#f5e9c8" }}
            >
              Our promise: if GoldenHost AI doesn't reduce your no-show rate in 30 days, you pay nothing.
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(232,213,160,0.5)" }}
            >
              We're confident enough in the product to back it with a full money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      quote:
        "We switched from OpenTable after realizing we were paying over $800 a month in cover fees alone on a good weekend. GoldenHost costs a fraction of that and Sofia is genuinely better at booking than our old front desk phone system.",
      author: "Marco R.",
      restaurant: "Trattoria Napoli, Yorkville",
    },
    {
      quote:
        "The no-show predictor alone paid for the first three months. We used to have five or six tables go dark every Friday. Now it's one, maybe two — and we collected deposits on the risky ones.",
      author: "Linda K.",
      restaurant: "Kensington Modern, Toronto",
    },
    {
      quote:
        "Setup was painless. I had the floor plan loaded and Sofia answering calls within an afternoon. My staff love the iPad mode — it replaced our paper seating chart immediately.",
      author: "Ahmed S.",
      restaurant: "Saffron House, North York",
    },
  ];

  return (
    <section className="py-24 px-6" style={{ background: BG }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: GOLD }}
          >
            From Restaurants Like Yours
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
          >
            GTA Restaurants Are Making the Switch
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(({ quote, author, restaurant }) => (
            <div
              key={author}
              className="p-6 rounded-xl flex flex-col gap-4"
              style={{
                background: BG_CARD,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={GOLD} style={{ color: GOLD }} />
                ))}
              </div>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "rgba(232,213,160,0.65)" }}
              >
                "{quote}"
              </p>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#f5e9c8" }}
                >
                  {author}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(212,160,23,0.7)" }}
                >
                  {restaurant}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Does GoldenHost AI replace OpenTable?",
      a: "Yes — GoldenHost AI handles everything OpenTable does: reservations, reminders, and guest management. But it also includes a built-in AI phone agent (Sofia) that OpenTable doesn't offer natively, plus no-show prediction and a full iPad floor management mode — all for a flat $250/month instead of per-cover fees that add up fast on a busy night.",
    },
    {
      q: "How does the 30-day free trial work?",
      a: "Sign up and get full access to every feature for 30 days. No credit card is required to start. If you decide to continue, your first charge is $250 on day 31. If you cancel before then, you owe nothing.",
    },
    {
      q: "Does my restaurant's phone number change?",
      a: "No. You keep your existing number. You simply forward calls to Sofia's line — and can un-forward with one tap if you ever need to. Sofia answers in your restaurant's name exactly as you configure it.",
    },
    {
      q: "How quickly can I get set up?",
      a: "Most restaurants are fully configured in under an hour. The onboarding wizard guides you through your floor plan, table setup, and Sofia's greeting. There's no tech expertise required.",
    },
    {
      q: "Can Sofia handle special requests and dietary restrictions?",
      a: "Yes. Sofia logs every special request — allergies, anniversaries, accessibility needs — directly into the guest CRM. Your front of house team sees all of this before the guest arrives.",
    },
    {
      q: "What if I want to cancel?",
      a: "You can cancel anytime from your billing settings. Your subscription will remain active until the end of your current billing period, after which your account will be deactivated.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6" style={{ background: BG }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: GOLD }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
          >
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="rounded-xl overflow-hidden"
              style={{
                border: `1px solid ${open === i ? BORDER_MED : BORDER}`,
                background: open === i ? BG_CARD : "transparent",
                transition: "all 0.2s ease",
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: open === i ? "#f5e9c8" : "rgba(232,213,160,0.8)" }}
                >
                  {q}
                </span>
                <ChevronDown
                  size={16}
                  style={{
                    color: GOLD,
                    flexShrink: 0,
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>
              {open === i && (
                <div
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: "rgba(232,213,160,0.55)" }}
                >
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: BG }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,160,23,0.1) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(212,160,23,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <GHLogo size={72} />
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight"
          style={{ color: "#f5e9c8", fontFamily: "Inter, sans-serif" }}
        >
          Your restaurant deserves a{" "}
          <span style={{ color: GOLD }}>better platform</span>
        </h2>
        <p
          className="text-lg mb-10"
          style={{ color: "rgba(232,213,160,0.6)" }}
        >
          Start your free 30-day trial today. No credit card, no commitment, no setup fees. Sofia will be answering your calls by tonight.
        </p>
        <GoldButton href="https://app.goldenhost.app/auth" large>
          Get Started Free — 30 Days
          <ArrowRight size={18} />
        </GoldButton>
        <p
          className="mt-4 text-xs"
          style={{ color: "rgba(232,213,160,0.35)" }}
        >
          Setup in minutes · No contracts · Cancel anytime
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Sign In", href: "https://app.goldenhost.app/auth" },
  ];

  return (
    <footer
      className="py-12 px-6"
      style={{
        background: BG,
        borderTop: `1px solid ${BORDER}`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <GHLogo size={32} />
              <span
                className="font-bold text-base"
                style={{ color: GOLD }}
              >
                GoldenHost AI
              </span>
            </div>
            <p
              className="text-xs max-w-xs text-center md:text-left"
              style={{ color: "rgba(232,213,160,0.35)" }}
            >
              The AI-powered restaurant management platform for independent restaurants in the GTA.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm transition-colors"
                style={{ color: "rgba(232,213,160,0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(232,213,160,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,213,160,0.45)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(232,213,160,0.25)" }}
          >
            © {new Date().getFullYear()} GoldenHost AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs transition-colors"
              style={{ color: "rgba(232,160,23,0.25)" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs transition-colors"
              style={{ color: "rgba(212,160,23,0.25)" }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
