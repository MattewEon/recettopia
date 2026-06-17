import { RecipeCard, RecipeSection } from '../models/recipe.models';

const PESTO_TOFU: RecipeCard = {
  theme: 'green',
  emoji: '🌿',
  tag: 'Mixeur · 5 min · Végan',
  title: 'Mytho pesto basilic au tofu',
  desc: 'Sans parmesan · Onctueux & frais',
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Basilic', qty: 'généreusement' },
        { name: 'Tofu soyeux au basilic', qty: '100 g' },
        { name: "Huile d'olive", qty: '100 ml' },
        { name: 'Amandes', qty: 'selon goût' },
        { name: 'Ail', qty: 'selon goût' },
        { name: 'Sel', qty: 'q.s.' },
        { name: 'Piment (optionnel)', qty: 'q.s.' },
        { name: 'Jus de citron (optionnel)', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Mixer',
          text: "Mettre tous les ingrédients dans le bol mixeur et mixer jusqu'à consistance lisse.",
        },
        { label: 'Servir', text: "Balance sur des pâtes. C'est tout !" },
      ],
    },
  ],
};

const AJITSUKE_TAMAGO: RecipeCard = {
  theme: 'ink',
  emoji: '🥚',
  tag: 'Cuisson 6 min · Marinade 24h minimum',
  title: 'Ajitsuke Tamago',
  desc: "Recette d'Elisa · Umami & savoureux",
  labels: ['vegetarien', 'sans-gluten', 'sans-lactose'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients (pour 6 œufs)',
      items: [
        { name: 'Œufs', qty: '6' },
        { name: 'Eau tiède', qty: '15 cl' },
        { name: 'Sucre', qty: '60 ml (¼ cup)' },
        { name: 'Sauce soja', qty: '80 ml (⅓ cup)' },
        { name: "Gousses d'ail hachées", qty: '4' },
        { name: 'Vinaigre', qty: '2 c.café' },
        { name: 'Glutamate (optionnel)', qty: '1 pincée' },
        { name: 'Green onions (optionnels)', qty: '1–2 branches' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Œufs mollets',
          text: "Faire bouillir exactement 6 minutes. Préparer un saladier d'eau glacée et y plonger les œufs immédiatement.",
        },
        {
          label: 'Écaler',
          text: 'Après quelques minutes, éclater et peler la coque et la petite peau délicatement.',
        },
        {
          label: 'Marinade',
          text: "Dissoudre le sucre dans l'eau tiède. Ajouter sauce soja, vinaigre et les autres ingrédients.",
        },
        {
          label: 'Mariner',
          text: 'Plonger les œufs et les solides dans la marinade. Réfrigérer au minimum 1h, idéalement 24h.',
        },
      ],
    },
  ],
  notes: [
    {
      parts: [
        {
          label: 'Astuce contenant :',
          text: 'Prévoir un récipient suffisamment haut pour que les œufs soient bien immergés dans la marinade.',
        },
      ],
    },
  ],
};

export const SAUCES_ACCOMPAGNEMENTS: RecipeSection = {
  label: 'Sauces & accompagnements',
  cards: [PESTO_TOFU, AJITSUKE_TAMAGO],
};
