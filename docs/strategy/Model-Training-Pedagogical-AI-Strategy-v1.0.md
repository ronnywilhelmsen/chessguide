# Model Training / Pedagogical AI Strategy v1.0

| Field | Value |
|-------|-------|
| **Document ID** | MTPAI-STRAT-001 |
| **Title** | Model Training / Pedagogical AI Strategy v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Strategy |
| **Date** | 2026-06-18 |
| **Scope** | model-training, local prototype, pedagogical AI, and ML governance strategy only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](../architecture/Knowledge-Graph-v1.0.md), [LG-001](../architecture/Learner-Graph-v1.0.md), [LF-001](../architecture/Learning-Frontier-v1.0.md), [TSS-SCC-LLD-001](../architecture/Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [ANDROID-STRAT-001](./Android-Vision-Strategy-v1.0.md), [CHROME-STRAT-001](./Chrome-Extension-Strategy-v1.0.md), [ChessGuide-LLD-v1.0](../architecture/ChessGuide-LLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- MTPAI-STRAT-001 is a **Draft Strategy**.
- It creates **no training code**.
- It creates **no runtime**.
- It creates **no datasets**.
- It downloads **no models**.
- It fine-tunes **no models**.
- It does **not** activate Buddy or LARIS.
- It defines a **future governed model-training lane only**.

---

## 2. Executive summary

- ChessGuide should **not rely only on Stockfish**.
- Stockfish is a **reference lane**, not a teacher or learning model.
- **python-chess** can provide deterministic legal-move/rule validation.
- **TSS/SCC** provides governed safety-first system competence.
- A future ML lane may learn **chess patterns, CCT language, and pedagogical response formats**.
- A future pedagogical model may support **Buddy**, but **only** through governed outputs and activation gates.
- **Local Python prototypes** are useful as experiments, **not runtime authority**.

---

## 3. Strategic question

**How can ChessGuide use ML/fine-tuning as a legitimate additional competence lane without collapsing Stockfish, deterministic rules, SCC/TSS, Buddy, learner evidence, claims, mastery, Creator continuity, or federation boundaries?**

By separating **deterministic rule validation, engine reference, governed SCC/TSS classification, model-based pattern generation, and pedagogical response generation** into distinct lanes with typed custody, validation, replay, and strict authority boundaries.

---

## 4. Why not Stockfish-only

- Stockfish is excellent for **tactical/evaluation reference**.
- Stockfish is **not a pedagogue**.
- Stockfish does **not know learner state**.
- Stockfish does **not produce governed learning claims**.
- Stockfish does **not explain conceptual gaps safely** by itself.
- Stockfish should **not be the only source** of "chess competence" in ChessGuide.
- A model-training lane can learn **human-game patterns, explanatory language, CCT structure, and pedagogical scaffolding**.
- This lane is a **supplement, not a replacement**.

---

## 5. Model-lane separation

- **Model 1:** chess competence / policy / pattern lane.
- **Model 2:** pedagogical explanation / instruction-following lane.
- Neither is **Buddy**.
- Neither is **TSS/SCC**.
- Neither is **Stockfish**.
- Neither is **Learner Graph**.
- Neither **certifies mastery**.
- Both require **validation before runtime**.

---

## 6. What this strategy is not

- not pretraining execution
- not fine-tuning execution
- not runtime model integration
- not dataset ingestion
- not source download
- not a model artifact
- not Buddy activation
- not LARIS activation
- not engine replacement
- not a claim system
- not a mastery system
- not federation widening
- not Android/Chrome implementation

---

## 7. Governance foundation

| Source | Relevance to model training | Strategy consequence |
|--------|-----------------------------|----------------------|
| **ADR-001** | LearningTrace evidence/custody | training data is not LearningTrace |
| **ADR-002** | corpus_ref sovereign reference | KG labels are pointers, not proof |
| **ADR-003** | evidence records | training data / model output ≠ evidence |
| **ADR-004** | claims / stewardship | model confidence ≠ mastery |
| **ADR-005** | DecisionTrace | model ≠ learner rationale |
| **ADR-006** | Buddy pedagogy | pedagogical model ≠ Buddy authority |
| **ADR-007** | Stockfish / SCC boundary | engine reference, not teacher truth |
| **ADR-008** | KG / corpus governance | labels honour curation/source |
| **ACG-001** | architecture continuity | ML lane preserves full chain |
| **STRR-001** | roadmap controller | strategy only; runtime later |
| **CGSR-002** | strategic identity | ML is a lane, not doctrine |
| **KG-001** | domain graph | concept anchors, not evidence |
| **LG-001** | learner-specific derived state | model cannot mutate learner state |
| **LF-001** | planning read model | frontier may inform prompts only |
| **TSS-SCC-LLD-001** | safety scanner design | TSS guards model output |
| **BLAP-001** | activation plan | Buddy/LARIS gated |
| **ANDROID-STRAT-001** | Android strategy | no local ungoverned model authority |
| **CHROME-STRAT-001** | Chrome strategy | no live-game model advice |
| **FEDERATION.md** | federation withholding | no model output exported |

---

## 8. Architecture Continuity Gate

| Layer | ML / pedagogical AI interpretation | Boundary | Future consequence |
|-------|-------------------------------------|----------|--------------------|
| Philosophy / learning theory | model scaffolds learning, is not learning | model output ≠ learner proof | grounds lane separation |
| Governance / ADR | honours ADR-001–008 | doctrine beats runtime | guards encode ADR limits |
| Review / HLD | strategy traces to STRR/CGSR/SCC-HLD | strategy ≠ implementation | needs Model Training HLD next |
| Future LLD / OOP / UML | model services/guards named (§29) | design ≠ runtime | LLD/UML before training runtime |
| Immutable state transitions | dataset/model/prompt/eval versions | no silent mutation | replayable training lineage |
| Runtime implementation | none now; prototypes are sandbox | runtime after gates | guarded model-output service later |
| ChessBuddy / ChessGuide reality sharing | output → ExplanationDraft via guards | model ≠ Buddy authority | Buddy after BLAP gates |
| Creator continuity | generation provenance replayable | no flattening | 100-year model-output replay |
| Federation boundary | no training data/output exported | lossy ObservationRecord only | widening needs separate path |

---

## 9. Vertical Architecture Continuity Trace

| Layer | Model-training trace |
|-------|----------------------|
| Philosophy / learning theory | learning philosophy → model as scaffold, not learner proof |
| Governance / ADR | governance/ADR → training data is not evidence/claim/mastery |
| Review / HLD | HLD/reviews → ML is a lane, not doctrine |
| Future LLD / OOP / UML | future LLD/OOP/UML → model services and guards later |
| Immutable state transitions | immutable state → dataset versions, model versions, prompts, labels, evaluations, and outputs must be replayable |
| Runtime implementation | runtime → no runtime now |
| ChessBuddy / ChessGuide reality sharing | reality-sharing → model output can become ExplanationDraft only through guards |
| Creator real-time to 100-year continuity | Creator continuity → model generation provenance must be replayable |
| Federation boundary | federation → no training data/model output exported |

---

## 10. Epistemic lane model

| Lane | Purpose | Allowed inputs | Allowed outputs | Authority | Forbidden use | Validation requirement |
|------|---------|----------------|-----------------|-----------|---------------|------------------------|
| **1. Deterministic rules** | legal moves, check, mate, FEN/PGN | position/game | legality, board state | authoritative on rules | pedagogy, mastery | unit-tested rule engine |
| **2. Engine reference** | tactical eval / lines | position | eval, best line | reference only | teacher truth | snapshot versioned |
| **3. SCC/TSS governance** | safety-first classification | position, KG, engine ref | scan result, warnings | governed system competence | learner state | P0–P5 enforced |
| **4. Knowledge Graph** | governed concepts | curated concepts | concept refs | domain reference | evidence/mastery | curation/source posture |
| **5. Learner Graph** | derived learner state | evidence lineage | derived signals | learner-specific | corpus doctrine | evidence path + replay |
| **6. Learning Frontier** | planning read model | LG + KG | suggestions | recommendation | command/mastery | uncertainty preserved |
| **7. Model competence** | pattern/policy generation | PGN/FEN, patterns | candidate patterns | hypothesis only | rule/safety override | deterministic + TSS validation |
| **8. Pedagogical model** | explanation form | structured examples | explanation drafts | response form only | claim/mastery | forbidden-claims guard |
| **9. Buddy surface** | mentor surface | governed read models | ExplanationDraft | gated mentor | oracle/claim | BLAP gates |
| **10. Creator continuity** | replay/custody | full lineage | continuity records | custody | export | replay completeness |
| **11. Federation** | lossy export | ObservationRecord slice | lossy observation | export slice | semantic export | withholding guard |

---

## 11. Deterministic rules lane: python-chess

- `python-chess` can validate **legal moves, check, mate, board states, FEN/PGN mechanics**.
- It is suitable for **local prototypes** and future **deterministic validation**.
- It does **not** define pedagogy.
- It does **not** define mastery.
- It does **not** replace TSS/SCC governance.
- It **can support** CCT dataset generation.
- Prototype use is allowed only as **design reference** in this PR, **not runtime**.

---

## 12. Engine reference lane: Stockfish

- Stockfish provides strong **reference evaluation and line analysis**.
- It is **optional reference input**.
- It must **not become teacher truth**.
- **Engine-best is not learning-best.**
- Engine output may help validate **tactical correctness**, but not **pedagogical appropriateness**.
- Engine output is **not evidence/claim/mastery**.

---

## 13. System competence lane: TSS/SCC

- TSS/SCC gives **governed, safety-first classification**.
- **P0/P1 safety boundaries outrank pedagogical praise.**
- TSS/SCC is **system competence, not learner competence**.
- TSS/SCC can **supervise/validate dataset labels** later.
- TSS/SCC can act as a **guardrail for model outputs** later.

---

## 14. Model competence lane: pretraining / policy / pattern learning

- A future model may learn **PGN/FEN representation, legal-ish move patterns, tactical motifs, opening patterns, and human-game style**.
- Full pretraining from scratch is **expensive and out of scope**.
- The practical route is to **start from an existing open model** or use **small controlled experiments**.
- Policy/pattern model output must be **validated by deterministic and SCC/TSS lanes**.
- Model output **cannot override** legal-move validation.
- Model output **cannot override** TSS P0/P1.
- Model output **cannot override** federation or Buddy boundaries.

---

## 15. Pedagogical model lane: instruction fine-tuning

- A future pedagogical model may be **instruction-tuned** on structured examples.
- Examples may combine **FEN/PGN, CCT/safety-scan structure, tactical motif, explanation draft, uncertainty, and forbidden claims**.
- The pedagogical model learns **response form, not authority**.
- It may support **Buddy only after BLAP gates**.
- Fine-tuned responses are **not claims or mastery**.

---

## 16. Dataset generation strategy

- Raw sources may include **user-owned games, public PGN/FEN, Lichess puzzle data, curated examples, and synthetic TSS/CCT outputs**.
- **No data is downloaded in this PR.**
- Dataset records must be **versioned, source-attributed, and reproducible**.
- Each record must distinguish:
  - raw position/game input
  - deterministic rule validation
  - engine reference if used
  - TSS/SCC scan output
  - KG concept refs
  - pedagogical explanation
  - uncertainty
  - forbidden claims
  - source/provenance
- Dataset examples are **training material, not learner evidence**.

---

## 17. CCT / safety-scan training examples

The following is an **illustrative example only** — it is **not an executable dataset** and **no dataset file is created** in this PR:

```text
ILLUSTRATIVE ONLY — NOT A DATASET FILE
{
  "instruction": "Apply safety-first scan before suggesting a plan.",
  "input_fen": "<fen>",
  "candidate_move": "<san>",
  "deterministic_validation": {"legal": true, "in_check": false},
  "tss_scan": {"priority": "P2", "warnings": ["loose piece d5"]},
  "cct_signals": [{"move": "<san>", "kind": "capture"}],
  "kg_concept_refs": ["tactic:fork", "decision_frame:loose_pieces_drop_off"],
  "output_explanation": "Before attacking, note the loose piece on d5 ...",
  "uncertainty": "medium",
  "forbidden_claims": ["mastery", "learner_intent"],
  "source_provenance": "synthetic-tss",
  "creator_replay_metadata": {"policy_version": "...", "kg_version": "..."}
}
```

- CCT examples should follow **P0–P5 order**.
- If P0/P1 blocks, the model must **not praise a P5 plan**.
- Explanations must distinguish **safety, tactic, candidate, and learning focus**.

---

## 18. Fine-tuning strategy

- **SFT / instruction fine-tuning** as a future strategy.
- **LoRA / QLoRA** as a practical future technique.
- **Hugging Face TRL / PEFT / Accelerate** may be evaluated later.
- **Unsloth** may be evaluated later.
- Small models (**Qwen/Llama/Mistral class**) may be evaluated later, subject to **licensing and environment review**.
- **No library is added in this PR.**
- **No code is added in this PR.**
- **No model is downloaded in this PR.**
- **No training is run in this PR.**

---

## 19. Local prototype path

Future local prototype lane:

1. `python-chess` prototype for legal moves/check/mate/FEN/PGN.
2. deterministic CCT/safety scan prototype.
3. JSONL training-example generator.
4. small curated dataset.
5. offline fine-tuning experiment.
6. evaluation against deterministic and TSS/SCC guards.
7. no runtime promotion until governance/HLD/LLD/UML/tests.

- Local prototypes are **sandbox experiments**.
- They **cannot write learner state**.
- They **cannot be used by Buddy directly**.
- They **cannot export to federation**.
- They **cannot be trusted without validation**.

---

## 20. Validation and evaluation strategy

Future metrics:

- legal move correctness
- P0/P1 safety compliance
- hallucinated tactic rate
- engine-consistency where relevant
- TSS/SCC consistency
- KG concept accuracy
- forbidden-claim rate
- mastery-claim false positive rate
- learner-rationale impersonation rate
- explanation usefulness
- uncertainty calibration
- replay completeness
- federation leak prevention

---

## 21. Failure modes and guardrails

| Failure mode | Guardrail |
|--------------|-----------|
| model suggests illegal move | python-chess validation |
| model misses check | python-chess + TSS/SCC guard |
| model misses mate threat | TSS/SCC guard + engine reference comparison |
| model praises strategic plan despite P0/P1 block | P0/P1 safety guard |
| model treats engine-best as learning-best | TSS/SCC guard + ADR-007 |
| model claims mastery | forbidden-claims guard |
| model invents learner rationale | forbidden-claims guard + ADR-005 |
| model treats KG ref as evidence | KG boundary flags |
| model leaks semantic data to federation | federation withholding guard |
| model cannot provide provenance | Creator replay requirement |
| model overfits puzzle style | evaluation + human review |
| model produces confident false explanation | engine/TSS comparison + human review |

---

## 22. Buddy boundary

- The pedagogical model is **not Buddy**.
- Buddy may later use model outputs **only through ExplanationDraft policy**.
- Buddy must preserve **uncertainty and forbidden claims**.
- Buddy **cannot** certify mastery, create claims, write learner state, or impersonate learner rationale.
- **BLAP gates must pass first.**

---

## 23. Learner Graph / Learning Frontier boundary

- Training examples are **not learner graph updates**.
- Model predictions are **not learner graph updates**.
- Frontier recommendations may **inform prompt construction** later.
- Model **cannot mutate** Learner Graph or Learning Frontier.
- Any future projection requires an **explicit evidence path**.

---

## 24. Knowledge Graph boundary

- KG concept refs may be used as **supervised labels or explanation anchors**.
- KG refs are **not evidence**.
- Model **cannot create KG doctrine**.
- New concepts require **KG governance**.

---

## 25. Evidence / claim / mastery boundary

- Training data is **not evidence**.
- Model output is **not evidence**.
- Fine-tuned explanation is **not a claim**.
- Model confidence is **not mastery**.
- Claims require **stewardship**.
- Mastery requires **governed evidence and integration**.

---

## 26. Creator continuity boundary

Future model-generated outputs must preserve:

- model id
- model version
- adapter version
- dataset version
- prompt template version
- KG version
- TSS/SCC policy version
- deterministic validator version
- optional engine snapshot id
- inference parameters
- output text
- forbidden claims
- uncertainty
- replay metadata

Creator must be able to **reconstruct why a model output existed** in real time and after 100 years.

---

## 27. Federation boundary

- **No model output is federation export.**
- **No training example is federation export.**
- No dataset metadata, KG refs, TSS outputs, learner state, Buddy text, model confidence, or pedagogical explanation is ObservationRecord export.
- Federation remains **lossy/non-semantic**.
- Widening requires **separate governance/HLD/LLD/tests**.

---

## 28. Android / Chrome surface boundary

- Android and Chrome may later display model-supported explanations **only after governed runtime gates**.
- Android/Chrome **cannot run local ungoverned model authority**.
- Chrome must **never provide live-game advice**.
- Android must **not imply** live cheating or local mastery.
- Both require future **HLD/LLD/runtime** before model output is surfaced.

---

## 29. Future HLD / LLD / OOP / UML path

Future artifacts/classes:

- `ModelTrainingHLD`
- `DatasetGenerationPipeline`
- `ChessRuleValidator`
- `CCTDatasetGenerator`
- `TrainingExampleRecord`
- `DatasetVersion`
- `ModelTrainingRun`
- `ModelAdapterArtifact`
- `PedagogicalModelPolicy`
- `ModelOutputGuard`
- `IllegalMoveGuard`
- `P0P1SafetyGuard`
- `ForbiddenClaimsGuard`
- `ModelEvaluationReport`
- `ModelReplayEnvelope`
- `ModelPromotionGate`
- `BuddyModelOutputAdapter`

Future **HLD, LLD, OOP, UML, schemas, tests, and runtime gates are required before implementation**.

---

## 30. Future runtime wave path

- **PR #27:** strategy only
- future HLD for model-training lane
- future LLD/OOP/UML
- future prototype scripts under `sandbox/prototypes` only, **not runtime**
- future dataset schema
- future validation tests
- future local experiment
- future model-evaluation report
- future runtime guarded model-output service
- future Buddy integration **only after BLAP gates**

---

## 31. Rejection criteria

Reject if:

- strategy treats model as a Stockfish replacement
- strategy treats Stockfish as teacher truth
- strategy treats model output as evidence
- strategy treats model confidence as mastery
- strategy allows Buddy activation
- strategy allows LARIS activation
- strategy permits federation export of model outputs/training data
- strategy permits runtime code in this PR
- strategy permits local scripts in this PR
- strategy omits the python-chess deterministic lane
- strategy omits the TSS/SCC guard role
- strategy omits Creator replay of model outputs
- strategy omits Android/Chrome surface limits

---

## 32. Open questions

| ID | Question |
|----|----------|
| **MTPAI-OQ-1** | What is the first safe local prototype? |
| **MTPAI-OQ-2** | Which public datasets are license-compatible? |
| **MTPAI-OQ-3** | Should dataset generation start from puzzles, games, or curated micro-lessons? |
| **MTPAI-OQ-4** | How much engine reference is needed? |
| **MTPAI-OQ-5** | What exact python-chess validation must run? |
| **MTPAI-OQ-6** | What model family is acceptable for local experiments? |
| **MTPAI-OQ-7** | What hardware assumptions are allowed? |
| **MTPAI-OQ-8** | What evaluation threshold permits promotion? |
| **MTPAI-OQ-9** | What output guard blocks forbidden claims? |
| **MTPAI-OQ-10** | How is uncertainty calibrated? |
| **MTPAI-OQ-11** | How are model artifacts versioned? |
| **MTPAI-OQ-12** | How does Creator replay training lineage? |
| **MTPAI-OQ-13** | What Chrome/Android restrictions apply to model-supported outputs? |
| **MTPAI-OQ-14** | When may Buddy consume model output? |

---

## 33. Recommendation

- Accept **MTPAI-STRAT-001** as Draft Strategy.
- Treat ML/fine-tuning as a **future governed competence lane**.
- Do **not** implement training yet.
- Do **not** add scripts yet.
- The next step after acceptance should be a **Model Training HLD or a Prototype Governance Plan**, not runtime.

---

## 34. Governance boundary statement

**MTPAI-STRAT-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, model artifacts, training scripts, notebooks, or **LARIS activation**.

It creates a **human-readable strategy only**.
