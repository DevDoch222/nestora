import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Bath,
  BedDouble,
  CalendarDays,
  MapPin,
  Ruler,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { getAgentById } from "@/data/agents";
import {
  formatPrice,
  getPropertyById,
  properties,
} from "@/data/properties";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) return { title: "Property" };
  return {
    title: property.title,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) notFound();

  const agent = getAgentById(property.agentId);

  return (
    <div className="bg-surface pb-16">
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden md:h-[62vh]">
        <Image
          src={property.gallery[0]}
          alt={property.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/25 to-transparent" />
        <div className="page-shell absolute inset-x-0 bottom-0 pb-10 text-white">
          <p className="mb-2 text-sm tracking-wide text-white/75">
            {property.status} · {property.type}
          </p>
          <h1 className="text-3xl font-bold tracking-wide md:text-5xl">
            {property.title}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-white/85">
            <MapPin className="h-4 w-4" />
            {property.location}, {property.city}
          </p>
        </div>
      </section>

      <div className="page-shell grid gap-8 py-10 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-8">
          <FadeIn className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(15,30,50,0.06)] ring-1 ring-black/5 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm tracking-wide text-muted uppercase">
                  Asking Price
                </p>
                <p className="mt-1 text-3xl font-bold text-navy md:text-4xl">
                  {formatPrice(property.price)}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted">
                <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-2">
                  <BedDouble className="h-4 w-4 text-navy" />
                  {property.beds} Beds
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-2">
                  <Bath className="h-4 w-4 text-navy" />
                  {property.baths} Baths
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-2">
                  <Ruler className="h-4 w-4 text-navy" />
                  {property.sqm.toLocaleString()} sqm
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-2">
                  <CalendarDays className="h-4 w-4 text-navy" />
                  Built {property.yearBuilt}
                </span>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted">
              {property.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(15,30,50,0.06)] ring-1 ring-black/5 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-ink">Amenities</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {property.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="rounded-2xl bg-surface px-4 py-3 text-sm text-ink"
                >
                  {amenity}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="grid gap-4 sm:grid-cols-2">
            {property.gallery.slice(1).map((image) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl"
              >
                <Image
                  src={image}
                  alt={`${property.title} gallery`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            ))}
          </FadeIn>
        </div>

        <aside className="space-y-6">
          <FadeIn delay={0.1} className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(15,30,50,0.06)] ring-1 ring-black/5">
            <h2 className="mb-4 text-xl font-bold text-ink">Schedule a Viewing</h2>
            <p className="mb-5 text-sm leading-relaxed text-muted">
              Request a private tour or developer walkthrough. Our team will
              respond with availability and next steps.
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
              />
              <textarea
                rows={4}
                placeholder="Tell us about your timeline"
                className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-navy/30"
              />
              <Button type="submit" className="w-full">
                Request Viewing
              </Button>
            </form>
          </FadeIn>

          {agent ? (
            <FadeIn delay={0.16} className="rounded-3xl bg-navy p-6 text-white">
              <p className="text-xs tracking-[0.14em] text-white/65 uppercase">
                Listing Advisor
              </p>
              <h3 className="mt-2 text-xl font-bold">{agent.name}</h3>
              <p className="mt-1 text-sm text-white/75">{agent.title}</p>
              <p className="mt-4 text-sm text-white/70">{agent.email}</p>
              <p className="text-sm text-white/70">{agent.phone}</p>
              <Link
                href={`/agents/${agent.id}`}
                className="mt-5 inline-flex text-sm font-semibold text-white underline underline-offset-4"
              >
                View agent profile
              </Link>
            </FadeIn>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
