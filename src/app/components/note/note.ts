import { Component, input } from '@angular/core';
import { RecipeNote } from '../../models/recipe.models';

@Component({
  selector: 'app-note',
  templateUrl: './note.html',
  styleUrl: './note.scss',
})
export class NoteComponent {
  note = input.required<RecipeNote>();
}
