import { clsx } from "clsx";

export function cn(...values: Array<string | false | null | undefined>) {
  return clsx(values);
}

export function formatEventDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    weekday: "short",
  }).format(new Date(dateString));
}

export function formatEventTimeRange(start: string, end: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formatter.format(new Date(start))} - ${formatter.format(new Date(end))}`;
}

export function isTodayOpen(hours: { day: string; closed?: boolean; open: string; close: string }[]) {
  const today = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());
  return hours.find((item) => item.day === today);
}
