import { useEffect, useState } from "react";
import { cn } from "./utils";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Connector } from "../fx/GridLines";

export type NavLink = { label: string; href: string };

export function ThemeToggle() {
  const [dark, setDark] = useState(() => typeof document !== "undefined" && document.documentElement.dataset.theme === "dark");
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try { localStorage.setItem("xo-theme", dark ? "dark" : "light"); } catch { /* almacenamiento no disponible */ }
  }, [dark]);
  return (
    <button type="button" onClick={() => setDark((d) => !d)} className="inline-flex size-8 items-center justify-center rounded-md text-fg-secondary hover:bg-hover hover:text-fg" aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}>
      <Icon name={dark ? "sun" : "moon"} />
    </button>
  );
}

export function Navbar({ links, cta, secondary }: { links: NavLink[]; cta: NavLink; secondary?: NavLink }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="sticky top-0 z-40 border-b border-(--xo-navbar-border) bg-(--xo-navbar-bg)/90 backdrop-blur-md">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0"><Connector style={{ left: "max(var(--xo-size-gutter), calc(50% - var(--xo-size-container) / 2))", top: 0 }} /><Connector style={{ left: "calc(100% - max(var(--xo-size-gutter), calc(50% - var(--xo-size-container) / 2)))", top: 0 }} /></div>
      <div className="xo-container xo-rails flex h-(--xo-navbar-height) items-center justify-between gap-6 px-4">
        <a href="/" className="shrink-0 rounded-sm" aria-label="XOne, inicio"><Logo /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex h-8 items-center rounded-md px-2.5 type-label text-(--xo-navbar-link-fg) transition-colors duration-(--xo-duration-instant) hover:bg-(--xo-navbar-link-bg-hover)">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {secondary && <Button href={secondary.href} variant="ghost" size="sm" className="hidden sm:inline-flex">{secondary.label}</Button>}
          <Button href={cta.href} size="sm" className="hidden sm:inline-flex">{cta.label}</Button>
          <button type="button" className="inline-flex size-9 items-center justify-center rounded-md hover:bg-hover lg:hidden" aria-expanded={open} aria-controls="xo-mobile-nav" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>
      <nav id="xo-mobile-nav" aria-label="Principal móvil" hidden={!open} className={cn("border-t border-line-faint bg-bg lg:hidden")}>
        <ul className="xo-container flex flex-col py-2">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="flex h-12 items-center justify-between border-b border-line-faint type-body font-medium">{l.label}<Icon name="chevron" className="text-fg-muted" /></a></li>
          ))}
          <li className="flex gap-2 py-4">
            {secondary && <Button href={secondary.href} variant="ghost" className="flex-1">{secondary.label}</Button>}
            <Button href={cta.href} className="flex-1">{cta.label}</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
