---
title: "Four Minutes to Run Code Inside a Fortune 500"
titleIt: "Quattro minuti per eseguire codice dentro una Fortune 500"
slug: four-minutes-fortune-500
date: "2026-09-23"
topic: "AI Strategy"
cardImage: "/images/blog/cards/four-minutes-fortune-500.webp"
excerpt: "A researcher's package ran inside a Fortune 500 in four minutes, installed by coding agents reading docs. The cage costs 18 points. Series 3 of 5: The Harness."
excerptIt: "Il pacchetto di un ricercatore gira in una Fortune 500 in quattro minuti, installato da agent che leggono la documentazione. Serie 3 di 5: La Harness."
---

*Series **The Harness** · 3 of 5*

At the end of August, Alon Hertz published a research write-up with a title that should be printed on every CTO's coffee mug: *Data Became Code*. His team scanned **6,214 live corporate domains** and found more than **8,000 `llms.txt` files**, the plain-text instructions companies publish so AI agents can read their docs.

Some of those files told agents to install packages that did not exist. Nobody owned the names. So the researchers registered them, put a harmless beacon inside ("I was installed, here is when"), and waited.

> The first callback came from a Fortune 500 company in under four minutes.

Dozens more followed. The agents named in the coverage: **Claude, Codex and Hermes**. Nobody typed a URL. The prompt was a single line asking the agent to build a project with a vendor's SDK. The agent found the `llms.txt` on its own and ran what it said.

(The exact count of dangling references depends on who is counting: Ars Technica reported 120 files, the researchers list 237 unclaimed packages and domains. Pick either number. Neither is comforting.)

---

### This was not a hypothetical

The same trick had already been used for real. In July a package called `clerk-next-fix-auth-protection` appeared on npm, matching a bare command in an authentication vendor's docs. It is now catalogued as **MAL-2026-11069** on OSV: at install time it sent the user name, machine name and working directory to an external server. Clerk fixed its docs. The pattern stays.

The agents did nothing stupid here. They did exactly what a diligent junior would do: read the official documentation, follow the install step. That is the whole problem. As Bruce Schneier put it in his note on the research, *AI coding agents are not yet trustworthy*. I would add: neither is the paper they read.

---

### The cage has a price tag

This is where the series comes back in. In part two I argued that the harness, not the model, is the moat. Here is the part vendors mention less: the most valuable piece of the harness is the cage, and the cage costs money.

A paper posted on arXiv on 2 August, *Permission Denied*, measured it. The authors ran **12 model-harness bundles** in hardened environments: a 205-domain network allowlist, read-only system folders, no sudo. Under the strictest policy, Claude Sonnet 5 lost **18.3 points** of task success. Grok 4.5 kept its success rate but burned **167.3% more** to get there.

So the cage makes agents slower, dumber or more expensive. Guess what teams do when a sprint is late. They turn it off. The community even has a name for it: "YOLO mode", every action auto-approved.

Anthropic reported last year that its sandbox cut permission prompts by **84%**, adding that it only works with *both* filesystem and network isolation. One without the other is a locked door with no wall.

---

### Otis sold the brake

In 1854, at the Crystal Palace exhibition in New York, Elisha Otis stood on a raised platform and had the rope cut. The platform dropped a few inches and stopped. "All safe, gentlemen, all safe." Elevators existed before Otis. What didn't exist was a reason to trust one with your body. Three years later the first passenger elevator went into a five-storey department store on Broadway, and cities started growing upward.

The motor was never the product. The brake was.

Coding agents are at the same moment. The model is the motor, and motors are converging. The harness that decides **what the agent can reach** (which domains, which registries, which folders, with whose credentials) is the brake. It is also the only piece that turns a demo into something you can put inside a bank.

---

### Why this matters for your business

Two questions, one for each side of the fence.

If you **use** coding agents: can your agents install a package from a public registry without anyone seeing it? If the honest answer is "I don't know", you have a sandbox problem, not a model problem.

If you **publish** docs: your `llms.txt` is now an instruction surface. Every package name in it is a promise that you own that name. Most companies publishing these files have just become registry administrators without knowing it.

*Part of **The Harness**, a series on the centrality of the harness in agentic AI. Previous: [the model is the commodity, the harness is the moat](/en/blog/harness-is-the-moat).*

---ITALIAN---

*Serie **La Harness** · 3 di 5*

A fine agosto Alon Hertz ha pubblicato una ricerca con un titolo da stampare sulla tazza di ogni CTO: *Data Became Code*, i dati sono diventati codice. Il suo team ha scansionato **6.214 domini aziendali attivi** e trovato oltre **8.000 file `llms.txt`**, le istruzioni in testo semplice che le aziende pubblicano perché gli agent AI leggano la loro documentazione.

Alcuni di quei file dicevano agli agent di installare pacchetti che non esistevano. Nomi senza proprietario. I ricercatori li hanno registrati, ci hanno messo dentro un segnalatore innocuo ("sono stato installato, ecco quando") e hanno aspettato.

> La prima risposta è arrivata da una Fortune 500 in meno di quattro minuti.

Poi qualche decina di altre. Gli agent citati nella copertura: **Claude, Codex e Hermes**. Nessuno aveva digitato un URL. Il prompt era una riga sola, costruisci un progetto con l'SDK di questo fornitore. L'agent ha trovato da solo il `llms.txt`, l'ha letto e ha eseguito quello che c'era scritto.

(Il numero esatto di riferimenti orfani dipende da chi conta: Ars Technica parla di 120 file, i ricercatori elencano 237 pacchetti e domini non registrati. Scegliete voi. Nessuno dei due tranquillizza.)

---

### Non era un'ipotesi

Lo stesso trucco era già stato usato sul serio. A luglio su npm è comparso un pacchetto chiamato `clerk-next-fix-auth-protection`, identico a un comando citato nella documentazione di un fornitore di autenticazione. Oggi è catalogato come **MAL-2026-11069** su OSV: al momento dell'installazione spediva nome utente, nome della macchina e cartella di lavoro a un server esterno. Clerk ha corretto la documentazione. Lo schema resta.

Gli agent non hanno fatto niente di stupido. Hanno fatto quello che farebbe un junior diligente: leggere la documentazione ufficiale e seguire il passo di installazione. Il problema è tutto qui. Bruce Schneier, commentando la ricerca, ha scritto che gli agent di coding *non sono ancora affidabili*. Aggiungo: nemmeno la carta che leggono.

---

### La gabbia ha un prezzo

Qui torna la serie. Nella seconda puntata sostenevo che il moat è la harness, non il modello. Ecco la parte che i fornitori citano meno volentieri: il pezzo più prezioso della harness è la gabbia, e la gabbia costa.

Un paper pubblicato su arXiv il 2 agosto, *Permission Denied*, l'ha misurato. Gli autori hanno fatto girare **12 combinazioni modello-harness** in ambienti blindati: rete limitata a 205 domini, cartelle di sistema in sola lettura, niente sudo. Con la policy più severa Claude Sonnet 5 perde **18,3 punti** di successo sui task. Grok 4.5 tiene il tasso di successo ma spende il **167,3% in più** per arrivarci.

Quindi la gabbia rende gli agent più lenti, meno bravi o più cari. Indovinate cosa fanno i team quando lo sprint è in ritardo. La spengono. La community ha perfino un nome: "YOLO mode", ogni azione approvata in automatico.

Anthropic l'anno scorso ha riportato che la sua sandbox taglia le richieste di permesso dell'**84%**, precisando che funziona solo isolando filesystem *e* rete. Uno senza l'altro è una porta blindata senza muro intorno.

---

### Otis vendeva il freno

Nel 1854, all'esposizione del Crystal Palace di New York, Elisha Otis salì su una piattaforma sospesa e fece tagliare la fune. La piattaforma scese di pochi centimetri e si fermò. "All safe, gentlemen, all safe." Gli ascensori esistevano già prima di Otis. Mancava un motivo per affidargli il proprio corpo. Tre anni dopo il primo ascensore per passeggeri entrò in un grande magazzino di cinque piani a Manhattan, e le città cominciarono a crescere in altezza.

Il prodotto non è mai stato il motore. Era il freno.

Gli agent di coding sono allo stesso punto. Il modello è il motore, e i motori stanno convergendo. La harness che decide **cosa l'agent può raggiungere** (quali domini, quali registry, quali cartelle, con le credenziali di chi) è il freno. Ed è l'unico pezzo che trasforma una demo in qualcosa che si può mettere dentro una banca.

---

### Perché conta per la tua azienda

Due domande, una per lato della barricata.

Se **usi** agent di coding: i tuoi agent possono installare un pacchetto da un registry pubblico senza che nessuno se ne accorga? Se la risposta onesta è "non lo so", hai un problema di sandbox, non di modello.

Se **pubblichi** documentazione: il tuo `llms.txt` adesso è una superficie di istruzioni. Ogni nome di pacchetto scritto lì è una promessa di possederlo. Molte aziende che pubblicano questi file sono diventate amministratrici di registry senza saperlo.

*Parte di **La Harness**, serie sulla centralità della harness nell'AI agentic. Precedente: [il modello è la commodity, la harness è il moat](/it/blog/harness-is-the-moat).*
