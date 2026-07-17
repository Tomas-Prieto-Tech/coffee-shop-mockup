import type { BusinessHour } from "@/types/sanity";

export function BusinessHours({ hours }: { hours: BusinessHour[] }) {
  return (
    <div className="rounded-[2rem] border border-espresso/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(45,33,24,0.08)]">
      <h3 className="font-serif text-2xl text-espresso">Hours</h3>
      <ul className="mt-5 space-y-3 text-sm text-charcoal/80">
        {hours.map((entry) => (
          <li key={entry.day} className="flex items-center justify-between gap-4 border-b border-espresso/8 pb-3 last:border-b-0 last:pb-0">
            <span>{entry.day}</span>
            <span>{entry.closed ? "Closed" : `${entry.open} - ${entry.close}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
