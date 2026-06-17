import { Component, computed, input } from '@angular/core';
import { Group, IngredientItem } from '../../models/recipe.models';

@Component({
  selector: 'app-ingredients-group',
  templateUrl: './ingredients-group.html',
  styleUrl: './ingredients-group.scss',
})
export class IngredientsGroupComponent {
  group = input.required<Group>();

  items = computed(() => this.group().items as IngredientItem[]);
}
