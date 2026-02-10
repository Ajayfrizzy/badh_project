import { DEXSCREENER_URL } from '../constants';

export default function FloatingBuy() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <a
        href={DEXSCREENER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 rounded-full bg-accent-yellow px-6 py-3 text-[0.95rem] font-extrabold text-black shadow-yellow-xl transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-accent-yellow-hover animate-bounceIn"
      >
        <img src="/assets/sticker_img.jpeg" alt="IAped Sticker" className="h-7 w-7 rounded-full object-cover md:h-9 md:w-9" />
        <span>View on Dexscreener</span>
      </a>
    </div>
  );
}
