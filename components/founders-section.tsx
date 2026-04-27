import { collectiveStrengths } from "@/data/site-content";

import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function FoundersSection() {
  return (
    <section className="border-t border-zinc-200/80 bg-white py-20 sm:py-24 lg:py-28">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Why StableBuild"
          title={
            <>
              Senior execution.
              <br />
              <span className="text-zinc-500">One accountable team.</span>
            </>
          }
          description={
            <p>
              StableBuild is built for teams that need product judgment, AI systems thinking,
              protocol depth, and security awareness to move together instead of being passed
              between disconnected specialists.
            </p>
          }
        />

        <div className="grid gap-5 lg:grid-cols-3" data-reveal-group>
          {collectiveStrengths.map((strength) => (
            <article
              key={strength.title}
              data-reveal-item
              className="rounded-[2rem] border border-zinc-200/80 bg-[linear-gradient(180deg,#ffffff,#f7f5f0)] p-6 shadow-panel"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                Collective strength
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-zinc-950">
                {strength.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-zinc-600">{strength.body}</p>
              <p className="mt-6 rounded-[1.4rem] border border-zinc-200/80 bg-white/75 p-4 text-sm leading-6 text-zinc-700">
                {strength.proof}
              </p>
            </article>
          ))}
        </div>

        <div
          className="flex flex-col gap-4 rounded-[2rem] border border-zinc-200/80 bg-zinc-950 p-6 text-white shadow-[0_28px_80px_rgba(24,24,27,0.16)] sm:flex-row sm:items-center sm:justify-between sm:p-7"
          data-reveal
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/55">
              Founder-led where it matters
            </p>
            <p className="mt-3 max-w-3xl text-xl leading-8 text-white/84">
              You still get direct senior ownership in the room, but the pitch is the operating
              model: fewer translation layers, faster technical decisions, and stronger systems.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <a
              href="https://linkedin.com/in/suhel-kapadia"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/78 transition hover:border-white/45 hover:text-white"
            >
              Suhel
            </a>
            <a
              href="https://linkedin.com/in/0xJustUzair"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/78 transition hover:border-white/45 hover:text-white"
            >
              Uzair
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
