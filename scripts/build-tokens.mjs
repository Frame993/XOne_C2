// Genera tokens/tokens.json (W3C Design Tokens, 3 capas), src/styles/tokens.css
// y tokens/contrast-report.md a partir de una única fuente de verdad.
// Uso: node scripts/build-tokens.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { converter, formatHex, clampChroma, wcagContrast } from "culori";

const toOklch = converter("oklch");
const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const L_TARGET = { 50: 0.975, 100: 0.945, 200: 0.89, 300: 0.82, 400: 0.74, 500: 0.665, 600: 0.575, 700: 0.485, 800: 0.405, 900: 0.33, 950: 0.255 };
const C_CURVE = { 50: 0.1, 100: 0.2, 200: 0.38, 300: 0.62, 400: 0.86, 500: 1, 600: 0.94, 700: 0.84, 800: 0.72, 900: 0.6, 950: 0.48 };

/** Escala 50–950 en OKLCH; el color de marca se fija exacto en su paso ancla. */
function scale(hex, anchor) {
  const base = toOklch(hex);
  const ai = STEPS.indexOf(anchor);
  const dL = base.l - L_TARGET[anchor];
  const out = {};
  STEPS.forEach((s, i) => {
    if (s === anchor) return (out[s] = hex.toLowerCase());
    const w = Math.max(0, 1 - Math.abs(i - ai) / 4);
    const l = L_TARGET[s] + dL * w;
    const c = base.c * (C_CURVE[s] / C_CURVE[anchor]);
    out[s] = formatHex(clampChroma({ mode: "oklch", l, c, h: base.h }, "oklch"));
  });
  return out;
}

// ---------- 1. PRIMITIVES ----------
const brand = {
  cyan: scale("#00AED9", 500), // logo: chevron principal
  petrol: scale("#155D82", 700), // logo: wordmark y chevrones secundarios
};
const status = {
  green: scale("#12A150", 500),
  amber: scale("#E5A00D", 400),
  red: scale("#DC3B2F", 500),
};
// Neutros fríos con el tono del azul de marca; 900 = #18293E (texto actual de xone.es)
const NEUTRAL = { 25: [0.987, 0.002], 50: [0.972, 0.004], 100: [0.948, 0.006], 150: [0.93, 0.008], 200: [0.9, 0.01], 300: [0.83, 0.014], 400: [0.7, 0.02], 500: [0.585, 0.024], 600: [0.49, 0.028], 700: [0.405, 0.034], 800: [0.335, 0.04], 950: [0.205, 0.032], 975: [0.165, 0.026] };
const neutral = { 0: "#ffffff" };
for (const [k, [l, c]] of Object.entries(NEUTRAL)) neutral[k] = formatHex(clampChroma({ mode: "oklch", l, c, h: 252 }, "oklch"));
neutral[900] = "#18293e";
const neutralSorted = Object.fromEntries(Object.entries(neutral).sort((a, b) => +a[0] - +b[0]));

// paso extra: el cian más claro que da 4.5:1 con texto blanco (CTA con texto blanco, como la referencia)
brand.cyan = { ...brand.cyan, 650: "#007e9e" };
brand.cyan = Object.fromEntries(Object.entries(brand.cyan).sort((a, b) => +a[0] - +b[0]));
const primitive = {
  color: { cyan: brand.cyan, petrol: brand.petrol, neutral: neutralSorted, green: status.green, amber: status.amber, red: status.red },
  font: {
    family: { sans: "'Plus Jakarta Sans Variable', 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif", mono: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" },
    weight: { regular: 400, book: 450, medium: 500, semibold: 600, bold: 700 },
    // escala tomada de firecrawl.dev (computed): 10 12 13 14 16 20 24 40 52
    size: { "2xs": "10px", xs: "12px", sm: "13px", md: "14px", base: "16px", lg: "20px", xl: "24px", "2xl": "32px", "3xl": "40px", "4xl": "52px" },
    lineHeight: { "2xs": "12px", xs: "16px", sm: "20px", md: "20px", base: "24px", lg: "28px", xl: "32px", "2xl": "38px", "3xl": "44px", "4xl": "56px" },
    tracking: { tight: "-0.02em", snug: "-0.01em", normal: "0em", wide: "0.01em", caps: "0.08em" },
  },
  space: { 0: "0px", 0.5: "2px", 1: "4px", 1.5: "6px", 2: "8px", 2.5: "10px", 3: "12px", 4: "16px", 5: "20px", 6: "24px", 7: "28px", 8: "32px", 10: "40px", 12: "48px", 16: "64px", 24: "96px" },
  radius: { none: "0px", xs: "4px", sm: "6px", md: "8px", lg: "12px", xl: "16px", pill: "999px" },
  size: { container: "1112px", gutter: "16px", "nav-height": "64px", "prose-max": "552px" },
  duration: { spring: "750ms", ambient: "7000ms", orbit: "32000ms", instant: "50ms", fast: "100ms", base: "200ms", slow: "400ms", slower: "500ms" },
  easing: { spring: "linear(0, 0.04 2.7%, 0.2 6.8%, 0.42 10.8%, 0.64 14.9%, 0.82 19%, 0.95 23%, 1.03 27%, 1.08 31%, 1.09 35%, 1.07 40%, 1.04 46%, 1.01 52%, 0.99 60%, 0.99 70%, 1)", standard: "cubic-bezier(0.25, 0.1, 0.25, 1)", out: "cubic-bezier(0.22, 1, 0.36, 1)", "in-out": "cubic-bezier(0.65, 0, 0.35, 1)" },
  breakpoint: { xs: "390px", sm: "576px", md: "768px", lg: "996px", xl: "1200px" },
};

// ---------- 2. SEMANTIC (light / dark) ----------
const R = (p) => `{primitive.${p}}`;
const semanticColor = {
  "bg.base": ["color.neutral.25", "color.neutral.975"],
  "bg.subtle": ["color.neutral.50", "color.neutral.950"],
  "bg.inverse": ["color.neutral.900", "color.neutral.50"],
  "surface.default": ["color.neutral.0", "color.neutral.950"],
  "surface.raised": ["color.neutral.0", "color.neutral.900"],
  "surface.sunken": ["color.neutral.50", "color.neutral.975"],
  "text.primary": ["color.neutral.900", "color.neutral.50"],
  "text.secondary": ["color.neutral.700", "color.neutral.200"],
  "text.muted": ["color.neutral.600", "color.neutral.400"],
  "text.decorative": ["color.neutral.300", "color.neutral.700"],
  "text.inverse": ["color.neutral.0", "color.neutral.950"],
  "text.accent": ["color.cyan.700", "color.cyan.400"],
  "text.accent-display": ["color.cyan.600", "color.cyan.400"],
  "text.link": ["color.petrol.700", "color.cyan.300"],
  "border.faint": ["color.neutral.100", "color.neutral.900"],
  "border.muted": ["color.neutral.150", "color.neutral.800"],
  "border.loud": ["color.neutral.200", "color.neutral.700"],
  "accent.default": ["color.cyan.500", "color.cyan.500"],
  "accent.hover": ["color.cyan.400", "color.cyan.400"],
  "accent.active": ["color.cyan.600", "color.cyan.600"],
  "accent.fg": ["color.neutral.950", "color.neutral.950"],
  "accent.solid": ["color.cyan.650", "color.cyan.650"],
  "accent.solid-hover": ["color.cyan.700", "color.cyan.700"],
  "accent.solid-active": ["color.cyan.800", "color.cyan.800"],
  "accent.solid-fg": ["color.neutral.0", "color.neutral.0"],
  "fx.cell": ["color.petrol.700", "color.cyan.300"],
  "fx.glyph": ["color.cyan.500", "color.cyan.400"],
  "fx.matrix": ["color.petrol.300", "color.petrol.700"],
  "accent.subtle": ["color.cyan.50", "color.cyan.950"],
  "accent.subtle-fg": ["color.cyan.800", "color.cyan.200"],
  "accent.border": ["color.cyan.200", "color.cyan.800"],
  "brand.wordmark": ["color.petrol.700", "color.neutral.0"],
  "brand.symbol": ["color.cyan.500", "color.cyan.500"],
  "brand.secondary": ["color.petrol.700", "color.petrol.400"],
  "brand.secondary-hover": ["color.petrol.800", "color.petrol.300"],
  "brand.secondary-fg": ["color.neutral.0", "color.neutral.950"],
  "overlay.hover": ["color.neutral.100", "color.neutral.900"],
  "overlay.press": ["color.neutral.150", "color.neutral.800"],
  "focus.ring": ["color.cyan.600", "color.cyan.400"],
  "success.fg": ["color.green.700", "color.green.300"],
  "success.bg": ["color.green.50", "color.green.950"],
  "warning.fg": ["color.amber.800", "color.amber.300"],
  "warning.bg": ["color.amber.50", "color.amber.950"],
  "danger.fg": ["color.red.700", "color.red.300"],
  "danger.bg": ["color.red.50", "color.red.950"],
  "danger.default": ["color.red.600", "color.red.500"],
  "code.bg": ["color.neutral.0", "color.neutral.950"],
  "code.fg": ["color.neutral.900", "color.neutral.100"],
  "code.line-number": ["color.neutral.600", "color.neutral.400"],
  "code.keyword": ["color.petrol.700", "color.cyan.300"],
  "code.string": ["color.green.700", "color.green.300"],
  "code.comment": ["color.neutral.600", "color.neutral.400"],
};
// sombras: estructura de firecrawl.dev, teñidas con el azul de marca
const shadow = {
  light: {
    xs: "0 0.5px 0.5px rgb(24 41 62 / 0.06), 0 1px 2px rgb(24 41 62 / 0.04)",
    card: "0 24px 32px -12px rgb(24 41 62 / 0.04), 0 16px 24px -8px rgb(24 41 62 / 0.04), 0 8px 16px -4px rgb(24 41 62 / 0.03), 0 0 0 1px rgb(24 41 62 / 0.05)",
    float: "0 40px 48px -20px rgb(24 41 62 / 0.05), 0 32px 32px -20px rgb(24 41 62 / 0.05), 0 16px 24px -12px rgb(24 41 62 / 0.05), 0 0 0 1px rgb(24 41 62 / 0.06)",
    accent: "inset 0 1px 0 rgb(255 255 255 / 0.22), inset 0 -6px 12px rgb(0 60 80 / 0.28), 0 2px 4px rgb(0 126 158 / 0.16), 0 1px 1px rgb(0 126 158 / 0.16), 0 0.5px 0.5px rgb(0 126 158 / 0.2)",
    "accent-hover": "inset 0 1px 0 rgb(255 255 255 / 0.22), inset 0 -6px 12px rgb(0 60 80 / 0.28), 0 4px 8px rgb(0 126 158 / 0.22), 0 1px 1px rgb(0 126 158 / 0.16), 0 0.5px 0.5px rgb(0 126 158 / 0.2)",
    inset: "inset 0 6px 12px rgb(24 41 62 / 0.03), inset 0 0.75px 0.75px rgb(24 41 62 / 0.03)",
  },
  dark: {
    xs: "0 0 0 1px rgb(255 255 255 / 0.06)",
    card: "0 24px 32px -12px rgb(0 0 0 / 0.35), 0 0 0 1px rgb(255 255 255 / 0.06)",
    float: "0 40px 48px -20px rgb(0 0 0 / 0.5), 0 0 0 1px rgb(255 255 255 / 0.08)",
    accent: "inset 0 1px 0 rgb(255 255 255 / 0.18), inset 0 -6px 12px rgb(0 40 55 / 0.35), 0 2px 8px rgb(0 174 217 / 0.25)",
    "accent-hover": "inset 0 1px 0 rgb(255 255 255 / 0.18), inset 0 -6px 12px rgb(0 40 55 / 0.35), 0 4px 14px rgb(0 174 217 / 0.35)",
    inset: "inset 0 6px 12px rgb(0 0 0 / 0.25)",
  },
};

// ---------- 3. COMPONENT ----------
const component = {
  button: {
    radius: "{primitive.radius.sm}", "height-sm": "32px", "height-md": "40px", "height-lg": "48px",
    "padding-x-sm": "{primitive.space.3}", "padding-x-md": "{primitive.space.4}", "padding-x-lg": "{primitive.space.6}",
    "font-size": "{primitive.font.size.md}", "font-weight": "{primitive.font.weight.semibold}",
    "primary-bg": "{semantic.color.accent.solid}", "primary-bg-hover": "{semantic.color.accent.solid-hover}", "primary-bg-active": "{semantic.color.accent.solid-active}", "primary-fg": "{semantic.color.accent.solid-fg}", "primary-shadow": "{semantic.shadow.accent}", "primary-shadow-hover": "{semantic.shadow.accent-hover}",
    "secondary-bg": "{semantic.color.brand.secondary}", "secondary-bg-hover": "{semantic.color.brand.secondary-hover}", "secondary-fg": "{semantic.color.brand.secondary-fg}",
    "ghost-bg": "{semantic.color.overlay.hover}", "ghost-bg-hover": "{semantic.color.overlay.press}", "ghost-fg": "{semantic.color.text.primary}",
    "outline-border": "{semantic.color.border.loud}", "outline-fg": "{semantic.color.text.primary}",
    "transition": "background-color {primitive.duration.base} {primitive.easing.standard}, box-shadow {primitive.duration.fast} {primitive.easing.standard}, scale {primitive.duration.fast} {primitive.easing.standard}",
  },
  badge: { radius: "{primitive.radius.pill}", "padding-x": "{primitive.space.2.5}", height: "24px", "font-size": "{primitive.font.size.xs}", "neutral-bg": "{semantic.color.surface.default}", "neutral-fg": "{semantic.color.text.primary}", "neutral-border": "{semantic.color.border.muted}", "brand-bg": "{semantic.color.accent.subtle}", "brand-fg": "{semantic.color.accent.subtle-fg}", "brand-border": "{semantic.color.accent.border}" },
  card: { radius: "{primitive.radius.lg}", padding: "{primitive.space.7}", bg: "{semantic.color.surface.default}", border: "{semantic.color.border.faint}", shadow: "{semantic.shadow.card}", "shadow-hover": "{semantic.shadow.float}", "highlight-bg": "{semantic.color.accent.subtle}" },
  input: { radius: "{primitive.radius.md}", height: "44px", "padding-x": "{primitive.space.4}", bg: "{semantic.color.surface.default}", fg: "{semantic.color.text.primary}", placeholder: "{semantic.color.text.muted}", border: "{semantic.color.border.loud}", "border-hover": "{semantic.color.text.muted}", "border-focus": "{semantic.color.focus.ring}", "border-error": "{semantic.color.danger.default}" },
  tabs: { radius: "{primitive.radius.pill}", "height": "36px", "list-bg": "{semantic.color.overlay.hover}", "trigger-fg": "{semantic.color.text.muted}", "trigger-fg-active": "{semantic.color.text.primary}", "trigger-bg-active": "{semantic.color.surface.raised}", "indicator": "{semantic.color.accent.default}", "indicator-transition": "translate {primitive.duration.spring} {primitive.easing.spring}, width {primitive.duration.spring} {primitive.easing.spring}" },
  codeblock: { radius: "{primitive.radius.lg}", bg: "{semantic.color.code.bg}", fg: "{semantic.color.code.fg}", border: "{semantic.color.border.faint}", "header-bg": "{semantic.color.surface.sunken}", "font-size": "{primitive.font.size.md}", "line-height": "22px" },
  navbar: { height: "{primitive.size.nav-height}", bg: "{semantic.color.bg.base}", border: "{semantic.color.border.faint}", "link-fg": "{semantic.color.text.primary}", "link-bg-hover": "{semantic.color.overlay.hover}" },
  footer: { bg: "{semantic.color.bg.base}", border: "{semantic.color.border.faint}", "heading-fg": "{semantic.color.text.primary}", "link-fg": "{semantic.color.text.secondary}", "link-fg-hover": "{semantic.color.text.primary}" },
  section: { "padding-y": "{primitive.space.24}", "padding-y-sm": "{primitive.space.16}", "grid-line": "{semantic.color.border.faint}" },
};

// ---------- W3C JSON ----------
const typeOf = (path, v) => path.startsWith("color") ? "color" : path.startsWith("font.family") ? "fontFamily" : path.startsWith("font.weight") ? "fontWeight" : path.startsWith("duration") ? "duration" : path.startsWith("easing") ? "cubicBezier" : path.startsWith("shadow") ? "shadow" : "dimension";
function toW3C(obj, prefix = "") {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    out[k] = typeof v === "object" ? toW3C(v, p) : { $type: typeOf(p, v), $value: v };
  }
  return out;
}
const semanticJson = { color: {} };
for (const [k, [l, d]] of Object.entries(semanticColor)) {
  const [g, n] = k.split(".");
  semanticJson.color[g] ??= {};
  semanticJson.color[g][n] = { $type: "color", $value: R(l), $extensions: { "es.xone.modes": { dark: R(d) } } };
}
const tokensJson = {
  $description: "XONE Design Tokens — W3C DTCG. Capas: primitive → semantic → component. El modo oscuro vive en $extensions['es.xone.modes'].dark.",
  primitive: toW3C(primitive),
  semantic: { ...semanticJson, shadow: Object.fromEntries(Object.keys(shadow.light).map((k) => [k, { $type: "shadow", $value: shadow.light[k], $extensions: { "es.xone.modes": { dark: shadow.dark[k] } } }])) },
  component: toW3C(component),
};
mkdirSync("tokens", { recursive: true });
writeFileSync("tokens/tokens.json", JSON.stringify(tokensJson, null, 2));

// ---------- CSS ----------
const cssName = (p) => "--xo-" + p.replace(/^(semantic|primitive)\./, "").replace(/\./g, "-");
const resolveRef = (v) => typeof v === "string" ? v.replace(/\{([^}]+)\}/g, (_, p) => `var(${cssName(p)})`) : v;
const lines = (obj, prefix = "") => Object.entries(obj).flatMap(([k, v]) => typeof v === "object" ? lines(v, prefix ? `${prefix}.${k}` : k) : [`  ${cssName(prefix ? `${prefix}.${k}` : k)}: ${resolveRef(v)};`]);
const semLight = Object.entries(semanticColor).map(([k, [l]]) => `  ${cssName("color." + k)}: var(${cssName(l)});`);
const semDark = Object.entries(semanticColor).map(([k, [, d]]) => `  ${cssName("color." + k)}: var(${cssName(d)});`);
const shL = Object.entries(shadow.light).map(([k, v]) => `  --xo-shadow-${k}: ${v};`);
const shD = Object.entries(shadow.dark).map(([k, v]) => `  --xo-shadow-${k}: ${v};`);
const css = `/* AUTO-GENERADO por scripts/build-tokens.mjs — no editar a mano */
/* 1 · primitives */
:root {
${lines(primitive).join("\n")}
}
/* 2 · semantic — claro */
:root, [data-theme="light"] {
  color-scheme: light;
${semLight.join("\n")}
${shL.join("\n")}
}
/* 2 · semantic — oscuro */
[data-theme="dark"] {
  color-scheme: dark;
${semDark.join("\n")}
${shD.join("\n")}
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
${semDark.map((l) => "  " + l).join("\n")}
${shD.map((l) => "  " + l).join("\n")}
  }
}
/* 3 · component — se redeclaran en cada [data-theme] para permitir temas por subárbol */
:root, [data-theme] {
${lines(component).join("\n")}
}
`;
writeFileSync("src/styles/tokens.css", css);

// ---------- Contraste WCAG ----------
const flat = {};
const walk = (o, p = "") => Object.entries(o).forEach(([k, v]) => (typeof v === "object" ? walk(v, p ? `${p}.${k}` : k) : (flat[p ? `${p}.${k}` : k] = v)));
walk(primitive.color, "color");
const sem = (k, mode) => flat[semanticColor[k][mode === "light" ? 0 : 1]];
const PAIRS = [
  ["text.primary", "bg.base"], ["text.primary", "surface.default"], ["text.primary", "surface.raised"],
  ["text.secondary", "bg.base"], ["text.secondary", "surface.default"],
  ["text.muted", "bg.base"], ["text.muted", "surface.default"], ["text.muted", "bg.subtle"],
  ["text.accent", "bg.base"], ["text.accent", "surface.default"], ["text.accent-display", "bg.base", 3], ["text.accent-display", "surface.default", 3], ["text.link", "bg.base"], ["text.link", "surface.default"],
  ["text.inverse", "bg.inverse"], ["accent.fg", "accent.default"], ["accent.solid-fg", "accent.solid"], ["accent.solid-fg", "accent.solid-hover"], ["accent.solid-fg", "accent.solid-active"],
  ["brand.secondary-fg", "brand.secondary"], ["brand.secondary-fg", "brand.secondary-hover"],
  ["accent.subtle-fg", "accent.subtle"], ["text.primary", "overlay.hover"], ["text.muted", "overlay.hover"],
  ["success.fg", "success.bg"], ["warning.fg", "warning.bg"], ["danger.fg", "danger.bg"], ["danger.fg", "surface.default"],
  ["code.fg", "code.bg"], ["code.keyword", "code.bg"], ["code.string", "code.bg"], ["code.comment", "code.bg"], ["code.line-number", "code.bg"],
  ["focus.ring", "bg.base", 3], ["border.loud", "surface.default", 0], ["text.decorative", "bg.base", 0],
];
let md = "# Informe de contraste WCAG 2.1 (generado)\n\nMínimo AA: 4.5 texto normal · 3.0 texto grande/UI. `decorative` y bordes son no-texto (sin requisito, sólo informativo).\n\n| Texto / primer plano | Fondo | Claro | Oscuro | Requisito | Estado |\n|---|---|---|---|---|---|\n";
let fails = 0;
for (const [fg, bg, req = 4.5] of PAIRS) {
  const cl = wcagContrast(sem(fg, "light"), sem(bg, "light"));
  const cd = wcagContrast(sem(fg, "dark"), sem(bg, "dark"));
  const ok = req === 0 || (cl >= req && cd >= req);
  if (!ok) fails++;
  md += `| ${fg} | ${bg} | ${cl.toFixed(2)} | ${cd.toFixed(2)} | ${req || "n/a"} | ${ok ? "✅" : "❌"} |\n`;
}
writeFileSync("tokens/contrast-report.md", md);
console.log(md);
console.log(fails ? `❌ ${fails} pares fallan` : "✅ todos los pares cumplen AA");
console.log(JSON.stringify({ cyan: brand.cyan, petrol: brand.petrol, neutral: neutralSorted }, null, 0));
