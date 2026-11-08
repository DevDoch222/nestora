import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Nestora Homes positions Nigerian luxury inventory and supports real estate developers with premium digital presentation.",
};

const pillars = [
  {
    title: "Brand-led discovery",
    copy: "Every listing journey starts with atmosphere and clarity — so Nigerian and diaspora buyers feel the product before they read the specs.",
  },
  {
    title: "Developer-ready storytelling",
    copy: "From Lekki launch inventory to Abuja sell-out, Nestora frames homes as investable, desirable, and unmistakably premium.",
  },
  {
    title: "Advisory that converts",
    copy: "Local market insight, presentation discipline, and a clean inquiry path help turn interest into qualified conversations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Built for Nigerian homes that deserve a better first impression"
        description="Nestora Homes is a luxury residential brand experience designed to help Nigerian developers and advisors present inventory with confidence, clarity, and conversion in mind."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-2">
          <FadeIn className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="Nestora Homes architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">
              Our Positioning
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
              A digital front door for premium Nigerian projects
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Developers need more than a brochure site. Nestora Homes shows how
              a modern real estate platform can feel elevated, searchable, and
              commercially useful — while still looking like a brand people trust
              with high-value decisions across Lagos, Abuja, and beyond.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              This demo is crafted for pitch conversations: clean navigation,
              believable Nigerian inventory, advisor credibility, and a clear path
              from curiosity to contact.
            </p>
            <div className="mt-8">
              <Button href="/get-started">Partner With Nestora</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-20">
        <div className="page-shell">
          <FadeIn className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-ink">What we stand for</h2>
            <p className="mt-3 text-muted">
              Three principles that shape every Nestora Homes experience.
            </p>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <FadeIn
                key={pillar.title}
                delay={index * 0.08}
                className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(15,30,50,0.06)] ring-1 ring-black/5"
              >
                <p className="text-sm font-semibold tracking-[0.12em] text-navy uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-bold text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {pillar.copy}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
