import { RecipeCard, RecipeSection } from '../models/recipe.models';

const CAKE_SALE: RecipeCard = {
  theme: 'choco',
  emoji: '🍞',
  tag: 'Four · 180°C · 40–45 min',
  title: 'Cake salé lardons-olives-gruyère',
  desc: 'Recette classique · Facile & généreux',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Farine', qty: '200 g' },
        { name: 'Levure chimique', qty: '1 sachet' },
        { name: 'Œufs', qty: '3' },
        { name: 'Huile', qty: '100 ml' },
        { name: 'Lait chaud', qty: '100 ml' },
        { name: 'Lardons', qty: '200 g' },
        { name: 'Olives', qty: '150 g' },
        { name: 'Gruyère râpé', qty: '100 g' },
        { name: 'Sel, poivre', qty: '1 pincée' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Mélanger',
          text: "Mélanger les ingrédients dans l'ordre : farine, sel, poivre, levure, œufs, huile, lait chaud, lardons, olives, gruyère.",
        },
        {
          label: 'Cuisson',
          text: 'Verser dans un moule beurré. Enfourner à 180°C pendant 40 à 45 min. Vérifier la cuisson avec une lame.',
        },
      ],
    },
  ],
};

const SALADE_PATATES: RecipeCard = {
  theme: 'caramel',
  emoji: '🥔',
  tag: 'Poêle · Salade tiède',
  title: 'Salade de patates',
  desc: 'Pois chiches, œuf dur & fromage · Sésame doré',
  labels: ['vegetarien'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Pommes de terre', qty: 'selon convives' },
        { name: 'Beurre salé', qty: 'un bon morceau' },
        { name: 'Pois chiches', qty: 'selon goût' },
        { name: 'Œufs durs', qty: 'selon convives' },
        { name: 'Cornichons (+ oignons, grains de moutarde)', qty: 'q.s.' },
        { name: 'Fromage pâte dure', qty: 'selon goût' },
        { name: 'Persil, coriandre, sésame doré', qty: 'q.s.' },
        { name: "Sel, huile d'olive", qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Poêle',
          text: 'Découper les patates en carrés et les faire revenir à la poêle dans un bon morceau de beurre salé. En mi/fin de cuisson, ajouter les pois chiches.',
        },
        { label: 'Œufs', text: 'Cuire et découper les œufs durs une fois refroidis.' },
        {
          label: 'Assembler',
          text: "Dans un saladier : cornichons, fromage, assaisonnement (persil, coriandre, sésame doré, sel, huile d'olive). Ajouter les PdT, pois chiches et œufs.",
        },
      ],
    },
  ],
};

export const APERO_BISCUITS: RecipeSection = {
  label: 'Apéro & biscuits salés',
  cards: [CAKE_SALE, SALADE_PATATES],
};
