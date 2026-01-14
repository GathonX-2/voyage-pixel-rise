import {
  Plane,
  Map,
  Building2,
  Sun,
  Compass,
} from 'lucide-react'

export const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'A propos', to: '/about' },
  { label: 'Service', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contacts' },
]

export const tours = [
  { title: 'France, Paris', price: 'À partir de 280 $', image: '/assets/images/uklondon.jpg' },
  { title: 'USA, Boston', price: 'À partir de 480 $', image: '/assets/images/uklondon.jpg' },
  { title: 'Italy, Venice', price: 'À partir de 350 $', image: '/assets/images/uklondon.jpg' },
  { title: 'Spain, Benidorm', price: 'À partir de 350 $', image: '/assets/images/uklondon.jpg' },
  { title: 'Egypt, Sharm El Sheikh', price: 'À partir de 520 $', image: '/assets/images/uklondon.jpg' },
  { title: 'UK, London', price: 'À partir de 600 $', image: '/assets/images/uklondon.jpg' },
]

export const servicesHome = [
  {
    icon: Plane,
    title: "Billets d'avion",
    text: "Dans notre agence de voyage, vous pouvez réserver des billets d'avion pour n'importe quelle destination mondiale. Nous proposons également la réservation en ligne via notre site web en seulement quelques étapes.",
  },
  {
    icon: Map,
    title: 'Voyages & Croisières',
    text: 'En plus des circuits et excursions classiques, nous proposons également une variété de croisières et voyages en mer pour différents clients à la recherche d\'expériences inoubliables.',
  },
  {
    icon: Building2,
    title: "Réservations d'hôtels",
    text: "Nous proposons une large sélection d'hôtels allant des établissements 5 étoiles aux petites propriétés situées dans le monde entier, afin que vous puissiez réserver l'hôtel de votre choix.",
  },
  {
    icon: Sun,
    title: "Circuits d'été personnalisés",
    text: 'Notre agence propose des circuits variés, y compris des circuits estivaux personnalisés pour les clients à la recherche de vacances exclusives et mémorables.',
  },
]

export const posts = [
  {
    tag: 'Hôtels',
    author: 'Ronald Chen',
    title: 'Top 10 des hôtels où séjourner : classement exclusif des experts de Sealine Travel',
    image: '/assets/images/hotel.jpg',
    date: '27 février 2019 à 18:53',
  },
  {
    tag: 'Astuces',
    author: 'Ronald Chen',
    title: "Comment planifier vos vacances à l'avance et pourquoi c'est avantageux",
    image: '/assets/images/actuce.jpg',
    date: '27 février 2019 à 18:53',
  },
  {
    tag: 'Voyages',
    author: 'Ronald Chen',
    title: 'Votre guide personnel des 5 meilleurs endroits à visiter sur Terre',
    image: '/assets/images/hotel.jpg',
    date: '27 février 2019 à 18:53',
  },
]

export const testimonials = [
  {
    name: 'Ann McMillan',
    role: 'Cliente fidèle',
    text: 'Je voulais vous remercier énormément pour avoir organisé le voyage en France pour mon petit ami et moi. C’était incroyable et cela a dépassé mes attentes ! Nous avons passé un moment merveilleux et avons été très satisfaits des hébergements à Paris et Bayeux. Nos guides privés/de petits groupes étaient fantastiques ! Je vous suis reconnaissante pour tous vos efforts afin que nous puissions enfin visiter la Tour Eiffel.',
    image: '/assets/images/girl.jpg',
  },
  {
    name: 'Debra Ortega',
    role: 'Cliente fidèle',
    text: 'J’ai passé un moment merveilleux lors de mes voyages à Madagascar, au Zimbabwe et au Botswana. Ce fut une expérience extraordinaire. J’ai adoré l’emplacement du Gorges Camp, car j’avais l’impression que c’était la seule fois où nous avons pu voir de vrais Africains ruraux et comment ils vivent réellement. Le service était incroyable et tout le monde était très attentionné !',
    image: '/assets/images/girl.jpg',
  },
  {
    name: 'Samantha Smith',
    role: 'Cliente fidèle',
    text: 'Je voulais simplement vous remercier énormément pour m’avoir aidée à organiser une aventure incroyable au Costa Rica ! Mon neveu et moi nous sommes éclatés ! Tous les hébergements étaient parfaits, tout comme les activités que nous avons faites (canopée, visite d’une plantation de café, randonnées, pêche et massages !). Nous avons de si bons souvenirs et ne vous remercierons jamais assez !',
    image: '/assets/images/girl.jpg',
  },
]

export const timeline = [
  {
    date: 'Avril 2016',
    title: 'Formation de notre équipe de spécialistes du voyage',
    text: 'Nous avons réuni une équipe dévouée de spécialistes passionnés, prêts à organiser des voyages sur mesure et à répondre aux besoins de chaque voyageur.',
  },
  {
    date: 'Septembre 2016',
    title: 'Élargissement de notre offre de circuits et d’excursions',
    text: 'Nous avons ajouté de nouveaux circuits exotiques et des excursions uniques pour offrir une gamme variée de destinations adaptées à tous les goûts.',
  },
  {
    date: 'Mars 2019',
    title: 'Partenariat avec des agences de voyages internationales',
    text: 'Nous avons établi des collaborations avec des agences internationales pour offrir des voyages de qualité supérieure et un accès exclusif à des destinations exceptionnelles.',
  },
]

export const destinations = [
  { name: 'Bora Bora', image: '/assets/images/SpainBenidorm.jpg' },
  { name: 'Égypte', image: '/assets/images/SpainBenidorm.jpg' },
  { name: 'Thaïlande', image: '/assets/images/SpainBenidorm.jpg' },
  { name: 'République Dominicaine', image: '/assets/images/SpainBenidorm.jpg' },
  { name: 'Jamaïque', image: '/assets/images/SpainBenidorm.jpg' },
  { name: 'Huntington Beach', image: '/assets/images/SpainBenidorm.jpg' },
]

export const teamMembers = [
  { name: 'Sandra Ferguson', role: 'Fondatrice, Directrice', image: '/assets/images/girlEquipe.png' },
  { name: 'Ronald Chen', role: 'Responsable des circuits', image: '/assets/images/girlEquipe.png' },
  { name: 'Frances Watson', role: 'Agent de voyage', image: '/assets/images/girlEquipe.png' },
  { name: 'Joe Myers', role: 'Coordinateur des réservations', image: '/assets/images/girlEquipe.png' },
]

export const blogCards = [
  {
    title: 'Comment choisir un hôtel pour votre prochain voyage ?',
    category: 'Voyage & Hébergement',
    author: 'Marie Dupont',
    date: '1er mars 2023',
    image: '/assets/images/blog1.jpg',
  },
  {
    title: 'Les meilleures astuces pour voyager à petit budget',
    category: 'Astuces de Voyage',
    author: 'Jean Martin',
    date: '15 février 2023',
    image: '/assets/images/blog2.jpg',
  },
  {
    title: 'Les 10 destinations incontournables pour 2024',
    category: 'Destinations',
    author: 'Sophie Lambert',
    date: '10 janvier 2023',
    image: '/assets/images/blog3.jpg',
  },
  {
    title: 'Les 10 destinations incontournables pour 2024',
    category: 'Destinations',
    author: 'Sophie Lambert',
    date: '10 janvier 2023',
    image: '/assets/images/blog3.jpg',
  },
  {
    title: 'Les meilleures astuces pour voyager à petit budget',
    category: 'Astuces de Voyage',
    author: 'Jean Martin',
    date: '15 février 2023',
    image: '/assets/images/blog2.jpg',
  },
  {
    title: 'Comment choisir un hôtel pour votre prochain voyage ?',
    category: 'Voyage & Hébergement',
    author: 'Marie Dupont',
    date: '1er mars 2023',
    image: '/assets/images/blog1.jpg',
  },
]

export const servicesCards = [
  {
    title: 'Réservation de Vols',
    text: "Réservez vos billets d'avion pour toutes les destinations dans le monde, en toute simplicité.",
    icon: Plane,
    highlight: false,
  },
  {
    title: 'Hébergement',
    text: 'Sélection d’hôtels et de logements adaptés à tous vos besoins, partout dans le monde.',
    icon: Building2,
    highlight: true,
  },
  {
    title: 'Circuits et Excursions',
    text: 'Circuits personnalisés et excursions inoubliables pour découvrir le monde autrement.',
    icon: Compass,
    highlight: false,
  },
]
