import { PropertyCard } from "@/components/properties/PropertyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProperties } from "@/data/properties";

export function FeaturedProperties() {
  const featured = getFeaturedProperties();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="page-shell">
        <SectionHeading title="Featured Properties" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
