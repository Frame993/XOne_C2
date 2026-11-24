import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";
import { Icon, type IconName } from "./Icon";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "link";
export type ButtonSize = "sm" | "md" | "lg";

type Common = { variant?: ButtonVariant; size?: ButtonSize; loading?: boolean; iconLeft?: IconName; iconRight?: IconName; children?: ReactNode; className?: string };
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const base =
  "inline-flex select-none items-center justify-center gap-1.5 whitespace-nowrap type-label rounded-(--xo-button-radius) transition-(--xo-button-transition) active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-(--xo-button-primary-bg) text-(--xo-button-primary-fg) shadow-(--xo-button-primary-shadow) hover:bg-(--xo-button-primary-bg-hover) hover:shadow-(--xo-button-primary-shadow-hover) active:bg-(--xo-button-primary-bg-active) active:shadow-(--xo-button-primary-shadow) [&_svg]:transition-transform [&_svg]:duration-(--xo-duration-base) hover:[&_span+svg]:translate-x-0.5",
  secondary: "bg-(--xo-button-secondary-bg) text-(--xo-button-secondary-fg) hover:bg-(--xo-button-secondary-bg-hover)",
  ghost: "bg-(--xo-button-ghost-bg) text-(--xo-button-ghost-fg) hover:bg-(--xo-button-ghost-bg-hover)",
  outline: "border border-(--xo-button-outline-border) bg-surface text-(--xo-button-outline-fg) hover:bg-hover",
  link: "text-link underline-offset-4 hover:underline px-0! h-auto! shadow-none active:scale-100",
};
const sizes: Record<ButtonSize, string> = {
  sm: "h-(--xo-button-height-sm) px-(--xo-button-padding-x-sm)",
  md: "h-(--xo-button-height-md) px-(--xo-button-padding-x-md)",
  lg: "h-(--xo-button-height-lg) px-(--xo-button-padding-x-lg) [font-size:var(--xo-font-size-base)]",
};

export function Button(props: AsButton | AsLink) {
  const { variant = "primary", size = "md", loading, iconLeft, iconRight, children, className, ...rest } = props;
  const cls = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {loading ? <span aria-hidden className="size-3.5 animate-spin rounded-pill border-2 border-current border-r-transparent" /> : iconLeft && <Icon name={iconLeft} />}
      <span>{children}</span>
      {iconRight && !loading && <Icon name={iconRight} />}
    </>
  );
  if ("href" in rest && rest.href !== undefined) {
    return <a className={cls} aria-busy={loading || undefined} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{content}</a>;
  }
  const b = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button type={b.type ?? "button"} className={cls} aria-busy={loading || undefined} disabled={b.disabled || loading} {...b}>{content}</button>;
}
