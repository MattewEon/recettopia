import { Component, input } from '@angular/core';
import { Intro } from '../../models/recipe.models';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.html',
})
export class IntroComponent {
  intro = input.required<Intro>();
}
