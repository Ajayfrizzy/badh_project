import { useState } from 'react';
import { DEXSCREENER_URL, PANCAKESWAP_URL, TOKEN_ADDRESS } from '../constants';

const CONTRACT = TOKEN_ADDRESS;

const links = [
  { label: 'DEXSCREENER', href: DEXSCREENER_URL },
  { label: 'PANCAKESWAP', href: PANCAKESWAP_URL },
];

export default function ContractAddress() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-bg-primary py-16" id="contract">
      <div className="mx-auto max-w-[980px] px-6">
        <div className="rounded-2xl border border-accent-yellow/70 bg-bg-secondary p-8 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
          <h2 className="text-center text-2xl font-extrabold text-accent-yellow md:text-3xl">Contract Address</h2>
          <div className="mt-6 flex flex-col items-stretch gap-3 rounded-xl bg-[#0a0a0a] px-5 py-4 md:flex-row md:items-center md:justify-between">
            <code className="w-full break-all text-[0.85rem] text-text-secondary md:flex-1">{CONTRACT}</code>
            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-yellow px-4 py-2 text-[0.85rem] font-bold text-black shadow-[0_6px_20px_rgba(240,185,11,0.25)] transition hover:bg-accent-yellow-hover md:w-auto"
              onClick={copyAddress}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-yellow px-6 py-3 text-[0.85rem] font-bold uppercase tracking-[0.4px] text-black shadow-[0_6px_20px_rgba(240,185,11,0.25)] transition hover:-translate-y-0.5 hover:bg-accent-yellow-hover"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
