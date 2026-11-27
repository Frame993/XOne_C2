// Auditoría de la web con Playwright: recorre todas las páginas enlazadas desde / y /en/ y lista los problemas.
// Uso:  npm i -D playwright && npx playwright install chromium   (una vez)
//       node scripts/audit.mjs [http://localhost:5173]
// Comprueba: errores de consola y JS, peticiones fallidas, imágenes rotas, enlaces que acaban en la 404,
// desbordes horizontales a 390 px, nº de h1, imágenes sin alt, botones/enlaces sin nombre, IDs duplicados,
// meta description e idioma del documento.
import { chromium } from "playwright";

const BASE = (process.argv[2] || "http://localhost:5173").replace(/\/$/, "");
const browser = await chromium.launch();
const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });

const seen = new Set();
const queue = ["/", "/en/"];
const problems = [];
const add = (path, kind, detail) => problems.push({ path, kind, detail });

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);
  const page = await desktop.newPage();
  page.on("console", (m) => { if (m.type() === "error") add(path, "consola", m.args().map(String).join(" ").slice(0, 220)); });
  page.on("pageerror", (e) => add(path, "javascript", e.message.slice(0, 220)));
  page.on("response", (r) => { if (r.status() >= 400) add(path, `http ${r.status()}`, r.url()); });
  try {
    await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 30000 });
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 800) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 30)); } });
    const info = await page.evaluate(() => {
      const name = (e) => (e.getAttribute("aria-label") || e.textContent || e.getAttribute("title") || [...e.querySelectorAll("img[alt]")].map((i) => i.alt).join("")).trim();
      const ids = {};
      document.querySelectorAll("[id]").forEach((e) => (ids[e.id] = (ids[e.id] || 0) + 1));
      return {
        is404: /no existe|does not exist/i.test(document.querySelector("h1")?.textContent || ""),
        links: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
        h1: document.querySelectorAll("h1").length,
        badImg: [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && i.src).map((i) => i.src),
        noAlt: [...document.images].filter((i) => !i.hasAttribute("alt")).map((i) => i.src),
        noName: [...document.querySelectorAll("button, a[href]")].filter((e) => !name(e)).map((e) => e.outerHTML.slice(0, 100)),
        dupIds: Object.entries(ids).filter(([, n]) => n > 1).map(([k]) => k),
        desc: !!document.querySelector('meta[name="description"]')?.content,
        lang: document.documentElement.lang,
      };
    });
    if (info.is404) add(path, "404", "la página no existe");
    if (info.h1 !== 1) add(path, "h1", `${info.h1} h1`);
    info.badImg.forEach((s) => add(path, "imagen rota", s));
    info.noAlt.forEach((s) => add(path, "imagen sin alt", s));
    info.noName.forEach((s) => add(path, "sin nombre accesible", s));
    info.dupIds.forEach((s) => add(path, "id duplicado", s));
    if (!info.desc) add(path, "seo", "sin meta description");
    if (info.lang !== (path.startsWith("/en/") || path === "/en/" ? "en" : "es")) add(path, "idioma", `lang="${info.lang}"`);
    for (const href of info.links) {
      if (!href || /^(mailto:|tel:|#)/.test(href)) continue;
      let u;
      try { u = new URL(href, BASE + path); } catch { continue; }
      if (u.origin !== new URL(BASE).origin || /\.(pdf|png|jpe?g|svg|webp)$/i.test(u.pathname)) continue;
      if (!seen.has(u.pathname) && !queue.includes(u.pathname)) queue.push(u.pathname);
    }
  } catch (e) {
    add(path, "navegación", e.message.slice(0, 160));
  }
  await page.close();
}

for (const path of seen) {
  const page = await mobile.newPage();
  try {
    await page.goto(BASE + path, { waitUntil: "domcontentloaded", timeout: 20000 });
    await page.waitForTimeout(600);
    const o = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, w: document.documentElement.clientWidth }));
    if (o.sw > o.w) add(path, "desborde móvil", `${o.sw}px > ${o.w}px`);
  } catch {}
  await page.close();
}

await browser.close();
console.log(`${seen.size} páginas revisadas · ${problems.length} problemas`);
for (const p of problems) console.log(`- [${p.kind}] ${p.path} · ${p.detail}`);
process.exit(problems.length ? 1 : 0);
