import { DEXSCREENER_URL } from '../constants';

const steps = [
  {
    number: '1',
    title: 'Get a Wallet',
    items: [
      'Install MetaMask or Trust Wallet',
      'Add BNB Smart Chain (BEP-20) network',
      'Fund with small amount of BNB for gas',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'View on Dexscreener',
    items: ['Open Dexscreener pair page', 'Review the live chart and metrics'],
    cta: {
      text: 'OPEN DEXSCREENER',
      link: DEXSCREENER_URL,
    },
    note: 'Always double-check the contract address',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Add Token to Wallet',
    items: ['Import token using contract', 'Contract address with copy button', 'Shows balance in wallet'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
];

export default function HowToBuy() {
  return (
    <section className="bg-bg-primary py-20" id="how-to-buy">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-accent-yellow md:text-[2.5rem]">How to Buy on BSC</h2>
        <p className="mb-12 text-[0.95rem] text-text-muted">(including Dexscreener)</p>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="min-h-[430px] rounded-2xl border-2 border-accent-yellow/35 bg-bg-card px-6 py-10 text-left transition duration-300 hover:border-accent-yellow hover:shadow-[0_0_35px_rgba(240,185,11,0.18)]"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-yellow/40 bg-[#1a1406] text-accent-yellow">
                  {step.icon}
                </div>
                <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#5aa3ff] text-base font-bold text-white">
                  {step.number}
                </div>
              </div>
              <h3 className="mt-5 text-center text-xl font-bold text-text-primary">{step.title}</h3>
              <ul className="mt-5 space-y-3 text-[0.95rem] text-text-secondary">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-yellow"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {step.cta && (
                <a
                  href={step.cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-accent-yellow px-4 py-2.5 text-[0.85rem] font-bold text-black shadow-[0_8px_25px_rgba(240,185,11,0.35)] transition hover:bg-accent-yellow-hover"
                >
                  {step.cta.text}
                </a>
              )}
              {step.note && (
                <p className="mt-3 flex items-center gap-2 text-[0.8rem] text-text-muted">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  {step.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
