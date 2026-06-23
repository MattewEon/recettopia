import { Group, RecipeCard, RecipeNote } from '../models/recipe.models';

export const recipe = (recipe: RecipeCard): RecipeCard => recipe;

export const ingredients = (
  items: [string, string, string?][],
  title = 'Ingrédients',
  subtitle?: string,
): Group => ({
  type: 'ingredients',
  title,
  subtitle,
  items: items.map(([name, qty, key]) => ({
    name,
    qty,
    ...(key !== undefined ? { key } : {}),
  })),
});

export const steps = (
  items: [string, string][],
  title = 'Préparation',
  subtitle?: string,
): Group => ({
  type: 'steps',
  title,
  subtitle,
  items: items.map(([label, text]) => ({
    label,
    text,
  })),
});

export const variantes = (
  items: [string, string][],
  title = 'Variantes',
  style?: string,
): Group => ({
  type: 'variantes',
  title,
  style,
  items: items.map(([label, text]) => ({
    label,
    text,
  })),
});

export const notes = (items: [string, string][]): RecipeNote[] =>
  items.map(([label, text]) => ({
    label,
    text,
  }));
