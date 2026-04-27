"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

const MORPH_POINTS = 10;
function buildMorphPath(points: number[]) {
  let d = `M 0 ${points[0]} C`;

  for (let index = 0; index < MORPH_POINTS - 1; index += 1) {
    const point = ((index + 1) / (MORPH_POINTS - 1)) * 100;
    const controlPoint = point - (100 / (MORPH_POINTS - 1)) / 2;
    d += ` ${controlPoint} ${points[index]} ${controlPoint} ${
      points[index + 1]
    } ${point} ${points[index + 1]}`;
  }

  d += " V 0 H 0";
  return d;
}

export function PageMotion() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initialMorphPath = buildMorphPath(
    Array.from({ length: MORPH_POINTS }, () => 100),
  );

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        "#scroll-progress",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            start: 0,
            end: "max",
            scrub: true,
          },
        },
      );

      const loader = document.querySelector<HTMLElement>("#page-loader");
      const loaderPaths = gsap.utils.toArray<SVGPathElement>(
        "#page-loader .shape-overlays__path",
      );
      const runMorph = (
        overlay: HTMLElement,
        paths: SVGPathElement[],
        options: { hold?: number; text?: HTMLElement | null } = {},
      ) => {
        const allPoints = Array.from({ length: paths.length }, () =>
          Array.from({ length: MORPH_POINTS }, () => 100),
        );

        const render = () => {
          paths.forEach((path, pathIndex) => {
            path.setAttribute("d", buildMorphPath(allPoints[pathIndex]));
          });
        };

        const timeline = gsap.timeline({
          defaults: { duration: 0.92, ease: "power2.inOut" },
          onUpdate: render,
          onStart: render,
          onComplete: () => {
            gsap.set(overlay, { autoAlpha: 0 });
            options.text?.removeAttribute("style");
          },
        });

        timeline.set(overlay, { autoAlpha: 1 });

        if (options.text) {
          timeline.fromTo(
            options.text,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.32, ease: "power2.out" },
            0,
          );
          timeline.to(
            options.text,
            { y: -12, opacity: 0, duration: 0.3, ease: "power2.in" },
            options.hold ?? 0.42,
          );
        }

        allPoints.forEach((points, pathIndex) => {
          points.forEach((_, pointIndex) => {
            const pointDelay = (pointIndex / MORPH_POINTS) * 0.16;
            const pathDelay = pathIndex * 0.12;

            timeline.to(
              points,
              { [pointIndex]: 0 },
              (options.hold ?? 0) + pointDelay + pathDelay,
            );
          });
        });

        return timeline;
      };

      if (loader && loaderPaths.length) {
        runMorph(loader, loaderPaths, {
          hold: 0.34,
          text: document.querySelector<HTMLElement>("#page-loader-copy"),
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach(group => {
        const items = Array.from(
          group.querySelectorAll<HTMLElement>("[data-reveal-item]"),
        );
        if (!items.length) return;

        gsap.fromTo(
          items,
          {
            y: 34,
            opacity: 0,
            clipPath: "inset(0 0 12% 0)",
          },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.92,
            ease: "power3.out",
            stagger: 0.11,
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>("[data-reveal-group-soft]")
        .forEach(group => {
          const items = Array.from(
            group.querySelectorAll<HTMLElement>("[data-reveal-soft-item]"),
          );
          if (!items.length) return;

          gsap.fromTo(
            items,
            {
              y: 18,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.72,
              ease: "power2.out",
              stagger: 0.09,
              scrollTrigger: {
                trigger: group,
                start: "top 86%",
                once: true,
              },
            },
          );
        });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(element => {
        if (element.closest("[data-reveal-group]")) return;
        if (element.closest("[data-reveal-group-soft]")) return;

        gsap.fromTo(
          element,
          {
            y: 26,
            opacity: 0,
            clipPath: "inset(0 0 10% 0)",
          },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.86,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      const path = document.querySelector<SVGPathElement>("#cta-bouncy-path");
      const footer = document.querySelector<HTMLElement>("#contact");

      if (path && footer) {
        const flat =
          "M0,40 C240,40 520,40 760,40 C1000,40 1200,40 1440,40 L1440,0 L0,0 Z";
        const wave =
          "M0,40 C240,120 520,0 760,28 C1000,56 1200,132 1440,52 L1440,0 L0,0 Z";

        ScrollTrigger.create({
          trigger: footer,
          start: "top bottom",
          onEnter: self => {
            const velocity = Math.min(
              Math.abs(self.getVelocity()) / 5000,
              0.35,
            );
            gsap.fromTo(
              path,
              { attr: { d: wave } },
              {
                attr: { d: flat },
                duration: 1.85,
                ease: `elastic.out(${1 + velocity}, ${0.78 - velocity * 0.4})`,
              },
            );
          },
          onLeaveBack: () => {
            gsap.set(path, { attr: { d: wave } });
          },
        });
      }
    });

    return () => context.revert();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <>
      <div
        id="page-loader"
        className="pointer-events-none fixed inset-0 z-[100] text-zinc-950"
        aria-hidden="true"
      >
        <svg
          className="shape-overlays absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="loader-gradient-a" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fffefb" />
              <stop offset="100%" stopColor="#f3efe7" />
            </linearGradient>
            <linearGradient id="loader-gradient-b" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fffaf2" />
              <stop offset="100%" stopColor="#f7d8c4" />
            </linearGradient>
          </defs>
          <path
            className="shape-overlays__path"
            d={initialMorphPath}
            fill="url(#loader-gradient-a)"
          />
          <path
            className="shape-overlays__path"
            d={initialMorphPath}
            fill="url(#loader-gradient-b)"
            opacity="0.78"
          />
        </svg>
        <div className="relative flex h-full items-center justify-center px-6">
          <div id="page-loader-copy" className="text-center">
            <p className="font-display text-5xl leading-none tracking-[-0.06em] sm:text-7xl">
              StableBuild
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.34em] text-zinc-700">
              Build fast. Build stable.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
