# Federation Constitution v0.1

**Status:** Draft (FC-0.1)  
**Date:** 2026-06-02  
**Package alignment:** `federation-canon-1.0.0` / `1.0.1` (Observation phase only)  
**Evidence base:** FGI-R1, BFR-1, FFR-1, FCA-X1, FCI-3a, `federation/README.md`, `FEDERATION.md`

---

## Article I — Identity

### §1.1 What the federation is

The **federation** is a **sovereignty-preserving continuity interchange** — a named set of contracts, registries, conformance tiers, and constitutional principles that allow independent domains to exchange **frozen observations** and **read-only references** without sharing interpretation stores.

**Genus:** Interchange constitution.  
**Differentia:** Forbids central canon and cross-sovereign write.

### §1.2 What problem federation solves

| Problem | Federation response | Evidence |
|---------|----------------------|----------|
| Domains cannot compare continuity across boundaries | Shared `ObservationRecord` envelope + `sovereign_id` | `federation/schemas/observation/` |
| Observation confused with interpretation | Opaque `payload` + separate derive layers | FFR-1; BioChronos ADR-016 (BFR-1) |
| Silent merge of conflicting views | `FederationRef` read-only; no federation DB of truth | FFR-1 §1 |
| Unverifiable “understanding” claims | Future CTP/CTV trace and validation contracts | CTP-1, CTV-1 (review); not shipped in `federation/` yet |

### §1.3 What the federation is not

The federation is **not**:

- A platform runtime, orchestrator, or shared database (FFR-1; `federation/README.md`)
- Creator, BioChronos, or any single sovereign domain (`FEDERATION.md`: Creator is reference impl, not platform)
- A biological, narrative, economic, or civic truth authority
- A recommendation engine, coach, therapist, or governance legislature
- A substitute for domain `process_daily()`, myth graph, ledger, or constitution

---

## Article II — Domain sovereignty

### §2.1 Doctrine

Each **sovereign domain** owns:

1. **Operational SSOT** for its lifeworld observations  
2. **Interpretation pipelines** (scoring, rules, reasoning, narrative)  
3. **Replay engines** and version pins  
4. **Ontology field semantics** inside opaque payloads  
5. **UX, visualization, and navigation metaphor**  
6. **Stewardship decisions** on promotion to canon  

The federation owns **shapes and rules of interchange** only.

### §2.2 Evidence by domain (FGI-R1 / BFR-1)

| Owned by domain forever | Example evidence |
|-------------------------|------------------|
| Creator narrative canon | `NarrativeUnit`, Neo4j `OWNS` (FGI-R1) |
| BioChronos biology | `DailyInput` fields, `process_daily()` (BFR-1 domain-sovereignty) |
| BioChronos EG1.4–1.6 lab | `ContinuityTerrain`, emergent ecology (BFR-1) |
| Finkairos economic objects | FCA-1 matrix |
| Domosofi constitutional prose | FCA-1 |

---

## Article III — Federation authority limits

The federation **shall not**:

| Prohibited act | Rationale |
|----------------|-----------|
| Define domain truth or meaning | BFR-1 ADR-020; FGI-R1 Narrative row |
| Define domain ontology field semantics inside `payload` | `federation/README.md`: payload opaque |
| Execute interpretation or scoring | FCI-3a: BioChronos rejects scores in export |
| Prescribe recommendations or recovery | BFR-1 `Action.RECOVER`; corridor `prescriptive: false` |
| Centralize replay or rewrite history | OAT-X1 `history_rewritten: false`; BFR-1 replay-readiness |
| Require import of another domain’s runtime | FCI-3a: no Creator `app/oat` in BioChronos |
| Operate as hidden governance or optimization | EG1.6 `optimization_applied: false` pattern (BFR-1) |

---

## Article IV — Primitives

### §4.1 Classification (repository-grounded)

| Primitive | Class | Shipped in `federation/`? |
|-----------|-------|---------------------------|
| **ContinuityEnvelope** | Foundational | ✅ |
| **ObservationRecord** | Foundational | ✅ |
| **FederationRef** | Foundational | ✅ |
| **OAT semantics** (observe→attend→transform) | Foundational | Schema partial; full OAT 1.1.0 planned |
| **CTP / ContinuityTrace** | Capable | ❌ review only |
| **CTV / ValidationRun** | Capable | ❌ review only |
| **REA / KF** | Capable | ❌ review only |
| **DTE / DialogueTurn** | Capable | ❌ review only |
| Domain payloads, graphs, scores | Domain-specific | N/A |

---

## Article V — Contracts

A **federation contract** is a versioned schema or registry entry that is:

| Property | Requirement |
|----------|-------------|
| **Portable** | Validatable without domain runtime |
| **Domain-neutral** | Envelope independent of payload semantics |
| **Replay-safe** | Does not require mutating sovereign observation SSOT |
| **Sovereignty-preserving** | Requires `sovereign_id`; forbids cross-write |
| **Ambiguity-preserving** | Checksum + provenance; no forced single interpretation |

**Phase 1.0.x contract in repo:** `oat/observation/1.0.0` only (`federation/README.md`).

---

## Article VI — Observation doctrine

### §6.1 Federation-safe observation

**Observation transports continuity** — what was registered, when, under which sovereign, with what provenance and checksum.

Evidence:

- `ObservationRecord` + `ContinuityEnvelope` schemas  
- BioChronos: `DailyRecord.input_json` immutable on recompute (`governance/recompute.py` cited in BFR-1)  
- Creator: OAT `oat_observation_records` (`architecture/oat_runtime.md`)

### §6.2 Interpretation remains local

**Interpretation remains domain-sovereign** — scores, recommendations, myth graph, claims, navigation metaphor.

Evidence:

- FCI-3a excludes `scores_json` from federation export  
- FFR-1 ownership matrix: federation schema, domain payload  
- BFR-1: `stability_observation.ObservationEvent` ≠ federation Observation

---

## Article VII — Replay doctrine

| May participate in federation | Must remain sovereign |
|------------------------------|------------------------|
| Pinned `schema_version`, rules version **metadata** on export | `replay_range()` execution |
| Future `ValidationRun` **reference** by id | `ReplayReport` as biological truth |
| Future CTP `validation_run_refs[]` | Chronology verify algorithms |

BioChronos replay strength is **domain asset** consumed by future CTV — not federation-owned replay (BFR-1 §5).

---

## Article VIII — Standardization

### §8.1 Emergence path

```text
Review spec (CTP-1, CTV-1, …)
  → JSON Schema in federation/
  → Registry rows (FCR process)
  → Two+ sovereign T3 normative fixtures
  → Federation Standard declaration
```

### §8.2 Anti-premature standardization

- **Reject** CTP as Standard v1 before dual T3 Observation (FGI-R1 ctp-review; BFR-1 ctp-readiness)  
- **Reject** claiming `federation-canon-1.0.1` complete while FCR-2 registry gap open (FGI-R1)  
- **Reject** EG lab exports as interchange (BFR-1)

---

## Article IX — Ethics

| Obligation | Source |
|------------|--------|
| Transparency of emergence | FGI-R1 emergence safety |
| No simulated agency | OAT/EG engine return flags |
| Unknown > false certainty | BioChronos ADR-020 #9 (BFR-1) |
| Continuity safety — navigability not authority | BFR-1 `continuity-safety.md` |
| Conformance honesty (T1/T2/T3) | FFR-1c |

---

## Article X — Anti-centralization

Constitutional protections against:

1. **Federation authority drift** — “Creator hosts federation folder” ≠ platform (Article I)  
2. **Ontology centralization** — `sig.*` / `dom.*` stay in domain YAML  
3. **Replay centralization** — no federation re-derive service  
4. **Schema domination** — payload profiles per sovereign in registry  
5. **Interpretation capture** — opaque payload rule immutable  
6. **Contract imperialism** — new profiles require registry PR + version bump  

---

## Article XI — Ratification note

v0.1 is **draft** for participant alignment before FCI-3b (BioChronos first export). Ratification does not require code — requires **documented assent** per sovereign `FEDERATION.md` participant statement.

---

## Article XII — Supremacy

Where this constitution conflicts with informal practice, **this constitution governs interchange intent**. Where it conflicts with a sovereign domain constitution (e.g. BioChronos ADR-020), **sovereign biological/epistemic law wins inside that domain**; federation law governs **cross-boundary export only**.
