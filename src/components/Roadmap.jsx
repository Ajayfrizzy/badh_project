const phases = [
  {
    title: 'PHASE 1',
    items: [
      'Create socials',
      'Smart contract deployment',
      'Initial liquidity and listing on pancakeswap',
      'Token sites listing',
      'Create more liquidity pools',
      'Website creation',
      'Community building',
    ],
  },
  {
    title: 'PHASE 2',
    items: [
      'Creating more liquidity pool',
      'Community contest',
      'Dexview & GeckoTerminal update',
      'Marketing / partnership',
      'Dexscreener Token update',
    ],
  },
  {
    title: 'PHASE 3',
    items: [
      'More partnership / marketing',
      'Creating more liquidity pool',
      '1k holders',
      'Smart contract Audit',
      'CMC and CG listing',
      'Buy back and burn',
    ],
  },
  {
    title: 'PHASE 4',
    items: [
      'More partnership / marketing',
      'Creating more liquidity pool',
      'Community expansion',
      'IAped utility unveiling',
      'Buy back and burn',
      'Website review',
      'Roadmap review',
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="bg-bg-primary py-20" id="roadmap">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-accent-yellow md:text-[2.5rem]">$IAPED ROADMAP</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="rounded-2xl border-2 border-accent-yellow/30 bg-bg-card p-6 shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-yellow/40 bg-[#1a1406] px-4 py-1 text-[0.8rem] font-bold uppercase tracking-[1px] text-accent-yellow">
                {phase.title}
              </div>
              <ul className="space-y-2 text-[0.95rem] text-text-secondary">
                {phase.items.map((item) => (
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
