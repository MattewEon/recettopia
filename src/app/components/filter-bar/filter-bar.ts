import { Component, input, output } from '@angular/core';

export interface FilterOption {
  id: string;
  label: string;
}

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.html',
})
export class FilterBarComponent {
  activeFilters = input.required<string[]>();
  filterToggle = output<string>();

  readonly filters: FilterOption[] = [
    { id: 'vegetarien', label: '🌿 Végétarien' },
    { id: 'sans-gluten', label: '🌾 Sans gluten' },
    { id: 'sans-lactose', label: '🥛 Sans lactose' },
    { id: 'lactose-reduit', label: '🥛 Faible en lactose' },
  ];
}
