"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import { faqs } from "@/data/site-content";

import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-t border-zinc-200/80 bg-white py-20 sm:py-24 lg:py-28">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions clients actually ask
              <br />
              <span className="text-zinc-500">before the project lands.</span>
            </>
          }
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={faq.question}
                data-reveal
                className="rounded-[1.7rem] border border-zinc-200/80 bg-[linear-gradient(180deg,#ffffff,#f8f5f0)] px-5 py-3 shadow-sm sm:px-6"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-3 text-left"
                >
                  <span className="text-lg font-semibold tracking-[-0.03em] text-zinc-950">
                    {faq.question}
                  </span>
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white transition ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    <FiPlus className="h-4 w-4 text-zinc-700" />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-base leading-7 text-zinc-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
