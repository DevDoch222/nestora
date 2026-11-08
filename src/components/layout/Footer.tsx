import Link from "next/link";
import { Home, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    items: [
      { href: "/listings", label: "Listings" },
      { href: "/agents", label: "Agents" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { href: "/get-started", label: "Buyer Advisory" },
      { href: "/get-started", label: "Seller Strategy" },
      { href: "/get-started", label: "Developer Sales" },
      { href: "/listings", label: "Featured Homes" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-navy-deep text-white">
      <div className="page-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Home className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold tracking-[0.14em] uppercase">
              Nestora Homes
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            A modern residential platform built for Nigeria’s discerning buyers
            and ambitious developers — premium inventory across Lagos, Abuja, and
            beyond, with presentation that closes.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-sm font-semibold tracking-[0.12em] uppercase text-white">
              {group.title}
            </h3>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={`${group.title}-${item.label}`}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-4 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nestora Homes. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Lagos · Abuja · Port Harcourt
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> +234 800 555 0140
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@nestorahomes.ng
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
