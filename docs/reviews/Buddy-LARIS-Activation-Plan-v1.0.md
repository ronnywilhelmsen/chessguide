# Buddy / LARIS Activation Plan v1.0

| Field | Value |
|-------|-------|
| **Document ID** | BLAP-001 |
| **Title** | Buddy / LARIS Activation Plan v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Activation Plan |
| **Date** | 2026-06-18 |
| **Scope** | Buddy / LARIS activation gating, authority, reality-sharing, and continuity plan only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](./Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](./ChessGuide-Strategic-Review-v2.0.md), [KG-001](../architecture/Knowledge-Graph-v1.0.md), [LG-001](../architecture/Learner-Graph-v1.0.md), [LF-001](../architecture/Learning-Frontier-v1.0.md), [TSS-SCC-LLD-001](../architecture/Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [TSS-SCC-UML-v1.0](../architecture/uml/Tactical-Safety-Scanner-SCC-UML-v1.0.puml), SCCR-001, SCC-HLD-001, [ChessGuide-LLD-v1.0](../architecture/ChessGuide-LLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- BLAP-001 is a **Draft Activation Plan**.
- It does **not** activate Buddy.
- It does **not** activate LARIS.
- It does **not** create runtime behavior.
- It does **not** create schema.
- It does **not** create HLD, LLD, or UML.
- It does **not** modify federation export.
- It defines **activation gates and authority limits only**.

---

## 2. Executive summary

- ChessBuddy and LARIS are **not the same actor**.
- ChessBuddy **may become** a governed pedagogical mentor inside ChessGuide.
- LARIS is a **cross-domain continuity guide** and remains **inactive**.
- KG, Learner Graph, Learning Frontier, and TSS/SCC provide **necessary foundations** but are **not sufficient** for activation.
- Activation requires explicit **mode, authority boundary, runtime design, rollback path, and Creator continuity proof**.
- This PR creates a **plan, not activation**.

---

## 3. Strategic question

**Under what conditions may ChessGuide safely activate ChessBuddy and later LARIS without collapsing evidence, learner state, claims, mastery, engine reference, system competence, and federation boundaries?**

Only through **gated activation modes** where Buddy and LARIS consume **governed read models**, produce **bounded explanations/prompts**, **preserve uncertainty**, avoid claims/mastery/learner-rationale impersonation, preserve **Creator replay**, and remain **fully withheld** from federation export.

---

## 4. What ChessBuddy activation means

- Activation of a **pedagogical mentor surface**.
- Uses KG, Learner Graph, Learning Frontier, TSS/SCC outputs **through policy**.
- Produces **explanations, prompts, scaffolding, reflections**.
- May help the learner **think**, not certify mastery.
- May **not** mutate learner state directly.
- May **not** impersonate learner rationale.
- May **not** treat engine lines as teacher truth.
- May **not** broaden federation.

---

## 5. What LARIS activation means

- Activation of a **cross-domain continuity guide**.
- **Not** chess-specific move authority.
- **Not** Buddy.
- **Not** a runtime helper.
- **Not** a federation export widener.
- Requires a **separate future activation** after Buddy safety is proven.
- Must preserve **cross-domain learning structure**, not transfer raw chess facts.

---

## 6. What this plan is not

- not runtime
- not Buddy activation
- not LARIS activation
- not HLD
- not LLD
- not UML
- not schema
- not implementation
- not federation widening
- not a mastery model
- not claim stewardship
- not engine integration
- not Android/Chrome client implementation

---

## 7. Governance foundation

| Source | Relevance | Activation consequence |
|--------|-----------|------------------------|
| **ADR-001** | LearningTrace evidence/custody | Buddy/LARIS output is not LearningTrace |
| **ADR-002** | corpus_ref sovereign reference | KG citation is a pointer, not proof |
| **ADR-003** | evidence records | actors cite, never create evidence |
| **ADR-004** | claims / stewardship | no claim/mastery certification |
| **ADR-005** | DecisionTrace | no impersonation of learner rationale |
| **ADR-006** | Buddy pedagogy | Buddy = mentor, not oracle/steward |
| **ADR-007** | Stockfish / SCC boundary | engine-best ≠ learning-best |
| **ADR-008** | KG / corpus governance | KG refs honour curation/source posture |
| **ACG-001** | architecture continuity | activation must preserve full chain |
| **STRR-001** | roadmap controller | BLAP is PR #25; activation separate/gated |
| **CGSR-002** | strategic identity | LARIS dormant; Buddy governed mentor |
| **KG-001** | domain graph | Buddy cites concepts, learner-independent |
| **LG-001** | learner-specific derived state | Buddy reads, never mutates |
| **LF-001** | planning read model | Buddy explains, never commands |
| **TSS-SCC-LLD-001** | safety scanner design | Buddy honours P0/P1 warnings |
| **SCC-HLD-001** | system competence HLD | SCC ≠ learner competence |
| **FEDERATION.md** | federation withholding | no actor output exported |

---

## 8. Architecture Continuity Gate

| Layer | Buddy/LARIS activation interpretation | Boundary | Future consequence |
|-------|----------------------------------------|----------|--------------------|
| Philosophy / learning theory | mentoring supports integration, not learning itself | scaffolding ≠ mastery | grounds activation modes |
| Governance / ADR | activation honours ADR-001–008 | doctrine beats runtime | gates encode each ADR limit |
| Review / HLD | BLAP traces to CGSR-002/STRR-001/SCC-HLD | plan ≠ implementation | feeds future activation LLD |
| Future LLD / OOP / UML | activation classes named (§30) | design ≠ runtime | LLD before any runtime mode |
| Immutable state transitions | activation modes + audit records | no silent mutation | replayable activation audit |
| Runtime implementation | none here; default inactive | runtime needs kill switch | guarded waves only |
| ChessBuddy / ChessGuide reality sharing | Buddy gets governed read model | Buddy ≠ authority | reality-sharing roles preserved |
| Creator continuity | actor/mode/version replayable | no flattening | 100-year activation replay |
| Federation boundary | withholding guard | no semantic export | widening needs separate path |

---

## 9. Vertical Architecture Continuity Trace

The transferable layer across domains is **learning structure** — evidence, uncertainty, concept graph, learner graph, frontier, mentor scaffolding, and continuity — **not chess facts**. Buddy/LARIS must preserve this abstraction. **Chess facts are not what generalizes.**

| Layer | Controlling artifact / doctrine | Buddy/LARIS interpretation | Activation-plan consequence | Future LLD/OOP consequence | Immutable state consequence | ChessBuddy / ChessGuide reality-sharing consequence | Creator continuity consequence | Federation consequence | Acceptance check |
|-------|--------------------------------|----------------------------|------------------------------|----------------------------|------------------------------|-----------------------------------------------------|--------------------------------|------------------------|------------------|
| **1. Philosophy / learning theory** | CG-000/CG-001 learning chain | mentoring aids integration, is not learning | modes scaffold, never certify | activation classes model scaffolding | output never auto-becomes learner state | Buddy supports thinking; learner owns meaning | Creator records pedagogy was scaffolding | scaffolding not exported | no mode certifies learning |
| **2. Governance / ADR** | ADR-001–008 | actors must not violate any ADR | gates encode ADR limits | guards enforce ADR boundaries | ADR-protected records unmutated | Buddy per ADR-006; engine per ADR-007 | ADR provenance in replay | ADR refs not exported | no gate contradicts an ADR |
| **3. Review / HLD** | STRR-001, CGSR-002, SCC-HLD-001 | activation lowers prior intent | plan traces to upstream | activation LLD traces to BLAP | state intent inherited | reality-sharing inherited from CGSR-002 | replay references upstream versions | withholding inherited | every gate traces upstream |
| **4. LLD / OOP / UML** | TSS-SCC-LLD-001 + future activation LLD | typed activation policy/modes/guards | §30 lists classes; no UML here | future LLD must match this plan | audit/state typed in future LLD | ExplanationDraft is Buddy surface | replay envelope typed in future LLD | withholding guard typed in future LLD | future LLD honours BLAP |
| **5. Immutable state transitions** | ACG-001 | activation audit immutable/replayable | modes + `ActivationAuditRecord` | future LLD persistence | **no silent mutation**; corrections version | shared views read immutable audit | full activation replay | no mutable export channel | audit immutability defined |
| **6. Runtime implementation boundary** | STRR-001 runtime-after-LLD; §26 | design only; default inactive | runtime must implement modes + kill switch | runtime preserves invariants | runtime cannot bypass immutability | runtime cannot exceed mode authority | runtime emits replay metadata | runtime cannot widen export | no runtime in PR |
| **7. ChessBuddy / ChessGuide shared reality** | ADR-006, CGSR-002 | distinguishes observe/classify/explain/learner statement | §12–§14 define authority + views | guards typed in future LLD | drafts derived/read-only | Buddy gets governed read model, not raw authority; no claim/mastery/rationale | Creator records what Buddy was permitted | Buddy output not exported | Buddy boundary explicit |
| **8. Creator real-time to 100-year continuity** | ACG-001 100-year continuity | Creator replays the activation/explanation chain | replay metadata required (§24) | `CreatorReplayEnvelope` | replay reconstructs why output existed | shared reality reconstructable historically | meaning preserved, not flattened | replay data internal | replay metadata required |
| **9. Federation boundary** | FEDERATION.md, ADR-002 | no actor output is export | `RealitySharingPolicy` + withholding (§25) | withholding guard typed in future LLD | withholding decision recorded | nothing semantic crosses to ObservationRecord | export attempts blocked/logged | **no** explanation/prompt/frontier/learner data/KG ref/engine ref/LARIS interpretation exported | withholding must pass |

---

## 10. Buddy / LARIS separation

| Capability | ChessBuddy | LARIS | Boundary |
|------------|-----------|-------|----------|
| Domain scope | chess pedagogy in ChessGuide | cross-domain learning continuity | LARIS not chess move authority |
| Source of knowledge | KG, LG, LF, TSS/SCC via policy | learning structures across domains | neither owns doctrine |
| Allowed outputs | explanations, prompts, scaffolding | continuity interpretation, transfer scaffold | no claims/mastery |
| Learner-state access | read-only via policy | none until future authorization | no direct write |
| KG access | cite refs | structure transfer (future) | KG ref ≠ evidence |
| Learner Graph access | read derived state | none until future | no mutation |
| Frontier access | explain candidates | structure comparison (future) | recommendation ≠ truth |
| TSS/SCC access | honour warnings | none | P0/P1 binding |
| Engine reference | via policy, not raw | none | engine-best ≠ learning-best |
| Claim authority | none | none | stewardship separate |
| Mastery authority | none | none | governed evidence only |
| Federation export | none | none | fully withheld |
| Cross-domain transfer | none | future only | LARIS-specific gate |
| Activation timing | after runtime gates | after Buddy proven safe | always separate |

---

## 11. Activation mode model

| Mode | Name | Allowed inputs | Allowed outputs | Forbidden actions | Required gates | Rollback trigger |
|------|------|----------------|-----------------|-------------------|----------------|------------------|
| **Mode 0** | inactive | none | none | any actor behavior | n/a | n/a |
| **Mode 1** | documentation/design-only | governance docs | design artifacts | runtime behavior | governance review | doc inconsistency |
| **Mode 2** | read-only explanation draft | governed read models | ExplanationDraft (non-learner-facing) | learner-state write, claims | TSS runtime + draft policy | boundary leak |
| **Mode 3** | guarded mentor prompt | read models + draft | learner-facing prompt with uncertainty | claims, mastery, rationale impersonation | forbidden-claims guard | false claim |
| **Mode 4** | learner-confirmed reflection support | read models + learner confirmation | reflection support; learner-confirmed record | silent learner-state write | evidence path + confirmation | mutation without evidence |
| **Mode 5** | runtime-integrated mentor assistant | full governed runtime read models | bounded mentor assistance | exceeding authority/boundary | full acceptance gates | any boundary breach |
| **Mode 6** | cross-domain LARIS continuity guide | Buddy safety record + continuity model | cross-domain continuity interpretation | chess move authority, federation widening | LARIS activation gates | silent activation / leak |

- The current repository after this PR remains **Mode 1 only**.
- **No runtime activation** in this PR.
- **LARIS remains Mode 0** unless a separate future activation passes.

---

## 12. Buddy authority model

**Allowed:**

- explain a KG concept
- ask a reflective question
- explain a TSS warning
- explain a Learning Frontier recommendation
- compare a learner statement to evidence
- surface uncertainty
- propose a practice focus
- produce an ExplanationDraft

**Forbidden:**

- certify mastery
- create a claim
- write learner state directly
- impersonate learner rationale
- treat engine-best as learning-best
- bypass TSS P0/P1 warnings
- export semantic data
- activate LARIS
- present conjecture as fact

---

## 13. LARIS authority model

**Allowed only in future:**

- preserve cross-domain continuity structure
- help transfer learning patterns, not raw chess facts
- compare learning-frontier structures across domains
- support Creator continuity interpretation

**Forbidden:**

- chess move authority
- raw engine interpretation
- mastery certification
- learner-state mutation
- federation widening
- ungoverned runtime agent behavior
- silent activation through Buddy

---

## 14. Reality-sharing model

| View | Can see | Can say | Can write | Cannot infer | Must preserve |
|------|---------|---------|-----------|--------------|---------------|
| Learner | own activity/statements | self-explanation, intent | learner statements | system observation | autonomy |
| ChessGuide system | activity, evidence, KG | system observation | observations, read models | learner rationale | custody |
| TSS/SCC | position, KG, engine ref | safety classification | scan results | learner state | P0–P5 order |
| KG | governed concepts | concept definitions | corpus refs | learner state | source posture |
| Learner Graph | evidence lineage, KG | derived signals | append-only derived state | mastery | provenance |
| Learning Frontier | LG + KG | suggestions | read-model views | claim/mastery | uncertainty |
| Buddy | governed read models | explanations, prompts | ExplanationDraft/output record | learner rationale | uncertainty + forbidden claims |
| LARIS | continuity structures (future) | cross-domain interpretation | continuity refs (future) | chess move truth | learning-structure abstraction |
| Creator | full lineage | continuity interpretation | custody/version lineage | — | replayable meaning |
| Federation | ObservationRecord slice | lossy observation | ObservationRecord only | semantic detail | withholding |

---

## 15. Required inputs before activation

**Buddy inputs:**

- KG-001 concept refs
- LG-001 derived learner signals
- LF-001 frontier candidates
- TSS-SCC-LLD outputs / future runtime result
- evidence references
- uncertainty state
- policy version
- boundary flags

**LARIS future inputs:**

- activated Buddy safety record
- cross-domain continuity model
- Creator replay validation
- domain transfer policy
- deactivation path
- explicit governance approval

---

## 16. Required outputs after activation

**Buddy outputs:**

- ExplanationDraft
- mentor prompt
- uncertainty statement
- allowed recommendation
- forbidden inference list
- optional learner-facing reflection question
- Creator replay metadata

**LARIS future outputs:**

- cross-domain continuity interpretation
- learning-structure comparison
- domain-transfer scaffold
- no chess move authority
- no mastery claim

---

## 17. Learner-state boundary

- Buddy and LARIS **cannot directly write** learner state.
- Learner-state changes require an **explicit evidence path and derivation policy**.
- Learner confirmation may be **recorded separately** in future runtime.
- Buddy output is **not learner rationale**.

---

## 18. Knowledge Graph boundary

- Buddy may **cite** KG concepts.
- LARIS may later **transfer learning structures** derived from KG usage.
- KG refs are **not evidence**.
- KG refs are **not mastery**.

---

## 19. Learner Graph boundary

- Buddy may **read** governed derived state.
- Buddy **cannot mutate** Learner Graph.
- Buddy **cannot treat** derived confidence as mastery.
- LARIS **cannot use** Learner Graph cross-domain without future authorization.

---

## 20. Learning Frontier boundary

- Buddy may **explain** Frontier recommendations.
- Frontier recommendation is **not truth**.
- Buddy must **surface uncertainty**.
- LARIS future transfer may use **frontier structure**, not raw chess topic.

---

## 21. Tactical Safety Scanner / SCC boundary

- Buddy must **honor P0/P1 warnings**.
- Buddy **cannot praise** a strategic plan when the scanner blocks it.
- TSS/SCC is **system competence, not learner competence**.
- TSS output is **not evidence/mastery** by itself.

---

## 22. Engine reference boundary

- **engine-best is not learning-best.**
- engine line is **not teacher truth**.
- Buddy **cannot expose** raw engine authority without policy.
- LARIS **cannot use** an engine line as a cross-domain learning fact.

---

## 23. Evidence / claim / mastery boundary

- Buddy can **reference** evidence, but **cannot create** evidence.
- Buddy can **suggest claim-readiness** only if governance later permits.
- Claims require **stewardship**.
- Mastery requires **governed evidence and integration**.
- LARIS **cannot certify** mastery.

---

## 24. Creator continuity model

- All future Buddy/LARIS outputs must be **replayable**.
- Must preserve: **actor, mode, policy version, input graph versions, evidence refs, KG version, Learner Graph version, Frontier version, TSS policy version, explanation draft, forbidden claims, uncertainty, and boundary flags**.
- Creator must be able to **reconstruct why** a prompt/explanation existed in real time and after 100 years.

---

## 25. Federation boundary

- **No Buddy/LARIS output is federation export.**
- No explanation, prompt, recommendation, frontier, learner weakness, misconception, confidence, KG ref, evidence ref, TSS output, engine ref, or LARIS interpretation enters ObservationRecord.
- Federation remains **lossy/non-semantic**.
- Widening requires **separate governance/HLD/LLD/tests**.

---

## 26. Runtime implementation boundary

- This PR has **no runtime implementation**.
- Future runtime must implement activation modes **explicitly**.
- Runtime must **default to inactive**.
- Runtime must include a **kill switch / deactivation**.
- Runtime must preserve **all boundaries and replay metadata**.

---

## 27. Rollback and deactivation model

| Aspect | Definition |
|--------|------------|
| Deactivation trigger | any boundary breach (see triggers below) |
| Rollback scope | revert to a lower safe mode or Mode 0 |
| Blocked modes | all modes above the safe baseline until re-gated |
| Preserved records | activation audit + replay metadata retained immutably |
| Creator replay note | record reason, mode, version at deactivation time |
| Federation impact | none; nothing was exported |

**Triggers:**

- boundary leak
- false mastery claim
- learner-state mutation without evidence path
- engine-as-oracle behavior
- Buddy impersonates learner rationale
- LARIS silent activation
- federation export risk
- missing replay metadata

---

## 28. Safety and misuse cases

| Case | Risk | Blocked by | Required safe behavior |
|------|------|-----------|------------------------|
| Buddy claims mastery | false certification | forbidden-claims guard; ADR-004 | refuse; state uncertainty |
| Buddy says learner intended something | rationale impersonation | ADR-005; reality-sharing | attribute to system, not learner |
| Buddy ignores P0/P1 warning | unsafe advice | TSS invariant | surface warning first |
| Buddy exposes engine line as truth | engine-as-oracle | ADR-007; engine policy | present as reference, not truth |
| Buddy turns KG ref into evidence | evidence inflation | KG boundary flags | cite as concept, not evidence |
| LARIS activates through Buddy | silent activation | mode gate; separation | block; require LARIS gate |
| Frontier recommendation treated as command | false authority | LF boundary | present as suggestion |
| Learner Graph confidence treated as mastery | mastery inflation | LG boundary | present as confidence band |
| Semantic data leaks to federation | sovereignty breach | withholding guard | block + log |
| Creator cannot replay reason | continuity break | replay metadata requirement | block persistence without metadata |

---

## 29. Acceptance gates

**Buddy activation gates:**

- BLAP-001 accepted
- TSS runtime implementation exists
- TSS tests pass
- KG/LG/LF read models accessible with versions
- ExplanationDraft policy implemented
- Buddy forbidden-claims guard implemented
- Creator replay metadata attached
- federation withholding guard passes
- rollback/deactivation implemented

**LARIS activation gates:**

- Buddy activation proven safe
- cross-domain continuity model exists
- LARIS-specific HLD exists
- LARIS-specific LLD/UML exists
- Creator replay validated across domains
- explicit governance approval
- no federation widening
- deactivation path implemented

---

## 30. Future LLD / OOP / UML path

Future classes:

- `BuddyActivationPolicy`
- `BuddyMode`
- `BuddyInputBundle`
- `BuddyExplanationDraft`
- `BuddyForbiddenClaimsGuard`
- `BuddyOutputRecord`
- `LarisActivationPolicy`
- `LarisMode`
- `CrossDomainContinuityRef`
- `DomainTransferPolicy`
- `ActivationGateResult`
- `ActivationAuditRecord`
- `DeactivationDecision`
- `MentorRuntimeBoundaryGuard`
- `RealitySharingPolicy`
- `CreatorReplayEnvelope`

Future LLD must define constructors, methods, parameters, return types, domain events, state transitions, error cases, persistence model, and UML. **This PR creates none of these.**

---

## 31. Future runtime wave path

- **PR 27+:** read-only TSS runtime projection
- later: ExplanationDraft builder
- later: Buddy read-only explanation draft mode
- later: Buddy guarded mentor prompt mode
- later: Buddy learner-confirmed reflection mode
- later: LARIS HLD/LLD, still inactive
- later: LARIS controlled activation

---

## 32. Open questions

| ID | Question |
|----|----------|
| **BLAP-OQ-1** | What is the first safe Buddy runtime mode? |
| **BLAP-OQ-2** | Should Buddy require learner confirmation before any output is recorded? |
| **BLAP-OQ-3** | What exact guard blocks forbidden claims? |
| **BLAP-OQ-4** | How should uncertainty be presented in the UI? |
| **BLAP-OQ-5** | What is the kill-switch mechanism? |
| **BLAP-OQ-6** | What evidence threshold allows Buddy to mention a misconception? |
| **BLAP-OQ-7** | What runtime event records Buddy output? |
| **BLAP-OQ-8** | What must Creator store for 100-year replay of a Buddy prompt? |
| **BLAP-OQ-9** | What cross-domain artifact is needed before LARIS? |
| **BLAP-OQ-10** | What tests are required before any activation? |

---

## 33. Recommendation

- Accept **BLAP-001** as Draft Activation Plan.
- Keep Buddy **inactive** until runtime gates are implemented.
- Keep LARIS **inactive**.
- Proceed next to **Android + Chrome strategy**, unless Buddy activation design needs refinement.
- Do **not** implement activation yet.

---

## 34. Governance boundary statement

**BLAP-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, or **LARIS activation**.

It creates a **human-readable activation plan only**.
