---
title: "Twenty-Four Thousand Accounts, Sixteen Million Exchanges. The Product Was the Promo Code."
titleIt: "Ventiquattromila account, sedici milioni di scambi. Il prodotto era il codice promozionale."
slug: sixteen-million-exchanges-promo-code
date: "2026-11-23"
topic: "AI Strategy"
cardImage: "/images/blog/cards/sixteen-million-exchanges-promo-code.webp"
excerpt: "Stolen AI access is resold at 5 to 15 percent of list price, and the seller says the margin comes from promotional credit. Four decisions before you ship a free tier."
excerptIt: "L'accesso AI rubato si rivende al 5-15% del prezzo di listino, e il venditore dichiara che il margine viene dal credito promozionale. Quattro decisioni prima di aprire un piano gratuito."
---

### TL;DR

- Anthropic wrote on **23 February 2026** that three labs generated **over 16 million exchanges** with Claude through **roughly 24,000 fraudulent accounts**.
- Okta Threat Intelligence, **4 August 2026**: resellers advertise that access at **5 to 15 percent of the official per-token price**, and one of them says where the margin comes from.
- In November 2026 Claire Vo moved to shut down ChatPRD's free trial after finding her agent used to build game assets.
- What gets resold is the growth subsidy itself.
- Cellular cloning in the 1990s had the same shape, and the witnesses at the 1997 hearing already named the fix.

### Assumptions

1. Anthropic's numbers come from Anthropic's own logs. No independent audit exists, and the page gives no start or end date for the campaigns.
2. The 5 to 15 percent figure is a seller's public claim quoted by Okta, not a price anyone measured.
3. Reading the pelican prompt as model fingerprinting is Simon Willison's hypothesis, and mine. Treat it as a hypothesis.
4. The 1997 figures are industry estimates entered into the Congressional record by federal witnesses, not audited losses.

### Goal

Explain why a free trial behaves differently in an inference business than in software, and what to settle before you open one.

---

### A pelican on a bicycle

On **20 November 2026** Simon Willison linked a video by Claire Vo, who runs ChatPRD, a product that turns an idea into a spec for product managers. Groups were cycling free trials and promo codes through her agent. Her description of what she had been paying for:

> "I am funding a international Roblox and Fortnite map studio."

The detail worth stopping on is smaller than the theft. One of the recurring prompts inside her agent was a request to draw an SVG of a pelican riding a bicycle. That is nobody's product spec. It is a probe: model families draw that picture with a signature you can recognize, and Willison has used it himself to guess which model sits behind a stealth preview on OpenRouter.

Someone was checking the inventory before reselling it.

---

### What the resellers know about the product

They know the model is the thing worth taking, and the application around it is the coin slot.

Okta Threat Intelligence described the market on **4 August 2026**. One service, trading as Poison Claude, says it charges **5 to 15 percent of the official per-token price**, and it is explicit about the source of that spread:

> "the gap between what the upstream providers charge us under bonus credit and what we charge you."

The spread comes from signup credit, trial allowance, startup program and promo code, resold by the token. Okta found more than half a dozen such services and called that a fraction of the market. One of them had left an `/api/status` endpoint open: **881 registered users, 872 active**.

The volumes are not small. Anthropic's own account, published **23 February 2026**, attributes **over 16 million exchanges** to three labs running **roughly 24,000 fraudulent accounts**, MiniMax alone above **13 million**, and records a single proxy network that "managed more than 20,000 fraudulent accounts simultaneously". When a new model shipped, one of those operations "pivoted within 24 hours, redirecting nearly half their traffic". The thief re-targeted faster than any vendor reprices.

---

### Why this matters for your business

The free trial was invented in a business where the second user cost nothing. You could give away a month because the month was made of disk and goodwill. Inference does not work that way: every trial minute arrives on a metered bill, so the instrument you use to acquire customers is the same stock a reseller wants, at the same moment, in the same units.

That inverts who carries the risk. A model provider can absorb a bad month of credits. The thin layer on top, where most of the products that cross my desk actually live, is paying list price for the capacity it gives away, and its differentiator is a prompt that the buyer of stolen access does not even want.

> A free tier in an AI product is inventory with the door open, and the reseller's margin is your discount.

---

### The part that already happened

On **11 September 1997** the House Subcommittee on Crime took testimony on cellular cloning. An FBI witness put industry losses at **as much as 650 million dollars in 1995**. A DEA witness put the daily cost above **one million dollars** and noted that **over three million** customers still carried phones that could be cloned. A Secret Service agent demonstrated the hardware, priced it at about **a thousand dollars on the street**, and said the quiet part:

> "there is an unlimited number of phones that can be cloned under one account."

The business model was identical. A call-sell operation in West Palm Beach ran around the clock on account numbers scanned off the air in New York, with fresh lists arriving by courier every day. At the arrest the agents seized **about 26,000 account numbers**, which is within a few thousand of the account count Anthropic reported twenty-nine years later.

Cloning did not end with those arrests. It ended when the identity in the handset stopped being a number you could copy off the air. The same hearing recorded authentication and radio fingerprinting as the measures that reduced the opportunity, with no figure attached to the claim, which is the honest version. The fix was architectural, and it was named out loud in that room.

---

### Four decisions before you open a free tier

1. **Price the trial in tokens, not in days.** A day is free to the attacker and expensive to you.
2. **Make the second account cost money.** A card, an identity check, or a hard ceiling per account. Decide the number before launch, because you will decide it under pressure otherwise.
3. **Alert on shape, not only on volume.** The pelican was visible in the logs of a product nobody had instrumented for fingerprinting probes.
4. **Write the loss down as a line.** The share of trial spend you accept as theft, and the date you check whether you were right.

The free tier is turning into a quoted line inside cost of goods, and the first company to publish that line will have told the market something about its margins that no pitch deck says out loud.

---ITALIAN---

### TL;DR

- Anthropic ha scritto il **23 febbraio 2026** che tre laboratori hanno generato **oltre 16 milioni di scambi** con Claude attraverso **circa 24.000 account fraudolenti**.
- Okta Threat Intelligence, **4 agosto 2026**: quell'accesso viene rivenduto al **5-15% del prezzo ufficiale per token**, e uno dei venditori dichiara da dove arriva il margine.
- A novembre 2026 Claire Vo ha deciso di chiudere la prova gratuita di ChatPRD dopo aver scoperto che il suo agente serviva a produrre asset per videogiochi.
- Quello che si rivende e' il sussidio alla crescita.
- La clonazione dei cellulari negli anni Novanta aveva la stessa forma, e i testimoni dell'audizione del 1997 avevano gia' detto come si chiudeva.

### Assunti

1. Le cifre di Anthropic vengono dai log di Anthropic. Non esiste un audit indipendente e la pagina non indica una data di inizio ne' di fine delle campagne.
2. Il 5-15% e' un prezzo dichiarato dal venditore e riportato da Okta, non misurato da terzi.
3. Leggere il prompt del pellicano come impronta del modello e' un'ipotesi di Simon Willison, e mia. Va trattata come tale.
4. Le cifre del 1997 sono stime dell'industria messe a verbale da testimoni federali, non perdite verificate.

### Obiettivo

Spiegare perche' una prova gratuita si comporta in modo diverso in un business a inferenza rispetto al software, e cosa va deciso prima di aprirla.

---

### Un pellicano in bicicletta

Il **20 novembre 2026** Simon Willison ha segnalato un video di Claire Vo, che gestisce ChatPRD, un prodotto che trasforma un'idea nella specifica di un product manager. Dei gruppi organizzati stavano facendo girare prove gratuite e codici promozionali dentro il suo agente. La sua descrizione di cosa stava pagando:

> "I am funding a international Roblox and Fortnite map studio."

Il dettaglio su cui vale la pena fermarsi e' piu' piccolo del furto. Fra i prompt ricorrenti dentro il suo agente c'era la richiesta di disegnare in SVG un pellicano in bicicletta. Non e' la specifica di prodotto di nessuno: e' una sonda, perche' le famiglie di modelli disegnano quell'immagine con una firma riconoscibile, e Willison stesso l'ha usata per indovinare quale modello girasse dietro le anteprime anonime su OpenRouter.

Qualcuno stava controllando la merce prima di rivenderla.

---

### Cosa sanno i rivenditori del prodotto

Sanno che la cosa da prendere e' il modello, e che l'applicazione intorno e' la fessura delle monete.

Okta Threat Intelligence ha descritto questo mercato il **4 agosto 2026**. Un servizio che si firma Poison Claude dichiara di far pagare il **5-15% del prezzo ufficiale per token**, e dice con chiarezza da dove viene quel margine:

> "the gap between what the upstream providers charge us under bonus credit and what we charge you."

Il margine viene da crediti di iscrizione, quote di prova, programmi per startup e codici promozionali, rivenduti a token. Okta ha trovato piu' di mezza dozzina di servizi del genere e ha precisato che sono una frazione del mercato. Uno di loro aveva lasciato aperto un endpoint `/api/status`: **881 utenti registrati, 872 attivi**.

I volumi non sono piccoli. Il resoconto di Anthropic del **23 febbraio 2026** attribuisce **oltre 16 milioni di scambi** a tre laboratori con **circa 24.000 account fraudolenti**, di cui oltre **13 milioni** al solo MiniMax, e registra una singola rete proxy che "managed more than 20,000 fraudulent accounts simultaneously". All'uscita di un modello nuovo, una di quelle operazioni "pivoted within 24 hours, redirecting nearly half their traffic". Chi rubava ha ribersagliato piu' in fretta di quanto qualsiasi fornitore riprezzi.

---

### Perche' questo conta per la tua azienda

La prova gratuita e' nata in un business dove il secondo utente non costava niente. Potevi regalare un mese perche' quel mese era fatto di disco e di buona volonta'. L'inferenza non funziona cosi': ogni minuto di prova arriva su una bolletta a consumo, quindi lo strumento con cui acquisisci clienti e' la stessa merce che interessa a un rivenditore, nello stesso momento e nella stessa unita' di misura.

Questo ribalta chi porta il rischio. Un fornitore di modelli assorbe un mese brutto di crediti. Lo strato sottile che ci sta sopra, dove abita la maggior parte dei prodotti che mi passano davanti, paga a listino la capacita' che regala, e il suo elemento distintivo e' un prompt che a chi compra accesso rubato non interessa nemmeno.

> Un piano gratuito in un prodotto AI e' magazzino con la porta aperta, e il margine del rivenditore e' il tuo sconto.

---

### La parte che e' gia' successa

L'**11 settembre 1997** la Subcommittee on Crime della Camera americana ascoltava testimonianze sulla clonazione dei cellulari. Un testimone dell'FBI stimava le perdite dell'industria **fino a 650 milioni di dollari nel 1995**. Un testimone della DEA metteva il costo giornaliero sopra **il milione di dollari** e ricordava che **oltre tre milioni** di clienti avevano ancora in mano telefoni clonabili. Un'agente del Secret Service ha mostrato l'apparato, l'ha quotato intorno ai **mille dollari in strada**, e ha detto la parte scomoda:

> "there is an unlimited number of phones that can be cloned under one account."

Il modello di business era lo stesso. Un'operazione di call-sell a West Palm Beach lavorava ventiquattro ore al giorno su numeri di account intercettati via radio a New York, con liste fresche consegnate ogni giorno da un corriere. All'arresto gli agenti hanno sequestrato **circa 26.000 numeri di account**, cioe' qualche migliaio di distanza dal conteggio che Anthropic ha pubblicato ventinove anni dopo.

La clonazione non e' finita con quegli arresti. E' finita quando l'identita' dentro il telefono ha smesso di essere un numero copiabile dall'aria. La stessa audizione registra autenticazione e impronta radio come le misure che hanno ridotto le occasioni, senza una cifra a sostegno, e questa e' la versione onesta. La soluzione era architetturale, ed era stata detta ad alta voce in quella stanza.

---

### Quattro decisioni prima di aprire un piano gratuito

1. **Prezza la prova in token, non in giorni.** Un giorno costa zero a chi attacca e molto a te.
2. **Fai costare qualcosa il secondo account.** Una carta, una verifica d'identita', o un tetto duro per account. La cifra si decide prima del lancio, altrimenti la decidi sotto pressione.
3. **Allarma sulla forma, non solo sul volume.** Il pellicano era visibile nei log di un prodotto che nessuno aveva strumentato per riconoscere le sonde.
4. **Scrivi la perdita come una riga.** La quota di spesa in prove che accetti come furto, e la data in cui verifichi se avevi ragione.

Il piano gratuito sta diventando una riga dichiarata dentro il costo del venduto, e la prima azienda che pubblichera' quella riga avra' detto al mercato qualcosa sui propri margini che nessuna presentazione dice ad alta voce.
