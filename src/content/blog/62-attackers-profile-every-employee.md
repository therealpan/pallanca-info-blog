---
title: "Attackers Now Profile Every Employee. Stopping Them Is a Management Decision."
titleIt: "Chi attacca ora studia ogni dipendente. Fermarlo e' una decisione del management."
slug: attackers-profile-every-employee
date: "2026-11-19"
topic: "AI Security"
cardImage: "/images/blog/cards/attackers-profile-every-employee.webp"
excerpt: "AI agents have made pre-attack reconnaissance almost free, so the tailored dossier now covers the accounts clerk too. Five decisions for management."
excerptIt: "Gli agenti AI hanno reso quasi gratuita la ricognizione prima di un attacco: il dossier su misura ora tocca anche l'impiegato. Cinque decisioni per il management."
---

### TL;DR

- Before an intrusion, attackers study the target: staff profiles, job ads, company posts, event photos. AI agents now do this continuously and in parallel.
- Anthropic's **September 2026** threat report describes a fleet of **13 scheduled collection agents** and concludes that the techniques are old while the economics have changed, making "previously marginal targets viable".
- In a study with real participants, spear-phishing emails researched and written entirely by AI agents got a **54%** click rate, level with human experts, against **12%** for generic emails.
- For a company, this means the detailed dossier is no longer reserved for the CEO. The accounts clerk and the new helpdesk hire get one too.
- Most of the defence sits in management decisions, what you publish, how money moves, who owns the exposure, and very little of it requires a new tool.

### Assumptions

1. Sources: Anthropic's threat report, a Trend Micro proof of concept, a peer-reviewed study by Heiding, Lermen, Kao, Schneier and Vishwanath, and Verizon's 2026 DBIR. Vendor reports explain mechanisms well and measure prevalence poorly, since their authors also sell the defence. Solid on mechanism, medium on how widespread it is.
2. This piece is about defence and contains nothing operational for attackers.
3. No company can become invisible. The aim is to make reconnaissance more expensive and what it finds less useful.

### Goal

To explain in business terms what changes when reconnaissance is done by an agent, and to set out five decisions, in order of priority, that a management team can take this quarter.

---

### The part of the attack nobody sees

Every serious intrusion starts with homework. MITRE ATT&CK treats reconnaissance as a tactic of its own: learning about the organisation, its people and its exposed systems, often without touching a single server. Someone reads profiles, cross-references names, works out who approves payments and who joined the finance team last month.

It still works. Verizon's 2026 DBIR puts the human element in **62%** of breaches. What kept that homework rare was its cost, because a credible message needs someone who knows who they are writing to.

### What an agent changes

Anthropic's report describes reconnaissance that never stops. One loop maps the targets' exposed surface and feeds a project memory that widens the target list on the next pass; in another operation, thirteen standing agents downloaded content from public sites and social profiles on a schedule, summarised it and scored it. The report's own conclusion is the one a board should read: AI "compresses the cost side of attacker ROI calculations", and that shift "makes previously marginal targets viable".

Trend Micro showed the same thing with tools anyone can use, going from a leadership team's public LinkedIn posts to tailored content for each person in about **30 minutes**. The Heiding study measured the last step, with the 54% click rate above.

Put those together and the target list changes shape. Deep profiling used to be worth the effort only for the CFO or the system administrator. When an agent does the work, it becomes worth doing for the person who processes supplier invoices, who usually has fewer defences and more reasons to be helpful. (Agents also make plenty of mistakes, including invented credentials and public data passed off as secret. A collector that cannot tell true from false can be tripped up, see point 5.)

---

### Five decisions for management, in order

**1. Commission your own reconnaissance, every quarter.** Someone, internal or external, collects what an attacker would find in an afternoon: an org chart rebuilt from profiles, the email address format, technologies named in job ads, metadata in published documents, exposed services. The output is a list of things to close, each with an owner and a date.

**2. Decide what the company publishes.** Job ads can ask for ERP experience without naming version and configuration. Documents go out stripped of metadata. Roles that receive outside requests use function addresses. Out-of-office replies to external senders give a return date and leave out the deputy's name and number. Each detail looks harmless on its own; the value for an attacker comes from combining them, which is exactly what agents are good at.

**3. Make out-of-band verification the rule for money and access.** Bank detail changes, urgent transfers, password or MFA resets: call back on a number you already hold, never the one in the message, and agree a code word for executive requests. It is the cheapest control on this list and the one with the best return.

**4. Use phishing-resistant authentication where it counts.** Passkeys or FIDO2 keys for executives, finance, administrators and helpdesk, plus a written procedure for resetting a second factor, because that phone call is where a well-researched attacker does the most damage. A good dossier makes the bait credible; a passkey makes the stolen password useless.

**5. Train for the attack you will actually get, and set a few traps.** Generic phishing simulations teach people to spot the 12%. Run personalised exercises, make "I'll call you back" a normal answer, and publish a handful of decoy addresses or profiles that only a scraper would reach, wired to an alert. When someone writes to an employee who does not exist, you know the reconnaissance has started.

---

### Why this matters for your business

Trend Micro's thirty minutes cuts both ways. Spend half an hour this week on your own public footprint, the profiles, the job ads, the last press release, and ask what someone trying to fool your accounts team would take from it. Whatever you find goes at the top of the list in point 1.

— Pan

*A longer version for security practitioners, in Italian, is on [pallanca.net](https://pallanca.net/blog/agenti-ai-ricognizione-osint).*

---ITALIAN---

### TL;DR

- Prima di un'intrusione chi attacca studia il bersaglio: profili dei dipendenti, annunci di lavoro, post aziendali, foto degli eventi. Oggi gli agenti AI lo fanno di continuo e in parallelo.
- Il rapporto di threat intelligence di Anthropic di **settembre 2026** descrive una flotta di **13 agenti di raccolta programmati** e conclude che le tecniche sono vecchie mentre l'economia e' cambiata, al punto da rendere "praticabili bersagli prima marginali".
- In uno studio con persone reali, le email di spear phishing preparate e scritte interamente da agenti AI hanno avuto il **54%** di clic, alla pari con gli esperti umani, contro il **12%** delle email generiche.
- Per un'azienda vuol dire che il dossier su misura non e' piu' riservato all'amministratore delegato. Tocca anche all'impiegato della contabilita' e al nuovo assunto dell'helpdesk.
- Gran parte della difesa sta in decisioni del management, cosa si pubblica, come si muovono i soldi, chi risponde dell'esposizione, e solo una piccola parte richiede uno strumento nuovo.

### Assunti

1. Fonti: il rapporto di Anthropic, una prova di concetto di Trend Micro, uno studio peer-reviewed di Heiding, Lermen, Kao, Schneier e Vishwanath e il Verizon DBIR 2026. I rapporti dei vendor spiegano bene i meccanismi e misurano male la diffusione, perche' chi li scrive vende anche la difesa. Solidi sul meccanismo, medi sulla diffusione.
2. Il pezzo parla di difesa e non contiene niente di operativo per chi attacca.
3. Nessuna azienda puo' diventare invisibile. Lo scopo e' rendere la ricognizione piu' costosa e meno utile quello che trova.

### Obiettivo

Spiegare in termini di business cosa cambia quando la ricognizione la fa un agente, e indicare cinque decisioni, in ordine di priorita', che un management puo' prendere in questo trimestre.

---

### La parte dell'attacco che nessuno vede

Ogni intrusione seria comincia con i compiti a casa. Il framework MITRE ATT&CK tratta la ricognizione come una tattica a se': raccogliere informazioni sull'organizzazione, sulle persone e sui sistemi esposti, spesso senza toccare un solo server. Qualcuno legge i profili, incrocia i nomi, capisce chi approva i pagamenti e chi e' entrato in amministrazione il mese scorso.

Funziona ancora. Secondo il Verizon DBIR 2026 il fattore umano compare nel **62%** delle violazioni. Quello che rendeva rari quei compiti a casa era il costo, perche' un messaggio credibile richiede qualcuno che sappia a chi sta scrivendo.

### Cosa cambia con un agente

Il rapporto di Anthropic descrive una ricognizione che non si ferma mai. Un ciclo mappa la superficie esposta dei bersagli e alimenta una memoria di progetto che allarga la lista al giro successivo; in un'altra operazione tredici agenti sempre attivi scaricavano a orari fissi contenuti da siti pubblici e profili social, li riassumevano e davano a ciascuno un punteggio. La conclusione del rapporto e' quella che un consiglio di amministrazione dovrebbe leggere: l'AI "comprime il lato dei costi nel calcolo del ritorno per chi attacca", e questo spostamento "rende praticabili bersagli prima marginali".

Trend Micro ha mostrato la stessa cosa con strumenti alla portata di chiunque, passando dai post pubblici su LinkedIn di un gruppo dirigente a contenuti su misura per ciascuno in circa **30 minuti**. Lo studio di Heiding ha misurato l'ultimo passaggio, con il 54% di clic citato sopra.

Messi insieme, questi dati cambiano la forma della lista dei bersagli. La profilazione approfondita conveniva solo per il direttore finanziario o per l'amministratore di sistema. Quando la fatica la fa un agente, conviene anche per chi registra le fatture dei fornitori, che di solito ha meno difese e piu' motivi per essere gentile. (Gli agenti sbagliano anche parecchio, con credenziali inventate e dati pubblici spacciati per segreti. Un raccoglitore che non distingue il vero dal falso si puo' far inciampare, vedi il punto 5.)

---

### Cinque decisioni per il management, in ordine

**1. Commissionate la ricognizione su voi stessi, ogni trimestre.** Qualcuno, interno o esterno, raccoglie quello che un attaccante troverebbe in un pomeriggio: un organigramma ricostruito dai profili, il formato degli indirizzi email, le tecnologie citate negli annunci, i metadati nei documenti pubblicati, i servizi esposti. Il risultato e' una lista di cose da chiudere, ognuna con un responsabile e una scadenza.

**2. Decidete cosa pubblica l'azienda.** Un annuncio puo' chiedere esperienza su sistemi ERP senza indicare versione e configurazione. I documenti escono senza metadati. I ruoli che ricevono richieste dall'esterno usano indirizzi di funzione. La risposta automatica di fuori ufficio verso l'esterno indica la data di rientro e lascia fuori nome e numero del sostituto. Ogni dettaglio da solo sembra innocuo; il valore per chi attacca nasce dall'incrocio, ed e' proprio quello che un agente sa fare.

**3. Rendete obbligatoria la verifica fuori canale per soldi e accessi.** Cambio di IBAN, bonifici urgenti, reset di password o del secondo fattore: si richiama a un numero gia' noto, mai a quello scritto nel messaggio, e per le richieste dei dirigenti si concorda una parola chiave. E' il controllo che costa meno in tutta la lista e quello che rende di piu'.

**4. Autenticazione resistente al phishing dove conta.** Passkey o chiavi FIDO2 per dirigenti, finanza, amministratori di sistema e helpdesk, piu' una procedura scritta per il ripristino del secondo fattore, perche' e' in quella telefonata che un attaccante ben documentato fa piu' danni. Un buon dossier rende credibile l'esca; una passkey rende inutile la password rubata.

**5. Formazione sull'attacco che arrivera' davvero, e qualche trappola.** Le simulazioni di phishing generiche insegnano a riconoscere il 12%. Servono esercitazioni personalizzate, una cultura in cui "ti richiamo io" sia una risposta normale e qualche indirizzo o profilo fittizio pubblicato dove arriva solo uno scraper, collegato a un allarme. Quando qualcuno scrive a un dipendente che non esiste, sapete che la ricognizione e' cominciata.

---

### Perche' conta per la tua azienda

I trenta minuti di Trend Micro valgono in entrambe le direzioni. Dedicate mezz'ora questa settimana alla vostra impronta pubblica, i profili, gli annunci, l'ultimo comunicato, e chiedetevi cosa ne ricaverebbe chi vuole ingannare la vostra contabilita'. Quello che trovate va in cima alla lista del punto 1.

— Pan

*Una versione piu' lunga, pensata per chi lavora nella sicurezza, e' su [pallanca.net](https://pallanca.net/blog/agenti-ai-ricognizione-osint).*
