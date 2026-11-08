export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  sqm: number;
  type: "Villa" | "Apartment" | "Penthouse" | "Estate" | "Townhouse" | "Duplex";
  status: "For Sale" | "For Rent" | "Sold";
  featured: boolean;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  yearBuilt: number;
  agentId: string;
};

export const properties: Property[] = [
  {
    id: "modern-villa-lekki",
    title: "Modern Villa",
    location: "Lekki Phase 1",
    city: "Lagos",
    price: 1850000000,
    beds: 5,
    baths: 5,
    sqm: 620,
    type: "Villa",
    status: "For Sale",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A sculptural Lekki villa with floor-to-ceiling glass, a private pool, and interiors curated for elevated Lagos living. Designed for families and executives who want privacy, scale, and proximity to the Island’s best amenities.",
    amenities: [
      "Private Pool",
      "BQ / Staff Quarters",
      "Smart Home",
      "24/7 Security",
      "Covered Parking",
      "Chef’s Kitchen",
    ],
    yearBuilt: 2022,
    agentId: "adaeze-okonkwo",
  },
  {
    id: "skyline-apartment-ikoyi",
    title: "Skyline Apartment",
    location: "Parkview, Ikoyi",
    city: "Lagos",
    price: 980000000,
    beds: 3,
    baths: 3,
    sqm: 280,
    type: "Apartment",
    status: "For Sale",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A refined Ikoyi residence with panoramic lagoon and skyline views, wraparound glass, and finishes that feel gallery-quiet. Ideal for buyers seeking vertical luxury with full-service living on the Island.",
    amenities: [
      "Concierge",
      "Gym & Lounge",
      "Lagoon Views",
      "Backup Power",
      "Secure Estate",
      "Private Elevator Access",
    ],
    yearBuilt: 2021,
    agentId: "tunde-balogun",
  },
  {
    id: "lakeside-residence-abuja",
    title: "Lakeside Residence",
    location: "Maitama District",
    city: "Abuja",
    price: 1250000000,
    beds: 4,
    baths: 4,
    sqm: 480,
    type: "Estate",
    status: "For Sale",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A calm Maitama residence where architecture and landscaped grounds meet. Expansive living spaces open onto terraces, while warm material palettes make every evening feel intentional and quiet in the capital.",
    amenities: [
      "Landscaped Garden",
      "Guest Chalet",
      "Fireplace Lounge",
      "Outdoor Kitchen",
      "Solar Backup",
      "EV Ready Parking",
    ],
    yearBuilt: 2020,
    agentId: "ibrahim-musa",
  },
  {
    id: "contemporary-oasis-banana-island",
    title: "Contemporary Oasis",
    location: "Banana Island",
    city: "Lagos",
    price: 4200000000,
    beds: 6,
    baths: 7,
    sqm: 980,
    type: "Villa",
    status: "For Sale",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A statement Banana Island home with resort-level outdoor spaces, a lap pool, and interiors designed for entertaining Nigeria’s most discerning guests — privacy, prestige, and waterfront calm in one address.",
    amenities: [
      "Lap Pool",
      "Waterfront Access",
      "Cinema Room",
      "Smart Lighting",
      "Home Office Suite",
      "Spa Bath",
    ],
    yearBuilt: 2023,
    agentId: "adaeze-okonkwo",
  },
  {
    id: "harbor-penthouse-vi",
    title: "Harbor Penthouse",
    location: "Victoria Island",
    city: "Lagos",
    price: 1450000000,
    beds: 3,
    baths: 3,
    sqm: 310,
    type: "Penthouse",
    status: "For Sale",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "An elevated Victoria Island penthouse with sweeping Atlantic and city views, open entertaining rooms, and a private terrace designed for golden-hour dinners above Lagos.",
    amenities: [
      "Ocean Views",
      "Private Terrace",
      "Wine Storage",
      "Concierge Desk",
      "Fitness Club",
      "Valet Parking",
    ],
    yearBuilt: 2021,
    agentId: "tunde-balogun",
  },
  {
    id: "asokoro-estate-abuja",
    title: "Diplomatic Estate",
    location: "Asokoro",
    city: "Abuja",
    price: 2100000000,
    beds: 5,
    baths: 6,
    sqm: 850,
    type: "Estate",
    status: "For Sale",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A diplomatic-grade Asokoro estate with generous setbacks, formal reception rooms, and architecture that frames quiet security. Built for privacy, scale, and high-profile entertaining in the FCT.",
    amenities: [
      "Secure Compound",
      "Courtyard Pool",
      "Guest Wing",
      "Outdoor Living",
      "Generator House",
      "Fire Features",
    ],
    yearBuilt: 2024,
    agentId: "ibrahim-musa",
  },
  {
    id: "garden-duplex-ph",
    title: "Garden Duplex",
    location: "Old GRA",
    city: "Port Harcourt",
    price: 420000000,
    beds: 4,
    baths: 4,
    sqm: 360,
    type: "Duplex",
    status: "For Sale",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A light-filled Port Harcourt duplex with layered outdoor rooms, warm timber accents, and a flexible floor plan suited to both family living and elevated hosting in the Old GRA.",
    amenities: [
      "Private Garden",
      "Rooftop Deck",
      "Open Kitchen",
      "Study Room",
      "BQ",
      "Storage Suite",
    ],
    yearBuilt: 2019,
    agentId: "chioma-eze",
  },
  {
    id: "coastal-retreat-ajah",
    title: "Coastal Retreat",
    location: "Lakowe / Ajah Corridor",
    city: "Lagos",
    price: 780000000,
    beds: 4,
    baths: 4,
    sqm: 410,
    type: "Villa",
    status: "For Sale",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600047508080-04c3c8c0d1e1?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A coastal Lagos retreat tuned to light, breeze, and estate living. Soft interiors, indoor-outdoor flow, and a quiet community setting make this a rare offering along the Ajah–Lakowe corridor.",
    amenities: [
      "Estate Amenities",
      "Pool & Sit-out",
      "Chef’s Kitchen",
      "Primary Suite Balcony",
      "Media Room",
      "Inverter System",
    ],
    yearBuilt: 2020,
    agentId: "chioma-eze",
  },
  {
    id: "urban-loft-yaba",
    title: "Urban Loft",
    location: "Yaba Tech Corridor",
    city: "Lagos",
    price: 265000000,
    beds: 2,
    baths: 2,
    sqm: 145,
    type: "Apartment",
    status: "For Sale",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "An architecturally confident loft for Nigeria’s creative and tech class — high ceilings, curated finishes, and a flexible plan that works as both a primary residence and a city pied-à-terre.",
    amenities: [
      "High Ceilings",
      "Fibre Ready",
      "Designer Kitchen",
      "Building Gym",
      "Secure Access",
      "City Balcony",
    ],
    yearBuilt: 2018,
    agentId: "tunde-balogun",
  },
  {
    id: "hillside-manor-enugu",
    title: "Hillside Manor",
    location: "Independence Layout",
    city: "Enugu",
    price: 560000000,
    beds: 5,
    baths: 5,
    sqm: 540,
    type: "Estate",
    status: "For Sale",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A hillside Enugu manor with layered terraces, a showpiece pool, and interiors designed for both quiet mornings and high-profile gatherings overlooking the Coal City’s green ridges.",
    amenities: [
      "City Views",
      "Infinity-edge Pool",
      "Guest Wing",
      "Screening Room",
      "Chef’s Kitchen",
      "Motor Court",
    ],
    yearBuilt: 2022,
    agentId: "chioma-eze",
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPriceShort(price: number) {
  if (price >= 1_000_000_000) {
    return `₦${(price / 1_000_000_000).toFixed(price % 1_000_000_000 === 0 ? 0 : 1)}B`;
  }
  if (price >= 1_000_000) {
    return `₦${(price / 1_000_000).toFixed(price % 1_000_000 === 0 ? 0 : 0)}M`;
  }
  return formatPrice(price);
}

export function getPropertyById(id: string) {
  return properties.find((property) => property.id === id);
}

export function getFeaturedProperties() {
  return properties.filter((property) => property.featured);
}

export function getPropertiesByAgent(agentId: string) {
  return properties.filter((property) => property.agentId === agentId);
}
