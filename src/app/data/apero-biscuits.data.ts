import { RecipeSection } from '../models/recipe.models';
import { ingredients, notes, recipe, steps } from '../models/recipe.builder';

const CAKE_SALE = recipe({
  theme: 'choco',
  emoji: '🍞',
  tag: 'Four · 180°C · 40–45 min',
  title: 'Cake salé',
  desc: 'Recette classique · Facile & généreux',
  groups: [
    ingredients(
      [
        ['Farine', '200 g'],
        ['Levure chimique', '1 sachet'],
        ['Œufs', '3'],
        ['Huile', '100 ml'],
        ['Lait chaud', '100 ml'],
        ['Sel, poivre', '1 pincée'],
      ],
      'Base',
    ),
    ingredients(
      [
        ['Lardons', '200 g'],
        ['Olives', '150 g'],
        ['Gruyère râpé', '100 g'],
      ],
      'Garniture',
    ),
    steps([
      [
        'Mélanger',
        "Mélanger les ingrédients dans l'ordre : farine, sel, poivre, levure, œufs, huile, lait chaud et former une pâte homogène.",
      ],
      ['Garnir', 'Ajouter la garniture de votre choix, ici : lardons, olives, et gruyère.'],
      [
        'Cuisson',
        'Verser dans un moule beurré. Enfourner à 180°C pendant 40 à 45 min. Vérifier la cuisson avec une lame.',
      ],
    ]),
  ],
  notes: notes([
    [
      'Garniture au choix :',
      "Pour une version végétarienne, on pourra garnir d'olives, tomates séchées et fromage.",
    ],
  ]),
});

const PAIN_LENTILLES_CORAIL = recipe({
  theme: 'gold',
  emoji: '🍞',
  tag: 'Four · 180°C · 30 min + trempage · 10 tranches',
  title: 'Pain de lentilles corail',
  desc: 'Riche en protéines · Moelleux · Facile à préparer',
  labels: ['sans-gluten', 'sans-lactose', 'vegetarien'],
  groups: [
    ingredients([
      ['Lentilles corail', '250 g'],
      ['Œuf', '1'],
      ['Eau', '15 cl'],
      ["Huile d'olive", '2 càs'],
      ['Levure chimique', '10 g'],
      ['Sel', '1,5 càc'],
    ]),
    steps([
      [
        'Trempage ⚠️',
        'Faire tremper les lentilles corail pendant une nuit dans un grand volume d’eau.',
      ],
      [
        'Mixage',
        'Égoutter soigneusement les lentilles puis ajouter l’œuf, l’eau, l’huile d’olive, la levure et le sel. Mixer jusqu’à obtenir une pâte homogène.',
      ],
      ['Moule', 'Verser la préparation dans un moule chemisé de papier cuisson.'],
      [
        'Cuisson',
        'Enfourner à 180°C pendant environ 30 min jusqu’à ce que le pain soit bien cuit et légèrement doré.',
      ],
      ['Repos', 'Laisser refroidir avant de démouler et de trancher.'],
    ]),
  ],
  notes: notes([
    ['Astuce :', 'Ajouter des herbes, des épices ou des graines pour varier les saveurs.'],
    ['Apéro original :', 'Servir en toast pour un apéro sans gluten !'],
  ]),
});

const SALADE_CONCOMBRE_CHEVRE_CORIANDRE_SESAME = recipe({
  theme: 'green',
  emoji: '🥒',
  tag: 'Frais · Sans cuisson · 10 min · Idéal en verrine',
  title: 'Salade concombre, chèvre frais, coriandre & sésame',
  desc: 'Fraîche · Parfumée · Croquante',
  labels: ['vegetarien', 'sans-gluten', 'lactose-reduit'],
  groups: [
    ingredients([
      ['Concombre', '1'],
      ['Chèvre frais', '100 g'],
      ['Coriandre fraîche (feuilles)', '1 càc'],
      ['Graines de sésame (toastées de préférence)', '1 càc'],
      ["Huile d'olive", '2 càc'],
      ['Jus de citron', '1 càc'],
      ['Sel, poivre', 'q.s.'],
    ]),
    steps([
      [
        'Concombre',
        'Trancher le concombre en rondelles fines ou en demi-lunes. Si les graines sont grosses, les retirer à la cuillère. Saler légèrement, laisser dégorger 5 min puis éponger.',
      ],
      [
        'Vinaigrette',
        'Mélanger l’huile d’olive, le chèvre frais, et le jus de citron. Assaisonner avec le sel et le poivre.',
      ],
      ['Mélanger', 'Disposer le concombre dans un plat. Ajouter la vinaigrette et mélanger.'],
      ['Finition', 'Parsemer de coriandre fraîche ciselée et de graines de sésame toastées.'],
    ]),
  ],
  notes: notes([
    [
      'Twist :',
      'Ajouter un filet de miel sur le chèvre, remplacer l’huile d’olive par de l’huile de sésame grillé, ou ajouter une touche de piment.',
    ],
    [
      'Astuce clé :',
      'Le dégorgeage du concombre est essentiel pour éviter une salade trop aqueuse.',
    ],
  ]),
});

export const APERO_BISCUITS: RecipeSection = {
  label: 'Apéro & biscuits salés',
  description:
    ' "Avant les grands plats viennent les petites bouchées, celles qui ouvrent l\'appétit et le cœur..." ',
  cards: [CAKE_SALE, PAIN_LENTILLES_CORAIL, SALADE_CONCOMBRE_CHEVRE_CORIANDRE_SESAME],
};
