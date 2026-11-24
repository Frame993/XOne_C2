import type { HTMLAttributes } from "react";
import { cn } from "./utils";

export type CardVariant = "default" | "raised" | "interactive" | "highlight" | "flat";

const variants: Record<CardVariant, string> = {
  default: "bg-(--xo-card-bg) border border-(--xo-card-border)",
  raised: "bg-(--xo-card-bg) shadow-(--xo-card-shadow)",
  interactive: "bg-(--xo-card-bg) shadow-(--xo-card-shadow) transition-[box-shadow,translate] duration-(--xo-duration-base) hover:shadow-(--xo-card-shadow-hover) hover:-translate-y-0.5 focus-within:shadow-(--xo-card-shadow-hover)",
  highlight: "bg-(--xo-card-highlight-bg) border border-accent-border",
  // celda de rejilla: sin radio ni fondo propio, sólo líneas (patrón firecrawl)
  flat: "rounded-none! bg-transparent",
};

export function Card({ variant = "default", padded = true, className, ...rest }: { variant?: CardVariant; padded?: boolean } & HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-(--xo-card-radius)", padded && "p-(--xo-card-padding)", variants[variant], className)} {...rest} />;
}

export function CardTitle({ className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold tracking-snug text-fg", className)} {...rest} />;
}

/** Texto de card al estilo firecrawl: arranque en negrita + resto en tono atenuado. */
export function CardLead({ lead, children, className }: { lead: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-lg tracking-snug text-fg-muted", className)}>
      <strong className="font-semibold text-fg">{lead} </strong>
      {children}
    </p>
  );
}
