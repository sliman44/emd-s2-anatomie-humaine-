export type QCMOption = {
  letter: string;
  text: string;
  isCorrect: boolean;
  justification: string;
};

export type QCM = {
  id: number;
  vignette?: string;
  question: string;
  options: QCMOption[];
};

export const qcmData: QCM[] = [
  {
    id: 1,
    vignette: "Lors d'une extraction chirurgicale d'une dent de sagesse mandibulaire incluse avec importante alvéolyse, le patient rapporte en post-opératoire une perte de sensibilité de l'hémi-langue et du menton homo-latéraux.",
    question: "Concernant le nerf trijumeau (V) et de ses branches, quelles sont les propositions exactes ?",
    options: [
      {
        letter: "A",
        text: "Le nerf lingual, issu du tronc postérieur du V3, innerve les deux tiers antérieurs de la langue.",
        isCorrect: true,
        justification: "Vrai. Le nerf lingual assure la sensibilité générale de la muqueuse des 2/3 antérieurs de la langue."
      },
      {
        letter: "B",
        text: "Le nerf mandibulaire (V3) quitte le crâne en traversant le foramen rond.",
        isCorrect: false,
        justification: "Faux. Le V3 passe par le foramen ovale. C'est le nerf maxillaire (V2) qui emprunte le foramen rond."
      },
      {
        letter: "C",
        text: "La racine motrice du trijumeau provient de la 2ème colonne motrice branchiale et innerve les muscles masticateurs.",
        isCorrect: true,
        justification: "Vrai. Le noyau moteur du V appartient à la 2ème colonne motrice branchiale, liée au 1er arc branchial."
      },
      {
        letter: "D",
        text: "Le ganglion trigéminal de Gasser est localisé dans la fosse cérébrale postérieure.",
        isCorrect: false,
        justification: "Faux. Il est localisé dans la fosse cérébrale moyenne, à la face supérieure du rocher (cavum de Meckel)."
      },
      {
        letter: "E",
        text: "Le nerf alvéolaire inférieur donne le nerf mentonnier au niveau du foramen mentonnier.",
        isCorrect: true,
        justification: "Vrai. C'est la branche terminale sensitive du nerf alvéolaire inférieur destinée à la lèvre inférieure et au menton."
      }
    ]
  },
  {
    id: 2,
    question: "À propos du nerf facial (VII) et de ses fonctions, quelles sont les propositions exactes ?",
    options: [
      {
        letter: "A",
        text: "La portion intra-pétreuse tympanique du nerf facial est le siège de la réunion des racines VII et VII bis en un tronc commun.",
        isCorrect: true,
        justification: "Vrai. C'est au niveau de la portion tympanique (2ème portion) que les deux racines s'unissent."
      },
      {
        letter: "B",
        text: "Le nerf facial assure l'innervation motrice exclusive du muscle releveur de la paupière supérieure.",
        isCorrect: false,
        justification: "Faux. Bien que le VII innerve l'orbiculaire de l'œil (fermeture), le releveur de la paupière est innervé par le nerf oculomoteur (III)."
      },
      {
        letter: "C",
        text: "La corde du tympan, branche collatérale intra-pétreuse du VII, assure l'innervation gustative des 2/3 antérieurs de la langue.",
        isCorrect: true,
        justification: "Vrai. Via le nerf intermédiaire (VII bis), la corde du tympan véhicule les fibres sensorielles du goût."
      },
      {
        letter: "D",
        text: "Les branches terminales du nerf facial se divisent à l'intérieur de la glande submandibulaire.",
        isCorrect: false,
        justification: "Faux. La division terminale du nerf facial (branches temporo-faciale et cervico-faciale) se fait dans la glande parotide."
      },
      {
        letter: "E",
        text: "Le nerf du muscle stapédien (de l'étrier) est une branche collatérale extra-pétreuse du nerf facial.",
        isCorrect: false,
        justification: "Faux. Le nerf du muscle de l'étrier est une branche collatérale intra-pétreuse (3ème portion mastoïdienne)."
      }
    ]
  },
  {
    id: 3,
    vignette: "Examen clinique d'un patient victime d'un traumatisme de l'étage moyen de la face compromettant l'appareil manducateur.",
    question: "Sélectionnez les propositions correctes concernant les muscles masticateurs élévateurs :",
    options: [
      {
        letter: "A",
        text: "Le muscle temporal prend en partie son origine sur la ligne courbe temporale inférieure.",
        isCorrect: true,
        justification: "Vrai. Il naît de toute l'étendue de la fosse temporale jusqu'à la ligne courbe temporale inférieure."
      },
      {
        letter: "B",
        text: "Le muscle masséter est innervé par le nerf temporo-buccal, collatérale du V3.",
        isCorrect: false,
        justification: "Faux. Le masséter est innervé par le nerf massétérin, branche terminale du nerf temporo-massétérin."
      },
      {
        letter: "C",
        text: "L'action synchrone des faisceaux postérieurs des deux muscles temporaux provoque la diduction de la mandibule.",
        isCorrect: false,
        justification: "Faux. Les faisceaux postérieurs du muscle temporal sont rétropulseurs et élévateurs de la mandibule. La diduction est assurée par le ptérygoïdien latéral."
      },
      {
        letter: "D",
        text: "Le faisceau superficiel du muscle masséter s'insère sur le bord inférieur de l'arcade zygomatique.",
        isCorrect: true,
        justification: "Vrai. Il s'insère sur les trois quarts antérieurs du bord inférieur de l'arcade zygomatique."
      },
      {
        letter: "E",
        text: "Les fibres convergentes du muscle temporal se terminent sur l'apophyse coronoïde de la mandibule.",
        isCorrect: true,
        justification: "Vrai. Leurs fibres convergent en un tendon puissant qui s'attache sur le sommet et les bords de l'apophyse coronoïde."
      }
    ]
  },
  {
    id: 4,
    question: "Concernant la glande parotide, quelles sont les affirmations justes ?",
    options: [
      {
        letter: "A",
        text: "C'est la plus volumineuse des glandes salivaires et elle pèse environ 60 à 70 grammes.",
        isCorrect: false,
        justification: "Faux. Bien que la plus volumineuse, son poids moyen est d'environ 25-30 grammes."
      },
      {
        letter: "B",
        text: "Son canal excréteur principal, le canal de Sténon, s'ouvre dans le vestibule oral en regard du collet de la 1ère ou 2ème molaire supérieure.",
        isCorrect: true,
        justification: "Vrai. Le conduit parotidien perfore le muscle buccinateur pour s'aboucher à ce niveau précis."
      },
      {
        letter: "C",
        text: "Elle est innervée par les nerfs crâniens VII (facial) et IX (glossopharyngien).",
        isCorrect: true,
        justification: "Vrai. Son innervation sécrétoire dépend du IX (via le ganglion otique) mais elle est également au contact de ramifications du nerf trijumeau et du facial (qui la traverse)."
      },
      {
        letter: "D",
        text: "Le lit parotidien est délimité en arrière par le muscle masséter et la branche montante de la mandibule.",
        isCorrect: false,
        justification: "Faux. Ces structures forment la limite antérieure. L'arrière est limité par l'apophyse mastoïde et le sterno-cléido-mastoïdien."
      },
      {
        letter: "E",
        text: "La vascularisation artérielle de la parotide est uniquement issue de l'artère faciale.",
        isCorrect: false,
        justification: "Faux. L'artère carotide externe traverse la glande et donne ses branches (temporale superficielle, maxillaire)."
      }
    ]
  },
  {
    id: 5,
    vignette: "Après une chirurgie de curage ganglionnaire cervical, on note l'apparition de troubles moteurs et vasculaires dans la région.",
    question: "Quelles propositions concernant l'anatomie veineuse et lymphatique cervico-faciale sont exactes ?",
    options: [
      {
        letter: "A",
        text: "La veine jugulaire interne draine le sang cérébral et fait suite au sinus sigmoïde dans le foramen jugulaire.",
        isCorrect: true,
        justification: "Vrai. Elle commence au foramen jugulaire dans le prolongement du sinus sigmoïde."
      },
      {
        letter: "B",
        text: "La veine jugulaire externe est une veine profonde, cheminent à la face médiale du muscle sterno-cléido-mastoïdien.",
        isCorrect: false,
        justification: "Faux. La veine jugulaire externe est superficielle et croise la face latérale (superficielle) du muscle sterno-cléido-mastoïdien."
      },
      {
        letter: "C",
        text: "La chaîne cervicale profonde s'inscrit dans un triangle délimité par le sterno-cléido-mastoïdien, le trapèze et la clavicule.",
        isCorrect: true,
        justification: "Vrai. Ce triangle topographique permet de repérer les ganglions de cette chaîne vitale lors des palpations ou chirurgies."
      },
      {
        letter: "D",
        text: "Les nœuds jugulo-digastriques font partie du groupe cervical superficiel.",
        isCorrect: false,
        justification: "Faux. Ils font partie de la chaine cervicale profonde, englobant les territoires tonsillaires."
      },
      {
        letter: "E",
        text: "Le tronc veineux thyro-linguo-facial se jette directement dans la veine jugulaire externe.",
        isCorrect: false,
        justification: "Faux. Il se jette généralement dans la veine jugulaire interne."
      }
    ]
  },
  {
    id: 6,
    question: "Parmi les muscles peauciers de la face, responsables des mimiques, quelles sont les affirmations valides ?",
    options: [
      {
        letter: "A",
        text: "Ils possèdent typiquement une insertion osseuse fixe et une insertion cutanée mobile profonde.",
        isCorrect: true,
        justification: "Vrai. C'est l'une des caractéristiques fondamentales permettant de mobiliser la peau et moduler l'expression faciale."
      },
      {
        letter: "B",
        text: "Le muscle platysma (peaucier du cou) abaisse la lèvre inférieure et tend la peau cervicale.",
        isCorrect: true,
        justification: "Vrai. Son action bilatérale exprime la frayeur ou la torture en tendant le cou et abaissant la mandibule."
      },
      {
        letter: "C",
        text: "Tous les muscles peauciers sont innervés par la racine motrice du nerf trijumeau (V3).",
        isCorrect: false,
        justification: "Faux. Ils sont tous innervés par le nerf facial (VII), le nerf de la mimique."
      },
      {
        letter: "D",
        text: "Le muscle corrugateur du sourcil est responsable de l'élévation des sourcils pour l'expression de la surprise.",
        isCorrect: false,
        justification: "Faux. Le corrugateur attire les sourcils vers le bas et le milieu (froncement, sévérité). C'est le muscle occipito-frontal qui les élève."
      },
      {
        letter: "E",
        text: "Le muscle buccinateur est impliqué dans l'action de souffler et dans la mastication en repoussant le bol alimentaire.",
        isCorrect: true,
        justification: "Vrai. Par sa fonction de contraction des joues, il est essentiel au repositionnement du bol alimentaire (muscle du trompettiste)."
      }
    ]
  },
  {
    id: 7,
    vignette: "Examen intrabuccal d'une masse indurée sur le plancher buccal antérieur, déviant les structures musculaires sous-jacentes.",
    question: "Concernant le plancher buccal et la loge sublinguale, quelles associations sont correctes ?",
    options: [
      {
        letter: "A",
        text: "Le muscle mylo-hyoïdien constitue une sangle principale soutenant le plancher buccal.",
        isCorrect: true,
        justification: "Vrai. Réuni sur le raphé médian, il sépare l'étage sous-mental de l'étage buccal."
      },
      {
        letter: "B",
        text: "Le conduit excréteur submandibulaire (Wharton) chemine au contact de la face supérieure du mylo-hyoïdien avant de s'aboucher.",
        isCorrect: true,
        justification: "Vrai. Il chemine entre le génio-glosse et la sublinguale pour s'ouvrir sur la caroncule linguale."
      },
      {
        letter: "C",
        text: "La glande sublinguale possède un conduit principal unique (Sténon) drainant l'intégralité de sa salive.",
        isCorrect: false,
        justification: "Faux. Le canal de Sténon appartient à la parotide. La sublinguale s'écoule par le canal de Rivinus et les petits canaux de Walther."
      },
      {
        letter: "D",
        text: "Le ventre postérieur du muscle digastrique participe à la formation du plancher buccal antérieur.",
        isCorrect: false,
        justification: "Faux. C'est le ventre antérieur qui participe, situé dans la loge sous-mentale."
      },
      {
        letter: "E",
        text: "Les canaux de Walther s'ouvrent en dehors du canal principal de Rivinus le long de l'éminence sublinguale.",
        isCorrect: true,
        justification: "Vrai. Ces petits conduits secondaires complètent le drainage de la glande sublinguale sur la crête canalaire."
      }
    ]
  },
  {
    id: 8,
    question: "Identifiez les propositions vraies concernant la langue et ses muscles extrinsèques :",
    options: [
      {
        letter: "A",
        text: "Le muscle génioglosse prend origine sur les apophyses géni inférieures de la mandibule.",
        isCorrect: false,
        justification: "Faux. Il s'insère sur les apophyses géni supérieures. (Les inférieures sont pour le génio-hyoïdien)."
      },
      {
        letter: "B",
        text: "Une paralysie unilatérale du nerf hypoglosse (XII) entraîne une déviation de la pointe de la langue vers le côté sain lors de sa protrusion.",
        isCorrect: false,
        justification: "Faux. La protrusion d'une langue paralysée dévie vers le côté atteint car l'action propulsive du génioglosse controlatéral n'est plus contrebalancée."
      },
      {
        letter: "C",
        text: "Le muscle styloglosse abaisse la base de langue et la tire en arrière, rôle clé dans la déglutition.",
        isCorrect: false,
        justification: "Faux. Le styloglosse tire la langue en haut et en arrière (rôle d'aspiration). C'est le hyoglosse qui l'abaisse et la rétracte."
      },
      {
        letter: "D",
        text: "Le muscle palatoglosse (pilier antérieur du voile) est le seul muscle linguistique majeur non innervé par le nerf hypoglosse, mais par le plexus pharyngé (IX, X).",
        isCorrect: true,
        justification: "Vrai. Associé au voile du palais, il tire la racine de la langue vers le haut et l'arrière."
      },
      {
        letter: "E",
        text: "Le muscle transverse de la langue est l'unique muscle impair de l'organe.",
        isCorrect: false,
        justification: "Faux. Le seul muscle impair de la langue est le muscle longitudinal supérieur."
      }
    ]
  },
  {
    id: 9,
    question: "À propos du nerf trijumeau (V) et de sa branche maxillaire (V2) :",
    options: [
      {
        letter: "A",
        text: "C'est un nerf purement sensitif.",
        isCorrect: true,
        justification: "Vrai. Le nerf maxillaire (V2) transporte exclusivement des fibres sensitives."
      },
      {
        letter: "B",
        text: "Il rejoint le ganglion sphéno-palatin de Meckel dans la fosse infra-temporale.",
        isCorrect: false,
        justification: "Faux. Le V2 rejoint le ganglion sphéno-palatin dans la fosse ptérygo-palatine, pas l'infra-temporale."
      },
      {
        letter: "C",
        text: "Il donne les rameaux alvéolaires supérieurs et postérieurs avant son entrée dans l'orbite.",
        isCorrect: true,
        justification: "Vrai. Ces racines plongent dans la tubérosité maxillaire pour l'innervation des molaires supérieures."
      },
      {
        letter: "D",
        text: "Son territoire d'innervation sensitive couvre une aire en forme de 'papillon' sur l'étage moyen de la face.",
        isCorrect: true,
        justification: "Vrai. Il couvre la paupière inférieure, la joue, l'aile du nez et la lèvre supérieure."
      },
      {
        letter: "E",
        text: "Il se termine par le nerf mentonnier après la traversée du foramen sous-orbitaire.",
        isCorrect: false,
        justification: "Faux. Le nerf mentonnier dérive de V3. Le V2 se termine par le nerf infra-orbitaire (sous-orbitaire)."
      }
    ]
  },
  {
    id: 10,
    vignette: "L'abaissement de la mandibule est fondamental lors du cycle masticatoire. Quel est l'impact des muscles suivants ?",
    question: "Identifiez les muscles qui possèdent une action directe et primaire dans l'abaissement de la mandibule contre résistance :",
    options: [
      {
        letter: "A",
        text: "Le muscle ptérygoïdien médial.",
        isCorrect: false,
        justification: "Faux. Le ptérygoïdien médial est fonctionnellement un puissant élévateur (synergie avec le masséter)."
      },
      {
        letter: "B",
        text: "Le ventre antérieur du muscle digastrique (si l'os hyoïde est fixé).",
        isCorrect: true,
        justification: "Vrai. Avec les muscles sous-hyoïdiens jouant les fixateurs de l'os hyoïde, son contraction abaisse le maxillaire inférieur."
      },
      {
        letter: "C",
        text: "Le muscle ptérygoïdien latéral (chef inférieur).",
        isCorrect: true,
        justification: "Vrai. Bien qu'essentiellement propulseur et diducteur, il initie et facilite l'ouverture buccale en tractant le condyle en avant et en bas."
      },
      {
        letter: "D",
        text: "Le muscle stylo-hyoïdien.",
        isCorrect: false,
        justification: "Faux. Le stylo-hyoïdien est situé trop en arrière; il tire l'os hyoïde en haut et en arrière."
      },
      {
        letter: "E",
        text: "Le muscle mylo-hyoïdien.",
        isCorrect: true,
        justification: "Vrai. Une fois l'os hyoïde immobilisé, la sangle du mylo-hyoïdien déprime la mandibule."
      }
    ]
  },
  {
    id: 11,
    question: "Le nerf hypoglosse (XII) émerge du crâne et descend dans le cou. Les propositions ci-dessous décrivent son trajet post-crânien :",
    options: [
      {
        letter: "A",
        text: "Il décrit une courbe dépendante à concavité antérieure et passe dans l'espace sous-arachnoïdien puis rétro-stylien.",
        isCorrect: false,
        justification: "Faux. Sa concavité à la sortie globale vers la face est antérieure puis médiale/supérieure, décrivant grossièrement une boucle sous la région mastoïde vers le menton (concavité supero-interne vers la base de langue)."
      },
      {
        letter: "B",
        text: "Il donne une branche anastomotique importante, l'anse du XII, avec le plexus cervical supérieur.",
        isCorrect: true,
        justification: "Vrai. L'anse cervicale est formée par l'anastomose d'une racine supérieure (venue du XII) et d'une racine inférieure (C2, C3)."
      },
      {
        letter: "C",
        text: "Dans la région bi-carotidienne, il croise la face médiale des artères carotides externe et interne.",
        isCorrect: false,
        justification: "Faux. Il croise la face latérale des carotides au niveau de la bifurcation."
      },
      {
        letter: "D",
        text: "Son innervation du muscle génio-hyoïdien ne dérive en fait que des fibres spinales de C1 l'accompagnant.",
        isCorrect: true,
        justification: "Vrai. Le XII sert de véhicule pour les fibres C1 innervant le génio-hyoïdien et les muscles thyro-hyoïdiens."
      },
      {
        letter: "E",
        text: "Il traverse le foramen jugulaire aux côtés des nerfs crâniens IX, X et XI.",
        isCorrect: false,
        justification: "Faux. Il quitte le crâne individuellement par le canal condylien antérieur (canal de l'hypoglosse)."
      }
    ]
  },
  {
    id: 12,
    question: "Concernant le voile du palais, quelles sont les affirmations correctes ?",
    options: [
      {
        letter: "A",
        text: "Le muscle tenseur du voile du palais s'insère sur le processus ptérygoïde et contourne l'hamulus avant de s'épanouir.",
        isCorrect: true,
        justification: "Vrai. Le tendon contourne l'hamulus ptérygoïdien à 90°, l'utilisant comme poulie de réflexion."
      },
      {
        letter: "B",
        text: "Le muscle abaisseur (palato-pharyngien) est situé dans le pilier antérieur de l'amygdale.",
        isCorrect: false,
        justification: "Faux. Le muscle palato-pharyngien constitue l'armature charnue du pilier postérieur du gosier."
      },
      {
        letter: "C",
        text: "Le muscle uvulaire (muscle intravélaire) est un muscle impair contrôlant la rétraction de la luette.",
        isCorrect: false,
        justification: "Faux. Le muscle de l'uvule est pair et médian."
      },
      {
        letter: "D",
        text: "L'innervation motrice du tenseur du voile dépend du nerf mandibulaire (V3) via le ganglion otique.",
        isCorrect: true,
        justification: "Vrai. C'est l'exception parmi les muscles du palais, qui sont majoritairement innervés par le plexus pharyngien (IX, X)."
      },
      {
        letter: "E",
        text: "L'isthme pharyngo-nasal est obturé lors de la déglutition par la contraction du muscle élévateur du voile.",
        isCorrect: true,
        justification: "Vrai. Il se contracte pour plaquer le voile contre la paroi pharyngée postérieure, prévenant le reflux nasal."
      }
    ]
  },
  {
    id: 13,
    vignette: "L'étude du cercle ganglionnaire péri-cervical (collier de Poirier et Cuneo) est fondamentale pour le bilan d'extension des tumeurs buccales.",
    question: "Quelles associations entre groupe ganglionnaire et territoire de drainage sont justes ?",
    options: [
      {
        letter: "A",
        text: "Le groupe sous-mental draine uniquement les incisives mandibulaires et le tissu environnant cutané.",
        isCorrect: false,
        justification: "Faux. Il draine la lèvre inférieure cutanéo-muqueuse, le menton, le plancher buccal antérieur, et la pointe de la langue."
      },
      {
        letter: "B",
        text: "Le groupe parotidien reçoit l'efférence lymphatique du palais mou et de la fosse nasale postérieure.",
        isCorrect: true,
        justification: "Vrai. Les ganglions parotidiens profonds et superficiels drainent ces zones ainsi que l'oreille et la joue."
      },
      {
        letter: "C",
        text: "Le nœud de Küttner représente le relais principal du drainage lymphatique occipital.",
        isCorrect: false,
        justification: "Faux. Le ganglion de Küttner (jugulo-digastrique) draine principalement l'amygdale, la langue et la zone postérieure buccale."
      },
      {
        letter: "D",
        text: "Les nœuds lymphatiques submandibulaires siègent au contact direct de la glande submandibulaire et drainent la joue et gencive.",
        isCorrect: true,
        justification: "Vrai. Ils sont dans la loge sous-maxillaire et reçoivent la majeure partie des lymphatiques facio-buccaux."
      },
      {
        letter: "E",
        text: "La chaîne récurrentele (latéro-trachéale) se jette préférentiellement dans les vaisseaux lymphatiques cervicaux superficiels.",
        isCorrect: false,
        justification: "Faux. Elle draine le larynx inférieur et la trachée vers le système lymphatique profond."
      }
    ]
  },
  {
    id: 14,
    question: "Concernant les caractéristiques de l'anse cervicale périphérique, l'innervation des muscles du cou :",
    options: [
      {
        letter: "A",
        text: "Les muscles sus-hyoïdiens sont d'unique innervation crânienne, à l'exception du génio-hyoïdien.",
        isCorrect: true,
        justification: "Vrai. Digastrique (V3 et VII), Stylo-hyoïdien (VII), Mylo-hyoïdien (V3), sauf le génio-hyoïdien qui est innervé par la boucle de C1 qui voyage dans le XII."
      },
      {
        letter: "B",
        text: "Le muscle omo-hyoïdien (ventre supérieur et inférieur) est stimulé par les nerfs mylo-hyoïdiens.",
        isCorrect: false,
        justification: "Faux. Les deux ventres du muscle omo-hyoïdien sont innervés par l'anse cervicale (racines spinales)."
      },
      {
        letter: "C",
        text: "L'anse de l'hypoglosse innerve le sterno-thyroïdien mais épargne le corps du thyro-hyoïdien.",
        isCorrect: false,
        justification: "Faux. L'anse anastomotique innerve tous les sous-hyoïdiens. Cependant le thyro-hyoïdien reçoit directement un rameau propre distinct du XII contenant des fibres de C1, avant la formation formelle de l'anse par la racine descendante."
      },
      {
        letter: "D",
        text: "Le muscle sterno-cléïdo-mastoïdien (SCM) protège, en superficie, l'entièreté de la chaîne lymphatique radiale interne.",
        isCorrect: true,
        justification: "Vrai. Le muscle satellite du paquet vasculo-nerveux cervical (dont la veine jugulaire interne) est le sterno-cléïdo-mastoïdien."
      },
      {
        letter: "E",
        text: "Le ventre postérieur du digastrique est innervé par un rameau collatéral venant du nerf V3.",
        isCorrect: false,
        justification: "Faux. Il est innervé par une collatérale du nerf facial (VII). C'est le ventre antérieur qui l'est par le mylo-hyoïdien (V3)."
      }
    ]
  },
  {
    id: 15,
    vignette: "L'articulation temporo-mandibulaire bénéficie d'une musculature assurant la précision de la propulsion / diduction occusale.",
    question: "Les faisceaux du complexe ptérygoïdien et leur fonction :",
    options: [
      {
        letter: "A",
        text: "Le faisceau sphénoïdal (supérieur) du ptérygoïdien latéral est principalement actif lors du serrement dentaire (élévation).",
        isCorrect: true,
        justification: "Vrai. Contrairement au chef inférieur qui initie l'abaissement, le chef supérieur stabilise le disque articulaire contre l'éminence durant le serrement."
      },
      {
        letter: "B",
        text: "Le muscle ptérygoïdien médial s'insère sur la fosse ptérygoïde et se dirige en bas, en arrière et en dehors vers l'angle de la mandibule.",
        isCorrect: true,
        justification: "Vrai. Son orientation lui permet de relever la mandibule en synergie avec le mylo-massetérique opposé, refermant la sangle sur l'angle."
      },
      {
        letter: "C",
        text: "La diduction dépend de la contraction bilatérale symétrique du muscle ptérygoïdien latéral.",
        isCorrect: false,
        justification: "Faux. La diduction nécessite la contraction unilatérale du chef inférieur, projetant un seul condyle en avant (rotation de l'autre)."
      },
      {
        letter: "D",
        text: "Le ptérygoïdien médial reçoit son innervation du ganglion de Gasser via le nerf alvéolaire inférieur.",
        isCorrect: false,
        justification: "Faux. Il la reçoit du tronc commun du nerf ptérygoïdien médial naissant directement du V3 central."
      },
      {
        letter: "E",
        text: "L'action du faisceau temporal profond sur le complexe discal est secondaire et de nature anti-rétractile.",
        isCorrect: false,
        justification: "Faux. Le temporal ramène principalement le condyle (faisceaux postérieurs) mais n'a pas de connexion discale décisive contre la rétraction, contrairement au ptérygoïdien latéral supérieur."
      }
    ]
  },
  {
    id: 16,
    question: "Lesquels de ces nerfs traversent la base du crâne de façon anatomiquement exacte ?",
    options: [
      {
        letter: "A",
        text: "Le nerf ophtalmique (V1) franchit la fissure orbitaire supérieure au sein de l'anneau de Zinn.",
        isCorrect: false,
        justification: "Faux. Seul son rameau naso-ciliaire passe intra-conique. Les nerfs frontal et lacrymal la franchissent hors de l'anneau musculo-tendineux."
      },
      {
        letter: "B",
        text: "Le nerf maxillaire (V2) émerge de la fosse cérébrale moyenne par le trou grand rond.",
        isCorrect: true,
        justification: "Vrai. Appelé foramen rond (nomenklatura), il le conduit dans l'arrière-fond de la fosse ptérygo-palatine."
      },
      {
        letter: "C",
        text: "Le nerf facial sort de son canal de Fallope par le foramen carotido-tympanique.",
        isCorrect: false,
        justification: "Faux. Il sort du crâne exocrânien au travers du foramen stylo-mastoïdien."
      },
      {
        letter: "D",
        text: "Le tronc mandibulaire quitte la loge crânienne en traversant le foramen de Vesale.",
        isCorrect: false,
        justification: "Faux. Il utilise le foramen ovale. Le foramen de Vesale (lorsqu'existant) laisse passer une veine émissaire."
      },
      {
        letter: "E",
        text: "Le nerf hypoglosse (XII) perfore la dure-mère puis atteint le canal condylien antérieur.",
        isCorrect: true,
        justification: "Vrai. Le canal hypoglosse ou condylien antérieur est sa porte de sortie exclusive vers la région cou."
      }
    ]
  },
  {
    id: 17,
    vignette: "L'anesthésie régionale du rameau tronculaire est vitale pur les asensibilité maxillo-faciale",
    question: "Parmi les nerfs issus du V2 et V3 sensitifs, relevez les trajets respectés :",
    options: [
      {
        letter: "A",
        text: "Le nerf alvéolaire supérieur et postérieur traverse la tubérosité maxillaire avant l'os temporal.",
        isCorrect: false,
        justification: "Faux. Il pénètre les foramina alvéolaires sur la tubérosité maxillaire, mais reste distant de l'os temporal."
      },
      {
        letter: "B",
        text: "Le nerf dentaire (alvéolaire) inférieur chemine dans le canal mandibulaire de l'épine de Spix jusqu'au foramen mentonnier.",
        isCorrect: true,
        justification: "Vrai. Entrant par le foramen mandibulaire (protégé par la lingula ou épine de Spix), il irrigue et innerve tous les apex ipsilatéraux."
      },
      {
        letter: "C",
        text: "Le nerf auriculo-temporal contourne l'artère de l'épine en constituant une boutonnière.",
        isCorrect: true,
        justification: "Vrai. Sa naissance typique décrit une bifurcation entourant l'artère méningée moyenne."
      },
      {
        letter: "D",
        text: "Le naso-palatin d'Oehl pénètre dans le palais primaire par le canal grand palatin, proche des pré-molaires.",
        isCorrect: false,
        justification: "Faux. Le col du canal incisif (antérieur) est son port d'entrée palatin, et non le canal grand palatin postérieur (pour le nerf grand palatin)."
      },
      {
        letter: "E",
        text: "Le nerf buccal, racine terminale motrice pour la mastication, provient du tronc antérieur du V3.",
        isCorrect: false,
        justification: "Faux. Bien que sa macro-origine soit motrice, le nerf buccal lui-même est EXCLUSIVEMENT SENSITIF pour la joue interne et externe."
      }
    ]
  },
  {
    id: 18,
    question: "L'anatomie et topographie des glandes salivaires accessoires présentent ces caractéristiques :",
    options: [
      {
        letter: "A",
        text: "Elles siègent partout dans la muqueuse orale, y compris sur la ligne médiane du palais dur antéro-supérieur.",
        isCorrect: false,
        justification: "Faux. La région antérieure dure médiane (raphé plat) est exempte de glandes salivaires accessoires, ainsi que la gencive attachée."
      },
      {
        letter: "B",
        text: "Les glandes de Von Ebner, pures sereuses, sont attachées au complexe du V lingual pour dégager les bourgeons du goût.",
        isCorrect: true,
        justification: "Vrai. Ce sont des glandes linguinales dorsales associées aux papilles caliciformes (circonvallées)."
      },
      {
        letter: "C",
        text: "Les glandes labiales sont majoritairement concentrées sur la lèvre supérieure et sont diffuses à palper.",
        isCorrect: false,
        justification: "Faux. Elles sont particulièrement denses à la lèvre inférieure d'où leur indication privilégiée pour biopsie (diagnostic de syndrome de Sjögren)."
      },
      {
        letter: "D",
        text: "Les glandes jugulaires sont situées en anneau autour de l'ostium du canal de Wharton.",
        isCorrect: false,
        justification: "Faux. Elles sont disséminées dans les tissus de la joue, particulièrement celles qualifiées de \"molaires\" entourant l'abouchement du Sténon."
      },
      {
        letter: "E",
        text: "Les glandes accessoires palatines sécrètent une salive à dominance muqueuse et sont concentrées sur la zone palatine postérieure et vélaire.",
        isCorrect: true,
        justification: "Vrai. Leurs kystes muqueux locaux (kyste d'extravasation ou mucocele) y sont caractéristiques."
      }
    ]
  },
  {
    id: 19,
    vignette: "Examen de la motricité de l'expression d'un patient montrant une incapacité à déprimer l'angle de la bouche (faciès grimaçant) de l'hémiface gauche.",
    question: "Sélectionnez le muscle moteur du phénomène décrit et son innervation responsable :",
    options: [
      {
        letter: "A",
        text: "Le muscle mentalis, innervé par la branche cervico-faciale crânienne du VII (fibres marginales et mentonnières).",
        isCorrect: false,
        justification: "Faux. Ce muscle élève particulièrement la lèvre et le menton modulant un pli (houppe du menton), il n'entraîne pas un abaissement de l'angle ou fissure."
      },
      {
        letter: "B",
        text: "Le muscle abaisseur de l'angle de la bouche (triangulaire des lèvres), innervé par les rameaux mentonniers ou cervico-faciaux du VII.",
        isCorrect: true,
        justification: "Vrai. Rattaché directement au modiolius de l'angle, ce qui cause la paralysie asymétrique (grâce au nerf facial inférieur)."
      },
      {
        letter: "C",
        text: "Le muscle risorius, sous-jacent au peaucier, innerve le sourire ou sa paralysie unilatérale tire la bouche en bas et médial.",
        isCorrect: false,
        justification: "Faux. Le muscle du sourire (Risorius de Santorini) tire la commissure latéralement mais pas puissamment vers le bas."
      },
      {
        letter: "D",
        text: "Le petit zygomatique, dont l'impact moteur cause le relâchement inférieur post-paralysie.",
        isCorrect: false,
        justification: "Faux. Son rôle est d'élever la lèvre supérieure (comme pour l'expression du dédain)."
      },
      {
        letter: "E",
        text: "Le platysma collabore étroitement via la branche cervicale du nerf facial, sa paralysie aggrave le déficit à la commissure.",
        isCorrect: true,
        justification: "Vrai. Ses fibres s'intriquant dans le complexe du tiers inférieur tissulaire, il concourt significativement à abaisser toute la lèvre et l'angle."
      }
    ]
  },
  {
    id: 20,
    question: "Pour les structures et espaces profonds de la face, déterminer ce qui est anatomiquement justifiable :",
    options: [
      {
        letter: "A",
        text: "Le rameau méningé (de Luschka) se sépare de l'origine de l'hypoglosse pour la ré-entrée dans la dure-mère occiptale.",
        isCorrect: true,
        justification: "Vrai. Une branche microscopique s'en sépare et ré-habite le crâne par une perforation durale rétrograde (collatérale du XII)."
      },
      {
        letter: "B",
        text: "La glande sub-linguale repose en inférieur sur la région profonde musculaire du génio-hyoïdien exclusivement.",
        isCorrect: false,
        justification: "Faux. Elle repose de manière principale et primordiale sur le muscle mylo-hyoïdien (plancher inférieur tendu du septum)."
      },
      {
        letter: "C",
        text: "La veine jugulaire interne draine la majorité des confluents veineux du crâne via le torcular d'Hérophile en recevant le sinus sigmoide.",
        isCorrect: true,
        justification: "Vrai. Son calobre impressionnant recueille le drainage veineux de l'ensemble encéphalique des sinus veineux craniens, issus de cet écoulement final sigmoïde intra-osseux."
      },
      {
        letter: "D",
        text: "Le muscle temporal recoit son flux vasculaire de l'artère thyroïdienne supérieure.",
        isCorrect: false,
        justification: "Faux. La perfusion émane des artères temporales profondes (issues de la maxillaire interne) et temporale superficielle."
      },
      {
        letter: "E",
        text: "Le nerf infra-orbitaire (V2), quitte la glande et le sinus avec plusieurs rameaux de sensibilité dentaire (antérieurs, moyens) dans les cloisons osseuses.",
        isCorrect: true,
        justification: "Vrai. Au cours de son coulissement canaliculaire osseux final avant la fosse crâniale, l'on observe l'artificiation des collatérales alvéolaires de type antérieur/moyen."
      }
    ]
  }
];
