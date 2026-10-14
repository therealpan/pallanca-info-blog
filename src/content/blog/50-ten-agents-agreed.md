---
title: "Ten Agents Agreed. The Right Answer Was Already in the Room."
titleIt: "Dieci agenti d'accordo. La risposta giusta era gia' nella stanza."
slug: ten-agents-agreed
date: "2026-10-14"
topic: "Enterprise AI"
cardImage: "/images/blog/cards/_placeholder.webp"
excerpt: "Multi-agent debate is sold as quality control. New research shows the vote throws away correct answers the agents had already produced."
excerptIt: "Il dibattito fra agenti viene venduto come controllo qualita'. Nuovi studi mostrano che il voto butta via risposte corrette gia' prodotte."
---

### TL;DR

Companies are starting to treat agreement between AI agents as proof that an answer is good. Two studies published in 2026 say the opposite. When ten agents debate, they copy each other, and the majority vote discards correct answers the group had already produced. One model caved to a wrong unanimous majority nine times out of ten. Worse, how often an agent caves depends on how the prompt is built, not on how capable the model is. If your audit log says "all agents agreed", you have recorded conformity and filed it as diligence.

---

On the first of October, Ethan Mollick wrote a sentence that deserves more attention than it got:

> "But I no longer think organizing agents is the hard part."

He is right. Frameworks got good, orchestration got cheap, agents hand work to each other without anyone planning it. Organizing them was never going to stay difficult.

Believing them when they agree is the hard part. And almost nobody is measuring that.

---

### The vote threw away the answer

In April 2026 Blaz Bertalanic and Carolina Fortuna ran a controlled study on multi-agent debate, published at CAIS 2026. Ten identical agents, three rounds of debate, two hard benchmarks, three models in the 7 to 8 billion parameter range. Nothing exotic. The shape most enterprise orchestrations actually have.

Three numbers from that paper:

Agents adopted the majority answer at rates up to **85,5%**. Peer reasoning destabilized answers that had been correct before the exchange, up to **70,0%** of the time. And the gap between what the majority vote produced and the best answer already sitting in the pool reached **32,3 percentage points**.

> The correct answer was generated. The protocol then voted it out of existence.

The cost side is almost funny. Debate burned 2,1 to 3,4 times the tokens of a single agent correcting itself, up to 28.631 tokens on one problem, for accuracy that was equal or worse.

---

### They did not change their mind, only their answer

A second paper, out of Delft and Sun Yat-sen in October, went looking inside the agents that caved. The setup is an Asch experiment for machines: one agent answers, three scripted peers assert something wrong and unanimous, the agent is asked again.

Llama-3.1-8B gave in **90%** of the time.

Then the researchers changed one thing. They hid the agent's own earlier answer from its context. Qwen3.5-4B's give-in rate went from **8% to 89%**.

Read that twice. Conformity moved by eighty-one points because of a template decision about what to keep in the context window. That is not a model property you can benchmark away. It is a property of your plumbing.

The same paper found that agents which publicly folded were still representing their original premise internally. They stopped saying it. They had not stopped computing it.

---

### Why this matters for your business

Two reasons, and the second is the one that will cost money.

First, if you use agent agreement as a quality gate, you have built a gate that opens on social pressure. The fix is not more agents. It is measuring the oracle gap: was the right answer in the pool before the vote? If yes, your aggregation is the defect, and an isolated agent checking its own work is the baseline you should have to beat.

Second, the audit trail. Italy published its second AI Act implementing law in the Gazzetta Ufficiale on 8 October 2026: unannounced inspections, fines up to 35 million euro or 7% of worldwide turnover, and Article 41, which voids employment decisions resting on automated processing alone. Across Europe you are now expected to document how a decision was reached.

So you will log it. And if the log reads "five agents, unanimous, approved", you have written down conformity and filed it as evidence of care. An inspector will not see diligence there. A lawyer will see a record of a system agreeing with itself, which is a worse position than having no record at all.

Log the dissent. Log the order in which the agents answered. Log whether they could see each other's previous answers, because that one choice moved conformity by eighty-one points.

Mollick asked whether we can organize agents. We can. The question he left on the table is the uncomfortable one: when a room full of agents agrees, what exactly have we learned?

---ITALIAN---

### TL;DR

Le aziende cominciano a trattare l'accordo fra agenti AI come prova che una risposta sia buona. Due studi del 2026 dicono il contrario. Quando dieci agenti discutono si copiano a vicenda, e il voto a maggioranza butta via risposte corrette che il gruppo aveva gia' prodotto. Un modello ha ceduto a una maggioranza unanime e sbagliata nove volte su dieci. Peggio: quanto cede dipende da come e' costruito il prompt, non da quanto e' capace il modello. Se il tuo log di audit dice "tutti gli agenti d'accordo", hai registrato conformismo e lo hai archiviato come diligenza.

---

Il primo ottobre Ethan Mollick ha scritto una frase che meritava piu' attenzione di quella che ha avuto:

> "But I no longer think organizing agents is the hard part."

Ha ragione. I framework sono maturati, orchestrare costa poco, gli agenti si passano il lavoro anche quando nessuno lo ha progettato. Organizzarli non sarebbe rimasto difficile a lungo.

La parte difficile e' credergli quando sono d'accordo. E quasi nessuno la sta misurando.

---

### Il voto ha buttato via la risposta

Ad aprile 2026 Blaz Bertalanic e Carolina Fortuna hanno pubblicato a CAIS 2026 uno studio controllato sul dibattito fra agenti. Dieci agenti identici, tre round, due benchmark difficili, tre modelli fra i 7 e gli 8 miliardi di parametri. Niente di esotico: la forma che hanno davvero molte orchestrazioni aziendali.

Tre numeri.

Gli agenti hanno adottato la risposta della maggioranza fino all'**85,5%** delle volte. Le argomentazioni dei pari hanno destabilizzato risposte che prima dello scambio erano corrette, fino al **70,0%** dei casi. E il divario fra quello che ha prodotto il voto a maggioranza e la migliore risposta gia' presente nel gruppo ha raggiunto **32,3 punti percentuali**.

> La risposta corretta era stata generata. Poi il protocollo l'ha votata via.

Il lato costi e' quasi comico. Il dibattito ha consumato da 2,1 a 3,4 volte i token di un singolo agente che si corregge da solo, fino a 28.631 token su un problema, per un'accuratezza pari o peggiore.

---

### Non hanno cambiato idea, solo risposta

Un secondo lavoro, uscito a ottobre fra Delft e Sun Yat-sen, e' andato a guardare dentro gli agenti che avevano ceduto. L'impianto e' un esperimento di Asch per macchine: un agente risponde, tre pari scriptati affermano una cosa sbagliata e unanime, all'agente si richiede la risposta.

Llama-3.1-8B ha ceduto nel **90%** dei casi.

Poi i ricercatori hanno cambiato una cosa sola: hanno nascosto all'agente la sua risposta precedente. Il tasso di cedimento di Qwen3.5-4B e' passato dall'**8% all'89%**.

Da rileggere. Il conformismo si e' spostato di ottantuno punti per una decisione di template su cosa tenere nella finestra di contesto. Non e' una proprieta' del modello che puoi risolvere con un benchmark migliore. E' una proprieta' della tua idraulica.

Lo stesso studio ha trovato che gli agenti che si erano piegati in pubblico continuavano a rappresentare la premessa originale al loro interno. Avevano smesso di dirla. Non di calcolarla.

---

### Perche' conta per il tuo business

Due motivi, e il secondo e' quello che costa.

Primo: se usi l'accordo fra agenti come controllo qualita', hai costruito un cancello che si apre sulla pressione sociale. La soluzione non sono piu' agenti. E' misurare il divario con l'oracolo: la risposta giusta era nel gruppo prima del voto? Se si', il difetto e' nell'aggregazione, e il riferimento da battere e' un singolo agente che rilegge il proprio lavoro.

Secondo: la tracciabilita'. L'Italia ha pubblicato in Gazzetta Ufficiale l'8 ottobre 2026 la seconda legge di attuazione dell'AI Act: ispezioni senza preavviso, sanzioni fino a 35 milioni di euro o al 7% del fatturato mondiale, e l'articolo 41, che rende nulle le decisioni sul rapporto di lavoro basate sul solo trattamento automatizzato. In Europa ti si chiede di documentare come si e' arrivati a una decisione.

Quindi lo scriverai nel log. E se il log dice "cinque agenti, unanimi, approvato", hai messo per iscritto il conformismo e lo hai archiviato come prova di diligenza. Un ispettore non ci leggera' diligenza. Un avvocato ci leggera' il verbale di un sistema che si da' ragione da solo, che e' una posizione peggiore del non avere alcun verbale.

Registra il dissenso. Registra l'ordine in cui gli agenti hanno risposto. Registra se potevano vedere le risposte precedenti, perche' quella singola scelta ha spostato il conformismo di ottantuno punti.

Mollick si e' chiesto se sappiamo organizzare gli agenti. Sappiamo. La domanda che ha lasciato sul tavolo e' quella scomoda: quando una stanza piena di agenti e' d'accordo, che cosa abbiamo imparato esattamente?
