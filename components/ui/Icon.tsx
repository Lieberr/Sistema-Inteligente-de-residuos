import type { ReactNode } from "react";

export type IconName =
  | "grid" | "truck" | "route" | "alert" | "box" | "tag" | "pin"
  | "chart" | "file" | "compare" | "building" | "users" | "target"
  | "settings" | "bell" | "chevron" | "download" | "filter" | "arrow"
  | "check" | "clock" | "warning" | "plus" | "search";

export function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    truck: <><path d="M3 6h11v11H3zM14 10h4l3 4v3h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>,
    route: <><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M5 7v4c0 2 2 3 4 3h6c2 0 4 1 4 3"/></>,
    alert: <><path d="M12 3 2.7 20h18.6z"/><path d="M12 9v5M12 17h.01"/></>,
    box: <><path d="m4 7 8-4 8 4v10l-8 4-8-4zM4 7l8 4 8-4M12 11v10"/></>,
    tag: <><path d="M3 4h8l10 10-7 7L4 11z"/><circle cx="8" cy="8" r="1"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    file: <><path d="M6 2h8l4 4v16H6zM14 2v5h5M9 12h6M9 16h6"/></>,
    compare: <><path d="M7 4v14M3 8l4-4 4 4M17 20V6M13 16l4 4 4-4"/></>,
    building: <><path d="M4 21V5l8-3 8 3v16M8 8h2M14 8h2M8 12h2M14 12h2M9 21v-5h6v5"/></>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2-7 6-7s6 3 6 7M16 4c3 0 4 2 4 4s-1 3-3 3M17 14c3 0 4 2 4 5"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19 14.5l2 1.5-2 3-2.5-1a8 8 0 0 1-2 1l-.5 3h-4l-.5-3a8 8 0 0 1-2-1L5 19l-2-3 2-1.5a8 8 0 0 1 0-5L3 8l2-3 2.5 1a8 8 0 0 1 2-1l.5-3h4l.5 3a8 8 0 0 1 2 1L19 5l2 3-2 1.5a8 8 0 0 1 0 5z"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
    chevron: <path d="m9 6 6 6-6 6"/>,
    download: <><path d="M12 3v13M7 11l5 5 5-5M4 21h16"/></>,
    filter: <path d="M3 5h18l-7 8v6l-4 2v-8z"/>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></>,
    warning: <><path d="M12 3 2.7 20h18.6z"/><path d="M12 9v5M12 17h.01"/></>,
    plus: <path d="M12 5v14M5 12h14"/>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}