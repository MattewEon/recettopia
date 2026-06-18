import { RecipeCard, RecipeSection } from '../models/recipe.models';
import { ingredients, notes, recipe, steps } from '../models/recipe.builder';

const VELOUTE_CAROTTES: RecipeCard = recipe({
  theme: 'caramel',
  emoji: '🥕',
  tag: 'Velouté · ~30 min · Pour 3',
  title: 'Velouté de carottes au cumin',
  labels: ['vegetarien', 'sans-gluten'],
  desc: 'Doux · Option sucré-salé au miel',
  groups: [
    ingredients([
      ['Carottes', '~500 g'],
      ['Oignon', '½'],
      ['Bouillon de poule', '1 cube'],
      ['Beurre', '1 morceau'],
      ['Curry + cumin', '½ càc chacun (~)'],
      ['Crème fraîche légère', '2 càs'],
      ['Vache qui rit', '2'],
      ['Sel de Guérande (optionnel)', '1 pincée'],
      ['Miel (option sucré-salé)', '1 càc'],
    ]),
    steps([
      [
        'Cuire',
        "Cuire les carottes en morceaux avec l'oignon, le bouillon, le beurre, le curry et le cumin.",
      ],
      ['Mixer', 'Ajouter crème et Vache qui rit avant de mixer.'],
      [
        'Servir',
        "Saupoudrer de cumin. Goûter avant d'ajouter le sel. Option miel pour les amateurs de sucré-salé.",
      ],
    ]),
  ],
});
const CREME_PETIT_POIS_JAUNE_OEUF_CONFIT: RecipeCard = recipe({
  theme: 'gold',
  emoji: '🫛',
  tag: 'Blender · Repos 3 h · 20 min · Pour 2 à 4',
  title: 'Crème de petits pois & jaune d’œuf confit',
  desc: 'Élégant · Crémeux · Frais · Inspiration bistrot',
  groups: [
    ingredients([
      ['Petits pois', '300 g'],
      ['Crème de soja liquide', '10 à 15 cl'],
      ['Jaunes d’œufs', '2 à 4'],
      ['Sauce soja salée', 'q.s.'],
      ['Gingembre frais ou en poudre', 'q.s.'],
      ['Huile de sésame', '1 càc'],
      ['Graines de sésame', 'q.s.'],
      ['Curcuma', '1 pincée'],
      ['Sel, poivre', 'q.s.'],
    ]),
    steps([
      [
        'Jaunes confits',
        'Déposer les jaunes d’œufs dans un récipient avec la sauce soja et le gingembre. Couvrir et laisser confire au réfrigérateur pendant au moins 3 h.',
      ],
      [
        'Petits pois',
        'Cuire les petits pois dans l’eau bouillante puis les plonger immédiatement dans un bain glacé afin de conserver leur couleur.',
      ],
      [
        'Crème',
        'Mixer les petits pois avec la crème de soja, l’huile de sésame, le curcuma, le sel et le poivre jusqu’à obtenir une texture lisse et veloutée.',
      ],
      ['Dressage', 'Répartir la crème de petits pois dans des assiettes ou des bols.'],
      [
        'Finition',
        'Déposer délicatement un jaune d’œuf confit au centre puis saupoudrer de graines de sésame.',
      ],
    ]),
  ],
  notes: notes([
    [
      'Twist chèvre',
      'Ajouter quelques morceaux de chèvre frais émiettés sur la crème de petits pois.',
    ],
    [
      'Version croquante',
      'Ajouter des noisettes ou des amandes torréfiées concassées juste avant de servir.',
    ],
    [
      'Version gourmande',
      'Terminer avec quelques gouttes d’huile de sésame grillé ou de piment croustillant.',
    ],
  ]),
});
const VELOUTE_CHOUFLEUR: RecipeCard = recipe({
  theme: 'green',
  emoji: '🥦',
  tag: 'Velouté · ~30 min · Pour 4',
  title: 'Velouté de chou-fleur',
  desc: 'Fondant · Parmesan en finition',
  groups: [
    ingredients([
      ['Chou-fleur', '1 kg'],
      ['Bouillon cube légumes/poule', '1'],
      ["Huile d'olive", 'généreusement'],
      ['Crème fraîche', '2 càs'],
      ['Vache qui rit', '3'],
      ['Muscade', 'selon goût'],
      ['Parmesan/grana en poudre', 'au service'],
    ]),
    steps([
      ['Cuire', "Cuire le chou-fleur dans l'eau avec le bouillon et l'huile d'olive."],
      ['Mixer', 'Ajouter crème, Vache qui rit et muscade avant de mixer.'],
      ['Servir', 'Ajouter parmesan ou grana en poudre au moment de servir.'],
    ]),
  ],
});
const VELOUTE_COURGETTES: RecipeCard = recipe({
  theme: 'teal',
  emoji: '🥒',
  tag: 'Velouté · ~30 min · Chaud ou froid',
  title: 'Velouté de courgettes au basilic',
  desc: 'Léger · Basilic frais de préférence',
  labels: ['vegetarien'],
  groups: [
    ingredients([
      ['Courgettes', '1–2 / personne'],
      ['Basilic frais', 'généreusement'],
      ['Crème fraîche épaisse légère', 'q.s.'],
      ['Vache qui rit', '1 / personne'],
    ]),
    steps([
      ['Cuire', 'Cuire les courgettes à l’eau. Ne pas surcharger en liquide.'],
      ['Mixer', 'Ajouter le basilic, la crème et la Vache qui rit. Mixer jusqu’à texture lisse.'],
    ]),
  ],
  notes: notes([
    ['Astuce', 'Le basilic frais fait vraiment la différence. Se déguste chaud ou froid.'],
  ]),
});
const VELOUTE_POTIMARRON: RecipeCard = recipe({
  theme: 'terracotta',
  emoji: '🍲',
  tag: 'Velouté · ~30 min',
  title: 'Velouté de potimarron',
  desc: 'Doux & crémeux · Variante curry/coco possible',
  groups: [
    ingredients([
      ['Potimarron', '1'],
      ['Bouillon cube de poule', '1'],
      ['Muscade', 'q.s.'],
      ['Crème liquide légère', 'q.s.'],
      ['Vache qui rit', '1 / personne'],
      ['Persil, Maggi', 'q.s.'],
    ]),
    steps([
      ['Cuire', "Cuire le potimarron avec bouillon et muscade. L'eau ne dépasse pas les légumes."],
      ['Mixer', 'Ajouter crème et Vache qui rit avant de mixer.'],
      ['Servir', 'Garnir de persil et Maggi.'],
    ]),
  ],
  notes: notes([['Variante', 'Curry + lait de coco fonctionnent très bien.']]),
});
const VELOUTE_BUTTERNUT_COCO: RecipeCard = recipe({
  theme: 'navy',
  emoji: '🥥',
  tag: 'Velouté · ~30 min · Pour 4',
  title: 'Velouté butternut curry-coco',
  desc: 'Exotique & parfumé',
  groups: [
    ingredients([
      ['Butternut', '1'],
      ['Bouillon cube', '1'],
      ['Curry', 'selon goût'],
      ['Lait de coco', '1 boîte'],
      ['Vache qui rit', '3'],
      ['Crème épaisse légère', '4 càs'],
    ]),
    steps([
      ['Cuire', 'Cuire la butternut avec bouillon et curry.'],
      ['Coco', 'Ajouter le lait de coco à mi-cuisson.'],
      ['Mixer', 'Ajouter Vache qui rit et crème avant de mixer.'],
    ]),
  ],
});
const VELOUTE_POIVRON_CHORIZO: RecipeCard = recipe({
  theme: 'terracotta',
  emoji: '🫑',
  tag: 'Velouté · ~30 min · Épicé & fumé',
  title: 'Velouté poivron-chorizo',
  desc: 'Relevé · Option Nduja',
  groups: [
    ingredients([
      ['Poivrons rouges', '4'],
      ['Tomates pelées', '1–2 boîtes'],
      ['Oignon', '½'],
      ['Paprika', 'q.s.'],
      ['Chorizo (ou Nduja)', 'selon goût'],
      ['Vache qui rit', '2'],
      ['Crème fraîche', '4 càs'],
      ['Rondelles chorizo', 'q.s.'],
    ]),
    steps([
      ['Cuire', 'Cuire poivrons, tomates, oignon et paprika.'],
      ['Chorizo', 'Ajouter chorizo ou Nduja à mi-cuisson.'],
      ['Mixer', 'Ajouter Vache qui rit et crème avant de mixer.'],
      ['Servir', 'Ajouter rondelles de chorizo.'],
    ]),
  ],
});

export const VELOUTES_SOUPES: RecipeSection = {
  label: 'Veloutés & soupes',
  description: 'Du velouté fumant au gaspacho rafraîchissant, chaque saison trouve son réconfort.',
  intro: {
    title: "✦ Les règles d'or du velouté",
    items: [
      { label: 'Texture', text: 'Moins d’eau = meilleur velouté.' },
      { label: 'Cuisson', text: '~30 min.' },
      { label: 'Bouillon', text: 'Préférer cube plutôt que sel.' },
      { label: 'Épices', text: 'À ajuster en fin.' },
    ],
  },
  cards: [
    VELOUTE_CAROTTES,
    CREME_PETIT_POIS_JAUNE_OEUF_CONFIT,
    VELOUTE_CHOUFLEUR,
    VELOUTE_COURGETTES,
    VELOUTE_POTIMARRON,
    VELOUTE_BUTTERNUT_COCO,
    VELOUTE_POIVRON_CHORIZO,
  ],
};
