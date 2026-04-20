---
title: "The Invisible Infrastructure: Internet Runs on Individuals, Not Systems"
titleIt: "L'infrastruttura invisibile: internet regge su individui, non su sistemi"
slug: invisible-infrastructure
date: "2026-04-20"
topic: "Enterprise AI"
excerpt: "Critical internet infrastructure is maintained by one or two people. The risk isn't technical. It's organizational."
excerptIt: "Parti critiche dell'infrastruttura internet sono mantenute da una o due persone. Il rischio non è tecnico. È organizzativo."
---

The cloud is invulnerable. Enterprise systems are resilient. AI scales infinitely.

The story we tell ourselves is smooth, automated, bulletproof. The reality underneath? Far messier.

---

### The problem is organizational, not technical

I've spent 30 years watching infrastructure grow in complexity. What I see now is a genuine paradox: we've built systems of staggering reach, yet significant portions of the global internet depend on the continued presence of very few people.

Not because we lack the technical capability to distribute maintenance. Because the economics don't align.

Critical pieces of the plumbing that billions of transactions flow through every day are maintained on volunteer time, minimal budgets, or single-person codebases with zero succession planning.

This isn't an edge case. It's the pattern.

---

### Five projects that hold everything up

**OpenSSL.** The foundation of HTTPS security. For years, a skeleton crew on a laughable budget. When Heartbleed hit in 2014, a single memory leak in an underfunded project had exposed the encryption keys protecting most of the internet's traffic. One bug. One overwhelmed maintainer. Billions at risk.

**NTP (Network Time Protocol).** Synchronizes time across servers and devices globally. Without temporal coherence, certificates break, logs become useless, authentication fails, financial systems stall. For decades: a handful of individuals who maintained it because they cared, not because anyone paid them.

**Bash.** The default shell on Unix/Linux. The universal control layer for millions of production systems. Shellshock showed that a vulnerability here could hand attackers root access across the entire web. The bus factor, as they say, was not reassuring.

**cURL.** A library and tool for data transfer. Invisible to end users. Present everywhere: backends, firmware, IoT devices, CI/CD pipelines. One person, for years, against an infinite surface of use cases and attack vectors. (His name is Daniel Stenberg. Worth knowing.)

**core-js.** A JavaScript polyfill for browser compatibility. Baked into the dependency chain of an enormous fraction of the web. Maintained by one person, with minimal resources, who at some point started writing very public letters about the situation. Nobody in management was reading them.

---

### The pattern

Massive diffusion. Invisibility to business leadership. Maintenance radically under-resourced relative to impact. Weak governance. No real substitutes.

> The breaking point isn't a sophisticated attack or a novel zero-day. It's a maintainer burning out and walking away.

It's a bug that sits unpatched because the one person who understood the codebase has moved on. It's a supply chain compromise that cascades through billions of devices because the foundational layer was never audited.

---

### Where the money actually goes

Most organizations fund the visible. They audit hyperscaler contracts. They invest in cloud-native architecture. They launch the AI initiative with a dedicated team and a shiny budget.

Meanwhile, the foundation their entire operation secretly rests on is being held together by someone working nights.

This is how you end up with perceived security that's high and actual resilience that's fragile. Two completely different numbers.

---

### What needs to change

**Map your supply chain.** Not theoretically. Actually. Trace every dependency, transitive or direct, down to the individual projects and maintainers keeping them alive.

**Triage by impact.** Which of these projects would cause real damage if they disappeared tomorrow? Which ones have a single point of failure?

**Contribute directly.** For the critical ones: send money. Send developers. Sponsor the maintainers. Fund professional security audits on code that billions rely on.

**Plan fallbacks.** For components with real bus factor problems, invest in alternatives or forks. Before the crisis, not during.

**Audit continuously.** Supply chain security isn't a checkbox. It's a practice.

---

### The actual problem

Internet infrastructure isn't fragile because of technical limits. It's fragile because the economic and governance base is completely misaligned with the criticality of what's being maintained.

We've built a system of staggering reach on a foundation of individual generosity and unsustainable labor. We called it "open source" and convinced ourselves that's a business model.

It's not. It's a dependency chain held together by people who care more than they're compensated for.

That's fixable. But only if leadership decides to see the invisible infrastructure for what it is: the actual foundation of everything else.

---ITALIAN---

Il cloud è inattaccabile. I sistemi enterprise sono resilienti. L'AI scala all'infinito.

La narrativa che ci raccontiamo è fluida, automatizzata, a prova di errore. La realtà operativa sotto? Molto più caotica.

---

### Il problema è organizzativo, non tecnico

Ho trascorso 30 anni a guardare l'infrastruttura crescere in complessità. Quello che vedo oggi è un paradosso concreto: abbiamo costruito sistemi di portata enorme, eppure parti critiche dell'internet globale dipendono dalla presenza continuativa di pochissime persone.

Non per mancanza di capacità tecnica nel distribuire la manutenzione. Per una questione di economia.

Componenti fondamentali attraverso cui passano miliardi di transazioni ogni giorno sono mantenuti su base volontaria, con budget risibili, da codebase monopersonali senza nessun piano di successione.

Non è un caso limite. È il pattern.

---

### Cinque progetti che reggono tutto

**OpenSSL.** La base della sicurezza HTTPS. Per anni: un team scheletrico con un budget ridicolo. Quando Heartbleed arrivò nel 2014, una singola memory leak in un progetto sottofinanziato aveva esposto le chiavi di cifratura che proteggevano la maggior parte del traffico internet. Un bug. Un maintainer sotto pressione. Miliardi a rischio.

**NTP (Network Time Protocol).** Sincronizza il tempo su server e dispositivi a livello globale. Senza coerenza temporale saltano certificati, log, autenticazioni, sistemi finanziari. Per decenni: una manciata di individui che lo mantenevano perché ci credevano, non perché qualcuno li pagasse.

**Bash.** La shell di default su Unix/Linux. Il punto di controllo operativo universale per milioni di sistemi in produzione. Shellshock dimostrò che una vulnerabilità qui poteva dare accesso root a chiunque su tutta la rete. Il bus factor, come si dice, non era rassicurante.

**cURL.** Libreria e tool per trasferimenti dati. Invisibile agli utenti finali. Presente ovunque: backend, firmware, dispositivi IoT, pipeline CI/CD. Una sola persona, per anni, contro una superficie infinita di casi d'uso e vettori di attacco. (Si chiama Daniel Stenberg. Vale la pena saperlo.)

**core-js.** Un polyfill JavaScript per la compatibilità tra browser. Integrato nella catena di dipendenze di una frazione enorme del web. Mantenuto da una persona, con risorse minime, che a un certo punto ha iniziato a scrivere lettere pubbliche sulla sua situazione. Nessuno in management le leggeva.

---

### Il pattern

Alta diffusione. Invisibilità per il business. Manutenzione radicalmente sotto-finanziata rispetto all'impatto. Governance debole. Nessun sostituto reale.

> Il punto di rottura non è un attacco sofisticato o uno zero-day inedito. È un maintainer che brucia e smette.

È un bug che resta aperto perché l'unica persona che capiva il codice è andata avanti. È una compromissione della supply chain che si propaga su miliardi di dispositivi perché il layer di base non è mai stato auditato.

---

### Dove finiscono i soldi

La maggior parte delle organizzazioni finanzia il visibile. Auditano i contratti con gli hyperscaler. Investono sull'architettura cloud-native. Lanciano l'iniziativa AI con un team dedicato e un budget presentabile.

Nel frattempo, la fondazione su cui poggia tutta l'operazione è tenuta insieme da qualcuno che lavora di notte.

Così si ottiene una percezione della sicurezza alta e una resilienza reale fragile. Due numeri completamente diversi.

---

### Cosa deve cambiare

**Mappa la supply chain software.** Non in teoria. Concretamente. Traccia ogni dipendenza, diretta o transitiva, fino ai singoli progetti e ai maintainer che li tengono in vita.

**Classifica per impatto.** Quali di questi progetti causerebbero danni reali se sparissero domani? Quali hanno un singolo punto di fallimento?

**Contribuisci direttamente.** Per i critici: manda denaro. Manda sviluppatori. Sponsorizza i maintainer. Finanzia audit di sicurezza professionali su codice che miliardi usano ogni giorno.

**Pianifica i fallback.** Per i componenti con bus factor reale, investi in alternative o fork. Prima della crisi, non durante.

**Audita in modo continuativo.** La supply chain security non è una casella da spuntare. È una pratica.

---

### Il problema vero

L'infrastruttura internet non è fragile per limiti tecnici. È fragile perché la base economica e di governance è completamente disallineata rispetto alla criticità di ciò che viene mantenuto.

Abbiamo costruito un sistema di portata enorme su una fondazione di generosità individuale e condizioni di lavoro insostenibili. L'abbiamo chiamato "open source" e ci siamo convinti che fosse un modello di business.

Non lo è. È una catena di dipendenze tenuta insieme da persone che ci mettono più di quanto vengano pagate per farlo.

È risolvibile. Ma solo se il management decide di vedere l'infrastruttura invisibile per quello che è: la vera fondazione di tutto il resto.
