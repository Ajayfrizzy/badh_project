import { DEXSCREENER_URL, PANCAKESWAP_URL } from '../constants';

const highlights = [
  {
    label: 'Live on BSC',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2c2.2 2.7 4.2 5.5 4.2 8.3A4.2 4.2 0 0112 14.5a4.2 4.2 0 01-4.2-4.2C7.8 7.5 9.8 4.7 12 2z" />
        <path d="M9 15a3 3 0 006 0" />
      </svg>
    ),
  },
  {
    label: 'Growing Community',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: 'Live Chart ->',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 18h16" />
        <path d="M7 14l3-3 3 2 4-5" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-x-hidden border-b border-accent-yellow/20 pb-28 pt-28"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_60%_at_50%_12%,rgba(240,185,11,0.18),rgba(5,5,5,0.72)_45%,rgba(5,5,5,1)_80%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(85%_60%_at_50%_0%,rgba(240,185,11,0.08),transparent_65%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 z-0 h-[680px] w-[680px] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(240,185,11,0.14)_0%,_transparent_70%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 text-center">
        <div className="mb-8 flex h-[200px] w-[200px] items-center justify-center rounded-2xl bg-accent-yellow shadow-[0_30px_90px_rgba(240,185,11,0.28)] md:mb-10 md:h-[300px] md:w-[300px]">
          <img
            src="/assets/sticker_img.jpeg"
            alt="IAped Sticker"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
        <h1 className="mb-4 text-5xl font-black leading-[0.9] text-accent-yellow drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] md:text-7xl">
          IAped
          <span className='block py-3'>Token</span>
        </h1>
        <p className="mb-8 text-base text-text-secondary md:text-lg">Binance future intern</p>
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <a
            href={PANCAKESWAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-accent-yellow px-7 py-3 text-[0.9rem] font-bold uppercase tracking-[0.5px] text-black shadow-[0_10px_30px_rgba(240,185,11,0.35)] transition hover:-translate-y-0.5 hover:bg-accent-yellow-hover"
          >
            View on Pancakeswap
          </a>
          <a
            href={DEXSCREENER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-accent-yellow bg-transparent px-7 py-3 text-[0.9rem] font-bold uppercase tracking-[0.5px] text-text-primary transition hover:-translate-y-0.5 hover:bg-accent-yellow hover:text-black"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19h16" />
              <path d="M7 14l3-3 3 2 4-5" />
            </svg>
            View chart
          </a>
        </div>
        <div className="grid w-full gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 rounded-2xl border border-accent-yellow/30 bg-bg-secondary/40 px-6 py-5 text-[0.85rem] text-text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-yellow/60 bg-bg-primary text-accent-yellow">
                {item.icon}
              </span>
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
