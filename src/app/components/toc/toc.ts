import { Component, input, output } from '@angular/core';
import { Label, RecipeCard, RecipeSection } from '../../models/recipe.models';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.html',
  styleUrl: './toc.scss',
  host: { '[class.open]': 'open()' },
})
export class TocComponent {
  sections = input.required<RecipeSection[]>();
  open = input<boolean>(false);
  activeFilters = input<string[]>([]);

  linkClicked = output<void>();
  clearFiltersAndGo = output<string>();

  isCardFiltered(card: RecipeCard): boolean {
    const filters = this.activeFilters();
    if (filters.length === 0) return false;
    return !filters.every(f => (card.labels ?? []).includes(f as Label));
  }

  onFilteredClick(event: Event, fragment: string): void {
    event.preventDefault();
    this.clearFiltersAndGo.emit(fragment);
  }
}
