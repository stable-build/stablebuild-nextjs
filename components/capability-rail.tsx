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

const capabilityThemes = {
  build: {
    activeCard:
      "border-amber-200 bg-[linear-gradient(180deg,#111114_0%,#050507_100%)] text-white ",
    activeLabel: "text-amber-200/70",
    activeBody: "text-white/82",
    previewFrame: "border-amber-200/60 bg-white/76",
    previewTitle: "text-zinc-950",
    previewBody: "text-zinc-600",
    metric: "bg-zinc-950 text-white",
    bullet: "border-amber-100/80 bg-white/75 text-zinc-700",
    stance: "border-zinc-900/80 bg-zinc-950 text-white",
    stanceLabel: "text-amber-100/65",
    stanceIcon: "text-amber-300",
  },
  ai: {
    activeCard:
      "border-zinc-700 bg-[linear-gradient(180deg,#0f1014_0%,#07080b_100%)] text-white ",
    activeLabel: "text-orange-200/70",
    activeBody: "text-white/80",
    previewFrame:
      "border-white/20 bg-[linear-gradient(180deg,rgba(35,36,41,0.9),rgba(25,26,30,0.94))]",
    previewTitle: "text-white",
    previewBody: "text-white/60",
    metric: "bg-black text-white",
    bullet: "border-white/20 bg-white/6 text-white/68",
    stance: "border-white/16 bg-black/78 text-white",
    stanceLabel: "text-orange-200/60",
    stanceIcon: "text-orange-300",
  },
  protocol: {
    activeCard:
      "border-blue-300 bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] text-zinc-950",
    activeLabel: "text-blue-700/70",
    activeBody: "text-zinc-700",
    previewFrame: "border-blue-100/80 bg-white/80",
    previewTitle: "text-zinc-950",
    previewBody: "text-zinc-600",
    metric: "bg-zinc-950 text-white",
    bullet: "border-blue-100/80 bg-white/78 text-zinc-700",
    stance: "border-zinc-900/80 bg-zinc-950 text-white",
    stanceLabel: "text-blue-100/65",
    stanceIcon: "text-amber-300",
  },
  security: {
    activeCard:
      "border-emerald-300 bg-[linear-gradient(180deg,#ffffff_0%,#f7fffb_100%)] text-zinc-950 ",
    activeLabel: "text-emerald-700/70",
    activeBody: "text-zinc-700",
    previewFrame: "border-emerald-100/90 bg-white/82",
    previewTitle: "text-zinc-950",
    previewBody: "text-zinc-600",
    metric: "bg-zinc-950 text-white",
    bullet: "border-emerald-100/80 bg-white/80 text-zinc-700",
    stance: "border-zinc-900/80 bg-zinc-950 text-white",
    stanceLabel: "text-emerald-100/65",
    stanceIcon: "text-amber-300",
  },
} as const;

type CapabilityThemeKey = keyof typeof capabilityThemes;

function getCapabilityTheme(id: string) {
  return capabilityThemes[id as CapabilityThemeKey] ?? capabilityThemes.build;
}

export function CapabilityRail() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const listViewportRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
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

  useEffect(() => {
    const viewport = listViewportRef.current;
    const activeItem = itemRefs.current[activeIndex];
    if (!viewport || !activeItem) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const viewportRect = viewport.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const targetScrollTop =
      activeItem.offsetTop -
      viewport.clientHeight / 2 +
      activeItem.clientHeight / 2;
    const maxScroll = Math.max(
      0,
      viewport.scrollHeight - viewport.clientHeight,
    );

    if (
      itemRect.top < viewportRect.top + 20 ||
      itemRect.bottom > viewportRect.bottom - 20
    ) {
      viewport.scrollTo({
        top: Math.min(Math.max(targetScrollTop, 0), maxScroll),
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const activeCapability = capabilities[activeIndex];
  const activeTheme = getCapabilityTheme(activeCapability.id);

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

        <div className="grid gap-4 lg:hidden" data-reveal-group-soft>
          {capabilities.map(capability => {
            const theme = getCapabilityTheme(capability.id);

            return (
              <article
                key={capability.id}
                data-reveal-soft-item
                className={`overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-gradient-to-br ${capability.accent} p-5`}
              >
                <div
                  className={`rounded-[1.55rem] border p-5 ${theme.previewFrame}`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                    {capability.label}
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    <h3
                      className={`text-2xl font-semibold tracking-[-0.045em] ${theme.previewTitle}`}
                    >
                      {capability.title}
                    </h3>
                    <span
                      className={`w-fit rounded-xl px-3 py-2 text-sm font-semibold ${theme.metric}`}
                    >
                      {capability.metric}
                    </span>
                  </div>
                  <p
                    className={`mt-4 text-base leading-7 ${theme.previewBody}`}
                  >
                    {capability.body}
                  </p>
                </div>

                <div className="mt-3 grid gap-2">
                  {capability.bullets.map(bullet => (
                    <p
                      key={bullet}
                      className={`rounded-[1.2rem] border px-4 py-3 text-sm leading-6 ${theme.bullet} ${capability.accent.includes("zinc") ? "text-zinc-100" : ""}`}
                    >
                      {bullet}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div ref={rootRef} className="hidden lg:block">
          <div
            ref={shellRef}
            className="grid gap-8 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.95fr)] lg:items-center"
          >
            <div
              ref={listViewportRef}
              className="capability-section space-y-4 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-3"
              data-reveal-group
            >
              {capabilities.map((capability, index) => {
                const isActive = index === activeIndex;
                const itemTheme = getCapabilityTheme(capability.id);

                return (
                  <button
                    key={capability.id}
                    ref={element => {
                      itemRefs.current[index] = element;
                    }}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    data-reveal-item
                    className={`w-full rounded-[2rem] border p-6 text-left transition duration-500 sm:p-7 ${
                      isActive
                        ? itemTheme.activeCard
                        : "border-zinc-200/80 bg-white/82 text-zinc-950"
                    }`}
                  >
                    <p
                      className={`font-mono text-[11px] uppercase tracking-[0.3em] ${
                        isActive ? itemTheme.activeLabel : "text-zinc-500"
                      }`}
                    >
                      {capability.label}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-[1.9rem]">
                      {capability.title}
                    </h3>
                    <p
                      className={`mt-4 text-base leading-7 ${
                        isActive ? itemTheme.activeBody : "text-zinc-600"
                      }`}
                    >
                      {capability.body}
                    </p>
                  </button>
                );
              })}
            </div>

            <div
              ref={previewRef}
              className={`overflow-hidden rounded-[2.3rem] border border-zinc-200/70 bg-gradient-to-br ${activeCapability.accent} p-6 sm:p-8 lg:self-center`}
              data-reveal
            >
              <div
                className={`rounded-[1.8rem] border p-5 shadow-sm backdrop-blur ${activeTheme.previewFrame}`}
                data-preview-part
              >
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <h3
                    className={`max-w-md text-3xl font-semibold tracking-[-0.05em] ${activeTheme.previewTitle}`}
                  >
                    {activeCapability.title}
                  </h3>
                  <span
                    className={`w-fit rounded-xl px-3 py-2 text-sm font-semibold ${activeTheme.metric}`}
                  >
                    {activeCapability.metric}
                  </span>
                </div>
                <p
                  className={`mt-5 text-base leading-7 ${activeTheme.previewBody}`}
                >
                  {activeCapability.body}
                </p>
              </div>

              <div className="mt-5 grid gap-3" data-preview-part>
                {activeCapability.bullets.map(bullet => (
                  <div
                    key={bullet}
                    className={`rounded-[1.35rem] border px-4 py-4 text-sm leading-6 shadow-sm ${activeTheme.bullet} ${activeCapability.accent.includes("zinc") ? "text-white" : ""}`}
                  >
                    {bullet}
                  </div>
                ))}
              </div>

              <div
                className={`mt-5 rounded-[1.8rem] border p-5 shadow-xl ${activeTheme.stance}`}
                data-preview-part
              >
                <div className="flex items-center justify-between gap-4">
                  <p
                    className={`font-mono text-[11px] uppercase tracking-[0.32em] ${activeTheme.stanceLabel}`}
                  >
                    Delivery stance
                  </p>
                  <FiArrowUpRight
                    className={`h-5 w-5 ${activeTheme.stanceIcon}`}
                  />
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
