import { Component, computed, input, output, signal } from '@angular/core';
import { RecipeSection } from '../../models/recipe.models';
import { cardIngredientNames } from '../../utils/ingredient.utils';

@Component({
  selector: 'app-ingredient-index',
  templateUrl: './ingredient-index.html',
  styleUrl: './ingredient-index.scss',
  host: { '[class.open]': 'open()' },
})
export class IngredientIndexComponent {
  sections = input.required<RecipeSection[]>();
  open = input<boolean>(false);
  selectedIngredients = input<string[]>([]);

  ingredientToggle = output<string>();
  clearSelection = output<void>();
  close = output<void>();

  searchQuery = signal('');
  selectedSet = computed(() => new Set(this.selectedIngredients()));

  private ingredientStats = computed(() => {
    const names = new Set<string>();
    const counts = new Map<string, number>();
    for (const section of this.sections()) {
      for (const card of section.cards) {
        const cardNames = cardIngredientNames(card);
        const cardSet = new Set(cardNames);
        for (const name of cardNames) names.add(name);
        for (const name of cardSet) counts.set(name, (counts.get(name) ?? 0) + 1);
      }
    }
    return { names: [...names].sort((a, b) => a.localeCompare(b, 'fr')), counts };
  });

  allIngredients = computed(() => this.ingredientStats().names);
  recipeCountByIngredient = computed(() => this.ingredientStats().counts);

  filteredIngredients = computed(() => {
    const query = normalize(this.searchQuery());
    if (!query) return this.allIngredients();
    return this.allIngredients().filter(name => normalize(name).includes(query));
  });
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}
