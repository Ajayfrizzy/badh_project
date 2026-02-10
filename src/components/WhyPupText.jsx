export default function WhyPupText() {
  return (
    <section className="bg-bg-secondary pb-8 pt-20" id="why-pup">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <h2 className="mb-6 text-3xl font-extrabold text-accent-yellow md:text-[2.5rem]">Why $IAped?</h2>
          <p className="mb-5 text-[1.05rem] leading-relaxed text-text-secondary">
            $IAped represents the courage to move first uniting people who believes in early moves not just a meme it's
            a movement of conviction. $IAped is built for holders who stay, believe and grow together. Some waited
            $IAped.
          </p>
          <p className="text-[1.05rem] leading-relaxed text-text-secondary">
            $IAped also resolve lack of volume problems with Arbitrages pairs with other Assets by creating multiple
            liquidity pool to sustain trading activity and to boost token volume to $IAped liquidity.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/assets/sticker_img.jpeg"
            alt="IAped Mascot"
            className="h-auto w-[220px] rounded-3xl border border-accent-yellow/60 bg-bg-primary p-3 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] md:w-[300px] animate-floatSlow"
          />
        </div>
      </div>
    </section>
  );
}
