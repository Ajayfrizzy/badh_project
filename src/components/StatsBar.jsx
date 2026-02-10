import { useEffect, useMemo, useState } from 'react';
import { DEXSCREENER_API_URL } from '../constants';

const usdCompactFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 2,
});

const numberCompactFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 2,
});

const toNumber = (value) => {
  const parsed = typeof value === 'number' ? value : Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const formatUsdCompact = (value) => {
  if (typeof value !== 'number') {
    return '--';
  }
  return usdCompactFormatter.format(value);
};

const formatNumberCompact = (value) => {
  if (typeof value !== 'number') {
    return '--';
  }
  return numberCompactFormatter.format(value);
};

const statDefinitions = [
  {
    label: 'Market Cap',
    getValue: (pair) => {
      const marketCap = toNumber(pair?.marketCap ?? pair?.fdv);
      return formatUsdCompact(marketCap);
    },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19h16" />
        <path d="M7 14l3-3 3 2 4-5" />
      </svg>
    ),
  },
  {
    label: 'Liquidity',
    getValue: (pair) => formatUsdCompact(toNumber(pair?.liquidity?.usd)),
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2c2.2 2.7 4.2 5.5 4.2 8.3A4.2 4.2 0 0112 14.5a4.2 4.2 0 01-4.2-4.2C7.8 7.5 9.8 4.7 12 2z" />
        <path d="M9 15a3 3 0 006 0" />
      </svg>
    ),
  },
  {
    label: '24h Txns',
    getValue: (pair) => {
      const buys = toNumber(pair?.txns?.h24?.buys);
      const sells = toNumber(pair?.txns?.h24?.sells);
      const hasTxns = typeof buys === 'number' || typeof sells === 'number';
      const total = (buys ?? 0) + (sells ?? 0);
      return hasTxns ? formatNumberCompact(total) : '--';
    },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: '24h Volume',
    getValue: (pair) => formatUsdCompact(toNumber(pair?.volume?.h24)),
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19h16" />
        <path d="M7 16V8" />
        <path d="M12 16V5" />
        <path d="M17 16V11" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  const [pairData, setPairData] = useState(null);

  useEffect(() => {
    let isActive = true;

    const fetchStats = async () => {
      try {
        const response = await fetch(DEXSCREENER_API_URL);
        if (!response.ok) {
          return;
        }
        const payload = await response.json();
        const pair = payload?.pairs?.[0];
        if (isActive && pair) {
          setPairData(pair);
        }
      } catch {
        // Keep last known values on error.
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);

    return () => {
      isActive = false;
      clearInterval(interval);
    };
  }, []);

  const stats = useMemo(
    () =>
      statDefinitions.map((stat) => ({
        ...stat,
        value: stat.getValue(pairData),
      })),
    [pairData]
  );

  return (
    <section className="bg-bg-primary py-6">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-6 text-center md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className="text-accent-yellow">{stat.icon}</span>
            <div className="text-[0.85rem] text-text-muted">{stat.label}</div>
            <div className="text-[1.1rem] font-bold text-accent-yellow">{stat.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
