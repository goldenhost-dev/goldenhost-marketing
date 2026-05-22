import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ backgroundColor: '#08080f', fontFamily: "'Inter', sans-serif" }} className="min-h-screen text-white">

      {/* ── Nav ── */}
      <nav
        style={{
          background: 'rgba(8,8,15,0.8)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span style={{ color: '#f59e0b' }} className="text-lg font-bold tracking-tight">
            GoldenHost AI
          </span>
          <div className="flex items-center gap-5">
            <a
              href="https://golden-host-concierge.vercel.app"
              className="text-sm text-white hover:opacity-70 transition-opacity"
            >
              Sign In
            </a>
            <a
              href="https://golden-host-concierge.vercel.app/signup"
              style={{ border: '1px solid #f59e0b', color: '#f59e0b' }}
              className="text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-amber-400/10 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-16 overflow-hidden">
        {/* ambient glow */}
        <div
          style={{
            width: 400,
            height: 400,
            background: 'rgba(245,158,11,0.12)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            pointerEvents: 'none',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-6">
            The reservation platform independent restaurants deserve.
          </h1>
          <p style={{ color: '#888899' }} className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            No per-cover fees. Flat $250/month. Sofia answers your phones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://golden-host-concierge.vercel.app/signup"
              style={{ backgroundColor: '#f59e0b', color: '#08080f' }}
              className="px-7 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff' }}
              className="px-7 py-3 rounded-lg font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              See the product
            </a>
          </div>
          <div
            style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#888899' }}
            className="inline-block text-xs px-4 py-1.5 rounded-full"
          >
            Trusted by GTA restaurants
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-8xl font-black text-white mb-6 fade-in">
            $1.50
          </p>
          <p style={{ color: '#888899' }} className="text-xl mb-10 leading-relaxed fade-in">
            per cover OpenTable charges you. On 2,000 covers a month that&apos;s $3,000 gone.
          </p>
          <p className="text-2xl font-semibold text-white fade-in">
            GoldenHost AI is $250/month. Flat. Forever.
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-14 fade-in">Built different.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                stagger: 'stagger-1',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17v-.08z"/>
                  </svg>
                ),
                title: 'Sofia AI Phone Agent',
                desc: 'Never miss a reservation call. Sofia answers 24/7, speaks naturally, and books instantly.',
              },
              {
                stagger: 'stagger-2',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                title: 'No-Show Risk Scoring',
                desc: "Know who's likely to ghost before they do. Act early, protect your covers.",
              },
              {
                stagger: 'stagger-3',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                ),
                title: 'Stripe Deposit Collection',
                desc: 'Collect deposits automatically at booking. Protect your revenue without awkward conversations.',
              },
              {
                stagger: 'stagger-4',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                ),
                title: 'iPad Floor Plan',
                desc: 'Manage your floor in real time. Drag, assign, and seat guests with a tap.',
              },
              {
                stagger: 'stagger-5',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                ),
                title: 'Flat Monthly Pricing',
                desc: 'No per-cover fees ever — $250/month flat, whether you seat 100 or 1,000 guests.',
              },
              {
                stagger: 'stagger-6',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                ),
                title: 'Guest CRM',
                desc: 'Remember every guest, every preference, every visit. Build loyalty that lasts.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`fade-in ${f.stagger}`}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: 32,
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 40px rgba(245,158,11,0.08)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                <div style={{ color: '#888899' }} className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p style={{ color: '#888899' }} className="text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 px-6">
        <div className="max-w-md mx-auto text-center">
          <div
            className="fade-in"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: '48px 40px',
              boxShadow: '0 0 80px rgba(245,158,11,0.1)',
            }}
          >
            <p className="text-8xl font-black text-white leading-none mb-1">$250</p>
            <p style={{ color: '#888899' }} className="text-lg mb-5">/month CAD</p>
            <div
              style={{ border: '1px solid #f59e0b', color: '#f59e0b' }}
              className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-8"
            >
              30-day free trial
            </div>
            <ul className="text-left space-y-3 mb-8">
              {[
                'Sofia AI Phone Agent (24/7)',
                'No-Show Risk Scoring',
                'Stripe Deposit Collection',
                'iPad Floor Plan Manager',
                'Guest CRM',
                'Unlimited reservations',
                'No per-cover fees ever',
                'GTA-focused support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#f59e0b" strokeWidth="1.2"/>
                    <path d="M5 8l2 2 4-4" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://golden-host-concierge.vercel.app/signup"
              style={{ backgroundColor: '#f59e0b', color: '#08080f' }}
              className="block w-full py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Start Free Trial
            </a>
          </div>
          <p style={{ color: '#888899' }} className="text-sm mt-6 fade-in">
            No setup fees. No per-cover charges. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        className="py-10 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span style={{ color: '#f59e0b' }} className="font-bold">GoldenHost AI</span>
          <div style={{ color: '#888899' }} className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:hello@goldenhost.ai" className="hover:text-white transition-colors">Contact</a>
          </div>
          <span style={{ color: '#888899' }}>Built for GTA restaurants</span>
        </div>
      </footer>
    </div>
  )
}

export default App
