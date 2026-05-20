---
title: "The Worm That Signs Its Crimes"
titleIt: "Il verme che firma i suoi crimini"
slug: the-worm-that-signs-its-crimes
date: "2026-05-13"
topic: "AI Security"
cardImage: "/images/blog/cards/the-worm-that-signs-its-crimes.webp"
excerpt: "TeamPCP signed malware with a valid SLSA certificate. A signature no longer proves the code is clean, only that the right pipeline built it."
excerptIt: "TeamPCP ha firmato malware con SLSA valido. La firma non garantisce più codice pulito, solo che viene dalla pipeline giusta."
---

On May 11, 2026, at 19:20 UTC, someone published a compromised version of `@tanstack/react-router`. Not an attacker with stolen credentials. The official TanStack release pipeline, with its verified OIDC identity, signed a malicious package with a perfectly valid SLSA Build Level 3 provenance.

**Twelve million weekly downloads.** A Sigstore certificate saying "this binary really came from that repo." All true. All authentic. All compromised.

It's called Mini Shai-Hulud, the fourth wave of a campaign TeamPCP has been running since 2025, and the name comes from Dune. The giant worms that cross the desert and devour everything. The metaphor is precise to the point of discomfort.

---

### How you compromise a pipeline without stealing anything

The TanStack attack is a chain of three vulnerabilities, none of which would have been enough on its own.

First, a disguised fork (`zblgg/configuration`, renamed to slip past fork-list searches). Then a pull request that triggers a `pull_request_target` workflow, the GitHub Actions trigger that runs the attacker's fork code instead of the parent repo's. That code poisons the GitHub Actions pnpm cache.

When the legitimate maintainer, hours or days later, merges one of their PRs to `main`, the release workflow restores the poisoned cache and builds the package. At that point the attacker's binary reads the OIDC token straight from the runner's memory, from `/proc/<pid>/mem`, and publishes the malicious package with the official pipeline's cryptographic signature.

No stolen npm token. No compromised account. 2FA would have done nothing, because whoever published the package was, in a technical sense, the project's official pipeline.

Snyk filed it as **CVE-2026-45321, CVSS 9.6**. Forty-two TanStack packages, eighty-four versions. Then the worm self-propagated. Mistral AI. UiPath. Guardrails AI. OpenSearch. By the end of the day Snyk counted **170 compromised packages, 518 million cumulative downloads**.

---

### The dead man's switch

The part that hits hardest isn't the sophistication of the vector. It's what the payload does once inside.

The malware installs persistence hooks inside Claude Code (`~/.claude/setup.mjs`, `~/.claude/router_runtime.js`) and VS Code. It exfiltrates credentials through the Session network, a decentralized, end-to-end encrypted messenger, because there's no C2 to block anymore.

And then, to prevent token rotation, it plants a dead man's switch: a service (systemd on Linux, LaunchAgent on macOS) that hits `api.github.com/user` every sixty seconds with the stolen token. If the token gets revoked and GitHub returns 40x, the service runs `rm -rf ~/`. Home directory wipe. 24-hour TTL.

Before revoking a compromised token, you have to disarm the trigger. Look for `~/.local/bin/gh-token-monitor.sh`, `~/.config/gh-token-monitor/`, the LaunchAgent. Get the order wrong, you lose the files.

There's also a geopolitical clause in the code. If the system locale is Russian, the malware exits silently. If the system looks like it's in Israel or Iran, there's a branch with a 1-in-6 chance of running `rm -rf /`. Microsoft documented this while analyzing the Mistral package on PyPI. A malware with opinions.

---

### What actually changed

For fifteen years, open source defense has been built around one idea: cryptographically sign binaries so we know where they come from. Sigstore, SLSA, provenance attestations, npm trusted publishing. All of this work rests on an implicit assumption: if the pipeline is authentic, the code is trustworthy.

Mini Shai-Hulud is the first documented case where that equivalence breaks cleanly and repeatably. The package was signed by the right pipeline. The pipeline ran the wrong code. The certificate is valid. The malware is inside.

> A cryptographic signature no longer proves the code is clean. It proves only that it was built by the right pipeline. Those are different things.

It's not an isolated technical problem, it's a mental-model problem. We'll keep trusting provenance because it beats no provenance, but the old syllogism (signed package equals safe package) died on May 11 at 19:20 UTC.

---

### What to do Monday morning

For anyone running Node repositories, the minimum procedure has changed. Standard `npm install` is no longer enough, because it runs `preinstall` and `postinstall` scripts automatically. The baseline pattern becomes `npm ci --ignore-scripts`, followed by `npm audit --audit-level=moderate` and `npm audit signatures`. The `--ignore-scripts` flag is the critical bit. It disables automatic execution of lifecycle hooks, which is exactly the Mini Shai-Hulud vector.

Then grep for known patterns: `setup.mjs`, `bun_environment.js`, references to `SHA1HULUD`, `shai-hulud`, strings like `OhNoWhatsGoingOnWithGitHub` in commits. Check whether there's a workflow `discussion.yaml` or `shai-hulud-workflow.yml` that nobody on your team added. Look for self-hosted runners registered with the name `SHA1HULUD`.

On GitHub, enable Dependabot alerts, security updates, malware alerts, secret scanning, and push protection. On npm, switch to trusted publishing instead of tokens, and use WebAuthn instead of TOTP for 2FA.

If you find something, do not run `npm install`. Disarm the dead man's switch, then isolate the machine, then rotate the tokens. In that order.

The checklists aren't new. The awareness that you have to run them on signed packages too, that part is.

---

### Why this matters if you don't write code

Every SaaS application you use is built on a chain of open source dependencies. TanStack is one of the most-used libraries in the React ecosystem. Mistral AI is the model someone built their internal chatbot on. Guardrails AI is the safety layer that's supposed to keep models from going off the rails. All compromised, all signed, all distributed by their official pipeline.

When people say "supply chain attack" it sounds like a specialist problem. It's actually the structural problem of a digital economy that outsourced trust to the code of strangers, then outsourced the verification of that code to cryptographic certificates, and is now finding out the certificates are certifying the wrong thing.

Frank Herbert wrote it. The desert is vast, the worm is invisible until it's too late, and the secret to crossing it is not walking in a regular rhythm. The release pipeline of open source software is the regular rhythm. TeamPCP is the worm. The spice, as always, must flow.

---ITALIAN---

L'11 maggio 2026, alle 19:20 UTC, qualcuno ha pubblicato `@tanstack/react-router` versione compromessa. Non un attaccante con credenziali rubate. La pipeline di rilascio ufficiale di TanStack, con la sua identità OIDC verificata, ha firmato un pacchetto malevolo con una provenance SLSA Build Level 3 perfettamente valida.

**Dodici milioni di download settimanali.** Un certificato Sigstore che dice "questo binario viene davvero da quella repo". Tutto vero. Tutto autentico. Tutto compromesso.

Si chiama Mini Shai-Hulud, è la quarta ondata di una campagna che TeamPCP porta avanti dal 2025, e il nome viene da Dune. I worm giganti che attraversano il deserto e divorano tutto. La metafora è precisa fino al disagio.

---

### Come si compromette una pipeline senza rubare niente

L'attacco a TanStack è una catena di tre vulnerabilità, nessuna delle quali da sola sarebbe bastata.

Prima, un fork camuffato (`zblgg/configuration`, rinominato per sfuggire alle ricerche fork-list). Poi una pull request che attiva un workflow `pull_request_target`, il trigger di GitHub Actions che esegue il codice del fork dell'attaccante invece di quello della repo madre. Quel codice avvelena la cache pnpm di GitHub Actions.

Quando il maintainer legittimo, ore o giorni dopo, fa il merge di una sua PR su `main`, il workflow di release ripristina la cache avvelenata e costruisce il pacchetto. A quel punto il binario dell'attaccante legge l'OIDC token direttamente dalla memoria del runner, da `/proc/<pid>/mem`, e pubblica il pacchetto malevolo con la firma crittografica della pipeline ufficiale.

Nessun token npm rubato. Nessun account compromesso. La 2FA non sarebbe servita a niente, perché chi ha pubblicato il pacchetto era, in senso tecnico, la pipeline ufficiale del progetto.

Snyk lo ha registrato come **CVE-2026-45321, CVSS 9.6**. Quarantadue pacchetti TanStack, ottantaquattro versioni. Poi il worm si è auto-propagato. Mistral AI. UiPath. Guardrails AI. OpenSearch. A fine giornata Snyk contava **170 pacchetti compromessi, 518 milioni di download cumulativi**.

---

### Il dead man's switch

La parte che fa più impressione non è la sofisticazione del vettore. È quello che il payload fa una volta dentro.

Il malware installa hook di persistenza dentro Claude Code (`~/.claude/setup.mjs`, `~/.claude/router_runtime.js`) e VS Code. Esfiltra credenziali attraverso la rete Session, un messenger decentralizzato e crittografato end-to-end, perché non c'è più un C2 da bloccare.

E poi, per impedire la rotazione dei token, piazza un dead man's switch: un servizio (systemd su Linux, LaunchAgent su macOS) che ogni sessanta secondi chiama `api.github.com/user` con il token rubato. Se il token viene revocato e GitHub risponde 40x, il servizio esegue `rm -rf ~/`. Wipe della home directory. TTL di 24 ore.

Prima di revocare un token compromesso, devi disinnescare il trigger. Cercare `~/.local/bin/gh-token-monitor.sh`, `~/.config/gh-token-monitor/`, il LaunchAgent. Se sbagli ordine, perdi i file.

C'è anche una clausola geopolitica nel codice. Se il sistema è configurato in russo, il malware termina senza esfiltrare niente. Se il sistema sembra essere in Israele o Iran, c'è una branch con probabilità 1 su 6 di eseguire `rm -rf /`. Microsoft lo ha documentato analizzando il pacchetto Mistral su PyPI. Un malware con opinioni geopolitiche.

---

### Quello che è cambiato davvero

Negli ultimi quindici anni la difesa del software open source si è costruita attorno a un'idea: firmare crittograficamente i binari così sappiamo da dove vengono. Sigstore, SLSA, le attestazioni di provenance, npm trusted publishing. Tutto questo lavoro ha un presupposto implicito: se la pipeline è autentica, il codice è affidabile.

Mini Shai-Hulud è il primo caso documentato in cui questa equivalenza si rompe in modo pulito e ripetibile. Il pacchetto è stato firmato dalla pipeline giusta. La pipeline ha eseguito il codice sbagliato. Il certificato è valido. Il malware è dentro.

> La firma crittografica non garantisce più che il codice sia pulito. Garantisce solo che è stato compilato dalla pipeline giusta. Sono cose diverse.

Non è un problema tecnico isolato, è un problema di modello mentale. Continueremo a fidarci della provenance perché è meglio dell'assenza di provenance, ma il vecchio sillogismo (pacchetto firmato uguale pacchetto sicuro) è morto l'11 maggio alle 19:20 UTC.

---

### Cosa fare lunedì mattina

Per chi gestisce repository Node, la procedura minima è cambiata. `npm install` standard non basta più, perché esegue gli script `preinstall` e `postinstall` automaticamente. Il pattern di base diventa `npm ci --ignore-scripts`, seguito da `npm audit --audit-level=moderate` e `npm audit signatures`. Lo `--ignore-scripts` è il punto critico. Disabilita l'esecuzione automatica degli hook del ciclo di vita, che è esattamente il vettore di Mini Shai-Hulud.

Poi va fatto il grep su pattern noti: `setup.mjs`, `bun_environment.js`, riferimenti a `SHA1HULUD`, `shai-hulud`, stringhe come `OhNoWhatsGoingOnWithGitHub` nei commit. Controllare se esiste un workflow `discussion.yaml` o `shai-hulud-workflow.yml` mai aggiunto da nessuno del team. Cercare runner self-hosted registrati con il nome `SHA1HULUD`.

Su GitHub abilitare Dependabot alerts, security updates, malware alerts, secret scanning e push protection. Su npm passare al trusted publishing invece dei token, e usare WebAuthn al posto di TOTP per la 2FA.

Se trovi qualcosa, non fare `npm install`. Disinnesca il dead man's switch, poi isola la macchina, poi ruota i token, in quest'ordine.

Le checklist non sono nuove. La consapevolezza che devi eseguirle anche sui pacchetti firmati, quella sì.

---

### Perché questo riguarda chi non scrive codice

Ogni applicazione SaaS che usi è costruita su una catena di dipendenze open source. TanStack è una delle librerie più usate nell'ecosistema React. Mistral AI è il modello su cui qualcuno ha basato il proprio chatbot interno. Guardrails AI è il livello di sicurezza che dovrebbe impedire ai modelli di sbagliare. Tutti compromessi, tutti firmati, tutti distribuiti dalla loro pipeline ufficiale.

Quando si parla di "supply chain attack" sembra un problema da specialisti. È invece il problema strutturale di un'economia digitale che ha esternalizzato la fiducia al codice di sconosciuti, e poi ha esternalizzato la verifica di quel codice a certificati crittografici, e adesso scopre che i certificati certificano la cosa sbagliata.

Frank Herbert l'aveva scritto. Il deserto è grande, il verme è invisibile finché non è troppo tardi, e il segreto per attraversarlo è non camminare in un ritmo regolare. La pipeline di rilascio del software open source è il ritmo regolare. TeamPCP è il verme. La spezia, come al solito, deve scorrere.
