import { Component, computed, input } from '@angular/core';
import { Label, RecipeCard, RecipeSection } from '../../models/recipe.models';
import { RecipeCardComponent } from '../recipe-card/recipe-card';
import { IntroComponent } from '../intro/intro';

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

  hasVisibleCards = computed(() =>
    this.section().cards.some(card => this.isCardVisible(card))
  );

  isCardVisible(card: RecipeCard): boolean {
    const filters = this.activeFilters();
    if (filters.length === 0) return true;
    return filters.every(f => (card.labels ?? []).includes(f as Label));
  }
}
