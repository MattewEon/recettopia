import {RecipeCard, RecipeSection} from '../models/recipe.models';

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
        {name: 'Farine', qty: '200 g'},
        {name: 'Levure chimique', qty: '1 sachet'},
        {name: 'Œufs', qty: '3'},
        {name: 'Huile', qty: '100 ml'},
        {name: 'Lait chaud', qty: '100 ml'},
        {name: 'Lardons', qty: '200 g'},
        {name: 'Olives', qty: '150 g'},
        {name: 'Gruyère râpé', qty: '100 g'},
        {name: 'Sel, poivre', qty: '1 pincée'},
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
const PAIN_LENTILLES_CORAIL: RecipeCard = {
  theme: "gold",
  emoji: '🍞',
  tag: 'Four · 180°C · 30 min + trempage · 10 tranches',
  title: 'Pain de lentilles corail',
  desc: 'Sans gluten · Riche en protéines · Moelleux · Facile à préparer',
  labels: ['sans-gluten'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Lentilles corail', qty: '250 g' },
        { name: 'Œuf', qty: '1' },
        { name: 'Eau', qty: '15 cl' },
        { name: "Huile d'olive", qty: '2 càs' },
        { name: 'Levure chimique', qty: '10 g' },
        { name: 'Sel', qty: '1,5 càc' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Trempage ⚠️',
          text: 'Faire tremper les lentilles corail pendant une nuit dans un grand volume d’eau.'
        },
        {
          label: 'Mixage',
          text: 'Égoutter soigneusement les lentilles puis ajouter l’œuf, l’eau, l’huile d’olive, la levure et le sel. Mixer jusqu’à obtenir une pâte homogène.'
        },
        {
          label: 'Moule',
          text: 'Verser la préparation dans un moule chemisé de papier cuisson.'
        },
        {
          label: 'Cuisson',
          text: 'Enfourner à 180°C pendant environ 30 min jusqu’à ce que le pain soit bien cuit et légèrement doré.'
        },
        {
          label: 'Repos',
          text: 'Laisser refroidir avant de démouler et de trancher.'
        }
      ]
    }
  ],
  notes: [
    {
      parts: [
        {
          label: 'Nutrition :',
          text: 'Environ 105 kcal, 7 g de protéines, 12 g de glucides et 3 g de lipides par tranche (sur une base de 10 tranches).'
        },
        {
          label: 'Astuce :',
          text: 'Ajouter des herbes, des épices ou des graines pour varier les saveurs.'
        },
        {
          label: 'Apéro original :',
          text: 'Servir en toast pour un apéro sans gluten !'
        }
      ]
    }
  ]
};
const SALADE_CONCOMBRE_CHEVRE_CORIANDRE_SESAME: RecipeCard = {
  theme: 'green',
  emoji: '🥒',
  tag: 'Frais · Sans cuisson · 10 min · Idéal en verrine',
  title: 'Salade concombre, chèvre frais, coriandre & sésame',
  desc: 'Fraîche · Légère · Parfumée · Croquante · Express',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        {name: 'Concombre', qty: '1'},
        {name: 'Chèvre frais', qty: '100 g'},
        {name: 'Coriandre fraîche (feuilles)', qty: '1 càc'},
        {name: 'Graines de sésame (toastées de préférence)', qty: '1 càc'},
        {name: "Huile d'olive", qty: '2 càc'},
        {name: 'Jus de citron', qty: '1 càc'},
        {name: 'Sel, poivre', qty: 'q.s.'}
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Concombre',
          text: 'Trancher le concombre en rondelles fines ou en demi-lunes. Si les graines sont grosses, les retirer à la cuillère. Saler légèrement, laisser dégorger 5 min puis éponger.'
        },
        {
          label: 'Vinaigrette',
          text: "Mélanger l’huile d’olive, le chèvre frais, et le jus de citron. Assaisonner avec le sel et le poivre."
        },
        {
          label: 'Mélanger',
          text: 'Disposer le concombre dans un plat. Ajouter la vinaigrette et mélanger.'
        },
        {
          label: 'Finition',
          text: 'Parsemer de coriandre fraîche ciselée et de graines de sésame toastées.'
        },

      ]
    }
  ],
  notes: [
    {
      parts: [
        {
          label: 'Twist :',
          text: "Ajouter un filet de miel sur le chèvre, remplacer l’huile d’olive par de l’huile de sésame grillé, ou ajouter une touche de piment."
        }],
    }, {
      parts: [
        {
          label: 'Astuce clé :',
          text: "Le dégorgeage du concombre est essentiel pour éviter une salade trop aqueuse."
        }
      ]
    }
  ]
};

export const APERO_BISCUITS: RecipeSection = {
  label: 'Apéro & biscuits salés',
  description: ' "Avant les grands plats viennent les petites bouchées, celles qui ouvrent l\'appétit et le coeur..." ',
  cards: [
    CAKE_SALE,
    SALADE_CONCOMBRE_CHEVRE_CORIANDRE_SESAME,
    PAIN_LENTILLES_CORAIL,
  ]
};
