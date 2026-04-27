import { FiArrowRight } from "react-icons/fi";

import { BrandMark } from "./brand-mark";
import { Container } from "./container";

export function CtaFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-x-0 top-0 h-20 w-full">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            id="cta-bouncy-path"
            d="M0,40 C240,120 520,0 760,28 C1000,56 1200,132 1440,52 L1440,0 L0,0 Z"
            fill="#18181b"
          />
        </svg>
      </div>

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-white/55">
              Ready when you are
            </p>
            <h2 className="mt-5 font-display text-[3.2rem] leading-[0.92] tracking-[-0.055em] text-white sm:text-[4.3rem] lg:text-[5.5rem]">
              Build something ambitious
              <br />
              without making it fragile.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              If you need a small team that can ship product, AI systems, and security-sensitive
              infrastructure without outsourcing the hard parts, we should talk.
            </p>
          </div>

          <div className="rounded-[2.2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur">
            <a
              href="https://calendar.app.google/CZHfBmAYBTh74Bvq7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
            >
              Book a 30-min call
              <FiArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-6 flex items-center gap-4 rounded-[1.6rem] border border-white/10 bg-black/20 p-4">
              <div className="w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
                <BrandMark />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">StableBuild</p>
                <p className="text-sm text-white/60">
                  Full-stack delivery with an auditor mindset.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.22em] text-white/50">
              <span>Next.js</span>
              <span>AI systems</span>
              <span>Protocol engineering</span>
              <span>Security-first delivery</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>StableBuild © 2026. Build fast. Build stable. Ship confident.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/Suhel-Kap" target="_blank" rel="noreferrer">
              GitHub / Suhel
            </a>
            <a href="https://github.com/JustUzair" target="_blank" rel="noreferrer">
              GitHub / Uzair
            </a>
            <a href="https://linkedin.com/in/suhel-kapadia" target="_blank" rel="noreferrer">
              LinkedIn / Suhel
            </a>
            <a href="https://linkedin.com/in/0xJustUzair" target="_blank" rel="noreferrer">
              LinkedIn / Uzair
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
