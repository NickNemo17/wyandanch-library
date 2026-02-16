import { allItems, type CurriculumItem } from './curriculum';

export function getAllSlugs(): string[] {
  return allItems.map((item) => item.slug);
}

export function getItemMeta(slug: string): CurriculumItem | undefined {
  return allItems.find((item) => item.slug === slug);
}
