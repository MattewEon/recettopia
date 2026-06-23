import { RecipeCard, RecipeSection } from '../models/recipe.models';
import { ingredients, notes, steps } from '../models/recipe.builder';

const OURSONS_CHOCOLAT: RecipeCard = {
  theme: 'choco',
  emoji: '🐻',
  tag: 'Four · 180°C · 20–25 min · ~19 pièces (25–35 g)',
  title: 'Petits oursons aux pépites de chocolat',
  desc: 'Sans lactose · Sans sucre raffiné · Farine complète',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    ingredients([
      ['Œufs', '4'],
      ['Compote', '250 g'],
      ['Farine complète', '250 g'],
      ['Levure chimique', '13 g'],
      ['Chocolat noir (pépites)', '125 g'],
    ]),
    steps([
      ['Mélanger', "Battre les œufs avec la compote jusqu'à obtenir un mélange homogène."],
      ['Incorporer', 'Ajouter la farine et la levure, bien mélanger.'],
      ['Pépites', "Hacher le chocolat grossièrement et l'incorporer à la pâte."],
      ['Cuisson', 'Verser dans les moules et enfourner à 180°C pendant 20 à 25 minutes.'],
    ]),
  ],
  notes: notes([['Astuce', 'Pas besoin de laisser reposer la pâte. Enfourner directement !']]),
};
const GAUFRES_CHOCOLAT: RecipeCard = {
  theme: 'caramel',
  emoji: '🧇',
  tag: 'Gaufrier · 3–5 min par gaufre · ~17 pièces (40–50 g)',
  title: 'Gaufres aux pépites de chocolat',
  desc: 'Sans lactose · Sans sucre raffiné · Farine complète',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    ingredients([
      ['Œufs', '4'],
      ['Compote', '250 g'],
      ['Farine complète', '250 g'],
      ['Levure chimique', '13 g'],
      ["Lait d'amande", '150 ml'],
      ['Margarine végétale', '25 g'],
      ['Chocolat noir (optionnel)', '125 g'],
    ]),
    steps([
      ['Mélanger', 'Battre les œufs avec la compote et la margarine fondue.'],
      [
        'Incorporer',
        "Ajouter la farine et la levure, puis le lait d'amande progressivement pour une pâte fluide. Ajouter les pépites si souhaité.",
      ],
      ['Repos', 'Laisser reposer la pâte 15 à 30 minutes à température ambiante.'],
      ['Cuisson', 'Faire chauffer le gaufrier et cuire 3 à 5 minutes par gaufre.'],
    ]),
  ],
  notes: notes([
    ['Astuce', 'Utiliser une margarine végétale pour garder la recette sans lactose.'],
  ]),
};
const BISCUITS_ORANGE: RecipeCard = {
  theme: 'terracotta',
  emoji: '🍊',
  tag: 'Four · 180°C · 15–18 min · ~40 mini cookies',
  title: "Biscuits pelures d'orange & pépites de chocolat",
  desc: 'Anti-gaspi · Orange & chocolat noir',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    ingredients([
      ["Pelures d'orange", '1'],
      ['Sucre', '150 g'],
      ['Margarine végétale', '85 g'],
      ['Œufs', '1'],
      ['Farine', '280 g'],
      ['Levure chimique', '½ sachet'],
      ['Sel', '1 pincée'],
      ['Chocolat noir', '½ tablette'],
    ]),
    steps([
      [
        'Pelures',
        "Faire bouillir les pelures 8 à 10 min. Changer l'eau, recuire 15 min. Égoutter et laisser tiédir.",
      ],
      ['Base', "Mélanger le sucre, la margarine fondue et l'œuf."],
      ['Mixer', 'Mixer finement les pelures tièdes et les incorporer à la préparation.'],
      [
        'Pâte',
        "Incorporer la farine, la levure et le sel. Si trop sèche, ajouter un filet de jus d'orange ou lait végétal.",
      ],
      ['Chocolat', 'Concasser le chocolat, incorporer à la spatule. Réfrigérer 15 min.'],
      [
        'Cuisson',
        'Former des boules, déposer sur plaque. Enfourner à 180°C, 15 à 18 min. Laisser refroidir sur la plaque.',
      ],
    ]),
  ],
  notes: notes([
    ['Conservation', '5–6 jours en boîte hermétique, se congèle très bien.'],
    ['Variante', 'Une pincée de cannelle ou cardamome se marie parfaitement.'],
  ]),
};
const MINI_COOKIES_EXPRESS_AMANDE: RecipeCard = {
  theme: 'gold',
  emoji: '🍪',
  tag: 'Four · 180°C · 15–20 min · Pour ~12 mini-cookies',
  title: 'Mini cookies express',
  labels: ['sans-gluten', 'sans-lactose'],
  desc: 'Sans sucre raffiné · 3 ingrédients · Par @soeursaunaturel',
  groups: [
    ingredients([
      ["Poudre d'amande", '125 g'],
      ['Compote de pommes sans sucre ajouté', '100 g', 'Compote'],
      ['Pépites de chocolat noir', 'q.s.'],
    ]),
    steps([
      [
        'Pâte',
        "Mélanger la poudre d'amande, la compote et les pépites de chocolat jusqu'à obtenir une pâte homogène.",
      ],
      ['Façonnage', 'Former de petits cookies avec les mains.'],
      ['Plaque', 'Déposer les cookies sur une plaque recouverte de papier cuisson.'],
      [
        'Cuisson',
        "Enfourner à 180°C pendant 15 à 20 min jusqu'à ce que les cookies soient légèrement dorés. Laisser refroidir quelques minutes avant de déguster.",
      ],
    ]),
  ],
  notes: notes([
    [
      'Astuce',
      'Twistez la recette en ajoutant des compotes aromatisées, par exemple pomme-marron !',
    ],
  ]),
};
const BISCUITS_NOISETTE_COMPOTE_CHOCOLAT: RecipeCard = {
  theme: 'caramel',
  emoji: '🍪',
  tag: 'Four · 180°C · 15 min · Pour ~10 à 12 biscuits',
  title: 'Biscuits noisette, compote & chocolat',
  desc: '3 ingrédients · Sans gluten · Moelleux à cœur & croquants sur les bords',
  groups: [
    ingredients([
      ['Poudre de noisette', '60 g'],
      ['Compote de pommes', '2 càs', 'Compote'],
      ['Chocolat noir', 'q.s.'],
      ['Noisettes entières', 'q.s.'],
    ]),
    steps([
      ['Pâte', "Mélanger la poudre de noisette avec la compote jusqu'à obtenir une pâte homogène."],
      ['Façonnage', 'Former des boules puis les aplatir sur plaque.'],
      ['Cuisson', 'Cuire à 180°C pendant 15 min.'],
      ['Garniture', 'Ajouter chocolat et noisette à la sortie du four.'],
      ['Refroidissement', 'Laisser refroidir complètement.'],
    ]),
  ],
  notes: notes([
    ['Texture', "Croustillant à l'extérieur, fondant à l'intérieur."],
    ['Astuce', 'Varier les chocolats.'],
    ['Principe', 'Recette minimaliste 3 ingrédients.'],
  ]),
};
const CLAFOUTIS_NECTARINES: RecipeCard = {
  theme: 'gold',
  emoji: '🍑',
  tag: 'Four · 180°C · 35–40 min · Pour 4 à 6',
  title: 'Clafoutis de nectarines',
  desc: 'Fruits fondants · Léger & fruité',
  labels: ['sans-lactose', 'sans-gluten', 'vegetarien'],
  groups: [
    ingredients([
      ['Nectarines', '5 à 6'],
      ['Œufs', '3'],
      ['Sucre', '80 g'],
      ['Farine de riz', '50 g'],
      ['Crème de coco', '200 ml'],
      ['Vanille', '1 càc'],
      ['Sel', '1 pincée'],
      ['Huile de coco', 'q.s.'],
    ]),
    steps([
      ['Four', 'Préchauffer à 180°C.'],
      ['Fruits', 'Disposer les nectarines dans un moule huilé.'],
      ['Appareil', 'Battre œufs et sucre.'],
      ['Mélange', 'Ajouter farine, crème végétale et vanille.'],
      ['Cuisson', '35 à 40 min.'],
    ]),
  ],
  notes: notes([['Astuce', 'Ajouter du citron.']]),
};
const TARTE_MIRABELLES_SPECULOOS: RecipeCard = {
  theme: 'caramel',
  emoji: '🫐',
  tag: 'Four · 180°C · 30–40 min',
  title: 'Tarte mirabelles, spéculoos & amandes',
  desc: 'Fruits fondants',
  groups: [
    ingredients([
      ['Pâte feuilletée', '1'],
      ['Mirabelles', '500 à 700 g'],
      ['Spéculoos', '8 à 10'],
      ["Poudre d'amande", '50 à 80 g'],
      ['Amandes effilées', '1 poignée', 'Amandes'],
      ['Sucre vanillé', '1 sachet'],
    ]),
    steps([
      ['Fond', 'Piquer la pâte.'],
      ['Base', 'Spéculoos + amande.'],
      ['Fruits', 'Ajouter mirabelles.'],
      ['Cuisson', '30 à 40 min.'],
    ]),
  ],
  notes: notes([
    ['Astuce', 'Absorbe le jus.'],
    ['Variante', 'Autres fruits possibles.'],
  ]),
};
const MUFFINS_NUTELLA: RecipeCard = {
  theme: 'plum',
  emoji: '🧁',
  tag: 'Four · 140°C · 15 min',
  title: 'Muffins moelleux au Nutella',
  desc: "100% végétal · Poudre d'amande · Ultra moelleux",
  labels: ['vegetarien'],
  groups: [
    ingredients([
      ['Farine', '300 g (375)'],
      ["Poudre d'amande", '100 g (125)'],
      ['Sucre blanc', '170 g (200)', 'Sucre'],
      ['Sucre roux', '30 g (50)'],
      ['Sel', '1 pincée'],
      ['Levure chimique', '1 sachet (1,25)'],
      ['Huile végétale', '125 ml (160)'],
      ['Lait végétal', '375 ml (470)'],
      ["Arôme d'amande amère", '1 càc'],
      ['Nutella', '1 bonne cuillère / muffin'],
    ]),
    steps([
      ['Sec', "Mélanger farine, poudre d'amande, sucres, sel et levure."],
      ['Liquide', 'Ajouter huile, lait et arôme. Mélanger.'],
      ['Nutella', 'Répartir pâte et ajouter Nutella au centre.'],
      ['Cuisson', 'Cuire à 140°C pendant 15 min.'],
    ]),
  ],
  notes: notes([['Sans lactose', 'Remplacer par confiture ou pâte végétale.']]),
};
const SNICKERS_MAISON_BANANE_CACAHUETE: RecipeCard = {
  theme: 'choco',
  emoji: '🍫',
  tag: 'Congélateur · 4 h · Sans cuisson',
  title: 'Snickers maison banane & cacahuète',
  desc: 'Sans cuisson · Healthy',
  labels: ['sans-gluten'],
  groups: [
    ingredients([
      ['Banane', '1'],
      ['Chocolat noir', '70 g'],
      ['Beurre de cacahuète', 'selon goût'],
      ['Cacahuètes concassées', 'selon goût'],
    ]),
    steps([
      ['Chocolat', 'Fondre et verser dans moules.'],
      ['Banane', 'Ajouter rondelle.'],
      ['Cacahuète', 'Ajouter beurre de cacahuète.'],
      ['Croquant', 'Ajouter cacahuètes.'],
      ['Finition', 'Recouvrir chocolat.'],
      ['Congélation', '4 h minimum.'],
    ]),
  ],
  notes: notes([
    ['Astuce', 'Chocolat 70% minimum.'],
    ['Variante', 'Amandes ou noisettes.'],
  ]),
};
const SPRITZ_COCO: RecipeCard = {
  theme: 'terracotta',
  emoji: '🥥',
  tag: 'Four · 30 min',
  title: 'Spritz à la noix de coco',
  desc: 'Sablés fondants',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    ingredients([
      ['Sucre fin', '300 g', 'Sucre'],
      ['Noix de coco râpée', '150 g'],
      ['Farine', '1 kg'],
      ['Margarine végétale', '800 g'],
      ['Œufs (jaunes)', '8'],
      ['Vanille', '2 sachets'],
      ['Sel', '1 pincée'],
    ]),
    steps([
      ['Travailler', "Sucre + margarine jusqu'à crémeux."],
      ['Incorporer', 'Ajouter le reste.'],
      ['Cuisson', '160°C ~30 min.'],
    ]),
  ],
};
const MARBRE_CHOCOLAT: RecipeCard = {
  theme: 'choco',
  emoji: '🍮',
  tag: 'Four · 180°C · 40–45 min',
  title: 'Marbré au chocolat',
  desc: 'Sans lactose',
  labels: ['sans-lactose'],
  groups: [
    ingredients([
      ['Yaourt de brebis', '120-125 g'],
      ['Œufs', '3'],
      ['Sucre vergeoise', '100 g'],
      ['Sucre roux', '50 g'],
      ['Margarine végétale', '120 g'],
      ['Farine', '230 g'],
      ['Levure chimique', '1 sachet'],
      ['Cacao', 'q.s.'],
      ['Lait végétal', 'q.s.'],
      ["Arôme d'amande amère", '1 càc'],
      ['Sel', '1 pincée'],
    ]),
    steps([
      ['Mélanger', 'Base + œufs + sucres + margarine.'],
      ['Diviser', 'Ajouter cacao à une moitié.'],
      ['Verser', 'Alterner les pâtes.'],
      ['Cuire', '45 min.'],
    ]),
  ],
};
const GATEAU_HARICOT_ROUGE_CHOCOLAT: RecipeCard = {
  theme: 'plum',
  emoji: '🍫',
  tag: 'Four · 180°C · 30–35 min',
  title: 'Brownie aux haricots rouges',
  desc: 'Surprenant & moelleux',
  labels: ['sans-gluten', 'sans-lactose'],
  groups: [
    ingredients([
      ['Haricots rouges cuits', '425 g', 'Haricots rouges'],
      ['Œufs', '4'],
      ["Poudre d'amande", '85 g'],
      ['Cacao', '68 g'],
      ["Sirop d'érable", '170 g'],
      ['Chocolat noir', '1 tablette'],
    ]),
    steps([
      ['Four', 'Préchauffer à 180°C.'],
      ['Mixage', 'Mixer haricots + œufs.'],
      ['Pâte', 'Ajouter reste des ingrédients.'],
      ['Pépites', 'Ajouter chocolat.'],
      ['Cuisson', '30–35 min.'],
    ]),
  ],
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
