import { useEffect, useRef, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/** true mientras el elemento está en pantalla (o una vez, con `once`). */
export function useInView<T extends Element>(opts: { once?: boolean; rootMargin?: string } = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      setInView(e.isIntersecting);
      if (e.isIntersecting && opts.once) io.disconnect();
    }, { rootMargin: opts.rootMargin ?? "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [opts.once, opts.rootMargin]);
  return [ref, inView] as const;
}

/** Lee variables CSS de tokens y las vuelve a leer al cambiar de tema. */
export function useTokenColors<K extends string>(el: React.RefObject<Element | null>, names: Record<K, string>) {
  const [colors, setColors] = useState<Record<K, string> | null>(null);
  useEffect(() => {
    const read = () => {
      const node = el.current ?? document.documentElement;
      const cs = getComputedStyle(node);
      setColors(Object.fromEntries(Object.entries(names).map(([k, v]) => [k, cs.getPropertyValue(v as string).trim()])) as Record<K, string>);
    };
    read();
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", read);
    return () => { mo.disconnect(); mq.removeEventListener("change", read); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return colors;
}

/** Canvas que se ajusta a su caja con devicePixelRatio. Devuelve ctx y tamaño CSS. */
export function setupCanvas(canvas: HTMLCanvasElement) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const { width, height } = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.round(width * dpr));
  canvas.height = Math.max(1, Math.round(height * dpr));
  const ctx = canvas.getContext("2d")!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w: width, h: height };
}

/** hex/rgb → "r g b" para componer con alfa. */
export function withAlpha(color: string, a: number) {
  if (color.startsWith("#")) {
    const n = color.length === 4 ? color.slice(1).split("").map((c) => c + c).join("") : color.slice(1, 7);
    const v = parseInt(n, 16);
    return `rgb(${(v >> 16) & 255} ${(v >> 8) & 255} ${v & 255} / ${a})`;
  }
  return color.replace(/rgba?\(([^)]+)\)/, (_, inner) => `rgb(${inner.split(",").slice(0, 3).join(" ")} / ${a})`);
}
