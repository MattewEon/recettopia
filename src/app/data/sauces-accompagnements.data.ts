import { RecipeCard, RecipeSection } from '../models/recipe.models';

const BOUILLON_LEGUMES_MAISON: RecipeCard = {
  theme: 'gold',
  emoji: '🥕',
  tag: 'Casserole · 45–60 min · Pour 1 grand volume',
  title: 'Bouillon de légumes maison',
  desc: 'Simple · Aromatique · Base cuisine maison · Sans additif',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Poireaux (blancs)', qty: '2' },
        { name: 'Carottes', qty: '3' },
        { name: 'Oignon', qty: '1' },
        { name: 'Bouquet garni', qty: '1' },
        { name: 'Sel', qty: 'q.s.' },
        { name: 'Poivre', qty: 'q.s.' },
        { name: 'Eau', qty: 'environ 1,5 à 2 L' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Légumes',
          text: 'Éplucher et couper grossièrement les carottes, l’oignon et les poireaux.'
        },
        {
          label: 'Cuisson',
          text: 'Mettre tous les légumes dans une grande casserole avec l’eau et le bouquet garni.'
        },
        {
          label: 'Mijotage',
          text: 'Porter à ébullition puis laisser frémir 45 à 60 minutes.'
        },
        {
          label: 'Assaisonnement',
          text: 'Ajouter sel et poivre en fin de cuisson selon le goût.'
        },
        {
          label: 'Filtrage',
          text: 'Filtrer le bouillon et récupérer le liquide.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Utilisation :',
      text: 'Base idéale pour risottos, sauces, soupes ou blanquettes végétales.'
    },
    {
      label: 'Conservation :',
      text: 'Se garde 3 à 4 jours au réfrigérateur ou peut être congelé en portions.'
    }
  ]
};
const PESTO_TOFU: RecipeCard = {
  theme: 'green',
  emoji: '🌿',
  tag: 'Mixeur · 5 min · Végan',
  title: 'Mytho pesto basilic au tofu',
  desc: 'Sans parmesan · Onctueux & frais',
  labels: ['vegetarien', 'sans-lactose', 'sans-gluten'],
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
const TARTINADE_TOFU_BASILIC_OLIVES: RecipeCard = {
  theme: 'green',
  emoji: '🫒',
  tag: 'Mixeur · Sans cuisson · 10 min · Pour 1 bol',
  title: 'Tartinade tofu, basilic & olives',
  desc: 'Crémeuse · Méditerranéenne · Riche en protéines · Sans lactose',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Tofu nature', qty: '200 g' },
        { name: 'Olives vertes ou noires dénoyautées', qty: '80 à 100 g' },
        { name: 'Amandes', qty: '30 g' },
        { name: 'Ail confit', qty: '2 à 4 gousses' },
        { name: 'Basilic frais', qty: '1 poignée' },
        { name: "Huile d'olive", qty: '1 à 2 càs' },
        { name: 'Jus de citron', qty: '1 càs' },
        { name: 'Poivre', qty: 'q.s.' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Mixage',
          text: 'Placer le tofu, les olives, les amandes, l’ail confit, le basilic, l’huile d’olive et le jus de citron dans un mixeur.'
        },
        {
          label: 'Texture',
          text: 'Mixer jusqu’à obtenir une texture homogène. Ajouter un peu d’huile d’olive si nécessaire pour assouplir la préparation.'
        },
        {
          label: 'Assaisonnement',
          text: 'Goûter puis ajuster en poivre, citron ou basilic selon les préférences.'
        },
        {
          label: 'Service',
          text: 'Servir frais sur du pain grillé, des crackers ou avec des bâtonnets de légumes.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Astuce :',
      text: 'Les olives apportent déjà beaucoup de sel ; goûter avant d’en ajouter.'
    },
    {
      label: 'Conservation :',
      text: 'Se conserve 3 à 4 jours au réfrigérateur dans une boîte hermétique.'
    }
  ]
};
const AJITSUKE_TAMAGO: RecipeCard = {
  theme: 'ink',
  emoji: '🥚',
  tag: 'Cuisson 6 min · Marinade 24h minimum',
  title: 'Ajitsuke Tamago',
  desc: "Recette d'Elisa · Umami & savoureux",
  labels: ['vegetarien', 'sans-lactose'],
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
      label: 'Astuce contenant :',
      text: 'Prévoir un récipient suffisamment haut pour que les œufs soient bien immergés dans la marinade.',
    },
    {
      label: 'Sans gluten :',
      text: 'Remplacer la sauce soja par du tamari pour une version sans gluten.',
    },
  ],
};

export const SAUCES_ACCOMPAGNEMENTS: RecipeSection = {
  label: 'Sauces & accompagnements',
  cards: [
    BOUILLON_LEGUMES_MAISON,
    PESTO_TOFU,
    TARTINADE_TOFU_BASILIC_OLIVES,
    AJITSUKE_TAMAGO,
  ],
};
