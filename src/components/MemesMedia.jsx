const memes = [
  { src: '/assets/img1.jpeg', alt: 'Meme 1' },
  { src: '/assets/img2.jpeg', alt: 'Meme 2' },
  { src: '/assets/img3.jpeg', alt: 'Meme 3' },
  { src: '/assets/img4.jpg', alt: 'Meme 4' },
  { src: '/assets/img5.jpeg', alt: 'Meme 5' },
  { src: '/assets/img6.jpg', alt: 'Meme 6' },
  { src: '/assets/img7.jpeg', alt: 'Meme 7' },
];

export default function MemesMedia() {
  const allMemes = [...memes, ...memes];

  return (
    <section className="bg-bg-secondary py-20" id="memes">
      <div className="mb-10 px-6 text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-accent-yellow md:text-[2.5rem]">$IAped Memes &amp; Media</h2>
        <p className="text-[0.9rem] text-text-muted">Freshest memes from the pack.</p>
      </div>
      <div className="group w-full overflow-hidden py-4">
        <div className="flex w-max gap-6 animate-[scrollMemes_28s_linear_infinite_alternate] group-hover:[animation-play-state:paused]">
          {allMemes.map((meme, i) => (
            <div
              key={i}
              className="h-[260px] w-[260px] flex-none overflow-hidden rounded-2xl border-2 border-accent-yellow/40 bg-bg-primary p-2 transition hover:scale-[1.02] hover:border-accent-yellow hover:shadow-[0_0_25px_rgba(240,185,11,0.35)] md:h-[320px] md:w-[320px]"
            >
              <img src={meme.src} alt={meme.alt} className="h-full w-full rounded-xl object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
