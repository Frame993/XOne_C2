import type { ReactNode } from "react";
import tokens from "../../tokens/tokens.json";
import typeRolesJson from "../../tokens/type-roles.json";

type Role = { family: string; size: string; lh: string; weight: string; tracking: string; use: string; upper?: boolean };
type Mk = { unit: string; note: string; margin: number } & Record<"display" | "title" | "heading" | "lead" | "body" | "overline", [number, number]>;
const typeRoles = typeRolesJson as unknown as { roles: Record<string, Role>; marketing: Record<string, Mk> };
const ROLE: Record<string, string> = { hero: "type-hero", title: "type-title", "title-md": "type-title-md", "title-sm": "type-title-sm", heading: "type-heading", item: "type-item", lead: "type-lead", body: "type-body", "body-sm": "type-body-sm", label: "type-label", "label-sm": "type-label-sm", overline: "type-overline", micro: "type-micro", code: "type-code" };
import { AutoSteps, CountUp, DotMatrix, GridCanvas, GridSpacer, IntegrationIllo, Marquee, OfflineIllo, PlatformsIllo, Scramble, SecurityIllo } from "../components/fx";
import { Badge, Button, Card, CardLead, CardTitle, CodeBlock, Eyebrow, Footer, Icon, Input, Logo, Navbar, SectionHeading, SectionIndex, Tabs, ThemeToggle, cn } from "../components/ui";

type Tok = { $value: string | number; $type: string; $extensions?: { "es.xone.modes"?: { dark: string } } };
const prim = tokens.primitive as unknown as Record<string, Record<string, Record<string, Tok> | Tok>>;
const colors = prim.color as Record<string, Record<string, Tok>>;
const flat: Record<string, string> = {};
for (const [g, steps] of Object.entries(colors)) for (const [s, t] of Object.entries(steps)) flat[`primitive.color.${g}.${s}`] = String(t.$value);
const resolve = (v: string) => flat[v.replace(/[{}]/g, "")] ?? v;

// contraste WCAG (sólo informativo en el styleguide; el informe oficial lo genera build-tokens)
const lum = (hex: string) => { const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const ratio = (a: string, b: string) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };

function Block({ id, title, kicker, children }: { id: string; title: string; kicker: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-line-faint py-16">
      <p className="type-overline text-fg-accent">{kicker}</p>
      <h2 className="mt-2 mb-8 text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function Swatch({ name, hex }: { name: string; hex: string }) {
  const onWhite = ratio(hex, "#ffffff");
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-line-faint bg-surface">
      <div className="h-14" style={{ background: `var(--xo-color-${name})` }} />
      <div className="px-2 py-1.5 font-mono text-2xs leading-4">
        <div className="text-fg">{name.split("-").pop()}</div>
        <div className="text-fg-muted">{hex}</div>
        <div className="text-fg-muted">{onWhite.toFixed(1)}:1</div>
      </div>
    </div>
  );
}

const sem = (tokens.semantic as unknown as { color: Record<string, Record<string, Tok>> }).color;
const typeScale = Object.keys((prim.font as Record<string, Record<string, Tok>>).size);
const space = prim.space as Record<string, Tok>;
const radius = prim.radius as Record<string, Tok>;
const durations = prim.duration as Record<string, Tok>;
const easings = prim.easing as Record<string, Tok>;
const TXT: Record<string, string> = { "2xs": "text-2xs", xs: "text-xs", sm: "type-body-sm", md: "text-md", base: "text-base", lg: "text-lg", xl: "text-xl", "2xl": "text-2xl", "3xl": "text-3xl", "4xl": "text-4xl" };
const shadows = ["xs", "card", "float", "accent", "inset"];

function ComponentsGallery() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="mb-4 type-overline text-fg-muted">Button · variantes × tamaños × estados</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost</Button><Button variant="outline">Outline</Button><Button variant="link" iconRight="chevron">Link</Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button><Button size="md">Medium</Button><Button size="lg" iconRight="arrow">Large</Button>
          <Button loading>Cargando</Button><Button disabled>Deshabilitado</Button><Button iconLeft="mail" variant="outline">Con icono</Button>
        </div>
      </div>
      <div>
        <h3 className="mb-4 type-overline text-fg-muted">Badge</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Neutral</Badge><Badge variant="brand" dot>Brand</Badge><Badge variant="success" dot>Operativo</Badge><Badge variant="warning">Aviso</Badge><Badge variant="danger">Error</Badge><Badge variant="mono">ENS · ISO 27001</Badge><Eyebrow>Eyebrow</Eyebrow>
        </div>
      </div>
      <div>
        <h3 className="mb-4 type-overline text-fg-muted">Card</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card><CardTitle>Default</CardTitle><p className="mt-2 text-md text-fg-muted">Borde sutil, sin sombra.</p></Card>
          <Card variant="raised"><CardTitle>Raised</CardTitle><p className="mt-2 text-md text-fg-muted">Sombra multicapa.</p></Card>
          <Card variant="interactive" tabIndex={0}><CardTitle>Interactive</CardTitle><p className="mt-2 text-md text-fg-muted">Hover / focus: eleva.</p></Card>
          <Card variant="highlight"><CardLead lead="Highlight.">Tinte de acento para destacar.</CardLead></Card>
        </div>
      </div>
      <div>
        <h3 className="mb-4 type-overline text-fg-muted">Input · estados</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Input label="Default" placeholder="tu@empresa.com" icon="mail" />
          <Input label="Con ayuda" placeholder="Nombre" hint="Texto de ayuda" />
          <Input label="Error" defaultValue="correo@" error="Introduce un email válido" />
          <Input label="Deshabilitado" placeholder="No editable" disabled />
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 type-overline text-fg-muted">Tabs · pill</h3>
          <Tabs label="Ejemplo pill" items={[{ id: "a", label: "Android", content: <p className="text-fg-secondary">Panel Android</p> }, { id: "b", label: "iOS", content: <p className="text-fg-secondary">Panel iOS</p> }, { id: "c", label: "Web / PWA", content: <p className="text-fg-secondary">Panel Web</p> }]} />
          <h3 className="mt-8 mb-4 type-overline text-fg-muted">Tabs · underline</h3>
          <Tabs variant="underline" label="Ejemplo underline" items={[{ id: "a", label: "Diseño", content: <p className="text-fg-secondary">Panel Diseño</p> }, { id: "b", label: "Análisis", content: <p className="text-fg-secondary">Panel Análisis</p> }, { id: "c", label: "Desarrollo", content: <p className="text-fg-secondary">Panel Desarrollo</p> }]} />
        </div>
        <div>
          <h3 className="mb-4 type-overline text-fg-muted">CodeBlock</h3>
          <CodeBlock title="ejemplo" language="ts" code={'// Demostración del componente (no es código de XOne)\nimport { Button } from "@/components/ui";\n\nexport const cta = <Button size="lg">Contacto</Button>;'} />
        </div>
      </div>
    </div>
  );
}

export function Styleguide() {
  const nav = [["color", "Color"], ["semantic", "Semánticos"], ["type", "Tipografía"], ["space", "Espaciado"], ["radius", "Radios y sombras"], ["motion", "Motion"], ["logo", "Logo"], ["components", "Componentes"], ["fx", "Motion y rejillas"], ["themes", "Claro / oscuro"], ["layout", "Navbar y footer"]];
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line-faint bg-bg/90 backdrop-blur-md">
        <div className="xo-container flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3"><Logo /><Badge variant="mono">Design System v1</Badge></div>
          <div className="flex items-center gap-2"><Button href="/" variant="ghost" size="sm">Ver homepage</Button><ThemeToggle /></div>
        </div>
      </header>
      <div className="xo-container grid gap-10 lg:grid-cols-[200px_1fr]">
        <nav aria-label="Secciones" className="top-20 hidden self-start py-16 lg:sticky lg:block">
          <ul className="flex flex-col gap-1">{nav.map(([id, l]) => <li key={id}><a href={`#${id}`} className="block rounded-sm px-2 py-1 text-md text-fg-secondary hover:bg-hover hover:text-fg">{l}</a></li>)}</ul>
        </nav>
        <main className="min-w-0">
          <div className="border-b border-line-faint py-16"><SectionHeading align="left" as="h1" eyebrow="Styleguide" title="XONE" accent="Design System" subtitle="Tokens y componentes renderizados desde tokens.json / tokens.css. Cambia el tema arriba a la derecha." /></div>

          <Block id="color" kicker="Primitives" title="Escalas de color 50–950">
            {Object.entries(colors).map(([g, steps]) => (
              <div key={g} className="mb-6">
                <h3 className="mb-2 type-overline text-fg-muted">{g}{g === "cyan" && " · logo #00AED9 = 500"}{g === "petrol" && " · logo #155D82 = 700"}{g === "neutral" && " · 900 = #18293E (xone.es)"}</h3>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(64px,1fr))] gap-2">
                  {Object.entries(steps).map(([s, t]) => <Swatch key={s} name={`${g}-${s}`} hex={String(t.$value)} />)}
                </div>
              </div>
            ))}
          </Block>

          <Block id="semantic" kicker="Semantic" title="Tokens semánticos (claro / oscuro)">
            <div className="overflow-x-auto rounded-lg border border-line-faint bg-surface">
              <table className="w-full text-left text-md">
                <thead className="bg-surface-sunken type-overline text-fg-muted"><tr><th className="p-3">Token</th><th className="p-3">CSS</th><th className="p-3">Claro</th><th className="p-3">Oscuro</th></tr></thead>
                <tbody>
                  {Object.entries(sem).flatMap(([g, items]) => Object.entries(items).map(([n, t]) => {
                    const light = resolve(String(t.$value)); const dark = resolve(t.$extensions?.["es.xone.modes"]?.dark ?? "");
                    return (
                      <tr key={`${g}.${n}`} className="border-t border-line-faint">
                        <td className="p-3 font-mono text-xs">{g}.{n}</td>
                        <td className="p-3 font-mono text-xs text-fg-muted">--xo-color-{g}-{n}</td>
                        <td className="p-3"><span className="inline-flex items-center gap-2 font-mono text-xs"><i className="size-4 rounded-xs border border-line" style={{ background: light }} />{String(t.$value).replace(/[{}]|primitive\.color\./g, "")}</span></td>
                        <td className="p-3"><span className="inline-flex items-center gap-2 font-mono text-xs"><i className="size-4 rounded-xs border border-line" style={{ background: dark }} />{(t.$extensions?.["es.xone.modes"]?.dark ?? "").replace(/[{}]|primitive\.color\./g, "")}</span></td>
                      </tr>
                    );
                  }))}
                </tbody>
              </table>
            </div>
          </Block>

          <Block id="type" kicker="Typography" title="Roles tipográficos · Plus Jakarta Sans + Geist Mono">
            <p className="mb-6 max-w-prose type-body text-fg-secondary">Usa siempre un rol (<code className="type-code">type-*</code>), nunca tamaños o pesos sueltos. 3 pesos: 400 lectura · 500 interfaz · 600 titulares y énfasis.</p>
            <div className="flex flex-col divide-y divide-line-faint rounded-lg border border-line-faint bg-surface">
              {Object.entries(typeRoles.roles).map(([k, r]) => (
                <div key={k} className="grid gap-2 p-5 md:grid-cols-[200px_1fr] md:items-baseline md:gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="type-overline text-fg-accent">type-{k}</span>
                    <span className="font-mono text-xs text-fg-muted">{String((prim.font as Record<string, Record<string, Tok>>).size[r.size].$value)} / {String((prim.font as Record<string, Record<string, Tok>>).lineHeight[r.lh].$value)} · {String((prim.font as Record<string, Record<string, Tok>>).weight[r.weight].$value)}</span>
                    <span className="type-body-sm text-fg-muted">{r.use}</span>
                  </div>
                  <span className={cn("text-fg", ROLE[k])}>{k === "code" ? "const orden = crearOrden(cliente)" : k.startsWith("title") || k === "hero" ? "Acelera el desarrollo" : "Acelera el desarrollo de aplicaciones empresariales"}</span>
                </div>
              ))}
            </div>
            <h3 className="mt-12 mb-4 type-heading text-fg">Escalas para marketing</h3>
            <p className="mb-4 max-w-prose type-body-sm text-fg-muted">Mismos roles y pesos, tamaños por formato (tamaño / interlineado). Fuente: <code className="type-code">tokens/type-roles.json</code> y <code className="type-code">tokens.json → marketing</code>.</p>
            <div className="overflow-x-auto rounded-lg border border-line-faint bg-surface">
              <table className="w-full text-left type-body-sm">
                <thead className="bg-surface-sunken type-overline text-fg-muted"><tr>{["Formato", "Display", "Title", "Heading", "Lead", "Body", "Overline", "Margen"].map((h) => <th key={h} className="p-3">{h}</th>)}</tr></thead>
                <tbody>
                  {Object.entries(typeRoles.marketing).map(([k, m]) => (
                    <tr key={k} className="border-t border-line-faint">
                      <td className="p-3"><span className="type-label text-fg">{k}</span><br /><span className="text-fg-muted">{m.note}</span></td>
                      {(["display", "title", "heading", "lead", "body", "overline"] as const).map((r) => <td key={r} className="p-3 font-mono text-xs">{m[r][0]}/{m[r][1]}{m.unit}</td>)}
                      <td className="p-3 font-mono text-xs">{m.margin}{m.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>

          <Block id="space" kicker="Spacing" title="Escala de espaciado (base 2/4 px)">
            <div className="flex flex-col gap-2">
              {Object.entries(space).sort((a, b) => parseFloat(a[0]) - parseFloat(b[0])).map(([k, t]) => (
                <div key={k} className="flex items-center gap-4 font-mono text-xs"><span className="w-16 text-fg-muted">space.{k}</span><span className="w-12">{String(t.$value)}</span><span className="h-3 rounded-xs bg-accent" style={{ width: `var(--xo-space-${k.replace(".", "-")})` }} /></div>
              ))}
              <p className="mt-4 text-md text-fg-muted">Contenedor: 1112px · gutter 16px · nav 64px · breakpoints 390 / 576 / 768 / 996 / 1200.</p>
            </div>
          </Block>

          <Block id="radius" kicker="Radius · Shadow" title="Radios y elevación">
            <div className="flex flex-wrap gap-4">
              {Object.entries(radius).map(([k, t]) => (
                <div key={k} className="flex flex-col items-center gap-2"><div className="size-16 border border-accent-border bg-accent-subtle" style={{ borderRadius: `var(--xo-radius-${k})` }} /><span className="font-mono text-xs text-fg-muted">{k} · {String(t.$value)}</span></div>
              ))}
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {shadows.map((s) => <div key={s} className="flex h-24 items-end rounded-lg bg-surface p-3 font-mono text-xs text-fg-muted" style={{ boxShadow: `var(--xo-shadow-${s})` }}>shadow.{s}</div>)}
            </div>
          </Block>

          <Block id="motion" kicker="Motion" title="Duraciones y curvas">
            <div className="grid gap-4 md:grid-cols-2">
              <Card><ul className="flex flex-col gap-2 font-mono text-xs">{Object.entries(durations).map(([k, t]) => <li key={k} className="flex justify-between"><span className="text-fg-muted">duration.{k}</span><span>{String(t.$value)}</span></li>)}</ul></Card>
              <Card><ul className="flex flex-col gap-2 font-mono text-xs">{Object.entries(easings).map(([k, t]) => <li key={k} className="flex justify-between gap-4"><span className="text-fg-muted">easing.{k}</span><span>{String(t.$value)}</span></li>)}</ul></Card>
            </div>
            <p className="mt-4 text-md text-fg-muted">Hover de color 200ms · scale de botón 100ms · entrada fade-in-up 500ms easing.out · se anulan con prefers-reduced-motion.</p>
          </Block>

          <Block id="logo" kicker="Brand" title="Uso del logo">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col gap-3"><div data-theme="light" className="flex h-36 items-center justify-center rounded-lg border border-line-faint bg-bg"><div className="outline-1 outline-dashed outline-offset-[12px] outline-accent-border"><Logo className="h-8" /></div></div><p className="text-md text-fg-muted">Sobre claro: cian + petróleo. Línea discontinua = área de seguridad (½ altura del logo).</p></div>
              <div className="flex flex-col gap-3"><div data-theme="dark" className="flex h-36 items-center justify-center rounded-lg bg-bg"><Logo className="h-8" /></div><p className="text-md text-fg-muted">Sobre oscuro: cian + blanco (wordmark en <code className="font-mono text-xs">brand.wordmark</code>).</p></div>
              <div className="flex flex-col gap-3"><div className="flex h-36 items-center justify-center gap-6 rounded-lg border border-line-faint bg-surface"><Logo className="h-6 min-w-24" /><svg viewBox="15.78 0 20.1 23.67" className="h-6" aria-label="Símbolo XOne"><polygon fill="var(--xo-color-brand-symbol)" points="22.53 0 15.78 0 22.48 11.84 15.78 23.67 22.53 23.67 29.18 11.84 22.53 0" /><polygon fill="var(--xo-color-brand-wordmark)" points="35.88 0 29.13 0 26.97 3.83 30.33 9.8 35.88 0" /><polygon fill="var(--xo-color-brand-wordmark)" points="26.97 19.84 29.13 23.67 35.88 23.67 30.33 13.87 26.97 19.84" /></svg></div><p className="text-md text-fg-muted">Tamaño mínimo 96px de ancho (24px de alto). Por debajo, usar sólo el símbolo X (mín. 16px).</p></div>
            </div>
            <ul className="mt-6 grid gap-2 text-md text-fg-secondary md:grid-cols-2">
              <li className="flex gap-2"><Icon name="check" className="mt-1 text-success" />Usar los SVG de <code className="font-mono text-xs">public/brand/</code>.</li>
              <li className="flex gap-2"><Icon name="close" className="mt-1 text-danger" />No recolorear el chevrón cian ni aplicar sombras o degradados.</li>
              <li className="flex gap-2"><Icon name="check" className="mt-1 text-success" />Versión monocroma blanca sólo sobre fotos o fondos de marca.</li>
              <li className="flex gap-2"><Icon name="close" className="mt-1 text-danger" />No separar "BY" del wordmark ni deformar proporciones.</li>
            </ul>
          </Block>

          <Block id="components" kicker="Components" title="Componentes base"><ComponentsGallery /></Block>

          <Block id="fx" kicker="FX" title="Rejillas, animaciones e ilustraciones">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-3 type-overline text-fg-muted">GridCanvas · contenida, filas completas, bloque central fusionado</h3>
                <div className="relative flex h-[304px] justify-center overflow-hidden rounded-lg border border-line-faint"><div className="relative h-full"><GridCanvas cols={7} centerCols={3} className="h-full" /></div></div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {(["blob", "field", "fountain"] as const).map((m) => (
                  <div key={m}><h3 className="mb-3 type-overline text-fg-muted">DotMatrix · {m}</h3><div className="relative h-48 overflow-hidden rounded-lg border border-line-faint bg-surface"><DotMatrix mode={m} className="inset-2" colorVar={m === "fountain" ? "--xo-color-fx-glyph" : undefined} cellW={m === "fountain" ? 7 : 9} cellH={m === "fountain" ? 7 : 12} /></div></div>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"><PlatformsIllo /><SecurityIllo /><OfflineIllo /><IntegrationIllo /></div>
              <div className="overflow-hidden rounded-lg border border-line-faint"><AutoSteps steps={[{ title: "Diseño", text: "Paso activo con barra de progreso." }, { title: "Análisis", text: "Avanza solo cada 4 s." }, { title: "Desarrollo", text: "Hover o foco lo fija." }, { title: "Documentación", text: "Se para con reduced-motion." }, { title: "Soporte", text: "Teclado accesible." }]} /></div>
              <div className="flex flex-wrap items-center gap-8">
                <span className="flex items-center gap-1.5 font-mono text-xs text-fg-muted"><i className="size-1 bg-accent" /><Scramble words={["ANDROID", "IOS", "WINDOWS", "WEB / PWA"]} className="text-fg-accent" /></span>
                <span className="text-3xl font-semibold tracking-tight"><CountUp value="70 %" /></span>
                <span className="text-3xl font-semibold tracking-tight"><CountUp value="+20" /></span>
              </div>
              <div className="overflow-hidden rounded-lg border border-line-faint"><Marquee label="Ejemplo marquee" duration={30}>{["Iberdrola", "Navantia", "Sacyr", "Loomis", "Orenes"].map((n) => <div key={n} className="flex h-16 w-40 shrink-0 items-center justify-center border-r border-line-faint text-md text-fg-muted">{n}</div>)}</Marquee></div>
              <div className="overflow-hidden rounded-lg border border-line-faint"><GridSpacer /></div>
              <p className="text-md text-fg-muted">Todo usa tokens (<code className="font-mono text-xs">fx.cell</code>, <code className="font-mono text-xs">fx.glyph</code>, <code className="font-mono text-xs">fx.matrix</code>, <code className="font-mono text-xs">easing.spring</code>, <code className="font-mono text-xs">duration.orbit</code>) y se detiene con <code className="font-mono text-xs">prefers-reduced-motion</code>.</p>
            </div>
          </Block>

          <Block id="themes" kicker="Themes" title="Mismo componente, dos temas">
            <div className="grid gap-4 lg:grid-cols-2">
              {(["light", "dark"] as const).map((t) => (
                <div key={t} data-theme={t} className="flex flex-col gap-4 rounded-lg border border-line-faint bg-bg p-6 text-fg">
                  <Badge variant="mono">{t}</Badge>
                  <SectionHeading align="left" title="Una plataforma," accent="experiencias ilimitadas" />
                  <div className="flex gap-2"><Button>Contacto</Button><Button variant="ghost">Saber más</Button></div>
                  <Input label="Email" placeholder="tu@empresa.com" />
                </div>
              ))}
            </div>
          </Block>

          <Block id="layout" kicker="Layout" title="Navbar, índice de sección y footer">
            <div className="overflow-hidden rounded-lg border border-line-faint">
              <Navbar links={[{ label: "Plataforma", href: "#" }, { label: "Productos", href: "#p" }, { label: "Soluciones", href: "#s" }]} cta={{ label: "Contacto", href: "#c" }} secondary={{ label: "EN", href: "#en" }} />
              <SectionIndex n={1} total={7} label="Por qué XOne" />
              <Footer statement={{ title: "La plataforma donde los agentes", accent: "hacen avanzar tu operación." }} cta={{ label: "Solicitar una demo", href: "#0" }} columns={[{ title: "Soluciones", links: [{ label: "ASDD", href: "#1" }] }, { title: "Empresa", links: [{ label: "Sobre nosotros", href: "#2" }] }]} legal={[<span key="c">© 2026 Computer Global Software, S.L.</span>]} />
            </div>
          </Block>
        </main>
      </div>
    </div>
  );
}
