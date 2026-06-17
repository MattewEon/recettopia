import { Component, computed, input } from '@angular/core';
import { Group, VarianteItem } from '../../models/recipe.models';

@Component({
  selector: 'app-variantes-group',
  templateUrl: './variantes-group.html',
  styleUrl: './variantes-group.scss',
})
export class VariantesGroupComponent {
  group = input.required<Group>();

  items = computed(() => this.group().items as VarianteItem[]);
}
