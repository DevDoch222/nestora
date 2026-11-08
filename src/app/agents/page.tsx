import type { Metadata } from "next";
import { AgentCard } from "@/components/agents/AgentCard";
import { PageHero } from "@/components/ui/PageHero";
import { agents } from "@/data/agents";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Meet the Nestora Homes advisors supporting buyers, sellers, and development partners.",
};

export default function AgentsPage() {
  return (
    <>
      <PageHero
        title="Meet the Advisors"
        description="A specialist Nigerian team for luxury residential and developer-facing sales — market fluent across Lagos, Abuja, and Port Harcourt, presentation-led, and built around trusted closings."
      />
      <section className="bg-surface py-14 md:py-20">
        <div className="page-shell grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {agents.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
