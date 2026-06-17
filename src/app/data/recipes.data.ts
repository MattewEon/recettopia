import {RecipeData} from '../models/recipe.models';

export const RECIPES_DATA: RecipeData = {
  sections: [
    {
      label: 'Apéro & biscuits salés',
      cards: [
        {
          theme: 'choco',
          emoji: '🍞',
          tag: 'Four · 180°C · 40–45 min',
          title: 'Cake salé lardons-olives-gruyère',
          desc: 'Recette classique · Facile & généreux',
          groups: [
            {
              type: 'ingredients',
              title: 'Ingrédients',
              items: [
                {name: 'Farine', qty: '200 g'},
                {name: 'Levure chimique', qty: '1 sachet'},
                {name: 'Œufs', qty: '3'},
                {name: 'Huile', qty: '100 ml'},
                {name: 'Lait chaud', qty: '100 ml'},
                {name: 'Lardons', qty: '200 g'},
                {name: 'Olives', qty: '150 g'},
                {name: 'Gruyère râpé', qty: '100 g'},
                {name: 'Sel, poivre', qty: '1 pincée'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Mélanger',
                  text: "Mélanger les ingrédients dans l'ordre : farine, sel, poivre, levure, œufs, huile, lait chaud, lardons, olives, gruyère.",
                },
                {
                  label: 'Cuisson',
                  text: 'Verser dans un moule beurré. Enfourner à 180°C pendant 40 à 45 min. Vérifier la cuisson avec une lame.',
                },
              ],
            },
          ],
        },
        {
          theme: 'caramel',
          emoji: '🥔',
          tag: 'Poêle · Salade tiède',
          title: 'Salade de patates',
          desc: 'Pois chiches, œuf dur & fromage · Sésame doré',
          groups: [
            {
              type: 'ingredients',
              title: 'Ingrédients',
              items: [
                {name: 'Pommes de terre', qty: 'selon convives'},
                {name: 'Beurre salé', qty: 'un bon morceau'},
                {name: 'Pois chiches', qty: 'selon goût'},
                {name: 'Œufs durs', qty: 'selon convives'},
                {name: 'Cornichons (+ oignons, grains de moutarde)', qty: 'q.s.'},
                {name: 'Fromage pâte dure', qty: 'selon goût'},
                {name: 'Persil, coriandre, sésame doré', qty: 'q.s.'},
                {name: "Sel, huile d'olive", qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Poêle',
                  text: 'Découper les patates en carrés et les faire revenir à la poêle dans un bon morceau de beurre salé. En mi/fin de cuisson, ajouter les pois chiches.',
                },
                {label: 'Œufs', text: 'Cuire et découper les œufs durs une fois refroidis.'},
                {
                  label: 'Assembler',
                  text: "Dans un saladier : cornichons, fromage, assaisonnement (persil, coriandre, sésame doré, sel, huile d'olive). Ajouter les PdT, pois chiches et œufs.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Veloutés & soupes',
      intro: {
        title: '✦ Les règles d\'or du velouté',
        items: [
          {
            label: 'Texture',
            text: "Velouté > soupe : moins d'eau, texture plus agréable. L'eau ne dépasse jamais les légumes."
          },
          {label: 'Cuisson', text: "~30 min. Piquer les légumes — s'ils sont tendres, c'est prêt."},
          {
            label: 'Pas de sel',
            text: 'Préférer les bouillons cubes (bio si possible) — ils salent et donnent du goût.'
          },
          {
            label: 'Pas de pommes de terre',
            text: 'Ça donne une texture bizarre. Préférer du pain ou des croûtons à côté.'
          },
          {label: 'Épices', text: 'Au pif — en début de cuisson pour infuser, à ajuster en fin.'},
          {label: 'Tips enfants', text: 'Un seul légume à la fois — les mélanges sont plus difficiles à accepter.'},
        ],
      },
      cards: [
        {
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
                {name: 'Potimarron', qty: '1'},
                {name: 'Bouillon cube de poule', qty: '1'},
                {name: 'Muscade', qty: 'q.s.'},
                {name: 'Crème liquide légère', qty: 'q.s.'},
                {name: 'Vache qui rit', qty: '1 / personne'},
                {name: 'Persil, Maggi (service)', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Cuire',
                  text: "Découper le potimarron et cuire dans l'eau avec bouillon et muscade. L'eau ne dépasse pas les légumes."
                },
                {
                  label: 'Mixer',
                  text: 'Avant de mixer, ajouter la crème et les Vache qui rit. Mixer jusqu\'à texture veloutée.'
                },
                {label: 'Servir', text: "Garnir d'un brin de persil et d'un trait de Maggi selon les goûts."},
              ],
            },
          ],
          notes: [{
            parts: [{
              label: 'Variante :',
              text: 'Curry + lait de coco se marient très bien avec le potimarron.'
            }]
          }],
        },
        {
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
                {name: 'Carottes', qty: '~500 g'},
                {name: 'Oignon', qty: '½'},
                {name: 'Bouillon de poule', qty: '1 cube'},
                {name: 'Beurre', qty: '1 morceau'},
                {name: 'Curry + cumin', qty: '½ càc chacun (~)'},
                {name: 'Crème fraîche légère', qty: '2 càs'},
                {name: 'Vache qui rit', qty: '2'},
                {name: 'Sel de Guérande (optionnel)', qty: '1 pincée'},
                {name: 'Miel (option sucré-salé)', qty: 'un peu'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Cuire',
                  text: "Cuire les carottes en morceaux avec l'oignon, le bouillon, le beurre, le curry et le cumin."
                },
                {label: 'Mixer', text: 'Ajouter crème et Vache qui rit avant de mixer.'},
                {
                  label: 'Servir',
                  text: "Saupoudrer de cumin. Goûter avant d'ajouter le sel. Option miel pour les amateurs de sucré-salé."
                },
              ],
            },
          ],
        },
        {
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
                {name: 'Chou-fleur (surgelé possible)', qty: '1 kg'},
                {name: 'Bouillon cube légumes/poule', qty: '1'},
                {name: "Huile d'olive", qty: 'généreusement'},
                {name: 'Crème fraîche', qty: '2 càs'},
                {name: 'Vache qui rit', qty: '3'},
                {name: 'Muscade', qty: 'selon goût'},
                {name: 'Parmesan/grana en poudre', qty: 'au service'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {label: 'Cuire', text: "Cuire le chou-fleur dans l'eau avec le bouillon et l'huile d'olive."},
                {label: 'Mixer', text: 'Ajouter crème, Vache qui rit et muscade avant de mixer.'},
                {label: 'Servir', text: 'Ajouter parmesan ou grana en poudre au moment de servir.'},
              ],
            },
          ],
        },
        {
          theme: 'teal',
          emoji: '🥒',
          tag: 'Velouté · ~30 min · Chaud ou froid',
          title: 'Velouté de courgettes au basilic',
          desc: 'Léger · Basilic frais de préférence',
          groups: [
            {
              type: 'ingredients',
              title: 'Ingrédients',
              items: [
                {name: 'Courgettes', qty: '1–2 / personne'},
                {name: 'Basilic frais (de préférence)', qty: 'généreusement'},
                {name: 'Crème fraîche épaisse légère', qty: 'q.s.'},
                {name: 'Vache qui rit', qty: '1 / personne'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Cuire',
                  text: "Cuire les courgettes à l'eau. Attention : elles sont très riches en eau — ne pas surcharger en liquide."
                },
                {
                  label: 'Mixer',
                  text: 'Ajouter le basilic généreusement, la crème et les Vache qui rit. Mixer jusqu\'à texture lisse.'
                },
              ],
            },
          ],
          notes: [{
            parts: [{
              label: 'Astuce :',
              text: 'Le basilic frais fait VRAIMENT la différence. Se déguste chaud ou froid selon la saison.'
            }]
          }],
        },
        {
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
                {name: 'Courge butternut', qty: '1'},
                {name: 'Bouillon cube', qty: '1'},
                {name: 'Curry', qty: 'selon goût'},
                {name: 'Lait de coco (boîte)', qty: '1'},
                {name: 'Vache qui rit', qty: '3'},
                {name: 'Crème épaisse légère', qty: '4 càs'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {label: 'Cuire', text: 'Cuire la butternut en morceaux avec le bouillon et le curry.'},
                {label: 'Coco', text: "À mi-cuisson, ajouter la boîte de lait de coco."},
                {label: 'Mixer', text: "Ajouter Vache qui rit et crème avant de mixer. Goûter et ajuster en curry."},
              ],
            },
          ],
        },
        {
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
                {name: 'Poivrons rouges', qty: '4'},
                {name: 'Tomates pelées (boîtes)', qty: '1–2'},
                {name: 'Oignon', qty: '½'},
                {name: 'Paprika', qty: 'q.s.'},
                {name: 'Chorizo (ou Nduja)', qty: 'selon goût'},
                {name: 'Vache qui rit', qty: '2'},
                {name: 'Crème fraîche épaisse légère', qty: '4 càs'},
                {name: 'Rondelles chorizo (service)', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {label: 'Cuire', text: "Cuire poivrons, tomates pelées, oignon et paprika dans l'eau."},
                {
                  label: 'Chorizo',
                  text: "À mi-cuisson, ajouter le chorizo en petits morceaux (ou la Nduja pour un goût fumé)."
                },
                {label: 'Mixer', text: 'Ajouter Vache qui rit et crème avant de mixer.'},
                {label: 'Servir', text: 'Ajouter quelques rondelles de chorizo dans l\'assiette.'},
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Entrées & Plats',
      cards: [
        {
          theme: 'green',
          emoji: '🥬',
          tag: 'Vapeur · ~180°C · 30–45 min',
          title: 'Artichauts vapeur & vinaigrette',
          desc: 'Végétarien · Simple & savoureux',
          labels: ['vegetarien'],
          groups: [
            {
              type: 'ingredients',
              title: 'Ingrédients',
              items: [
                {name: 'Artichauts (gros ou moyens)', qty: '2 à 4'},
                {name: 'Feuille de laurier (optionnelle)', qty: '1'},
                {name: 'Sel', qty: 'q.s.'},
              ],
            },
            {
              type: 'ingredients',
              title: 'Vinaigrette',
              items: [
                {name: "Huile (olive ou neutre)", qty: '3 càs'},
                {name: 'Vinaigre (vin rouge ou cidre)', qty: '1 càs'},
                {name: 'Moutarde', qty: '1 càc'},
                {name: 'Échalote hachée (optionnelle)', qty: '1'},
                {name: 'Sel, poivre', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Préparer',
                  text: 'Couper la tige à ras, retirer les premières feuilles dures. Rincer soigneusement.'
                },
                {
                  label: 'Cuisson',
                  text: 'Placer dans un plat tête vers le haut. Ajouter sel et laurier. Mode vapeur ou combiné à ~180°C, 30 à 45 min.'
                },
                {
                  label: 'Vinaigrette',
                  text: "Mélanger moutarde, vinaigre, sel, poivre. Fouetter en ajoutant l'huile pour émulsionner. Incorporer l'échalote."
                },
              ],
            },
          ],
          notes: [{parts: [{label: 'Astuce :', text: "Prêts quand une feuille s'arrache facilement."}]}],
        },
        {
          theme: 'terracotta',
          emoji: '🍞',
          tag: 'Four · ~200°C · 5–10 min',
          title: 'Bruschetta',
          desc: '3 variantes de garnitures',
          groups: [
            {
              type: 'steps',
              title: 'Base',
              items: [
                {label: 'Four', text: "Préchauffer à ~200°C. Badigeonner le pain légèrement d'huile d'olive."},
                {label: 'Griller', text: 'Faire griller au four 5 à 10 min jusqu\'à ce que ce soit croustillant.'},
                {label: 'Ail', text: 'Frotter une gousse d\'ail sur le pain chaud pour plus de goût.'},
              ],
            },
            {
              type: 'variantes',
              title: 'Garnitures',
              style: 'margin-top:20px',
              items: [
                {label: 'Version 1', text: 'Tomates · Oignon · Avocat · Chèvre'},
                {label: 'Version 2', text: 'Tomates · Oignon · Chorizo'},
                {label: 'Version 3', text: 'Tomates · Mozzarella · Avocat'},
              ],
            },
          ],
        },
        {
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
                {name: 'Pommes de terre (type bintje)', qty: '150 g'},
                {name: 'Farine (ajuster selon texture)', qty: '~100 g'},
                {name: 'Œuf', qty: '½'},
                {name: 'Sel', qty: 'q.s.'},
                {name: 'Muscade ou parmesan (optionnel)', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Cuire',
                  text: "Cuire dans l'eau bouillante salée 20 à 30 min. Égoutter et éplucher encore chaudes (la peau part seule)."
                },
                {label: 'Écraser', text: "Écraser à la fourchette jusqu'à purée fine sans morceaux. Laisser tiédir."},
                {
                  label: 'Pâte',
                  text: "Ajouter l'œuf, le sel et la muscade. Incorporer la farine progressivement jusqu'à ce que ça ne colle plus. Ne pas trop pétrir."
                },
                {label: 'Façonner', text: 'Rouler en boudin de ~2 cm, re-fariner, couper en tronçons de 2 cm.'},
                {
                  label: 'Cuisson',
                  text: "Plonger dans l'eau bouillante salée. Retirer à l'écumoire dès qu'ils remontent à la surface (1 à 2 min)."
                },
              ],
            },
          ],
          notes: [
            {parts: [{label: 'Attention :', text: 'Ne pas trop pétrir — sinon les gnocchis seront durs.'}]},
            {
              parts: [{
                label: 'Idées de sauce :',
                text: 'Gorgonzola au mascarpone, fondu avec un peu d\'eau de cuisson + topping noix concassées ou lardons grillés.'
              }]
            },
          ],
        },
        {
          theme: 'teal',
          emoji: '🍕',
          tag: 'Four max 300°C · 7–10 min · Pour 2',
          title: 'Pâte à pizza maison',
          desc: 'Croustillante · Levure boulangère',
          groups: [
            {
              type: 'ingredients',
              title: 'Ingrédients',
              items: [
                {name: 'Farine T45 ou T55', qty: '250 g'},
                {name: 'Eau tiède', qty: '150 ml'},
                {name: 'Sel', qty: '5 g'},
                {name: 'Sucre', qty: '5 g'},
                {name: 'Levure boulangère sèche', qty: '3,5 g (ou 10 g fraîche)'},
                {name: "Huile d'olive", qty: '15 ml'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Levure',
                  text: "Mélanger l'eau tiède avec le sucre et la levure. Laisser reposer 10 min jusqu'à ce que ça mousse."
                },
                {
                  label: 'Pâte',
                  text: "Dans un saladier, verser la farine et le sel. Ajouter eau/levure puis l'huile d'olive. Pétrir 10 min."
                },
                {
                  label: 'Levée',
                  text: "Couvrir d'un torchon humide. Laisser lever 1h à 1h30 dans un endroit tiède jusqu'à ce que la pâte double."
                },
                {
                  label: 'Façonnage',
                  text: 'Dégazer la pâte. Diviser en boules et étaler très finement — plus c\'est fin, plus ce sera croustillant.'
                },
                {
                  label: 'Cuisson',
                  text: 'Four au max (300°C) avec plaque ou pierre à pizza. Garnir et enfourner 7 à 10 min jusqu\'à croûte bien dorée.'
                },
              ],
            },
          ],
          notes: [{
            parts: [{
              label: 'Astuce croustillante :',
              text: "Badigeonner légèrement les bords avec un peu d'huile d'olive avant d'enfourner."
            }]
          }],
        },
        {
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
                {name: 'Pommes de terre (précuites)', qty: 'selon convives'},
                {name: 'Chorizo ou jambon tranché fin', qty: 'selon goût'},
                {name: 'Fromage à gratiner (comté, gruyère…)', qty: 'q.s.'},
                {name: 'Œufs, crème, lait', qty: 'q.s.'},
                {name: 'Sel, poivre, fines herbes', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Couche 1',
                  text: 'Rondelles de PdT précuites, fromage, mélange œuf/crème/lait/sel/poivre/herbes, chorizo ou jambon.'
                },
                {label: 'Couche 2', text: 'Répéter : PdT, crème, chorizo, fromage.'},
                {label: 'Cuisson', text: 'Cuire au four jusqu\'à ce que le dessus soit bien gratiné.'},
              ],
            },
          ],
        },
        {
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
                {name: 'Courge butternut', qty: '1'},
                {name: 'Champignons finement émincés', qty: 'selon goût'},
                {name: 'Oignons', qty: 'selon goût'},
                {name: 'Margarine', qty: 'q.s.'},
                {name: 'Crème', qty: '1 càs'},
                {name: 'Muscade, sel, poivre', qty: 'q.s.'},
                {name: 'Fromage à gratiner', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Base',
                  text: 'Faire revenir oignons et champignons dans la margarine. Placer dans un plat à gratin beurré.'
                },
                {
                  label: 'Purée',
                  text: 'Cuire la butternut à l\'eau. Réduire en purée avec sel, poivre, muscade, margarine et crème.'
                },
                {
                  label: 'Gratiner',
                  text: 'Étaler la purée sur la base champignons. Ajouter le fromage. Gratiner au four.'
                },
              ],
            },
          ],
        },
        {
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
                {name: 'Riz', qty: '2 portions'},
                {name: 'Poisson blanc', qty: '2 portions'},
                {name: 'Lait de coco', qty: '~300 ml'},
                {name: 'Lait + eau (cuisson)', qty: 'q.s.'},
                {name: 'Curry, piment de Cayenne', qty: 'selon goût'},
                {name: 'Fines herbes, sel, huile', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {label: 'Riz', text: "Faire revenir le riz dans le wok avec un peu d'huile jusqu'à translucide."},
                {label: 'Épices', text: 'Ajouter curry, piment de Cayenne, fines herbes et sel.'},
                {label: 'Coco', text: 'Ajouter le lait de coco. Mijoter en ajoutant lait et eau régulièrement.'},
                {
                  label: 'Poisson',
                  text: "Précuire le poisson, l'émietter et l'incorporer. Mijoter ~20 min en ajustant les épices."
                },
              ],
            },
          ],
        },
        {
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
                {name: 'Escalopes émincées', qty: '500 g'},
                {name: 'Oignons', qty: 'selon goût'},
                {name: 'Poivrons', qty: 'selon goût'},
                {name: 'Chorizo en dés', qty: 'selon goût'},
                {name: 'Lardons fumés', qty: 'selon goût'},
                {name: "Épices à l'espagnole", qty: 'q.s.'},
                {name: 'Crème liquide', qty: '25 cl'},
                {name: 'Gruyère râpé', qty: '1 sachet'},
                {name: 'Pains pita', qty: 'selon convives'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Cuire',
                  text: "Faire revenir les escalopes émincées avec oignons, poivrons, chorizo, lardons et épices à l'espagnole."
                },
                {label: 'Crème', text: 'Ajouter la crème liquide et le gruyère râpé. Laisser mijoter.'},
                {label: 'Servir', text: 'Garnir les pains pita humidifiés et chauffés avec la préparation.'},
              ],
            },
          ],
        },
        {
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
                {name: 'Pâtes feuilletées', qty: '2'},
                {name: 'Pommes de terre Rosa', qty: '8'},
                {name: 'Roquefort', qty: '250 g'},
                {name: 'Lardons fumés', qty: 'selon goût'},
                {name: 'Champignons de Paris', qty: 'selon goût'},
                {name: 'Oignons', qty: '2'},
                {name: 'Crème fraîche', qty: '3 càs'},
                {name: 'Vin blanc', qty: 'un verre'},
                {name: 'Sel, poivre, muscade', qty: 'q.s.'},
                {name: "Jaune d'œuf (dorure)", qty: '1'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'PdT',
                  text: 'Couper les PdT en rondelles fines. Disposer dans une passette avec sel, poivre et muscade (1h).'
                },
                {
                  label: 'Garniture',
                  text: "Faire revenir lardons puis champignons. Émincer les oignons et les faire revenir dans un peu de vin blanc jusqu'à transparence."
                },
                {
                  label: 'Montage',
                  text: 'Sur la 1ère pâte : couche de PdT, puis lardons et Roquefort en dés. Terminer par une couche de PdT.'
                },
                {label: 'Fermer', text: "Refermer la tourte et badigeonner d'un jaune d'œuf. Cuire au four."},
                {
                  label: 'Finition',
                  text: 'Ajouter 3 càs de crème fraîche 5 min avant de servir. Laisser cuire encore 5 min.'
                },
              ],
            },
          ],
        },
        {
          theme: 'green',
          emoji: '🍅',
          tag: 'Wok · Mijoté',
          title: 'Haricots blancs à la tomate',
          desc: 'Simple & réconfortant · Option piment de Cayenne',
          groups: [
            {
              type: 'ingredients',
              title: 'Ingrédients',
              items: [
                {name: 'Haricots blancs (boîte)', qty: '1'},
                {name: 'Sauce tomate', qty: 'selon goût'},
                {name: 'Oignon', qty: 'un peu'},
                {name: 'Ail, persil, sel, poivre', qty: 'q.s.'},
                {name: 'Vin blanc', qty: '¼ verre'},
                {name: 'Beurre', qty: '~100 g'},
                {name: 'Crème fraîche + Vache qui rit', qty: 'en fin'},
                {name: 'Piment de Cayenne (optionnel)', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Wok',
                  text: "Mettre tous les ingrédients dans le wok (haricots, sauce tomate, oignon, ail, persil, sel, poivre, vin blanc, beurre). Laisser mijoter."
                },
                {
                  label: 'Finition',
                  text: 'En fin de cuisson, ajouter crème fraîche et Vache qui rit. Éventuellement saupoudrer de piment de Cayenne.'
                },
              ],
            },
          ],
        },
        {
          theme: 'navy',
          emoji: '🐟',
          tag: 'Four · Rapide',
          title: 'Filets d\'églefin marinade moutarde-citron',
          desc: 'Léger & parfumé',
          groups: [
            {
              type: 'ingredients',
              title: 'Marinade',
              items: [
                {name: 'Jus de citron', qty: 'q.s.'},
                {name: "Huile d'olive", qty: '6 càs'},
                {name: 'Moutarde', qty: '2 càc'},
                {name: 'Ail', qty: 'selon goût'},
                {name: 'Sel, poivre noir, persil', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {label: 'Marinade', text: "Mélanger jus de citron, huile d'olive, moutarde et ail dans un bol."},
                {
                  label: 'Poisson',
                  text: 'Étaler la marinade sur les filets au pinceau. Saupoudrer de sel, poivre noir et persil.'
                },
                {label: 'Cuisson', text: "Cuire au four selon l'épaisseur des filets."},
              ],
            },
          ],
        },
        {
          theme: 'caramel',
          emoji: '🐠',
          tag: 'Wok · Pour 3 repas environ',
          title: 'Curry de patates & poisson blanc coco',
          desc: 'Safran, cumin, coriandre · Lait de coco',
          groups: [
            {
              type: 'ingredients',
              title: 'Ingrédients',
              items: [
                {name: 'Pommes de terre (précuites en dés)', qty: 'selon convives'},
                {name: 'Poisson blanc (vapeur, émietté)', qty: '2 morceaux'},
                {name: 'Lait de coco (conserve)', qty: '1'},
                {name: 'Jus de citron', qty: 'q.s.'},
                {name: 'Curry, ail, sel, poivre', qty: 'q.s.'},
                {name: 'Safran, cumin, coriandre, piment', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Wok',
                  text: 'Mettre tous les ingrédients dans le wok : PdT précuites, lait de coco, poisson émietté, jus de citron.'
                },
                {
                  label: 'Épices',
                  text: 'Ajouter curry, ail, sel, poivre, safran, cumin, coriandre, piment. Mijoter et ajuster selon les goûts.'
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Sauces & accompagnements',
      cards: [
        {
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
                {name: 'Basilic', qty: 'généreusement'},
                {name: 'Tofu soyeux au basilic', qty: '100 g'},
                {name: "Huile d'olive", qty: '100 ml'},
                {name: 'Amandes', qty: 'selon goût'},
                {name: 'Ail', qty: 'selon goût'},
                {name: 'Sel', qty: 'q.s.'},
                {name: 'Piment (optionnel)', qty: 'q.s.'},
                {name: 'Jus de citron (optionnel)', qty: 'q.s.'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Mixer',
                  text: 'Mettre tous les ingrédients dans le bol mixeur et mixer jusqu\'à consistance lisse.'
                },
                {label: 'Servir', text: 'Balance sur des pâtes. C\'est tout !'},
              ],
            },
          ],
        },
        {
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
                {name: 'Œufs', qty: '6'},
                {name: 'Eau tiède', qty: '15 cl'},
                {name: 'Sucre', qty: '60 ml (¼ cup)'},
                {name: 'Sauce soja', qty: '80 ml (⅓ cup)'},
                {name: 'Gousses d\'ail hachées', qty: '4'},
                {name: 'Vinaigre', qty: '2 c.café'},
                {name: 'Glutamate (optionnel)', qty: '1 pincée'},
                {name: 'Green onions (optionnels)', qty: '1–2 branches'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Œufs mollets',
                  text: "Faire bouillir exactement 6 minutes. Préparer un saladier d'eau glacée et y plonger les œufs immédiatement."
                },
                {
                  label: 'Écaler',
                  text: 'Après quelques minutes, éclater et peler la coque et la petite peau délicatement.'
                },
                {
                  label: 'Marinade',
                  text: "Dissoudre le sucre dans l'eau tiède. Ajouter sauce soja, vinaigre et les autres ingrédients."
                },
                {
                  label: 'Mariner',
                  text: 'Plonger les œufs et les solides dans la marinade. Réfrigérer au minimum 1h, idéalement 24h.'
                },
              ],
            },
          ],
          notes: [{
            parts: [{
              label: 'Astuce contenant :',
              text: 'Prévoir un récipient suffisamment haut pour que les œufs soient bien immergés dans la marinade.'
            }]
          }],
        },
      ],
    },
    {
      label: 'Goûters & desserts',
      cards: [
        {
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
                {name: 'Œufs', qty: '4'},
                {name: 'Compote', qty: '250 g'},
                {name: 'Farine complète', qty: '250 g'},
                {name: 'Levure chimique', qty: '13 g'},
                {name: 'Chocolat noir (pépites)', qty: '125 g'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {label: 'Mélanger', text: 'Battre les œufs avec la compote jusqu\'à obtenir un mélange homogène.'},
                {label: 'Incorporer', text: 'Ajouter la farine et la levure, bien mélanger.'},
                {label: 'Pépites', text: "Hacher le chocolat grossièrement et l'incorporer à la pâte."},
                {label: 'Cuisson', text: 'Verser dans les moules et enfourner à 180°C pendant 20 à 25 minutes.'},
              ],
            },
          ],
          notes: [{
            parts: [{
              label: 'Astuce :',
              text: "Pas besoin de laisser reposer la pâte. Enfourner directement !"
            }]
          }],
        },
        {
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
                {name: 'Œufs', qty: '4'},
                {name: 'Compote', qty: '250 g'},
                {name: 'Farine complète', qty: '250 g'},
                {name: 'Levure chimique', qty: '13 g'},
                {name: "Lait d'amande", qty: '150 ml'},
                {name: 'Margarine végétale', qty: '25 g'},
                {name: 'Chocolat noir (optionnel)', qty: '125 g'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {label: 'Mélanger', text: 'Battre les œufs avec la compote et la margarine fondue.'},
                {
                  label: 'Incorporer',
                  text: "Ajouter la farine et la levure, puis le lait d'amande progressivement pour une pâte fluide. Ajouter les pépites si souhaité."
                },
                {label: 'Repos', text: 'Laisser reposer la pâte 15 à 30 minutes à température ambiante.'},
                {label: 'Cuisson', text: 'Faire chauffer le gaufrier et cuire 3 à 5 minutes par gaufre.'},
              ],
            },
          ],
          notes: [{
            parts: [{
              label: 'Astuce :',
              text: 'Utiliser une margarine végétale pour garder la recette sans lactose.'
            }]
          }],
        },
        {
          theme: 'plum',
          emoji: '🧁',
          tag: 'Four · 140°C · 15 min',
          title: 'Muffins moelleux au Nutella',
          desc: '100% végétal · Poudre d\'amande · Ultra moelleux',
          labels: ['vegetarien', 'sans-lactose'],
          groups: [
            {
              type: 'ingredients',
              title: 'Ingrédients',
              subtitle: '(version x1,25 entre parenthèses)',
              items: [
                {name: 'Farine', qty: '300 g (375)'},
                {name: "Poudre d'amande", qty: '100 g (125)'},
                {name: 'Sucre blanc', qty: '170 g (200)'},
                {name: 'Sucre roux', qty: '30 g (50)'},
                {name: 'Sel', qty: '1 pincée'},
                {name: 'Levure chimique', qty: '1 sachet (1,25)'},
                {name: 'Huile végétale', qty: '125 ml (160)'},
                {name: 'Lait végétal', qty: '375 ml (470)'},
                {name: "Arôme d'amande amère", qty: '1 càc'},
                {name: 'Nutella', qty: '1 bonne cuillère / muffin'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Sec',
                  text: 'Mélanger la farine, la poudre d\'amande, les sucres, le sel et la levure dans un grand saladier.'
                },
                {
                  label: 'Liquide',
                  text: "Ajouter l'huile végétale, le lait végétal et l'arôme d'amande amère. Mélanger jusqu'à pâte homogène."
                },
                {
                  label: 'Nutella',
                  text: 'Répartir la pâte dans les moules. Déposer une bonne cuillère de Nutella au centre de chaque muffin.'
                },
                {label: 'Cuisson', text: 'Enfourner à 140°C pendant 15 min. Le cœur doit rester moelleux !'},
              ],
            },
          ],
        },
        {
          theme: 'terracotta',
          emoji: '🍊',
          tag: 'Four · 180°C · 15–18 min · ~40 mini cookies',
          title: "Biscuits pelures d'orange & pépites de chocolat",
          desc: "Anti-gaspi · Orange & chocolat noir",
          groups: [
            {
              type: 'ingredients',
              title: 'Ingrédients',
              items: [
                {name: "Pelures d'orange", qty: '1'},
                {name: 'Sucre', qty: '150 g'},
                {name: 'Margarine', qty: '85 g'},
                {name: 'Œuf', qty: '1'},
                {name: 'Farine', qty: '280 g'},
                {name: 'Levure chimique', qty: '½ sachet'},
                {name: 'Sel', qty: '1 pincée'},
                {name: 'Chocolat noir dessert', qty: '½ tablette'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Pelures',
                  text: 'Faire bouillir les pelures 8 à 10 min. Changer l\'eau, recuire 15 min. Égoutter et laisser tiédir.'
                },
                {label: 'Base', text: "Mélanger le sucre, la margarine fondue et l'œuf."},
                {label: 'Mixer', text: 'Mixer finement les pelures tièdes et les incorporer à la préparation.'},
                {
                  label: 'Pâte',
                  text: 'Incorporer la farine, la levure et le sel. Si trop sèche, ajouter un filet de jus d\'orange ou lait végétal.'
                },
                {label: 'Chocolat', text: 'Concasser le chocolat, incorporer à la spatule. Réfrigérer 15 min.'},
                {
                  label: 'Cuisson',
                  text: 'Former des boules, déposer sur plaque. Enfourner à 180°C, 15 à 18 min. Laisser refroidir sur la plaque.'
                },
              ],
            },
          ],
          notes: [
            {
              parts: [
                {label: 'Conservation :', text: '5–6 jours en boîte hermétique, se congèle très bien.'},
                {label: 'Variante :', text: 'une pincée de cannelle ou cardamome se marie parfaitement.'},
              ],
            },
          ],
        },
        {
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
                {name: 'Sucre fin', qty: '300 g'},
                {name: 'Noix de coco râpée', qty: '150 g'},
                {name: 'Farine', qty: '1 kg'},
                {name: 'Margarine', qty: '800 g'},
                {name: 'Œufs (jaunes)', qty: '8'},
                {name: 'Vanilles Sévillanes', qty: '2 sachets'},
                {name: 'Pincée de sel', qty: '1'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Travailler',
                  text: 'Travailler d\'abord le sucre et la margarine jusqu\'à obtenir un mélange crémeux.'
                },
                {
                  label: 'Incorporer',
                  text: "Ajouter le reste des ingrédients. La pâte ne doit pas être trop mélangée."
                },
                {label: 'Cuisson', text: 'Cuire 30 min à four doux (~160°C).'},
              ],
            },
          ],
        },
        {
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
                {name: 'Yaourt de brebis', qty: '120-125 g'},
                {name: 'Sucre vergeoise', qty: '100 g'},
                {name: 'Sucre roux', qty: '50 g'},
                {name: 'Margarine végétale', qty: '120 g'},
                {name: 'Farine', qty: '230 g'},
                {name: 'Levure chimique', qty: '1 sachet'},
                {name: "Arôme amande amère", qty: '1 càc'},
                {name: 'Sel', qty: '1 pincée'},
              ],
            },
            {
              type: 'steps',
              title: 'Préparation',
              items: [
                {
                  label: 'Mélanger',
                  text: 'Dans un bol, mélanger le yaourt, les sucres, et les oeufs. Faire fondre la margarine et l\'ajouter à la préparation. Ajouter la farine, la levure, et le sel.'
                },
                {
                  label: 'Diviser',
                  text: "Diviser la pâte en 2. Dans l'une, ajouter le cacao. Si trop compacte, ajouter quelques càs de lait végétal."
                },
                {label: 'Verser', text: 'Verser en alternance les 2 pâtes dans un moule pour obtenir un effet marbré.'},
                {label: 'Cuire', text: "Enfourner 45 min ou jusqu'à ce qu'une lame insérée au centre ressorte propre."},
              ],
            },
          ],
        },
      ],
    },
  ],
};
