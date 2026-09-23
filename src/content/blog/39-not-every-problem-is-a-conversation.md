---
title: "Not Every Problem Is a Conversation"
titleIt: "Non tutti i problemi sono una conversazione"
slug: not-every-problem-is-a-conversation
date: "2026-09-23"
topic: "AI Architecture"
cardImage: "/images/blog/cards/not-every-problem-is-a-conversation.webp"
excerpt: "Ten thousand events a day, one question: which ones need action? The answer is rarely a chatbot. A map of the AI that estimates, recognises and decides."
excerptIt: "Diecimila eventi al giorno, una domanda: quali richiedono intervento? La risposta raramente è un chatbot. Mappa dell'AI che stima, riconosce e decide."
---

A company receives ten thousand events a day. Orders, quality-control photos, customer tickets, sensor readings. Somebody has to decide which ones need action, how fast, and what it costs to get it wrong. That is the problem. Not whether a model can describe those events in elegant prose.

Yet many of the offers I see start from the same place: plug a large language model into an interface and call it AI. It demos beautifully. It also answers a question nobody in operations asked.

### The temptation of the universal model

I understand why the LLM is the default. The demo takes an afternoon, the input can be messy, the output is easy to show a board. And modern LLMs are no longer just chatty: they can return JSON that follows a strict schema. OpenAI's own documentation on Structured Outputs is honest about the catch, though. The schema can be valid and the values inside it can still be wrong.

> A valid format is not a correct decision. It is a well-dressed guess.

---

### Two questions, not one

Most confusion comes from putting every term on the same axis. There are two separate questions. What does the system do: estimate, classify, detect anomalies, generate, optimise? And how does it process data: statistical model, trees, convolutional network, text encoder, state-space model, generative transformer, graph network?

"Machine learning versus AI" is a false fight (ML is the container, LLMs live inside it). The real comparison is between **methods chosen for the task** and **an LLM used as the starting point for everything**.

Take tabular data: churn, priority, the risk of an administrative error. Start with logistic regression or a plain rule as a baseline, then trees and boosting, then neural networks if the evidence justifies them. Grinsztajn, Oyallon and Varoquaux found tree-based models highly competitive on medium tabular datasets. A broader NeurIPS 2023 study by McElfresh and colleagues showed there is **no universal winner**. The lesson is not "trees win". The lesson is: run the comparison.

Images want vision models that read local patterns. Event streams want models that respect order: statistical baselines, recurrent models, state-space models like Mamba, which processes sequences with linear scaling in length. Architectural properties, mind you, not a guaranteed result on your plant's data. A text encoder can route a ticket without writing a paragraph about it.

---

### Where the generative model belongs

None of this is anti-LLM. Explanations, open requests, synthesis across messy material, a human exploring a flagged case: that is home ground for a generative model. Sometimes the LLM is also the best tool for a narrow task. The test decides, not the taxonomy.

What enters a company is rarely one model. It is a chain: **data, evaluation, rules and thresholds, review or action, monitoring**. Different models at different links. Code that says what happens when a field is missing, a probability is uncertain, or an error is expensive. The market already has a name for this, Decision Intelligence, and I am not claiming to have invented it. The difference is in how you design and verify the concrete decision system.

### Why this matters for your business

Before choosing a model, fix a baseline, human or software. Measure by segment: precision, recall, false positives, false negatives, calibration if you use probabilities, cost per case and review load. Agree with the business which error hurts most. Then offline test, pilot inside the real flow, and monitor after. A probability is useful only if it is calibrated on the cases where it will be used, and deep classifiers are known to be confidently wrong outside the data they saw.

The events keep arriving, whatever model is fashionable this quarter. The question worth asking a vendor, any vendor, is simple: which decision improves, against which baseline, with which residual errors, and who owns them? The architecture follows the answer.

Pan

---ITALIAN---

Un'azienda riceve diecimila eventi al giorno. Ordini, foto del controllo qualità, ticket dei clienti, letture dei sensori. Qualcuno deve decidere quali richiedono intervento, entro quanto tempo, e quanto costa sbagliare. Il problema è questo. Non se un modello sappia descrivere quegli eventi con una bella prosa.

Eppure molte delle offerte che vedo partono dallo stesso punto: si attacca un LLM a un'interfaccia e lo si chiama AI. In demo funziona benissimo. Risponde anche a una domanda che in produzione nessuno aveva fatto.

### La tentazione del modello universale

Capisco perché l'LLM sia la scelta predefinita. La demo si fa in un pomeriggio, l'input può essere disordinato, il risultato si mostra facilmente a un consiglio di amministrazione. E gli LLM di oggi non si limitano a chiacchierare: possono restituire JSON che rispetta uno schema rigido. La documentazione di OpenAI sugli Structured Outputs è però onesta sul punto debole. Lo schema può essere valido e i valori dentro possono essere sbagliati lo stesso.

> Un formato valido non è una decisione corretta. È un'ipotesi vestita bene.

---

### Due domande, non una

Gran parte della confusione nasce dal mettere tutti i termini sullo stesso asse. Le domande sono due. Che cosa fa il sistema: stima, classifica, rileva anomalie, genera, ottimizza? E come elabora i dati: modello statistico, alberi, rete convoluzionale, encoder di testo, modello a stati, transformer generativo, rete su grafi?

"Machine learning contro AI" è una lite finta (il ML è il contenitore, gli LLM ci stanno dentro). Il confronto vero è tra **metodi scelti per il compito** e **un LLM usato come punto di partenza per qualsiasi cosa**.

Prendiamo i dati tabellari: abbandono dei clienti, priorità, rischio di errore amministrativo. Si parte da una regressione logistica o da una regola semplice come baseline, poi alberi e boosting, poi reti neurali se le prove lo giustificano. Grinsztajn, Oyallon e Varoquaux hanno trovato modelli ad albero molto competitivi su dataset tabellari di medie dimensioni. Uno studio più ampio presentato a NeurIPS 2023 da McElfresh e colleghi mostra che **non esiste un vincitore universale**. La lezione non è "vincono gli alberi". La lezione è: fate il confronto.

Le immagini chiedono modelli visivi che leggano pattern locali. I flussi di eventi chiedono modelli che rispettino l'ordine: baseline statistiche, modelli ricorrenti, modelli a stati come Mamba, che elabora sequenze con costo lineare rispetto alla lunghezza. Proprietà dell'architettura, attenzione, non un risultato garantito sui dati del vostro impianto. Un encoder di testo può smistare un ticket senza scriverci sopra un paragrafo.

---

### Dove il generativo è di casa

Niente di tutto questo è contro gli LLM. Spiegazioni, richieste aperte, sintesi di materiale eterogeneo, una persona che esplora un caso segnalato: lì il modello generativo gioca in casa. A volte l'LLM è anche lo strumento migliore per un compito circoscritto. Decide la verifica, non la tassonomia.

Quello che entra in azienda raramente è un modello solo. È una catena: **dati, valutazione, regole e soglie, revisione o azione, monitoraggio**. Modelli diversi a ogni anello. Codice che stabilisce cosa succede se manca un campo, se una probabilità è incerta, se l'errore costa caro. Il mercato ha già un nome per questo, Decision Intelligence, e non ho alcuna intenzione di rivendicarne l'invenzione. La differenza sta nel modo in cui si progetta e si verifica il sistema decisionale concreto.

### Perché conta per la vostra azienda

Prima di scegliere un modello, fissate una baseline, umana o software. Misurate per segmento: precision, recall, falsi positivi, falsi negativi, calibrazione se usate probabilità, costo per caso e carico di revisione. Concordate con il business quale errore fa più male. Poi test offline, pilot dentro il flusso reale, monitoraggio dopo. Una probabilità serve solo se è calibrata sui casi in cui verrà usata, e i classificatori profondi sono noti per sbagliare con grande sicurezza fuori dai dati che hanno visto.

Gli eventi continuano ad arrivare, qualunque sia il modello di moda questo trimestre. La domanda da fare a un fornitore, a qualsiasi fornitore, è semplice: quale decisione migliora, rispetto a quale baseline, con quali errori residui, e chi ne risponde? L'architettura segue la risposta.

Pan
