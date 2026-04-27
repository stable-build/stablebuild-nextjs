import { tickerItems } from "@/data/site-content";

export function MarqueeStrip() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="mt-14 overflow-hidden border-y border-zinc-200/80 bg-white/60 py-4 backdrop-blur">
      <div className="marquee-track flex min-w-max gap-4">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="inline-flex items-center gap-4 px-2 text-sm text-zinc-700"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-ember/80" />
            <span className="font-mono uppercase tracking-[0.22em]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
