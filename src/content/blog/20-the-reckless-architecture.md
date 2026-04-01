---
title: "The Reckless Architecture"
titleIt: "L'Architettura Scellerata"
slug: the-reckless-architecture
date: "2026-04-01"
topic: "AI Ethics"
excerpt: "Meredith Whittaker called OS-level AI agents 'reckless.' She's right. But reckless implies an accident. That may be too generous."
excerptIt: "Meredith Whittaker ha definito gli agenti AI a livello OS 'sconsiderati'. Ha ragione. Ma sconsiderato implica un incidente. Forse è troppo generoso."
---

Meredith Whittaker, president of the Signal Foundation, said something precise at Davos this January. Not a prediction, not a warning about hypotheticals. A description of what is already happening.

Speaking to Bloomberg on January 20, she described what AI agents embedded at the operating system level actually do: "Agents basically means it has access to data and can act independently based on that data. They need access to your calendar, access to your credit card, access to your Signal, bringing that all back into a shared context window where you have kind of a data slurry."

She called the architectural choices behind this "reckless." She said the OS-level integration is being done "in ways that are very reckless and insensitive to cybersecurity and privacy basics." She used a vivid phrase for it: breaking the blood-brain barrier between applications and the operating system.

She's right. But I think "reckless" gives the architects more credit than they deserve.

---

### The Slurry Is Not a Side Effect

When Microsoft builds Copilot into Windows, when Apple builds Intelligence into iOS, when Google folds Gemini into Android, they are not primarily building productivity tools. They are building data aggregation infrastructure with a productivity UI on top.

The "data slurry" Whittaker describes is not an unfortunate byproduct of agentic AI. It is the architecture's purpose.

Training better models requires more data. Not just more volume, but more granular data: your calendar context, your spending patterns, the content of your messages before they get encrypted. An AI agent with OS-level permissions and access to every app is, from the infrastructure owner's perspective, a maximally efficient data collection mechanism.

> Calling this reckless implies it could have been designed differently. The question is whether "differently" serves the same business model.

---

### You Can Break Up a Company. You Cannot Break Up a Baked Architecture.

In 1911, the U.S. Supreme Court broke Standard Oil into **39 independent companies**. It took 21 years of litigation. The logic was straightforward: Standard Oil controlled the pipelines, so it controlled the market. Dismantle the company, dismantle the monopoly.

Software architecture doesn't work that way.

If Apple Intelligence has been installed on a billion iPhones by the time any regulatory action concludes, breaking up Apple doesn't change what those devices do. The architecture is already in place. The pipes don't get reassigned — they become the floor. The EU's antitrust scrutiny of Big Tech's AI operations, announced in March 2026, is exactly the kind of ex-post enforcement that arrives after the terrain has already been reshaped.

This is the critical asymmetry. Antitrust operates on a timeline of years. Architecture operates in real time, at scale, silently. By the time regulators formulate the right questions, the answer is already installed on billions of devices.

---

### The Question That Isn't Being Asked

Signal built the most rigorous end-to-end encrypted messaging system available. The mathematics are sound. The implementation has been audited extensively. And it is being rendered practically irrelevant — not by breaking the encryption, but by moving the attack surface below the application layer.

You don't need to crack Signal if you control the OS. The plaintext exists before it ever reaches the app.

> "If you give a system like that root access permissions, it can be hijacked," Whittaker said. She's describing not a theoretical risk but an architectural certainty.

This is a form of infrastructure capture without precise historical precedent. Not control of oil, or railroads, or broadcast spectrum. Control of the computational layer that sits beneath every application, every communication, every transaction, on every device most people on earth carry in their pocket.

Whittaker is right to raise the alarm. She's also, I think, being too generous in calling it reckless. The people making these architectural decisions are not insensitive to the security basics. They understand exactly what they're building. The question is whether anyone with regulatory power understands it fast enough to matter.

---ITALIAN---

Meredith Whittaker, presidente della Signal Foundation, ha detto una cosa precisa a Davos a gennaio. Non una previsione, non un avvertimento su scenari ipotetici. Una descrizione di quello che sta succedendo adesso.

Parlando con Bloomberg il 20 gennaio, ha spiegato cosa fanno concretamente gli agenti AI integrati a livello di sistema operativo: "Gli agenti, in sostanza, hanno accesso ai dati e possono agire autonomamente in base a quei dati. Hanno bisogno di accedere al tuo calendario, alla tua carta di credito, ai tuoi messaggi su Signal, portando tutto questo in un contesto condiviso: una specie di purea di dati."

Ha definito le scelte architetturali dietro tutto questo "spericolate". Ha detto che l'integrazione a livello OS viene realizzata "in modi molto spericolati e insensibili alle basi della sicurezza informatica e della privacy". E ha usato un'immagine precisa: rompere la barriera emato-encefalica tra le applicazioni e il sistema operativo.

Ha ragione. Ma credo che "spericolato" sia un termine troppo generoso per chi ha progettato tutto questo.

---

### La Purea Non È un Effetto Collaterale

Quando Microsoft integra Copilot in Windows, quando Apple costruisce Intelligence dentro iOS, quando Google incorpora Gemini in Android, non stanno principalmente costruendo strumenti di produttività. Stanno costruendo infrastrutture per l'aggregazione di dati, con un'interfaccia di produttività sopra.

La "purea di dati" che descrive Whittaker non è un sottoprodotto sfortunato dell'AI agenziale. È lo scopo dell'architettura.

Addestrare modelli migliori richiede più dati. Non solo più volume, ma dati più granulari: il contesto del tuo calendario, le tue abitudini di spesa, il contenuto dei tuoi messaggi prima che vengano cifrati. Un agente AI con permessi a livello OS e accesso a tutte le app è, dalla prospettiva di chi gestisce l'infrastruttura, un meccanismo di raccolta dati massimamente efficiente.

> Definire tutto questo "spericolato" implica che potesse essere progettato diversamente. La domanda è se "diversamente" serve lo stesso modello di business.

---

### Si Può Spezzare un'Azienda. Non Si Può Spezzare un'Architettura Già Installata.

Nel 1911, la Corte Suprema americana spezzò la Standard Oil in **39 aziende indipendenti**. Ci vollero 21 anni di contenziosi legali. La logica era semplice: Standard Oil controllava i gasdotti, quindi controllava il mercato. Smantella l'azienda, smantella il monopolio.

Con l'architettura software non funziona così.

Se Apple Intelligence è già installata su un miliardo di iPhone quando arriva qualsiasi provvedimento regolatorio, smembrare Apple non cambia quello che quei dispositivi fanno. L'architettura è già in opera. I tubi non cambiano proprietario: diventano il pavimento. Il controllo antitrust dell'Unione Europea su tutta la catena AI delle Big Tech, avviato a marzo 2026, è esattamente il tipo di enforcement ex-post che arriva dopo che il territorio è già stato ridisegnato.

Questa è l'asimmetria decisiva. L'antitrust lavora su una scala di anni. L'architettura lavora in tempo reale, su scala globale, in silenzio. Nel momento in cui i regolatori formulano le domande giuste, la risposta è già installata su miliardi di dispositivi.

---

### La Domanda Che Nessuno Sta Facendo ad Alta Voce

Signal ha costruito il sistema di messaggistica cifrata end-to-end più rigoroso disponibile. La matematica è solida. L'implementazione è stata verificata ripetutamente. Eppure sta diventando praticamente irrilevante, non perché qualcuno abbia rotto la cifratura, ma perché il punto di attacco è stato spostato sotto il livello dell'applicazione.

Non hai bisogno di violare Signal se controlli il sistema operativo. Il testo in chiaro esiste prima ancora di arrivare all'app.

> "Se dai a un sistema del genere i permessi di root, può essere dirottato", ha detto Whittaker. Non è un rischio teorico. È una certezza architettonica.

Questa è una forma di cattura infrastrutturale senza precedenti storici precisi. Non il controllo del petrolio, né delle ferrovie, né dello spettro radio. Il controllo dello strato computazionale che sta sotto ogni applicazione, ogni comunicazione, ogni transazione, su ogni dispositivo che la maggior parte delle persone sul pianeta porta in tasca.

Whittaker ha ragione ad alzare la voce. Ma penso che stia essendo troppo generosa quando chiama tutto questo "spericolato". Chi ha preso queste decisioni architetturali non è insensibile alle basi della sicurezza. Sa esattamente cosa sta costruendo. La domanda è se chi ha il potere di intervenire riuscirà a capirlo in tempo.
