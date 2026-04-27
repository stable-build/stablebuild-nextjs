"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/data/site-content";
import { cn } from "@/lib/utils";

import { BrandMark } from "./brand-mark";
import { Container } from "./container";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-3 sm:pt-4">
        <div className="rounded-3xl border border-white/55 bg-[rgba(247,247,243,0.9)] px-4 py-3 shadow-[0_24px_60px_rgba(24,24,27,0.08)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3"
              aria-label="StableBuild home"
            >
              <span className="w-10 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-white p-1.5 shadow-sm">
                <BrandMark />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-display text-lg tracking-[-0.04em] text-zinc-950 sm:text-xl">
                  StableBuild
                </span>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 sm:block">
                  Build fast. Build stable.
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-zinc-600 transition hover:bg-white hover:text-zinc-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ember"
              >
                Book a call
              </a>
            </div>

            <button
              type="button"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 lg:hidden"
            >
              <span className="relative block h-4 w-4">
                <span
                  className={cn(
                    "absolute left-0 top-1 h-0.5 w-4 bg-current transition",
                    open && "top-2 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-3 h-0.5 w-4 bg-current transition",
                    open && "top-2 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>

        </div>
      </Container>

      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-40 bg-zinc-950/25 opacity-0 backdrop-blur-sm transition duration-300 lg:hidden",
          open && "pointer-events-auto opacity-100",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className={cn(
          "fixed inset-x-4 top-24 z-50 max-h-[calc(100dvh-7rem)] origin-top overflow-y-auto rounded-[2rem] border border-white/70 bg-[#fbfaf7]/95 p-4 shadow-[0_30px_90px_rgba(24,24,27,0.18)] backdrop-blur-xl transition duration-300 lg:hidden",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-3 scale-[0.98] opacity-0",
        )}
      >
        <nav className="grid gap-2">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-[1.35rem] border border-zinc-200/70 bg-white/80 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-[1.35rem] bg-zinc-950 px-4 py-3 text-sm font-semibold text-white"
          >
            Book a call
          </a>
        </nav>
      </div>
    </header>
  );
}
