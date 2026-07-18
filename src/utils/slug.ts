export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function unslugify(slug: string, candidates: string[]): string | undefined {
  return candidates.find(c => slugify(c) === slug);
}
