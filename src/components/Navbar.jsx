import { useEffect, useState } from 'react';
import { DEXSCREENER_API_URL, DEXSCREENER_URL, PANCAKESWAP_URL } from '../constants';

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});

const usdSmallFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 8,
});

const usdCompactFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 2,
});

const toNumber = (value) => {
  const parsed = typeof value === 'number' ? value : Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const formatPrice = (value) => {
  if (typeof value !== 'number') {
    return '--';
  }
  return value < 1 ? usdSmallFormatter.format(value) : usdFormatter.format(value);
};

const formatCompactUsd = (value) => {
  if (typeof value !== 'number') {
    return '--';
  }
  return usdCompactFormatter.format(value);
};

const formatChange = (value) => {
  if (typeof value !== 'number') {
    return '--';
  }
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [marketData, setMarketData] = useState({ price: null, change: null, volume: null });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let isActive = true;

    const fetchMarketData = async () => {
      try {
        const response = await fetch(DEXSCREENER_API_URL);
        if (!response.ok) {
          return;
        }
        const payload = await response.json();
        const pair = payload?.pairs?.[0];
        if (!pair) {
          return;
        }
        const price = toNumber(pair.priceUsd);
        const change = toNumber(pair?.priceChange?.h24);
        const volume = toNumber(pair?.volume?.h24);

        if (isActive) {
          setMarketData({ price, change, volume });
        }
      } catch {
        // Keep last known values on error.
      }
    };

    fetchMarketData();
    const interval = setInterval(fetchMarketData, 30000);

    return () => {
      isActive = false;
      clearInterval(interval);
    };
  }, []);

  const priceLabel = formatPrice(marketData.price);
  const changeLabel = formatChange(marketData.change);
  const volumeLabel = formatCompactUsd(marketData.volume);
  const changeClassName =
    typeof marketData.change === 'number'
      ? marketData.change >= 0
        ? 'text-accent-green'
        : 'text-accent-red'
      : 'text-text-muted';

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b border-border-color bg-bg-primary py-3 backdrop-blur-xl transition-all duration-300 md:bg-bg-primary/95 ${
        scrolled ? 'shadow-[0_12px_30px_rgba(0,0,0,0.35)]' : ''
      }`}
    >
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 md:px-6">
        <a
          href="#"
          className="flex items-center gap-2 text-[0.95rem] font-extrabold text-accent-yellow md:gap-3 md:text-[1.15rem]"
        >
          <img src="/assets/sticker_img.jpeg" alt="IAped Logo" className="h-8 w-8 rounded-md object-cover md:h-9 md:w-9" />
          <span>IAped</span>
        </a>

        <div
          className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 flex-col gap-2 border-b border-border-color bg-[#050505] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.5)] md:static md:top-auto md:z-auto md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          {[
            { label: 'Home', href: '#home' },
            { label: 'Chart', href: '#chart' },
            { label: 'Roadmap', href: '#roadmap' },
            { label: 'How to Buy', href: '#how-to-buy' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-xl px-2 py-2 text-center text-[0.85rem] font-semibold text-text-secondary transition hover:text-accent-yellow md:text-left md:text-[0.9rem]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col items-center gap-3 md:hidden">
            <div className="flex items-center gap-2 rounded-full border border-border-color bg-bg-card px-4 py-2 text-[0.75rem]">
              <span className="font-bold text-accent-yellow">{priceLabel}</span>
              <span className={`text-[0.75rem] ${changeClassName}`}>{changeLabel}</span>
              <span className="text-[0.75rem] text-text-muted">Vol: {volumeLabel}</span>
            </div>
            <a
              href={PANCAKESWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-accent-yellow px-5 py-2 text-center text-[0.8rem] font-extrabold uppercase tracking-[1px] text-black shadow-[0_6px_20px_rgba(240,185,11,0.35)] transition hover:bg-accent-yellow-hover animate-glow"
            >
              Buy $IAped
            </a>
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-border-color bg-bg-card px-4 py-2 text-[0.85rem]">
            <span className="font-bold text-accent-yellow">{priceLabel}</span>
            <span className={`text-[0.75rem] ${changeClassName}`}>{changeLabel}</span>
            <span className="text-[0.75rem] text-text-muted">Vol: {volumeLabel}</span>
          </div>
          <a
            href="https://x.com/iapedtokenhq?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition hover:text-accent-yellow"
            aria-label="X"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://t.me/IApedTokenHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition hover:text-accent-yellow"
            aria-label="Telegram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
          <a
            href={PANCAKESWAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-accent-yellow px-6 py-2.5 text-[0.85rem] font-extrabold uppercase tracking-[1px] text-black shadow-[0_6px_20px_rgba(240,185,11,0.35)] transition hover:-translate-y-0.5 hover:bg-accent-yellow-hover animate-glow"
          >
            Buy $IAped
          </a>
        </div>

        <button
          className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-1.5 rounded-md bg-white/10 p-2.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block h-[3px] w-7 rounded bg-white transition-all duration-300"></span>
          <span className="block h-[3px] w-7 rounded bg-white transition-all duration-300"></span>
          <span className="block h-[3px] w-7 rounded bg-white transition-all duration-300"></span>
        </button>

        <a
          href={PANCAKESWAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-30 inline-flex rounded-xl bg-accent-yellow px-3 py-2 text-[0.75rem] font-extrabold uppercase tracking-[0.8px] text-black shadow-[0_6px_20px_rgba(240,185,11,0.35)] transition hover:bg-accent-yellow-hover md:hidden"
        >
         Buy $IAped
        </a>
      </div>
    </nav>
  );
}
