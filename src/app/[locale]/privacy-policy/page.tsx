import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Privacy Policy' : 'Privacy Policy',
    description:
      locale === 'it'
        ? 'Informativa sulla privacy del sito di Angelo Pallanca.'
        : 'Privacy Policy for Angelo Pallanca\'s website.',
  };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === 'it' ? {
    title: 'Privacy Policy',
    lastUpdated: 'Ultimo aggiornamento: 05/04/2024',
    intro: 'Benvenuto nel sito ufficiale di Angelo Pallanca ("noi" o "nostro"). Questa Privacy Policy descrive le nostre pratiche relative alla raccolta, uso e divulgazione delle informazioni quando utilizzi il nostro sito. Ci impegniamo a rispettare la tua privacy e a proteggere le informazioni che possiamo raccogliere.',
    sections: [
      {
        title: '1. Raccolta e utilizzo delle informazioni',
        text: 'Per migliorare la tua esperienza utente, raccogliamo dati analitici anonimi di base su come utilizzi il nostro sito. Questi dati possono includere informazioni come l\'indirizzo IP del tuo computer (in forma anonimizzata), tipo di browser, versione del browser, le pagine del nostro sito che visiti, data e ora della visita, tempo trascorso sulle pagine e altri dati diagnostici. Queste informazioni non ti identificano personalmente.',
      },
      {
        title: '2. Utilizzo dei dati',
        text: 'I dati anonimi raccolti vengono utilizzati esclusivamente per analizzare il traffico web e migliorare i contenuti e le funzionalita del nostro sito. Questo ci aiuta a comprendere e servire meglio le esigenze dei nostri utenti.',
      },
      {
        title: '3. Cookie',
        text: 'Utilizziamo cookie e tecnologie di tracciamento simili per monitorare l\'attivita sul nostro sito. Un cookie e un file con una piccola quantita di dati che puo includere un identificatore unico anonimo. I cookie vengono inviati al tuo browser dal sito web e memorizzati sul tuo dispositivo. Puoi rifiutare tutti i cookie o indicare quando un cookie viene inviato. Tuttavia, se non accetti i cookie, potresti non essere in grado di utilizzare alcune parti del nostro sito.',
      },
      {
        title: '4. Analisi',
        text: 'Possiamo utilizzare fornitori di servizi terzi per monitorare e analizzare l\'uso del nostro sito. Questi servizi di terze parti utilizzano cookie per raccogliere informazioni in forma anonima su come i visitatori utilizzano il nostro sito.',
      },
      {
        title: '5. Link ad altri siti',
        text: 'Il nostro sito puo contenere link ad altri siti non gestiti da noi. Cliccando su un link di terze parti, verrai indirizzato al sito di tale terza parte. Ti consigliamo vivamente di consultare la Privacy Policy di ogni sito che visiti. Non abbiamo alcun controllo e non ci assumiamo alcuna responsabilita per i contenuti, le politiche sulla privacy o le pratiche di siti o servizi di terze parti.',
      },
      {
        title: '6. Modifiche alla Privacy Policy',
        text: 'Possiamo aggiornare la nostra Privacy Policy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova Privacy Policy su questa pagina. Ti consigliamo di consultare periodicamente questa Privacy Policy per eventuali cambiamenti.',
      },
      {
        title: '7. Contattaci',
        text: 'Per qualsiasi domanda su questa Privacy Policy, contattaci via email a angelo@pallanca.info.',
      },
    ],
  } : {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: 05/04/2024',
    intro: 'Welcome to the official website of Angelo Pallanca (referred to as "we," "us," or "our"). This Privacy Policy is designed to inform you about our practices regarding the collection, use, and disclosure of information when you use our website. We are committed to respecting your privacy and safeguarding any information we may collect.',
    sections: [
      {
        title: '1. Information Collection and Use',
        text: 'For the purpose of enhancing your user experience, we collect basic anonymous analytics about how you use our website. This data may include information such as your computer\'s Internet Protocol (IP) address (in anonymized form), browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data. This information does not personally identify you.',
      },
      {
        title: '2. Use of Data',
        text: 'The anonymous data we collect is used solely for the purpose of analyzing web traffic and improving the content and functionality of our website. This helps us to better understand and serve our users\' needs.',
      },
      {
        title: '3. Cookies',
        text: 'We use cookies and similar tracking technologies to track activity on our website. A cookie is a file with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. You have the option to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.',
      },
      {
        title: '4. Analytics',
        text: 'We may use third-party Service Providers to monitor and analyze the use of our website. These third-party services use cookies to collect information in an anonymous form about how visitors use our website.',
      },
      {
        title: '5. Links to Other Sites',
        text: 'Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party\'s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',
      },
      {
        title: '6. Changes to This Privacy Policy',
        text: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.',
      },
      {
        title: '7. Contact Us',
        text: 'If you have any questions about this Privacy Policy, please contact us by email at angelo@pallanca.info.',
      },
    ],
  };

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{content.title}</h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-8">{content.lastUpdated}</p>
        <p className="text-[var(--color-text-muted)] leading-relaxed mb-10">{content.intro}</p>
        <div className="space-y-8">
          {content.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
