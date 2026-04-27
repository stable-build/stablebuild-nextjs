"use client";

import dynamic from "next/dynamic";
import { FiArrowRight, FiShield, FiZap } from "react-icons/fi";

import { heroStats, trustSignals } from "@/data/site-content";

import { CharGridCanvas } from "./char-grid-canvas";
import { Container } from "./container";
import { RollingTagline } from "./rolling-tagline";

const GlobeScene = dynamic(
  () => import("./globe-scene").then((module) => module.GlobeScene),
  { ssr: false },
);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-x-0 top-0 -z-20 h-[820px] bg-[radial-gradient(circle_at_top,rgba(250,101,30,0.14),transparent_42%),linear-gradient(180deg,#fffefb_0%,#f7f7f3_46%,#f3efe7_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] opacity-80">
        <CharGridCanvas />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(250,101,30,0.16),transparent_70%)] blur-3xl sm:h-[32rem] sm:w-[32rem]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:items-center">
          <div className="max-w-[46rem]">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-zinc-600 shadow-sm backdrop-blur"
              data-reveal
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Available for product, AI, and protocol work
            </div>

            <h1
              className="mt-6 max-w-5xl font-display text-[2.85rem] leading-[0.94] tracking-[-0.055em] text-zinc-950 sm:text-[4rem] lg:text-[4.95rem] xl:text-[5.25rem]"
              data-reveal
            >
              Build fast.
              <br />
              Build <RollingTagline />
              <br />
              Ship confident.
            </h1>

            <p
              className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl"
              data-reveal
            >
              StableBuild is a security-first full-stack studio for teams that need product
              systems, AI workflows, and protocol-grade engineering shipped by the same people
              who scoped the work.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ember"
              >
                Book a 30-min call
                <FiArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#systems"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/90 px-6 py-3.5 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900 hover:text-zinc-950"
              >
                See selected systems
              </a>
            </div>

            <div
              className="mt-10 grid gap-3 rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur sm:grid-cols-3"
              data-reveal
            >
              <div className="rounded-[1.5rem] border border-zinc-200/80 bg-zinc-50/70 p-4">
                <div className="flex items-center gap-2 text-zinc-500">
                  <FiShield className="h-4 w-4 text-emerald-600" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
                    Security-first
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Auditor-grade review thinking is part of delivery, not an afterthought.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-zinc-200/80 bg-zinc-50/70 p-4">
                <div className="flex items-center gap-2 text-zinc-500">
                  <FiZap className="h-4 w-4 text-ember" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
                    Senior execution
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Product, AI, infra, smart contracts, and delivery handled in one senior loop.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-zinc-200/80 bg-zinc-50/70 p-4">
                <div className="flex items-center gap-2 text-zinc-500">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 text-[10px] text-white">
                    1
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
                    Aligned team
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Strategy, product judgment, and engineering execution stay connected.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" data-reveal>
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.6rem] border border-zinc-200/80 bg-white/75 p-4 shadow-sm backdrop-blur"
                >
                  <div className="text-2xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-3xl">
                    {stat.value}
                    {stat.suffix ? (
                      <span className="text-base font-medium text-zinc-500">{stat.suffix}</span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div data-reveal>
              <GlobeScene />
            </div>
            <div
              className="rounded-[2rem] border border-zinc-200/80 bg-white/80 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur"
              data-reveal
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                Why this matters
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {trustSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-[1.25rem] border border-zinc-200/70 bg-zinc-50/80 px-3 py-3 text-sm text-zinc-700"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
