import { RecipeCard, RecipeSection } from '../models/recipe.models';

const OURSONS_CHOCOLAT: RecipeCard = {
  theme: 'choco',
  emoji: '🐻',
  tag: 'Four · 180°C · 20–25 min · ~19 pièces (25–35 g)',
  title: 'Petits oursons aux pépites de chocolat',
  desc: 'Sans lactose · Sans sucre raffiné · Farine complète',
  labels: ['sans-lactose'],
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
      parts: [
        {
          label: 'Astuce :',
          text: 'Pas besoin de laisser reposer la pâte. Enfourner directement !',
        },
      ],
    },
  ],
};

const GAUFRES_CHOCOLAT: RecipeCard = {
  theme: 'caramel',
  emoji: '🧇',
  tag: 'Gaufrier · 3–5 min par gaufre · ~17 pièces (40–50 g)',
  title: 'Gaufres aux pépites de chocolat',
  desc: 'Sans lactose · Sans sucre raffiné · Farine complète',
  labels: ['sans-lactose'],
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
      parts: [
        {
          label: 'Astuce :',
          text: 'Utiliser une margarine végétale pour garder la recette sans lactose.',
        },
      ],
    },
  ],
};

const MUFFINS_NUTELLA: RecipeCard = {
  theme: 'plum',
  emoji: '🧁',
  tag: 'Four · 140°C · 15 min',
  title: 'Muffins moelleux au Nutella',
  desc: "100% végétal · Poudre d'amande · Ultra moelleux",
  labels: ['vegetarien', 'sans-lactose'],
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
};

const BISCUITS_ORANGE: RecipeCard = {
  theme: 'terracotta',
  emoji: '🍊',
  tag: 'Four · 180°C · 15–18 min · ~40 mini cookies',
  title: "Biscuits pelures d'orange & pépites de chocolat",
  desc: 'Anti-gaspi · Orange & chocolat noir',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: "Pelures d'orange", qty: '1' },
        { name: 'Sucre', qty: '150 g' },
        { name: 'Margarine', qty: '85 g' },
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
      parts: [
        { label: 'Conservation :', text: '5–6 jours en boîte hermétique, se congèle très bien.' },
        { label: 'Variante :', text: 'une pincée de cannelle ou cardamome se marie parfaitement.' },
      ],
    },
  ],
};

const SPRITZ_COCO: RecipeCard = {
  theme: 'terracotta',
  emoji: '🥥',
  tag: 'Four · 30 min · Biscuits',
  title: 'Spritz à la noix de coco',
  desc: 'Sablés fondants · Recette carnet',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients (proportions variables)',
      items: [
        { name: 'Sucre fin', qty: '300 g' },
        { name: 'Noix de coco râpée', qty: '150 g' },
        { name: 'Farine', qty: '1 kg' },
        { name: 'Margarine', qty: '800 g' },
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
        { name: 'Sucre vergeoise', qty: '100 g' },
        { name: 'Sucre roux', qty: '50 g' },
        { name: 'Margarine végétale', qty: '120 g' },
        { name: 'Farine', qty: '230 g' },
        { name: 'Levure chimique', qty: '1 sachet' },
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
};

export const GOUTERS_DESSERTS: RecipeSection = {
  label: 'Goûters & desserts',
  cards: [
    OURSONS_CHOCOLAT,
    GAUFRES_CHOCOLAT,
    MUFFINS_NUTELLA,
    BISCUITS_ORANGE,
    SPRITZ_COCO,
    MARBRE_CHOCOLAT,
  ],
};
