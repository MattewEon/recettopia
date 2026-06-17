export type Theme = 'choco' | 'caramel' | 'green' | 'navy' | 'terracotta' | 'plum' | 'teal' | 'ink' | 'gold' ;
export type Label = 'vegetarien' | 'sans-gluten' | 'sans-lactose' | 'lactose-reduit';

export interface IngredientItem {
  name: string;
  qty: string;
}

export interface StepItem {
  label: string;
  text: string;
}

export interface VarianteItem {
  label: string;
  text: string;
}

export type GroupItem = IngredientItem | StepItem | VarianteItem;

export interface Group {
  type: 'ingredients' | 'steps' | 'variantes';
  title: string;
  subtitle?: string;
  style?: string;
  items: GroupItem[];
}

export interface NotePart {
  label: string;
  text: string;
}

export interface RecipeNote {
  parts: NotePart[];
}

export interface RecipeCard {
  theme: Theme;
  emoji: string;
  tag: string;
  title: string;
  desc: string;
  labels?: Label[];
  groups: Group[];
  notes?: RecipeNote[];
}

export interface IntroItem {
  label: string;
  text: string;
}

export interface Intro {
  title: string;
  items: IntroItem[];
}

export interface RecipeSection {
  label: string;
  intro?: Intro;
  description?: string;
  cards: RecipeCard[];
}

export interface RecipeData {
  sections: RecipeSection[];
}
