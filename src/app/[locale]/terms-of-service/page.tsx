import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Termini di Servizio' : 'Terms of Service',
    description:
      locale === 'it'
        ? 'Termini di servizio del sito di Angelo Pallanca.'
        : 'Terms of Service for Angelo Pallanca\'s website.',
  };
}

export default async function TermsOfServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === 'it' ? {
    title: 'Termini di Servizio',
    sections: [
      {
        title: '1. Introduzione',
        text: 'Benvenuto nel sito web di Angelo Pallanca. Questi Termini di Servizio ("Termini") regolano l\'accesso e l\'utilizzo del nostro sito web e dei nostri servizi. Accedendo o utilizzando il sito, accetti di essere vincolato da questi Termini.',
      },
      {
        title: '2. Descrizione dei servizi',
        text: 'Angelo Pallanca offre, tramite PiirZ Digital Limited, servizi di consulenza professionale nei settori tech e innovazione. I servizi includono, ma non si limitano a: assessment, project management, solution scouting e interim management. Tutti i servizi sono soggetti a un accordo separato da negoziare e sottoscrivere al di fuori di questo sito, su richiesta dell\'utente.',
      },
      {
        title: '3. Utilizzo del sito',
        text: 'Il sito e disponibile per uso personale e non commerciale, per valutare i nostri servizi. Non e consentito utilizzare il sito per scopi illegali o non autorizzati. Tutte le interazioni sul sito devono essere condotte in modo professionale e rispettoso.',
      },
      {
        title: '4. Proprieta intellettuale',
        text: 'Tutti i contenuti del sito, inclusi testi, grafiche, loghi e immagini, sono di proprieta di Angelo Pallanca o dei suoi fornitori di contenuti e sono protetti dalle leggi internazionali sul copyright e la proprieta intellettuale. Non e consentito riprodurre, distribuire o utilizzare alcun contenuto senza autorizzazione scritta esplicita.',
      },
      {
        title: '5. Esclusione di garanzie',
        text: 'Il sito e i suoi contenuti sono forniti "cosi come sono" e "come disponibili". Angelo Pallanca non fornisce alcuna dichiarazione o garanzia di alcun tipo, espressa o implicita, riguardo al funzionamento del sito o alle informazioni, contenuti, materiali o prodotti inclusi nel sito.',
      },
      {
        title: '6. Limitazione di responsabilita',
        text: 'Angelo Pallanca non sara responsabile per danni di alcun tipo derivanti dall\'utilizzo del sito, inclusi, ma non limitati a, danni diretti, indiretti, incidentali, punitivi e consequenziali.',
      },
      {
        title: '7. Modifiche ai Termini',
        text: 'Angelo Pallanca si riserva il diritto di modificare questi Termini in qualsiasi momento. Continuando a utilizzare il sito dopo tali modifiche, accetti di essere vincolato dai Termini modificati.',
      },
      {
        title: '8. Legge applicabile',
        text: 'Questi Termini sono regolati e interpretati in conformita con le leggi della Repubblica Italiana, senza riferimento ai principi di conflitto di leggi.',
      },
      {
        title: '9. Contattaci',
        text: 'Per qualsiasi domanda su questi Termini o per contattarci per qualsiasi motivo relativo ai nostri servizi, scrivici a angelo@pallanca.info.',
      },
      {
        title: '10. Risoluzione delle controversie',
        text: 'Qualsiasi controversia relativa a questi Termini o all\'utilizzo del sito sara risolta attraverso mediazione, seguita, se necessario, da arbitrato vincolante in Italia.',
      },
      {
        title: '11. Risoluzione',
        text: 'Angelo Pallanca si riserva il diritto di terminare il tuo accesso al sito in qualsiasi momento, senza preavviso, per qualsiasi motivo.',
      },
      {
        title: '12. Presa d\'atto',
        text: 'Utilizzando il nostro sito, riconosci di aver letto e compreso questi Termini e accetti di esserne vincolato.',
      },
    ],
  } : {
    title: 'Terms of Service',
    sections: [
      {
        title: '1. Introduction',
        text: 'Welcome to the Angelo Pallanca website. These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing or using the website, you agree to be bound by these Terms.',
      },
      {
        title: '2. Services Description',
        text: 'Angelo Pallanca offers, through PiirZ Digital Limited, professional consulting services in tech and innovation fields. Services include but are not limited to assessments, project management, solution scouting, and interim management. All services are subject to a separate agreement to be negotiated and executed outside of this website upon the user\'s request.',
      },
      {
        title: '3. Use of the Website',
        text: 'The website is available for your personal and non-commercial use to evaluate our services. You may not use the website for illegal or unauthorized purposes. All interactions on the website should be conducted in a professional and respectful manner.',
      },
      {
        title: '4. Intellectual Property Rights',
        text: 'All content on the website, including text, graphics, logos, and images, is the property of Angelo Pallanca or its content suppliers and is protected by international copyright and intellectual property laws. You may not reproduce, distribute, or use any content without express written permission.',
      },
      {
        title: '5. Disclaimer of Warranties',
        text: 'The website and its content are provided on an "as is" and "as available" basis. Angelo Pallanca does not make any representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, materials, or products included on the website.',
      },
      {
        title: '6. Limitation of Liability',
        text: 'Angelo Pallanca will not be liable for any damages of any kind arising from the use of the website, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.',
      },
      {
        title: '7. Amendments to Terms',
        text: 'Angelo Pallanca reserves the right to amend these Terms at any time. By continuing to use the website after such amendments, you agree to be bound by the Terms as modified.',
      },
      {
        title: '8. Governing Law',
        text: 'These Terms shall be governed by and construed in accordance with the laws of Italy, without giving effect to any principles of conflicts of law.',
      },
      {
        title: '9. Contact Us',
        text: 'If you have any questions about these Terms or wish to contact us for any reason related to our services, please email us at angelo@pallanca.info.',
      },
      {
        title: '10. Dispute Resolution',
        text: 'Any disputes related to these Terms or the use of the website will be resolved through mediation, followed by binding arbitration, if necessary, in Italy.',
      },
      {
        title: '11. Termination',
        text: 'Angelo Pallanca reserves the right to terminate your access to the website at any time, without notice, for any reason whatsoever.',
      },
      {
        title: '12. Acknowledgment',
        text: 'By using our website, you acknowledge that you have read and understand these Terms and agree to be bound by them.',
      },
    ],
  };

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-10">{content.title}</h1>
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
