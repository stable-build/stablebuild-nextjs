import { FiArrowUpRight } from "react-icons/fi";

import { systems } from "@/data/site-content";

import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function CaseStudyGrid() {
  return (
    <section
      id="systems"
      className="border-t border-zinc-200/80 bg-white/60 py-20 sm:py-24 lg:py-28"
    >
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Selected systems"
          title={
            <>
              Built under constraints.
              <br />
              <span className="text-zinc-500">Shipped where it counts.</span>
            </>
          }
          description={
            <p>
              We are leading with shipped systems and hard technical decisions,
              which are the parts, clients can trust.
            </p>
          }
        />

        <div
          className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3"
          data-reveal-group-soft
        >
          {systems.map((system, index) => (
            <article
              key={system.id}
              data-reveal-soft-item
              className="flex h-full flex-col rounded-[2rem] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,243,238,0.98))] p-6 shadow-panel"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-700">
                  {system.badge}
                </span>
                {system.link ? (
                  <a
                    href={system.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
                  >
                    {system.linkLabel}
                    <FiArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
              <h3 className="mt-5 text-[1.85rem] font-semibold leading-[1.02] tracking-[-0.045em] text-zinc-950">
                {system.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                {system.summary}
              </p>
              <p className="mt-4 rounded-[1.4rem] border border-zinc-200/80 bg-white/70 p-4 text-sm leading-6 text-zinc-700">
                {system.impact}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {system.stack.map(item => (
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
