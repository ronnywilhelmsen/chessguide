# Android Vision Strategy v1.0

| Field | Value |
|-------|-------|
| **Document ID** | ANDROID-STRAT-001 |
| **Title** | Android Vision Strategy v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Strategy |
| **Date** | 2026-06-18 |
| **Scope** | Android product / UX / architecture strategy only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](../architecture/Knowledge-Graph-v1.0.md), [LG-001](../architecture/Learner-Graph-v1.0.md), [LF-001](../architecture/Learning-Frontier-v1.0.md), [TSS-SCC-LLD-001](../architecture/Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [ChessGuide-LLD-v1.0](../architecture/ChessGuide-LLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- ANDROID-STRAT-001 is a **Draft Strategy**.
- It creates **no Android runtime**.
- It creates **no app project**.
- It creates **no UI implementation**.
- It creates **no schemas**.
- It does **not** activate Buddy or LARIS.
- It defines **Android strategy only**.

---

## 2. Executive summary

- Android should be the **primary learner-facing continuity surface**.
- Android should support **reflection, review, practice planning, safe prompts, and continuity**.
- Android must **not** become an engine wrapper or live-game cheating assistant.
- Android must **preserve the full ChessGuide learning architecture**.
- Android implementation comes **only after** HLD/LLD/UML and runtime gates.

---

## 3. Strategic question

**What Android surface should ChessGuide eventually provide so that learning continuity is available in the learner's daily life without breaking evidence, learner-state, Buddy, LARIS, Creator, or federation boundaries?**

A **governed, learner-facing continuity app** that surfaces safe reviews, learning frontier focus, reflection prompts, stored episodes, and future Buddy-guided scaffolding **only after** activation gates are satisfied.

---

## 4. What Android is for

- personal learning continuity
- review and reflection
- episode history
- learning frontier display
- safe post-game analysis
- learner-owned notes/reflections
- optional reminders/habit loops
- eventual Buddy explanation surface
- eventual Creator continuity access

---

## 5. What Android is not

- not a live cheating tool
- not an engine wrapper
- not a tournament platform
- not a chess server
- not an ungoverned Buddy runtime
- not LARIS activation
- not federation export
- not learner-state authority
- not mastery certification
- not a data scraper
- not runtime in this PR

---

## 6. Governance foundation

| Source | Relevance to Android | Strategy consequence |
|--------|----------------------|----------------------|
| **ADR-001** | LearningTrace evidence/custody | Android reflections are not LearningTrace |
| **ADR-002** | corpus_ref sovereign reference | KG glossary cites, not proves |
| **ADR-003** | evidence records | reflection ≠ evidence until processed |
| **ADR-004** | claims / stewardship | no mastery badges |
| **ADR-005** | DecisionTrace | no learner-rationale impersonation |
| **ADR-006** | Buddy pedagogy | Buddy surface only after gates |
| **ADR-007** | Stockfish / SCC boundary | no live engine overlay |
| **ADR-008** | KG / corpus governance | glossary honours curation/source |
| **ACG-001** | architecture continuity | Android preserves full chain |
| **STRR-001** | roadmap controller | Android is PR #26 strategy; impl later |
| **CGSR-002** | strategic identity | Android = surface, not doctrine |
| **KG-001** | domain graph | display KG refs, learner-independent |
| **LG-001** | learner-specific derived state | display read-only, no mutation |
| **LF-001** | planning read model | display suggestions, not commands |
| **TSS-SCC-LLD-001** | safety scanner design | display results in safe contexts only |
| **BLAP-001** | activation plan | Buddy/LARIS gated; no local activation |
| **FEDERATION.md** | federation withholding | no semantic export |

---

## 7. Architecture Continuity Gate

| Layer | Android interpretation | Boundary | Future consequence |
|-------|------------------------|----------|--------------------|
| Philosophy / learning theory | mobile habits support integration | review ≠ learning | grounds journey model |
| Governance / ADR | honours ADR-001–008 | doctrine beats runtime | features respect ADR limits |
| Review / HLD | Android is a surface | surface ≠ doctrine | needs Android HLD before code |
| Future LLD / OOP / UML | app modules named (§22) | design ≠ runtime | LLD/UML before runtime |
| Immutable state transitions | offline drafts + sync strategy | no silent evidence | sync conflict resolution later |
| Runtime implementation | none now | runtime after gates | guarded waves (§23) |
| ChessBuddy / ChessGuide reality sharing | display governed outputs only | no local Buddy authority | Buddy surface after BLAP gates |
| Creator continuity | mobile interactions replayable | no flattening | replay metadata required |
| Federation boundary | no semantic export | lossy ObservationRecord only | widening needs separate path |

---

## 8. Vertical Architecture Continuity Trace

| Layer | Android trace |
|-------|---------------|
| Philosophy / learning theory | learning philosophy → learner-facing mobile habits (review, reflection, continuity) |
| Governance / ADR | governance/ADR → no evidence/claim/mastery collapse on device |
| Review / HLD | HLD/reviews → Android is a surface, not a source of doctrine |
| Future LLD / OOP / UML | future LLD/OOP/UML → app modules defined later |
| Immutable state transitions | immutable state → offline drafts / sync conflict strategy preserve provenance |
| Runtime implementation | runtime → no runtime now |
| ChessBuddy / ChessGuide reality sharing | reality-sharing → Android displays governed outputs only |
| Creator real-time to 100-year continuity | Creator continuity → mobile interactions must remain replayable |
| Federation boundary | federation → no semantic export |

---

## 9. Android user role model

- **learner**
- **reviewer / self-coach**
- **future Buddy-assisted learner**
- **future parent/coach view** only if governed later
- **Creator continuity reader**

---

## 10. Android learning journey model

1. learner reviews a prior episode
2. sees Learning Frontier focus
3. opens a safe post-game review
4. sees TSS warning / concept ref
5. writes a reflection
6. future Buddy asks a scaffolded question
7. evidence path recorded **only** through future governed runtime
8. Creator can replay **why** each prompt existed

---

## 11. Android feature strategy

**Near-term strategy:**

- episode list
- review queue
- learning frontier card
- reflection capture
- safe post-game analysis view
- concept glossary via KG refs

**Later strategy:**

- Buddy explanation drafts
- learner-confirmed reflection support
- spaced review
- progress continuity
- offline-first draft capture

**Explicitly not yet:**

- live move recommendation
- engine overlay in live games
- automatic mastery badges
- cross-domain LARIS guidance

---

## 12. Android data and custody model

- learner input is **learner-authored**
- system observations are **separate**
- Buddy outputs are **separate**
- derived learner state requires a **future evidence path**
- offline drafts must **not silently become evidence**
- sync conflicts require **explicit resolution**

---

## 13. Android offline / online strategy

- Android may eventually support **offline reflection drafts**.
- Offline data must be marked **draft/local** until synced.
- **No derived state update** until server/governed runtime validates.
- Creator replay must preserve **local/remote timestamps and transition**.

---

## 14. Android notification and habit-loop strategy

- notifications may support a **learning routine**
- **no shame/pressure/manipulative streaks**
- notifications should refer to **Learning Frontier or review needs**
- **no claim/mastery notification** without governance
- **user control first**

---

## 15. Android ChessBuddy boundary

- Buddy is **inactive** until BLAP gates pass.
- Android may later display Buddy outputs **only if generated by governed runtime**.
- Android **cannot locally improvise** Buddy authority.
- Buddy text must carry **uncertainty and forbidden-claims constraints**.

---

## 16. Android LARIS boundary

- LARIS is **inactive**.
- Android must **not imply** a cross-domain continuity guide unless explicitly activated.
- Any future LARIS mobile surface requires **separate HLD/LLD/runtime gates**.

---

## 17. Android TSS/SCC boundary

- Android may display TSS results later.
- Android must distinguish **scanner classification from learner understanding**.
- Android must **not present P5 strategy** if P0/P1 safety blocks it.
- Android must **not use TSS as mastery proof**.

---

## 18. Android Learner Graph / Learning Frontier boundary

- Android may display Learner Graph and Frontier **read models**.
- Android must **not mutate** them locally.
- Android may **submit learner reflections** for future evidence processing.
- Frontier recommendation is **not command/truth**.

---

## 19. Android Creator continuity boundary

- Every future Android action that affects learning continuity must be **replayable**.
- Preserve **actor, surface, mode, timestamp, policy versions, input graph versions, and boundary flags**.

---

## 20. Android federation boundary

- Android does **not widen federation**.
- Android-originated reflections, Buddy prompts, TSS warnings, KG refs, Frontier recommendations, and learner-state signals are **not ObservationRecord export**.

---

## 21. Android privacy and safety boundaries

- explicit user custody
- clear local/remote state
- no silent collection
- no hidden live-game assistance
- no auto-sharing
- no background scraping
- no export beyond governance

---

## 22. Future Android HLD / LLD / UML path

Future classes/modules:

- `AndroidAppShell`
- `AndroidEpisodeReviewScreen`
- `AndroidLearningFrontierCard`
- `AndroidReflectionDraft`
- `AndroidSyncBoundary`
- `AndroidBuddySurface`
- `AndroidTssResultView`
- `AndroidCreatorContinuityClient`
- `AndroidNotificationPolicy`
- `AndroidOfflineDraftStore`
- `AndroidPrivacyBoundaryGuard`

Future **HLD/LLD/UML required before runtime**.

---

## 23. Future Android runtime wave path

- Android HLD
- Android LLD/UML
- read-only review UI
- reflection drafts
- Learning Frontier display
- TSS result display
- Buddy read-only output display after gates
- offline/sync later

---

## 24. Rejection criteria

Reject Android strategy if:

- Android can imply live move assistance
- Android can mutate Learner Graph directly
- Android can activate Buddy/LARIS locally
- Android can export semantic data through federation
- Android breaks Creator replay
- Android conflates reflection with evidence
- Android conflates frontier with mastery

---

## 25. Open questions

| ID | Question |
|----|----------|
| **ANDROID-OQ-1** | What is the first safe Android surface? |
| **ANDROID-OQ-2** | What is the offline strategy? |
| **ANDROID-OQ-3** | What are the notification ethics? |
| **ANDROID-OQ-4** | What can be local-only? |
| **ANDROID-OQ-5** | How to handle user deletion/custody? |
| **ANDROID-OQ-6** | How to display uncertainty? |
| **ANDROID-OQ-7** | How to avoid enabling live cheating? |
| **ANDROID-OQ-8** | How to handle mobile board input? |
| **ANDROID-OQ-9** | Whether camera/screenshot input is allowed later? |
| **ANDROID-OQ-10** | What runtime APIs are needed? |

---

## 26. Recommendation

- Accept **ANDROID-STRAT-001** as Draft Strategy.
- Do **not** implement Android yet.
- Proceed only after **Android HLD/LLD/UML and runtime gates**.

---

## 27. Governance boundary statement

**ANDROID-STRAT-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, or **LARIS activation**.

It creates a **human-readable strategy only**.
