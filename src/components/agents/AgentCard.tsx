"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Agent } from "@/data/agents";

type AgentCardProps = {
  agent: Agent;
  index?: number;
};

export function AgentCard({ agent, index = 0 }: AgentCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="overflow-hidden rounded-3xl bg-white shadow-[0_14px_40px_rgba(15,30,50,0.08)] ring-1 ring-black/5"
    >
      <Link href={`/agents/${agent.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={agent.image}
            alt={agent.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-2 p-5">
          <h3 className="text-lg font-bold text-ink">{agent.name}</h3>
          <p className="text-sm text-navy">{agent.title}</p>
          <p className="flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-3.5 w-3.5" />
            {agent.city}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
