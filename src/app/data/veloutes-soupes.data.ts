import { RecipeCard, RecipeSection } from '../models/recipe.models';

const VELOUTE_POTIMARRON: RecipeCard = {
  theme: 'terracotta',
  emoji: '🍲',
  tag: 'Velouté · ~30 min',
  title: 'Velouté de potimarron',
  desc: 'Doux & crémeux · Variante curry/coco possible',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Potimarron', qty: '1' },
        { name: 'Bouillon cube de poule', qty: '1' },
        { name: 'Muscade', qty: 'q.s.' },
        { name: 'Crème liquide légère', qty: 'q.s.' },
        { name: 'Vache qui rit', qty: '1 / personne' },
        { name: 'Persil, Maggi (service)', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Cuire',
          text: "Découper le potimarron et cuire dans l'eau avec bouillon et muscade. L'eau ne dépasse pas les légumes.",
        },
        {
          label: 'Mixer',
          text: "Avant de mixer, ajouter la crème et les Vache qui rit. Mixer jusqu'à texture veloutée.",
        },
        {
          label: 'Servir',
          text: "Garnir d'un brin de persil et d'un trait de Maggi selon les goûts.",
        },
      ],
    },
  ],
  notes: [
    {
      parts: [
        {
          label: 'Variante :',
          text: 'Curry + lait de coco se marient très bien avec le potimarron.',
        },
      ],
    },
  ],
};

const VELOUTE_CAROTTES: RecipeCard = {
  theme: 'caramel',
  emoji: '🥕',
  tag: 'Velouté · ~30 min · Pour 3',
  title: 'Velouté de carottes au cumin',
  desc: 'Doux · Option sucré-salé au miel',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Carottes', qty: '~500 g' },
        { name: 'Oignon', qty: '½' },
        { name: 'Bouillon de poule', qty: '1 cube' },
        { name: 'Beurre', qty: '1 morceau' },
        { name: 'Curry + cumin', qty: '½ càc chacun (~)' },
        { name: 'Crème fraîche légère', qty: '2 càs' },
        { name: 'Vache qui rit', qty: '2' },
        { name: 'Sel de Guérande (optionnel)', qty: '1 pincée' },
        { name: 'Miel (option sucré-salé)', qty: 'un peu' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Cuire',
          text: "Cuire les carottes en morceaux avec l'oignon, le bouillon, le beurre, le curry et le cumin.",
        },
        { label: 'Mixer', text: 'Ajouter crème et Vache qui rit avant de mixer.' },
        {
          label: 'Servir',
          text: "Saupoudrer de cumin. Goûter avant d'ajouter le sel. Option miel pour les amateurs de sucré-salé.",
        },
      ],
    },
  ],
};

const VELOUTE_CHOUFLEUR: RecipeCard = {
  theme: 'green',
  emoji: '🥦',
  tag: 'Velouté · ~30 min · Pour 4',
  title: 'Velouté de chou-fleur',
  desc: 'Fondant · Parmesan en finition',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Chou-fleur (surgelé possible)', qty: '1 kg' },
        { name: 'Bouillon cube légumes/poule', qty: '1' },
        { name: "Huile d'olive", qty: 'généreusement' },
        { name: 'Crème fraîche', qty: '2 càs' },
        { name: 'Vache qui rit', qty: '3' },
        { name: 'Muscade', qty: 'selon goût' },
        { name: 'Parmesan/grana en poudre', qty: 'au service' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Cuire',
          text: "Cuire le chou-fleur dans l'eau avec le bouillon et l'huile d'olive.",
        },
        { label: 'Mixer', text: 'Ajouter crème, Vache qui rit et muscade avant de mixer.' },
        { label: 'Servir', text: 'Ajouter parmesan ou grana en poudre au moment de servir.' },
      ],
    },
  ],
};

const VELOUTE_COURGETTES: RecipeCard = {
  theme: 'teal',
  emoji: '🥒',
  tag: 'Velouté · ~30 min · Chaud ou froid',
  title: 'Velouté de courgettes au basilic',
  desc: 'Léger · Basilic frais de préférence',
  labels: ['vegetarien'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Courgettes', qty: '1–2 / personne' },
        { name: 'Basilic frais (de préférence)', qty: 'généreusement' },
        { name: 'Crème fraîche épaisse légère', qty: 'q.s.' },
        { name: 'Vache qui rit', qty: '1 / personne' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Cuire',
          text: "Cuire les courgettes à l'eau. Attention : elles sont très riches en eau — ne pas surcharger en liquide.",
        },
        {
          label: 'Mixer',
          text: "Ajouter le basilic généreusement, la crème et les Vache qui rit. Mixer jusqu'à texture lisse.",
        },
      ],
    },
  ],
  notes: [
    {
      parts: [
        {
          label: 'Astuce :',
          text: 'Le basilic frais fait VRAIMENT la différence. Se déguste chaud ou froid selon la saison.',
        },
      ],
    },
  ],
};

const VELOUTE_BUTTERNUT_COCO: RecipeCard = {
  theme: 'navy',
  emoji: '🥥',
  tag: 'Velouté · ~30 min · Pour 4',
  title: 'Velouté butternut curry-coco',
  desc: 'Exotique & parfumé',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Courge butternut', qty: '1' },
        { name: 'Bouillon cube', qty: '1' },
        { name: 'Curry', qty: 'selon goût' },
        { name: 'Lait de coco (boîte)', qty: '1' },
        { name: 'Vache qui rit', qty: '3' },
        { name: 'Crème épaisse légère', qty: '4 càs' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        { label: 'Cuire', text: 'Cuire la butternut en morceaux avec le bouillon et le curry.' },
        { label: 'Coco', text: 'À mi-cuisson, ajouter la boîte de lait de coco.' },
        {
          label: 'Mixer',
          text: 'Ajouter Vache qui rit et crème avant de mixer. Goûter et ajuster en curry.',
        },
      ],
    },
  ],
};

const VELOUTE_POIVRON_CHORIZO: RecipeCard = {
  theme: 'terracotta',
  emoji: '🫑',
  tag: 'Velouté · ~30 min · Épicé & fumé',
  title: 'Velouté poivron-chorizo',
  desc: 'Relevé · Option Nduja pour plus de fumé',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Poivrons rouges', qty: '4' },
        { name: 'Tomates pelées (boîtes)', qty: '1–2' },
        { name: 'Oignon', qty: '½' },
        { name: 'Paprika', qty: 'q.s.' },
        { name: 'Chorizo (ou Nduja)', qty: 'selon goût' },
        { name: 'Vache qui rit', qty: '2' },
        { name: 'Crème fraîche épaisse légère', qty: '4 càs' },
        { name: 'Rondelles chorizo (service)', qty: 'q.s.' },
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        { label: 'Cuire', text: "Cuire poivrons, tomates pelées, oignon et paprika dans l'eau." },
        {
          label: 'Chorizo',
          text: 'À mi-cuisson, ajouter le chorizo en petits morceaux (ou la Nduja pour un goût fumé).',
        },
        { label: 'Mixer', text: 'Ajouter Vache qui rit et crème avant de mixer.' },
        { label: 'Servir', text: "Ajouter quelques rondelles de chorizo dans l'assiette." },
      ],
    },
  ],
};

export const VELOUTES_SOUPES: RecipeSection = {
  label: 'Veloutés & soupes',
  intro: {
    title: "✦ Les règles d'or du velouté",
    items: [
      {
        label: 'Texture',
        text: "Velouté > soupe : moins d'eau, texture plus agréable. L'eau ne dépasse jamais les légumes.",
      },
      { label: 'Cuisson', text: "~30 min. Piquer les légumes — s'ils sont tendres, c'est prêt." },
      {
        label: 'Pas de sel',
        text: 'Préférer les bouillons cubes (bio si possible) — ils salent et donnent du goût.',
      },
      {
        label: 'Pas de pommes de terre',
        text: 'Ça donne une texture bizarre. Préférer du pain ou des croûtons à côté.',
      },
      { label: 'Épices', text: 'Au pif — en début de cuisson pour infuser, à ajuster en fin.' },
      {
        label: 'Tips enfants',
        text: 'Un seul légume à la fois — les mélanges sont plus difficiles à accepter.',
      },
    ],
  },
  cards: [
    VELOUTE_POTIMARRON,
    VELOUTE_CAROTTES,
    VELOUTE_CHOUFLEUR,
    VELOUTE_COURGETTES,
    VELOUTE_BUTTERNUT_COCO,
    VELOUTE_POIVRON_CHORIZO,
  ],
};
