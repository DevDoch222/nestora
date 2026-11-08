"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X, Home } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/agents", label: "Agents" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const isHome = pathname === "/";

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "absolute inset-x-0 top-0 z-50",
        !isHome && "relative bg-white/90 backdrop-blur-md border-b border-line",
      )}
    >
      <div className="page-shell flex items-center justify-between gap-4 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur-md",
              isHome
                ? "border-white/35 bg-white/15 text-white"
                : "border-navy/15 bg-navy/5 text-navy",
            )}
          >
            <Home className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <span
            className={cn(
              "text-sm font-bold tracking-[0.14em] uppercase",
              isHome ? "text-white" : "text-navy",
            )}
          >
            Nestora Homes
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  isHome
                    ? active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : active
                      ? "text-navy"
                      : "text-muted hover:text-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/get-started" className="!px-5 !py-2.5">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className={cn(
            "rounded-full border p-2.5 lg:hidden",
            isHome ? "border-white/30 text-white" : "border-line text-navy",
          )}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          className={cn(
            "border-t lg:hidden",
            isHome
              ? "border-white/10 bg-navy-deep/95 text-white backdrop-blur-xl"
              : "border-line bg-white text-navy",
          )}
        >
          <div className="page-shell flex flex-col gap-4 py-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/get-started"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
