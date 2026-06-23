import { Component, computed, input } from '@angular/core';
import { Label, RecipeCard, RecipeSection } from '../../models/recipe.models';
import { RecipeCardComponent } from '../recipe-card/recipe-card';
import { IntroComponent } from '../intro/intro';
import { cardIngredientNames } from '../../utils/ingredient.utils';

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

  hasVisibleCards = computed(() => {
    const labelFilters = this.activeFilters();
    const ingredientFilters = this.selectedIngredients();
    return this.section().cards.some(card => this.isCardVisible(card, labelFilters, ingredientFilters));
  });

  isCardVisible(
    card: RecipeCard,
    labelFilters = this.activeFilters(),
    ingredientFilters = this.selectedIngredients(),
  ): boolean {
    const passesLabels =
      labelFilters.length === 0 || labelFilters.every(f => (card.labels ?? []).includes(f as Label));

    const ingredientNames = new Set(cardIngredientNames(card));
    const passesIngredients =
      ingredientFilters.length === 0 || ingredientFilters.every(sel => ingredientNames.has(sel));

    return passesLabels && passesIngredients;
  }
}
