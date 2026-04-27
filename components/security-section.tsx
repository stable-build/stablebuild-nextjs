import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function SecuritySection() {
  return (
    <section id="security" className="border-t border-zinc-200/80 bg-zinc-950 py-20 text-white sm:py-24 lg:py-28">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Security-first development"
          tone="dark"
          title={
            <>
              We do not bolt security on.
              <br />
              <span className="text-amber-100">We build with it from the start.</span>
            </>
          }
          description={
            <p className="text-white/82">
              The fastest way to lose trust is to ship a system that needs its architecture
              rewritten once audit, scale, or failure modes show up. That is the exact pattern we
              are designed to prevent.
            </p>
          }
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)]">
          <div
            className="rounded-[2.4rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur"
            data-reveal
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.8rem] border border-white/10 bg-black/20 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/55">
                  Audit depth
                </p>
                <p className="mt-4 text-5xl font-semibold tracking-[-0.06em]">45 H/M</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Findings across private and public engagements spanning Solidity, Rust, Cairo,
                  Move, and Soroban ecosystems.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-black/20 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/55">
                  Security tooling
                </p>
                <p className="mt-4 text-5xl font-semibold tracking-[-0.06em]">6 / 8</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  SentinelAI matched six of eight paid audit findings and flagged eight more valid
                  vulnerabilities in benchmark testing.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[1.8rem] border border-amber-400/20 bg-[linear-gradient(180deg,rgba(250,101,30,0.15),rgba(255,255,255,0.03))] p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber-200/85">
                What clients actually get
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/78">
                <li>Attack-surface awareness while features are still being shaped</li>
                <li>Tighter approvals, cleaner privilege boundaries, and more auditable logic</li>
                <li>Smarter protocol abstractions that reduce future audit churn</li>
                <li>Less expensive downstream fixing because architectural mistakes are caught early</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4" data-reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/55">
                Signal quality
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                Security informs architecture.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Protocol-agnostic delegation models, audit-surface reduction, and failure-mode
                awareness are not “extra polish” to us. They are how trustworthy systems are built.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/55">
                Research mindset
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                Builders who read what breaks.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Thousands of lines of audited smart contract code changes how you implement every
                adjacent system. That mindset carries into APIs, AI pipelines, and product flows.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/55">
                Result
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                Faster trust for your first release.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Especially for early-stage teams, security-conscious delivery is a commercial
                advantage. It helps you ship without looking careless the moment real users or real
                capital touch the product.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
