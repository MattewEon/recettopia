import { RecipeCard, RecipeSection } from '../models/recipe.models';

const OURSONS_CHOCOLAT: RecipeCard = {
  theme: 'choco',
  emoji: '🐻',
  tag: 'Four · 180°C · 20–25 min · ~19 pièces (25–35 g)',
  title: 'Petits oursons aux pépites de chocolat',
  desc: 'Sans lactose · Sans sucre raffiné · Farine complète',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Œufs', qty: '4' },
        { name: 'Compote', qty: '250 g' },
        { name: 'Farine complète', qty: '250 g' },
        { name: 'Levure chimique', qty: '13 g' },
        { name: 'Chocolat noir (pépites)', qty: '125 g' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Mélanger',
          text: "Battre les œufs avec la compote jusqu'à obtenir un mélange homogène.",
        },
        { label: 'Incorporer', text: 'Ajouter la farine et la levure, bien mélanger.' },
        { label: 'Pépites', text: "Hacher le chocolat grossièrement et l'incorporer à la pâte." },
        {
          label: 'Cuisson',
          text: 'Verser dans les moules et enfourner à 180°C pendant 20 à 25 minutes.',
        },
      ],
    },
  ],
  notes: [
    {
      label: 'Astuce :',
      text: 'Pas besoin de laisser reposer la pâte. Enfourner directement !',
    },
  ],
};
const GAUFRES_CHOCOLAT: RecipeCard = {
  theme: 'caramel',
  emoji: '🧇',
  tag: 'Gaufrier · 3–5 min par gaufre · ~17 pièces (40–50 g)',
  title: 'Gaufres aux pépites de chocolat',
  desc: 'Sans lactose · Sans sucre raffiné · Farine complète',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Œufs', qty: '4' },
        { name: 'Compote', qty: '250 g' },
        { name: 'Farine complète', qty: '250 g' },
        { name: 'Levure chimique', qty: '13 g' },
        { name: "Lait d'amande", qty: '150 ml' },
        { name: 'Margarine végétale', qty: '25 g' },
        { name: 'Chocolat noir (optionnel)', qty: '125 g' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        { label: 'Mélanger', text: 'Battre les œufs avec la compote et la margarine fondue.' },
        {
          label: 'Incorporer',
          text: "Ajouter la farine et la levure, puis le lait d'amande progressivement pour une pâte fluide. Ajouter les pépites si souhaité.",
        },
        { label: 'Repos', text: 'Laisser reposer la pâte 15 à 30 minutes à température ambiante.' },
        { label: 'Cuisson', text: 'Faire chauffer le gaufrier et cuire 3 à 5 minutes par gaufre.' },
      ],
    },
  ],
  notes: [
    {
      label: 'Astuce :',
      text: 'Utiliser une margarine végétale pour garder la recette sans lactose.',
    },
  ],
};
const BISCUITS_ORANGE: RecipeCard = {
  theme: 'terracotta',
  emoji: '🍊',
  tag: 'Four · 180°C · 15–18 min · ~40 mini cookies',
  title: "Biscuits pelures d'orange & pépites de chocolat",
  desc: 'Anti-gaspi · Orange & chocolat noir',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: "Pelures d'orange", qty: '1' },
        { name: 'Sucre', qty: '150 g' },
        { name: 'Margarine végétale', qty: '85 g' },
        { name: 'Œuf', qty: '1' },
        { name: 'Farine', qty: '280 g' },
        { name: 'Levure chimique', qty: '½ sachet' },
        { name: 'Sel', qty: '1 pincée' },
        { name: 'Chocolat noir dessert', qty: '½ tablette' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Pelures',
          text: "Faire bouillir les pelures 8 à 10 min. Changer l'eau, recuire 15 min. Égoutter et laisser tiédir.",
        },
        { label: 'Base', text: "Mélanger le sucre, la margarine fondue et l'œuf." },
        {
          label: 'Mixer',
          text: 'Mixer finement les pelures tièdes et les incorporer à la préparation.',
        },
        {
          label: 'Pâte',
          text: "Incorporer la farine, la levure et le sel. Si trop sèche, ajouter un filet de jus d'orange ou lait végétal.",
        },
        {
          label: 'Chocolat',
          text: 'Concasser le chocolat, incorporer à la spatule. Réfrigérer 15 min.',
        },
        {
          label: 'Cuisson',
          text: 'Former des boules, déposer sur plaque. Enfourner à 180°C, 15 à 18 min. Laisser refroidir sur la plaque.',
        },
      ],
    },
  ],
  notes: [
    {
      label: 'Conservation :',
      text: '5–6 jours en boîte hermétique, se congèle très bien.'
    },
    {
      label: 'Variante :',
      text: 'une pincée de cannelle ou cardamome se marie parfaitement.' },
  ],
};
const MINI_COOKIES_EXPRESS_AMANDE: RecipeCard = {
  theme: "gold",
  emoji: '🍪',
  tag: 'Four · 180°C · 15–20 min · Pour ~12 mini-cookies',
  title: 'Mini cookies express',
  labels: ["sans-gluten", "sans-lactose"],
  desc: 'Sans sucre raffiné · 3 ingrédients · Par @soeursaunaturel',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: "Poudre d'amande", qty: '125 g' },
        { name: 'Compote de pommes sans sucre ajouté', qty: '100 g' },
        { name: 'Pépites de chocolat noir', qty: 'q.s.' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Pâte',
          text: 'Mélanger la poudre d’amande, la compote et les pépites de chocolat jusqu’à obtenir une pâte homogène.'
        },
        {
          label: 'Façonnage',
          text: 'Former de petits cookies avec les mains.'
        },
        {
          label: 'Plaque',
          text: 'Déposer les cookies sur une plaque recouverte de papier cuisson.'
        },
        {
          label: 'Cuisson',
          text: 'Enfourner à 180°C pendant 15 à 20 min jusqu’à ce que les cookies soient légèrement dorés.Laisser refroidir quelques minutes avant de déguster.'
        }
      ]
    }
  ],
  notes: [
    {
          label: 'Astuce :',
          text: 'Twistez la recette en ajoutant des compotes aromatisées, par exemple pomme-marron !'
    }
  ]
};
const BISCUITS_NOISETTE_COMPOTE_CHOCOLAT: RecipeCard = {
  theme: "caramel",
  emoji: '🍪',
  tag: 'Four · 180°C · 15 min · Pour ~10 à 12 biscuits',
  title: 'Biscuits noisette, compote & chocolat',
  desc: '3 ingrédients · Sans gluten · Moelleux à cœur & croquants sur les bords',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Poudre de noisette', qty: '60 g' },
        { name: 'Compote de pommes', qty: '2 càs' },
        { name: 'Chocolat noir (ou chocolat parfumé orange)', qty: 'q.s.' },
        { name: 'Noisettes entières', qty: 'q.s.' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Pâte',
          text: 'Mélanger la poudre de noisette avec la compote de pommes jusqu’à obtenir une pâte homogène. Ajuster la texture avec un peu de poudre de noisette si trop humide.'
        },
        {
          label: 'Façonnage',
          text: 'Former des petites boules, puis les aplatir légèrement sur une plaque recouverte de papier cuisson.'
        },
        {
          label: 'Cuisson',
          text: 'Cuire à 180°C pendant environ 15 min jusqu’à ce que les bords soient légèrement dorés.'
        },
        {
          label: 'Garniture',
          text: 'À la sortie du four, ajouter un petit morceau de chocolat et une noisette sur chaque biscuit.'
        },
        {
          label: 'Refroidissement',
          text: 'Laisser refroidir complètement : les biscuits durcissent en refroidissant.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Texture :',
      text: 'Croustillant à l’extérieur, fondant à l’intérieur.'
    },
    {
      label: 'Astuce :',
      text: 'Varier les chocolats (orange, dessert, etc.) pour changer le parfum.'
    },
    {
      label: 'Principe :',
      text: 'Recette minimaliste, 3 ingrédients de base + toppings gourmands.'
    }
  ]
};
const CLAFOUTIS_NECTARINES: RecipeCard = {
  theme: 'gold',
  emoji: '🍑',
  tag: 'Four · 180°C · 35–40 min · Pour 4 à 6',
  title: 'Clafoutis de nectarines',
  desc: 'Fruits fondants · Léger & fruité',
  labels: ["sans-lactose", "sans-gluten", "vegetarien"],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Nectarines (bien mûres)', qty: '5 à 6' },
        { name: 'Œufs', qty: '3' },
        { name: 'Sucre', qty: '80 g' },
        { name: 'Farine de riz ou maïzena', qty: '50 g' },
        { name: 'Crème de coco ou lait d’amande', qty: '200 ml' },
        { name: 'Arôme vanille ou sucre vanillé', qty: '1 càc' },
        { name: 'Sel', qty: '1 pincée' },
        { name: 'Huile de coco (moule)', qty: 'q.s.' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Four',
          text: 'Préchauffer le four à 180°C.'
        },
        {
          label: 'Fruits',
          text: 'Éplucher et couper les nectarines en quartiers. Les disposer dans un moule huilé à l’huile de coco.'
        },
        {
          label: 'Appareil',
          text: 'Battre les œufs avec le sucre jusqu’à obtenir un mélange légèrement mousseux.'
        },
        {
          label: 'Mélange',
          text: 'Ajouter la farine de riz, la crème végétale, la vanille et le sel. Bien homogénéiser.'
        },
        {
          label: 'Assemblage',
          text: 'Verser l’appareil sur les nectarines.'
        },
        {
          label: 'Cuisson',
          text: 'Cuire 35 à 40 min jusqu’à ce que le clafoutis soit doré et légèrement tremblotant au centre.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Astuce :',
      text: 'Un filet de jus de citron sur les nectarines avant cuisson relève naturellement le goût du fruit.'
    }
  ]
};
const TARTE_MIRABELLES_SPECULOOS: RecipeCard = {
  theme: 'caramel',
  emoji: '🫐',
  tag: 'Four · 180°C · 30–40 min · Pour 6 à 8',
  title: 'Tarte mirabelles, spéculoos & amandes',
  desc: 'Fruits fondants · Notes caramélisées · Très simple à réaliser',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Pâte feuilletée', qty: '1' },
        { name: 'Mirabelles', qty: '500 à 700 g' },
        { name: 'Spéculoos', qty: '8 à 10 biscuits' },
        { name: "Poudre d'amande", qty: '50 à 80 g' },
        { name: 'Amandes effilées', qty: '1 poignée' },
        { name: 'Sucre vanillé', qty: '1 sachet' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Fond de tarte',
          text: 'Dérouler la pâte feuilletée dans un moule, puis piquer généreusement le fond à la fourchette.'
        },
        {
          label: 'Base',
          text: 'Réduire les spéculoos en poudre puis les mélanger avec la poudre d’amande.'
        },
        {
          label: 'Montage',
          text: 'Répartir ce mélange sur le fond de tarte de manière uniforme.'
        },
        {
          label: 'Fruits',
          text: 'Disposer les mirabelles sur toute la surface, face coupée vers le haut ou vers le bas selon préférence.'
        },
        {
          label: 'Finition',
          text: 'Parsemer d’amandes effilées puis saupoudrer de sucre vanillé.'
        },
        {
          label: 'Cuisson',
          text: 'Enfourner à 180°C pendant 30 à 40 min jusqu’à ce que la pâte soit bien dorée et les fruits fondants.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Astuce :',
      text: 'Le mélange spéculoos-poudre d’amande absorbe le jus des mirabelles et évite une tarte détrempée.'
    },
    {
      label: 'Variante :',
      text: 'Fonctionne également avec des quetsches, des prunes ou des abricots.'
    }
  ]
};
const MUFFINS_NUTELLA: RecipeCard = {
  theme: 'plum',
  emoji: '🧁',
  tag: 'Four · 140°C · 15 min',
  title: 'Muffins moelleux au Nutella',
  desc: "100% végétal · Poudre d'amande · Ultra moelleux",
  labels: ['vegetarien'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      subtitle: '(version x1,25 entre parenthèses)',
      items: [
        { name: 'Farine', qty: '300 g (375)' },
        { name: "Poudre d'amande", qty: '100 g (125)' },
        { name: 'Sucre blanc', qty: '170 g (200)' },
        { name: 'Sucre roux', qty: '30 g (50)' },
        { name: 'Sel', qty: '1 pincée' },
        { name: 'Levure chimique', qty: '1 sachet (1,25)' },
        { name: 'Huile végétale', qty: '125 ml (160)' },
        { name: 'Lait végétal', qty: '375 ml (470)' },
        { name: "Arôme d'amande amère", qty: '1 càc' },
        { name: 'Nutella', qty: '1 bonne cuillère / muffin' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Sec',
          text: "Mélanger la farine, la poudre d'amande, les sucres, le sel et la levure dans un grand saladier.",
        },
        {
          label: 'Liquide',
          text: "Ajouter l'huile végétale, le lait végétal et l'arôme d'amande amère. Mélanger jusqu'à pâte homogène.",
        },
        {
          label: 'Nutella',
          text: 'Répartir la pâte dans les moules. Déposer une bonne cuillère de Nutella au centre de chaque muffin.',
        },
        {
          label: 'Cuisson',
          text: 'Enfourner à 140°C pendant 15 min. Le cœur doit rester moelleux !',
        },
      ],
    },
  ],
  notes: [
    {
      label: 'Sans lactose :',
      text: 'Remplacer le Nutella par de la confiture ou une pâte à tartiner végétalienne.',
    },
  ],
};
const SNICKERS_MAISON_BANANE_CACAHUETE: RecipeCard = {
  theme: 'choco',
  emoji: '🍫',
  tag: 'Congélateur · 4 h · Sans cuisson · 8 à 12 bouchées',
  title: 'Snickers maison banane & cacahuète',
  desc: 'Gourmand · Facile · Sans cuisson · Version healthy · ✅ Validé',
  labels: ['sans-gluten'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Banane bien mûre', qty: '1' },
        { name: 'Chocolat noir', qty: '70 g' },
        { name: 'Beurre de cacahuète', qty: 'selon goût' },
        { name: 'Cacahuètes concassées', qty: 'selon goût' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Chocolat',
          text: 'Faire fondre le chocolat noir puis verser une fine couche au fond de chaque compartiment d’un bac à glaçons.'
        },
        {
          label: 'Banane',
          text: 'Déposer une rondelle de banane dans chaque compartiment.'
        },
        {
          label: 'Cacahuète',
          text: 'Ajouter une cuillère à café de beurre de cacahuète.'
        },
        {
          label: 'Croquant',
          text: 'Parsemer de cacahuètes concassées.'
        },
        {
          label: 'Finition',
          text: 'Recouvrir avec le reste du chocolat fondu jusqu’à remplir les compartiments.'
        },
        {
          label: 'Congélation',
          text: 'Placer au congélateur pendant au moins 4 heures.'
        },
        {
          label: 'Dégustation',
          text: 'Démouler puis déguster directement à la sortie du congélateur.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Astuce :',
      text: 'Utiliser un chocolat noir à 70 % minimum pour un résultat proche d’un vrai Snickers.'
    },
    {
      label: 'Variante :',
      text: 'Remplacer les cacahuètes par des amandes ou des noisettes concassées.'
    }
  ]
};
const SPRITZ_COCO: RecipeCard = {
  theme: 'terracotta',
  emoji: '🥥',
  tag: 'Four · 30 min · Biscuits',
  title: 'Spritz à la noix de coco',
  desc: 'Sablés fondants · Recette carnet',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients (proportions variables)',
      items: [
        { name: 'Sucre fin', qty: '300 g' },
        { name: 'Noix de coco râpée', qty: '150 g' },
        { name: 'Farine', qty: '1 kg' },
        { name: 'Margarine végétale', qty: '800 g' },
        { name: 'Œufs (jaunes)', qty: '8' },
        { name: 'Vanilles Sévillanes', qty: '2 sachets' },
        { name: 'Pincée de sel', qty: '1' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Travailler',
          text: "Travailler d'abord le sucre et la margarine jusqu'à obtenir un mélange crémeux.",
        },
        {
          label: 'Incorporer',
          text: 'Ajouter le reste des ingrédients. La pâte ne doit pas être trop mélangée.',
        },
        { label: 'Cuisson', text: 'Cuire 30 min à four doux (~160°C).' },
      ],
    },
  ],
};
const MARBRE_CHOCOLAT: RecipeCard = {
  theme: 'choco',
  emoji: '🍮',
  tag: 'Four · 180°C · 40–45 min',
  title: 'Marbré au chocolat',
  desc: 'Sans lactose · Facile & généreux',
  labels: ['sans-lactose'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Yaourt de brebis', qty: '120-125 g' },
        { name: 'Œufs', qty: '3' },
        { name: 'Sucre vergeoise', qty: '100 g' },
        { name: 'Sucre roux', qty: '50 g' },
        { name: 'Margarine végétale', qty: '120 g' },
        { name: 'Farine', qty: '230 g' },
        { name: 'Levure chimique', qty: '1 sachet' },
        { name: 'Cacao en poudre', qty: 'q.s.' },
        { name: 'Lait végétal (si nécessaire)', qty: 'quelques càs' },
        { name: 'Arôme amande amère', qty: '1 càc' },
        { name: 'Sel', qty: '1 pincée' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Mélanger',
          text: "Dans un bol, mélanger le yaourt, les sucres, et les oeufs. Faire fondre la margarine et l'ajouter à la préparation. Ajouter la farine, la levure, et le sel.",
        },
        {
          label: 'Diviser',
          text: "Diviser la pâte en 2. Dans l'une, ajouter le cacao. Si trop compacte, ajouter quelques càs de lait végétal.",
        },
        {
          label: 'Verser',
          text: 'Verser en alternance les 2 pâtes dans un moule pour obtenir un effet marbré.',
        },
        {
          label: 'Cuire',
          text: "Enfourner 45 min ou jusqu'à ce qu'une lame insérée au centre ressorte propre.",
        },
      ],
    },
  ],
  notes: [
    {
      label: 'Sans lactose :',
      text: 'Le yaourt de brebis est généralement mieux toléré que le lait de vache par les personnes sensibles au lactose.',
    },
  ],
};
const GATEAU_HARICOT_ROUGE_CHOCOLAT: RecipeCard = {
  theme: "plum",
  emoji: '🍫',
  tag: 'Four · 180°C · 30–35 min · Pour 6 à 8',
  title: 'Brownie aux haricots rouges',
  labels: ["sans-gluten", "sans-lactose"],
  desc: 'Moelleux · Riche en chocolat · Surprenant & gourmand',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Haricots rouges cuits et égouttés', qty: '425 g' },
        { name: 'Œufs', qty: '4' },
        { name: "Poudre d'amande", qty: '85 g' },
        { name: 'Cacao non sucré', qty: '68 g' },
        { name: "Sirop d'érable", qty: '170 g' },
        { name: "Chocolat noir", qty: '1 tablette' },
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Four',
          text: 'Préchauffer le four à 180°C.'
        },
        {
          label: 'Haricots',
          text: 'Rincer et égoutter soigneusement les haricots rouges.'
        },
        {
          label: 'Mixage',
          text: 'Mixer les haricots rouges avec les œufs jusqu’à obtenir une préparation lisse.'
        },
        {
          label: 'Pâte',
          text: 'Ajouter la poudre d’amande, le cacao et le sirop d’érable. Mixer ou mélanger jusqu’à homogénéisation complète.'
        },
        {
          label: 'Pépites',
          text: 'Réduire la tablette de chocolat en grosses pépites et les ajouter à la pâte en mélangeant (sans mixer).'
        },
        {
          label: 'Cuisson',
          text: 'Verser dans un moule huilé ou chemisé et cuire 30 à 35 min à 180°C.'
        },
        {
          label: 'Repos',
          text: 'Laisser refroidir avant de démouler. La texture se raffermit en refroidissant.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Astuce :',
      text: 'Personne ne devine la présence des haricots rouges ; ils apportent surtout du moelleux !'
    },
    {
      label: 'Variante :',
      text: 'Ajouter des pépites de caramel ou quelques noix concassées pour plus de gourmandise.'
    }
  ]
};

export const GOUTERS_DESSERTS: RecipeSection = {
  label: 'Goûters & desserts',
  cards: [
    OURSONS_CHOCOLAT,
    GAUFRES_CHOCOLAT,
    BISCUITS_ORANGE,
    MINI_COOKIES_EXPRESS_AMANDE,
    BISCUITS_NOISETTE_COMPOTE_CHOCOLAT,
    CLAFOUTIS_NECTARINES,
    TARTE_MIRABELLES_SPECULOOS,
    MUFFINS_NUTELLA,
    SNICKERS_MAISON_BANANE_CACAHUETE,
    SPRITZ_COCO,
    MARBRE_CHOCOLAT,
    GATEAU_HARICOT_ROUGE_CHOCOLAT,
  ],
};
