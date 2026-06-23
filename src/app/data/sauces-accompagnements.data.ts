import { RecipeCard, RecipeSection } from '../models/recipe.models';
import { ingredients, recipe, steps } from '../models/recipe.builder';

const BOUILLON_LEGUMES_MAISON: RecipeCard = recipe({
  theme: 'gold',
  emoji: '🥕',
  tag: 'Casserole · 45–60 min · Pour 1 grand volume',
  title: 'Bouillon de légumes maison',
  desc: 'Simple · Aromatique · Base cuisine maison · Sans additif',
  groups: [
    ingredients([
      ['Poireaux (blancs)', '2'],
      ['Carottes', '3'],
      ['Oignon', '1'],
      ['Bouquet garni', '1'],
      ['Sel', 'q.s.'],
      ['Poivre', 'q.s.'],
      ['Eau', '1,5 à 2 L'],
    ]),

    steps([
      ['Légumes', "Éplucher et couper grossièrement les carottes, l'oignon et les poireaux."],
      [
        'Cuisson',
        "Mettre tous les légumes dans une grande casserole avec l'eau et le bouquet garni.",
      ],
      ['Mijotage', 'Porter à ébullition puis laisser frémir 45 à 60 minutes.'],
      ['Assaisonnement', 'Ajouter sel et poivre en fin de cuisson selon goût.'],
      ['Filtrage', 'Filtrer le bouillon et récupérer le liquide.'],
    ]),
  ],
  notes: [
    {
      label: 'Utilisation :',
      text: 'Base idéale pour risottos, sauces, soupes ou blanquettes végétales.',
    },
    {
      label: 'Conservation :',
      text: 'Se garde 3 à 4 jours au réfrigérateur ou peut être congelé en portions.',
    },
  ],
});
const PESTO_TOFU: RecipeCard = recipe({
  theme: 'green',
  emoji: '🌿',
  tag: 'Mixeur · 5 min · Vegan',
  title: 'Mytho pesto basilic au tofu',
  desc: 'Sans parmesan · Onctueux & frais',
  labels: ['vegetarien', 'sans-lactose', 'sans-gluten'],
  groups: [
    ingredients([
      ['Basilic', 'généreusement'],
      ['Tofu soyeux au basilic', '100 g'],
      ["Huile d'olive", '100 ml'],
      ['Amandes', 'selon goût'],
      ['Ail', 'selon goût'],
      ['Sel', 'q.s.'],
      ['Piment (optionnel)', 'q.s.'],
      ['Jus de citron (optionnel)', 'q.s.'],
    ]),

    steps([
      ['Mixer', "Mettre tous les ingrédients dans le mixeur et mixer jusqu'à consistance lisse."],
      ['Servir', "Servir sur des pâtes. C'est tout !"],
    ]),
  ],
});
const TARTINADE_TOFU_BASILIC_OLIVES: RecipeCard = recipe({
  theme: 'green',
  emoji: '🫒',
  tag: 'Mixeur · Sans cuisson · 10 min · Pour 1 bol',
  title: 'Tartinade tofu, basilic & olives',
  desc: 'Crémeuse · Méditerranéenne · Riche en protéines · Sans lactose',
  groups: [
    ingredients([
      ['Tofu nature', '200 g'],
      ['Olives vertes ou noires dénoyautées', '80 à 100 g'],
      ['Amandes', '30 g'],
      ['Ail confit', '2 à 4 gousses', 'Ail'],
      ['Basilic frais', '1 poignée', 'Basilic'],
      ["Huile d'olive", '1 à 2 càs'],
      ['Jus de citron', '1 càs'],
      ['Poivre', 'q.s.'],
    ]),

    steps([
      [
        'Mixage',
        "Placer tofu, olives, amandes, ail confit, basilic, huile d'olive et jus de citron dans un mixeur.",
      ],
      ['Texture', "Mixer jusqu'à texture homogène. Ajouter un peu d'huile si besoin."],
      ['Assaisonnement', 'Ajuster poivre, citron ou basilic.'],
      ['Service', 'Servir frais sur pain grillé ou crudités.'],
    ]),
  ],
});
const AJITSUKE_TAMAGO: RecipeCard = recipe({
  theme: 'ink',
  emoji: '🥚',
  tag: 'Cuisson 6 min · Marinade 24h minimum',
  title: 'Ajitsuke Tamago',
  desc: "Recette d'Elisa · Umami & savoureux",
  labels: ['vegetarien', 'sans-lactose'],
  groups: [
    ingredients([
      ['Œufs', '6'],
      ['Eau tiède', '15 cl', 'Eau'],
      ['Sucre', '60 ml (1/4 cup)'],
      ['Sauce soja', '80 ml (1/3 cup)'],
      ["Gousses d'ail hachées", '4', 'Ail'],
      ['Vinaigre', '2 c.café'],
      ['Glutamate (optionnel)', '1 pincée'],
      ['Green onions (optionnels)', '1-2 branches', 'Cébette'],
    ]),

    steps([
      ['Œufs mollets', 'Cuire exactement 6 minutes puis plonger dans eau glacée.'],
      ['Écaler', 'Retirer la coquille délicatement.'],
      [
        'Marinade',
        "Dissoudre le sucre dans l'eau tiède puis ajouter sauce soja, vinaigre et aromates.",
      ],
      ['Mariner', 'Plonger les œufs et réfrigérer minimum 1h, idéalement 24h.'],
    ]),
  ],
});

export const SAUCES_ACCOMPAGNEMENTS: RecipeSection = {
  label: 'Sauces & accompagnements',
  cards: [BOUILLON_LEGUMES_MAISON, PESTO_TOFU, TARTINADE_TOFU_BASILIC_OLIVES, AJITSUKE_TAMAGO],
};
