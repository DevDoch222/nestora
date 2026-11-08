"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SearchBar } from "@/components/home/SearchBar";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Nestora Homes villa at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="hero-overlay absolute inset-0" />

      <div className="relative page-shell flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32">
        <div className="max-w-2xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-xs font-semibold tracking-[0.22em] text-white/80 uppercase"
          >
            Nestora Homes
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl leading-[1.05] font-bold tracking-[0.04em] text-white uppercase sm:text-5xl md:text-6xl"
          >
            Find Your Perfect Living Space
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
          >
            Discover exclusive luxury homes across Lagos, Abuja, and Nigeria’s
            finest neighbourhoods — tailored to your lifestyle with Nestora Homes.
          </motion.p>
        </div>

        <div className="mt-10 md:mt-14">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
