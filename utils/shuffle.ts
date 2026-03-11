export function generateHash(string: string): number {
  let hash = 0;
  for (const char of string) {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    hash |= 0; // Constrain to 32bit integer
  }
  return hash;
}

export function deterministicShuffleArray<T>(array: T[], hashKey: keyof T): T[] {
  return array
    .map((value) => ({ value, sort: generateHash(value[hashKey] as string) }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
