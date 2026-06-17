import { Component, input, output } from '@angular/core';
import { RecipeSection } from '../../models/recipe.models';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.html',
  styleUrl: './toc.scss',
  host: { '[class.open]': 'open()' },
})
export class TocComponent {
  sections = input.required<RecipeSection[]>();
  open = input<boolean>(false);
  linkClicked = output<void>();
}
