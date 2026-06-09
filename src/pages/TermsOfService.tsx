const GOLD = "#d4a017";
const BG = "#0a0f1e";
const BG_CARD = "#0f1628";
const BORDER = "rgba(212, 160, 23, 0.15)";

const TEXT_BODY = "rgba(232, 213, 160, 0.65)";
const TEXT_HEADING = "#f5e9c8";

function GHLogo({ size = 48 }: { size?: number }) {
  return (
    <img
      src="/logo.svg"
      alt="GoldenHost AI"
      width={size}
      height={size}
      style={{ filter: "brightness(1)" }}
    />
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ marginTop: "2.5rem", marginBottom: "0.75rem" }}>
      <span
        style={{
          display: "inline-block",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: GOLD,
          marginBottom: "0.35rem",
        }}
      >
        Section {number}
      </span>
      <h2
        style={{
          fontSize: "1.125rem",
          fontWeight: 700,
          color: TEXT_HEADING,
          fontFamily: "Inter, sans-serif",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: BORDER, margin: "2rem 0" }} />;
}

function Bullet() {
  return (
    <span
      style={{
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: GOLD,
        flexShrink: 0,
        marginTop: "0.6rem",
      }}
    />
  );
}

const paragraphStyle = {
  fontSize: "0.9375rem",
  lineHeight: 1.75,
  color: TEXT_BODY,
  margin: 0,
} as const;

const listItemStyle = {
  display: "flex",
  alignItems: "flex-start" as const,
  gap: "0.75rem",
  marginBottom: "0.875rem",
  fontSize: "0.9375rem",
  lineHeight: 1.7,
  color: TEXT_BODY,
};

const billingClauses = [
  {
    label: "3.1 Pricing",
    detail:
      "Access to GoldenHost AI requires a one-time setup fee of $250 CAD and a monthly subscription of $500 CAD/month, billed in Canadian dollars.",
  },
  {
    label: "3.2 Free Trial",
    detail:
      "New accounts receive a 30-day free trial with full platform access. No charge is made during the trial period. At the end of the trial, your subscription begins automatically unless you cancel before the trial ends.",
  },
  {
    label: "3.3 Setup Fee",
    detail:
      "The $250 setup fee is charged at the time of onboarding. This fee is non-refundable once onboarding has been completed and your account is active.",
  },
  {
    label: "3.4 Cancellation",
    detail:
      "You may cancel your subscription at any time from your Billing settings. Cancellation takes effect at the end of your current billing period. No partial refunds are issued for unused portions of a billing cycle.",
  },
  {
    label: "3.5 Price Changes",
    detail:
      "We reserve the right to change subscription pricing with 30 days' written notice via email. Continued use after the notice period constitutes acceptance of the new pricing.",
  },
];

const acceptableUseItems = [
  "Use the Service for any unlawful purpose.",
  "Send unsolicited or spam messages to guests.",
  "Misrepresent Sofia as a human agent to guests (Sofia discloses she is an AI at the start of every call).",
  "Attempt to reverse-engineer, copy, or resell the Service.",
  "Use the Service in any way that could damage, disable, or impair the platform.",
];

export default function TermsOfService() {
  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: `${BG}e8`,
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
            }}
          >
            <GHLogo size={32} />
            <span style={{ fontWeight: 700, fontSize: "1rem", color: GOLD }}>
              GoldenHost AI
            </span>
          </a>
          <a
            href="/"
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "rgba(232, 213, 160, 0.6)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d5a0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232, 213, 160, 0.6)")}
          >
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Content */}
      <main
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "4rem 1.5rem 6rem",
        }}
      >
        {/* Page title */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: 800,
              color: TEXT_HEADING,
              fontFamily: "Inter, sans-serif",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Terms of Service
          </h1>
          <p style={{ fontSize: "0.875rem", color: "rgba(212, 160, 23, 0.7)", margin: 0 }}>
            Effective: June 9, 2026
          </p>
        </div>

        {/* Intro */}
        <p style={paragraphStyle}>
          Please read these Terms of Service carefully before using GoldenHost AI. By
          creating an account or using the platform, you agree to be bound by these terms.
        </p>

        <Divider />

        {/* Section 1 */}
        <SectionHeading number="1" title="Acceptance of Terms" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem" }}>
          By signing up for or using GoldenHost AI ("the Service"), you ("the Restaurant"
          or "you") agree to these Terms of Service. If you do not agree, do not use the
          Service. These terms form a binding agreement between you and GoldenHost AI
          ("we", "us", "our"), a company operating under Ontario, Canada law.
        </p>

        <Divider />

        {/* Section 2 */}
        <SectionHeading number="2" title="Description of Service" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem" }}>
          GoldenHost AI is a cloud-based restaurant management platform providing
          reservation management, an AI phone agent (Sofia), guest CRM, floor management,
          SMS notifications, deposit collection, and related tools. We are a software
          platform — we do not make or guarantee reservations on behalf of your
          restaurant, and we are not responsible for the actions or decisions of your
          staff or guests.
        </p>

        <Divider />

        {/* Section 3 */}
        <SectionHeading number="3" title="Subscription, Billing & Setup Fee" />
        <ul style={{ margin: "0.75rem 0 0", padding: "0 0 0 1.25rem", listStyle: "none" }}>
          {billingClauses.map(({ label, detail }) => (
            <li key={label} style={listItemStyle}>
              <Bullet />
              <span>
                <strong style={{ color: TEXT_HEADING, fontWeight: 600 }}>{label}:</strong>{" "}
                {detail}
              </span>
            </li>
          ))}
        </ul>

        <Divider />

        {/* Section 4 */}
        <SectionHeading number="4" title="Acceptable Use" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem", marginBottom: "0.5rem" }}>
          You agree not to:
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {acceptableUseItems.map((item) => (
            <li key={item} style={listItemStyle}>
              <Bullet />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Divider />

        {/* Section 5 */}
        <SectionHeading number="5" title="Third-Party Services" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem" }}>
          GoldenHost AI uses the following third-party providers to deliver the Service:
          Stripe (payments), Twilio (SMS), Vapi (AI phone), Supabase (database), OpenAI
          (AI note parsing), Resend (email), Vercel (frontend hosting), and Railway
          (backend hosting). By using GoldenHost AI, you acknowledge that your data may
          be processed by these providers in accordance with their own privacy policies.
          We are not responsible for the actions, outages, or pricing changes of
          third-party providers.
        </p>

        <Divider />

        {/* Section 6 */}
        <SectionHeading number="6" title="Data & Privacy" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem" }}>
          Your use of the Service is subject to our{" "}
          <a
            href="/privacy"
            style={{ color: GOLD, textDecoration: "none", fontWeight: 500 }}
          >
            Privacy Policy
          </a>
          . You are the data controller for your guests' personal information. GoldenHost
          AI acts as a data processor on your behalf. You are responsible for ensuring
          you have the legal right to collect and process your guests' data and for
          obtaining any required consents under applicable Canadian law (PIPEDA, CASL).
        </p>

        <Divider />

        {/* Section 7 */}
        <SectionHeading number="7" title="AI Phone Agent (Sofia)" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem" }}>
          Sofia is an AI-powered phone agent. She discloses her AI nature at the start of
          every call in compliance with PIPEDA. You are responsible for ensuring your
          phone forwarding is correctly configured. GoldenHost AI is not liable for
          missed calls, dropped calls, or incorrect bookings resulting from telephony
          issues outside our control, including Twilio or Vapi service disruptions.
        </p>

        <Divider />

        {/* Section 8 */}
        <SectionHeading number="8" title="Limitation of Liability" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem" }}>
          To the maximum extent permitted by Ontario law: GoldenHost AI is provided "as
          is" without warranty of any kind. We are not liable for any lost revenue,
          missed reservations, no-shows, data loss, or indirect damages arising from your
          use of the Service. Our total liability to you for any claim shall not exceed
          the amount you paid us in the 30 days preceding the claim.
        </p>

        <Divider />

        {/* Section 9 */}
        <SectionHeading number="9" title="Intellectual Property" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem" }}>
          GoldenHost AI and all software, designs, and content on the platform are owned
          by GoldenHost AI. You retain full ownership of your restaurant data and guest
          data. We do not claim any rights to your data.
        </p>

        <Divider />

        {/* Section 10 */}
        <SectionHeading number="10" title="Termination" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem" }}>
          We may suspend or terminate your account if you violate these Terms or fail to
          pay your subscription. You may terminate your account at any time. Upon
          termination, your data will remain available for export for 30 days, after
          which it will be permanently deleted in accordance with our Privacy Policy.
        </p>

        <Divider />

        {/* Section 11 */}
        <SectionHeading number="11" title="Governing Law" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem" }}>
          These Terms are governed by the laws of the Province of Ontario and the federal
          laws of Canada applicable therein. Any disputes shall be resolved in the courts
          of Ontario.
        </p>

        <Divider />

        {/* Section 12 */}
        <SectionHeading number="12" title="Changes to These Terms" />
        <p style={{ ...paragraphStyle, marginTop: "0.75rem" }}>
          We may update these Terms at any time. We will notify you by email at least 30
          days before material changes take effect. Continued use of the Service after
          that date constitutes acceptance of the updated Terms. The current version is
          always available at{" "}
          <a
            href="/terms"
            style={{ color: GOLD, textDecoration: "none", fontWeight: 500 }}
          >
            goldenhost.app/terms
          </a>
          .
        </p>

        <Divider />

        {/* Section 13 */}
        <SectionHeading number="13" title="Contact" />
        <div
          style={{
            marginTop: "0.75rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "0.75rem",
            background: BG_CARD,
            border: `1px solid ${BORDER}`,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", gap: "1rem", fontSize: "0.875rem" }}>
            <span
              style={{
                width: "4.5rem",
                flexShrink: 0,
                color: "rgba(212, 160, 23, 0.6)",
                fontWeight: 600,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                paddingTop: "0.125rem",
              }}
            >
              Email
            </span>
            <a
              href="mailto:admin@goldenhost.app"
              style={{ color: GOLD, textDecoration: "none", fontWeight: 500 }}
            >
              admin@goldenhost.app
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "rgba(232, 213, 160, 0.25)", margin: 0 }}>
          © {new Date().getFullYear()} GoldenHost AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
