import type { SVGProps } from "react";

/** Iconos propios XONE: trazo 1.5, uniones en inglete y remates rectos — eco de los chevrones angulosos del logo. */
const paths = {
  chevron: "M9 6l6 6-6 6",
  "chevron-down": "M6 9l6 6 6-6",
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M5 12.5l4.5 4.5L19 7.5",
  copy: "M9 9h10v10H9zM5 15V5h10",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  sun: "M12 4V2M12 22v-2M4 12H2M22 12h-2M6.3 6.3L4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z",
  moon: "M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5",
  shield: "M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5",
  signal: "M3 20h2v-3H3zM8 20h2v-7H8zM13 20h2V9h-2zM18 20h2V4h-2z",
  plug: "M9 3v5M15 3v5M6 8h12v3a6 6 0 01-12 0V8zM12 17v4",
  sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",
  code: "M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14",
  phone: "M7 3h10v18H7zM11 18h2",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4",
  mail: "M3 6h18v12H3zM3 6l9 7 9-7",
  pin: "M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 8a2 2 0 100 4 2 2 0 000-4z",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  doc: "M6 3h9l3 3v15H6zM9 11h6M9 15h6",
  cloud: "M7 18h10a4 4 0 00.5-8A6 6 0 006 9a4.5 4.5 0 001 9z",
  refresh: "M20 11a8 8 0 00-14.9-3M4 13a8 8 0 0014.9 3M20 4v7h-7M4 20v-7h7",
  bell: "M6 16V11a6 6 0 0112 0v5l2 2H4zM10 21h4",
  device: "M4 5h16v11H4zM8 20h8M12 16v4",
  chat: "M4 5h16v11H9l-5 4z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 16, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true" focusable="false" {...rest}>
      <path d={paths[name]} />
    </svg>
  );
}
