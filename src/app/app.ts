import { Component, signal } from '@angular/core';
import { RECIPES_DATA } from './data/recipes.data';
import { TocComponent } from './components/toc/toc';
import { RecipeSectionComponent } from './components/recipe-section/recipe-section';
import { FilterBarComponent } from './components/filter-bar/filter-bar';
import { IngredientIndexComponent } from './components/ingredient-index/ingredient-index';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [TocComponent, RecipeSectionComponent, FilterBarComponent, IngredientIndexComponent],
  host: {
    '[class.toc-open]': 'tocOpen()',
    '[class.ingredient-index-open]': 'ingredientIndexOpen()',
  },
})
export class AppComponent {
  readonly sections = RECIPES_DATA.sections;
  tocOpen = signal(false);
  activeFilters = signal<string[]>([]);
  ingredientIndexOpen = signal(false);
  selectedIngredients = signal<string[]>([]);

  toggleFilter(id: string): void {
    if (id === 'all') {
      this.activeFilters.set([]);
      return;
    }
    this.activeFilters.update(current =>
      current.includes(id) ? current.filter(f => f !== id) : [...current, id],
    );
  }

  toggleToc(): void {
    this.tocOpen.update(v => !v);
    if (this.ingredientIndexOpen()) this.ingredientIndexOpen.set(false);
  }

  closeToc(): void {
    this.tocOpen.set(false);
  }

  clearFiltersAndGo(fragment: string): void {
    this.activeFilters.set([]);
    this.tocOpen.set(false);
    setTimeout(() => {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  toggleIngredientIndex(): void {
    this.ingredientIndexOpen.update(v => !v);
    if (this.tocOpen()) this.tocOpen.set(false);
  }

  closeIngredientIndex(): void {
    this.ingredientIndexOpen.set(false);
  }

  toggleIngredient(name: string): void {
    this.selectedIngredients.update(current =>
      current.includes(name) ? current.filter(n => n !== name) : [...current, name],
    );
  }

  clearIngredients(): void {
    this.selectedIngredients.set([]);
  }
}
