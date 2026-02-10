import { DEXSCREENER_EMBED_URL } from '../constants';

export default function LiveChart() {
  return (
    <section className="py-16" id="chart">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-accent-yellow md:text-[2.5rem]">Live Chart</h2>
        <div className="overflow-hidden rounded-2xl border-2 border-accent-yellow/60 bg-bg-card shadow-[0_0_40px_rgba(0,0,0,0.55)]">
          <iframe
            src={DEXSCREENER_EMBED_URL}
            title="DEX Screener Chart"
            className="h-[350px] w-full md:h-[500px]"
            allow="clipboard-write"
          />
        </div>
        {/* <div className="mt-5 flex justify-center">
          <div className="rounded-full bg-accent-yellow px-6 py-2 text-[0.8rem] font-bold uppercase tracking-[1px] text-black">
            Binance Alpha Listing: Asterdex
          </div>
        </div> */}
      </div>
    </section>
  );
}
