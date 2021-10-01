import {
  faExclamationTriangle,
  faHourglassStart,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import theme from '../components/Theme';
export const users = [
  {
    id: 1,
    nome: 'Valentina',
    email: 'valentina.dorazio@example.com',
    password: 'valentina',
  },
  {
    id: 2,
    nome: 'Stefano',
    email: 'stefano.pippo@example.com',
    password: 'stefano',
  },
  {
    id: 3,
    nome: 'Federica',
    email: 'federica.pluto@example.com',
    password: 'federica',
  },
  {
    id: 4,
    nome: 'Mario',
    email: 'mario.rossi@example.com',
    password: 'mario',
  },
];

export const userMenu = [
  {
    title: 'Intolleranze',
    icon: faExclamationTriangle,
    iconColor: theme.colors.fucsia,
  },
  {
    title: 'Tempo Countdown',
    icon: faHourglassStart,
    iconColor: theme.colors.lightBlue,
  },
  {
    title: 'Approvazione',
    icon: faCheck,
    iconColor: theme.colors.lightGreen,
  },
];

export let categories = [
  {
    title: 'Preferiti',
    categoryImage: require('../assets/images/Categories/preferiti.png'),
    subCategories: [{}],
  },
  {
    title: 'Offerte',
    categoryImage: require('../assets/images/Categories/offerte.png'),
    subCategories: [{}],
  },
  {
    title: 'Più Acquistati',
    categoryImage: require('../assets/images/Categories/bestseller.png'),
    subCategories: [{}],
  },
  {
    title: 'Carne',
    categoryImage: require('../assets/images/Categories/carne.jpg'),
    subCategories: [
      {
        title: 'Pollo',
        image: require('../assets/images/Food/pollo.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: true,
        percentualeSconto: 2,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Macinato bovino adulto',
        image: require('../assets/images/Food/macinato.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Filetto di noce',
        image: require('../assets/images/Food/filetto.jpg'),
        prezzo: 3,
        preferito: true,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
  {
    title: 'Frutta',
    categoryImage: require('../assets/images/Categories/frutta.jpg'),
    subCategories: [
      {
        title: 'Mela',
        image: require('../assets/images/Food/mela.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Pera',
        image: require('../assets/images/Food/pera.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: true,
        percentualeSconto: 2,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Banana',
        image: require('../assets/images/Food/banana.jpg'),
        prezzo: 3,
        preferito: true,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
  {
    title: 'Verdura',
    categoryImage: require('../assets/images/Categories/verdura.jpg'),
    subCategories: [
      {
        title: 'Insalata',
        image: require('../assets/images/Food/insalata.jpg'),
        prezzo: 3,
        preferito: true,
        offerta: true,
        percentualeSconto: 2,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Spinaci',
        image: require('../assets/images/Food/spinaci.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Zucchine',
        image: require('../assets/images/Food/zucchine.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
  {
    title: 'Bevande',
    categoryImage: require('../assets/images/Categories/bevande.jpg'),
    subCategories: [
      {
        title: 'Acqua',
        image: require('../assets/images/Food/acqua.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'CocaCola',
        image: require('../assets/images/Food/cocacola.jpg'),
        prezzo: 3,
        preferito: true,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Vino',
        image: require('../assets/images/Food/vino.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: true,
        percentualeSconto: 2,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
  {
    title: 'Animali',
    categoryImage: require('../assets/images/Categories/animali.jpg'),
    subCategories: [
      {
        title: 'Pallina',
        image: require('../assets/images/Food/pallina.png'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 2,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Monge',
        image: require('../assets/images/Food/monge.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 2,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Lettiera',
        image: require('../assets/images/Food/lettiera.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
  {
    title: 'Detersivi',
    categoryImage: require('../assets/images/Categories/detersivi.jpg'),
    subCategories: [
      {
        title: 'Ace bucato liquido',
        image: require('../assets/images/Food/ace.png'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Svelto',
        image: require('../assets/images/Food/svelto.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: 'Bref pavimenti',
        image: require('../assets/images/Food/bref.jpg'),
        prezzo: 3,
        preferito: false,
        offerta: false,
        percentualeSconto: 0,
        descrizione:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
];
