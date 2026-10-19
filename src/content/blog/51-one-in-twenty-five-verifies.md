---
title: "One Package Manager in Twenty-Five Verifies the Signature. The Rest Just Wait."
titleIt: "Un package manager su venticinque verifica la firma. Gli altri aspettano."
slug: one-in-twenty-five-verifies
date: "2026-11-05"
topic: "AI Security"
cardImage: "/images/blog/cards/one-in-twenty-five-verifies.webp"
excerpt: "Twenty-five package managers tested against a tampered download. One verifies signatures by default. The industry answer is not identity, it is a waiting period."
excerptIt: "Venticinque package manager messi alla prova con un pacchetto manomesso. Uno verifica la firma per default. La risposta del settore non e' l'identita', e' l'attesa."
---

### TL;DR

Someone finally ran the obvious test: sit between twenty-five package managers and the registries they trust, change the bytes of a legitimate package, and see who notices. Two noticed. One checks signatures without being asked. Meanwhile the controls the ecosystem is actually adopting this autumn are not cryptographic at all, they are clocks: wait a day, wait a week, let an unvalidated config expire. That is quarantine, a public health measure from 1377, and it has two preconditions that software is quietly breaking.

---

### The test nobody runs on their own pipeline

On **14 October 2026** Trail of Bits published the result of an experiment that sounds too dull to matter. They put themselves between **twenty-five** popular package managers and the registries those managers trust, modified a legitimate package in transit, and recorded which installs failed.

Two noticed: **Go** and **vcpkg**. Narrow it to signature verification with default settings and the count drops to one. Go.

The rest need a lockfile, an extra flag, a separate command, or a configuration that nobody writes on a Friday. npm checks a lockfile hash when a lockfile is there. It does not check the registry signature during install, that is a different command you have to remember. Their own conclusion is the honest one: package signing sits roughly where HTTPS sat ten years ago.

> Two out of twenty-five is not a gap in adoption. It is a verdict on the whole approach.

---

### What shipped instead of identity

Look at what the ecosystem is actually putting into production this autumn. pnpm has a setting that refuses any version published less than N minutes ago. .NET 11 RC2 added a flag that writes a minimum publish age into your NuGet config. npm 12 made install scripts opt-in. And GitHub's fix for the npm Trusted Publishing flaw, announced on **2 October 2026**, is that unvalidated configurations expire **48 hours** after creation.

None of these verify anything. They wait.

That flaw is worth the detour, because it explains why identity lost. Trusted Publishing was the answer to stolen long-lived tokens: your CI workflow gets a short-lived credential instead. npm bound each configuration to the repository slug, owner and name, rather than to the permanent numeric IDs GitHub puts in the identity token. Rename the repo, transfer it, delete the owner account, and the old name becomes claimable by anyone with a matching workflow file.

Bloom Security reported it on **6 June 2026**. GitHub validated it three days later. The last reply they got was **8 July**. Six follow-ups, including a mediation request, went unanswered until the fix appeared on **2 October**: **118 days**, more than **1.500** packages exposed, over **10 million** downloads behind them. A release published through that hole carried a valid provenance attestation naming the attacker's repository.

---

### Ragusa, 1377

In 1377 Ragusa, today Dubrovnik, wrote into law a thirty day isolation period for arrivals from plague ports. They called it *trentino*. Other cities stretched it to forty days and gave us the word we still use.

Quarantine never required knowing what the pathogen was. It bought the time for the disease to declare itself, and it worked.

This is precisely what a minimum release age does. It does not inspect the package, it does not verify the publisher, it waits for a stranger to report the poison. The current detection window for malicious npm versions runs between one and twenty-four hours after publication, so a one day delay catches most opportunistic attacks. As security goes, it is unglamorous and effective, which in my experience is the only combination that survives contact with a real pipeline.

---

### Why this matters for your business

Quarantine has two preconditions, and software is breaking both.

The first is that someone outside has to be watching, because the clock only buys time if a human reports the sample. That watching is done by unpaid maintainers and a handful of vendor research teams, and it is the one line item nobody puts in a security budget.

The second is that the clock has to be slower than the attack. Bruce Schneier, writing on **10 September 2026**, put the problem in one line: "Give an AI agent a mere rumor of an exploit, and it's enough for them to find it."

Then there is who installs packages now. Bloom's telemetry puts agent-driven installs at roughly seventy packages a month on a typical endpoint and around three hundred and fifty on a developer machine, dependencies excluded. An agent that has to wait a week before it can use a dependency is not an agent. It is a ticket.

So the board question is not whether your SBOM is clean. It is this: what is your minimum release age, who exactly are you counting on to notice first, and what do your agents do while they wait?

---ITALIAN---

### TL;DR

Qualcuno ha finalmente fatto la prova ovvia: mettersi fra venticinque package manager e i registri di cui si fidano, cambiare i byte di un pacchetto legittimo e vedere chi se ne accorge. Se ne sono accorti due. Uno solo verifica le firme senza che glielo si chieda. Nel frattempo i controlli che il settore sta adottando davvero in questo autunno non sono crittografici, sono orologi: aspetta un giorno, aspetta una settimana, lascia scadere una configurazione non validata. Si chiama quarantena, data 1377, e ha due condizioni che il software sta rompendo.

---

### La prova che nessuno fa sulla propria pipeline

Il **14 ottobre 2026** Trail of Bits ha pubblicato il risultato di un esperimento che sembra troppo noioso per contare. Si sono messi fra **venticinque** package manager diffusi e i registri da cui scaricano, hanno modificato un pacchetto legittimo in transito e hanno registrato quali installazioni fallivano.

Se ne sono accorti due: **Go** e **vcpkg**. Se si restringe alla verifica della firma con le impostazioni di default, resta uno. Go.

Gli altri hanno bisogno di un lockfile, di un flag, di un comando a parte o di una configurazione che nessuno scrive il venerdi pomeriggio. npm controlla l'hash del lockfile quando il lockfile c'e'. La firma del registro durante l'installazione no, quella e' un altro comando che ti devi ricordare. La loro conclusione e' la piu' onesta: la firma dei pacchetti sta piu' o meno dove stava HTTPS dieci anni fa.

> Due su venticinque non e' un problema di adozione. E' un verdetto sull'approccio.

---

### Cosa e' arrivato al posto dell'identita'

Guardiamo cosa il settore sta mettendo in produzione in queste settimane. pnpm ha un'impostazione che rifiuta qualsiasi versione pubblicata da meno di N minuti. .NET 11 RC2 ha aggiunto un flag che scrive un'eta' minima di pubblicazione nella configurazione NuGet. npm 12 ha reso gli script di installazione opt-in. E la correzione di GitHub al buco nel Trusted Publishing di npm, annunciata il **2 ottobre 2026**, dice che le configurazioni non validate scadono dopo **48 ore**.

Nessuno di questi controlli verifica niente. Aspettano.

Vale la deviazione, perche' quel buco spiega perche' l'identita' ha perso. Il Trusted Publishing era la risposta al furto dei token a lunga scadenza: la pipeline CI riceve una credenziale a vita breve. Solo che npm legava ogni configurazione allo slug del repository, proprietario e nome, invece che agli identificativi numerici permanenti che GitHub mette nel token di identita'. Rinomina il repository, trasferiscilo, cancella l'account proprietario, e il vecchio nome torna rivendicabile da chiunque abbia un workflow con il nome giusto.

Bloom Security lo ha segnalato il **6 giugno 2026**. GitHub lo ha validato tre giorni dopo. L'ultima risposta e' arrivata l'**8 luglio**. Sei solleciti, compresa una richiesta di mediazione, senza risposta fino alla correzione del **2 ottobre**: **118 giorni**, piu' di **1.500** pacchetti esposti, oltre **10 milioni** di download alle spalle. E un pacchetto pubblicato da quel buco portava con se' un attestato di provenienza valido, che certificava il repository dell'attaccante.

---

### Ragusa, 1377

Nel 1377 Ragusa, oggi Dubrovnik, mette per legge un isolamento di trenta giorni per chi arriva dai porti infetti. Lo chiamano *trentino*. Altre citta' lo portano a quaranta giorni e ci lasciano la parola che usiamo ancora.

La quarantena non ha mai richiesto di sapere quale fosse il patogeno. Comprava il tempo perche' la malattia si dichiarasse, e funzionava.

E' esattamente quello che fa un'eta' minima di rilascio. Non ispeziona il pacchetto, non verifica chi lo pubblica, aspetta che un estraneo segnali il veleno. La finestra di rilevamento delle versioni npm malevole oggi sta fra una e ventiquattro ore dalla pubblicazione, quindi un giorno di attesa intercetta la gran parte degli attacchi opportunisti. Come misura di sicurezza e' poco spettacolare ed efficace, che per quello che vedo nelle pipeline reali e' la sola combinazione che sopravvive.

---

### Perche' conta per la tua azienda

La quarantena ha due condizioni, e il software le sta rompendo entrambe.

La prima: qualcuno fuori deve guardare, perche' l'orologio compra tempo solo se un essere umano segnala il campione. Quel lavoro lo fanno manutentori non pagati e qualche gruppo di ricerca dei fornitori, ed e' la voce che non entra mai in un budget di sicurezza.

La seconda: l'orologio deve essere piu' lento dell'attacco. Bruce Schneier, il **10 settembre 2026**, ha messo il problema in una riga: dai a un agente la semplice voce di un exploit e gli basta per trovarlo.

Poi c'e' la questione di chi installa i pacchetti adesso. La telemetria di Bloom stima intorno a settanta pacchetti al mese installati dagli agenti su un endpoint tipico e circa trecentocinquanta su una macchina da sviluppo, dipendenze escluse. Un agente che deve attendere una settimana prima di usare una dipendenza non e' un agente. E' un ticket.

Quindi la domanda da portare in consiglio non e' se il tuo SBOM e' pulito. E': qual e' la tua eta' minima di rilascio, su chi stai contando perche' se ne accorga per primo, e cosa fanno i tuoi agenti mentre aspettano?
