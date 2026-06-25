import { IngredientItem, RecipeCard } from '../models/recipe.models';

export const ALWAYS_AVAILABLE: ReadonlySet<string> = new Set([
  'Sel',
  'Poivre',
  'Eau',
  'Huile',
  'Sucre',
]);

export function canonicalIngredient(name: string): string {
  return name.replace(/\s*\([^)]*\)/g, '').trim();
}

export function cardIngredientNames(card: RecipeCard): string[] {
  return card.groups
    .filter(g => g.type === 'ingredients')
    .flatMap(g => (g.items as IngredientItem[]).map(i => i.key ?? canonicalIngredient(i.name)));
}
