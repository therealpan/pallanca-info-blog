---
title: "Half the Runs Were Never Graded. The Other Agent Looked Thirteen Points Better."
titleIt: "Metà delle esecuzioni non è stata valutata. L'altro agente sembrava migliore di tredici punti."
slug: half-the-runs-never-graded
date: "2026-11-04"
topic: "AI Strategy"
cardImage: "/images/blog/cards/half-the-runs-never-graded.webp"
excerpt: "A researcher audited two public agent leaderboards and found four errors in the measuring software. Half the runs were never graded."
excerptIt: "Un ricercatore ha controllato due classifiche pubbliche di agenti e ha trovato quattro errori nel software di misura. Metà delle esecuzioni non era valutata."
---

### TL;DR

On 3 November 2026 a researcher at Shandong University audited two public agent leaderboards and found four errors in the measuring software, not in the agents (arXiv 2611.04399). One board graded one agent in 98 percent of its episodes and its rival in 51 percent, counted the ungraded half as failures, and so produced a thirteen point gap that vanished when those episodes were graded. My view: the agent market is priced on numbers produced by code nobody audits, and the check that catches the worst of it is free. Before comparing two scores, ask how many runs were scored.

**Starting assumption:** HAL's maintainers reproduced all three issues reported to them and posted dated disclosures in about five weeks, so this is about unaudited instruments, not bad faith.
**Goal:** leave with four questions for your next model evaluation, three of which cost nothing to answer.

---

### What the audit found

The thirteen points made the title. They were the least interesting part.

**Cost was doubled.** A wrapper span and its child carried the same usage and the aggregator added both: exactly twice in 70 of 134 runs, and 36.5 percent above the real figure overall.

**The grader wrote in the agent's log.** The gold replay used for scoring was recorded as the agent's own actions in 68 percent of 2,334 archived records. In 58 of them the agent called no tool, yet the trace shows the full correct sequence.

**Re-grading moved the board.** An announced fix reversed 4 of 136 pairwise orderings. On another benchmark a file check misread four entries and their scores fell by 59 to 82 points, with no error shown. The command, as the paper puts it, "prints a number."

---

### Why the number survives anyway

Hubble launched in April 1990 with a mirror ground to the wrong shape. The rig that had certified it held a lens 1.3 mm out of position, so it confirmed the error it had introduced. Two other instruments in the same shop showed the aberration. Both were set aside because the first was labelled certified and they were not, a word the board found had never been defined anywhere.

> An instrument becomes authoritative because it is the one everybody quotes. After that, disagreeing with it looks like a defect in the challenger.

---

### Why this matters, and what to ask

Menlo Ventures put enterprise AI deployment spend at about 177 billion dollars by September 2026, with 86 percent of model API spend on two vendors chosen for capability over price. Capability, in practice, is a number off a leaderboard.

In April 2026 the EvalEval Coalition costed one HAL-style run at roughly $40,000, rising to about $320,000 with eight reruns per cell. Their line is that whoever pays for the evaluation writes the leaderboard. Fair, and here is what they left unsaid: none of these four errors needed a rerun. Three sat in the published artifacts, found by one person.

Four questions, then. What fraction of the runs was graded? Is cost taken from root spans, and what is the all-span to root ratio? Is every action tagged as agent, user simulator or grader? Which evaluator version produced this score, and where is the diff from the last re-grade?

The graded fraction is one column, and it decides whether you are reading a measurement or a number that prints.

---ITALIAN---

### TL;DR

Il 3 novembre 2026 un ricercatore della Shandong University ha controllato due classifiche pubbliche di agenti e ha trovato quattro errori nel software di misura, non negli agenti (arXiv 2611.04399). Una classifica valutava un agente nel 98 per cento delle esecuzioni e il rivale nel 51, contava come fallimenti la metà non valutata e produceva un divario di tredici punti che svanisce appena quelle esecuzioni vengono valutate. La mia tesi: il mercato degli agenti si prezza su numeri prodotti da codice che nessuno controlla, e il controllo che intercetta il caso peggiore non costa niente. Prima di confrontare due punteggi, chiedi quante esecuzioni sono state valutate.

**Assunto di partenza:** i manutentori di HAL hanno riprodotto tutti e tre i problemi segnalati e pubblicato avvisi datati in circa cinque settimane, quindi la storia riguarda strumenti non auditati, non la malafede.
**Obiettivo:** uscire con quattro domande per la prossima valutazione di un modello, tre delle quali gratis.

---

### Cosa ha trovato l'audit

I tredici punti sono finiti nel titolo. Erano la parte meno interessante.

**Il costo era raddoppiato.** Una span contenitore e la sua figlia riportavano lo stesso consumo e l'aggregatore sommava entrambe: esattamente il doppio in 70 esecuzioni su 134, e il 36,5 per cento sopra la cifra reale nel complesso.

**Il valutatore scriveva nel log dell'agente.** La sequenza corretta usata per il punteggio risultava registrata come azione dell'agente nel 68 per cento di 2.334 record archiviati. In 58 di questi l'agente non ha chiamato nessuno strumento, e la traccia mostra la sequenza giusta per intero.

**Rivalutare ha spostato la classifica.** Una correzione annunciata ha invertito 4 confronti su 136. Su un altro benchmark un controllo sui file ne ha letti male quattro e i punteggi sono scesi da 59 a 82 punti, senza nessun errore a schermo. Il comando, scrive l'autore, "stampa un numero".

---

### Perché il numero resta in piedi comunque

Hubble è partito nell'aprile 1990 con uno specchio lavorato nella forma sbagliata. L'apparato che lo aveva certificato teneva una lente fuori posizione di 1,3 mm, quindi confermava l'errore che aveva introdotto. Altri due strumenti mostravano l'aberrazione e sono stati messi da parte entrambi, perché il primo era etichettato certificato e loro no: una parola che la commissione d'inchiesta ha scoperto non essere mai stata definita da nessuna parte.

> Uno strumento diventa autorevole perché è quello che citano tutti. Da quel momento, non essere d'accordo con lui sembra un difetto di chi lo contesta.

---

### Perché ti riguarda, e cosa chiedere

Menlo Ventures stima la spesa enterprise in AI a circa 177 miliardi di dollari a settembre 2026, con l'86 per cento della spesa in API su due soli fornitori, scelti per capacità e non per prezzo. La capacità, in pratica, è un numero preso da una classifica.

Ad aprile 2026 la EvalEval Coalition ha stimato una tornata in stile HAL intorno ai 40.000 dollari, e circa 320.000 con otto ripetizioni per cella. La loro frase è che la classifica la scrive chi paga la valutazione. Giusto, ed ecco quello che non hanno detto: nessuno di questi quattro errori richiedeva una ripetizione. Tre stavano negli artefatti già pubblicati, trovati da una persona sola.

Quattro domande, quindi. Quale frazione delle esecuzioni è stata valutata? Il costo è calcolato dalle span radice, e qual è il rapporto fra tutte le span e le radici? Ogni azione registrata è marcata come agente, simulatore utente o valutatore? Quale versione del valutatore ha prodotto il punteggio, e dov'è il confronto con la rivalutazione precedente?

La frazione valutata è una colonna sola, ed è quella che decide se stai leggendo una misura o un numero che si stampa.
