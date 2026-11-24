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
  external: "M8 16L16 8M9 8h7v7",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  headset: "M4 15v-3a8 8 0 0116 0v3M4 14h3v6H4zM17 14h3v6h-3z",
  badge: "M12 3l2.4 1.8 3 .2.9 2.9 2.2 2.1-1 2.8 1 2.8-2.2 2.1-.9 2.9-3 .2L12 21l-2.4-1.8-3-.2-.9-2.9-2.2-2.1 1-2.8-1-2.8 2.2-2.1.9-2.9 3-.2zM8.5 12l2.5 2.5 4.5-5",
  loop: "M7 8a4 4 0 100 8c3 0 7-8 10-8a4 4 0 110 8c-3 0-7-8-10-8z",
  cpu: "M7 7h10v10H7zM10 10h4v4h-4zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4",
  server: "M4 4h16v6H4zM4 14h16v6H4zM8 7h1M8 17h1",
  download: "M12 4v11M7 10l5 5 5-5M5 20h14",
  activity: "M3 12h4l3-7 4 14 3-7h4",
  lock: "M6 11h12v10H6zM9 11V8a3 3 0 016 0v3",
  briefcase: "M4 8h16v12H4zM9 8V5h6v3M4 13h16",
  map: "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14",
  users: "M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3.5 3.5 0 010 6.5M18 14.5c1.8.9 3 2.9 3 5.5",
  handshake: "M3 11l4-4 5 2 5-2 4 4M3 11l3 3M21 11l-6 6-4-3M8 15l2 2M11 13l3 3",
  "user-plus": "M10 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM4 20c0-3.3 2.7-6 6-6s6 2.7 6 6M19 8v6M16 11h6",
  award: "M12 3a6 6 0 100 12 6 6 0 000-12zM8.5 14l-1.5 7 5-3 5 3-1.5-7",
  news: "M4 5h13v14H4zM17 9h3v10H6M7 9h7M7 13h7M7 16h4",
  book: "M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3zM5 17a3 3 0 013-3h11",
  flask: "M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3M7.5 15h9",
  building: "M5 21V4h10v17M15 9h4v12M3 21h18M8 8h4M8 12h4M8 16h4",
  euro: "M17 6.5A6.5 6.5 0 007 12a6.5 6.5 0 0010 5.5M5 10h8M5 14h8",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 16, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true" focusable="false" {...rest}>
      <path d={paths[name]} />
    </svg>
  );
}
