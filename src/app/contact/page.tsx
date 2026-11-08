"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="Let’s talk about your next project"
        description="Whether you’re launching a development in Lagos or Abuja, placing a private listing, or evaluating a digital partnership, our Nigerian team is ready to walk through the opportunity."
      />

      <section className="bg-surface py-14 md:py-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.9fr_1.2fr]">
          <FadeIn className="space-y-5">
            {[
              {
                icon: MapPin,
                title: "Studios",
                copy: "Lagos · Abuja · Port Harcourt",
              },
              {
                icon: Phone,
                title: "Phone",
                copy: "+234 800 555 0140",
              },
              {
                icon: Mail,
                title: "Email",
                copy: "hello@nestorahomes.ng",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(15,30,50,0.06)] ring-1 ring-black/5"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-muted text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold text-ink">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted">{item.copy}</p>
                </div>
              );
            })}
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(15,30,50,0.06)] ring-1 ring-black/5 md:p-8">
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-start justify-center">
                <p className="text-xs font-semibold tracking-[0.16em] text-navy uppercase">
                  Message Received
                </p>
                <h2 className="mt-3 text-3xl font-bold text-ink">
                  Thank you — we’ll be in touch shortly.
                </h2>
                <p className="mt-3 max-w-md text-muted">
                  A Nestora advisor will follow up with next steps for your
                  inquiry. For pitch demos, this form is front-end only.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-ink">Send a message</h2>
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
                    placeholder="Email address"
                    className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company / Project"
                  className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
                />
                <textarea
                  required
                  rows={6}
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
                />
                <Button type="submit">Send Message</Button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
