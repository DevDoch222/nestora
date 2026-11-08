export type Agent = {
  id: string;
  name: string;
  title: string;
  city: string;
  phone: string;
  email: string;
  image: string;
  specialties: string[];
  bio: string;
  dealsClosed: number;
  yearsExperience: number;
};

export const agents: Agent[] = [
  {
    id: "adaeze-okonkwo",
    name: "Adaeze Okonkwo",
    title: "Senior Luxury Advisor",
    city: "Lagos",
    phone: "+234 803 555 0148",
    email: "adaeze@nestorahomes.ng",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    specialties: ["Banana Island", "Ikoyi Estates", "Off-Market Sales"],
    bio: "Adaeze specializes in architecturally significant Island homes across Lekki, Ikoyi, and Banana Island. She is known for discreet off-market negotiations and a presentation style that helps developers and private clients see a property’s full market story.",
    dealsClosed: 140,
    yearsExperience: 12,
  },
  {
    id: "tunde-balogun",
    name: "Tunde Balogun",
    title: "Urban Portfolio Lead",
    city: "Lagos",
    phone: "+234 809 555 0192",
    email: "tunde@nestorahomes.ng",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    specialties: ["Penthouses", "Investment Sales", "New Developments"],
    bio: "Tunde advises high-net-worth buyers and developers across Lagos’s most competitive vertical markets — from Victoria Island to emerging mainland corridors. His strength is translating product positioning into faster, cleaner closings.",
    dealsClosed: 210,
    yearsExperience: 15,
  },
  {
    id: "chioma-eze",
    name: "Chioma Eze",
    title: "Regional Market Strategist",
    city: "Port Harcourt",
    phone: "+234 706 555 0174",
    email: "chioma@nestorahomes.ng",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    specialties: ["GRA Residences", "Family Estates", "Relocation"],
    bio: "Chioma blends market analytics with a calm advisory process across Port Harcourt, Enugu, and the South-East. Developers and relocating executives trust her for honest pricing guidance and homes that feel lived-in, not staged for show.",
    dealsClosed: 96,
    yearsExperience: 9,
  },
  {
    id: "ibrahim-musa",
    name: "Ibrahim Musa",
    title: "Development Partnership Director",
    city: "Abuja",
    phone: "+234 701 555 0116",
    email: "ibrahim@nestorahomes.ng",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    specialties: ["Developer Sales", "Pre-Construction", "Diplomatic Districts"],
    bio: "Ibrahim partners with developers from pre-launch through sell-out across Abuja’s premium districts. He helps shape brand narrative, pricing bands, and launch experiences that attract qualified Nigerian and diaspora buyers early.",
    dealsClosed: 178,
    yearsExperience: 14,
  },
];

export function getAgentById(id: string) {
  return agents.find((agent) => agent.id === id);
}
