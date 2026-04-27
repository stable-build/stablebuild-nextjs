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
  const shellRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    const shell = shellRef.current;
    if (!root || prefersReducedMotion) return;
    if (!shell) return;

    const context = gsap.context(() => {
      let trigger: ScrollTrigger | null = null;

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const stepCount = Math.max(capabilities.length - 1, 1);

          trigger = ScrollTrigger.create({
            trigger: root,
            start: "top top+=48",
            end: () => `+=${window.innerHeight * stepCount * 0.9}`,
            pin: shell,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.35,
            onUpdate: self => {
              const nextIndex = Math.round(self.progress * stepCount);

              setActiveIndex(current =>
                current === nextIndex ? current : nextIndex,
              );
            },
          });
        },
      });

      return () => {
        trigger?.kill();
      };
    }, root);

    return () => context.revert();
  }, [prefersReducedMotion]);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview || prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        preview.querySelectorAll<HTMLElement>("[data-preview-part]"),
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.48,
          ease: "power3.out",
          stagger: 0.06,
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
      <Container className="space-y-6">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A compact team with a
              <br />
              <span className="text-zinc-500">
                non-compact execution surface.
              </span>
            </>
          }
          description={
            <p>
              This is where we separate ourselves from generic agency claims.
              The value is not just that we know the stack. It is that the
              stack, the threat model, and the product path are considered
              together.
            </p>
          }
        />

        <div ref={rootRef}>
          <div
            ref={shellRef}
            className="grid gap-8 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.95fr)] lg:items-center"
          >
            <div className="space-y-4" data-reveal-group>
              {capabilities.map((capability, index) => (
                <button
                  key={capability.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  data-reveal-item
                  className={`w-full rounded-[2rem] border p-6 text-left transition duration-500 sm:p-7 ${
                    index === activeIndex
                      ? "border-zinc-950 bg-zinc-950 text-white shadow-[0_24px_70px_rgba(24,24,27,0.16)]"
                      : "border-zinc-200/80 bg-white/80 text-zinc-950"
                  }`}
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
              ))}
            </div>

            <div
              ref={previewRef}
              className={`overflow-hidden rounded-[2.3rem] border border-zinc-200/70 bg-gradient-to-br ${activeCapability.accent} p-6 shadow-[0_28px_80px_rgba(24,24,27,0.09)] sm:p-8 lg:self-center mt-[-200px]`}
              data-reveal
            >
              <div
                className="rounded-[1.8rem] border border-white/70 bg-white/78 p-5 shadow-sm backdrop-blur"
                data-preview-part
              >
                {/* <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-500">
                  Active capability
                </p> */}
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="max-w-md text-3xl font-semibold tracking-[-0.05em] text-zinc-950">
                    {activeCapability.title}
                  </h3>
                  <span className="w-fit rounded-xl bg-zinc-950 px-3 py-2 text-sm font-semibold text-white">
                    {activeCapability.metric}
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-zinc-600">
                  {activeCapability.body}
                </p>
              </div>

              <div className="mt-5 grid gap-3" data-preview-part>
                {activeCapability.bullets.map(bullet => (
                  <div
                    key={bullet}
                    className="rounded-[1.35rem] border border-white/75 bg-white/72 px-4 py-4 text-sm leading-6 text-zinc-700 shadow-sm"
                  >
                    {bullet}
                  </div>
                ))}
              </div>

              <div
                className="mt-5 rounded-[1.8rem] border border-zinc-200/70 bg-zinc-950 p-5 text-white shadow-xl"
                data-preview-part
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/60">
                    Delivery stance
                  </p>
                  <FiArrowUpRight className="h-5 w-5 text-amber-300" />
                </div>
                <p className="mt-4 max-w-lg text-lg leading-8 text-white/82">
                  We optimize for systems that keep their shape once usage,
                  integrations, and audits enter the picture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
