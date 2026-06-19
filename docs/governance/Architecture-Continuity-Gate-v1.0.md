# Architecture Continuity Gate v1.0

| Field | Value |
|-------|-------|
| **Document ID** | ACG-001 |
| **Title** | Architecture Continuity Gate v1.0 |
| **Version** | 1.0 |
| **Status** | Accepted Governance Rule |
| **Date** | 2026-06-17 |
| **Scope** | Governance acceptance gate / architecture continuity rule |
| **Applies to** | all future governance, review, HLD, LLD, UML, runtime, Buddy, federation, corpus, Creator, Android, Chrome, and continuity artifacts |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, ADR-E003, CCCR v1.0, SCCR-001, SCC-HLD-001, CRR-001, CSV-001, MCRM-001, OTWP-001, LTCW-001, [FEDERATION.md](../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

- This is an **Accepted Governance Rule**.
- It does **not** implement runtime.
- It does **not** modify schemas.
- It does **not** create LLD or UML.
- It does **not** activate **LARIS**.
- It defines a **mandatory acceptance gate** for future artifacts.

---

## Executive summary

- ChessGuide / ChessBuddy work must **not** fragment into isolated documents.
- Every artifact must show **how it fits the full continuity chain**.
- The system must preserve not only current implementation correctness but also **long-horizon semantic intelligibility**.
- A future reader, steward, Buddy, Creator process, or replay system must understand **why** a concept exists, **how** it is governed, **how** it could be implemented, and **how** state changes remain immutable and interpretable.

---

## The continuity chain

```text
Filosofi / læringsteori
→ Governance / ADR
→ Review / HLD
→ LLD / OOP / UML
→ Immutable state transitions
→ Runtime implementation
→ ChessBuddy / ChessGuide reality sharing
→ Creator serving from real-time to 100-year replayable semantic continuity
```

---

## Why this gate exists

Without this gate:

- Governance can become **detached from implementation**.
- HLD can become **detached from OOP/LLD**.
- LLD can become **detached from learning theory**.
- Runtime can **mutate state without preserving meaning**.
- Buddy can **overclaim learning/mastery**.
- Federation can **leak semantics**.
- Creator can **lose historical interpretability**.

---

## Philosophical / learning-theory layer

- **LearningTrace is evidence and custody, not learning.**
- Learning is **integration achieved**.
- **Activity is not learning.**
- Puzzle solving is activity **unless transformed into evidence by governed mechanisms**.
- **Corpus labels are not understanding.**
- Mastery is **stable high capacity through continuity**, not task completion.
- Learning development should be interpretable through **path formation, path strength, path potency, flow, transformation threshold, and mastery**.

---

## Governance / ADR layer

Each artifact must cite the relevant ADRs and explain:

- What boundaries apply.
- What must not be collapsed.
- Which doctrine controls the artifact.
- Whether the artifact **changes** doctrine or only **depends on** it.

| ADR | Boundary |
|-----|----------|
| **ADR-001** | Episode / LearningTrace boundary |
| **ADR-002** | `corpus_ref` / sovereign reference boundary |
| **ADR-003** | EvidenceRecord boundary |
| **ADR-004** | Claim / stewardship boundary |
| **ADR-005** | DecisionTrace boundary |
| **ADR-006** | Buddy pedagogy boundary |
| **ADR-007** | Stockfish / System Chess Competence boundary |
| **ADR-008** | Corpus Reference Registry / source governance boundary |
| **ADR-E003** | Universal Knowledge Framework — cross-surface observation/evidence/claim/knowledge boundary |

---

## Review / HLD layer

- Every LLD/runtime artifact must **identify its upstream review/HLD**.
- Every governance doc that prepares implementation must **name likely downstream HLD/LLD**.
- HLD must define **responsibilities, context boundaries, dependencies, and non-goals**.

---

## LLD / OOP / UML layer

Future LLDs must specify:

- Classes
- Interfaces
- Composition
- Inheritance if used
- Functions / methods with parameters and return types
- Value objects
- Aggregate roots if relevant
- Domain events
- State transitions
- Error cases
- UML package / class / sequence diagrams where relevant

**Rules:**

- HLD that **cannot be lowered** to LLD/OOP/UML is **incomplete**.
- LLD that **cannot trace back** to philosophy/governance/HLD is **incomplete**.

---

## Immutable state transition layer

- Every state-changing design must define **immutable events** or **append-only records**.
- Mutations must be expressed as **new events/versions/snapshots**, not silent overwrite.
- Corrections **create new versions**.
- Deprecated refs **remain resolvable**.
- Derived views must be **distinguishable from source-of-truth events**.
- Creator continuity must be able to **replay or interpret historical states**.

---

## Runtime implementation layer

- Runtime changes must **identify the governed concept** they implement.
- Runtime must **not introduce doctrine silently**.
- Runtime must **not widen federation export** unless explicitly governed.
- Runtime must be **testable**.
- Runtime must **preserve existing behavior** unless migration explicitly says otherwise.
- Runtime must **not turn labels into learner state, evidence, claims, or mastery** without governed transition.

---

## ChessBuddy / ChessGuide reality-sharing layer

- **ChessGuide** is the learner-facing and system-facing **reality surface**.
- **ChessBuddy** is a **pedagogical agent**, not an oracle or steward by default.
- Buddy may cite governed refs **only within boundaries**.
- Buddy must distinguish:
  - learner statement
  - system observation
  - engine reference
  - corpus reference
  - pedagogical explanation
  - claim
  - evidence
  - mastery
- Buddy must **not impersonate learner rationale**.
- Buddy must **not treat puzzle completion or opening recognition as mastery**.
- Buddy must respect **P0–P5 safety priority**.

---

## Creator continuity layer

- Creator must serve **semantic continuity from real-time to long-horizon replay**.
- Artifacts must preserve **versioned references, source IDs, curation status, and boundary flags**.
- Do **not flatten** governed records into free text when identity matters.
- Historical refs must remain interpretable after **renames, deprecations, schema changes, and runtime migrations**.
- The system must support **100-year replayable semantic continuity**.

---

## Federation boundary layer

- Federation export must remain **lossy and non-semantic** unless explicitly changed by governance.
- ObservationRecord must **not leak**:
  - `corpus_ref`
  - `source_refs`
  - learner evidence
  - claims
  - mastery
  - Buddy private rationale
  - cross-walk metadata
  - opening labels
  - puzzle themes
- Any widening requires an **explicit ADR/HLD/LLD/test path**.

---

## Required Architecture Continuity Gate section in future artifacts

Every future substantial artifact must include a section titled **`## Architecture Continuity Gate`** with subsections:

- Philosophy / learning theory
- Governance / ADR
- Review / HLD
- Future LLD / OOP / UML
- Immutable state transitions
- Runtime implementation
- ChessBuddy / ChessGuide reality sharing
- Creator continuity
- Federation boundary

For small docs, a **concise table format** is allowed.

---

## Required final-report checklist

Cursor final reports for future artifacts must include:

- Architecture Continuity Gate present: yes/no
- Philosophy / learning theory covered: yes/no
- Governance / ADR covered: yes/no
- Review / HLD covered: yes/no
- Future LLD / OOP / UML path covered: yes/no
- Immutable state transitions covered: yes/no
- Runtime implementation boundary covered: yes/no
- ChessBuddy / ChessGuide reality sharing covered: yes/no
- Creator continuity covered: yes/no
- Federation boundary covered: yes/no
- Any layer missing: yes/no
- If missing, explain why and whether acceptable.

---

## Acceptance criteria

A future artifact **passes** if:

- It states its philosophical / learning-theory premise.
- It cites controlling ADR/governance.
- It names upstream review/HLD or downstream expected HLD/LLD.
- It can be lowered to LLD/OOP/UML if implementation-bound.
- It preserves immutable state semantics.
- It defines runtime boundary.
- It defines ChessBuddy/ChessGuide reality-sharing boundary.
- It defines Creator continuity boundary.
- It preserves federation boundary.
- It does **not** silently widen scope.

---

## Rejection criteria

**Reject** or require a **micro-pass** if:

- Any major layer is missing without justification.
- It treats activity as learning.
- It treats source labels as doctrine.
- It treats `corpus_ref` as evidence.
- It treats puzzle solve / opening recognition as mastery.
- It mutates state silently.
- It widens federation export silently.
- It introduces runtime behavior from a governance doc.
- It creates LLD/UML/runtime without HLD trace.
- It cannot explain Creator continuity.
- It cannot survive 100-year semantic replay.

---

## Relationship to corpus governance

- ACG-001 applies to **ADR-008, CRR-001, CSV-001, MCRM-001, OTWP-001, LTCW-001** and all future corpus artifacts.
- Corpus refs, source refs, themes, openings, motifs, tactics, plans, principles, and tablebase references must **preserve boundaries**.

---

## Relationship to Tactical Safety Scanner / SCC LLD

- The **Tactical Safety Scanner / SCC LLD** is the first high-risk document where ACG-001 must be **fully enforced**.
- It must define **classes, methods, state transitions, UML, and runtime boundaries**.
- It must preserve **P0–P5, Buddy boundary, Stockfish boundary, federation boundary, and Creator continuity**.

---

## Relationship to Buddy / LARIS activation

- Buddy/LARIS activation is **not allowed without an explicit ACG pass**.
- **LARIS remains inactive** unless governance explicitly activates it.
- Activation must define **reality-sharing, authority, state transitions, and Creator continuity**.

---

## Relationship to Android / Chrome strategies

- **Android Vision Strategy** and **Chrome Extension Strategy** must pass ACG **before implementation**.
- They must **not weaken** custody, evidence, federation, or Buddy authority boundaries.
- Client strategy must preserve **Creator continuity and immutable event semantics**.

---

## Migration / adoption plan

| Phase | State |
|-------|-------|
| **Phase 0** | Existing docs may lack explicit ACG sections |
| **Phase 1** | ACG-001 applies to **new artifacts** |
| **Phase 2** | Major future HLD/LLD docs must include **full ACG** |
| **Phase 3** | Existing key docs may receive **ACG addenda when touched** |
| **Phase 4** | Runtime PR templates may include ACG checklist later |

---

## Risks / anti-patterns

- Philosophy without implementation path.
- Implementation without philosophy.
- HLD without LLD path.
- LLD without immutable events.
- Runtime without governance.
- Buddy as oracle.
- Federation as semantic export.
- Creator continuity flattened to prose.
- 100-year replay broken by rename/delete/mutation.

---

## Open questions

| ID | Question |
|----|----------|
| **ACG-OQ-1** | Should this become a PR template checklist? |
| **ACG-OQ-2** | Should existing ADRs receive ACG addenda? |
| **ACG-OQ-3** | What is the minimum ACG form for small docs? |
| **ACG-OQ-4** | Should UML be mandatory for all LLDs? |
| **ACG-OQ-5** | How should Creator validate 100-year continuity mechanically? |
| **ACG-OQ-6** | Should federation tests include semantic leak checks? |
| **ACG-OQ-7** | Should Buddy prompts include explicit ACG guardrails? |
| **ACG-OQ-8** | Should LARIS activation require separate ACG review? |

---

## Governance boundary statement

**ACG-001 does not modify** runtime, tests, federation export, schemas, implementation files, **accepted ADRs**, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, or **LARIS activation**.

It creates a **human-readable governance acceptance gate** for future architecture continuity.
