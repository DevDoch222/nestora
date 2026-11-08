"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Home,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Premium Listings",
    description:
      "Curated residences across Lagos, Abuja, Port Harcourt, and beyond — selected for architecture, location, and long-term value.",
    icon: Home,
  },
  {
    title: "Expert Guidance",
    description:
      "Advisors who understand Nigerian buyer psychology, estate pricing, and how to present homes that feel inevitable.",
    icon: BadgeCheck,
  },
  {
    title: "Market Analytics",
    description:
      "Clear comps, absorption insights, and positioning recommendations that keep local launches competitive.",
    icon: BarChart3,
  },
  {
    title: "Secure Transactions",
    description:
      "Discreet processes, verified partners, and a closing experience designed to protect every stakeholder.",
    icon: ShieldCheck,
  },
];

export function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="page-shell">
        <SectionHeading title="Why Choose Us" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-muted text-navy ring-1 ring-navy/10">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 text-base font-bold tracking-wide text-ink">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
