import { Component, signal } from '@angular/core';
import { RECIPES_DATA } from './data/recipes.data';
import { TocComponent } from './components/toc/toc';
import { RecipeSectionComponent } from './components/recipe-section/recipe-section';
import { FilterBarComponent } from './components/filter-bar/filter-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [TocComponent, RecipeSectionComponent, FilterBarComponent],
  host: { '[class.toc-open]': 'tocOpen()' },
})
export class AppComponent {
  readonly sections = RECIPES_DATA.sections;
  tocOpen = signal(false);
  activeFilter = signal('all');

  toggleToc(): void {
    this.tocOpen.update(v => !v);
  }

  closeToc(): void {
    this.tocOpen.set(false);
  }
}
