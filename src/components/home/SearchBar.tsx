"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MapPin, Search } from "lucide-react";
import { formatPriceShort } from "@/data/properties";

const locations = [
  "Any Location",
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Enugu",
];
const types = [
  "Any Type",
  "Villa",
  "Apartment",
  "Penthouse",
  "Estate",
  "Townhouse",
  "Duplex",
];

const MIN_PRICE = 100_000_000;
const MAX_PRICE = 5_000_000_000;

export function SearchBar() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [location, setLocation] = useState("Any Location");
  const [type, setType] = useState("Any Type");
  const [price, setPrice] = useState(2_000_000_000);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (location !== "Any Location") params.set("city", location);
    if (type !== "Any Type") params.set("type", type);
    params.set("maxPrice", String(price));
    router.push(`/listings?${params.toString()}`);
  }

  const progress = ((price - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel grid gap-4 rounded-[1.75rem] p-4 md:grid-cols-[1.1fr_1.1fr_1.4fr_auto] md:items-end md:gap-5 md:p-5"
    >
      <label className="block">
        <span className="mb-2 flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] text-muted uppercase">
          <MapPin className="h-3.5 w-3.5 text-navy" />
          Location
        </span>
        <div className="relative">
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="w-full appearance-none rounded-2xl border border-line bg-white px-4 py-3 pr-10 text-sm text-ink outline-none transition focus:border-navy/30"
          >
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted" />
        </div>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-semibold tracking-[0.08em] text-muted uppercase">
          Property Type
        </span>
        <div className="relative">
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="w-full appearance-none rounded-2xl border border-line bg-white px-4 py-3 pr-10 text-sm text-ink outline-none transition focus:border-navy/30"
          >
            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted" />
        </div>
      </label>

      <label className="block">
        <span className="mb-2 flex items-center justify-between text-xs font-semibold tracking-[0.08em] text-muted uppercase">
          <span>Price Range</span>
          <span className="normal-case tracking-normal text-navy">
            Up to {formatPriceShort(price)}
          </span>
        </span>
        <div className="rounded-2xl border border-line bg-white px-4 py-3">
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={50_000_000}
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
            className="range-input"
            style={{ ["--range-progress" as string]: `${progress}%` }}
          />
        </div>
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-navy-soft md:min-w-[140px]"
      >
        <Search className="h-4 w-4" />
        Search
      </button>
    </motion.form>
  );
}
