import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { Button } from "@/components/ui/Button";
import { agents, getAgentById } from "@/data/agents";
import { getPropertiesByAgent } from "@/data/properties";

type AgentPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return agents.map((agent) => ({ id: agent.id }));
}

export async function generateMetadata({
  params,
}: AgentPageProps): Promise<Metadata> {
  const { id } = await params;
  const agent = getAgentById(id);
  if (!agent) return { title: "Agent" };
  return {
    title: agent.name,
    description: agent.bio,
  };
}

export default async function AgentDetailPage({ params }: AgentPageProps) {
  const { id } = await params;
  const agent = getAgentById(id);
  if (!agent) notFound();

  const listings = getPropertiesByAgent(agent.id);

  return (
    <div className="bg-surface pb-16">
      <section className="bg-[linear-gradient(135deg,#071527_0%,#0b1f3a_55%,#15345c_100%)] py-14 text-white md:py-20">
        <div className="page-shell grid items-center gap-10 md:grid-cols-[280px_1fr]">
          <FadeIn className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              sizes="280px"
              className="object-cover"
              priority
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.18em] text-white/65 uppercase">
              Nestora Homes Advisor
            </p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">{agent.name}</h1>
            <p className="mt-2 text-lg text-white/80">{agent.title}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
              {agent.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" className="!bg-white !text-navy hover:!bg-surface">
                Contact {agent.name.split(" ")[0]}
              </Button>
              <Button href="/listings" variant="ghost">
                Browse Listings
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="page-shell py-12 md:py-16">
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Years Experience", value: `${agent.yearsExperience}+` },
            { label: "Deals Closed", value: `${agent.dealsClosed}+` },
            { label: "Market Focus", value: agent.city },
          ].map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 0.06}
              className="rounded-3xl bg-white p-5 shadow-[0_14px_40px_rgba(15,30,50,0.06)] ring-1 ring-black/5"
            >
              <p className="text-xs tracking-[0.12em] text-muted uppercase">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-navy">{stat.value}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h2 className="mb-3 text-2xl font-bold text-ink">Specialties</h2>
          <div className="mb-10 flex flex-wrap gap-3">
            {agent.specialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full bg-blue-muted px-4 py-2 text-sm font-medium text-navy"
              >
                {specialty}
              </span>
            ))}
          </div>
        </FadeIn>

        <h2 className="mb-6 text-2xl font-bold text-ink">Active Listings</h2>
        {listings.length ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {listings.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-muted">No active listings for this advisor right now.</p>
        )}
      </section>
    </div>
  );
}
