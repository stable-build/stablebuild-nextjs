import { proofCards } from "@/data/site-content";

import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function ProofSection() {
  return (
    <section id="proof" className="py-20 sm:py-24 lg:py-28">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Why teams hire us"
          title={
            <>
              Evidence first.
              <br />
              <span className="text-zinc-500">Not empty agency language.</span>
            </>
          }
          description={
            <p>
              StableBuild should feel like an execution partner with unusual depth across product,
              AI, and protocol systems, not a bundle of individual resumes stitched together.
            </p>
          }
        />

        <div className="grid gap-4 lg:grid-cols-2" data-reveal-group>
          {proofCards.map((card, index) => (
            <article
              key={card.title}
              data-reveal-item
              className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white p-6 shadow-panel transition hover:-translate-y-0.5 hover:shadow-glow sm:p-7"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,101,30,0.12),transparent_42%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                  {card.eyebrow}
                </p>
                <h3 className="mt-4 max-w-xl text-2xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-[1.95rem]">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">{card.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {card.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
