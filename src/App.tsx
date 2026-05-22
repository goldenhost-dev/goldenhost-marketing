function App() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0a0f1e' }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-amber-400">GoldenHost AI</span>
          <div className="flex items-center gap-6">
            <a
              href="https://golden-host-concierge.vercel.app"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Sign In
            </a>
            <a
              href="https://golden-host-concierge.vercel.app/signup"
              className="text-sm font-semibold bg-amber-400 text-[#0a0f1e] px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            No per-cover fees.{' '}
            <span className="text-amber-400">Just results.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            The AI-powered reservation platform built for independent restaurants in the GTA.
            Flat $250/month. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://golden-host-concierge.vercel.app/signup"
              className="px-8 py-3 bg-amber-400 text-[#0a0f1e] font-semibold rounded-lg hover:bg-amber-300 transition-colors text-base"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="px-8 py-3 border border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/10 transition-colors text-base"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              OpenTable is charging you per cover.{' '}
              <span className="text-amber-400">That adds up.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '💸',
                  text: 'Per-cover fees eating your margins',
                },
                {
                  icon: '📵',
                  text: 'No AI phone agent — you miss calls, you miss revenue',
                },
                {
                  icon: '🏗️',
                  text: 'Clunky systems built for chains, not independents',
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-white/80 font-medium leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything you need.{' '}
            <span className="text-amber-400">Nothing you don't.</span>
          </h2>
          <p className="text-center text-white/60 mb-14 text-lg">
            Built specifically for independent restaurants in the GTA.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🤖',
                title: 'Sofia AI Phone Agent',
                desc: 'Never miss a reservation call. Sofia answers 24/7, speaks naturally, and books instantly.',
              },
              {
                icon: '📊',
                title: 'No-Show Risk Scoring',
                desc: "Know who's likely to ghost before they do. Act early, protect your covers.",
              },
              {
                icon: '💳',
                title: 'Stripe Deposit Collection',
                desc: 'Automatically collect deposits at booking. Protect your revenue without awkward conversations.',
              },
              {
                icon: '🗺️',
                title: 'iPad Floor Plan',
                desc: 'Manage your floor in real time. Drag, assign, and seat guests with a tap.',
              },
              {
                icon: '💰',
                title: 'Flat Monthly Pricing',
                desc: 'No per-cover fees. Ever. $250/month flat — whether you seat 100 or 1,000 guests.',
              },
              {
                icon: '👤',
                title: 'Guest CRM',
                desc: 'Remember every guest, every preference, every visit. Build loyalty that lasts.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 rounded-xl p-7 hover:border-amber-400/40 hover:bg-white/[0.07] transition-all"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple,{' '}
            <span className="text-amber-400">honest pricing.</span>
          </h2>
          <p className="text-white/60 mb-10 text-lg">One plan. Everything included.</p>
          <div className="bg-white/5 border border-amber-400/30 rounded-2xl p-10">
            <div className="text-5xl font-extrabold text-amber-400 mb-1">$250</div>
            <div className="text-white/60 text-lg mb-2">per month CAD</div>
            <div className="inline-block bg-amber-400/10 text-amber-400 text-sm font-semibold px-3 py-1 rounded-full mb-8">
              30-day free trial
            </div>
            <ul className="text-left space-y-3 mb-10">
              {[
                'Sofia AI Phone Agent (24/7)',
                'No-Show Risk Scoring',
                'Stripe Deposit Collection',
                'iPad Floor Plan Manager',
                'Guest CRM',
                'Unlimited reservations',
                'No per-cover fees — ever',
                'GTA-focused support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="text-amber-400 font-bold text-base">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://golden-host-concierge.vercel.app/signup"
              className="block w-full py-3 bg-amber-400 text-[#0a0f1e] font-bold rounded-lg hover:bg-amber-300 transition-colors text-base"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
          <span className="text-amber-400 font-bold text-base">GoldenHost AI</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:hello@goldenhost.ai" className="hover:text-white transition-colors">Contact</a>
          </div>
          <span>Built for GTA restaurants</span>
        </div>
      </footer>
    </div>
  )
}

export default App
