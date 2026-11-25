import { Fragment, type ReactNode } from "react";
import { cn } from "./utils";
import { link } from "../../i18n";

/**
 * Markdown mínimo para textos legales y documentos largos (src/content/docs/*.md):
 * `##`/`###` títulos, párrafos, listas `-` (un nivel de anidado con dos espacios), tablas `| a | b |`
 * (la primera fila es la cabecera), imágenes `![alt](src)`, `**negrita**`, `_línea en cursiva_`.
 * `[texto](url)` enlaces (las rutas internas `/slug/` pasan por `link()`), `> cita`. Emails y dominios se enlazan solos.
 * Las rutas `/media/...` apuntan a xone.es. Sin HTML: el texto se pinta siempre como texto.
 */
export const slugify = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Índice por `##`; si sólo hay uno (p. ej. una política con secciones `###`), por `###`. */
export function tocOf(md: string) {
  const lines = md.split("\n");
  const h2 = lines.filter((l) => l.startsWith("## "));
  const pick = h2.length > 1 ? h2 : lines.filter((l) => l.startsWith("### "));
  return pick.map((l) => { const label = l.replace(/^#+ /, ""); return { id: slugify(label), label }; });
}

const media = (src: string) => (src.startsWith("/media/") ? `https://xone.es${src}` : src);
/** Destino de un enlace: externo tal cual, `/media/` a xone.es, rutas internas por `link()` (idioma actual). */
const target = (href: string) => (/^(https?:|mailto:|tel:)/.test(href) ? href : href.startsWith("/media/") ? media(href) : link(href.replace(/^\/+|\/+$/g, "")));

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*|([\w.+-]+@[\w-]+\.[\w.]+)|(www\.[\w-]+\.[a-z.]+)/g;
  let last = 0, m: RegExpExecArray | null, k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = target(m[2]);
      const ext = /^https?:/.test(href);
      out.push(<a key={k++} href={href} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})} className="text-fg-accent underline underline-offset-2 hover:decoration-2">{m[1]}</a>);
    } else if (m[3]) out.push(<strong key={k++} className="font-semibold text-fg">{m[3]}</strong>);
    else if (m[4]) out.push(<a key={k++} href={`mailto:${m[4]}`} className="text-fg-accent underline underline-offset-2 hover:decoration-2">{m[4]}</a>);
    else if (m[5]) out.push(<a key={k++} href={`https://${m[5]}`} target="_blank" rel="noreferrer" className="text-fg-accent underline underline-offset-2 hover:decoration-2">{m[5]}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

type Node =
  | { t: "h2" | "h3" | "p" | "em" | "quote"; text: string }
  | { t: "img"; alt: string; src: string }
  | { t: "ul"; items: { text: string; sub: string[] }[] }
  | { t: "table"; rows: string[][] };

function parse(md: string): Node[] {
  const nodes: Node[] = [];
  for (const raw of md.split("\n")) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;
    const prev = nodes[nodes.length - 1];
    if (line.startsWith("### ")) nodes.push({ t: "h3", text: line.slice(4) });
    else if (line.startsWith("## ")) nodes.push({ t: "h2", text: line.slice(3) });
    else if (/^\s{2,}- /.test(line) && prev?.t === "ul") prev.items[prev.items.length - 1].sub.push(line.trim().slice(2));
    else if (line.startsWith("- ")) {
      if (prev?.t === "ul") prev.items.push({ text: line.slice(2), sub: [] });
      else nodes.push({ t: "ul", items: [{ text: line.slice(2), sub: [] }] });
    } else if (line.startsWith("|")) {
      const cells = line.split("|").slice(1, -1).map((c) => c.trim());
      if (prev?.t === "table") prev.rows.push(cells);
      else nodes.push({ t: "table", rows: [cells] });
    } else if (/^!\[(.*)\]\((.+)\)$/.test(line)) {
      const [, alt, src] = line.match(/^!\[(.*)\]\((.+)\)$/)!;
      nodes.push({ t: "img", alt, src });
    } else if (/^_.+_$/.test(line)) nodes.push({ t: "em", text: line.slice(1, -1) });
    else nodes.push({ t: "p", text: line });
  }
  return nodes;
}

export function Prose({ md, className }: { md: string; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4 type-body text-fg-secondary", className)}>
      {parse(md).map((n, i) => {
        switch (n.t) {
          case "h2": return <h2 key={i} id={slugify(n.text)} className="mt-6 scroll-mt-28 text-balance text-fg type-heading first:mt-0">{n.text}</h2>;
          case "h3": return <h3 key={i} id={slugify(n.text)} className="mt-3 scroll-mt-28 text-fg type-item">{n.text}</h3>;
          case "em": return <p key={i} className="type-body-sm text-fg-muted italic">{n.text}</p>;
          case "img": return <img key={i} src={media(n.src)} alt={n.alt} loading="lazy" className="h-auto w-full max-w-2xl self-start rounded-lg border border-line bg-white" />;
          case "quote": return <blockquote key={i} className="border-l-2 border-accent pl-5 text-pretty type-lead text-fg">{inline(n.text)}</blockquote>;
          case "ul": return (
            <ul key={i} className="flex flex-col gap-2">
              {n.items.map((it, k) => (
                <li key={k} className="flex flex-col gap-2 pl-4">
                  <span className="relative"><i aria-hidden className="absolute top-2.5 -left-4 size-1 bg-accent" />{inline(it.text)}</span>
                  {it.sub.length > 0 && <ul className="flex flex-col gap-1.5 border-l border-line-faint pl-4">{it.sub.map((s, j) => <li key={j} className="type-body-sm">{inline(s)}</li>)}</ul>}
                </li>
              ))}
            </ul>
          );
          case "table": {
            const [head, ...body] = n.rows;
            return (
              <div key={i} className="overflow-x-auto rounded-lg border border-line">
                <table className="w-full min-w-[520px] border-collapse text-left type-body-sm">
                  <thead className="bg-surface-sunken"><tr>{head.map((h, k) => <th key={k} scope="col" className="px-4 py-3 type-overline text-fg-muted">{h}</th>)}</tr></thead>
                  <tbody>{body.map((r, k) => <tr key={k} className="border-t border-line-faint">{r.map((c, j) => <td key={j} className={cn("px-4 py-3 align-top", j === 0 ? "font-medium text-fg" : "text-fg-secondary")}>{inline(c)}</td>)}</tr>)}</tbody>
                </table>
              </div>
            );
          }
          default: return <p key={i} className="text-pretty">{inline(n.text)}</p>;
        }
      }).map((el, i) => <Fragment key={i}>{el}</Fragment>)}
    </div>
  );
}
