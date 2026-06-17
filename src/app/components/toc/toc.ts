import { Component, input, output } from '@angular/core';
import { RecipeSection } from '../../models/recipe.models';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.html',
})
export class TocComponent {
  sections = input.required<RecipeSection[]>();
  linkClicked = output<void>();
}
