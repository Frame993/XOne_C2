import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "./utils";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Icon, type IconName } from "./Icon";
import { Connector, FrameRails, RAILS } from "../fx/GridLines";

export type NavLink = { label: string; href: string };
export type NavItem = { label: string; desc: string; href: string; icon: IconName | string; tag?: string };
export type NavMenu = { label: string; items: NavItem[]; caseIndex?: number };
export type NavCase = { name: string; sector: string; href: string };
type Featured = { overline: string; title: string; href: string };
type Stories = { label: string; desc: string; href: string };

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

const slug = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");

/* ---------- Panel desplegable (escritorio) ---------- */

function MenuItem({ item }: { item: NavItem }) {
  return (
    <a href={item.href} className="group/item flex h-full gap-3.5 px-7 py-4 transition-colors duration-200 hover:bg-(--xo-color-menu-hover) focus-visible:bg-(--xo-color-menu-hover)">
      <Icon name={item.icon as IconName} size={18} className="mt-0.5 shrink-0 text-fg-muted transition-colors duration-200 group-hover/item:text-fg-accent" />
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="flex items-center gap-2 type-label text-fg">
          {item.label}
          {item.tag && <span className="rounded-xs bg-(--xo-color-accent-subtle) px-1.5 py-px type-micro text-fg-accent">{item.tag}</span>}
        </span>
        <span className="type-body-sm text-fg-muted">{item.desc}</span>
      </span>
    </a>
  );
}

function MenuPanel({ menu, featured, stories, story, id, onNavigate }: { menu: NavMenu; featured?: Featured; stories?: Stories; story?: NavCase; id: string; onNavigate: () => void }) {
  const items: (NavItem | null)[] = menu.items.length % 2 ? [...menu.items, null] : menu.items;
  const line = "border-(--xo-color-menu-border)";
  return (
    // lámina a todo el ancho que prolonga la retícula de la página: mismas columnas, líneas y una fila vacía al final
    <div id={id} className={cn("border-b bg-(--xo-color-menu-bg)", line)} onClick={(e) => (e.target as HTMLElement).closest("a") && onNavigate()}>
      <div className={cn("xo-container xo-rails grid grid-cols-3 p-0", line)}>
        <div className={cn("col-span-2 flex flex-col border-r", line)}>
          <p className={cn("flex h-14 items-center border-b px-7 type-body-sm text-fg-muted", line)}>{menu.label}</p>
          <ul className="grid grid-cols-2">
            {items.map((it, i) => (
              <li key={it?.href ?? `vacío-${i}`} className={cn("border-b", line, i % 2 === 0 && "border-r")}>
                {it && <MenuItem item={it} />}
              </li>
            ))}
          </ul>
          <div aria-hidden className={cn("grid min-h-12 flex-1 grid-cols-2", "[&>i]:border-r", line)}><i className={line} /></div>
        </div>
        <div className="flex flex-col">
          <p className={cn("flex h-14 items-center border-b px-7 type-body-sm text-fg-muted", line)}>Destacado</p>
          {featured && (
            <a href={featured.href} className="group/f flex flex-col gap-3 bg-(--xo-color-signal-bg) px-7 py-6 text-(--xo-color-signal-fg) transition-colors duration-200 hover:bg-(--xo-color-signal-surface)">
              <span className="flex items-center justify-between type-overline">
                {featured.overline}
                <Icon name="external" size={18} className="transition-transform duration-200 group-hover/f:-translate-y-0.5 group-hover/f:translate-x-0.5" />
              </span>
              <span className="type-lead font-medium text-balance">{featured.title}</span>
            </a>
          )}
          {story && (
            <a href={story.href} className={cn("group/s flex flex-col gap-8 border-b px-7 py-6 transition-colors duration-200 hover:bg-(--xo-color-menu-hover)", line)}>
              <span className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 type-overline text-fg-accent"><i className="size-1 bg-accent" aria-hidden />Caso de éxito</span>
                <Icon name="external" size={18} className="text-fg-muted transition-transform duration-200 group-hover/s:-translate-y-0.5 group-hover/s:translate-x-0.5 group-hover/s:text-fg-accent" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="type-title-sm text-fg">{story.name}</span>
                <span className="type-body text-fg-secondary">{story.sector}</span>
              </span>
            </a>
          )}
          {stories && (
            <a href={stories.href} className={cn("group/a flex gap-3.5 border-b px-7 py-4 transition-colors duration-200 hover:bg-(--xo-color-menu-hover)", line)}>
              <Icon name="arrow" size={18} className="mt-0.5 shrink-0 text-fg-muted transition-[translate,color] duration-200 group-hover/a:translate-x-0.5 group-hover/a:text-fg-accent" />
              <span className="flex flex-col gap-0.5"><span className="type-label text-fg">{stories.label}</span><span className="type-body-sm text-fg-muted">{stories.desc}</span></span>
            </a>
          )}
          <div aria-hidden className="min-h-12 flex-1" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Navbar ---------- */

export function Navbar({ menus = [], links = [], cta, secondary, wiki, featured, stories, cases = [] }: {
  menus?: NavMenu[]; links?: NavLink[]; cta: NavLink; secondary?: NavLink; wiki?: NavLink;
  featured?: Featured; stories?: Stories; cases?: NavCase[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<number | null>(null);
  const [top, setTop] = useState(0);
  const header = useRef<HTMLElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const timer = useRef<number | undefined>(undefined);

  const measure = useCallback(() => setTop(header.current?.getBoundingClientRect().bottom ?? 0), []);
  const open = useCallback((i: number | null, delay = 0) => {
    window.clearTimeout(timer.current);
    if (delay) timer.current = window.setTimeout(() => { measure(); setActive(i); }, delay);
    else { measure(); setActive(i); }
  }, [measure]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (active !== null) { triggers.current[active]?.focus(); setActive(null); }
      setMobile(false);
    };
    const onScroll = () => (active !== null || mobile) && measure();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("scroll", onScroll); };
  }, [active, mobile, measure]);

  // bloqueo de scroll con el menú móvil abierto
  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
    if (mobile) measure();
  }, [mobile, measure]);

  /* Dinámica de la referencia: la lámina se despliega como una cortina (altura 0 → contenido, ~480 ms, ease-out),
     al cambiar de menú sigue abierta y sólo transiciona su altura mientras el contenido cambia al instante,
     y al cerrar se recoge rápido (~200 ms). El velo funde en paralelo. */
  const [shown, setShown] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const content = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (active !== null) {
      setShown(active);
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setExpanded(true)));
      return () => cancelAnimationFrame(id);
    }
    setExpanded(false);
    const t = window.setTimeout(() => setShown(null), 260); // por si no llega transitionend (movimiento reducido)
    return () => window.clearTimeout(t);
  }, [active]);
  useEffect(() => {
    const el = content.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    setHeight(el.offsetHeight);
    return () => ro.disconnect();
  }, [shown]);
  const menu = shown !== null ? menus[shown] : null;
  const isOpen = active !== null && expanded;

  return (
    <header ref={header} className="sticky top-0 z-40 border-b border-(--xo-navbar-border)" onMouseLeave={() => active !== null && open(null, 180)} onMouseEnter={() => window.clearTimeout(timer.current)}>
      {/* fondo translúcido en una capa propia: un backdrop-filter en el <header> convertiría a éste en el bloque contenedor de los hijos "fixed" (velo y menú móvil) */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-(--xo-navbar-bg)/90 backdrop-blur-md" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0"><Connector style={{ left: RAILS.left, top: 0.5 }} /><Connector style={{ left: RAILS.right, top: 0.5 }} /><Connector className="hidden lg:block" style={{ left: RAILS.frameLeft, top: 0.5 }} /><Connector className="hidden lg:block" style={{ left: RAILS.frameRight, top: 0.5 }} /></div>
      {/* columnas exteriores del marco: la rejilla continúa por el header como en la referencia */}
      <FrameRails />
      <div className="xo-container xo-rails flex h-(--xo-navbar-height) items-center justify-between gap-4 px-4">
        <a href="/" className="shrink-0 rounded-sm" aria-label="XOne, inicio"><Logo /></a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {menus.map((m, i) => (
              <li key={m.label}>
                <button
                  ref={(el) => { triggers.current[i] = el; }}
                  type="button"
                  aria-expanded={active === i}
                  aria-controls={`xo-menu-${slug(m.label)}`}
                  onClick={() => open(active === i ? null : i)}
                  onMouseEnter={() => open(i, active === null ? 90 : 0)}
                  className={cn("inline-flex h-8 items-center gap-1 rounded-md px-2.5 type-label text-(--xo-navbar-link-fg) transition-colors duration-(--xo-duration-instant) hover:bg-(--xo-navbar-link-bg-hover)", active === i && "bg-(--xo-color-overlay-press) text-fg")}
                >
                  {m.label}
                  <Icon name="chevron-down" size={14} className={cn("text-fg-muted transition-transform duration-(--xo-duration-base)", active === i && "rotate-180")} />
                </button>
              </li>
            ))}
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onMouseEnter={() => active !== null && open(null)} className="inline-flex h-8 items-center rounded-md px-2.5 type-label text-(--xo-navbar-link-fg) transition-colors duration-(--xo-duration-instant) hover:bg-(--xo-navbar-link-bg-hover)">{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          {wiki && <a href={wiki.href} className="hidden h-8 items-center gap-1 rounded-md px-2.5 type-label text-fg-secondary hover:bg-hover hover:text-fg xl:inline-flex">{wiki.label}<Icon name="external" size={14} /></a>}
          {secondary && <a href={secondary.href} hrefLang="en" className="hidden h-8 items-center rounded-md px-2.5 type-label text-fg-secondary hover:bg-hover hover:text-fg sm:inline-flex" lang="en" title="English version">{secondary.label}</a>}
          <ThemeToggle />
          <Button href={cta.href} size="sm" className="ml-1 max-sm:hidden">{cta.label}</Button>
          <button type="button" className="inline-flex size-9 items-center justify-center rounded-md hover:bg-hover lg:hidden" aria-expanded={mobile} aria-controls="xo-mobile-nav" aria-label={mobile ? "Cerrar menú" : "Abrir menú"} onClick={() => setMobile((o) => !o)}>
            <Icon name={mobile ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* panel de escritorio + velo sobre la página */}
      {menu && (
        <>
          <div aria-hidden className={cn("fixed inset-x-0 bottom-0 -z-20 hidden bg-(--xo-color-menu-scrim) transition-opacity duration-250 ease-out motion-reduce:transition-none lg:block", isOpen ? "opacity-100" : "pointer-events-none opacity-0")} style={{ top }} onMouseEnter={() => open(null, 120)} onClick={() => open(null)} />
          <div
            className={cn("absolute inset-x-0 top-full hidden overflow-hidden motion-reduce:transition-none lg:block", isOpen ? "transition-[height] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)]" : "transition-[height] duration-200 ease-in")}
            style={{ height: isOpen ? height : 0 }}
            onTransitionEnd={(e) => { if (e.target === e.currentTarget && active === null) setShown(null); }}
            inert={active === null}
          >
            <div ref={content}>
              <MenuPanel key={menu.label} id={`xo-menu-${slug(menu.label)}`} menu={menu} featured={featured} stories={stories} story={menu.caseIndex !== undefined ? cases[menu.caseIndex] : undefined} onNavigate={() => setActive(null)} />
            </div>
          </div>
        </>
      )}

      {/* menú móvil: acordeón a pantalla completa */}
      <nav id="xo-mobile-nav" aria-label="Principal móvil" hidden={!mobile} className="fixed inset-x-0 bottom-0 overflow-y-auto border-t border-line-faint bg-bg lg:hidden" style={{ top }}>
        <ul className="xo-container flex flex-col px-0">
          {menus.map((m, i) => {
            const isOpen = mobileGroup === i;
            return (
              <li key={m.label} className="border-b border-line-faint">
                <button type="button" aria-expanded={isOpen} aria-controls={`xo-m-${slug(m.label)}`} onClick={() => setMobileGroup(isOpen ? null : i)} className="flex h-14 w-full items-center justify-between px-5 type-body font-medium text-fg">
                  {m.label}
                  <Icon name="chevron-down" className={cn("text-fg-muted transition-transform duration-(--xo-duration-base)", isOpen && "rotate-180")} />
                </button>
                <ul id={`xo-m-${slug(m.label)}`} hidden={!isOpen} className="border-t border-line-faint bg-surface pb-2">
                  {m.items.map((it) => (
                    <li key={it.href}>
                      <a href={it.href} onClick={() => setMobile(false)} className="flex items-center gap-3 px-5 py-3 type-body text-fg-secondary hover:text-fg">
                        <Icon name={it.icon as IconName} size={18} className="shrink-0 text-fg-muted" />{it.label}
                        {it.tag && <span className="rounded-xs bg-(--xo-color-accent-subtle) px-1.5 py-px type-micro text-fg-accent">{it.tag}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
          {links.map((l) => (
            <li key={l.href} className="border-b border-line-faint"><a href={l.href} onClick={() => setMobile(false)} className="flex h-14 items-center px-5 type-body font-medium">{l.label}</a></li>
          ))}
          <li className="flex flex-col gap-3 px-5 py-6">
            <div className="flex gap-2">
              {wiki && <Button href={wiki.href} variant="ghost" className="flex-1" iconRight="external">{wiki.label}</Button>}
              {secondary && <Button href={secondary.href} variant="ghost" className="flex-1">{secondary.label}</Button>}
            </div>
            <Button href={cta.href} className="w-full">{cta.label}</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
