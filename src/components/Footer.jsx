import { useState } from 'react';
import { DEXSCREENER_URL, TOKEN_ADDRESS } from '../constants';

const CONTRACT = TOKEN_ADDRESS;

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative border-t border-accent-yellow/20 bg-bg-primary py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,_rgba(240,185,11,0.08),_transparent_70%)]" />
      <div className="relative mx-auto flex max-w-[900px] flex-col items-center gap-6 px-6 text-center">
        <img src="/assets/sticker_img.jpeg" alt="IAped Logo" className="h-16 w-16 rounded-xl object-cover" />
        <div className="flex flex-wrap justify-center gap-6 text-[0.9rem] text-text-secondary">
          <a
            href={DEXSCREENER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent-yellow"
          >
            Dexscreener
          </a>
          <a
            href={DEXSCREENER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent-yellow"
          >
            Chart
          </a>
          <a
            href="https://t.me/IApedTokenHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent-yellow"
          >
            Telegram
          </a>
          <a
            href="https://x.com/iapedtokenhq?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent-yellow"
          >
            X
          </a>
        </div>
        <a
          href={DEXSCREENER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[320px] rounded-full bg-accent-yellow px-6 py-3 text-center text-[0.95rem] font-extrabold uppercase tracking-[1px] text-black shadow-[0_0_35px_rgba(240,185,11,0.55)] transition hover:-translate-y-0.5 hover:bg-accent-yellow-hover animate-glow md:hidden"
        >
          View on Dexscreener
        </a>
        <button
          onClick={copyAddress}
          className="inline-flex items-center gap-2 rounded-full border border-border-color bg-bg-card px-4 py-2 text-[0.8rem] text-text-muted transition hover:border-accent-yellow hover:text-accent-yellow"
        >
          {`${CONTRACT.slice(0, 6)}...${CONTRACT.slice(-4)}`}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          {copied && <span className="text-accent-yellow">Copied</span>}
        </button>
        <div className="flex gap-4">
          <a
            href="https://x.com/iapedtokenhq?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition hover:text-accent-yellow"
            aria-label="X"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
        </div>
        {/* <p className="max-w-[700px] text-[0.8rem] leading-6 text-text-muted">
          $IAped is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or
          roadmap. The coin is for entertainment purposes only.
        </p> */}
        <div className="w-full border-t border-accent-yellow/20 pt-4 text-[0.8rem] text-text-muted">
          Copyright &copy; 2025 IAped. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
