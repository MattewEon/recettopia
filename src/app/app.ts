import { Component, signal } from '@angular/core';
import { RECIPES_DATA } from './data/recipes.data';
import { TocComponent } from './components/toc/toc';
import { RecipeSectionComponent } from './components/recipe-section/recipe-section';
import { FilterBarComponent } from './components/filter-bar/filter-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [TocComponent, RecipeSectionComponent, FilterBarComponent],
  host: { '[class.toc-open]': 'tocOpen()' },
})
export class AppComponent {
  readonly sections = RECIPES_DATA.sections;
  tocOpen = signal(false);
  activeFilters = signal<string[]>([]);

  toggleFilter(id: string): void {
    if (id === 'all') {
      this.activeFilters.set([]);
      return;
    }
    this.activeFilters.update(current =>
      current.includes(id) ? current.filter(f => f !== id) : [...current, id]
    );
  }

  toggleToc(): void {
    this.tocOpen.update(v => !v);
  }

  closeToc(): void {
    this.tocOpen.set(false);
  }
}
