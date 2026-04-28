import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Privacy Policy — Pan' : 'Privacy Policy — Pan',
    description:
      locale === 'it'
        ? 'Privacy policy del sito pallanca.info. Dati raccolti, finalità, base giuridica, diritti dell\'interessato (GDPR).'
        : 'Privacy policy for pallanca.info. Data collected, purposes, legal basis, data subject rights (GDPR).',
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isIt = locale === 'it';

  return (
    <div className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-invert prose-headings:text-white prose-headings:tracking-tight prose-p:text-[var(--color-text-muted)] prose-li:text-[var(--color-text-muted)] prose-strong:text-white prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline">
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] mb-3 font-medium not-prose">
          {isIt ? 'Informativa privacy' : 'Privacy notice'}
        </div>
        <h1 className="display-md">Privacy Policy</h1>
        <p className="text-sm text-[var(--color-text-subtle)] not-prose">
          {isIt ? 'Ultima modifica: 27 aprile 2026' : 'Last updated: April 27, 2026'}
        </p>

        {isIt ? (
          <>
            <h2>1. Titolare del trattamento</h2>
            <p>
              Il titolare del trattamento dei dati personali raccolti tramite il sito <strong>pallanca.info</strong> è
              <strong> Angelo Pallanca</strong> (&ldquo;Pan&rdquo;), contattabile all&apos;indirizzo email{' '}
              <a href="mailto:angelo@pallanca.info">angelo@pallanca.info</a>. Per la delivery operativa di alcuni servizi
              il titolare opera anche tramite <strong>PiirZ Digital Limited</strong>; in tali casi viene attivato un
              accordo specifico di trattamento dati.
            </p>

            <h2>2. Dati raccolti e finalità</h2>
            <p>I dati raccolti sul sito sono limitati a quanto strettamente necessario per i servizi offerti:</p>
            <ul>
              <li>
                <strong>Form di richiesta proposta</strong> (<code>/proposal</code>): nome e cognome, email aziendale,
                ruolo, azienda, sito web (opzionale), settore, fatturato indicativo, dipendenti, problema da risolvere,
                tempistica, budget orientativo, eventuali note libere. Finalità: rispondere alla richiesta con una
                mini-proposta scritta entro 24 ore lavorative.
              </li>
              <li>
                <strong>Form di download checklist EU AI Act</strong> (<code>/eu-ai-act-checklist</code>): nome e
                cognome, email aziendale, ruolo, azienda. Finalità: invio del PDF richiesto e, occasionalmente,
                eventuali aggiornamenti correlati al tema specifico, solo se l&apos;utente risponde manualmente
                all&apos;email iniziale.
              </li>
              <li>
                <strong>Log tecnici di server</strong>: indirizzo IP, user agent, timestamp delle richieste. Finalità:
                sicurezza, prevenzione abusi, diagnosi tecnica. Conservazione: 30 giorni.
              </li>
            </ul>
            <p>
              Il sito <strong>non utilizza cookie di profilazione né strumenti di analytics</strong> di terze parti. Non
              vengono usate piattaforme pubblicitarie. I dati raccolti tramite i form non vengono ceduti a terzi né
              utilizzati per scopi di marketing automatizzato.
            </p>

            <h2>3. Base giuridica del trattamento</h2>
            <p>
              Il trattamento si basa sul <strong>consenso esplicito</strong> dell&apos;interessato (Art. 6.1.a GDPR),
              espresso al momento della compilazione del form. In assenza di consenso il dato non viene processato.
              Per i log tecnici si applica il <strong>legittimo interesse</strong> del titolare alla sicurezza del sito
              (Art. 6.1.f GDPR).
            </p>

            <h2>4. Conservazione dei dati</h2>
            <p>
              I dati raccolti tramite form vengono conservati esclusivamente nella mailbox personale del titolare
              (<code>pan@piirz.com</code>) e nel servizio di invio email <strong>Resend</strong> (provider con server
              nell&apos;UE). Vengono cancellati dopo <strong>24 mesi</strong> di inattività della relazione, oppure
              prima su richiesta dell&apos;interessato.
            </p>

            <h2>5. Trasferimenti extra-UE</h2>
            <p>
              I dati sono trattati su infrastrutture europee (server UE di Resend e di Vercel). In caso di
              trasferimenti extra-UE necessari per il funzionamento dei servizi, si applicano le clausole contrattuali
              standard approvate dalla Commissione Europea (Decisione 2021/914).
            </p>

            <h2>6. Diritti dell&apos;interessato</h2>
            <p>L&apos;interessato ha il diritto di:</p>
            <ul>
              <li>accedere ai dati che lo riguardano (Art. 15 GDPR);</li>
              <li>chiedere rettifica o cancellazione (Art. 16-17 GDPR);</li>
              <li>chiedere limitazione del trattamento (Art. 18 GDPR);</li>
              <li>portabilità dei dati (Art. 20 GDPR);</li>
              <li>opporsi al trattamento basato sul legittimo interesse (Art. 21 GDPR);</li>
              <li>revocare il consenso in qualsiasi momento.</li>
            </ul>
            <p>
              Per esercitare questi diritti scrivere a{' '}
              <a href="mailto:angelo@pallanca.info">angelo@pallanca.info</a>. Risposta garantita entro 30 giorni.
            </p>

            <h2>7. Reclamo all&apos;autorità di controllo</h2>
            <p>
              In caso di violazione del GDPR è possibile presentare reclamo al{' '}
              <strong>Garante per la protezione dei dati personali</strong> (
              <a href="https://www.garanteprivacy.it/" rel="noopener noreferrer" target="_blank">
                garanteprivacy.it
              </a>
              ) o all&apos;autorità di controllo dello Stato membro UE in cui l&apos;interessato risiede abitualmente.
            </p>

            <h2>8. Modifiche</h2>
            <p>
              La presente informativa può essere aggiornata in caso di modifiche al trattamento. La data di ultima
              modifica è indicata in alto in questa pagina. Si consiglia di verificare periodicamente.
            </p>
          </>
        ) : (
          <>
            <h2>1. Data Controller</h2>
            <p>
              The data controller for personal data collected via <strong>pallanca.info</strong> is{' '}
              <strong>Angelo Pallanca</strong> (&ldquo;Pan&rdquo;), reachable at{' '}
              <a href="mailto:angelo@pallanca.info">angelo@pallanca.info</a>. For operational delivery of some
              services the controller also operates through <strong>PiirZ Digital Limited</strong>; in such cases a
              specific data processing agreement is activated.
            </p>

            <h2>2. Data Collected and Purposes</h2>
            <p>Data collected on the site is limited to what is strictly necessary for the services offered:</p>
            <ul>
              <li>
                <strong>Proposal request form</strong> (<code>/proposal</code>): full name, work email, role, company,
                website (optional), sector, indicative revenue, employees, problem, timing, indicative budget, free
                notes. Purpose: respond to the request with a written mini-proposal within 24 working hours.
              </li>
              <li>
                <strong>EU AI Act checklist download form</strong> (<code>/eu-ai-act-checklist</code>): full name, work
                email, role, company. Purpose: send the requested PDF and, occasionally, related updates on the
                specific topic, only if the user manually responds to the initial email.
              </li>
              <li>
                <strong>Server technical logs</strong>: IP address, user agent, request timestamps. Purpose: security,
                abuse prevention, technical diagnosis. Retention: 30 days.
              </li>
            </ul>
            <p>
              The site does <strong>not use profiling cookies or third-party analytics</strong>. No advertising
              platforms are used. Data collected via forms is not shared with third parties or used for automated
              marketing.
            </p>

            <h2>3. Legal Basis for Processing</h2>
            <p>
              Processing is based on the <strong>explicit consent</strong> of the data subject (Art. 6.1.a GDPR),
              given at the time of form submission. Without consent, data is not processed. For technical logs the{' '}
              <strong>legitimate interest</strong> of the controller in site security applies (Art. 6.1.f GDPR).
            </p>

            <h2>4. Data Retention</h2>
            <p>
              Form data is stored exclusively in the controller&apos;s personal mailbox (<code>pan@piirz.com</code>)
              and in the email delivery service <strong>Resend</strong> (provider with EU servers). Data is deleted
              after <strong>24 months</strong> of inactivity, or earlier upon request of the data subject.
            </p>

            <h2>5. Extra-EU Transfers</h2>
            <p>
              Data is processed on European infrastructure (Resend EU servers, Vercel). In case of extra-EU transfers
              necessary for service operation, EU Commission Standard Contractual Clauses apply (Decision 2021/914).
            </p>

            <h2>6. Data Subject Rights</h2>
            <p>The data subject has the right to:</p>
            <ul>
              <li>access their data (Art. 15 GDPR);</li>
              <li>request rectification or erasure (Art. 16-17 GDPR);</li>
              <li>request restriction of processing (Art. 18 GDPR);</li>
              <li>data portability (Art. 20 GDPR);</li>
              <li>object to processing based on legitimate interest (Art. 21 GDPR);</li>
              <li>withdraw consent at any time.</li>
            </ul>
            <p>
              To exercise these rights, write to{' '}
              <a href="mailto:angelo@pallanca.info">angelo@pallanca.info</a>. Response guaranteed within 30 days.
            </p>

            <h2>7. Complaint to Supervisory Authority</h2>
            <p>
              In case of GDPR violation, you can lodge a complaint with the Italian{' '}
              <strong>Garante per la protezione dei dati personali</strong> (
              <a href="https://www.garanteprivacy.it/" rel="noopener noreferrer" target="_blank">
                garanteprivacy.it
              </a>
              ) or with the supervisory authority of the EU Member State where the data subject habitually resides.
            </p>

            <h2>8. Changes</h2>
            <p>
              This notice may be updated in case of changes to data processing. The date of last modification is shown
              at the top of this page. Periodic verification is recommended.
            </p>
          </>
        )}
      </article>
    </div>
  );
}
