"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CtaBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)]" />
      <div className="page-shell relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Ready to present your next Nigerian development?
            </h2>
            <p className="mt-3 text-base text-white/75">
              Nestora Homes gives your inventory a premium buyer journey —
              from Lekki launch to diaspora inquiry — built to impress stakeholders
              and convert interest.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/get-started" className="!bg-white !text-navy hover:!bg-surface">
              Start a Conversation
            </Button>
            <Button href="/listings" variant="ghost">
              View Listings
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
