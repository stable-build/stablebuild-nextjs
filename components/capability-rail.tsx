"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { capabilities } from "@/data/site-content";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

import { Container } from "./container";
import { SectionHeading } from "./section-heading";

gsap.registerPlugin(ScrollTrigger);

export function CapabilityRail() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion) return;

    const context = gsap.context(() => {
      const triggers: ScrollTrigger[] = [];

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          cardRefs.current.forEach((card, index) => {
            if (!card) return;

            const trigger = ScrollTrigger.create({
              trigger: card,
              start: "top center+=10%",
              end: "bottom center",
              onEnter: () => setActiveIndex(index),
              onEnterBack: () => setActiveIndex(index),
            });

            triggers.push(trigger);
          });
        },
      });

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }, root);

    return () => context.revert();
  }, [prefersReducedMotion]);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview || prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        preview.children,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.42,
          ease: "power2.out",
          stagger: 0.05,
          overwrite: true,
        },
      );
    }, preview);

    return () => context.revert();
  }, [activeIndex, prefersReducedMotion]);

  const activeCapability = capabilities[activeIndex];

  return (
    <section
      id="capabilities"
      className="border-t border-zinc-200/80 bg-[linear-gradient(180deg,#fbfaf7_0%,#f2ede6_100%)] py-20 sm:py-24 lg:py-28"
    >
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A compact team with a
              <br />
              <span className="text-zinc-500">non-compact execution surface.</span>
            </>
          }
          description={
            <p>
              This is where we separate ourselves from generic agency claims. The value is not
              just that we know the stack. It is that the stack, the threat model, and the product
              path are considered together.
            </p>
          }
        />

        <div ref={rootRef} className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,0.88fr)]">
          <div className="space-y-4">
            {capabilities.map((capability, index) => (
              <div
                key={capability.id}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className={`rounded-[2rem] border p-6 transition sm:p-7 ${
                  index === activeIndex
                    ? "border-zinc-950 bg-zinc-950 text-white shadow-[0_24px_70px_rgba(24,24,27,0.16)]"
                    : "border-zinc-200/80 bg-white/80 text-zinc-950"
                }`}
                data-reveal
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="w-full text-left"
                >
                  <p
                    className={`font-mono text-[11px] uppercase tracking-[0.3em] ${
                      index === activeIndex ? "text-white/60" : "text-zinc-500"
                    }`}
                  >
                    {capability.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-[1.9rem]">
                    {capability.title}
                  </h3>
                  <p
                    className={`mt-4 text-base leading-7 ${
                      index === activeIndex ? "text-white/78" : "text-zinc-600"
                    }`}
                  >
                    {capability.body}
                  </p>
                </button>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div
              ref={previewRef}
              className={`overflow-hidden rounded-[2.3rem] border border-zinc-200/70 bg-gradient-to-br ${activeCapability.accent} p-6 shadow-[0_28px_80px_rgba(24,24,27,0.09)] sm:p-8`}
            >
              <div className="rounded-[1.8rem] border border-white/70 bg-white/75 p-5 shadow-sm backdrop-blur">
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-500">
                  Active capability
                </p>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <h3 className="max-w-md text-3xl font-semibold tracking-[-0.05em] text-zinc-950">
                    {activeCapability.title}
                  </h3>
                  <span className="rounded-full bg-zinc-950 px-3 py-2 text-sm font-semibold text-white">
                    {activeCapability.metric}
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-zinc-600">{activeCapability.body}</p>
              </div>

              <div className="mt-5 grid gap-3">
                {activeCapability.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[1.35rem] border border-white/75 bg-white/70 px-4 py-4 text-sm leading-6 text-zinc-700 shadow-sm"
                  >
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.8rem] border border-zinc-200/70 bg-zinc-950 p-5 text-white shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/60">
                    Delivery stance
                  </p>
                  <FiArrowUpRight className="h-5 w-5 text-amber-300" />
                </div>
                <p className="mt-4 max-w-lg text-lg leading-8 text-white/82">
                  We optimize for systems that keep their shape once usage, integrations, and
                  audits enter the picture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
