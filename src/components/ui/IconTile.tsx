import { Icon, type IconName } from "./Icon";
import { cn } from "./utils";

const SIZES = {
  sm: { box: "size-8 rounded-md", icon: 16 },
  md: { box: "size-10 rounded-md", icon: 18 },
  lg: { box: "size-12 rounded-lg", icon: 20 },
} as const;

/** Icono en caja: siempre cuadrado (shrink-0) y con el radio del sistema. Único patrón para iconos enmarcados. */
export function IconTile({ icon, size = "sm", tone = "accent", className }: { icon: IconName; size?: keyof typeof SIZES; tone?: "accent" | "neutral"; className?: string }) {
  const s = SIZES[size];
  return (
    <span aria-hidden className={cn(
      "inline-flex shrink-0 items-center justify-center border transition-colors duration-(--xo-duration-base)",
      s.box,
      tone === "accent" ? "border-accent-border bg-accent-subtle text-accent-subtle-fg" : "border-line bg-hover text-fg-secondary",
      className,
    )}>
      <Icon name={icon} size={s.icon} />
    </span>
  );
}
