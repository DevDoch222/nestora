import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-navy text-white hover:bg-navy-soft shadow-[0_10px_30px_rgba(11,31,58,0.22)]",
  secondary:
    "bg-white text-navy border border-line hover:border-navy/30 hover:bg-surface",
  ghost: "bg-transparent text-white border border-white/40 hover:bg-white/10",
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[0.04em] transition-all duration-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
