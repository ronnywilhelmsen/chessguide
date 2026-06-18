# Chrome Extension Strategy v1.0

| Field | Value |
|-------|-------|
| **Document ID** | CHROME-STRAT-001 |
| **Title** | Chrome Extension Strategy v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Strategy |
| **Date** | 2026-06-18 |
| **Scope** | Chrome extension product / UX / architecture strategy only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](../architecture/Knowledge-Graph-v1.0.md), [LG-001](../architecture/Learner-Graph-v1.0.md), [LF-001](../architecture/Learning-Frontier-v1.0.md), [TSS-SCC-LLD-001](../architecture/Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [ChessGuide-LLD-v1.0](../architecture/ChessGuide-LLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- CHROME-STRAT-001 is a **Draft Strategy**.
- It creates **no Chrome runtime**.
- It creates **no extension project**.
- It creates **no manifest.json**.
- It creates **no permissions**.
- It does **not** activate Buddy or LARIS.
- It defines **Chrome strategy only**.

---

## 2. Executive summary

- A Chrome extension may eventually help **capture context or support review flows** in the browser.
- It must **not** become a live-game cheating tool, engine overlay, hidden scraper, or ungoverned assistant.
- It must be **review-first, permission-minimal, custody-aware, and fully governed**.
- Implementation requires later **HLD/LLD/UML and fair-play review**.

---

## 3. Strategic question

**What browser-adjacent strategy can support ChessGuide learning continuity without enabling cheating, scraping, policy violations, or boundary collapse?**

A **permission-minimal, review-mode-first** extension strategy that captures or imports **learner-authorized context only** after games or in safe contexts, **never gives live move assistance**, and routes all semantic interpretation through **governed ChessGuide runtime**.

---

## 4. What the Chrome extension is for

- browser-adjacent review
- learner-authorized capture/import
- linking external chess activity to ChessGuide episodes
- post-game context handoff
- safe review launch
- optional annotation capture
- future Learning Frontier / TSS review display
- **not live assistance**

---

## 5. What the Chrome extension is not

- not a cheating tool
- not a live move advisor
- not an engine overlay
- not a hidden scraper
- not a data exfiltration tool
- not a website automation bot
- not Buddy activation
- not LARIS activation
- not federation export
- not runtime in this PR

---

## 6. Governance foundation

| Source | Relevance to Chrome | Strategy consequence |
|--------|---------------------|----------------------|
| **ADR-001** | LearningTrace evidence/custody | imports are not LearningTrace |
| **ADR-002** | corpus_ref sovereign reference | KG citation, not proof |
| **ADR-003** | evidence records | captured context ≠ evidence until processed |
| **ADR-004** | claims / stewardship | no mastery certification |
| **ADR-005** | DecisionTrace | no learner-rationale impersonation |
| **ADR-006** | Buddy pedagogy | no local Buddy generation |
| **ADR-007** | Stockfish / SCC boundary | no live engine/TSS overlay |
| **ADR-008** | KG / corpus governance | refs honour curation/source |
| **ACG-001** | architecture continuity | Chrome preserves full chain |
| **STRR-001** | roadmap controller | Chrome is PR #26 strategy; impl later |
| **CGSR-002** | strategic identity | Chrome = surface, not doctrine |
| **KG-001** | domain graph | display refs in safe contexts only |
| **LG-001** | learner-specific derived state | no mutation |
| **LF-001** | planning read model | no command, safe contexts only |
| **TSS-SCC-LLD-001** | safety scanner design | no live overlay |
| **BLAP-001** | activation plan | Buddy/LARIS gated; no local activation |
| **FEDERATION.md** | federation withholding | no semantic export |

---

## 7. Architecture Continuity Gate

| Layer | Chrome interpretation | Boundary | Future consequence |
|-------|-----------------------|----------|--------------------|
| Philosophy / learning theory | browser review support | review ≠ learning | grounds review-mode design |
| Governance / ADR | honours ADR-001–008 | doctrine beats runtime | authorized capture only |
| Review / HLD | Chrome is a surface | surface ≠ doctrine | needs Chrome HLD before code |
| Future LLD / OOP / UML | extension modules named (§22) | design ≠ runtime | LLD/UML before runtime |
| Immutable state transitions | captured context marked source/provenance | no silent evidence | provenance preserved |
| Runtime implementation | none now | runtime after gates | guarded waves (§23) |
| ChessBuddy / ChessGuide reality sharing | no ungoverned in-page advice | no local Buddy authority | Buddy in safe review only |
| Creator continuity | captured context replayable | no flattening | provenance envelope required |
| Federation boundary | no semantic export | lossy ObservationRecord only | widening needs separate path |

---

## 8. Vertical Architecture Continuity Trace

| Layer | Chrome trace |
|-------|--------------|
| Philosophy / learning theory | learning philosophy → browser review support |
| Governance / ADR | governance/ADR → authorized capture only |
| Review / HLD | HLD/reviews → Chrome is a surface, not doctrine |
| Future LLD / OOP / UML | future LLD/OOP/UML → extension modules later |
| Immutable state transitions | immutable state → captured context must be marked source/provenance |
| Runtime implementation | runtime → no runtime now |
| ChessBuddy / ChessGuide reality sharing | reality-sharing → no ungoverned in-page advice |
| Creator real-time to 100-year continuity | Creator continuity → captured context must be replayable |
| Federation boundary | federation → no semantic export |

---

## 9. Fair-play and anti-cheating boundary

**This boundary is mandatory and strong.**

- The extension must **never** provide live move suggestions in active games.
- The extension must **never** provide engine evaluations during active play.
- The extension must **never** inject tactical warnings into live rated/unrated games.
- The extension must **never** auto-play moves.
- The extension must **never** bypass site terms.
- **Safe mode** is post-game review, self-owned analysis, study, or explicitly allowed training context.
- If active-game state is detected, the extension **must enter passive/no-advice mode**.

---

## 10. Browser permissions strategy

- permission-minimal design
- no broad host permissions unless future HLD justifies
- no background scraping
- no hidden network capture
- no clipboard scraping
- no page mutation without explicit user action
- no sensitive data collection
- all permissions must be **justified in future HLD**

---

## 11. Site interaction strategy

- avoid site-specific scraping as default
- prefer user-authorized import/export or copy-paste/PGN/FEN
- if site integrations are added later, **each site requires specific governance review**
- extension must honor website ToS and fair-play rules
- **no stealth behavior**

---

## 12. Capture / import strategy

Safe inputs:

- PGN pasted by the user
- FEN pasted by the user
- user-selected text import
- user-uploaded game file
- post-game URL with explicit user action if allowed later
- manual annotation notes

- captured data is **raw context, not evidence** until processed
- import must preserve **source/provenance**
- **no learner-state mutation locally**

---

## 13. Review-mode strategy

- extension may open ChessGuide **review mode after a game**
- may send **user-authorized** PGN/FEN to future ChessGuide runtime
- may display safe links to existing review
- **may not display live assistance**

---

## 14. Live-game prohibition strategy

- active-game detection later
- **no-advice mode**
- no engine/TSS/Buddy overlay
- no candidate moves
- no warnings that affect live play
- the only allowed action may be "save for later review" if safe and permitted

---

## 15. Chrome ChessBuddy boundary

- Buddy is **inactive** until BLAP gates pass.
- Chrome must **not locally generate** Buddy outputs.
- Future Buddy outputs may appear **only in safe review contexts** and through governed runtime.
- **No Buddy overlay during live games.**

---

## 16. Chrome LARIS boundary

- LARIS is **inactive**.
- Chrome must **not activate** cross-domain assistant behavior.
- Future LARIS in the browser requires **separate HLD/LLD/runtime gates**.

---

## 17. Chrome TSS/SCC boundary

- TSS/SCC output may be shown **only in safe review contexts**.
- **No live tactical scanner overlay.**
- **No P0/P1 warnings during active play.**
- No engine-best or learning-best during active play.

---

## 18. Chrome Learner Graph / Learning Frontier boundary

- Chrome may display read-only Frontier in **safe contexts** later.
- Chrome may submit **user-authorized** context for future processing.
- Chrome **may not mutate** Learner Graph or Frontier.
- Frontier recommendation is **not command/truth**.

---

## 19. Chrome Creator continuity boundary

- imports must preserve **source, surface, time, user action, and provenance**.
- future Chrome events must be **replayable**.
- Creator must understand whether data was **user-pasted, page-selected, uploaded, or manually annotated**.

---

## 20. Chrome federation boundary

- Chrome does **not widen federation**.
- Browser context, page data, PGN/FEN import, Buddy output, TSS output, KG refs, learner context, and Frontier recommendations are **not ObservationRecord export**.

---

## 21. Chrome privacy and custody boundaries

- explicit user action
- transparent capture
- no hidden scraping
- no background collection
- no automatic page reading
- no sensitive data beyond explicit import
- local drafts marked local
- user deletion/custody strategy later

---

## 22. Future Chrome HLD / LLD / UML path

Future classes/modules:

- `ChromeExtensionShell`
- `ChromePermissionPolicy`
- `ChromeCaptureIntent`
- `ChromeImportRequest`
- `ChromeReviewLauncher`
- `ChromeNoAdviceMode`
- `ChromeFairPlayGuard`
- `ChromeSiteIntegrationPolicy`
- `ChromePrivacyBoundaryGuard`
- `ChromeCreatorContinuityEnvelope`
- `ChromeBuddySurface`
- `ChromeTssReviewSurface`

Future **HLD/LLD/UML required before runtime**.

---

## 23. Future Chrome runtime wave path

- Chrome strategy accepted
- Chrome HLD
- Chrome LLD/UML
- no-advice extension shell
- manual PGN/FEN import
- review launcher
- safe post-game TSS review
- Buddy read-only review surface after gates
- site-specific integrations only after governance

---

## 24. Rejection criteria

Reject Chrome strategy if:

- extension can provide live move advice
- extension can show engine/TSS/Buddy overlay in active games
- extension can scrape silently
- extension can mutate learner state directly
- extension can activate Buddy/LARIS locally
- extension can export semantic data through federation
- extension breaks Creator replay/provenance
- extension has broad permissions without governance

---

## 25. Open questions

| ID | Question |
|----|----------|
| **CHROME-OQ-1** | What is the first safe extension mode? |
| **CHROME-OQ-2** | How is active-game detection performed? |
| **CHROME-OQ-3** | What is the permission model? |
| **CHROME-OQ-4** | What is the PGN/FEN import workflow? |
| **CHROME-OQ-5** | What site-specific support, if any? |
| **CHROME-OQ-6** | What ToS / fair-play review is required? |
| **CHROME-OQ-7** | What local storage / custody model? |
| **CHROME-OQ-8** | What privacy disclosure is required? |
| **CHROME-OQ-9** | What Chrome Web Store constraints apply? |
| **CHROME-OQ-10** | What tests are required before runtime? |

---

## 26. Recommendation

- Accept **CHROME-STRAT-001** as Draft Strategy.
- Do **not** implement the Chrome extension yet.
- Proceed only after **Chrome HLD/LLD/UML and fair-play/runtime gates**.

---

## 27. Governance boundary statement

**CHROME-STRAT-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, or **LARIS activation**.

It creates a **human-readable strategy only**.
