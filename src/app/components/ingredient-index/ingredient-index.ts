import { Component, computed, input, output, signal } from '@angular/core';
import { RecipeSection } from '../../models/recipe.models';
import { ALWAYS_AVAILABLE, cardIngredientNames } from '../../utils/ingredient.utils';

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
  fridgeModeChange = output<boolean>();
  alwaysExcludedChange = output<string[]>();

  searchQuery = signal('');
  fridgeMode = signal(false);
  excludedAlways = signal<Set<string>>(new Set());
  selectedSet = computed(() => new Set(this.selectedIngredients()));

  readonly alwaysAvailable = [...ALWAYS_AVAILABLE];

  toggleFridgeMode(value: boolean): void {
    this.fridgeMode.set(value);
    this.fridgeModeChange.emit(value);
  }

  toggleAlways(name: string): void {
    this.excludedAlways.update(current => {
      const next = new Set(current);
      next.has(name) ? next.delete(name) : next.add(name);
      this.alwaysExcludedChange.emit([...next]);
      return next;
    });
  }

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

  allIngredients = computed(() =>
    this.ingredientStats().names.filter(n => !ALWAYS_AVAILABLE.has(n)),
  );
  recipeCountByIngredient = computed(() => this.ingredientStats().counts);

  filteredIngredients = computed(() => {
    const query = normalize(this.searchQuery());
    const list = query
      ? this.allIngredients().filter(name => normalize(name).includes(query))
      : this.allIngredients();

    if (this.fridgeMode()) {
      const counts = this.recipeCountByIngredient();
      return [...list].sort((a, b) => (counts.get(b) ?? 0) - (counts.get(a) ?? 0));
    }
    return list;
  });
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}
