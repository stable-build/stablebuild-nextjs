import { recognitionItems } from "@/data/site-content";

import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function RecognitionGrid() {
  return (
    <section className="border-t border-zinc-200/80 bg-[linear-gradient(180deg,#f8f5ef_0%,#ffffff_100%)] py-20 sm:py-24 lg:py-28">
    <Container className="space-y-12">
      <SectionHeading
        eyebrow="Recognition across serious infrastructure"
        title={
        <>
          Work with
          <br />
          <span className="text-zinc-500">serious names and real surfaces.</span>
        </>
        }
        description={
        <p>
          We are not pretending to be a giant shop. The stronger move is to show the caliber of
          environments, tooling, and protocols our work has genuinely intersected with.
        </p>
        }
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6" data-reveal-group-soft>
        {recognitionItems.map((item, index) => (
        <div
          key={item}
          data-reveal-soft-item
          className="flex min-h-28 items-center justify-center rounded-[1.7rem] border border-zinc-200/80 bg-white px-4 py-5 text-center shadow-sm"
          style={{ transitionDelay: `${index * 35}ms` }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-700">
            {item}
          </span>
        </div>
        ))}
      </div>
    </Container>
    </section>
  );
}
