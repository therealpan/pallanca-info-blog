---
title: "Same Score. Forty Times the Bill."
titleIt: "Stesso punteggio. Quaranta volte il conto."
slug: same-score-forty-times-the-bill
date: "2026-10-20"
topic: "AI Strategy"
cardImage: "/images/blog/cards/same-score-forty-times-the-bill.webp"
excerpt: "Three papers from 2026 agree: the harness barely moves the score and moves the token bill by up to forty times. Series 4 of 5: The Harness."
excerptIt: "Tre paper del 2026 concordano: la harness sposta poco il punteggio e sposta il conto dei token fino a quaranta volte. Serie 4 di 5: La Harness."
---

*Series **The Harness** · 4 of 5*

### TL;DR

When this series started, the argument for the harness was about capability: same model, different body, sixteen points of difference. Three studies published between June and September 2026 say the gap has moved. Pass rates between harnesses now sit within zero to eight points, while the cost of reaching them varies by up to forty times. Gartner has already priced the consequence at more than fivefold per agentic workflow through 2028. Cornwall faced the same measurement problem in 1811 and fixed it with one published number.

---

Fifteen months ago the case for the harness was a capability case. Same weights, two different bodies, sixteen points apart on a coding benchmark. That was post one of this series and it held up.

Three papers published between June and September 2026 say that is no longer the interesting part.

---

### The scaffold barely moves the score now

In June, Naman Vats and Oleg Golev at Sentient Labs ran **300 trials**: two models, Qwen 3.6 Plus and MiniMax M2.5, across three open-source harnesses, Goose, OpenCode and OpenHands-SDK, on a fifty-task stratified subset of Terminal-Bench Pro.

Pass rates clustered between **38 and 50 percent**. Paired differences between harnesses on the same model: **zero to eight points**.

Then they counted tokens.

> Cost per solved task ran from about 28.000 tokens to about 1,55 million. A 40x to 55x spread, for the same work, at the same success rate.

OpenCode produced roughly ten times more no-action turns than Goose. Idle loops. The agent thinking about thinking, metered.

Two models and fifty tasks is a small study, and open-source harnesses are not what most large companies actually run. Take the magnitude, not the decimal. The magnitude is the whole story.

---

### The bill is an architecture problem

A July paper on enterprise orchestration held the task fixed across six models and varied only the harness. Tokens per task fell **38 percent**, cost per task **41 percent**, median latency **44 percent**, with quality flat.

The authors give the failure mode a name: **token maxing**. Quality bought through steadily growing token intensity with falling marginal returns, masked by falling per-token prices and visible only in the invoice.

Late September, NVIDIA published SoL-Pi, a system that searches for better harnesses automatically. 152 directions, 535 executable environments, more than 3.000 runs. The efficient configuration used **49 percent fewer tokens** and kept **93,7 percent** of the score.

Sit with that. One of the largest hardware companies on earth spent thousands of compute runs optimising the body, not the brain.

---

### Gartner has already priced it

On 17 August 2026 Gartner predicted that inference cost per agentic workflow will rise **more than fivefold through 2028**. Their analyst Will Sommer described it as better unit economics escalating the overall cost of AI without a clear pathway to commensurate value.

Per-token prices fall. Bills rise. Both true. The harness is where the two meet.

---

### Cornwall solved this in 1811

Cornish mine engines burned coal to pump water, and nobody could compare them honestly, because horsepower says nothing about fuel. From 1811 a monthly report began publishing each enginès **duty**: millions of pounds of water lifted one foot per bushel of coal. Not power. Work per unit of fuel.

Average duty in Cornwall went from roughly **twenty millions** in the 1810s to over **eighty** by the late 1820s. The engines did not receive new physics. They received a public number, monthly, with everyonès name on it.

We still rank agents by pass rate the way Cornwall once ranked engines by horsepower. Some leaderboards, Artificial Analysis among them, now publish cost and tokens per task next to the score. The instrument exists. It is not yet the unit people quote.

---

### Why this matters for your business

If you are picking an agent platform on benchmark score, you are picking on the metric with a zero to eight point spread and ignoring the one with a forty times spread.

Ask your vendor for tokens per completed task, not per call. Ask what share of turns take no action at all. Then run the pilot on your own work and read the invoice, not the leaderboard.

The brain is rented. The body is what you are billed for.

---ITALIAN---

### TL;DR

Quando questa serie è partita, l'argomento sulla harness era di capacità: stesso modello, corpo diverso, sedici punti di differenza. Tre studi usciti tra giugno e settembre 2026 dicono che il divario si è spostato. Tra harness diverse i tassi di successo stanno dentro zero-otto punti, mentre il costo per arrivarci varia fino a quaranta volte. Gartner ha già messo un prezzo alla conseguenza: oltre cinque volte per workflow agentico entro il 2028. La Cornovaglia ha avuto lo stesso problema di misura nel 1811 e lo ha risolto con un numero pubblicato.

---

Quindici mesi fa l'argomento sulla harness era un argomento di capacità. Stessi pesi, due corpi diversi, sedici punti di distanza su un benchmark di coding. Era il primo post di questa serie e regge ancora.

Tre paper usciti tra giugno e settembre 2026 dicono che non è più quella la parte interessante.

---

### Lo scaffold ormai sposta poco il punteggio

A giugno Naman Vats e Oleg Golev di Sentient Labs hanno condotto **300 prove**: due modelli, Qwen 3.6 Plus e MiniMax M2.5, su tre harness open source, Goose, OpenCode e OpenHands-SDK, con un sottoinsieme stratificato di cinquanta task da Terminal-Bench Pro.

I tassi di successo si addensano tra il **38 e il 50 per cento**. Le differenze tra harness a parità di modello: **da zero a otto punti**.

Poi hanno contato i token.

> Il costo per task risolto va da circa 28.000 token a circa 1,55 milioni. Uno scarto da 40 a 55 volte, per lo stesso lavoro, con lo stesso tasso di successo.

OpenCode genera circa dieci volte più turni a vuoto rispetto a Goose. Cicli morti. L'agente che pensa di pensare, a contatore acceso.

Due modelli e cinquanta task sono uno studio piccolo, e le harness open source non sono quelle che girano davvero nelle grandi aziende. Prendete l'ordine di grandezza, non il decimale. L'ordine di grandezza è tutta la storia.

---

### Il conto è un problema di architettura

Un paper di luglio sull'orchestrazione enterprise ha tenuto fermo il task su sei modelli variando solo la harness. Token per task giù del **38 per cento**, costo per task del **41**, latenza mediana del **44**, qualità invariata.

Gli autori danno un nome al fallimento: **token maxing**. Qualità comprata alzando di continuo l'intensità di token, con rendimenti marginali calanti, mascherata dai prezzi per token che scendono e visibile solo in fattura.

A fine settembre NVIDIA ha pubblicato SoL-Pi, un sistema che cerca harness migliori in automatico. 152 direzioni, 535 ambienti eseguibili, oltre 3.000 run. La configurazione efficiente usa il **49 per cento di token in meno** e conserva il **93,7 per cento** del punteggio.

Fermatevi un attimo su questo. Una delle più grandi aziende hardware del pianeta ha bruciato migliaia di run di calcolo per ottimizzare il corpo, non il cervello.

---

### Gartner ha già fatto il prezzo

Il 17 agosto 2026 Gartner ha previsto che il costo di inferenza per workflow agentico crescerà **di oltre cinque volte entro il 2028**. Il loro analista Will Sommer lo ha descritto così: economie unitarie migliori che fanno salire il costo complessivo dell'AI senza un percorso chiaro verso un valore proporzionato.

I prezzi per token scendono. Le bollette salgono. Vero entrambe le cose. La harness è il punto in cui si incontrano.

---

### La Cornovaglia lo aveva risolto nel 1811

Le macchine delle miniere di Cornovaglia bruciavano carbone per pompare acqua, e nessuno riusciva a confrontarle onestamente, perché i cavalli vapore non dicono niente sul combustibile. Dal 1811 un rapporto mensile iniziò a pubblicare la **duty** di ogni macchina: milioni di libbre d'acqua sollevate di un piede per ogni staio di carbone. Non la potenza. Il lavoro per unità di combustibile.

La duty media in Cornovaglia passò da circa **venti milioni** negli anni Dieci a oltre **ottanta** alla fine degli anni Venti. Le macchine non ricevettero una fisica nuova. Ricevettero un numero pubblico, ogni mese, con il nome di tutti sopra.

Continuiamo a classificare gli agent per tasso di successo come la Cornovaglia classificava le macchine per cavalli vapore. Alcune classifiche, tra cui Artificial Analysis, ormai pubblicano costo e token per task accanto al punteggio. Lo strumento esiste. Non è ancora l'unità che tutti citano.

---

### Perché conta per la vostra azienda

Se scegliete una piattaforma agentica sul punteggio di benchmark, state scegliendo sulla metrica che varia di zero-otto punti ignorando quella che varia di quaranta volte.

Chiedete al fornitore i token per task completato, non per chiamata. Chiedete quale quota di turni non produce nessuna azione. Poi fate il pilota sui vostri task veri e leggete la fattura, non la classifica.

Il cervello è a noleggio. Il corpo è quello che vi fatturano.
