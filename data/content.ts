// ==========================================================================
// DONNÉES ÉDITORIALES — Bénin Éternel (textes exacts du design validé)
// Séparation stricte du contenu et des composants
// ==========================================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  pad?: number; // zéro-chargement, ex. 03
  label: string;
}

export interface Portal {
  num: string;
  name: string;
  text: string;
  image: string;
  variant: "tall-left" | "top" | "mid" | "short-a" | "short-b" | "tall-right";
}

export interface HistoryStat {
  value: string;
  label: string;
}

export interface RegionDept {
  id: string;
  name: string;
  mapX: number; // position du repère sur la carte illustrée (% largeur)
  mapY: number; // position du repère sur la carte illustrée (% hauteur)
}

export interface Region {
  id: string;
  name: string;
  subtitle: string;
  tone: "green" | "gold" | "red";
  badge: string;
  image: string;
  departments: RegionDept[];
}

export interface AmazonePoint {
  num: string;
  title: string;
  text: string;
}

export interface Place {
  name: string;
  tagline: string;
  image: string;
  variant: "p1" | "p2" | "p3" | "p4" | "p5";
}

export interface MasqueStat {
  value: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}

// ---- Navigation ------------------------------------------------------------
export const navLinks: NavLink[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Découvrir", href: "#portes" },
  { label: "Culture", href: "#culture" },
  { label: "Communes", href: "#geographie" },
  { label: "Actualités", href: "#lieux" },
  { label: "À propos de", href: "#histoire" },
];

export const navCta = { label: "Explorer la carte", href: "#geographie" };

export const brand = { name: "Bénin Éternel", logo: "/images/logo.png" };

// ---- Hero ------------------------------------------------------------------
export const hero = {
  titleA: "Le Bénin, sur tous ses",
  titleGold: "plans",
  subtitle:
    "Une terre d'histoire, de culture, de création et d'avenir. Découvrez le Bénin, éternellement vivant.",
  ctaPrimary: "Explorer le Bénin",
  ctaSecondary: "Notre histoire",
  image: "/images/hero-flag.png",
};

// ---- Barre de statistiques ---------------------------------------------------
export const stats: Stat[] = [
  { value: 77, label: "Communes" },
  { value: 12, label: "Départements" },
  { value: 1960, label: "Indépendance" },
  { value: 50, suffix: "+", label: "Langues" } as Stat & { suffix: string },
  { value: 12, label: "Rois du Danhomè" },
  { value: 3, pad: 2, label: "Sites UNESCO" },
];

// ---- Six portes d'entrée -----------------------------------------------------
export const portalsSection = {
  overline: "SIX PORTES D'ENTRÉE",
  title: "Par où voulez-vous entrer dans le pays ?",
};

export const portals: Portal[] = [
  {
    num: "01",
    name: "Héritage",
    text: "Royaume du Danxomè, vodun, récades et tissus appliqués : la mémoire vivante d'un peuple.",
    image: "/images/portals/drapeau.png", // tissu appliqué, extrait du design
    variant: "tall-left",
  },
  {
    num: "02",
    name: "Évasion",
    text: "Pendjari, Ganvié, Grand-Popo, les collines de Dassa : le pays se parcourt en paysages.",
    image: "/images/portals/evasion.png",
    variant: "top",
  },
  {
    num: "03",
    name: "Vivre & entreprendre",
    text: "Zone industrielle de Glo-Djigbé, coton, port de Cotonou, diaspora : une économie qui se réinvente.",
    image: "/images/portals/entreprise.png",
    variant: "mid",
  },
  {
    num: "04",
    name: "Numérique & démarches",
    text: "Services publics, e-administration",
    image: "/images/portals/numerique.png",
    variant: "short-a",
  },
  {
    num: "05",
    name: "Communes & actualités",
    text: "77 communes, 12 départements, une actualité locale qui bat chaque jour.",
    image: "/images/portals/communes.png",
    variant: "short-b",
  },
  {
    num: "06",
    name: "Personnalités & voix",
    text: "Angélique Kidjo, Béhanzin, Romuald Hazoumè : ceux qui portent le nom du Bénin.",
    image: "/images/portals/personnalites.png",
    variant: "tall-right",
  },
];

// ---- Histoire & Mémoire ------------------------------------------------------
export const historySection = {
  overline: "HISTOIRE & MÉMOIRE",
  title: "Le mur qui raconte douze rois",
  text: "À Abomey, un mur de terre rouge porte la mémoire du royaume du Danxomè. Chaque bas-relief est une chronique : une victoire, un serment, un animal-totem. Douze règnes, une seule respiration.",
  cta: "Lire l'histoire complète",
  image: "/images/statues-rois.png",
  caption: {
    title: "Bronzes du Bénin",
    text: "Douze règnes, une seule respiration gravée dans l'argile pour l'éternité.",
  },
};

export const historyStats: HistoryStat[] = [
  { value: "1985", label: "Construction du monument" },
  { value: "28", label: "Mètres de long" },
  { value: "10", label: "Fresques historiques" },
];

// ---- Géographie ---------------------------------------------------------------
export const geographySection = {
  overline: "GÉOGRAPHIE",
  title: "Les 12 départements",
  lead: "Découvrir chaque départements du Bénin",
};

export const regions: Region[] = [
  {
    id: "nord",
    name: "Nord",
    subtitle: "Terre de traditions et de paysages uniques",
    tone: "green",
    badge: "4 départements",
    image: "/images/regions/nord.png",
    departments: [
      { id: "alibori", name: "Alibori", mapX: 82.7, mapY: 22.3 },
      { id: "atacora", name: "Atacora", mapX: 42.6, mapY: 20.8 },
      { id: "borgou", name: "Borgou", mapX: 77.1, mapY: 35.3 },
      { id: "donga", name: "Donga", mapX: 61.2, mapY: 31.8 },
    ],
  },
  {
    id: "centre",
    name: "Centre",
    subtitle: "Entre histoire, culture et nature",
    tone: "gold",
    badge: "4 départements",
    image: "/images/regions/centre.png",
    departments: [
      { id: "collines", name: "Collines", mapX: 66.3, mapY: 48.3 },
      { id: "zou", name: "Zou", mapX: 58.5, mapY: 61.7 },
      { id: "plateau", name: "Plateau", mapX: 76.8, mapY: 70.1 },
      { id: "couffo", name: "Couffo", mapX: 45.1, mapY: 74.6 },
    ],
  },
  {
    id: "sud",
    name: "Sud",
    subtitle: "Lagunes, plages et richesses maritimes",
    tone: "red",
    badge: "4 départements",
    image: "/images/regions/sud.png",
    departments: [
      { id: "mono", name: "Mono", mapX: 38.8, mapY: 87.7 },
      { id: "atlantique", name: "Atlantique", mapX: 56.3, mapY: 85.3 },
      { id: "oueme", name: "Ouémé", mapX: 73.4, mapY: 82.6 },
      { id: "littoral", name: "Littoral", mapX: 63.0, mapY: 89.2 },
    ],
  },
];

// ---- Citation ------------------------------------------------------------------
export const quote = {
  words: ["Un", "seul", "doigt", "ne", "peut", "ramasser", "une", "pierre."],
  goldWord: "pierre.",
  author: "— PROVERBE FON",
  values: ["Unité", "Solidarité", "Travail", "Respect", "Progrès"],
};

// ---- Force & Élégance -----------------------------------------------------------
export const amazonsSection = {
  overline: "FORCE & ÉLÉGANCE",
  title: "L'âme du Bénin est une femme.",
  text: "Des redoutables Amazones du Dahomey aux commerçantes dynamiques des marchés de Dantokpa, la femme béninoise est le pilier de la nation. Gardienne des traditions et moteur de l\u2019économie, elle incarne une résilience et une grâce qui forgent l\u2019identité du pays.",
  imageLeft: "/images/profil-femme-b.webp",
  imageRight: "/images/profil-femme-a.png",
};

export const amazonePoints: AmazonePoint[] = [
  {
    num: "1",
    title: "HÉRITAGES DES AGOODJÉ",
    text: "L'unique armée féminine au monde, symbole de bravoure universel.",
  },
  {
    num: "2",
    title: "INFLUENCE CULTURELLE",
    text: "Maîtresses de l'art culinaire et des chants traditionnels sacrés.",
  },
];

// ---- Lieux / Incontournables -----------------------------------------------------
export const placesSection = {
  overline: "LIEUX",
  title: "Incontournables",
  lead: "Des sites emblématiques qui racontent l'âme du Bénin.\nPartez à la découverte de trésors culturels, historiques et naturels uniques.",
  ctaOverline: "PRÊT À EXPLORER LE COTONOU ?",
  cta: "Voir les expériences à vivre",
};

export const places: Place[] = [
  {
    name: "Marché Dantokpa",
    tagline: "Plus grand marché d'Afrique de l'Ouest",
    image: "/images/lieux/dantokpa.png",
    variant: "p1",
  },
  {
    name: "Place de l\u2019Amazone",
    tagline: "La majestueuse statue",
    image: "/images/lieux/amazone.jpg",
    variant: "p2",
  },
  {
    name: "Étoile Rouge",
    tagline: "Monument public et commémoratif",
    image: "/images/lieux/etoile-rouge.png",
    variant: "p3",
  },
  {
    name: "Fondation Zinsou",
    tagline: "Art contemporain africain",
    image: "/images/lieux/zinsou.png",
    variant: "p4",
  },
  {
    name: "La Route des Pêches",
    tagline: "Route côtière pittoresque",
    image: "/images/lieux/route-peches.png",
    variant: "p5",
  },
];

// ---- Le Masque Parle (section sombre finale) ---------------------------------------
export const masqueSection = {
  overline: "LE MASQUE PARLE",
  title: "Quand le bois devient esprit",
  text: "Au Bénin, le masque n'est pas un objet : c'est un passage. Sculpté par des mains initiées, il porte la voix des ancêtres, danse les saisons, et relie le vivant à l'invisible. Egungun, Guèlèdè, Zangbéto — chaque masque est une mémoire.",
  cta: "Explorer la culture",
  decor: "/images/masque-bois.webp",
};

export const masqueStats: MasqueStat[] = [
  { value: "52", label: "Groupes ethniques" },
  { value: "UNESCO", label: "Palais d'Abomey" },
  { value: "10 JAN.", label: "Fête du Vodoun" },
];

// ---- Footer --------------------------------------------------------------------------
export const footerBrand = {
  name: "Le Bénin",
  tagline: "Terre d'histoire, de culture et d'avenir",
  logo: "/images/logo.png",
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Navigations",
    links: ["Accueil", "Découvrir", "Histoire", "Culture", "Géographie"],
  },
  {
    title: "Ressources",
    links: [
      "Archives & Événements",
      "Bibliothèque numérique",
      "Carte interactive",
      "Entrepreneuriat local",
    ],
  },
  {
    title: "À propos",
    links: [
      "Partenaire",
      "Contact",
      "Mentions légales",
      "Politique et confidentialité",
    ],
  },
];

export const footerNewsletter = {
  title: "Restez connectées",
  text: "Recevez nos actualités et événements découvertes sur le Bénin.",
  placeholder: "Votre adresse e-mail",
};

export const footerLegal =
  "© 2026 Bénin Éternel. Tous droits réservés. Préserver la majesté de l\u2019esprit du Dahomey.";
