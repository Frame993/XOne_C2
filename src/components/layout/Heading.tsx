import { SectionHeading } from "../ui";
import { DotMatrix, Reveal } from "../fx";

/** Cabecera de sección: titular centrado con arte de caracteres a los lados (masa a la izquierda, onda a la derecha). */
export function Heading(props: Parameters<typeof SectionHeading>[0] & { art?: "left" | "right" | "both" }) {
  const { art = "both", ...rest } = props;
  return (
    <div className="xo-curvy overflow-hidden border-b border-line-faint px-5 py-12 md:py-[88px] lg:py-[143px]">
      {(art === "left" || art === "both") && <DotMatrix mode="blob" className="top-1/2 left-0 hidden h-60 w-64 -translate-y-1/2 lg:block" />}
      {(art === "right" || art === "both") && <DotMatrix mode="field" className="top-0 right-0 hidden h-full w-[30%] lg:block" />}
      <Reveal className="relative"><SectionHeading {...rest} /></Reveal>
    </div>
  );
}

