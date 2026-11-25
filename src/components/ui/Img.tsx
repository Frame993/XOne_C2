import { useState } from "react";
import { cn } from "./utils";
import { t } from "../../i18n";

/** Imagen remota con un hueco digno si no carga (logos y capturas servidos desde xone.es/media). */
export function ImgOrPlaceholder({ src, alt, className, note }: { src: string; alt: string; className?: string; note: string }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div {...(alt ? { role: "img", "aria-label": alt } : { "aria-hidden": true })} className={cn("xo-dot-grid flex items-center justify-center bg-surface-sunken p-6 text-center type-overline text-fg-muted", className)}>
        {t("imagen", "image")}: {note}
      </div>
    );
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}
