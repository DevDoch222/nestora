import { CtaBand } from "@/components/home/CtaBand";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <CtaBand />
    </>
  );
}
