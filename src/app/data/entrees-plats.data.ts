import { RecipeCard, RecipeSection } from '../models/recipe.models';
import { ingredients, notes, recipe, steps, variantes } from '../models/recipe.builder';

const ARTICHAUTS_VAPEUR: RecipeCard = recipe({
  theme: 'green',
  emoji: '🥬',
  tag: 'Vapeur · ~180°C · 30–45 min',
  title: 'Artichauts vapeur & vinaigrette',
  desc: 'Végétarien · Simple & savoureux',
  labels: ['vegetarien', 'sans-gluten', 'sans-lactose'],
  groups: [
    ingredients([
      ['Artichauts (gros ou moyens)', '2 à 4'],
      ['Feuille de laurier (optionnelle)', '1'],
      ['Sel', 'q.s.'],
    ]),
    ingredients(
      [
        ['Huile (olive ou neutre)', '3 càs'],
        ['Vinaigre (vin rouge ou cidre)', '1 càs'],
        ['Moutarde', '1 càc'],
        ['Échalote hachée (optionnelle)', '1'],
        ['Sel', 'q.s.'],
        ['Poivre', 'q.s.'],
      ],
      'Vinaigrette',
    ),
    steps([
      [
        'Préparer',
        'Couper la tige à ras, retirer les premières feuilles dures. Rincer soigneusement.',
      ],
      [
        'Cuisson',
        'Placer dans un plat tête vers le haut. Ajouter sel et laurier. Vapeur ou combiné à ~180°C, 30 à 45 min.',
      ],
      [
        'Vinaigrette',
        "Mélanger moutarde, vinaigre, sel, poivre. Fouetter en ajoutant l'huile pour émulsionner. Incorporer l'échalote.",
      ],
    ]),
  ],
  notes: notes([['Astuce :', "Prêts quand une feuille s'arrache facilement."]]),
});
const CREMEUX_PETIT_POIS_OEUFS_MOLLETS: RecipeCard = recipe({
  theme: 'green',
  emoji: '🫛',
  tag: 'Mixeur · 15 min · Pour 2 à 4',
  title: 'Crémeux de petits pois aux œufs mollets',
  labels: ['vegetarien'],
  desc: 'Frais · Crémeux · Inspiration @labretonnequicuisine',
  groups: [
    ingredients([
      ['Petits pois', '200 g'],
      ['Haricots blancs égouttés', '200 g', 'Haricots blancs'],
      ['Ricotta', '2 càs'],
      ['Purée de sésame (tahini)', '1 càs'],
      ['Jus de citron', '1/2 citron'],
      ["Huile d'olive", '1 filet + cuisson'],
      ['Persil', 'q.s.'],
      ['Œufs', '2 à 4'],
      ['Origan', 'q.s.'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
    ]),
    steps([
      ['Petits pois', 'Faire revenir 3 min à la poêle avec un filet d’huile d’olive.'],
      [
        'Crémeux',
        'Mixer petits pois, haricots blancs, ricotta, tahini, citron, persil et huile d’olive jusqu’à texture lisse.',
      ],
      ['Œufs mollets', 'Cuire 6 à 7 min puis refroidir immédiatement dans l’eau froide.'],
      ['Assemblage', 'Déposer le crémeux et ajouter les œufs coupés en deux.'],
      ['Finition', 'Assaisonner sel, poivre, origan.'],
    ]),
  ],
  notes: notes([
    ['Variante :', 'Remplacer la ricotta par du chèvre frais.'],
    ['Service :', 'Entrée, tartinade ou pain grillé.'],
  ]),
});
const BRUSCHETTA: RecipeCard = recipe({
  theme: 'terracotta',
  emoji: '🍞',
  tag: 'Four · ~200°C · 5–10 min',
  title: 'Bruschetta',
  desc: '3 variantes de garnitures',
  groups: [
    ingredients([
      ['Pain (baguette ou ciabatta)', 'selon convives'],
      ["Huile d'olive", 'généreusement'],
      ['Ail', '1 gousse'],
    ]),
    steps([
      ['Four', "Préchauffer à ~200°C. Badigeonner le pain d'huile d'olive."],
      ['Griller', "Cuire 5 à 10 min jusqu'à croustillant."],
      ['Ail', "Frotter une gousse d'ail sur le pain chaud."],
    ]),
    variantes([
      ['Version 1', 'Tomates · Oignon · Avocat · Chèvre'],
      ['Version 2', 'Tomates · Oignon · Chorizo'],
      ['Version 3', 'Tomates · Mozzarella · Avocat'],
    ]),
  ],
});
const GAUFRES_PATATE_DOUCE_CURRY: RecipeCard = recipe({
  theme: 'gold',
  emoji: '🧇',
  tag: 'Gaufrier · 20–25 min · Pour 4',
  title: 'Gaufres de patate douce au curry',
  desc: 'Moelleuses · Légèrement épicées · Salées · Sans prise de tête',
  groups: [
    ingredients([
      ['Patates douces', '375 g'],
      ['Œufs', '3'],
      ['Farine de blé', '90 g', 'Farine'],
      ['Levure chimique', '1 sachet'],
      ["Huile d'olive", '1 càs'],
      ['Sel', '1 pincée'],
      ['Curry', '1 petite càc'],
      ['Cube de bouillon', '1', 'Bouillon'],
    ]),
    steps([
      ['Patate douce', 'Cuire avec cube de bouillon jusqu’à tendreté.'],
      ['Base', 'Mélanger œufs, farine, levure, huile, sel et curry.'],
      ['Ajout', 'Incorporer patates écrasées.'],
      ['Pâte', 'Mélanger homogènement.'],
      ['Cuisson', 'Gaufrier chaud jusqu’à doré et croustillant.'],
    ]),
  ],
  notes: notes([['Astuce :', 'Servir avec sauce yaourt citronné ou salade.']]),
});
const TARTE_CROUSTILLANTE_THON_CONCOMBRE: RecipeCard = recipe({
  theme: 'teal',
  emoji: '🥒',
  tag: 'Four · 180°C · 30 min · Pour 4 à 6',
  title: 'Tarte croustillante thon & concombre',
  desc: 'Fraîche · Croustillante · Idéale en été · Par @charlie.ma.vie',
  groups: [
    ingredients([
      ['Pâte brisée', '1'],
      ["Huile d'olive", 'q.s.'],
      ['Graines de sésame noir et blanc', 'q.s.', 'Sésame'],
      ['Thon au naturel', '3 boîtes'],
      ['Fromage à tartiner (type St Môret)', '5 càs'],
      ['Oignon rouge émincé', '1/2', 'Oignon rouge'],
      ['Citron (zeste)', '1'],
      ['Ciboulette fraîche', 'q.s.'],
      ['Concombre', '1 à 2 selon taille'],
    ]),
    steps([
      [
        'Fond de tarte',
        "Dérouler la pâte sur l'envers d'un moule. Badigeonner d'huile d'olive et parsemer de graines de sésame.",
      ],
      ['Cuisson', 'Cuire à 180°C ~30 min jusqu’à doré et croustillant. Laisser refroidir.'],
      ['Crème de thon', 'Mélanger thon égoutté, fromage, oignon, zeste de citron et ciboulette.'],
      ['Concombre', 'Couper en fines rondelles, saler légèrement, laisser dégorger puis éponger.'],
      ['Montage', 'Étaler crème de thon puis concombre sur la pâte refroidie.'],
      ['Finition', "Ajouter huile d'olive, zestes, ciboulette et sésame."],
    ]),
  ],
  notes: notes([
    ['Astuce clé :', 'Le concombre doit être dégorgé pour éviter l’eau dans la tarte.'],
    ['Variante :', 'Remplacer fromage à tartiner par chèvre frais.'],
  ]),
});
const TOURTE_ROQUEFORT: RecipeCard = recipe({
  theme: 'plum',
  emoji: '🥧',
  tag: 'Four · Tourte · Recette de famille',
  title: 'Tourte au Roquefort',
  desc: 'Lardons, champignons & Roquefort',
  groups: [
    ingredients([
      ['Pâte feuilletée', '2'],
      ['Pommes de terre Rosa', '8', 'Pommes de terre'],
      ['Roquefort', '250 g'],
      ['Lardons fumés', 'selon goût', 'Lardons'],
      ['Champignons de Paris', 'selon goût', 'Champignons'],
      ['Oignon', '2'],
      ['Crème fraîche', '3 càs'],
      ['Vin blanc', 'un verre'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
      ['Muscade', 'q.s.'],
      ["Jaune d'œuf (dorure)", '1', "Jaune d'œuf"],
    ]),
    steps([
      ['PdT', 'Couper en rondelles fines, saler, poivrer, muscade, laisser reposer 1h.'],
      ['Garniture', 'Faire revenir lardons, champignons et oignons au vin blanc.'],
      ['Montage', 'Alterner PdT, garniture et Roquefort.'],
      ['Fermer', "Refermer et dorer au jaune d'œuf."],
      ['Finition', 'Ajouter crème fraîche 5 min avant fin cuisson.'],
    ]),
  ],
});
const FLAN_POIREAU_SAUMON: RecipeCard = recipe({
  theme: 'teal',
  emoji: '🐟',
  tag: 'Four · 180°C · 25–30 min · Pour 4',
  title: 'Flan poireau-saumon',
  desc: 'Léger & savoureux',
  labels: ['sans-gluten', 'sans-lactose'],
  groups: [
    ingredients([
      ['Poireaux', '3'],
      ['Saumon frais', '200 g'],
      ['Œufs', '4'],
      ['Crème de coco', '200 ml'],
      ['Vin blanc', 'pour cuisson'],
      ['Aneth', 'généreusement'],
      ["Huile d'olive", 'q.s.'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
    ]),
    steps([
      ['Poireaux', 'Faire revenir 15 min avec vin blanc jusqu’à évaporation.'],
      ['Saumon', 'Ajouter en morceaux et cuire avec poireaux.'],
      ['Appareil', 'Battre œufs, crème, aneth, sel, poivre.'],
      ['Mélange', 'Incorporer poireaux et saumon.'],
      ['Cuisson', '180°C 25–30 min jusqu’à prise.'],
    ]),
  ],
  notes: notes([
    ['Conservation :', '2 jours max au réfrigérateur.'],
    ['Astuce texture :', 'Ajouter un œuf pour plus de fermeté.'],
  ]),
});
const FLAN_THON_TOMATES_ORIGAN: RecipeCard = recipe({
  theme: 'terracotta',
  emoji: '🐟',
  tag: 'Four · 180°C · 25–30 min · Pour 4',
  title: 'Flan thon tomates origan',
  labels: ['sans-gluten', 'sans-lactose'],
  desc: 'Thon & tomates · Chèvre fondant · Méditerranéen',
  groups: [
    ingredients([
      ['Thon au naturel', '100 g'],
      ['Tomates', '3 à 4'],
      ['Tomates pelées', "jus d'une boîte"],
      ['Bûche de chèvre', '150 g'],
      ['Œufs', '4'],
      ['Crème végétale', '200 ml'],
      ["Huile d'olive", 'q.s.'],
      ['Origan', 'q.s.'],
      ['Ail (optionnel)', '1 gousse'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
      ['Olives noires (optionnel)', 'quelques-unes', 'Olives'],
      ['Râpé de chèvre', '1 poignée'],
    ]),
    steps([
      ['Tomates', 'Faire réduire à la poêle avec ail, origan et jus de tomates pelées.'],
      ['Thon', 'Ajouter émietté en fin de réduction.'],
      ['Appareil', 'Battre œufs, crème, sel, poivre, origan.'],
      ['Mélange', 'Incorporer préparation tomate-thon.'],
      ['Montage', 'Ajouter chèvre en couches dans le moule.'],
      ['Cuisson', '180°C 25–30 min jusqu’à prise.'],
    ]),
  ],
  notes: notes([
    ['Point clé :', 'Bien réduire les tomates pour éviter un flan trop humide.'],
    ['Astuce :', 'Basilic possible à la place de l’origan.'],
  ]),
});
const FLAN_EPINARDS_CHEVRE: RecipeCard = recipe({
  theme: 'green',
  emoji: '🧀',
  tag: 'Four · 180°C · 25–30 min · Pour 4',
  title: 'Flan épinards-chèvre',
  desc: 'Sans pâte · Crémeux · Fondant',
  groups: [
    ingredients([
      ['Épinards surgelés', '500 g'],
      ['Bûche de chèvre', '150 g'],
      ['Œufs', '4'],
      ['Crème liquide', '200 ml'],
      ['Ail en poudre (optionnel)', 'q.s.', 'Ail'],
      ["Huile d'olive", 'q.s.'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
      ['Muscade', 'q.s.'],
    ]),
    steps([
      ['Épinards', 'Décongeler et essorer très fortement.'],
      ['Séchage', 'Revenir à la poêle pour évaporer l’eau.'],
      ['Appareil', 'Battre œufs, crème, muscade, sel, poivre.'],
      ['Mélange', 'Incorporer épinards.'],
      ['Montage', 'Ajouter chèvre.'],
      ['Cuisson', '180°C 25–30 min.'],
    ]),
  ],
  notes: notes([['Point clé :', 'Essorage indispensable pour la tenue du flan.']]),
});
const FLAN_PATATE_DOUCE_ROQUEFORT: RecipeCard = recipe({
  theme: 'terracotta',
  emoji: '🍠',
  tag: 'Four · 180°C · 25–30 min · Pour 4',
  title: 'Flan patate douce - Roquefort',
  desc: 'Fondant · Puissant · Noix optionnelles',
  labels: ['sans-gluten'],
  groups: [
    ingredients([
      ['Patates douces', '2 moyennes'],
      ['Œufs', '4'],
      ['Crème végétale', '200 ml'],
      ['Roquefort', '80 à 120 g'],
      ['Noix concassées (optionnel)', '1 poignée'],
      ['Thym', 'q.s.'],
      ['Romarin', 'q.s.'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
      ["Huile d'olive", 'q.s.'],
    ]),
    steps([
      ['Patate douce', 'Cuire puis réduire en purée grossière.'],
      ['Appareil', 'Battre œufs, crème, thym, sel, poivre.'],
      ['Mélange', 'Incorporer purée.'],
      ['Roquefort', 'Ajouter en morceaux sans trop mélanger.'],
      ['Option croquant', 'Ajouter noix.'],
      ['Cuisson', '180°C 25–30 min.'],
    ]),
  ],
  notes: notes([
    ['Astuce :', 'Thym/romarin renforcent la douceur.'],
    ['Remarque :', 'Sans lactose si Roquefort remplacé.'],
  ]),
});
const PITA_POULET_BLAISE: RecipeCard = recipe({
  theme: 'ink',
  emoji: '🫓',
  tag: 'Poêle · Recette de Blaise',
  title: 'Pita au poulet façon Blaise',
  desc: "Épices à l'espagnole · Chorizo & crème",
  groups: [
    ingredients([
      ['Escalopes émincées', '500 g'],
      ['Oignon', 'selon goût'],
      ['Poivrons', 'selon goût'],
      ['Chorizo en dés', 'selon goût', 'Chorizo'],
      ['Lardons fumés', 'selon goût', 'Lardons'],
      ["Épices à l'espagnole", 'q.s.'],
      ['Crème liquide', '25 cl'],
      ['Gruyère râpé', '1 sachet'],
      ['Pains pita', 'selon convives', 'Pain'],
    ]),
    steps([
      [
        'Cuire',
        "Faire revenir les escalopes émincées avec oignons, poivrons, chorizo, lardons et épices à l'espagnole.",
      ],
      ['Crème', 'Ajouter la crème liquide et le gruyère râpé. Laisser mijoter.'],
      ['Servir', 'Garnir les pains pita humidifiés et chauffés avec la préparation.'],
    ]),
  ],
});
const CHILI_CON_SIN_CARNE_EASY: RecipeCard = recipe({
  theme: 'terracotta',
  emoji: '🌶️',
  tag: '30 min · Pour 4 à 6',
  title: 'Chili con & sin carne EASY',
  desc: 'Ultra simple · Réconfortant · Version végétarienne ou carnée',
  groups: [
    ingredients([
      ['Sauce tomate', '1 grand bocal ou 500 g'],
      ['Haricots rouges', '1 boîte ou bocal'],
      ['Oignon', '1 à 2'],
      ['Merguez végétales ou bœuf haché', '300 à 400 g'],
      ['Mélange d’épices chili con carne', 'q.s.'],
      ['Riz', 'selon convives'],
      ['Cube de bouillon', '1', 'Bouillon'],
      ["Huile d'olive", '1 càs'],
      ['Persil frais', 'q.s.', 'Persil'],
      ['Crème fraîche', 'q.s.'],
    ]),
    steps([
      [
        'Riz',
        "Cuire le riz dans une eau salée avec un cube de bouillon et un filet d’huile d'olive.",
      ],
      ['Base', "Faire revenir les oignons émincés dans un peu d’huile d'olive."],
      [
        'Protéines',
        'Ajouter les merguez végétales coupées en morceaux ou le bœuf haché et faire revenir quelques minutes.',
      ],
      [
        'Sauce',
        'Ajouter la sauce tomate, les haricots rouges égouttés et les épices chili. Laisser mijoter une quinzaine de minutes.',
      ],
      [
        'Astuce texture',
        'Ajouter une petite louche d’eau de cuisson du riz dans la sauce pour lier et ajuster la consistance.',
      ],
      [
        'Service',
        'Servir le chili sur le riz, puis saupoudrer de persil frais et ajouter une cuillerée de crème fraîche.',
      ],
    ]),
  ],
});
const BLANQUETTE_VEGAN_CHAMPIGNONS: RecipeCard = recipe({
  theme: 'gold',
  emoji: '🍄',
  tag: 'Cocotte · 35–45 min · Pour 4 à 6',
  title: '"Blanquette" aux champignons',
  desc: 'Vegan · Crémeuse & bluffante',
  groups: [
    ingredients([
      ['Champignons de Paris', '300 g', 'Champignons'],
      ['Pleurotes', '300 g'],
      ['Carottes (du bouillon)', 'selon restes'],
      ['Margarine', '2 à 3 càs'],
      ['Farine de riz', '2 càs'],
      ['Bouillon de légumes', '500 ml', 'Bouillon'],
      ['Crème de soja', '150 à 200 ml'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
      ['Muscade', 'q.s.'],
      ['Riz (accompagnement)', 'selon convives'],
    ]),
    steps([
      [
        'Champignons',
        'Émincer les champignons de Paris et les pleurotes. Les faire revenir dans la margarine jusqu’à ce qu’ils soient bien dorés, puis réserver.',
      ],
      [
        'Sauce',
        'Dans la même casserole, faire fondre la margarine et ajouter la farine de riz pour former un roux. Délayer progressivement avec le bouillon de légumes en fouettant jusqu’à épaississement. Ajouter la crème de soja et mélanger jusqu’à obtenir une sauce lisse et onctueuse.',
      ],
      ['Assemblage', 'Incorporer les champignons et les carottes dans la sauce.'],
      ['Assaisonnement', 'Ajuster avec sel, poivre et muscade.'],
      ['Service', 'Servir chaud avec du riz.'],
    ]),
  ],
  notes: [
    {
      label: 'Esprit du plat :',
      text: 'Une blanquette revisitée sans viande ni produits laitiers, mais avec une texture très crémeuse.',
    },
    {
      label: 'Astuce :',
      text: 'Bien faire revenir les champignons pour concentrer les saveurs et éviter l’eau dans la sauce.',
    },
  ],
});
const HARICOTS_BLANCS_TOMATE: RecipeCard = recipe({
  theme: 'green',
  emoji: '🍅',
  tag: 'Wok · Mijoté',
  title: 'Haricots blancs à la tomate',
  desc: 'Simple & réconfortant · Option piment de Cayenne',
  labels: ['vegetarien'],
  groups: [
    ingredients([
      ['Haricots blancs (boîte)', '1'],
      ['Sauce tomate', 'selon goût'],
      ['Oignon', 'un peu'],
      ['Ail', 'q.s.'],
      ['Persil', 'q.s.'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
      ['Vin blanc', '¼ verre'],
      ['Beurre', '~100 g'],
      ['Crème fraîche', 'en fin'],
      ['Vache qui rit', 'en fin'],
      ['Piment de Cayenne (optionnel)', 'q.s.'],
    ]),
    steps([
      [
        'Wok',
        'Mettre tous les ingrédients dans le wok (haricots, sauce tomate, oignon, ail, persil, sel, poivre, vin blanc, beurre). Laisser mijoter.',
      ],
      [
        'Finition',
        'En fin de cuisson, ajouter crème fraîche et Vache qui rit. Éventuellement saupoudrer de piment de Cayenne.',
      ],
    ]),
  ],
});
const FILETS_EGELFIN: RecipeCard = recipe({
  theme: 'navy',
  emoji: '🐟',
  tag: 'Four · Rapide',
  title: "Filets d'églefin marinade moutarde-citron",
  desc: 'Léger & parfumé',
  labels: ['sans-lactose', 'sans-gluten'],
  groups: [
    ingredients([
      ["Filets d'églefin", 'selon convives'],
      ['Jus de citron', 'q.s.'],
      ["Huile d'olive", '6 càs'],
      ['Moutarde', '2 càc'],
      ['Ail', 'selon goût'],
      ['Sel', 'q.s.'],
      ['Poivre noir', 'q.s.', 'Poivre'],
      ['Persil', 'q.s.'],
    ]),
    steps([
      ['Marinade', "Mélanger jus de citron, huile d'olive, moutarde et ail dans un bol."],
      [
        'Poisson',
        'Étaler la marinade sur les filets au pinceau. Saupoudrer de sel, poivre noir et persil.',
      ],
      ['Cuisson', "Cuire au four selon l'épaisseur des filets."],
    ]),
  ],
});
const CURRY_PATATES_POISSON: RecipeCard = recipe({
  theme: 'caramel',
  emoji: '🐠',
  tag: 'Wok · Pour 3 repas environ',
  title: 'Curry de patates & poisson blanc coco',
  desc: 'Safran, cumin, coriandre · Lait de coco',
  labels: ['sans-lactose', 'sans-gluten'],
  groups: [
    ingredients([
      ['Pommes de terre (précuites en dés)', 'selon convives'],
      ['Poisson blanc (vapeur, émietté)', '2 morceaux'],
      ['Lait de coco (conserve)', '1'],
      ['Jus de citron', 'q.s.'],
      ['Curry', 'q.s.'],
      ['Ail', 'q.s.'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
      ['Safran', 'q.s.'],
      ['Cumin', 'q.s.'],
      ['Coriandre', 'q.s.'],
      ['Piment', 'q.s.'],
    ]),
    steps([
      [
        'Wok',
        'Mettre tous les ingrédients dans le wok : PdT précuites, lait de coco, poisson émietté, jus de citron.',
      ],
      [
        'Épices',
        'Ajouter curry, ail, sel, poivre, safran, cumin, coriandre, piment. Mijoter et ajuster selon les goûts.',
      ],
    ]),
  ],
});
const CURRY_HARICOTS_ROUGES_COCO: RecipeCard = recipe({
  theme: 'terracotta',
  emoji: '🍛',
  tag: 'Poêle · 25–35 min · Pour 3 à 4',
  title: 'Curry de haricots rouges au lait de coco',
  desc: 'Crémeux · Épicé · Végétarien · Ultra simple',
  groups: [
    ingredients([
      ['Haricots rouges', '1 boîte'],
      ['Coulis de tomates', '400 ml'],
      ['Lait de coco', '400 ml'],
      ['Ail', '2 gousses'],
      ['Oignon rouge', '1/2'],
      ["Huile d'olive", '1,5 càs'],
      ['Poivre', 'q.s.'],
      ['Curcuma', 'q.s.'],
      ['Cumin', 'q.s.'],
      ['Coriandre moulue ou fraîche', 'q.s.', 'Coriandre'],
      ['Piment de Cayenne', 'q.s.'],
      ['Sel', 'q.s.'],
    ]),
    steps([
      ['Base aromatique', "Faire revenir l’oignon rouge émincé et l’ail dans l’huile d'olive."],
      ['Sauce', 'Ajouter les haricots rouges, le coulis de tomates et le lait de coco.'],
      ['Épices', 'Assaisonner avec curcuma, cumin, coriandre, poivre et piment de Cayenne.'],
      [
        'Mijotage',
        'Laisser mijoter à feu doux jusqu’à réduction et texture épaisse, avec des oignons fondants.',
      ],
      [
        'Texture',
        'Mixer grossièrement une partie de la préparation pour obtenir une sauce plus liée.',
      ],
      ['Finition', 'Ajuster le sel au moment du service et ajouter de la coriandre fraîche.'],
    ]),
  ],
});
const RISOTTO_CURRY_COCO: RecipeCard = recipe({
  theme: 'teal',
  emoji: '🍚',
  tag: '~20 min de mijotage · Pour 2',
  title: 'Risotto curry, coco & poisson blanc',
  desc: 'Exotique · Lait de coco & épices',
  groups: [
    ingredients([
      ['Riz', '2 portions'],
      ['Poisson blanc', '2 portions'],
      ['Lait de coco', '~300 ml'],
      ['Lait', 'q.s.'],
      ['Eau', 'q.s.'],
      ['Curry', 'selon goût'],
      ['Piment de Cayenne', 'selon goût'],
      ['Fines herbes', 'q.s.'],
      ['Sel', 'q.s.'],
      ['Huile', 'q.s.'],
    ]),
    steps([
      ['Riz', "Faire revenir le riz dans le wok avec un peu d'huile jusqu'à translucide."],
      ['Épices', 'Ajouter curry, piment de Cayenne, fines herbes et sel.'],
      ['Coco', 'Ajouter le lait de coco. Mijoter en ajoutant lait et eau régulièrement.'],
      [
        'Poisson',
        "Précuire le poisson, l'émietter et l'incorporer. Mijoter ~20 min en ajustant les épices.",
      ],
    ]),
  ],
});
const NOODLES_CREMEUSES_CREVETTES: RecipeCard = recipe({
  theme: 'gold',
  emoji: '🍜',
  tag: '15 min · Pour 1',
  title: 'Noodles crémeuses aux crevettes',
  desc: 'Impro express · Crémeux & relevé',
  groups: [
    ingredients([
      ['Nouilles instantanées', '1 sachet'],
      ['Cube de bouillon', '1', 'Bouillon'],
      ["Jaune d'œuf", '1'],
      ['Mayonnaise', '1 càc'],
      ['Crème fraîche', '2 càs'],
      ['Œuf mollet', '1', 'Œufs'],
      ['Crevettes cuites', 'quelques-unes'],
      ['Huile pimentée', 'q.s.'],
      ['Coriandre', 'q.s.'],
      ['Trio de sésame', 'q.s.', 'Sésame'],
      ['Piment de Cayenne', 'q.s.'],
    ]),
    steps([
      ['Noodles', 'Cuire les noodles dans de l’eau avec un cube de bouillon.'],
      [
        'Base crémeuse',
        'Dans le bol de service, mélanger le jaune d’œuf, les sachets d’assaisonnement des noodles, la mayonnaise et la crème fraîche.',
      ],
      ['Émulsion', 'Prélever un peu d’eau de cuisson et l’ajouter progressivement au mélange.'],
      ['Assemblage', 'Égoutter les noodles puis les mélanger à la sauce.'],
      ['Garniture', 'Ajouter l’œuf mollet et les crevettes.'],
      ['Finition', 'Ajouter huile pimentée, coriandre, sésame et piment de Cayenne.'],
    ]),
  ],
});
const RAMEN_CURRY_ROUGE_COCO: RecipeCard = recipe({
  theme: 'plum',
  emoji: '🍜',
  tag: '25 min · Pour 2',
  title: 'Ramen au curry rouge & lait de coco',
  desc: 'Crémeux · Épicé · Ultra réconfortant',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    ingredients([
      ['Nouilles ramen', '2 à 3 portions'],
      ['Ail', '1 gousse'],
      ['Gingembre frais', '1 morceau'],
      ['Cébette', '1'],
      ['Pâte de curry rouge', '1 càs'],
      ['Beurre de cacahuète', '2 càs'],
      ['Sauce soja', '1 càs'],
      ['Lait de coco', '300 ml'],
      ['Bouillon de légumes', '300 ml', 'Bouillon'],
    ]),
    ingredients([
      ['Œufs tamago', 'q.s.', 'Œufs'],
      ['Tofu ferme', 'q.s.'],
      ['Champignons', 'q.s.'],
      ['Sauce teriyaki', 'q.s.'],
      ['Sésame', 'q.s.'],
      ['Cébette', 'q.s.'],
    ]),
    steps([
      ['Base aromatique', 'Faire revenir ail, gingembre et cébette finement émincés.'],
      [
        'Bouillon',
        'Ajouter curry rouge, beurre de cacahuètes et sauce soja, puis lait de coco et bouillon.',
      ],
      ['Mijotage', 'Laisser mijoter jusqu’à bouillon homogène et parfumé.'],
      ['Nouilles', 'Ajouter les nouilles et cuire jusqu’à tendreté.'],
      ['Toppings', 'Ajouter tofu grillé, champignons, œufs, sésame et cébette.'],
    ]),
  ],
});
const PARMENTIER_BUTTERNUT: RecipeCard = recipe({
  theme: 'navy',
  emoji: '🍄‍🟫',
  tag: 'Four · Gratin · Végétarien',
  title: 'Parmentier de butternut végétarien',
  desc: 'Purée de butternut · Champignons & fromage',
  labels: ['vegetarien'],
  groups: [
    ingredients([
      ['Butternut', '1'],
      ['Champignons finement émincés', 'selon goût', 'Champignons'],
      ['Oignon', 'selon goût'],
      ['Margarine', 'q.s.'],
      ['Crème', '1 càs'],
      ['Muscade', 'q.s.'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
      ['Fromage à gratiner', 'q.s.'],
    ]),
    steps([
      [
        'Base',
        'Faire revenir oignons et champignons dans la margarine. Placer dans un plat à gratin beurré.',
      ],
      [
        'Purée',
        'Cuire la butternut à l’eau. Réduire en purée avec sel, poivre, muscade, margarine et crème.',
      ],
      [
        'Gratiner',
        'Étaler la purée sur la base champignons. Ajouter le fromage. Gratiner au four.',
      ],
    ]),
  ],
});
const GRATIN_DAUPHINOIS_RESTES_RACLETTE: RecipeCard = recipe({
  theme: 'gold',
  emoji: '🧀',
  tag: 'Four · 200°C · 25–35 min · Pour 4 à 6',
  title: 'Gratin façon dauphinois anti-gaspi',
  desc: 'Ultra adaptable · Fondant & croustillant',
  groups: [
    ingredients([
      ['Pommes de terre', 'selon le plat'],
      ['Beurre', 'q.s. pour le plat'],
      ['Crème fraîche', 'q.s.'],
      ['Fromage à raclette ou mélange de fromages', 'q.s.'],
      ['Chapelure', 'q.s.'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
    ]),
    ingredients([
      ['Jambon sec ou jambon blanc', 'q.s.'],
      ['Chorizo', 'q.s.'],
      ['Fromage de chèvre ou fromage corse', 'q.s.'],
      ['Champignons', 'q.s.'],
      ['Oignon', 'q.s.'],
      ['Crème aux fines herbes', 'q.s.'],
    ]),
    steps([
      ['Préparation du plat', 'Beurrer généreusement le plat à gratin.'],
      ['Pommes de terre', 'Éplucher les pommes de terre et les couper en fines rondelles.'],
      ['Montage', 'Alterner couches : pommes de terre, viandes ou légumes, crème et fromage.'],
      ['Répétition', 'Répéter jusqu’en haut du plat.'],
      ['Finition', 'Terminer par une couche de fromage puis chapelure.'],
      ['Cuisson', 'Cuire à 200°C pendant 25 à 35 min jusqu’à dorure.'],
    ]),
  ],
});
const GRATIN_PDT_CHORIZO: RecipeCard = recipe({
  theme: 'terracotta',
  emoji: '🌶️',
  tag: 'Four · Gratin · 2 couches',
  title: 'Gratin de pommes de terre au chorizo',
  desc: 'Généreux · Fromage fondu',
  groups: [
    ingredients([
      ['Pommes de terre (précuites)', 'selon convives'],
      ['Chorizo ou jambon tranché fin', 'selon goût', 'Chorizo'],
      ['Fromage à gratiner', 'q.s.'],
      ['Œufs', 'q.s.'],
      ['Crème', 'q.s.'],
      ['Lait', 'q.s.'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
      ['Fines herbes', 'q.s.'],
    ]),
    steps([
      ['Couche 1', 'PdT + fromage + mélange œuf/crème/lait + chorizo/jambon.'],
      ['Couche 2', 'Répéter la même structure.'],
      ['Cuisson', 'Cuire jusqu’à gratin doré.'],
    ]),
  ],
});
const PATE_PIZZA: RecipeCard = recipe({
  theme: 'teal',
  emoji: '🍕',
  tag: 'Four max 300°C · 7–10 min · Pour 2',
  title: 'Pâte à pizza maison',
  desc: 'Croustillante · Levure boulangère',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    ingredients([
      ['Farine T45 ou T55', '250 g', 'Farine'],
      ['Eau tiède', '150 ml', 'Eau'],
      ['Sel', '5 g'],
      ['Sucre', '5 g'],
      ['Levure boulangère sèche', '3,5 g (ou 10 g fraîche)'],
      ["Huile d'olive", '15 ml'],
    ]),
    steps([
      ['Levure', 'Mélanger eau tiède, sucre et levure. Laisser mousser 10 min.'],
      ['Pâte', 'Farine + sel + levure + huile d’olive. Pétrir 10 min.'],
      ['Levée', 'Laisser lever 1h à 1h30.'],
      ['Façonnage', 'Étaler très finement pour croustillant.'],
      ['Cuisson', 'Cuire à 300°C 7 à 10 min.'],
    ]),
  ],
});
const GNOCCHIS_MAISON: RecipeCard = recipe({
  theme: 'navy',
  emoji: '🥔',
  tag: 'Pour 1 personne · ~45 min',
  title: 'Gnocchis maison',
  desc: 'Végétarien · Pommes de terre farineuses',
  labels: ['vegetarien'],
  groups: [
    ingredients([
      ['Pommes de terre (type bintje)', '150 g'],
      ['Farine', '~100 g'],
      ['Œufs', '½'],
      ['Sel', 'q.s.'],
      ['Muscade', 'q.s.'],
      ['Parmesan', 'q.s.'],
    ]),
    steps([
      ['Cuire', 'Cuire les pommes de terre, éplucher à chaud.'],
      ['Écraser', 'Réduire en purée fine, laisser tiédir.'],
      ['Pâte', 'Ajouter œuf, sel, muscade et farine progressivement.'],
      ['Façonner', 'Former boudins puis couper en gnocchis.'],
      ['Cuisson', 'Cuire jusqu’à remontée à la surface.'],
    ]),
  ],
});

export const ENTREES_PLATS: RecipeSection = {
  label: 'Entrées & Plats',
  description:
    "Entre entrée et plat, la différence tient davantage à l'appétit qu'à la recette. Ouvrir le repas, ou en être la vedette : tout est affaire de faim... ou de générosité ♥.",
  cards: [
    ARTICHAUTS_VAPEUR,
    CREMEUX_PETIT_POIS_OEUFS_MOLLETS,
    BRUSCHETTA,
    GAUFRES_PATATE_DOUCE_CURRY,
    TARTE_CROUSTILLANTE_THON_CONCOMBRE,
    TOURTE_ROQUEFORT,
    FLAN_POIREAU_SAUMON,
    FLAN_THON_TOMATES_ORIGAN,
    FLAN_EPINARDS_CHEVRE,
    FLAN_PATATE_DOUCE_ROQUEFORT,
    PITA_POULET_BLAISE,
    CHILI_CON_SIN_CARNE_EASY,
    BLANQUETTE_VEGAN_CHAMPIGNONS,
    HARICOTS_BLANCS_TOMATE,
    FILETS_EGELFIN,
    CURRY_PATATES_POISSON,
    CURRY_HARICOTS_ROUGES_COCO,
    RISOTTO_CURRY_COCO,
    NOODLES_CREMEUSES_CREVETTES,
    RAMEN_CURRY_ROUGE_COCO,
    PARMENTIER_BUTTERNUT,
    GRATIN_DAUPHINOIS_RESTES_RACLETTE,
    GRATIN_PDT_CHORIZO,
    PATE_PIZZA,
    GNOCCHIS_MAISON,
  ],
};
