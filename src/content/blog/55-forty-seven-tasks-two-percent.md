---
title: "Forty-Seven Tasks out of a Hundred. Two Percent Without the Right Window."
titleIt: "Quarantasette compiti su cento. Il 2% con la finestra sbagliata."
slug: forty-seven-tasks-two-percent
date: "2026-11-02"
topic: "Enterprise AI"
cardImage: "/images/blog/cards/forty-seven-tasks-two-percent.webp"
excerpt: "The same vendor published both numbers. One measures reasoning. The other measures whether a site can tell it is a machine. Only one of them is the product."
excerptIt: "Lo stesso fornitore ha pubblicato entrambi i numeri. Uno misura il ragionamento, l'altro se il sito capisce che e' una macchina. Il prodotto e' il secondo."
---

### TL;DR

On 27 October, Carnegie Mellon and Browser Use published a benchmark of fifteen web agents on a hundred real tasks. The best one finished forty-seven. Five finished nothing. Seven months earlier the same company published a different test: same agent, same model, 2 percent success with the browser window hidden and 50 percent with it visible. Their own conclusion was that intelligence and stealth have nothing to do with each other. One of those two numbers is the product you are buying. It is not the one on the slide.

---

The official story about web agents is a story about getting smarter. Better reasoning, longer horizons, fewer dead ends. Every quarter a new leaderboard, every leaderboard a little higher. It is a real story and the numbers behind it are real.

It is also not the story that decides whether the thing works on Monday morning.

---

### Two numbers from the same blog

On 27 October 2026, researchers at Carnegie Mellon and the team at Browser Use published **Odysseys2**, a benchmark of fifteen agents on a hundred long tasks on the live web. Each task is scored on eight to twelve pass or fail checks, one attempt, sixty minutes. **GPT-6 Astra finished 47 outright**, with the top mean score of 84,6. Opus 5.5 finished 18. Five of the fifteen agents finished nothing at all.

That is the number the industry quotes. Here is the one it does not.

On 21 March, the same company published a stealth benchmark across **71 sites where its agents had been blocked**, sorted by whoever was doing the blocking: 23 behind Cloudflare, 18 behind PerimeterX, 13 behind Datadome, 8 behind Akamai. Same agent, same model, every run. The control was a plain Chromium on a datacenter address. Headless, it got through **2 percent** of the time. The identical browser with a window drawn on a screen got through **50 percent**.

> Nothing about the reasoning changed. A window appeared.

Their head of browsers wrote the conclusion himself: agent intelligence and browser stealth are orthogonal. Then, in case anyone missed the commercial reading: stealth is not a feature for us, it is the top priority.

---

### What the court took away

On 4 August 2026 the Ninth Circuit vacated the injunction Amazon had won against Perplexity in March. The reasoning is narrow and expensive. When you point Comet at Amazon, you are the one accessing Amazon. The agent is a tool, not a person, and the Computer Fraud and Abuse Act punishes persons. Rule of lenity, vacated, remanded.

Read it as a procurement document rather than a civil liberties win. Amazon had alleged that Comet dressed its traffic up as ordinary Chrome. The court did not say that was acceptable. It said the federal computer crime statute was the wrong tool for asking. What is left is contract and detection: terms of service, plus four vendors whose job is to guess.

A guess is a price. A price is something a better disguise can beat.

---

### The fork nobody is pricing

Walmart took the other road. On 21 October its CEO announced **Agent Gateway**, an MCP endpoint where vetted agents can search inventory and complete purchases, with Agent Profiles due this month giving each agent its own identity inside the customer's account, its own spending cap, its own sign-off. An agent that says what it is, to a store that decided in advance what it may do.

Both products are on sale right now, to the same buyer, and they cancel each other out. You cannot run an auditable agent and an undetectable one. If your access rate depends on a site not knowing, then every compliance artifact you produce describes a system you configured to be unobservable from the other side.

It also decays on its own. In February the same vendor predicted that detection sitting in monitor-only mode would flip to blocking, and that the tools working today would stop working tomorrow. On 3 June, Cloudflare measured 57,5 percent of requests for web content as automated, a full year ahead of its own CEO's public forecast. The pressure runs one way.

---

### Why this matters for your business

A benchmark score is a capability. An access rate is a position in an arms race. When the deck shows you the first and the invoice is for the second, your throughput can halve next quarter with nothing in your code having changed and no clause to point at.

There is precedent for how this ends, and it is not from software. On 22 October 1998 the Justice Department settled with seven heavy-duty diesel engine makers for **83,4 million dollars**, the largest environmental civil penalty on record at the time. The engines passed the federal test cycle, then shut the controls off on the highway. Same structure, same incentive, one difference that mattered: there was an EPA. Here the referee is paid by the site.

So ask your vendor which of the two numbers they are selling you. The answer is already on their own blog.

---ITALIAN---

### TL;DR

Il 27 ottobre Carnegie Mellon e Browser Use hanno pubblicato un benchmark di quindici agenti web su cento compiti reali. Il migliore ne ha chiusi quarantasette. Cinque non ne hanno chiuso nemmeno uno. Sette mesi prima la stessa azienda aveva pubblicato un altro test: stesso agente, stesso modello, 2% di successo con la finestra del browser nascosta e 50% con la finestra visibile. La loro conclusione e' che intelligenza e invisibilita' non hanno niente a che fare l'una con l'altra. Uno di quei due numeri e' il prodotto che stai comprando. Non e' quello che finisce nelle slide.

---

La versione ufficiale sugli agenti web racconta una storia di intelligenza crescente. Ragionamento migliore, orizzonti piu' lunghi, meno vicoli ciechi. Ogni trimestre una classifica nuova, ogni classifica un po' piu' in alto. E' una storia vera e i numeri che la sostengono sono veri.

Non e' pero' la storia che decide se la cosa funziona lunedi' mattina.

---

### Due numeri dallo stesso blog

Il 27 ottobre 2026 i ricercatori della Carnegie Mellon e il team di Browser Use hanno pubblicato **Odysseys2**, un benchmark di quindici agenti su cento compiti lunghi sul web vivo. Ogni compito ha da otto a dodici controlli passa o non passa, un solo tentativo, sessanta minuti di tempo. **GPT-6 Astra ne ha chiusi 47**, con il punteggio medio piu' alto, 84,6. Opus 5.5 ne ha chiusi 18. Cinque agenti su quindici non hanno chiuso niente.

Questo e' il numero che il settore cita. Quello che non cita e' il prossimo.

Il 21 marzo la stessa azienda ha pubblicato un benchmark di invisibilita' su **71 siti dove i suoi agenti erano stati bloccati**, ordinati per chi li bloccava: 23 dietro Cloudflare, 18 dietro PerimeterX, 13 dietro Datadome, 8 dietro Akamai. Stesso agente, stesso modello, tutte le esecuzioni. Il controllo era un Chromium normale su un indirizzo da datacenter. Senza finestra passava il **2%** delle volte. Lo stesso browser identico, con una finestra disegnata su uno schermo, passava il **50%**.

> Del ragionamento non e' cambiato niente. E' comparsa una finestra.

Il responsabile browser dell'azienda ha scritto la conclusione da solo: intelligenza dell'agente e invisibilita' del browser sono grandezze ortogonali. Poi, nel caso a qualcuno fosse sfuggita la lettura commerciale: l'invisibilita' per noi non e' una funzione, e' la priorita' numero uno.

---

### Quello che il tribunale ha tolto

Il 4 agosto 2026 il Nono Circuito ha annullato l'ingiunzione che Amazon aveva ottenuto contro Perplexity a marzo. La motivazione e' stretta e costosa. Quando punti Comet su Amazon, sei tu quello che accede ad Amazon. L'agente e' uno strumento, non una persona, e il Computer Fraud and Abuse Act punisce le persone. Principio di stretta legalita', ingiunzione annullata, causa rinviata.

Va letta come un documento di acquisto, non come una vittoria sulle liberta' civili. Amazon sosteneva che Comet travestisse il proprio traffico da Chrome qualunque. Il tribunale non ha detto che va bene. Ha detto che la norma penale federale era lo strumento sbagliato per chiederlo. Restano il contratto e il rilevamento: condizioni d'uso, piu' quattro fornitori il cui mestiere e' indovinare.

Un'ipotesi e' un prezzo. E un prezzo si batte con un travestimento migliore.

---

### Il bivio che nessuno sta quotando

Walmart ha preso l'altra strada. Il 21 ottobre il suo amministratore delegato ha annunciato **Agent Gateway**, un endpoint MCP dove gli agenti autorizzati possono cercare a magazzino e concludere acquisti, con gli Agent Profiles previsti questo mese: ogni agente avra' una propria identita' dentro l'account del cliente, un proprio tetto di spesa, una propria approvazione. Un agente che dichiara cosa e', verso un negozio che ha deciso in anticipo cosa puo' fare.

I due prodotti sono in vendita adesso, allo stesso compratore, e si annullano a vicenda. Non puoi avere insieme un agente verificabile e un agente non rilevabile. Se il tuo tasso di accesso dipende dal fatto che il sito non se ne accorga, ogni documento di conformita' che produci descrive un sistema che hai configurato per essere non osservabile dall'altro lato.

E si degrada da solo. A febbraio lo stesso fornitore prevedeva che i rilevamenti in sola osservazione sarebbero passati al blocco, e che gli strumenti che funzionano oggi smetteranno di funzionare domani. Il 3 giugno Cloudflare ha misurato il 57,5% delle richieste di contenuti web come automatiche, un anno prima della previsione pubblica del suo stesso amministratore delegato. La pressione va in una sola direzione.

---

### Perche' questo conta per la tua azienda

Un punteggio da benchmark e' una capacita'. Un tasso di accesso e' una posizione in una corsa agli armamenti. Quando la presentazione ti mostra il primo e la fattura riguarda il secondo, il tuo volume di lavoro puo' dimezzarsi il trimestre prossimo senza che una riga del tuo codice sia cambiata e senza una clausola da far valere.

Esiste un precedente su come finisce, e non viene dal software. Il 22 ottobre 1998 il Dipartimento di Giustizia americano ha chiuso con sette costruttori di motori diesel per mezzi pesanti a **83,4 milioni di dollari**, allora la sanzione civile ambientale piu' alta mai comminata. I motori passavano il ciclo di test federale, poi spegnevano i controlli in autostrada. Stessa struttura, stesso incentivo, una differenza che pesava: c'era un'agenzia pubblica. Qui l'arbitro e' pagato dal sito.

Quindi chiedi al tuo fornitore quale dei due numeri ti sta vendendo. La risposta e' gia' sul suo blog.
