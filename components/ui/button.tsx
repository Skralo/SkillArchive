import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
}

export function Button({ variant = "primary", className, children, ...props }: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition",
        variant === "primary" && "bg-neon-blue text-zinc-900 hover:bg-emerald-300 shadow-glow",
        variant === "secondary" && "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
        variant === "ghost" && "bg-transparent text-zinc-200 hover:bg-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({ href, variant = "primary", className, children }: BaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition",
        variant === "primary" && "bg-neon-blue text-zinc-900 hover:bg-emerald-300 shadow-glow",
        variant === "secondary" && "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
        variant === "ghost" && "bg-transparent text-zinc-200 hover:bg-zinc-800",
        className
      )}
    >
      {children}
    </Link>
  );
}
