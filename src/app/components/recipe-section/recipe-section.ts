import { Component, input } from '@angular/core';
import { RecipeSection } from '../../models/recipe.models';
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
}
