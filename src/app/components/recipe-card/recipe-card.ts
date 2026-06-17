import { Component, input } from '@angular/core';
import { RecipeCard } from '../../models/recipe.models';
import { IngredientsGroupComponent } from '../ingredients-group/ingredients-group';
import { StepsGroupComponent } from '../steps-group/steps-group';
import { VariantesGroupComponent } from '../variantes-group/variantes-group';
import { NoteComponent } from '../note/note';

const LABEL_NAMES: Record<string, string> = {
  'vegetarien': '🌿 Végétarien',
  'sans-gluten': '🌾 Sans gluten',
  'sans-lactose': '🥛 Sans lactose',
};

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.html',
  imports: [IngredientsGroupComponent, StepsGroupComponent, VariantesGroupComponent, NoteComponent],
})
export class RecipeCardComponent {
  card = input.required<RecipeCard>();
  cardId = input.required<string>();

  labelName(id: string): string {
    return LABEL_NAMES[id] ?? id;
  }
}
