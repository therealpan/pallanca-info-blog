---
title: "Twenty Different Models. One in Five Rejected by All of Them."
titleIt: "Venti modelli diversi. Uno su cinque scartato da tutti."
slug: twenty-different-models
date: "2026-10-27"
topic: "Enterprise AI"
cardImage: "/images/blog/cards/twenty-different-models.webp"
excerpt: "Twenty firms, twenty different models, and a fifth of candidates still rejected everywhere. The risk nobody prices is not the error rate. It is the correlation."
excerptIt: "Venti aziende, venti modelli diversi, e un quinto dei candidati scartato comunque da tutti. Il rischio che nessuno quota non e il tasso di errore. E la correlazione."
---

### TL;DR

Companies buy AI the way they buy anything else: pick the best supplier, keep a second one for safety. With models that logic quietly fails. Research from Cornell shows that models from different vendors and different architectures tend to be wrong about the same things, and that the more accurate two models are, the more their errors line up. A large study of four million job applications shows what that does to the people on the receiving end. The risk nobody puts a number on is not accuracy. It is agreement.

---

Twenty firms. Twenty different models, each drawn at random from a different vendor. Around one in five candidates was still rejected by all twenty.

That result sits in a Cornell paper from June 2025 and I have yet to hear it quoted in a single enterprise AI meeting.

### The assumption nobody writes down

Every risk model in business runs on independence. Two reviewers catch more than one. Two suppliers survive what one supplier does not. Two opinions are better than one opinion heard twice. We never state it, which is exactly why we never check it.

In June 2026 a team from Stanford and Northeastern published the largest audit of hiring algorithms I know of: **4,197,168 applications** from 3,372,132 applicants, 1,746 positions, 156 employers, all screened by one vendor's algorithms between December 2018 and December 2022. About **4 percent of applicants who applied to ten positions were rejected by all ten**. Under independence that number should collapse as you apply more widely. It does not. To reach a near certain chance of one single human reading your file, you would need to apply to **25 positions, not 10**.

The obvious fix is to spread the work across vendors. The Cornell group tested that assumption across 420 model evaluations from more than a dozen providers. When two models are both wrong, they agree on the wrong answer about **60 percent** of the time on one benchmark, against a chance baseline of 33 percent. On another, 42.3 percent against 12.7. Practically every pair in the sample sits above its baseline.

> Different logo. Same blind spot.

### The sentence that should worry a procurement team

Buried in the regression tables is the part that changes how you buy: **the more accurate two models are, the more their errors correlate.** Pick the best model on the leaderboard, as everyone does, and you move toward the part of the distribution where mistakes overlap most. Every buyer optimises their own decision correctly, and the system gets more fragile with each rational choice. There is no column for that on a vendor scorecard.

---

### The same shape, from the buyer's chair

The industry has started to notice the symptom without naming the cause. A Cloud Security Alliance paper from 19 June 2026 reports that **91 percent** of executives lack full visibility of their AI dependencies, **71 percent** say switching their main model vendor would be hard, and **81 percent** expect severe or critical disruption from a seven day outage at one provider. High signal disruption days went from 6 in the first quarter of 2025 to 51 in the first quarter of 2026.

On 6 October 2026 an IT executive at Citi gave it a decent name in Forbes: cognitive concentration. Many applications, one underlying mind, correlated judgments. Her framing treats it as a dependency problem, solvable by diversifying. The Cornell number says the harder half out loud: diversifying the vendor does not buy you independence back.

### Nineteen seventy

American farmers had dozens of seed brands to choose from. Roughly **90 percent** of the hybrid corn planted carried the same Texas male sterile cytoplasm, because it made hybrid seed cheaper to produce. Southern corn leaf blight found that one shared trait and took around **15 percent** of the corn belt's crop in a single season.

The fields looked diverse. The seed was not.

### Why this matters for your business

Two questions belong in your next AI review, and neither is about accuracy. First: where do we assume two systems are checking each other when they share a training lineage? Credit decisions, fraud flags, CV screening, supplier risk, content moderation. Second: is our fallback a different model, or a different invoice?

And a warning about the comfort of human oversight. A reviewer who sees three systems agree does not experience three independent judgments. They experience consensus, which is the most persuasive form a correlated error can take.

Your second vendor is certainly a second contract. Whether it is a second opinion is an empirical question, and almost nobody is measuring it.

---ITALIAN---

### TL;DR

Le aziende comprano AI come comprano tutto il resto: si sceglie il fornitore migliore e se ne tiene un secondo per sicurezza. Con i modelli quella logica si rompe in silenzio. Una ricerca della Cornell mostra che modelli di fornitori e architetture diverse tendono a sbagliare sulle stesse cose, e che piu due modelli sono accurati, piu i loro errori coincidono. Uno studio su quattro milioni di candidature mostra l'effetto su chi sta dall'altra parte. Il rischio che nessuno quota non e l'accuratezza. E l'accordo.

---

Venti aziende. Venti modelli diversi, ognuno estratto a caso da un fornitore diverso. Circa un candidato su cinque restava scartato da tutti e venti.

Il risultato sta in un paper della Cornell del giugno 2025 e non l'ho ancora sentito citare in una sola riunione aziendale sull'AI.

### L'assunzione che nessuno scrive

Ogni modello di rischio in azienda gira sull'indipendenza. Due revisori intercettano piu di uno. Due fornitori sopravvivono a quello che uno solo non supera. Due opinioni valgono piu di una opinione ascoltata due volte. Non lo scriviamo mai, ed e precisamente per questo che non lo verifichiamo mai.

A giugno 2026 un gruppo di Stanford e Northeastern ha pubblicato l'audit piu ampio che conosca sugli algoritmi di selezione: **4.197.168 candidature** di 3.372.132 persone, 1.746 posizioni, 156 datori di lavoro, tutte filtrate dagli algoritmi di un solo fornitore tra dicembre 2018 e dicembre 2022. Circa il **4 per cento di chi si era candidato a dieci posizioni risultava scartato da tutte e dieci**. Con decisioni indipendenti quel numero dovrebbe crollare man mano che si allarga il tiro. Non crolla. Per avere una probabilita quasi certa che almeno un essere umano apra il tuo fascicolo servono **venticinque candidature, non dieci**.

La correzione ovvia e distribuire il lavoro su piu fornitori. Il gruppo della Cornell ha messo alla prova quell'assunzione su 420 valutazioni di modelli di piu di una dozzina di fornitori. Quando due modelli sbagliano entrambi, concordano sulla risposta sbagliata circa il **60 per cento** delle volte su un benchmark, contro una baseline casuale del 33 per cento. Su un altro, 42,3 per cento contro 12,7. Quasi ogni coppia del campione sta sopra la propria baseline.

> Logo diverso. Stesso punto cieco.

### La frase che dovrebbe preoccupare chi fa acquisti

Nelle tabelle di regressione c'e la parte che cambia il modo di comprare: **piu due modelli sono accurati, piu i loro errori sono correlati.** Scegli il modello migliore in classifica, come fanno tutti, e ti sposti verso la zona della distribuzione dove gli errori si sovrappongono di piu. Ogni acquirente ottimizza correttamente la propria decisione, e il sistema diventa piu fragile a ogni scelta razionale. Nelle schede di valutazione fornitori quella colonna non esiste.

---

### La stessa forma, vista dalla sedia del cliente

Il settore ha iniziato a notare il sintomo senza nominare la causa. Un documento della Cloud Security Alliance del 19 giugno 2026 riporta che il **91 per cento** dei dirigenti non ha visibilita completa sulle proprie dipendenze AI, il **71 per cento** considera difficile cambiare fornitore principale di modelli e l'**81 per cento** si aspetta un impatto grave o critico da sette giorni di fermo di un singolo fornitore. I giorni con disservizi rilevanti sono passati da 6 nel primo trimestre 2025 a 51 nel primo trimestre 2026.

Il 6 ottobre 2026 una dirigente IT di Citi gli ha dato un nome decente su Forbes: concentrazione cognitiva. Molte applicazioni, una sola mente sotto, giudizi correlati. La sua lettura la tratta come un problema di dipendenza, risolvibile diversificando. Il numero della Cornell dice ad alta voce la meta piu scomoda: diversificare il fornitore non ti restituisce l'indipendenza.

### Millenovecentosettanta

Gli agricoltori americani avevano decine di marche di sementi tra cui scegliere. Circa il **90 per cento** del mais ibrido piantato portava lo stesso citoplasma Texas male sterile, perche rendeva la produzione di seme ibrido piu economica. L'elmintosporiosi del mais ha trovato quell'unico tratto condiviso e si e portata via circa il **15 per cento** del raccolto della corn belt in una sola stagione.

I campi sembravano diversi. Il seme no.

### Perche questo conta per il tuo business

Due domande meritano posto nella prossima revisione AI, e nessuna riguarda l'accuratezza. La prima: dove stiamo dando per scontato che due sistemi si controllino a vicenda, mentre condividono la stessa discendenza di addestramento? Decisioni di credito, segnalazioni antifrode, screening dei curriculum, rischio fornitore, moderazione dei contenuti. La seconda: il nostro piano B e un modello diverso o una fattura diversa?

E un avvertimento sul conforto della supervisione umana. Chi rivede e vede tre sistemi concordare non sta vivendo tre giudizi indipendenti. Sta vivendo un consenso, che e la forma piu convincente che un errore correlato possa assumere.

Il tuo secondo fornitore e sicuramente un secondo contratto. Che sia anche un secondo parere e una questione empirica, e quasi nessuno la sta misurando.
