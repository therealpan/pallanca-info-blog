import { setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { ArrowUpRight, Download } from 'lucide-react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import CopyButton from '@/components/CopyButton';

/**
 * Companion page of the talk "Il nuovo stagionale" (AI for hotels, restaurants,
 * campsites). Reached from the QR code on the closing slide. Italian only:
 * the English locale redirects here. No form, no data collection.
 */

const PAGE_PATH = '/stagionale';
const TITLE = 'Il nuovo stagionale: i materiali dell’intervento';
const DESCRIPTION =
  'L’intelligenza artificiale in albergo, al ristorante, in campeggio: il foglio da appendere, le richieste pronte da copiare, la regola per il personale, le fonti. Senza registrazione.';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: PAGE_PATH,
    title: TITLE,
    description: DESCRIPTION,
  });
}

const nav = [
  { href: '#regola', label: 'La regola' },
  { href: '#richieste', label: 'Richieste pronte' },
  { href: '#personale', label: 'Regola per il personale' },
  { href: '#fornitore', label: 'Domande al fornitore' },
  { href: '#lunedi', label: 'Da fare lunedì' },
  { href: '#fonti', label: 'Fonti e slide' },
];

const canAsk = [
  'Bozze di risposta alle recensioni',
  'Messaggi e menu in altre lingue',
  'Testi per menu, descrizioni, cartelli',
  'Risposte alle domande ricorrenti',
  'Una sintesi di che cosa dicono i clienti',
];

const neverPaste = [
  { item: 'Documenti d’identità', note: 'Dopo l’invio ad Alloggiati Web non vanno nemmeno conservati' },
  { item: 'Dati di pagamento', note: 'Numeri di carta, IBAN' },
  { item: 'Nome e cognome accanto a un dato di salute', note: 'Allergie, esigenze particolari' },
  { item: 'Dati dei dipendenti', note: 'Buste paga, certificati, valutazioni' },
  { item: 'Password e accessi', note: 'Gestionali, portali di prenotazione' },
];

const humanDecides = [
  { item: 'Allergeni e ingredienti', note: 'Qui un errore non è un errore di stile.' },
  { item: 'Prezzi e disponibilità', note: 'L’AI non vede il planning né il listino di oggi.' },
  { item: 'Rimborsi e reclami seri', note: 'Ogni parola può diventare un impegno.' },
  { item: 'Personale', note: 'Turni, valutazioni, selezione.' },
];

const prompts = [
  {
    id: 'recensione',
    title: 'Rispondere a una recensione',
    when: 'Incolla solo il testo della recensione. Controlla ogni fatto della bozza prima di pubblicarla.',
    text: `Sei il titolare di [ristorante / albergo / campeggio]. Scrivi una risposta a questa recensione.
Tono cortese e concreto, massimo 80 parole, niente scuse generiche.
Non aggiungere fatti, promesse o rimedi che non ti ho indicato: dove servirebbero, lascia uno spazio tra parentesi quadre.

Recensione:
[incolla qui il testo, senza il nome di chi l'ha scritta]`,
  },
  {
    id: 'lingua',
    title: 'Rispondere a un ospite in un’altra lingua',
    when: 'Togli nome, telefono ed email dell’ospite prima di incollare. La disponibilità la verifichi tu.',
    text: `Traduci in italiano questo messaggio di un ospite. Poi scrivi una bozza di risposta nella stessa lingua del messaggio, seguita dalla sua traduzione in italiano.
Per date, prezzi, disponibilità e orari usa solo i dati che ti do qui sotto. Dove un dato manca, scrivi [DA VERIFICARE] e non inventare.

Dati verificati:
[scrivi qui quello che sai essere vero]

Messaggio:
[incolla qui il messaggio]`,
  },
  {
    id: 'sintesi',
    title: 'Capire che cosa dicono i clienti',
    when: 'Le recensioni sono pubbliche: qui non ci sono dati riservati.',
    text: `Qui sotto trovi le recensioni dell'ultimo anno di [ristorante / albergo / campeggio].
Dimmi: le tre cose che piacciono di più, le tre che piacciono di meno, che cosa è cambiato negli ultimi mesi.
Per ogni punto indica quante recensioni lo citano e riporta una frase di esempio.
Non trarre conclusioni che le recensioni non sostengono.

Recensioni:
[incolla qui]`,
  },
  {
    id: 'assistente',
    title: 'Istruire l’assistente delle domande ricorrenti',
    when: 'Da usare come istruzioni di partenza per un assistente sul sito o su WhatsApp.',
    text: `Sei l'assistente automatico di [nome del locale]. Presentati sempre come assistente automatico.
Rispondi solo con le informazioni scritte qui sotto.
Se la domanda riguarda allergeni, prezzi non elencati, disponibilità, rimborsi o reclami, oppure se non trovi la risposta, non improvvisare: scrivi che passerai la richiesta a una persona e indica [telefono o email del locale].

Informazioni:
[orari, parcheggio, animali, check-in e check-out, come arrivare]`,
  },
  {
    id: 'menu',
    title: 'Tradurre un menu o una descrizione',
    when: 'L’elenco degli allergeni lo compila e lo firma chi conosce le ricette: l’AI lo copia, non lo scrive.',
    text: `Traduci questo testo in [lingua] per un pubblico di turisti.
Mantieni in italiano i nomi dei piatti e aggiungi tra parentesi una breve spiegazione.
Non aggiungere ingredienti e non modificare l'elenco degli allergeni: copialo esattamente com'è.

Testo:
[incolla qui]`,
  },
];

const staffRule = [
  { lead: 'A che cosa serve.', body: 'Gli strumenti di intelligenza artificiale si usano per preparare bozze: risposte alle recensioni, messaggi agli ospiti, traduzioni, testi per menu e cartelli.' },
  { lead: 'Chi rilegge.', body: 'Ogni testo viene riletto da [nome o ruolo] prima di essere inviato o pubblicato.' },
  { lead: 'Che cosa non si inserisce mai.', body: 'Documenti d’identità, dati di pagamento, nome e cognome di un ospite accanto a un dato di salute, dati dei colleghi, password e accessi.' },
  { lead: 'Che cosa decide sempre una persona.', body: 'Allergeni e ingredienti, prezzi e disponibilità, rimborsi e reclami seri, turni e valutazioni.' },
  { lead: 'Recensioni.', body: 'Non si usa l’intelligenza artificiale per scrivere recensioni, né sul nostro locale né su altri.' },
  { lead: 'Quali strumenti.', body: 'Si usano solo quelli indicati dal titolare: [elenco]. Non si usano account personali per il lavoro.' },
  { lead: 'Se si sbaglia.', body: 'Chi inserisce per errore un dato che non andava inserito lo dice subito a [nome o ruolo].' },
];

const staffRuleText =
  'Uso dell’intelligenza artificiale in [nome del locale]\n\n' +
  staffRule.map((r) => `${r.lead} ${r.body}`).join('\n\n');

const supplierEmail = `Buongiorno,

stiamo verificando come vengono trattati i dati dei nostri ospiti nelle funzioni di intelligenza artificiale del vostro prodotto. Vi chiediamo di rispondere per iscritto a tre domande.

- Quando si usano le funzioni di AI, dove vengono inviati ed elaborati i dati dei clienti, e presso quali fornitori terzi?
- I dati dei nostri clienti vengono usati per addestrare o migliorare modelli di AI, vostri o di terzi?
- Le funzioni di AI si possono disattivare, del tutto o una per una, e come?

Grazie,
[nome e struttura]`;

const monday = [
  'Scegliere un solo lavoro e provarlo per due settimane. Le risposte alle recensioni sono il più semplice.',
  'Decidere chi rilegge e firma ogni testo prima che esca.',
  'Scrivere che cosa non si incolla mai, e appenderlo dove si lavora.',
  'Se c’è un assistente automatico sul sito o su WhatsApp, verificare che si presenti come tale.',
  'Guardare nelle impostazioni dello strumento che fine fanno le conversazioni.',
];

const sources = [
  {
    label: 'Garante per la protezione dei dati personali, 29 aprile 2026',
    note: 'Le strutture ricettive non possono conservare copia dei documenti degli ospiti.',
    href: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/print/10244195',
  },
  {
    label: 'CERT-AgID, agosto 2025',
    note: 'Documenti d’identità sottratti a hotel italiani e messi in vendita.',
    href: 'https://cert-agid.gov.it/news/in-vendita-documenti-di-identita-trafugati-da-hotel-italiani/',
  },
  {
    label: 'PMI.it, luglio 2026',
    note: 'AI Act: dal 2 agosto 2026 chi interagisce con un sistema di AI deve esserne informato.',
    href: 'https://www.pmi.it/impresa/normativa/475371/intelligenza-artificiale-dal-2-agosto-nuove-regole-ue.html',
  },
  {
    label: 'Il Post, 7 aprile 2026',
    note: 'Le nuove regole sulle recensioni online per alberghi, bar e ristoranti.',
    href: 'https://www.ilpost.it/2026/04/07/nuove-regole-recensioni-false-ingannevoli-online-ristoranti-hotel/',
  },
  {
    label: 'Sky TG24, 7 aprile 2026',
    note: 'Recensioni false: che cosa cambia con la legge sulle PMI.',
    href: 'https://tg24.sky.it/economia/2026/04/07/recensioni-false-nuove-regole-ddl-pmi',
  },
  {
    label: 'AI Business',
    note: 'Air Canada risponde di una regola inventata dal suo chatbot (decisione del 14 febbraio 2024).',
    href: 'https://aibusiness.com/nlp/air-canada-held-responsible-for-chatbot-s-hallucinations-',
  },
  {
    label: 'ANSA su dati Istat, dicembre 2025',
    note: 'Uso dell’AI nelle imprese italiane con almeno dieci addetti: 16,4% nel 2025.',
    href: 'https://www.ansa.it/canale_tecnologia/notizie/future_tech/2025/12/15/istat-raddoppia-in-un-anno-luso-dellia-coinvolte-meta-grandi-imprese_cb4bdeb9-5542-4921-b1b4-9d1e847ce897.html',
  },
  {
    label: 'Hotel Dive, luglio 2026',
    note: 'Indagine Allianz Partners e Ipsos: il 37% dei viaggiatori statunitensi usa l’AI per organizzare il viaggio.',
    href: 'https://www.hoteldive.com/news/artificial-intelligence-mainstream-travel-planning-tool/826002/',
  },
];

const sectionLabel = 'text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] font-medium mb-4';
const lead = 'text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-[65ch]';
const promptBox =
  'rounded-lg border border-white/8 bg-black/30 p-4 sm:p-5 text-sm sm:text-[15px] leading-relaxed whitespace-pre-wrap break-words font-mono text-[var(--color-text)]';
const primaryLink =
  'inline-flex items-center gap-2 min-h-11 px-5 rounded-lg bg-[var(--color-accent)] text-[#14100b] text-sm font-semibold hover:bg-[var(--color-accent-hover)]';
const secondaryLink =
  'inline-flex items-center gap-2 min-h-11 px-4 rounded-lg border border-white/12 bg-white/[0.04] text-white text-sm font-medium hover:bg-white/[0.09] hover:border-white/20';

export default async function StagionalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'it') {
    redirect(`/it${PAGE_PATH}`);
  }
  setRequestLocale(locale);

  return (
    <div className="pt-24 pb-16">
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 md:pt-16 md:pb-14">
        <p className={sectionLabel}>I materiali dell&rsquo;intervento</p>
        <h1 className="display-lg text-white">Il nuovo stagionale</h1>
        <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-[60ch]">
          L&rsquo;intelligenza artificiale in albergo, al ristorante, in campeggio: cosa farle fare, cosa non darle.
          Qui trovi quello che hai sentito in sala, pronto da usare.
        </p>
        <p className="mt-4 text-sm text-[var(--color-text-subtle)]">
          Non serve registrarsi. Non ti chiedo n&eacute; nome n&eacute; email.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <nav aria-label="Indice della pagina" className="lg:col-span-3">
          <ul className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 lg:sticky lg:top-28 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0 lg:border-l lg:border-white/8">
            {nav.map((n) => (
              <li key={n.href} className="shrink-0">
                <a
                  href={n.href}
                  className="inline-flex items-center min-h-11 px-4 rounded-full border border-white/10 text-sm text-[var(--color-text-muted)] hover:text-white hover:border-white/20 whitespace-nowrap lg:rounded-none lg:border-0 lg:px-5 lg:min-h-10"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-9 mt-10 lg:mt-0 space-y-20 sm:space-y-24">
          {/* La regola */}
          <section id="regola" className="scroll-mt-28">
            <h2 className={sectionLabel}>La regola</h2>
            <p className="display-md text-white font-[family-name:var(--font-source-serif)]">
              Bozza sua, firma vostra.
            </p>
            <p className={`${lead} mt-5`}>
              L&rsquo;AI va trattata come uno stagionale al primo giorno: veloce, parla molte lingue, non si stanca.
              Non conosce il vostro locale e, quando non sa una cosa, la inventa. Prepara le bozze. Tutto quello che
              esce con il nome del locale lo ha letto una persona.
            </p>

            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="text-base font-semibold text-white mb-3">Le si pu&ograve; chiedere</h3>
                <ul className="border-y border-white/8 divide-y divide-white/8">
                  {canAsk.map((item) => (
                    <li key={item} className="py-3 text-[var(--color-text)]">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-3">Non si incolla mai</h3>
                <ul className="border-y border-white/8 divide-y divide-white/8">
                  {neverPaste.map((row) => (
                    <li key={row.item} className="py-3">
                      <span className="block text-[var(--color-text)]">{row.item}</span>
                      <span className="block text-sm text-[var(--color-text-subtle)] mt-0.5">{row.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-base font-semibold text-white mb-3">Decide sempre una persona</h3>
              <ul className="border-y border-white/8 divide-y divide-white/8">
                {humanDecides.map((row) => (
                  <li key={row.item} className="py-3 sm:flex sm:items-baseline sm:justify-between sm:gap-8">
                    <span className="block text-[var(--color-text)]">{row.item}</span>
                    <span className="block text-sm text-[var(--color-text-subtle)] mt-0.5 sm:mt-0 sm:text-right">{row.note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[var(--color-text-muted)] max-w-[65ch]">
                E un lavoro che non le si chiede: scrivere recensioni, sul vostro locale o su altri.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/stagionale/foglio-da-appendere.pdf" download className={primaryLink}>
                <Download size={16} aria-hidden="true" />
                Scarica il foglio da appendere
              </a>
              <span className="text-sm text-[var(--color-text-subtle)]">PDF, una pagina A4</span>
            </div>
          </section>

          {/* Richieste pronte */}
          <section id="richieste" className="scroll-mt-28">
            <h2 className={sectionLabel}>Richieste pronte da copiare</h2>
            <p className={lead}>
              Cinque richieste da incollare nello strumento di AI che usate. Sono scritte per non contenere nomi di
              clienti. Le parti tra parentesi quadre vanno sostituite con le vostre.
            </p>
            <div className="mt-10 space-y-12">
              {prompts.map((p) => (
                <article key={p.id} aria-labelledby={`richiesta-${p.id}`}>
                  <h3 id={`richiesta-${p.id}`} className="display-sm text-white">{p.title}</h3>
                  <p className="mt-2 mb-4 text-sm text-[var(--color-text-muted)] max-w-[65ch]">{p.when}</p>
                  <pre className={promptBox}>{p.text}</pre>
                  <div className="mt-3">
                    <CopyButton text={p.text} label="Copia la richiesta" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Regola per il personale */}
          <section id="personale" className="scroll-mt-28">
            <h2 className={sectionLabel}>Regola per il personale</h2>
            <p className={lead}>
              Mezza pagina da adattare, firmare e far firmare. &Egrave; un modello di partenza: non sostituisce il
              parere del consulente privacy o del consulente del lavoro.
            </p>
            <div className="mt-8 border-y border-white/8 divide-y divide-white/8">
              {staffRule.map((r) => (
                <p key={r.lead} className="py-4 leading-relaxed text-[var(--color-text-muted)] max-w-[72ch]">
                  <strong className="font-semibold text-white">{r.lead}</strong> {r.body}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="/stagionale/regola-interna-ai.docx" download className={primaryLink}>
                <Download size={16} aria-hidden="true" />
                Scarica in Word
              </a>
              <a href="/stagionale/regola-interna-ai.pdf" download className={secondaryLink}>
                <Download size={16} aria-hidden="true" />
                Scarica in PDF
              </a>
              <CopyButton text={staffRuleText} label="Copia il testo" />
            </div>
          </section>

          {/* Domande al fornitore */}
          <section id="fornitore" className="scroll-mt-28">
            <h2 className={sectionLabel}>Tre domande al fornitore del gestionale</h2>
            <p className={lead}>
              Se il gestionale, il sistema di prenotazione o la cassa hanno gi&agrave; funzioni di AI, queste tre
              domande vanno fatte per iscritto. Il testo &egrave; pronto da incollare in una email.
            </p>
            <pre className={`${promptBox} mt-8`}>{supplierEmail}</pre>
            <div className="mt-3">
              <CopyButton text={supplierEmail} label="Copia l&rsquo;email" />
            </div>
          </section>

          {/* Lunedi */}
          <section id="lunedi" className="scroll-mt-28">
            <h2 className={sectionLabel}>Cinque cose da fare luned&igrave;</h2>
            <ol className="border-y border-white/8 divide-y divide-white/8">
              {monday.map((item, i) => (
                <li key={item} className="py-4 flex items-baseline gap-5">
                  <span aria-hidden="true" className="text-2xl font-semibold text-[var(--color-accent)] tabular-nums w-6 shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[var(--color-text)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Fonti e slide */}
          <section id="fonti" className="scroll-mt-28">
            <h2 className={sectionLabel}>Fonti e slide</h2>
            <p className={lead}>
              Le pagine da cui vengono i numeri e le norme citate in sala, consultate il 2 ottobre 2026. Le norme sono
              riportate da fonti di stampa: per decisioni che contano, va letto il testo ufficiale.
            </p>
            <ul className="mt-8 border-y border-white/8 divide-y divide-white/8">
              {sources.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-6 py-4"
                  >
                    <span>
                      <span className="block text-white group-hover:text-[var(--color-accent)]">{s.label}</span>
                      <span className="block text-sm text-[var(--color-text-muted)] mt-1 max-w-[65ch]">{s.note}</span>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" className="shrink-0 mt-1 text-[var(--color-text-subtle)] group-hover:text-[var(--color-accent)]" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/stagionale/il-nuovo-stagionale-slide.pdf" download className={secondaryLink}>
                <Download size={16} aria-hidden="true" />
                Scarica le slide
              </a>
              <span className="text-sm text-[var(--color-text-subtle)]">PDF, 16 pagine</span>
            </div>
          </section>

          <section aria-label="Contatti" className="border-t border-white/8 pt-10">
            <p className={lead}>
              Una domanda rimasta in sospeso, o un caso del vostro locale da guardare insieme:{' '}
              <a href="mailto:angelo@pallanca.info" className="text-[var(--color-accent)] underline underline-offset-4 hover:text-[var(--color-accent-hover)]">
                angelo@pallanca.info
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
