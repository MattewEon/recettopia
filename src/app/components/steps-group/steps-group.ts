import { Component, computed, input } from '@angular/core';
import { Group, StepItem } from '../../models/recipe.models';

@Component({
  selector: 'app-steps-group',
  templateUrl: './steps-group.html',
})
export class StepsGroupComponent {
  group = input.required<Group>();

  items = computed(() => this.group().items as StepItem[]);
}
