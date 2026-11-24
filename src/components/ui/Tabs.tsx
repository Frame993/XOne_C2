import { useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "./utils";

export type TabItem = { id: string; label: ReactNode; content: ReactNode };

/**
 * Tabs accesibles (WAI-ARIA, ←/→/Home/End). El indicador activo se desliza con el
 * easing "spring" (750ms), igual que el selector de la referencia.
 */
export function Tabs({ items, defaultId, variant = "pill", className, label }: { items: TabItem[]; defaultId?: string; variant?: "pill" | "underline"; className?: string; label: string }) {
  const [active, setActive] = useState(defaultId ?? items[0]?.id);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const [ind, setInd] = useState({ x: 0, w: 0 });

  useLayoutEffect(() => {
    const el = refs.current[items.findIndex((t) => t.id === active)];
    if (el) setInd({ x: el.offsetLeft, w: el.offsetWidth });
  }, [active, items]);

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = items.length;
    const next = e.key === "ArrowRight" ? (i + 1) % n : e.key === "ArrowLeft" ? (i - 1 + n) % n : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(items[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={label}
        className={cn(
          "relative flex max-w-full overflow-x-auto",
          variant === "pill" ? "inline-flex gap-1 rounded-(--xo-tabs-radius) bg-(--xo-tabs-list-bg) p-1" : "gap-6 border-b border-line-faint",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-0 transition-(--xo-tabs-indicator-transition)",
            variant === "pill" ? "top-1 bottom-1 rounded-(--xo-tabs-radius) bg-(--xo-tabs-trigger-bg-active) shadow-xs" : "bottom-0 h-0.5 bg-(--xo-tabs-indicator)",
          )}
          style={{ translate: `${ind.x}px 0`, width: ind.w }}
        />
        {items.map((t, i) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              ref={(el) => { refs.current[i] = el; }}
              role="tab"
              type="button"
              id={`${base}-tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`${base}-panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={cn(
                "relative inline-flex shrink-0 items-center gap-1.5 type-label whitespace-nowrap transition-colors duration-(--xo-duration-base)",
                variant === "pill" ? "h-(--xo-tabs-height) rounded-(--xo-tabs-radius) px-4" : "h-10",
                selected ? "text-(--xo-tabs-trigger-fg-active)" : "text-(--xo-tabs-trigger-fg) hover:text-fg",
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      {items.map((t) => (
        <div key={t.id} role="tabpanel" id={`${base}-panel-${t.id}`} aria-labelledby={`${base}-tab-${t.id}`} hidden={t.id !== active} tabIndex={0} className="mt-4 animate-fade-in-up outline-none">
          {t.content}
        </div>
      ))}
    </div>
  );
}
