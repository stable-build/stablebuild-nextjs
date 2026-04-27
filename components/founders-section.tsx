import { founderBlurbs } from "@/data/site-content";

import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function FoundersSection() {
  return (
    <section className="border-t border-zinc-200/80 bg-white py-20 sm:py-24 lg:py-28">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="The builders"
          title={
            <>
              Still founder-led.
              <br />
              <span className="text-zinc-500">Deliberately so.</span>
            </>
          }
          description={
            <p>
              The founders are part of the value, but not the whole sales pitch. This section
              exists to confirm who will be in the room once the work starts.
            </p>
          }
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {founderBlurbs.map((founder, index) => (
            <article
              key={founder.name}
              data-reveal
              className="rounded-[2rem] border border-zinc-200/80 bg-[linear-gradient(180deg,#ffffff,#f7f5f0)] p-6 shadow-panel"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                    {founder.role}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-950">
                    {founder.name}
                  </h3>
                </div>
                <a
                  href={founder.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
                >
                  LinkedIn
                </a>
              </div>
              <p className="mt-5 text-base leading-7 text-zinc-600">{founder.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {founder.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
