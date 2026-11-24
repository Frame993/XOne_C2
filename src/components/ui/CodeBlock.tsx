import { useState, type ReactNode } from "react";
import { cn } from "./utils";
import { Icon } from "./Icon";

const KEYWORDS = /\b(import|from|const|let|return|function|async|await|if|else|new|export|true|false|null)\b/;

/** Resaltado mínimo (comentarios, strings, keywords) sólo con tokens de código. */
function highlight(line: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\/\/.*$|#.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\b\w+\b)|(\s+|.)/g;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(line))) {
    const [t, comment, str, word] = m;
    if (comment) out.push(<span key={i++} className="text-(--xo-color-code-comment)">{t}</span>);
    else if (str) out.push(<span key={i++} className="text-(--xo-color-code-string)">{t}</span>);
    else if (word && KEYWORDS.test(word)) out.push(<span key={i++} className="text-(--xo-color-code-keyword)">{t}</span>);
    else out.push(t);
  }
  return out;
}

export function CodeBlock({ code, title, language, className, showLineNumbers = true, caret = false }: { code: string; title?: string; language?: string; className?: string; showLineNumbers?: boolean; caret?: boolean }) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, "").split("\n");
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch { /* sin permisos de portapapeles */ }
  };
  return (
    <figure className={cn("overflow-hidden rounded-(--xo-codeblock-radius) border border-(--xo-codeblock-border) bg-(--xo-codeblock-bg) text-(--xo-codeblock-fg) shadow-card", className)}>
      <figcaption className="flex h-10 items-center justify-between gap-3 border-b border-(--xo-codeblock-border) bg-(--xo-codeblock-header-bg) px-3">
        <span className="flex items-center gap-2 font-mono text-xs text-fg-muted">
          <span aria-hidden className="flex gap-1"><i className="size-2 rounded-pill bg-line-loud" /><i className="size-2 rounded-pill bg-line-loud" /><i className="size-2 rounded-pill bg-line-loud" /></span>
          {title}
          {language && <span className="flex items-center gap-1.5 uppercase tracking-caps"><i className="size-1 bg-accent" />.{language}</span>}
        </span>
        <button type="button" onClick={copy} className="inline-flex h-7 items-center gap-1 rounded-sm px-2 text-xs text-fg-muted hover:bg-hover hover:text-fg" aria-live="polite">
          <Icon name={copied ? "check" : "copy"} size={14} />
          {copied ? "Copiado" : "Copiar"}
        </button>
      </figcaption>
      <pre tabIndex={0} aria-label={title ? `Código: ${title}` : "Bloque de código"} className="overflow-x-auto p-4 focus-visible:outline-2 focus-visible:outline-ring type-code">
        <code>
          {lines.map((l, i) => (
            <span key={i} className="flex">
              {showLineNumbers && <span aria-hidden className="mr-4 inline-block w-5 shrink-0 select-none text-right text-(--xo-color-code-line-number)">{i + 1}</span>}
              <span className={cn("whitespace-pre", caret && i === lines.length - 1 && "xo-caret")}>{highlight(l)}</span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
