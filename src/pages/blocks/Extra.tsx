import { useState, type FormEvent } from "react";
import { Button, Icon, IconTile, ImgOrPlaceholder, Prose, Section, cn, tocOf } from "../../components/ui";
import { FullLine, Reveal } from "../../components/fx";
import * as C from "../../content/xone";
import type { Block } from "../../content/pages/types";
import { t } from "../../i18n";

/** Muro de logotipos en celdas (clientes, socios, partners, financiación). */
export function Logos({ b }: { b: Extract<Block, { type: "logos" }> }) {
  const cols = b.cols ?? 6;
  const fill = (n: number) => (n - (b.items.length % n)) % n;
  return (
    <ul className={cn("xo-cells grid-cols-2 sm:grid-cols-3", cols === 4 && "lg:grid-cols-4", cols === 6 && "lg:grid-cols-6")}>
      {b.items.map((l, i) => (
        <Reveal as="li" key={l.name} delay={i % 3} className="group relative flex h-32 items-center justify-center px-6">
          <ImgOrPlaceholder src={l.src} alt={l.name} note={l.name}
            className={cn("max-h-12 w-auto max-w-[70%] object-contain transition-[opacity,filter] duration-(--xo-duration-base)", b.color ? "" : "opacity-70 grayscale group-hover:opacity-100 dark:invert")} />
          {!b.color && <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--xo-duration-slow) ease-(--xo-easing-out) group-hover:scale-x-100" />}
        </Reveal>
      ))}
      {Array.from({ length: fill(3) }, (_, k) => <li key={`m-${k}`} aria-hidden className={cols === 3 ? "hidden sm:block" : "hidden sm:block lg:hidden"} />)}
      {cols !== 3 && Array.from({ length: fill(cols) }, (_, k) => <li key={`l-${k}`} aria-hidden className="hidden lg:block" />)}
      {b.items.length % 2 === 1 && <li aria-hidden className="sm:hidden" />}
    </ul>
  );
}

/** Opiniones de clientes: titular + cita completa + firma. */
export function Testimonials({ b }: { b: Extract<Block, { type: "testimonials" }> }) {
  return (
    <ul className="xo-cells md:grid-cols-2">
      {b.items.map((q, i) => (
        <Reveal as="li" key={q.company} delay={i % 2} className={cn("flex flex-col gap-6 p-7 md:p-10", b.items.length % 2 === 1 && i === b.items.length - 1 && "md:col-span-2")}>
          <p className="text-balance text-fg type-heading">{q.headline}</p>
          <blockquote className="type-body text-fg-secondary">{q.quote}</blockquote>
          <p className="mt-auto flex items-center gap-3">
            <span aria-hidden className="inline-flex size-9 items-center justify-center rounded-pill bg-accent-subtle font-semibold text-accent-subtle-fg">{q.company[0]}</span>
            <span className="type-body-sm"><span className="block font-semibold text-fg">{q.company}</span>{q.author && <span className="text-fg-muted">{q.author}</span>}</span>
          </p>
        </Reveal>
      ))}
    </ul>
  );
}

/** Documento largo (textos legales, políticas): índice fijo a la izquierda y texto a la derecha. */
export function Doc({ b }: { b: Extract<Block, { type: "doc" }> }) {
  const toc = tocOf(b.md);
  return (
    <div className="relative">
      <FullLine position="bottom" />
      <Section className={cn("grid", toc.length > 1 && "lg:grid-cols-[280px_minmax(0,1fr)]")}>
        {toc.length > 1 && (
          <nav aria-label={t("Índice del documento", "Document contents")} className="xo-curvy hidden border-r border-line-faint lg:block">
            <ol className="sticky top-24 flex flex-col gap-1 p-7">
              <li className="mb-2 type-overline text-fg-muted">{t("En esta página", "On this page")}</li>
              {toc.map((h) => <li key={h.id}><a href={`#${h.id}`} className="block rounded-sm px-2 py-1.5 type-body-sm text-fg-secondary transition-colors hover:bg-hover hover:text-fg">{h.label}</a></li>)}
            </ol>
          </nav>
        )}
        <div className="xo-curvy flex flex-col gap-6 p-7 md:p-10 lg:py-14">
          {b.note && <p className="border-l-2 border-accent pl-4 type-body-sm text-fg-secondary italic">{b.note}</p>}
          <Prose md={b.md} className="max-w-3xl" />
        </div>
      </Section>
    </div>
  );
}

/** Contacto: canales directos + formulario que sólo prepara un correo (la web no guarda ni envía datos). */
export function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-(--xo-input-radius) border border-(--xo-input-border) bg-(--xo-input-bg) px-(--xo-input-padding-x) text-[length:var(--xo-font-size-base)] text-(--xo-input-fg) outline-none transition-colors hover:border-(--xo-input-border-hover) focus:border-(--xo-input-border-focus) focus:ring-3 focus:ring-accent-subtle";
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const subject = get("asunto") || t("Contacto desde xone.es", "Contact from xone.es");
    const body = [get("mensaje"), "", `${t("Nombre", "Name")}: ${get("nombre")}`, get("empresa") && `${t("Empresa", "Company")}: ${get("empresa")}`, get("telefono") && `${t("Teléfono", "Phone")}: ${get("telefono")}`].filter((x) => x !== "").join("\n");
    window.location.href = `mailto:${C.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const channels = [
    { label: "Email", value: C.contact.email, href: `mailto:${C.contact.email}`, icon: "mail" as const },
    { label: t("Teléfono", "Phone"), value: C.contact.phone, href: `tel:${C.contact.phone.replace(/\s/g, "")}`, icon: "phone" as const },
  ];
  return (
    <div className="relative">
      <FullLine position="bottom" />
      <Section className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div className="xo-curvy flex flex-col border-b border-line-faint lg:border-r lg:border-b-0">
          {channels.map((c) => (
            <a key={c.label} href={c.href} className="group flex items-center gap-4 border-b border-line-faint p-7 transition-colors hover:bg-surface md:px-10">
              <IconTile icon={c.icon} size="md" />
              <span className="flex flex-col"><span className="type-overline text-fg-muted">{c.label}</span><span className="type-item text-fg group-hover:text-fg-accent">{c.value}</span></span>
            </a>
          ))}
          <div className="flex flex-col gap-3 p-7 md:p-10">
            <span className="type-overline text-fg-muted">{t("Oficina central", "Head office")}</span>
            <address className="type-body text-fg not-italic">{C.contact.address.map((l) => <span key={l} className="block">{l}</span>)}</address>
            <p className="type-body-sm text-fg-muted">{t("Presentes en", "Present in")} {C.contact.cities.join(" · ")}</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="xo-curvy flex flex-col gap-5 p-7 md:p-10" aria-describedby="contacto-nota">
          <div className="flex flex-col gap-2">
            <h2 className="text-fg type-heading">{t("Escríbenos", "Write to us")}</h2>
            <p id="contacto-nota" className="type-body-sm text-fg-muted">{t("Al pulsar «Preparar correo» se abrirá tu programa de correo con el mensaje listo para enviar a comercial@xone.es. Esta web no guarda ni envía ningún dato.", "When you click “Prepare email”, your email program will open with the message ready to send to comercial@xone.es. This website does not store or send any data.")}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { name: "nombre", label: t("Nombre", "Name"), req: true, type: "text", ac: "name" },
              { name: "empresa", label: t("Empresa", "Company"), type: "text", ac: "organization" },
              { name: "telefono", label: t("Teléfono", "Phone"), type: "tel", ac: "tel" },
              { name: "asunto", label: t("Asunto", "Subject"), type: "text", ac: "off" },
            ].map((f) => (
              <label key={f.name} className="flex flex-col gap-1.5">
                <span className="type-label text-fg">{f.label}{f.req && <span aria-hidden className="text-fg-accent"> *</span>}</span>
                <input name={f.name} type={f.type} required={f.req} autoComplete={f.ac} className={cn(field, "h-(--xo-input-height)")} />
              </label>
            ))}
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="type-label text-fg">{t("Mensaje", "Message")}<span aria-hidden className="text-fg-accent"> *</span></span>
            <textarea name="mensaje" required rows={6} className={cn(field, "py-3")} />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" size="lg" iconRight="mail">{t("Preparar correo", "Prepare email")}</Button>
            {sent && <p role="status" className="type-body-sm text-fg-secondary">{t("Si no se ha abierto tu correo, escríbenos a comercial@xone.es.", "If your email program did not open, write to us at comercial@xone.es.")}</p>}
          </div>
        </form>
      </Section>
    </div>
  );
}
