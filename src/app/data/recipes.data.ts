import {RecipeData} from '../models/recipe.models';
import { APERO_BISCUITS } from './apero-biscuits.data';
import { ENTREES_PLATS } from './entrees-plats.data';
import { GOUTERS_DESSERTS } from './gouters-desserts.data';
import { SAUCES_ACCOMPAGNEMENTS } from './sauces-accompagnements.data';
import { VELOUTES_SOUPES } from './veloutes-soupes.data';

export const RECIPES_DATA: RecipeData = {
  sections: [
    APERO_BISCUITS,
    VELOUTES_SOUPES,
    ENTREES_PLATS,
    SAUCES_ACCOMPAGNEMENTS,
    GOUTERS_DESSERTS,
  ],
};
