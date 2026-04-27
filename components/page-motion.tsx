"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export function PageMotion() {
  const prefersReducedMotion = usePrefersReducedMotion();

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

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 24,
            opacity: 0,
            clipPath: "inset(0 0 16% 0)",
          },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.78,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
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
          onEnter: (self) => {
            const velocity = Math.min(Math.abs(self.getVelocity()) / 5000, 0.35);
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

  return null;
}
