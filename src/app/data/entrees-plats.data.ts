import { RecipeCard, RecipeSection } from '../models/recipe.models';

const ARTICHAUTS_VAPEUR: RecipeCard = {
  theme: 'green',
  emoji: '🥬',
  tag: 'Vapeur · ~180°C · 30–45 min',
  title: 'Artichauts vapeur & vinaigrette',
  desc: 'Végétarien · Simple & savoureux',
  labels: ['vegetarien', 'sans-gluten', 'sans-lactose'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Artichauts (gros ou moyens)', qty: '2 à 4' },
        { name: 'Feuille de laurier (optionnelle)', qty: '1' },
        { name: 'Sel', qty: 'q.s.' },
      ],
    },
    {
      type: 'ingredients',
      title: 'Vinaigrette',
      items: [
        { name: 'Huile (olive ou neutre)', qty: '3 càs' },
        { name: 'Vinaigre (vin rouge ou cidre)', qty: '1 càs' },
        { name: 'Moutarde', qty: '1 càc' },
        { name: 'Échalote hachée (optionnelle)', qty: '1' },
        { name: 'Sel, poivre', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Préparer',
          text: 'Couper la tige à ras, retirer les premières feuilles dures. Rincer soigneusement.',
        },
        {
          label: 'Cuisson',
          text: 'Placer dans un plat tête vers le haut. Ajouter sel et laurier. Mode vapeur ou combiné à ~180°C, 30 à 45 min.',
        },
        {
          label: 'Vinaigrette',
          text: "Mélanger moutarde, vinaigre, sel, poivre. Fouetter en ajoutant l'huile pour émulsionner. Incorporer l'échalote.",
        },
      ],
    },
  ],
  notes: [
    { parts: [{ label: 'Astuce :', text: "Prêts quand une feuille s'arrache facilement." }] },
  ],
};

const BRUSCHETTA: RecipeCard = {
  theme: 'terracotta',
  emoji: '🍞',
  tag: 'Four · ~200°C · 5–10 min',
  title: 'Bruschetta',
  desc: '3 variantes de garnitures',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Pain (baguette ou ciabatta)', qty: 'selon convives' },
        { name: "Huile d'olive", qty: 'généreusement' },
        { name: 'Ail', qty: '1 gousse' },
      ],
    },
    {
      type: 'steps',
      title: 'Base',
      items: [
        {
          label: 'Four',
          text: "Préchauffer à ~200°C. Badigeonner le pain légèrement d'huile d'olive.",
        },
        {
          label: 'Griller',
          text: "Faire griller au four 5 à 10 min jusqu'à ce que ce soit croustillant.",
        },
        { label: 'Ail', text: "Frotter une gousse d'ail sur le pain chaud pour plus de goût." },
      ],
    },
    {
      type: 'variantes',
      title: 'Garnitures',
      style: 'margin-top:20px',
      items: [
        { label: 'Version 1', text: 'Tomates · Oignon · Avocat · Chèvre' },
        { label: 'Version 2', text: 'Tomates · Oignon · Chorizo' },
        { label: 'Version 3', text: 'Tomates · Mozzarella · Avocat' },
      ],
    },
  ],
};

const GNOCCHIS_MAISON: RecipeCard = {
  theme: 'navy',
  emoji: '🥔',
  tag: 'Pour 1 personne · Prêts en ~45 min',
  title: 'Gnocchis maison',
  desc: 'Végétarien · Pommes de terre farineuses',
  labels: ['vegetarien'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Pommes de terre (type bintje)', qty: '150 g' },
        { name: 'Farine (ajuster selon texture)', qty: '~100 g' },
        { name: 'Œuf', qty: '½' },
        { name: 'Sel', qty: 'q.s.' },
        { name: 'Muscade ou parmesan (optionnel)', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Cuire',
          text: "Cuire dans l'eau bouillante salée 20 à 30 min. Égoutter et éplucher encore chaudes (la peau part seule).",
        },
        {
          label: 'Écraser',
          text: "Écraser à la fourchette jusqu'à purée fine sans morceaux. Laisser tiédir.",
        },
        {
          label: 'Pâte',
          text: "Ajouter l'œuf, le sel et la muscade. Incorporer la farine progressivement jusqu'à ce que ça ne colle plus. Ne pas trop pétrir.",
        },
        {
          label: 'Façonner',
          text: 'Rouler en boudin de ~2 cm, re-fariner, couper en tronçons de 2 cm.',
        },
        {
          label: 'Cuisson',
          text: "Plonger dans l'eau bouillante salée. Retirer à l'écumoire dès qu'ils remontent à la surface (1 à 2 min).",
        },
      ],
    },
  ],
  notes: [
    {
      parts: [
        { label: 'Attention :', text: 'Ne pas trop pétrir — sinon les gnocchis seront durs.' },
      ],
    },
    {
      parts: [
        {
          label: 'Idées de sauce :',
          text: "Gorgonzola au mascarpone, fondu avec un peu d'eau de cuisson + topping noix concassées ou lardons grillés.",
        },
      ],
    },
  ],
};

const PATE_PIZZA: RecipeCard = {
  theme: 'teal',
  emoji: '🍕',
  tag: 'Four max 300°C · 7–10 min · Pour 2',
  title: 'Pâte à pizza maison',
  desc: 'Croustillante · Levure boulangère',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Farine T45 ou T55', qty: '250 g' },
        { name: 'Eau tiède', qty: '150 ml' },
        { name: 'Sel', qty: '5 g' },
        { name: 'Sucre', qty: '5 g' },
        { name: 'Levure boulangère sèche', qty: '3,5 g (ou 10 g fraîche)' },
        { name: "Huile d'olive", qty: '15 ml' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Levure',
          text: "Mélanger l'eau tiède avec le sucre et la levure. Laisser reposer 10 min jusqu'à ce que ça mousse.",
        },
        {
          label: 'Pâte',
          text: "Dans un saladier, verser la farine et le sel. Ajouter eau/levure puis l'huile d'olive. Pétrir 10 min.",
        },
        {
          label: 'Levée',
          text: "Couvrir d'un torchon humide. Laisser lever 1h à 1h30 dans un endroit tiède jusqu'à ce que la pâte double.",
        },
        {
          label: 'Façonnage',
          text: "Dégazer la pâte. Diviser en boules et étaler très finement — plus c'est fin, plus ce sera croustillant.",
        },
        {
          label: 'Cuisson',
          text: "Four au max (300°C) avec plaque ou pierre à pizza. Garnir et enfourner 7 à 10 min jusqu'à croûte bien dorée.",
        },
      ],
    },
  ],
  notes: [
    {
      parts: [
        {
          label: 'Astuce croustillante :',
          text: "Badigeonner légèrement les bords avec un peu d'huile d'olive avant d'enfourner.",
        },
      ],
    },
    {
      parts: [
        {
          label: 'Note :',
          text: 'Labels valables pour la pâte seule — les garnitures peuvent contenir fromage ou viande selon les goûts.',
        },
      ],
    },
  ],
};

const GRATIN_PDT_CHORIZO: RecipeCard = {
  theme: 'terracotta',
  emoji: '🌶️',
  tag: 'Four · Gratin · 2 couches',
  title: 'Gratin de pommes de terre au chorizo',
  desc: 'Généreux · Fromage fondu',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Pommes de terre (précuites)', qty: 'selon convives' },
        { name: 'Chorizo ou jambon tranché fin', qty: 'selon goût' },
        { name: 'Fromage à gratiner (comté, gruyère…)', qty: 'q.s.' },
        { name: 'Œufs, crème, lait', qty: 'q.s.' },
        { name: 'Sel, poivre, fines herbes', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Couche 1',
          text: 'Rondelles de PdT précuites, fromage, mélange œuf/crème/lait/sel/poivre/herbes, chorizo ou jambon.',
        },
        { label: 'Couche 2', text: 'Répéter : PdT, crème, chorizo, fromage.' },
        { label: 'Cuisson', text: "Cuire au four jusqu'à ce que le dessus soit bien gratiné." },
      ],
    },
  ],
};

const PARMENTIER_BUTTERNUT: RecipeCard = {
  theme: 'navy',
  emoji: '🍄‍🟫',
  tag: 'Four · Gratin · Végétarien',
  title: 'Parmentier de butternut végétarien',
  desc: 'Purée de butternut · Champignons & fromage',
  labels: ['vegetarien'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Courge butternut', qty: '1' },
        { name: 'Champignons finement émincés', qty: 'selon goût' },
        { name: 'Oignons', qty: 'selon goût' },
        { name: 'Margarine', qty: 'q.s.' },
        { name: 'Crème', qty: '1 càs' },
        { name: 'Muscade, sel, poivre', qty: 'q.s.' },
        { name: 'Fromage à gratiner', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Base',
          text: 'Faire revenir oignons et champignons dans la margarine. Placer dans un plat à gratin beurré.',
        },
        {
          label: 'Purée',
          text: "Cuire la butternut à l'eau. Réduire en purée avec sel, poivre, muscade, margarine et crème.",
        },
        {
          label: 'Gratiner',
          text: 'Étaler la purée sur la base champignons. Ajouter le fromage. Gratiner au four.',
        },
      ],
    },
  ],
};

const RISOTTO_CURRY_COCO: RecipeCard = {
  theme: 'teal',
  emoji: '🍚',
  tag: 'Wok · ~20 min de mijotage · Pour 2',
  title: 'Risotto curry, coco & poisson blanc',
  desc: 'Exotique · Lait de coco & épices',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Riz', qty: '2 portions' },
        { name: 'Poisson blanc', qty: '2 portions' },
        { name: 'Lait de coco', qty: '~300 ml' },
        { name: 'Lait + eau (cuisson)', qty: 'q.s.' },
        { name: 'Curry, piment de Cayenne', qty: 'selon goût' },
        { name: 'Fines herbes, sel, huile', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Riz',
          text: "Faire revenir le riz dans le wok avec un peu d'huile jusqu'à translucide.",
        },
        { label: 'Épices', text: 'Ajouter curry, piment de Cayenne, fines herbes et sel.' },
        {
          label: 'Coco',
          text: 'Ajouter le lait de coco. Mijoter en ajoutant lait et eau régulièrement.',
        },
        {
          label: 'Poisson',
          text: "Précuire le poisson, l'émietter et l'incorporer. Mijoter ~20 min en ajustant les épices.",
        },
      ],
    },
  ],
};

const PITA_POULET_BLAISE: RecipeCard = {
  theme: 'ink',
  emoji: '🫓',
  tag: 'Poêle · Recette de Blaise',
  title: 'Pita au poulet façon Blaise',
  desc: "Épices à l'espagnole · Chorizo & crème",
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Escalopes émincées', qty: '500 g' },
        { name: 'Oignons', qty: 'selon goût' },
        { name: 'Poivrons', qty: 'selon goût' },
        { name: 'Chorizo en dés', qty: 'selon goût' },
        { name: 'Lardons fumés', qty: 'selon goût' },
        { name: "Épices à l'espagnole", qty: 'q.s.' },
        { name: 'Crème liquide', qty: '25 cl' },
        { name: 'Gruyère râpé', qty: '1 sachet' },
        { name: 'Pains pita', qty: 'selon convives' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Cuire',
          text: "Faire revenir les escalopes émincées avec oignons, poivrons, chorizo, lardons et épices à l'espagnole.",
        },
        { label: 'Crème', text: 'Ajouter la crème liquide et le gruyère râpé. Laisser mijoter.' },
        {
          label: 'Servir',
          text: 'Garnir les pains pita humidifiés et chauffés avec la préparation.',
        },
      ],
    },
  ],
};

const TOURTE_ROQUEFORT: RecipeCard = {
  theme: 'plum',
  emoji: '🥧',
  tag: 'Four · Tourte · Recette de famille',
  title: 'Tourte au Roquefort',
  desc: 'Lardons, champignons & Roquefort',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Pâtes feuilletées', qty: '2' },
        { name: 'Pommes de terre Rosa', qty: '8' },
        { name: 'Roquefort', qty: '250 g' },
        { name: 'Lardons fumés', qty: 'selon goût' },
        { name: 'Champignons de Paris', qty: 'selon goût' },
        { name: 'Oignons', qty: '2' },
        { name: 'Crème fraîche', qty: '3 càs' },
        { name: 'Vin blanc', qty: 'un verre' },
        { name: 'Sel, poivre, muscade', qty: 'q.s.' },
        { name: "Jaune d'œuf (dorure)", qty: '1' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'PdT',
          text: 'Couper les PdT en rondelles fines. Disposer dans une passette avec sel, poivre et muscade (1h).',
        },
        {
          label: 'Garniture',
          text: "Faire revenir lardons puis champignons. Émincer les oignons et les faire revenir dans un peu de vin blanc jusqu'à transparence.",
        },
        {
          label: 'Montage',
          text: 'Sur la 1ère pâte : couche de PdT, puis lardons et Roquefort en dés. Terminer par une couche de PdT.',
        },
        {
          label: 'Fermer',
          text: "Refermer la tourte et badigeonner d'un jaune d'œuf. Cuire au four.",
        },
        {
          label: 'Finition',
          text: 'Ajouter 3 càs de crème fraîche 5 min avant de servir. Laisser cuire encore 5 min.',
        },
      ],
    },
  ],
};

const HARICOTS_BLANCS_TOMATE: RecipeCard = {
  theme: 'green',
  emoji: '🍅',
  tag: 'Wok · Mijoté',
  title: 'Haricots blancs à la tomate',
  desc: 'Simple & réconfortant · Option piment de Cayenne',
  labels: ['vegetarien'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Haricots blancs (boîte)', qty: '1' },
        { name: 'Sauce tomate', qty: 'selon goût' },
        { name: 'Oignon', qty: 'un peu' },
        { name: 'Ail, persil, sel, poivre', qty: 'q.s.' },
        { name: 'Vin blanc', qty: '¼ verre' },
        { name: 'Beurre', qty: '~100 g' },
        { name: 'Crème fraîche + Vache qui rit', qty: 'en fin' },
        { name: 'Piment de Cayenne (optionnel)', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Wok',
          text: 'Mettre tous les ingrédients dans le wok (haricots, sauce tomate, oignon, ail, persil, sel, poivre, vin blanc, beurre). Laisser mijoter.',
        },
        {
          label: 'Finition',
          text: 'En fin de cuisson, ajouter crème fraîche et Vache qui rit. Éventuellement saupoudrer de piment de Cayenne.',
        },
      ],
    },
  ],
};

const FILETS_EGELFIN: RecipeCard = {
  theme: 'navy',
  emoji: '🐟',
  tag: 'Four · Rapide',
  title: "Filets d'églefin marinade moutarde-citron",
  desc: 'Léger & parfumé',
  labels: ['sans-lactose', 'sans-gluten'],
  groups: [
    {
      type: 'ingredients',
      title: 'Marinade',
      items: [
        { name: "Filets d'églefin", qty: 'selon convives' },
        { name: 'Jus de citron', qty: 'q.s.' },
        { name: "Huile d'olive", qty: '6 càs' },
        { name: 'Moutarde', qty: '2 càc' },
        { name: 'Ail', qty: 'selon goût' },
        { name: 'Sel, poivre noir, persil', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Marinade',
          text: "Mélanger jus de citron, huile d'olive, moutarde et ail dans un bol.",
        },
        {
          label: 'Poisson',
          text: 'Étaler la marinade sur les filets au pinceau. Saupoudrer de sel, poivre noir et persil.',
        },
        { label: 'Cuisson', text: "Cuire au four selon l'épaisseur des filets." },
      ],
    },
  ],
};

const CURRY_PATATES_POISSON: RecipeCard = {
  theme: 'caramel',
  emoji: '🐠',
  tag: 'Wok · Pour 3 repas environ',
  title: 'Curry de patates & poisson blanc coco',
  desc: 'Safran, cumin, coriandre · Lait de coco',
  labels: ['sans-lactose', 'sans-gluten'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Pommes de terre (précuites en dés)', qty: 'selon convives' },
        { name: 'Poisson blanc (vapeur, émietté)', qty: '2 morceaux' },
        { name: 'Lait de coco (conserve)', qty: '1' },
        { name: 'Jus de citron', qty: 'q.s.' },
        { name: 'Curry, ail, sel, poivre', qty: 'q.s.' },
        { name: 'Safran, cumin, coriandre, piment', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Wok',
          text: 'Mettre tous les ingrédients dans le wok : PdT précuites, lait de coco, poisson émietté, jus de citron.',
        },
        {
          label: 'Épices',
          text: 'Ajouter curry, ail, sel, poivre, safran, cumin, coriandre, piment. Mijoter et ajuster selon les goûts.',
        },
      ],
    },
  ],
};

export const ENTREES_PLATS: RecipeSection = {
  label: 'Entrées & Plats',
  cards: [
    ARTICHAUTS_VAPEUR,
    BRUSCHETTA,
    GNOCCHIS_MAISON,
    PATE_PIZZA,
    GRATIN_PDT_CHORIZO,
    PARMENTIER_BUTTERNUT,
    RISOTTO_CURRY_COCO,
    PITA_POULET_BLAISE,
    TOURTE_ROQUEFORT,
    HARICOTS_BLANCS_TOMATE,
    FILETS_EGELFIN,
    CURRY_PATATES_POISSON,
  ],
};
