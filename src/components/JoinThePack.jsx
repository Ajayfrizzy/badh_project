const socials = [
  {
    title: 'X Community',
    desc: 'Engage with fellow holders',
    cta: 'Join Community',
    link: 'https://x.com/iapedtokenhq?s=21',
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
    title: 'Telegram',
    desc: 'Join the community chat',
    cta: 'Join Channel',
    link: 'https://t.me/IApedTokenHQ',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

export default function JoinThePack() {
  return (
    <section className="bg-bg-primary py-20" id="community">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-accent-yellow md:text-[2.5rem]">Join the Pack</h2>
        <p className="mb-10 text-[0.95rem] text-text-secondary">Connect with the $IAped community across all platforms</p>
        <div className="flex flex-col gap-4">
          {socials.map((social) => (
            <div
              key={social.title}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-accent-yellow/30 bg-bg-card px-6 py-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-300 hover:border-accent-yellow hover:shadow-[0_0_25px_rgba(240,185,11,0.35)] md:flex-row md:justify-between md:text-left"
            >
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-yellow/40 bg-[#1a1406] text-accent-yellow">
                  {social.icon}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-text-primary">{social.title}</h3>
                  <p className="text-[0.9rem] text-text-muted">{social.desc}</p>
                </div>
              </div>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-accent-yellow px-6 py-2 text-[0.85rem] font-bold text-black shadow-[0_8px_25px_rgba(240,185,11,0.3)] transition hover:-translate-y-0.5 hover:bg-accent-yellow-hover hover:shadow-[0_0_25px_rgba(240,185,11,0.45)] md:w-auto"
              >
                {social.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
