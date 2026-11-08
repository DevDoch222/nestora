"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { PropertyCard } from "@/components/properties/PropertyCard";
import {
  formatPriceShort,
  properties,
  type Property,
} from "@/data/properties";

const cities = [
  "All Cities",
  ...Array.from(new Set(properties.map((property) => property.city))).sort(),
];
const types = [
  "All Types",
  ...Array.from(new Set(properties.map((property) => property.type))).sort(),
];

const MIN_PRICE = 100_000_000;
const MAX_PRICE = 5_000_000_000;

export function ListingsExplorer() {
  const searchParams = useSearchParams();
  const initialCity = searchParams.get("city") ?? "All Cities";
  const initialType = searchParams.get("type") ?? "All Types";
  const initialMax = Number(searchParams.get("maxPrice") ?? MAX_PRICE);

  const [city, setCity] = useState(
    cities.includes(initialCity) ? initialCity : "All Cities",
  );
  const [type, setType] = useState(
    types.includes(initialType) ? initialType : "All Types",
  );
  const [maxPrice, setMaxPrice] = useState(
    Number.isFinite(initialMax) ? initialMax : MAX_PRICE,
  );

  const filtered = useMemo(() => {
    return properties.filter((property: Property) => {
      const cityMatch = city === "All Cities" || property.city === city;
      const typeMatch = type === "All Types" || property.type === type;
      const priceMatch = property.price <= maxPrice;
      return cityMatch && typeMatch && priceMatch;
    });
  }, [city, type, maxPrice]);

  const progress = ((maxPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  return (
    <div>
      <div className="mb-10 grid gap-4 rounded-3xl bg-white p-5 shadow-[0_14px_40px_rgba(15,30,50,0.06)] ring-1 ring-black/5 md:grid-cols-3">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold tracking-[0.08em] text-muted uppercase">
            City
          </span>
          <div className="relative">
            <select
              value={city}
              onChange={(event) => setCity(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-line bg-surface px-4 py-3 pr-10 text-sm outline-none"
            >
              {cities.map((item) => (
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
            Type
          </span>
          <div className="relative">
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-line bg-surface px-4 py-3 pr-10 text-sm outline-none"
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
            <span>Max Price</span>
            <span className="normal-case tracking-normal text-navy">
              {formatPriceShort(maxPrice)}
            </span>
          </span>
          <div className="rounded-2xl border border-line bg-surface px-4 py-3">
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={50_000_000}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="range-input"
              style={{ ["--range-progress" as string]: `${progress}%` }}
            />
          </div>
        </label>
      </div>

      <p className="mb-6 text-sm text-muted">
        Showing {filtered.length} of {properties.length} properties
      </p>

      {filtered.length ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-line bg-white px-6 py-16 text-center">
          <p className="text-lg font-semibold text-ink">No homes match these filters</p>
          <p className="mt-2 text-sm text-muted">
            Adjust city, type, or price to explore more inventory.
          </p>
        </div>
      )}
    </div>
  );
}
