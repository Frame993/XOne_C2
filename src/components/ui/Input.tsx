import { useId, type InputHTMLAttributes } from "react";
import { cn } from "./utils";
import { Icon, type IconName } from "./Icon";

type Props = { label?: string; hint?: string; error?: string; icon?: IconName } & InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, hint, error, icon, className, id, disabled, ...rest }: Props) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined;
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && <label htmlFor={inputId} className="type-label text-fg">{label}</label>}
      <div
        className={cn(
          "group flex h-(--xo-input-height) items-center gap-2 rounded-(--xo-input-radius) border bg-(--xo-input-bg) px-(--xo-input-padding-x) transition-colors duration-(--xo-duration-base)",
          error ? "border-(--xo-input-border-error)" : "border-(--xo-input-border) hover:border-(--xo-input-border-hover)",
          "focus-within:border-(--xo-input-border-focus) focus-within:ring-3 focus-within:ring-accent-subtle",
          disabled && "opacity-50 pointer-events-none bg-surface-sunken",
        )}
      >
        {icon && <Icon name={icon} className="shrink-0 text-fg-muted" />}
        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className="h-full w-full min-w-0 bg-transparent text-[length:var(--xo-font-size-base)] text-(--xo-input-fg) outline-none placeholder:text-(--xo-input-placeholder)"
          {...rest}
        />
      </div>
      {error ? (
        <p id={`${inputId}-error`} className="type-body-sm text-danger">{error}</p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="type-body-sm text-fg-muted">{hint}</p>
      ) : null}
    </div>
  );
}
