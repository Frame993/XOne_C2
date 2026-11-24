import type { HTMLAttributes } from "react";
import { cn } from "./utils";

export type BadgeVariant = "neutral" | "brand" | "success" | "warning" | "danger" | "mono";

const variants: Record<BadgeVariant, string> = {
  neutral: "bg-(--xo-badge-neutral-bg) text-(--xo-badge-neutral-fg) border border-(--xo-badge-neutral-border)",
  brand: "bg-(--xo-badge-brand-bg) text-(--xo-badge-brand-fg) border border-(--xo-badge-brand-border)",
  success: "bg-success-bg text-success",
  warning: "bg-warning-bg text-warning",
  danger: "bg-danger-bg text-danger",
  // etiqueta técnica en mono, sin caja, con el "píxel" cian de XONE delante: ▪ ENS · ISO 27001
  mono: "type-overline text-fg-muted px-0! h-auto! before:content-[''] before:size-1 before:shrink-0 before:bg-accent gap-2",
};

export function Badge({ variant = "neutral", dot, className, children, ...rest }: { variant?: BadgeVariant; dot?: boolean } & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("inline-flex h-(--xo-badge-height) items-center gap-1.5 rounded-(--xo-badge-radius) px-(--xo-badge-padding-x) type-label-sm whitespace-nowrap", variants[variant], className)} {...rest}>
      {dot && <span aria-hidden className="size-1.5 rounded-pill bg-current" />}
      {children}
    </span>
  );
}
