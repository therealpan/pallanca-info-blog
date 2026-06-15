---
title: "Prompt Injection Is Not a Bug. It's the Genre."
titleIt: "Il prompt injection non è un bug. È il genere."
slug: prompt-injection-is-the-genre
date: "2026-06-15"
topic: "AI Strategy"
cardImage: "/images/blog/cards/prompt-injection-is-the-genre.webp"
excerpt: "OWASP says prompt injection can't be patched. LiteLLM was compromised at 3.4M downloads a day. The harness is the only defense, boards don't budget it."
excerptIt: "OWASP dice che il prompt injection non si patcha. LiteLLM compromesso a 3,4M di download al giorno. La harness è l'unica difesa, i board non la finanziano."
---

A bug gets patched. A genre defines what is possible inside it. After eighteen months of trying to patch prompt injection out of LLMs, the OWASP 2026 report finally said the quiet part out loud, it is not a bug, it is the architecture. Two text streams, one trust level. Math, not negligence.

### What the patch metaphor is hiding

On March 24, 2026, two versions of LiteLLM, the model gateway that sits underneath CrewAI, DSPy, Microsoft GraphRAG and most agent stacks worth naming, shipped to PyPI with a multi-stage payload. Credential harvesting, Kubernetes lateral movement, persistent backdoor. The vector was an AI-driven attacker, openclaw, that had already compromised a Trivy security scanner upstream and used it to steal the maintainer's PyPI credentials. The bad versions stayed online for three hours. LiteLLM gets pulled 3.4 million times a day.

This is not prompt injection in the classroom sense. It is the same architectural truth one level out. When the model and the data flow through the same pipe, every layer that pipe touches becomes part of the trust boundary. That includes the security scanner. Especially the security scanner.

---

### Why the industry can't fix the underlying flaw

Large language models receive instructions and untrusted data as the same stream of tokens. There is no out-of-band channel that says "this came from the operator, that came from the customer, that came from the web". Researchers have been chasing the problem for two years with input filters, system-prompt fortresses, output validators. They all reduce risk, none of them remove the cause. Simon Willison has been writing this for three years, and the OWASP 2026 report stopped softening the language.

The defense surface is not the model. It cannot be.

> A bug gets a CVE, a fix, a sprint. A genre gets a stack.

---

### Where the defense actually lives

The defense lives in the harness. Sandbox, so a compromised tool call cannot escape the box. Tool whitelist, so the model cannot reach for arms it should not have. Output validation, so even a successful prompt injection has to push its conclusion through a structured gate before anyone trusts it. Action budget, retry strategy, fallback path. The stuff nobody puts on a sales slide because it does not demo.

Sixty-nine percent of enterprise leaders in a 2026 Okta survey said security is slowing their agent adoption. It is an honest answer, and it should be reframed. Security is not slowing adoption, adoption is racing past the security stack. The boards funding the agents are not funding the harness that contains them, because the harness does not have a logo and the model does.

---

### Why this matters for your business

Two practical takeaways. First, in any procurement conversation about an agent system, ask what runs when the model gets prompt-injected. If the answer is "we filter the input", you are buying a bug treatment for a genre problem. Walk. Second, if you are running an agent in production today, your real attack surface is the supply chain of the harness, not the model. The LiteLLM episode was not an LLM bug, it was a Python package that an AI-driven attacker pushed through a poisoned scanner. The brain was fine. The body was the breach.

The model is sold to everyone. The genre is the same for everyone. The only thing that changes is who took the cage seriously.

— Pan

---ITALIAN---

Un bug si patcha. Un genere stabilisce cosa è possibile farci dentro. Dopo diciotto mesi spesi a cercare di togliere il prompt injection dagli LLM, il report OWASP del 2026 ha smesso di girarci attorno, non è un bug, è l'architettura. Due flussi di testo, un solo livello di fiducia. Matematica, non negligenza.

### Cosa nasconde la metafora del patch

Il 24 marzo 2026 due versioni di LiteLLM, il gateway che sta sotto CrewAI, DSPy, Microsoft GraphRAG e gran parte degli stack agentici degni di nota, sono finite su PyPI con un payload a tre stadi. Furto di credenziali, movimento laterale in Kubernetes, backdoor persistente. Il vettore era un attaccante AI-driven, openclaw, che a monte aveva compromesso uno scanner Trivy e da lì aveva rubato le credenziali del maintainer del pacchetto. Le versioni avvelenate sono rimaste online tre ore. LiteLLM viene scaricato 3,4 milioni di volte al giorno.

Non è prompt injection da manuale, è la stessa verità architetturale un livello più in là. Quando modello e dati scorrono nello stesso tubo, ogni strato che il tubo tocca diventa parte del confine di fiducia. Lo scanner di sicurezza incluso. Soprattutto lo scanner.

---

### Perché l'industria non può sistemare il difetto di fondo

I large language model ricevono istruzioni e dati non fidati come stesso stream di token. Non esiste un canale fuori banda che dica "questo viene dall'operatore, questo dal cliente, questo dal web". Sono due anni che la ricerca insegue il problema con input filter, fortezze di system prompt, validatori di output. Tutti riducono il rischio, nessuno elimina la causa. Simon Willison lo scrive da tre anni, e il report OWASP 2026 ha smesso di addolcire la lingua.

La superficie di difesa non è il modello. Non può esserlo.

> Un bug prende un CVE, una fix, uno sprint. Un genere prende uno stack.

---

### Dove vive davvero la difesa

La difesa vive nella harness. Sandbox, così se una tool call viene compromessa non esce dalla scatola. Whitelist degli strumenti, così il modello non può prendere in mano armi che non dovrebbe. Validazione dell'output, così anche un prompt injection riuscito deve far passare la sua conclusione da un cancello strutturato prima che qualcuno la creda. Budget di azioni, strategia di retry, percorso di fallback. La roba che non mette nessuno sulle slide commerciali perché non si fa vedere in demo.

Il 69% dei leader enterprise in una survey Okta del 2026 ha detto che la security sta rallentando l'adozione degli agent. È una risposta onesta, e va rigirata. Non è la security che rallenta l'adozione, è l'adozione che corre oltre lo stack di security. I board che finanziano gli agent non stanno finanziando la harness che li contiene, perché la harness non ha un logo e il modello sì.

---

### Perché conta per il tuo business

Due implicazioni pratiche. La prima, in qualsiasi conversazione di procurement su un sistema agentic, chiedi cosa succede quando il modello prende un prompt injection. Se la risposta è "filtriamo l'input" stai comprando una cura da bug applicata a un problema di genere. Alzati e vai via. La seconda, se hai un agent in produzione oggi, la tua vera superficie d'attacco è la supply chain della harness, non quella del modello. Il caso LiteLLM non era un bug dell'LLM, era un pacchetto Python pushato da un attaccante AI-driven attraverso uno scanner avvelenato. Il cervello era a posto. È il corpo che ha fatto il breach.

Il modello lo vendono a tutti. Il genere è lo stesso per tutti. L'unica cosa che cambia è chi ha preso sul serio la gabbia.

— Pan
