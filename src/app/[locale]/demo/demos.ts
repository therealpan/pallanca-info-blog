export type DemoLocale = 'it' | 'en';

export interface Demo {
  slug: string;
  url: string;
  place: Record<DemoLocale, string>;
  title: Record<DemoLocale, string>;
  subtitle: Record<DemoLocale, string>;
  description: Record<DemoLocale, string>;
  image: string;
}

export const demos: Demo[] = [
  {
    slug: 'companybrain',
    url: '/demo/companybrain',
    place: {
      it: 'Agentic Intranet · Enterprise',
      en: 'Agentic Intranet · Enterprise',
    },
    title: { it: 'Company Brain', en: 'Company Brain' },
    subtitle: { it: 'Corvalta', en: 'Corvalta' },
    description: {
      it: "L'intranet agentica che risponde citando la fonte, si astiene quando la fonte manca, aspetta la firma umana prima di eseguire. Tutto in una scena isometrica che cambia luce con lo stato.",
      en: 'The agentic intranet that answers with a cited source, declares abstention when the source is missing, waits for a human signature before executing. All in an isometric scene whose lights change with state.',
    },
    image: '/images/demos/companybrain.webp',
  },
  {
    slug: 'risto',
    url: '/demo/risto',
    place: {
      it: 'Operations · Hospitality',
      en: 'Operations · Hospitality',
    },
    title: { it: 'Diana · Sala Viva', en: 'Diana · Sala Viva' },
    subtitle: {
      it: 'Ristorante Ardesia',
      en: 'Ardesia Restaurant',
    },
    description: {
      it: 'La sala vista in tempo reale, con ogni tavolo, ogni comanda, ogni addetto sotto una sola orchestrazione. Un cruscotto che il direttore legge in dieci secondi, dal pass alla mancia.',
      en: 'The restaurant floor seen in real time, every table, every order, every server under a single orchestration. A dashboard the manager can read in ten seconds, from pass to tip.',
    },
    image: '/images/demos/risto.webp',
  },
  {
    slug: 'citybrain',
    url: '/demo/citybrain',
    place: {
      it: 'Pubblica Amministrazione',
      en: 'Public Administration',
    },
    title: { it: 'City Brain', en: 'City Brain' },
    subtitle: {
      it: 'Borgolargo al Fiume',
      en: 'Borgolargo al Fiume',
    },
    description: {
      it: 'Il Comune e la sua memoria. Ogni domanda del cittadino cerca una fonte, ogni azione dell\'ufficio lascia traccia, nessun atto entra in archivio senza doppia firma.',
      en: 'The municipality and its memory. Every citizen question seeks a source, every office action leaves a trail, no record enters the archive without a double signature.',
    },
    image: '/images/demos/citybrain.webp',
  },
  {
    slug: 'mirarsa',
    url: '/demo/mirarsa',
    place: {
      it: 'Sanità assistenziale · RSA',
      en: 'Residential Care',
    },
    title: { it: 'Mira', en: 'Mira' },
    subtitle: {
      it: 'RSA dimostrativa',
      en: 'Demonstrative nursing home',
    },
    description: {
      it: 'Il cruscotto della struttura: tempi di risposta, chiamate, posti occupati, turni. Quattro piani visti insieme, ogni allarme con il contesto della stanza.',
      en: 'The facility dashboard: response times, calls, occupancy, shifts. Four floors seen together, every alarm with its room context.',
    },
    image: '/images/demos/mirarsa.webp',
  },
];
