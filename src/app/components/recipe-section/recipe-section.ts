import { Component, computed, input } from '@angular/core';
import { Label, RecipeCard, RecipeSection } from '../../models/recipe.models';
import { RecipeCardComponent } from '../recipe-card/recipe-card';
import { IntroComponent } from '../intro/intro';

@Component({
  selector: 'app-recipe-section',
  templateUrl: './recipe-section.html',
  imports: [RecipeCardComponent, IntroComponent],
})
export class RecipeSectionComponent {
  section = input.required<RecipeSection>();
  sectionIndex = input.required<number>();
  activeFilter = input<string>('all');

  hasVisibleCards = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return true;
    return this.section().cards.some(card => this.isCardVisible(card, filter));
  });

  isCardVisible(card: RecipeCard, filter = this.activeFilter()): boolean {
    return filter === 'all' || (card.labels ?? []).includes(filter as Label);
  }
}
