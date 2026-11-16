---
title: "Eighteen Detectors. The Best One Catches Fourteen in a Hundred."
titleIt: "Diciotto rilevatori. Il migliore ne prende quattordici su cento."
slug: eighteen-detectors-fourteen-in-a-hundred
date: "2026-11-16"
topic: "AI Ethics"
cardImage: "/images/blog/cards/eighteen-detectors-fourteen-in-a-hundred.webp"
excerpt: "Eighteen video detectors over 10,000 clips. The best flags 14.1% of fakes at a 1% false-positive rate, and five reposts take it down to chance."
excerptIt: "Diciotto rilevatori su 10.000 video. Il migliore segnala il 14,1% dei falsi con l'1% di falsi positivi, e cinque ricondivisioni lo portano al caso."
---

### TL;DR

- A benchmark posted on 11 November 2026 ran 18 AI-video detectors over 10.000 clips, roughly 70% manipulated, recompressed the way WhatsApp, TikTok, Instagram, X, WeChat and RedNote recompress anything that gets reposted.
- At a 1% false-positive rate, the best detector flags 14.1% of the fakes. The detector with the highest AUC, 0.693, flags 1.3%, so the two rankings disagree.
- One strong detector falls from 0.93 AUC to roughly coin-flip within five re-encodes, then stays there out to thirty. Sending a file to someone is the attack.
- Article 50(2) of the AI Act has required machine-readable marking since 2 August 2026, qualified by "as far as this is technically feasible" and by "the generally acknowledged state of the art". Research keeps pushing that state of the art toward the exemption.

### Assumptions

1. The video numbers come from a preprint, arXiv:2611.14941, by a group at Arizona State University with one co-author at NYU. They are the authors' own measurements on their own benchmark, not peer-reviewed and not replicated. I treat them as one careful measurement rather than a settled fact.
2. The watermark numbers come from a second preprint, arXiv:2607.16010 of 17 July 2026, which tested open implementations of KGW, Unigram and SynthID-Text through the MarkLLM toolkit rather than Google's production system. Weaker evidence, used as indicative.
3. The legal reading is mine. The Article 50 wording and the Code of Practice dates are documented, but the argument about where the escape clause leads is an argument.

### Goal

Three things get sold as one product: marking synthetic content when it is born, detecting it afterwards, and the legal duty to do either. In Europe all three are now live, and only the third has a date on it.

---

### The number nobody prints

The benchmark covers 18 detectors, 11 classic and 7 built on vision-language models, over 10.000 videos assembled from HowTo100M, OpenVid-HD and a crawl of socially fragile footage that makes up 53% of the set. Generators include Wan2.2, Hunyuan-1.5 and LTX-2, plus character replacement and relighting passes.

On the headline metrics the field looks mediocre but workable. D3 tops the group at 0.693 AUC and 0.642 Macro F1.

Nobody deploys at the AUC. You deploy at a false-positive rate you can live with, because every false alarm is a real video publicly called fake. Fix that rate at 1% and D3 catches 1.3% of the fakes. WaveRep, which looks worse on the summary metric, catches 14.1%, and the ordering flips.

> AUC is the number in the press release. True positives at a survivable false-positive rate is the number that decides whether a review queue is worth staffing.

A buyer comparing vendors on accuracy gets a ranking with no relationship to the thing being bought.

---

### What five reposts do

WaveRep scores 0.93 AUC on the clean version of the benchmark. Within five re-encodes it sits near 0.5, and it stays flat out to thirty. Half is a coin.

The authors separate two causes, which matters. New generators and unfamiliar content already cost accuracy before anything is compressed: one vision-language detector slides from 0.74 AUC on an older benchmark to 0.63 on this one, untouched. Then platform recompression wipes out the low-level traces that artifact-based detectors read. D3 holds around 0.69 through every condition, which is the stability of a detector that was never reading those traces to begin with.

So the thing that destroys the evidence is the ordinary act of sharing. The authors conclude that "no current design is robust to all of them", listing generator shift, re-encoding, camera effects and fragile content.

---

### The clause that does the work

Article 50(2) has applied since 2 August 2026, extended to 2 December 2026 for systems already on the market. Mark the output in a machine-readable format, make it detectable as artificially generated, with solutions that are effective, interoperable, robust and reliable, "as far as this is technically feasible", taking into account "the generally acknowledged state of the art". The Transparency Code of Practice arrived on 10 June 2026, was found adequate by the Commission on 8 July and by the AI Board on 9 July, and the guidelines followed on 20 July. Measure 3.4 of that Code asks for an interoperability solution for detection mechanisms by 2 February 2027. The Code is voluntary.

Now put the second preprint next to it. A meaning-preserving paraphrase stripped the mark from 100% of the KGW texts, 100% of Unigram and 98.3% of SynthID-Text, counting only the texts the detectors had recognised in the first place, which they failed to do between 70% and 83% of the time on untouched watermarked output. The authors score no method above two of the five Daubert factors.

Every rigorous study of how marks survive strengthens the case that marking which holds up is not technically feasible, and technical feasibility is the condition the whole duty hangs on. The better the evidence, the lighter the obligation, and compliance drifts toward documenting the attempt.

---

### A century of studying a machine that never worked

On 8 October 2002 the National Research Council published its review of the polygraph. Weak scientific basis after nearly a century of study, accuracy too low for security screening, and a specific reason: a test tuned to produce few false alarms misses most real violators, while the screened population is almost entirely innocent. The committee added that the polygraph still extracts confessions, from its reputation rather than its accuracy. Stephen Fienberg put it plainly: "National security is too important to be left to such a blunt instrument."

Agencies kept using it for decades afterwards. That is the part worth borrowing, because a detector's usefulness to an institution has never depended on the detector working.

---

### Why this matters for your business

Four questions, and three of them cost nothing.

Ask a detection vendor for true positives at 1% and at 0.1% false positives, measured on reposted content, and refuse accuracy and AUC as answers. Ask what the curve does after five platform re-encodes. Decide in advance who absorbs the cost of a false positive, because a real recording publicly labelled fake is the error that ends up in front of a lawyer. And keep provenance in your own custody, signed at capture and held in your own archive, instead of expecting to read it back off a public feed.

By 2 February 2027 Europe will plausibly have an interoperability standard for reading a mark that most circulating copies no longer carry. The fight then moves to whose job it was to keep the original.

---ITALIAN---

### TL;DR

- Un benchmark depositato l'11 novembre 2026 ha passato 18 rilevatori di video manipolati su 10.000 clip, circa il 70% manipolate, ricompresse come le ricomprimono WhatsApp, TikTok, Instagram, X, WeChat e RedNote quando qualcuno le ricondivide.
- Con l'1% di falsi positivi, il rilevatore migliore segnala il 14,1% dei falsi. Quello con l'AUC piu' alta, 0,693, ne segnala l'1,3%. Le due classifiche si contraddicono.
- Un rilevatore forte scende da 0,93 di AUC a poco piu' del caso entro cinque ricodifiche, e li' resta fino a trenta. Mandare un file a qualcuno e' l'attacco.
- L'articolo 50(2) dell'AI Act impone la marcatura leggibile a macchina dal 2 agosto 2026, con due condizioni: "as far as this is technically feasible" e lo "stato dell'arte generalmente riconosciuto". La ricerca sta spostando quello stato dell'arte verso l'esenzione.

### Assunti

1. I numeri sui video vengono da un preprint, arXiv:2611.14941, di un gruppo della Arizona State University con un coautore alla NYU. Sono misure degli autori sul loro benchmark, non sottoposte a revisione fra pari e non replicate. Le prendo come una misurazione accurata, non come un fatto stabilito.
2. I numeri sui watermark vengono da un secondo preprint, arXiv:2607.16010 del 17 luglio 2026, che ha testato implementazioni aperte di KGW, Unigram e SynthID-Text tramite la libreria MarkLLM, non il sistema di produzione di Google. Evidenza piu' debole, la uso come indizio.
3. La lettura giuridica e' mia. Il testo dell'articolo 50 e le date del Codice di condotta sono documentati, ma il ragionamento su dove porta la clausola di salvaguardia resta un ragionamento.

### Obiettivo

Tre cose vengono vendute come un unico prodotto: marcare il contenuto sintetico quando nasce, riconoscerlo dopo, e l'obbligo giuridico di fare l'una o l'altra. In Europa sono tutte e tre operative, e solo la terza ha una data.

---

### Il numero che nessuno stampa

Il benchmark copre 18 rilevatori, 11 classici e 7 costruiti su modelli visione-linguaggio, su 10.000 video presi da HowTo100M, OpenVid-HD e da un crawl di materiale socialmente fragile che pesa per il 53% dell'insieme. Fra i generatori ci sono Wan2.2, Hunyuan-1.5 e LTX-2, piu' passaggi di sostituzione del personaggio e di reilluminazione.

Sulle metriche di testa il quadro sembra mediocre ma utilizzabile. D3 guida il gruppo con 0,693 di AUC e 0,642 di Macro F1.

Solo che nessuno mette in produzione sull'AUC. Si mette in produzione a un tasso di falsi positivi sostenibile, perche' ogni falso allarme e' un video vero dichiarato falso in pubblico. Fissa quel tasso all'1% e D3 prende l'1,3% dei falsi, mentre WaveRep, che sulla metrica di sintesi sembra peggiore, ne prende il 14,1%. L'ordine si rovescia.

> L'AUC e' il numero del comunicato stampa. I veri positivi a un tasso di falsi positivi sopportabile sono il numero che decide se vale la pena pagare qualcuno per smaltire la coda delle revisioni.

Chi confronta i fornitori sull'accuratezza ottiene una classifica che non ha rapporto con quello che sta comprando.

---

### Cosa fanno cinque ricondivisioni

WaveRep segna 0,93 di AUC sulla versione pulita del benchmark. Entro cinque ricodifiche sta attorno a 0,50, e resta piatto fino a trenta. Zero virgola cinque e' una monetina.

Gli autori separano due cause, e la distinzione conta. Generatori nuovi e contenuti non familiari costano accuratezza prima di qualunque compressione: un rilevatore visione-linguaggio passa da 0,74 di AUC su un benchmark piu' vecchio a 0,63 su questo, senza che nulla sia stato ricompresso. Poi la ricompressione delle piattaforme cancella le tracce di basso livello che leggono i rilevatori basati sugli artefatti. D3 tiene attorno a 0,69 in ogni condizione, che e' la stabilita' di un rilevatore che quelle tracce non le stava leggendo.

Quindi quello che distrugge la prova e' il gesto ordinario di condividerla. La conclusione degli autori e' che nessun progetto attuale resiste a tutti e quattro i fattori insieme: cambio di generatore, ricodifica, difetti ottici della camera e contenuto fragile.

---

### La clausola che fa il lavoro

L'articolo 50(2) si applica dal 2 agosto 2026, prorogato al 2 dicembre 2026 per i sistemi gia' sul mercato. Marca l'output in formato leggibile a macchina, rendilo riconoscibile come generato artificialmente, con soluzioni efficaci, interoperabili, solide e affidabili, "nella misura in cui cio' sia tecnicamente possibile", tenuto conto dello stato dell'arte generalmente riconosciuto. Il Codice di condotta sulla trasparenza e' arrivato il 10 giugno 2026, giudicato adeguato dalla Commissione l'8 luglio e dall'AI Board il 9 luglio, con le linee guida del 20 luglio. La Misura 3.4 di quel Codice chiede una soluzione di interoperabilita' per i meccanismi di rilevazione entro il 2 febbraio 2027. Il Codice e' volontario.

Adesso accosta il secondo preprint. Una parafrasi che conserva il significato ha tolto la marcatura dal 100% dei testi KGW, dal 100% di quelli Unigram e dal 98,3% di quelli SynthID-Text, contando solo i testi che i rilevatori avevano riconosciuto in partenza, cosa che non riuscivano a fare fra il 70% e l'83% delle volte sull'output marcato e intatto. Gli autori non assegnano a nessun metodo piu' di due dei cinque criteri Daubert.

Sotto c'e' un circolo. Ogni studio serio su quanto resistono le marcature rafforza la tesi che una marcatura capace di reggere non sia tecnicamente possibile, e la possibilita' tecnica e' la condizione a cui e' appeso tutto l'obbligo. Piu' l'evidenza e' buona, piu' il dovere si alleggerisce, e la conformita' scivola verso la documentazione del tentativo.

---

### Un secolo passato a studiare una macchina che non ha mai funzionato

L'8 ottobre 2002 il National Research Council pubblico' la sua revisione sulla macchina della verita'. Basi scientifiche deboli dopo quasi un secolo di studi, accuratezza troppo bassa per lo screening di sicurezza, e una ragione precisa: un test tarato per produrre pochi falsi allarmi manca la maggior parte dei violatori reali, mentre la popolazione sottoposta a screening e' quasi tutta innocente. Il comitato aggiunse che il poligrafo continua a far ottenere confessioni, grazie alla sua reputazione e non alla sua accuratezza. Stephen Fienberg lo disse in chiaro: "National security is too important to be left to such a blunt instrument."

Le agenzie hanno continuato a usarlo per decenni. Questa e' la parte da portarsi via, perche' l'utilita' di un rilevatore per un'istituzione non e' mai dipesa dal fatto che il rilevatore funzioni.

---

### Perche' questo conta per la tua azienda

Quattro domande, e tre non costano niente.

Chiedi al fornitore di rilevazione i veri positivi all'1% e allo 0,1% di falsi positivi, misurati su contenuti ricondivisi, e rifiuta accuratezza e AUC come risposta. Chiedi cosa fa la curva dopo cinque ricodifiche di piattaforma. Decidi prima chi assorbe il costo di un falso positivo, perche' una registrazione vera etichettata come falsa in pubblico e' l'errore che finisce davanti a un avvocato. E tieni la provenienza sotto la tua custodia, firmata all'origine e conservata nel tuo archivio, invece di contare su rileggerla da un feed pubblico.

Entro il 2 febbraio 2027 l'Europa avra' plausibilmente uno standard di interoperabilita' per leggere una marcatura che la maggior parte delle copie in circolazione non porta piu'. La discussione si spostera' su chi doveva conservare l'originale.
