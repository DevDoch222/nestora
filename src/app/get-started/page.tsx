"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const intents = ["Buyer", "Seller", "Developer / Investor"] as const;

export default function GetStartedPage() {
  const [intent, setIntent] =
    useState<(typeof intents)[number]>("Developer / Investor");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="Get started with Nestora Homes"
        description="Tell us who you are and what you’re building toward in Nigeria. We’ll map the right advisory path — buyer search, listing strategy, or developer launch support."
      />

      <section className="bg-surface py-14 md:py-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <FadeIn className="rounded-3xl bg-navy p-7 text-white md:p-9">
            <p className="text-xs tracking-[0.16em] text-white/65 uppercase">
              Pitch-Ready Onboarding
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Designed for conversations with Nigerian real estate decision-makers
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/75">
              <li>Show a complete buyer journey from hero search to inquiry.</li>
              <li>Demonstrate Nigerian inventory depth with filterable listings.</li>
              <li>Present advisor credibility and local project storytelling.</li>
              <li>Capture developer interest through a polished lead flow.</li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(15,30,50,0.06)] ring-1 ring-black/5 md:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col justify-center">
                <p className="text-xs font-semibold tracking-[0.16em] text-navy uppercase">
                  Request Received
                </p>
                <h2 className="mt-3 text-3xl font-bold text-ink">
                  You’re on the Nestora waitlist for a follow-up.
                </h2>
                <p className="mt-3 text-muted">
                  In a live deployment this would route to your CRM or email
                  workflow. For this pitch demo, the success state confirms the
                  experience end-to-end.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p className="mb-3 text-sm font-semibold text-ink">I am a…</p>
                  <div className="flex flex-wrap gap-2">
                    {intents.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setIntent(item)}
                        className={cn(
                          "rounded-full px-4 py-2 text-sm font-medium transition",
                          intent === item
                            ? "bg-navy text-white"
                            : "bg-surface text-muted hover:text-navy",
                        )}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company / Development name"
                  className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
                />
                <input
                  type="text"
                  placeholder="Primary market (e.g. Lagos, Abuja, Port Harcourt)"
                  className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
                />
                <textarea
                  required
                  rows={5}
                  placeholder={
                    intent === "Developer / Investor"
                      ? "Tell us about the project, unit mix, location, and launch timeline"
                      : "Share your goals, timeline, and preferred Nigerian markets"
                  }
                  className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
                />
                <Button type="submit" className="w-full md:w-auto">
                  Submit Interest
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
