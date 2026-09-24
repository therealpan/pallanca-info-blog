---
title: "Eight Cents for a Thousand Decisions"
titleIt: "Otto centesimi per mille decisioni"
slug: eight-cents-thousand-decisions
date: "2026-09-24"
topic: "Enterprise AI"
cardImage: "/images/blog/cards/eight-cents-thousand-decisions.webp"
excerpt: "A model shipped on 19 September that answers only with a value and a probability. The speed is not the story. The number attached to it is."
excerptIt: "Il 19 settembre esce un modello che risponde solo con un valore e una probabilita. La notizia non e la velocita. E il numero che ci sta attaccato."
---

### TL;DR

On 19 September a startup released a model that will not write you a sentence. You ask a typed question, it returns a value and a probability, and its own benchmark claims up to 194 times faster and 445 times cheaper than a frontier model. The speed is the boring part. The interesting part is that the answer arrives with a number saying how much to trust it, which is the first thing in three years of enterprise AI you can actually test on your own data.

---

On 19 September, TypeSafe AI released a model that will not write you a paragraph. Ask it something and it answers with a value and a probability. Nothing else. No prose, no explanation, no apology.

The company calls it a decision model. Its founder, Diogo Almeida, worked on ChatGPT's training at OpenAI, so this is not someone who missed the language era. He built its opposite on purpose.

### What actually shipped

Three question types. **Choice** picks one option from a set and returns the distribution across the rest. **Score** places an input on an ordered scale. **Noul** answers a yes or no proposition with a probability between zero and one. You give the model a state, you ask several questions about that state in parallel, and your own code decides what happens next.

TypeSafe's benchmark reports **0.114 seconds and $0.000081 per call**, against 8.566 seconds and $0.013880 for a frontier model on the same workflow. Roughly eight cents for a thousand decisions. Input costs $0.042 per million tokens. Output is free, because there is no output to speak of.

> A frontier model hands you a confident paragraph. A calibrated model hands you a number and tells you how much to trust it.

---

### The interesting number is not 194x

Speed and price are the headline, and they are the least surprising part of the story. A model that emits one token does less work than a model that emits four hundred. That is arithmetic, not innovation.

The part worth your attention is the probability. TypeSafe trained the model with something it calls Reinforcement Learning for Calibrated Decisions. **Calibration means that when the model says 70%, it is right about 70 percent of the time.** Not confident. Correct about its own confidence.

Text output never gave anyone that. A wrong paragraph and a right paragraph look identical: both fluent, both well formatted, both fine in a demo. A calibrated number behaves differently. You can measure it per segment, set a threshold, and route on it. Above 0.9 it goes straight through. Below 0.6 a human looks. In between you log everything and review the cost of being wrong once a month.

Meteorology worked this out in 1950, when Glenn Brier published a score for grading probabilistic forecasts. Weather forecasters have been marked on their humility for seventy six years. Software has not.

---

### What you cannot buy yet

Now the cold water. The benchmark is vendor run, on workflows the vendor picked. There are no published weights and no self hosting, only a hosted API behind a waitlist. The context window stops at 64,000 tokens. The model is weak at arithmetic, counting, date comparisons and anything adversarial, it cannot explain its own answer, and TypeSafe says plainly that it is not a security boundary.

So calibration is a claim until you measure it on your own labelled data. Which is, pleasingly, exactly what the model is asking you to do.

### Why this matters for your business

Most of what companies bought as AI in the last three years was language wrapped around a judgement call. The judgement was the valuable part. The language was the invoice.

If a category of cheap, typed, calibrated decisions holds up, the question you put to a vendor changes shape. Not "what can your model do", but: show me the calibration curve on my data, segment by segment, with the threshold you recommend and the review load it implies.

Ask it this quarter. The answer sorts the room faster than any demo.

Pan

---ITALIAN---

### TL;DR

Il 19 settembre una startup ha rilasciato un modello che non scrive nemmeno una frase. Gli fai una domanda tipizzata, lui restituisce un valore e una probabilita, e il suo benchmark dichiara fino a 194 volte piu veloce e 445 volte piu economico di un modello di frontiera. La velocita e la parte noiosa. La parte interessante e che la risposta arriva con un numero che dice quanto fidarsi, ed e la prima cosa in tre anni di AI aziendale che puoi verificare sui tuoi dati.

---

Il 19 settembre TypeSafe AI ha rilasciato un modello che non ti scrive un paragrafo. Gli chiedi qualcosa e risponde con un valore e una probabilita. Nient'altro. Niente prosa, niente spiegazioni, niente scuse.

L'azienda lo chiama modello di decisione. Il fondatore, Diogo Almeida, ha lavorato sull'addestramento di ChatGPT in OpenAI, quindi non parliamo di qualcuno che si e perso l'era del linguaggio. Ne ha costruito l'opposto di proposito.

### Cosa e uscito davvero

Tre tipi di domanda. **Choice** sceglie un'opzione da un insieme e restituisce la distribuzione sulle altre. **Score** colloca un input su una scala ordinata. **Noul** risponde a una proposizione vero o falso con una probabilita fra zero e uno. Tu passi uno stato, fai piu domande su quello stato in parallelo, e il tuo codice decide cosa succede dopo.

Il benchmark di TypeSafe riporta **0,114 secondi e 0,000081 dollari per chiamata**, contro 8,566 secondi e 0,013880 dollari di un modello di frontiera sullo stesso flusso. Circa otto centesimi per mille decisioni. L'input costa 0,042 dollari per milione di token. L'output e gratis, perche di output non ce n'e.

> Un modello di frontiera ti consegna un paragrafo sicuro di se. Un modello calibrato ti consegna un numero e ti dice quanto fidarti.

---

### Il numero interessante non e 194x

Velocita e prezzo fanno il titolo, e sono la parte meno sorprendente. Un modello che emette un token lavora meno di un modello che ne emette quattrocento. E aritmetica, non innovazione.

La parte che merita attenzione e la probabilita. TypeSafe ha addestrato il modello con quello che chiama Reinforcement Learning for Calibrated Decisions. **Calibrazione significa che quando il modello dice 70%, ha ragione circa il 70 per cento delle volte.** Non sicuro di se. Corretto sulla propria sicurezza.

L'output testuale non ha mai dato questo a nessuno. Un paragrafo sbagliato e un paragrafo giusto si somigliano: scorrevoli entrambi, ben formattati entrambi, entrambi accettabili in demo. Un numero calibrato si comporta diversamente. Lo misuri per segmento, ci metti una soglia, ci fai routing. Sopra 0,9 passa. Sotto 0,6 lo guarda una persona. In mezzo logghi tutto e ogni mese rivedi quanto costa sbagliare.

La meteorologia aveva risolto la questione nel 1950, quando Glenn Brier pubblico un punteggio per valutare le previsioni probabilistiche. I meteorologi vengono giudicati sulla loro umilta da settantasei anni. Il software no.

---

### Cosa non puoi ancora comprare

Adesso l'acqua fredda. Il benchmark lo ha fatto il fornitore, sui flussi scelti dal fornitore. Non ci sono pesi pubblicati e non c'e self hosting, solo un'API ospitata dietro lista d'attesa. La finestra di contesto si ferma a 64.000 token. Il modello e debole su aritmetica, conteggi, confronti fra date e su qualunque input avversariale, non sa spiegare la propria risposta, e TypeSafe dice chiaramente che non e un confine di sicurezza.

Quindi la calibrazione resta una dichiarazione finche non la misuri sui tuoi dati etichettati. Che poi e esattamente quello che il modello ti sta chiedendo di fare.

### Perche conta per la tua azienda

Gran parte di quello che le aziende hanno comprato come AI negli ultimi tre anni era linguaggio avvolto attorno a un giudizio. Il giudizio era la parte di valore. Il linguaggio era la fattura.

Se la categoria delle decisioni tipizzate, calibrate e a basso costo regge, cambia forma la domanda da fare a un fornitore. Non "cosa sa fare il vostro modello", ma: mostrami la curva di calibrazione sui miei dati, segmento per segmento, con la soglia che consigli e il carico di revisione che comporta.

Falla questo trimestre. La risposta divide la stanza piu in fretta di qualsiasi demo.

Pan
