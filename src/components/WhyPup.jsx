const cards = [
  {
    title: 'Tokenomics',
    items: [
      'Total supply 100,000,000',
      'Ownership renounced',
      'Liquidity locked for 1year',
      'Total tax 5% buy 5% Sell',
      'Max Wallet 4%',
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v16" />
        <path d="M8 8h8" />
      </svg>
    ),
  },
  {
    title: 'Tax split',
    items: ['Auto Lp= 1% Buy 1% Sell', 'Development/marketing 4% Buy 4% Sell'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7h6l2 2h8" />
        <path d="M20 7l-3-3" />
        <path d="M20 7l-3 3" />
        <path d="M4 17h6l2-2h8" />
        <path d="M20 17l-3-3" />
        <path d="M20 17l-3 3" />
      </svg>
    ),
  },
  {
    title: 'Financial freedom',
    items: ['IAped for Lambo', 'IAped for financial freedom', 'IAped to retire my bloodline'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M6 5h12v4a6 6 0 01-12 0V5z" />
        <path d="M18 7h2a2 2 0 010 4h-2" />
        <path d="M6 7H4a2 2 0 000 4h2" />
      </svg>
    ),
  },
];

export default function WhyPup() {
  return (
    <section className="bg-bg-secondary pb-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-accent-yellow/30 bg-bg-card p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-accent-yellow hover:shadow-[0_12px_40px_rgba(240,185,11,0.08)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-accent-yellow/50 bg-bg-primary text-accent-yellow">
                {card.icon}
              </div>
              <h3 className="mb-3 text-[1.1rem] font-bold text-accent-yellow">{card.title}</h3>
              <ul className="space-y-2 text-[0.95rem] leading-relaxed text-text-secondary">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-yellow"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
