import { ANSWERS } from '../data/answers';

/**
 * Returns an integer day index since a fixed start date.
 * This guarantees the same word for everyone on the same day.
 */
function getDayIndex(dayId: string): number {
  // dayId is "YYYY-MM-DD"
  const [y, m, d] = dayId.split('-').map(Number);

  // Use local midnight for stability
  const date = new Date(y, m - 1, d, 0, 0, 0, 0);

  const start = new Date(2024, 0, 1, 0, 0, 0, 0);

  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = date.getTime() - start.getTime();

  return Math.floor(diff / msPerDay);
}

/**
 * Pick the daily answer deterministically.
 */
export function getDailyWord(dayID: string): string {
  const index = getDayIndex(dayID) % ANSWERS.length;
  return ANSWERS[index];
}
