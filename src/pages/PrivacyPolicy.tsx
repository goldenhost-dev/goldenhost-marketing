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

const subProcessors = [
  { name: "Supabase", purpose: "Database and authentication", region: "Canada / US" },
  { name: "Stripe", purpose: "Payment processing", region: "US" },
  { name: "Twilio", purpose: "SMS messaging", region: "US" },
  { name: "Vapi", purpose: "AI phone agent", region: "US" },
  { name: "Resend", purpose: "Transactional email", region: "US" },
  { name: "OpenAI", purpose: "AI note parsing and phone agent", region: "US" },
  { name: "Vercel", purpose: "Frontend hosting", region: "US" },
  { name: "Railway", purpose: "Backend hosting", region: "US" },
];

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: "0.875rem", color: "rgba(212, 160, 23, 0.7)", margin: 0 }}>
            Effective: June 2, 2026
          </p>
        </div>

        {/* Intro */}
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: TEXT_BODY,
            margin: 0,
          }}
        >
          GoldenHost AI ("we", "us", "our") is a reservation and guest management platform
          for independent restaurants. This Privacy Policy explains how we collect, use,
          and protect personal data when you use our platform.
        </p>

        <Divider />

        {/* Section 1 */}
        <SectionHeading number="1" title="Data We Collect About You (Restaurant Owners)" />
        <ul style={{ margin: "0.75rem 0 0", padding: "0 0 0 1.25rem", listStyle: "none" }}>
          {[
            {
              label: "Account information",
              detail: "Name, email address, and password — managed securely via Supabase Auth.",
            },
            {
              label: "Billing information",
              detail:
                "Payment details are processed exclusively by Stripe. We never store card numbers or payment credentials on our servers.",
            },
            {
              label: "Restaurant information",
              detail:
                "Your restaurant's name, address, phone number, and operating hours as entered during onboarding.",
            },
          ].map(({ label, detail }) => (
            <li
              key={label}
              style={{
                display: "flex",
                gap: "0.75rem",
                marginBottom: "0.875rem",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: TEXT_BODY,
              }}
            >
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
              <span>
                <strong style={{ color: TEXT_HEADING, fontWeight: 600 }}>{label}:</strong>{" "}
                {detail}
              </span>
            </li>
          ))}
        </ul>

        <Divider />

        {/* Section 2 */}
        <SectionHeading number="2" title="Guest Data We Process On Your Behalf" />
        <div
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: TEXT_BODY,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <p style={{ margin: 0 }}>
            As a restaurant using GoldenHost, you collect personal data about your guests
            including names, phone numbers, email addresses, reservation history, dietary
            preferences, and allergy information. GoldenHost stores this data on your behalf.
          </p>
          <p style={{ margin: 0 }}>
            In this relationship, <strong style={{ color: TEXT_HEADING }}>GoldenHost acts as a data processor</strong> and{" "}
            <strong style={{ color: TEXT_HEADING }}>you (the restaurant) are the data controller</strong>. You are
            responsible for your guests' personal data under PIPEDA and any applicable
            Canadian privacy legislation.
          </p>
          <p style={{ margin: 0 }}>
            Guests may request the deletion of their personal data. You can action these
            requests through the Guest CRM's <strong style={{ color: TEXT_HEADING }}>anonymize function</strong>, which
            removes all personal identifiers while preserving aggregate visit statistics for
            analytics purposes.
          </p>
        </div>

        <Divider />

        {/* Section 3 */}
        <SectionHeading number="3" title="How We Use Your Data" />
        <ul style={{ margin: "0.75rem 0 0", padding: 0, listStyle: "none" }}>
          {[
            "To provide and operate the GoldenHost platform",
            "To send transactional emails (welcome messages, billing receipts) via Resend",
            "To process subscription payments via Stripe",
            "To send SMS notifications to your restaurant guests via Twilio on your behalf",
            "To power AI phone reservations via Vapi on your behalf",
          ].map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                marginBottom: "0.75rem",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: TEXT_BODY,
              }}
            >
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
              {item}
            </li>
          ))}
        </ul>
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: TEXT_BODY,
            margin: "0.75rem 0 0",
          }}
        >
          We do not use tracking cookies or third-party analytics on this website.
        </p>

        <Divider />

        {/* Section 4 */}
        <SectionHeading number="4" title="Third-Party Sub-Processors" />
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: TEXT_BODY,
            margin: "0.75rem 0 1rem",
          }}
        >
          We share data with the following sub-processors to operate our platform:
        </p>
        <div
          style={{
            borderRadius: "0.75rem",
            overflow: "hidden",
            border: `1px solid ${BORDER}`,
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 1fr",
              padding: "0.625rem 1rem",
              background: "rgba(212, 160, 23, 0.07)",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            {["Processor", "Purpose", "Region"].map((h) => (
              <span
                key={h}
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: GOLD,
                }}
              >
                {h}
              </span>
            ))}
          </div>
          {subProcessors.map((p, i) => (
            <div
              key={p.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr",
                padding: "0.75rem 1rem",
                background: i % 2 === 0 ? BG_CARD : "transparent",
                borderBottom:
                  i < subProcessors.length - 1 ? `1px solid ${BORDER}` : undefined,
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: TEXT_HEADING }}>
                {p.name}
              </span>
              <span style={{ fontSize: "0.875rem", color: TEXT_BODY }}>
                {p.purpose}
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(212, 160, 23, 0.6)",
                  fontWeight: 500,
                }}
              >
                {p.region}
              </span>
            </div>
          ))}
        </div>

        <Divider />

        {/* Section 5 */}
        <SectionHeading number="5" title="Data Retention" />
        <ul style={{ margin: "0.75rem 0 0", padding: 0, listStyle: "none" }}>
          {[
            "Account data is retained for as long as your subscription is active.",
            "Guest data is retained until you delete or anonymize it via the Guest CRM.",
            "Anonymized guest records retain visit counts and spend totals only — all personal identifiers (name, phone, email) are permanently removed.",
            "You may request full account deletion by emailing admin@goldenhost.app. We will complete the deletion within 30 days.",
          ].map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                marginBottom: "0.75rem",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: TEXT_BODY,
              }}
            >
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
              {item}
            </li>
          ))}
        </ul>

        <Divider />

        {/* Section 5b */}
        <SectionHeading number="5b" title="Data Security" />
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: TEXT_BODY,
            margin: "0.75rem 0 0",
          }}
        >
          We take reasonable technical and organizational measures to protect your data. All
          data is encrypted at rest and transmitted over TLS (HTTPS). Our infrastructure is
          hosted on Supabase and Railway, both of which maintain industry-standard security
          practices. No method of transmission over the internet is 100% secure, and we
          cannot guarantee absolute security.
        </p>

        <Divider />

        {/* Section 6 */}
        <SectionHeading number="6" title="Your Rights (PIPEDA)" />
        <div
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: TEXT_BODY,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginTop: "0.75rem",
          }}
        >
          <p style={{ margin: 0 }}>
            Under the Personal Information Protection and Electronic Documents Act (PIPEDA),
            you have the right to access, correct, or request deletion of your personal data
            held by GoldenHost AI.
          </p>
          <p style={{ margin: 0 }}>
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:admin@goldenhost.app"
              style={{ color: GOLD, textDecoration: "none", fontWeight: 500 }}
            >
              admin@goldenhost.app
            </a>
            . We will respond to all requests within 30 days.
          </p>
        </div>

        <Divider />

        {/* Section 7 */}
        <SectionHeading number="7" title="Contact" />
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
          {[
            { label: "Company", value: "GoldenHost AI" },
            {
              label: "Email",
              value: "admin@goldenhost.app",
              href: "mailto:admin@goldenhost.app",
            },
            {
              label: "Website",
              value: "goldenhost.app",
              href: "https://www.goldenhost.app",
            },
          ].map(({ label, value, href }) => (
            <div
              key={label}
              style={{ display: "flex", gap: "1rem", fontSize: "0.875rem" }}
            >
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
                {label}
              </span>
              {href ? (
                <a href={href} style={{ color: GOLD, textDecoration: "none", fontWeight: 500 }}>
                  {value}
                </a>
              ) : (
                <span style={{ color: TEXT_HEADING, fontWeight: 500 }}>{value}</span>
              )}
            </div>
          ))}
        </div>

        <Divider />

        {/* Section 8 */}
        <SectionHeading number="8" title="Changes to This Policy" />
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: TEXT_BODY,
            margin: "0.75rem 0 0",
          }}
        >
          We may update this Privacy Policy from time to time. When we do, we will update
          the effective date at the top of this page and notify active subscribers by email.
          Your continued use of GoldenHost AI after any changes constitutes your acceptance
          of the updated policy. We encourage you to review this page periodically.
        </p>
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
