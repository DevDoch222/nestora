"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatPrice } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
  index?: number;
};

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-[0_14px_40px_rgba(15,30,50,0.08)] ring-1 ring-black/5"
    >
      <Link href={`/listings/${property.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-navy backdrop-blur-sm">
            {property.status}
          </div>
        </div>

        <div className="space-y-3 p-5">
          <div>
            <h3 className="text-base font-bold tracking-[0.06em] text-ink uppercase">
              {property.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-3.5 w-3.5 text-navy" />
              {property.city}
            </p>
          </div>

          <p className="text-lg font-bold text-navy">
            {formatPrice(property.price)}
          </p>

          <div className="flex flex-wrap gap-3 border-t border-line pt-3 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <BedDouble className="h-3.5 w-3.5" />
              {property.beds} Beds
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Bath className="h-3.5 w-3.5" />
              {property.baths} Baths
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Ruler className="h-3.5 w-3.5" />
              {property.sqm.toLocaleString()} sqm
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
