import { Component, computed, input } from '@angular/core';
import { Label, RecipeCard, RecipeSection } from '../../models/recipe.models';
import { RecipeCardComponent } from '../recipe-card/recipe-card';
import { IntroComponent } from '../intro/intro';
import { ALWAYS_AVAILABLE, cardIngredientNames } from '../../utils/ingredient.utils';

@Component({
  selector: 'app-recipe-section',
  templateUrl: './recipe-section.html',
  styleUrl: './recipe-section.scss',
  imports: [RecipeCardComponent, IntroComponent],
})
export class RecipeSectionComponent {
  section = input.required<RecipeSection>();
  sectionIndex = input.required<number>();
  activeFilters = input<string[]>([]);
  selectedIngredients = input<string[]>([]);
  fridgeMode = input<boolean>(false);
  alwaysExcluded = input<string[]>([]);

  hasVisibleCards = computed(() => {
    const labelFilters = this.activeFilters();
    const ingredientFilters = this.selectedIngredients();
    const fridge = this.fridgeMode();
    const excluded = this.alwaysExcluded();
    return this.section().cards.some(card => this.isCardVisible(card, labelFilters, ingredientFilters, fridge, excluded));
  });

  isCardVisible(
    card: RecipeCard,
    labelFilters = this.activeFilters(),
    ingredientFilters = this.selectedIngredients(),
    fridge = this.fridgeMode(),
    alwaysExcluded = this.alwaysExcluded(),
  ): boolean {
    const passesLabels =
      labelFilters.length === 0 || labelFilters.every(f => (card.labels ?? []).includes(f as Label));

    let passesIngredients: boolean;
    if (fridge && ingredientFilters.length > 0) {
      const effectiveAlways = new Set([...ALWAYS_AVAILABLE].filter(n => !alwaysExcluded.includes(n)));
      const fridgeSet = new Set([...ingredientFilters, ...effectiveAlways]);
      passesIngredients = cardIngredientNames(card).every(ing => fridgeSet.has(ing));
    } else {
      const ingredientNames = new Set(cardIngredientNames(card));
      passesIngredients =
        ingredientFilters.length === 0 || ingredientFilters.every(sel => ingredientNames.has(sel));
    }

    return passesLabels && passesIngredients;
  }
}
