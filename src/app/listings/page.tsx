import { Suspense } from "react";
import type { Metadata } from "next";
import { ListingsExplorer } from "@/components/properties/ListingsExplorer";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Listings",
  description:
    "Browse Nestora Homes luxury residences across Lagos, Abuja, Port Harcourt, and more.",
};

export default function ListingsPage() {
  return (
    <>
      <PageHero
        title="Featured & Available Listings"
        description="Explore a curated inventory of villas, duplexes, penthouses, and estates across Nigeria — positioned for discerning buyers and development partners."
      />
      <section className="bg-surface py-14 md:py-20">
        <div className="page-shell">
          <Suspense
            fallback={
              <div className="rounded-3xl bg-white p-10 text-center text-muted">
                Loading listings…
              </div>
            }
          >
            <ListingsExplorer />
          </Suspense>
        </div>
      </section>
    </>
  );
}
