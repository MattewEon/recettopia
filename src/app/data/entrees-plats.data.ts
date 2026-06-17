import {RecipeCard, RecipeSection} from '../models/recipe.models';

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
        {name: 'Artichauts (gros ou moyens)', qty: '2 à 4'},
        {name: 'Feuille de laurier (optionnelle)', qty: '1'},
        {name: 'Sel', qty: 'q.s.'},
      ],
    },
    {
      type: 'ingredients',
      title: 'Vinaigrette',
      items: [
        {name: 'Huile (olive ou neutre)', qty: '3 càs'},
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
    {
      label: 'Astuce :',
      text: "Prêts quand une feuille s'arrache facilement."
    },
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
        {name: 'Pain (baguette ou ciabatta)', qty: 'selon convives'},
        {name: "Huile d'olive", qty: 'généreusement'},
        {name: 'Ail', qty: '1 gousse'},
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
        {label: 'Ail', text: "Frotter une gousse d'ail sur le pain chaud pour plus de goût."},
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
};
const GAUFRES_PATATE_DOUCE_CURRY: RecipeCard = {
  theme: "gold",
  emoji: '🧇',
  tag: 'Gaufrier · 20–25 min · Pour 4',
  title: 'Gaufres de patate douce au curry',
  desc: 'Moelleuses · Légèrement épicées · Salées · Sans prise de tête',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Patates douces', qty: '375 g' },
        { name: 'Œufs', qty: '3' },
        { name: 'Farine de blé', qty: '90 g' },
        { name: 'Levure chimique', qty: '1 sachet' },
        { name: "Huile d'olive", qty: '1 càs' },
        { name: 'Sel', qty: '1 pincée' },
        { name: 'Curry', qty: '1 petite càc' },
        { name: 'Cube de bouillon', qty: '1' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Patate douce',
          text: 'Cuire les patates douces à l’eau avec un cube de bouillon jusqu’à ce qu’elles soient tendres.'
        },
        {
          label: 'Base',
          text: 'Dans un saladier, mélanger les œufs, la farine, la levure, l’huile d’olive, le sel et le curry.'
        },
        {
          label: 'Ajout patate douce',
          text: 'Écraser les patates douces cuites puis les incorporer au mélange.'
        },
        {
          label: 'Pâte',
          text: 'Bien mélanger jusqu’à obtenir une pâte homogène.'
        },
        {
          label: 'Cuisson',
          text: 'Cuire dans un gaufrier bien chaud jusqu’à ce que les gaufres soient dorées et croustillantes.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Astuce :',
      text: 'Servir avec une sauce yaourt citronné ou une salade pour une version complète.'
    }
  ]
};
const TARTE_CROUSTILLANTE_THON_CONCOMBRE: RecipeCard = {
  theme: 'teal',
  emoji: '🥒',
  tag: 'Four · 180°C · 30 min · Pour 4 à 6',
  title: 'Tarte croustillante thon & concombre',
  desc: 'Fraîche · Croustillante · Idéale en été · Par @charlie.ma.vie',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Pâte brisée', qty: '1' },
        { name: "Huile d'olive", qty: 'q.s.' },
        { name: 'Graines de sésame noir et blanc', qty: 'q.s.' },
        { name: 'Thon au naturel', qty: '3 boîtes' },
        { name: 'Fromage à tartiner (type St Môret)', qty: '5 càs' },
        { name: 'Oignon rouge émincé', qty: '1/2' },
        { name: 'Citron (zeste)', qty: '1' },
        { name: 'Ciboulette fraîche', qty: 'q.s.' },
        { name: 'Concombres', qty: '1 à 2 selon taille' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Fond de tarte',
          text: "Dérouler la pâte sur l'envers d'un moule à tarte. Badigeonner d'huile d'olive et parsemer de graines de sésame."
        },
        {
          label: 'Cuisson',
          text: 'Cuire à 180°C pendant environ 30 min jusqu’à obtenir une pâte bien dorée et croustillante. Laisser refroidir complètement.'
        },
        {
          label: 'Crème de thon',
          text: "Mélanger le thon égoutté, le fromage à tartiner, l'oignon rouge émincé, le zeste de citron et la ciboulette ciselée."
        },
        {
          label: 'Concombre ⚠️',
          text: 'Couper les concombres en fines rondelles. Saler légèrement, laisser dégorger quelques minutes puis éponger.'
        },
        {
          label: 'Montage',
          text: 'Sur la pâte refroidie, étaler une couche de crème de thon puis une couche de concombre. Répéter si nécessaire.'
        },
        {
          label: 'Finition',
          text: "Ajouter un filet d'huile d'olive, un peu de zeste de citron, de la ciboulette et quelques graines de sésame."
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Astuce clé :',
      text: 'Le concombre dégorgé au sel évite que la tarte rende de l’eau et ramollisse.'
    },
    {
      label: 'Variante :',
      text: 'Le fromage à tartiner peut être remplacé par du chèvre frais pour une version plus parfumée.'
    }
  ]
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
const FLAN_POIREAU_SAUMON: RecipeCard = {
  theme: 'teal',
  emoji: '🐟',
  tag: 'Four · 180°C · 25–30 min · Pour 4',
  title: 'Flan poireau-saumon',
  desc: 'Léger & savoureux',
  labels: ['sans-gluten', 'sans-lactose'],
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        {name: 'Poireaux', qty: '3'},
        {name: 'Saumon frais', qty: '200 g'},
        {name: 'Œufs', qty: '4'},
        {name: 'Crème de coco ou crème végétale', qty: '200 ml'},
        {name: 'Vin blanc', qty: 'pour faire revenir'},
        {name: 'Aneth', qty: 'généreusement'},
        {name: "Huile d'olive", qty: 'q.s.'},
        {name: 'Sel, poivre', qty: 'q.s.'}
      ],
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Poireaux',
          text: "Émincer les poireaux et les faire revenir dans un peu d'huile avec du vin blanc jusqu'à évaporation complète (~15 min)."
        },
        {
          label: 'Saumon',
          text: 'Ajouter le saumon frais en morceaux et le faire revenir avec les poireaux.'
        },
        {
          label: 'Appareil',
          text: 'Battre les œufs avec la crème végétale, l’aneth, le sel et le poivre.'
        },
        {
          label: 'Mélange',
          text: 'Incorporer les poireaux et le saumon à l’appareil.'
        },
        {
          label: 'Cuisson',
          text: 'Verser dans un plat huilé et enfourner à 180°C pendant 25 à 30 min jusqu’à ce que le flan soit pris et légèrement doré.'
        }
      ],
    },
  ],
  notes: [
    {
      label: 'Conservation :',
      text: '2 jours maximum au réfrigérateur.'
    }, {
      label: 'Astuce texture :',
      text: 'Ajouter un 5ᵉ œuf pour un flan plus ferme.'
    }
  ]
};
const FLAN_THON_TOMATES_ORIGAN: RecipeCard =   {
  theme: 'terracotta',
  emoji: '🐟',
  tag: 'Four · 180°C · 25–30 min · Pour 4',
  title: 'Flan thon tomates origan',
  labels: ["sans-gluten", "sans-lactose"],
  desc: 'Thon & tomates · Chèvre fondant · Méditerranéen',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Thon au naturel', qty: '100g' },
        { name: 'Tomates', qty: '3 à 4' },
        { name: 'Tomates pelées', qty: 'jus d\'une boîte' },
        { name: 'Bûche de chèvre', qty: '150 g' },
        { name: 'Œufs', qty: '4' },
        { name: 'Crème végétale ou classique', qty: '200 ml' },
        { name: "Huile d'olive", qty: 'q.s.' },
        { name: 'Origan (ou basilic frais)', qty: 'q.s.' },
        { name: 'Ail (optionnel)', qty: '1 petite gousse ou poudre q.s.' },
        { name: 'Sel, poivre', qty: 'q.s.' },
        { name: 'Olives noires (optionnel)', qty: 'quelques-unes' },
        { name: 'Râpé de chèvre', qty: '1 poignée' },
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Tomates 🍅',
          text: 'Epépiner et couper en dés. Faire revenir à la poêle avec un filet d\'huile, l\'ail, l\'origan et le jus des tomates pelées. Laisser réduire jusqu\'à évaporation de l\'excès d\'eau — c\'est l\'étape clé pour que le flan prenne bien.'
        },
        {
          label: 'Thon',
          text: 'Égoutter soigneusement le thon et l’émietter. L\'ajouter aux tomates en fin de réduction.'
        },
        {
          label: 'Appareil',
          text: 'Battre les œufs avec la crème, l\'origan, le sel et le poivre.'
        },
        {
          label: 'Mélange',
          text: "Incorporer le thon, les tomates poêlées, et éventuellement les olives noires."
        },
        {
          label: 'Montage',
          text: "Verser la moitié de la pâte dans un moule huilé. Disposer les rondelles de chèvre sur le dessus. Verser le reste de pâte puis saupoudrer de râpé de chèvre."
        },
        {
          label: 'Cuisson',
          text: "Cuire à 180°C pendant 25 à 30 min jusqu’à ce que le flan soit pris et légèrement doré."
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Point clé :',
      text: "Bien réduire l’eau des tomates est essentiel pour éviter un flan trop humide."
    },
    {
      label: 'Astuce :',
      text: "Le basilic frais peut remplacer l’origan pour une version plus douce et estivale."
    }
  ]
};
const FLAN_EPINARDS_CHEVRE: RecipeCard = {
  theme: 'green',
  emoji: '🧀',
  tag: 'Four · 180°C · 25–30 min · Pour 4',
  title: 'Flan épinards-chèvre',
  desc: 'Chèvre fondant · Épinards fondants · Sans pâte · ✅ Validé',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Épinards surgelés', qty: '500 g' },
        { name: 'Bûche de chèvre', qty: '150 g' },
        { name: 'Œufs', qty: '4' },
        { name: 'Crème liquide (végétale ou normale)', qty: '200 ml' },
        { name: 'Ail en poudre (optionnel)', qty: 'q.s.' },
        { name: 'Huile d’olive', qty: 'q.s.' },
        { name: 'Sel, poivre, muscade', qty: 'q.s.' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Épinards ⚠️',
          text: "Décongeler les épinards puis les essorer très fortement à la main pour retirer un maximum d’eau."
        },
        {
          label: 'Séchage',
          text: "Faire revenir les épinards à la poêle avec un peu d’huile, ail, sel et poivre pour finir d’évaporer l’humidité."
        },
        {
          label: 'Appareil',
          text: "Battre les œufs avec la crème, la muscade, le sel et le poivre."
        },
        {
          label: 'Mélange',
          text: "Incorporer les épinards à l’appareil."
        },
        {
          label: 'Montage',
          text: "Verser dans un moule huilé et disposer les rondelles de chèvre sur le dessus."
        },
        {
          label: 'Cuisson',
          text: "Cuire à 180°C pendant 25 à 30 min jusqu’à ce que le flan soit pris."
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Point clé :',
      text: "L’essorage des épinards est indispensable : trop humides, le flan ne prend pas correctement."
    }
  ]
};
const FLAN_PATATE_DOUCE_ROQUEFORT: RecipeCard = {
  theme: 'terracotta',
  emoji: '🍠',
  tag: 'Four · 180°C · 25–30 min · Pour 4',
  title: 'Flan patate douce - Roquefort',
  desc: 'Patate douce fondante · Roquefort puissant · Option noix croquantes · Sans gluten · ⚠️ Contient lactose',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Patates douces', qty: '2 moyennes' },
        { name: 'Œufs', qty: '4' },
        { name: 'Crème végétale', qty: '200 ml' },
        { name: 'Roquefort', qty: '80 à 120 g' },
        { name: 'Noix concassées (optionnel)', qty: '1 poignée' },
        { name: 'Thym ou romarin', qty: 'q.s.' },
        { name: 'Sel, poivre', qty: 'q.s.' },
        { name: "Huile d'olive (moule)", qty: 'q.s.' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Patate douce',
          text: "Cuire les patates douces à l’eau ou à la vapeur jusqu’à ce qu’elles soient tendres, puis les réduire en purée grossière."
        },
        {
          label: 'Appareil',
          text: "Battre les œufs avec la crème végétale, le thym (ou romarin), le sel et le poivre."
        },
        {
          label: 'Mélange',
          text: "Incorporer la purée de patate douce à l’appareil."
        },
        {
          label: 'Roquefort',
          text: "Émietter le Roquefort dans la préparation sans trop mélanger pour garder des poches de goût."
        },
        {
          label: 'Option croquant',
          text: "Ajouter une poignée de noix concassées dans la pâte."
        },
        {
          label: 'Cuisson',
          text: "Verser dans un moule huilé et cuire à 180°C pendant 25 à 30 min jusqu’à ce que le flan soit pris."
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Astuce :',
      text: "Le thym et le romarin renforcent très bien la douceur de la patate douce."
    },
    {
      label: 'Remarque :',
      text: "Sans gluten naturellement ; sans lactose uniquement si on remplace le Roquefort."
    }
  ]
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
          text: "Faire revenir les escalopes émincées avec oignons, poivrons, chorizo, lardons et épices à l'espagnole.",
        },
        {label: 'Crème', text: 'Ajouter la crème liquide et le gruyère râpé. Laisser mijoter.'},
        {
          label: 'Servir',
          text: 'Garnir les pains pita humidifiés et chauffés avec la préparation.',
        },
      ],
    },
  ],
};
const CHILI_CON_SIN_CARNE_EASY: RecipeCard = {
  theme: "terracotta",
  emoji: '🌶️',
  tag: '30 min · Pour 4 à 6',
  title: 'Chili con & sin carne EASY',
  desc: 'Ultra simple · Réconfortant · Version végétarienne ou carnée',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Sauce tomate', qty: '1 grand bocal ou 500 g' },
        { name: 'Haricots rouges', qty: '1 boîte ou bocal' },
        { name: 'Oignons', qty: '1 à 2' },
        { name: 'Merguez végétales ou bœuf haché', qty: '300 à 400 g' },
        { name: 'Mélange d’épices chili con carne', qty: 'q.s.' },
        { name: 'Riz', qty: 'selon convives' },
        { name: 'Cube de bouillon', qty: '1' },
        { name: "Huile d'olive", qty: '1 càs' },
        { name: 'Persil frais', qty: 'q.s.' },
        { name: 'Crème fraîche', qty: 'q.s.' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Riz',
          text: 'Cuire le riz dans une eau salée avec un cube de bouillon et un filet d’huile d’olive.'
        },
        {
          label: 'Base',
          text: 'Faire revenir les oignons émincés dans un peu d’huile d’olive.'
        },
        {
          label: 'Protéines',
          text: 'Ajouter les merguez végétales coupées en morceaux ou le bœuf haché et faire revenir quelques minutes.'
        },
        {
          label: 'Sauce',
          text: 'Ajouter la sauce tomate, les haricots rouges égouttés et les épices chili. Laisser mijoter une quinzaine de minutes.'
        },
        {
          label: 'Astuce texture',
          text: 'Ajouter une petite louche d’eau de cuisson du riz dans la sauce pour lier et ajuster la consistance.'
        },
        {
          label: 'Service',
          text: 'Servir le chili sur le riz, puis saupoudrer de persil frais et ajouter une cuillerée de crème fraîche.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Version végétarienne :',
      text: 'Utiliser des merguez végétales.'
    },
    {
      label: 'Version carnée :',
      text: 'Remplacer par du bœuf haché.'
    },
    {
      label: 'Et ZOU !',
      text: 'Recette express, nourrissante et inratable.'
    }
  ]
};
const BLANQUETTE_VEGAN_CHAMPIGNONS: RecipeCard = {
  theme: "gold",
  emoji: '🍄',
  tag: 'Cocotte · 35–45 min · Pour 4 à 6',
  title: ' "Blanquette" aux champignons',
  desc: 'Vegan · Crémeuse & bluffante',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Champignons de Paris', qty: '300 g' },
        { name: 'Pleurotes', qty: '300 g' },
        { name: 'Carottes (du bouillon)', qty: 'selon restes' },
        { name: 'Margarine', qty: '2 à 3 càs' },
        { name: 'Farine de riz', qty: '2 càs' },
        { name: 'Bouillon de légumes', qty: '500 ml' },
        { name: 'Crème de soja', qty: '150 à 200 ml' },
        { name: 'Sel, poivre, muscade', qty: 'q.s.' },
        { name: 'Riz (accompagnement)', qty: 'selon convives' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Champignons',
          text: 'Émincer les champignons de Paris et les pleurotes. Les faire revenir dans la margarine jusqu’à ce qu’ils soient bien dorés, puis réserver.'
        },
        {
          label: 'Sauce',
          text: 'Dans la même casserole, faire fondre la margarine et ajouter la farine de riz pour former un roux. Délayer progressivement avec le bouillon de légumes en fouettant jusqu’à épaississement.Ajouter la crème de soja et mélanger jusqu’à obtenir une sauce lisse et onctueuse.'
        },
        {
          label: 'Assemblage',
          text: 'Incorporer les champignons et les carottes dans la sauce.'
        },
        {
          label: 'Assaisonnement',
          text: 'Ajuster avec sel, poivre et muscade.'
        },
        {
          label: 'Service',
          text: 'Servir chaud avec du riz.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Esprit du plat :',
      text: 'Une blanquette revisitée sans viande ni produits laitiers, mais avec une texture très crémeuse.'
    },
    {
      label: 'Astuce :',
      text: 'Bien faire revenir les champignons pour concentrer les saveurs et éviter l’eau dans la sauce.'
    }
  ]
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
        {name: "Filets d'églefin", qty: 'selon convives'},
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
        {
          label: 'Marinade',
          text: "Mélanger jus de citron, huile d'olive, moutarde et ail dans un bol.",
        },
        {
          label: 'Poisson',
          text: 'Étaler la marinade sur les filets au pinceau. Saupoudrer de sel, poivre noir et persil.',
        },
        {label: 'Cuisson', text: "Cuire au four selon l'épaisseur des filets."},
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
const CURRY_HARICOTS_ROUGES_COCO: RecipeCard = {
  theme: "terracotta",
  emoji: '🍛',
  tag: 'Poêle · 25–35 min · Pour 3 à 4',
  title: 'Curry de haricots rouges au lait de coco',
  desc: 'Crémeux · Épicé · Végétarien · Ultra simple',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Haricots rouges', qty: '1 boîte' },
        { name: 'Coulis de tomates', qty: '400 ml' },
        { name: 'Lait de coco', qty: '400 ml' },
        { name: 'Ail', qty: '2 gousses' },
        { name: 'Oignon rouge', qty: '1/2' },
        { name: "Huile d'olive", qty: '1,5 càs' },
        { name: 'Poivre', qty: 'q.s.' },
        { name: 'Curcuma', qty: 'q.s.' },
        { name: 'Cumin', qty: 'q.s.' },
        { name: 'Coriandre moulue ou fraîche', qty: 'q.s.' },
        { name: 'Piment de Cayenne', qty: 'q.s.' },
        { name: 'Sel', qty: 'q.s.' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Base aromatique',
          text: 'Faire revenir l’oignon rouge émincé et l’ail dans l’huile d’olive.'
        },
        {
          label: 'Sauce',
          text: 'Ajouter les haricots rouges, le coulis de tomates et le lait de coco.'
        },
        {
          label: 'Épices',
          text: 'Assaisonner avec curcuma, cumin, coriandre, poivre et piment de Cayenne.'
        },
        {
          label: 'Mijotage',
          text: 'Laisser mijoter à feu doux jusqu’à réduction et texture épaisse, avec des oignons fondants.'
        },
        {
          label: 'Texture',
          text: 'Mixer grossièrement une partie de la préparation pour obtenir une sauce plus liée.'
        },
        {
          label: 'Finition',
          text: 'Ajuster le sel au moment du service et ajouter de la coriandre fraîche.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Service :',
      text: 'Servir avec du quinoa, du riz ou d’autres céréales.'
    },
    {
      label: 'Astuce :',
      text: 'Le mix partiel donne une texture plus crémeuse sans perdre les morceaux.'
    }
  ]
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
        {
          label: 'Riz',
          text: "Faire revenir le riz dans le wok avec un peu d'huile jusqu'à translucide.",
        },
        {label: 'Épices', text: 'Ajouter curry, piment de Cayenne, fines herbes et sel.'},
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
const NOODLES_CREMEUSES_CREVETTES: RecipeCard = {
  theme: "gold",
  emoji: '🍜',
  tag: 'Casserole · 15 min · Pour 1',
  title: 'Noodles crémeuses aux crevettes',
  desc: 'Impro express · Crémeux & relevé · Bien meilleur que des noodles nature 😄',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients',
      items: [
        { name: 'Nouilles instantanées', qty: '1 sachet' },
        { name: 'Cube de bouillon', qty: '1' },
        { name: 'Jaune d’œuf', qty: '1' },
        { name: 'Mayonnaise', qty: '1 càc' },
        { name: 'Crème fraîche', qty: '2 càs' },
        { name: 'Œuf mollet', qty: '1' },
        { name: 'Crevettes cuites', qty: 'quelques-unes' },
        { name: 'Huile pimentée', qty: 'q.s.' },
        { name: 'Coriandre fraîche', qty: 'q.s.' },
        { name: 'Trio de sésame', qty: 'q.s.' },
        { name: 'Piment de Cayenne', qty: 'q.s.' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Noodles',
          text: 'Cuire les noodles dans de l’eau avec un cube de bouillon.'
        },
        {
          label: 'Base crémeuse',
          text: 'Dans le bol de service, mélanger le jaune d’œuf, les sachets d’assaisonnement des noodles, la mayonnaise et la crème fraîche.'
        },
        {
          label: 'Émulsion',
          text: 'Prélever environ un demi-bol d’eau de cuisson des noodles et l’ajouter progressivement au mélange tout en remuant.'
        },
        {
          label: 'Assemblage',
          text: 'Égoutter les noodles puis les verser dans le bol. Mélanger pour bien les enrober de sauce.'
        },
        {
          label: 'Garniture',
          text: 'Ajouter l’œuf mollet coupé en deux et les crevettes.'
        },
        {
          label: 'Finition',
          text: 'Terminer avec l’huile pimentée, la coriandre fraîche, le trio de sésame et une pincée de piment de Cayenne.'
        }
      ]
    }
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
const GRATIN_DAUPHINOIS_RESTES_RACLETTE: RecipeCard = {
  theme: 'gold',
  emoji: '🧀',
  tag: 'Four · 200°C · 25–35 min · Pour 4 à 6',
  title: 'Gratin façon dauphinois anti-gaspi',
  desc: 'Ultra adaptable · Fondant & croustillant',
  groups: [
    {
      type: 'ingredients',
      title: 'Ingrédients (base)',
      items: [
        { name: 'Pommes de terre', qty: 'selon le plat' },
        { name: 'Beurre', qty: 'q.s. pour le plat' },
        { name: 'Crème fraîche', qty: 'q.s.' },
        { name: 'Fromage à raclette ou mélange de fromages', qty: 'q.s.' },
        { name: 'Chapelure', qty: 'q.s.' },
        { name: 'Sel, poivre', qty: 'q.s.' }
      ]
    },
    {
      type: 'ingredients',
      title: 'Options (selon restes)',
      items: [
        { name: 'Jambon sec ou jambon blanc', qty: 'q.s.' },
        { name: 'Chorizo', qty: 'q.s.' },
        { name: 'Fromage de chèvre ou fromage corse', qty: 'q.s.' },
        { name: 'Champignons', qty: 'q.s.' },
        { name: 'Oignons', qty: 'q.s.' },
        { name: 'Crème aux fines herbes', qty: 'q.s.' }
      ]
    },
    {
      type: 'steps',
      title: 'Préparation',
      items: [
        {
          label: 'Préparation du plat',
          text: 'Beurrer généreusement le plat à gratin.'
        },
        {
          label: 'Pommes de terre',
          text: 'Éplucher les pommes de terre et les couper en fines rondelles.'
        },
        {
          label: 'Montage (couches)',
          text: 'Alterner les couches dans le plat : pommes de terre, viandes ou alternatives végétariennes, éventuellement légumes (champignons, oignons), puis crème et fromage.'
        },
        {
          label: 'Répétition',
          text: 'Répéter les couches jusqu’en haut du plat.'
        },
        {
          label: 'Finition',
          text: 'Terminer impérativement par une couche de fromage pour obtenir un dessus bien gratiné.'
        },
        {
          label: 'Cuisson',
          text: 'Saupoudrer légèrement de chapelure puis cuire à 200°C pendant 25 à 35 min, jusqu’à ce que le dessus soit doré.'
        }
      ]
    }
  ],
  notes: [
    {
      label: 'Concept :',
      text: 'Recette anti-gaspi pour transformer les restes (notamment raclette) en gratin complet.'
    },
    {
      label: 'Astuce texture :',
      text: 'La crème entre chaque couche évite le côté sec et rend le gratin ultra fondant.'
    },
    {
      label: 'Conservation :',
      text: 'Une fois cuit, se conserve au frais et peut être congelé puis réchauffé au four.'
    }
  ]
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
          text: 'Rondelles de PdT précuites, fromage, mélange œuf/crème/lait/sel/poivre/herbes, chorizo ou jambon.',
        },
        {label: 'Couche 2', text: 'Répéter : PdT, crème, chorizo, fromage.'},
        {label: 'Cuisson', text: "Cuire au four jusqu'à ce que le dessus soit bien gratiné."},
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
      label: 'Astuce croustillante :',
      text: "Badigeonner légèrement les bords avec un peu d'huile d'olive avant d'enfourner.",
    },
    {
      label: 'Note :',
      text: 'Labels valables pour la pâte seule — les garnitures peuvent contenir fromage ou viande selon les goûts.',
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
      label: 'Attention :',
      text: 'Ne pas trop pétrir — sinon les gnocchis seront durs.'
    }, {
      label: 'Idées de sauce :',
      text: "Gorgonzola au mascarpone, fondu avec un peu d'eau de cuisson + topping noix concassées ou lardons grillés.",
    },
  ],
};


export const ENTREES_PLATS: RecipeSection = {
  label: 'Entrées & Plats',
  description: 'Entre entrée et plat, la différence tient davantage à l\'appétit qu\'à la recette. Ouvrir le repas, ou en être la vedette : tout est affaire de faim... ou de générosité ♥.',
  cards: [
    ARTICHAUTS_VAPEUR,
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
    PARMENTIER_BUTTERNUT,
    GRATIN_DAUPHINOIS_RESTES_RACLETTE,
    GRATIN_PDT_CHORIZO,
    PATE_PIZZA,
    GNOCCHIS_MAISON,
  ],
};
