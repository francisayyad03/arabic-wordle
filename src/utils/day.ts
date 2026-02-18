// src/utils/day.ts
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
  const a = dayIdToLocalMidnight(aDayId).getTime();
  const b = dayIdToLocalMidnight(bDayId).getTime();
  const ms = 24 * 60 * 60 * 1000;
  return Math.round((a - b) / ms);
}
