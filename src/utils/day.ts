// src/utils/day.ts
const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function getLocalDayId(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function dayIdToLocalMidnight(dayId: string): Date {
  const [y, m, d] = dayId.split("-").map(Number);
  return new Date(y, m - 1, d, 0, 0, 0, 0);
}

export function diffDays(aDayId: string, bDayId: string): number {
  const [ay, am, ad] = aDayId.split("-").map(Number);
  const [by, bm, bd] = bDayId.split("-").map(Number);
  const aUtcDay = Date.UTC(ay, am - 1, ad) / MS_PER_DAY;
  const bUtcDay = Date.UTC(by, bm - 1, bd) / MS_PER_DAY;
  return aUtcDay - bUtcDay;
}
