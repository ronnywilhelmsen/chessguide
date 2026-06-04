# ChessGuide

**A longitudinal skill development domain for chess** — observing, understanding, guiding, and improving **skill development over time**.

Identity: [CG-000 — ChessGuide Identity](docs/governance/chessguide/CG-000-chessguide-identity.md) · Vision: [CG-001 — Product Vision](docs/governance/chessguide/CG-001-product-vision.md)

Demo (legacy deployment): [chess.digre.com](https://chess.digre.com/)

---

## What is ChessGuide?

ChessGuide is **not** primarily a chess application. Chess is the domain; **learning is the mission**.

It is the **first operational skill-development domain** of the Continuity-Based Learning Platform — not an online chess server, a raw engine, or a tournament platform.

The current codebase is a legacy application (opening hints, engine suggestions, game history, clock) carried forward from extraction. Product identity and federation alignment are governed separately from implementation.

Per [CG-001 — Product Vision](docs/governance/chessguide/CG-001-product-vision.md): ChessGuide measures **learning**, not only games; it records **development**, not only outcomes — and asks *how did the player change?*

---

## Federation alignment

ChessGuide inherits federation alignment from the ChessBuddy governance lineage and establishes its own identity under **`docs/governance/chessguide/`**.

| Layer | Role |
|-------|------|
| **Continuity-Based Learning Platform** | Federation-wide architecture for learning over time |
| **Longitudinal Skill Development Domain** | ChessGuide’s federation identity — learning through **skill** |
| **ChessGuide** | Active development line and skill domain |
| **Laris** | Federation guide — longitudinal understanding of **learning** |

The learning chain: Reality → Observation → Attention → Understanding → Knowledge → Wisdom → Stewardship → Transformation.

Federation relationship: [CG-002 — Federation Relationship](docs/governance/chessguide/CG-002-federation-relationship.md) · Full alignment (inherited): [CB-000 — Federation Alignment](docs/governance/chessbuddy/CB-000-federation-alignment.md)

---

## Governance

| Location | Role |
|----------|------|
| **`docs/governance/chessguide/`** | ChessGuide identity and future product governance |
| **`docs/governance/federation/`** | Federation-wide research and semantics |
| **`docs/governance/chessbuddy/`** | Inherited reference artefacts (pre-identity extraction) |

### Federation

| Document | Title |
|----------|--------|
| [FCS-001](docs/governance/federation/FCS-001-federation-continuity-study.md) | Federation Continuity Study ✓ |
| [FDP-001](docs/governance/federation/FDP-001-federation-development-dependencies.md) | Federation Development Dependencies ✓ |
| [FDP-002](docs/governance/federation/FDP-002-federation-development-strategy.md) | Federation Development Strategy ✓ |
| [FDS-001](docs/governance/federation/FDS-001-dialogue-continuity-study.md) | Dialogue Continuity Study ✓ |
| [FGI-001](docs/governance/federation/grounding/FGI-001-INDEX.md) | Federation Grounding Interrogation (all projects) ✓ |
| [LEF-0A](docs/governance/federation/studies/LEF-0A-architectural-interpretation-validation.md) | Learning Epistemology — Architectural Interpretation Validation |
| [LEF-0B](docs/governance/federation/studies/LEF-0B-minimal-learning-explanation-experiment.md) | Minimal Learning Explanation Experiment |
| [LEF-0C](docs/governance/federation/studies/LEF-0C-explanation-artifact-hypothesis.md) | Explanation Artifact Hypothesis |
| [LEF-0D](docs/governance/federation/studies/LEF-0D-epistemic-placement-of-explanation-artifact.md) | Epistemic Placement of ExplanationArtifact |
| [LEF-0E](docs/governance/federation/studies/LEF-0E-integration-theory.md) | Integration Theory (LEF synthesis) |
| [LEF-1A](docs/governance/federation/studies/LEF-1A-operationalizing-explicit-integration.md) | Operationalizing Explicit Integration |

### ChessGuide

| Document | Title |
|----------|--------|
| [CG-000](docs/governance/chessguide/CG-000-chessguide-identity.md) | ChessGuide Identity ✓ |
| [CG-001](docs/governance/chessguide/CG-001-product-vision.md) | Product Vision ✓ |
| [CG-002](docs/governance/chessguide/CG-002-federation-relationship.md) | Federation Relationship ✓ |
| [CG-DEP-001](docs/governance/chessguide/CG-DEP-001-federation-dependency-analysis.md) | Federation Dependency Analysis ✓ |
| [CG-FLL-001](docs/governance/chessguide/CG-FLL-001-first-domain-learning-pilot.md) | First Domain Learning Pilot (FLL-1) ✓ |
| [CG-FLL-002](docs/governance/chessguide/CG-FLL-002-learning-semantics.md) | Learning Semantics ✓ |
| [CG-FLL-003](docs/governance/chessguide/CG-FLL-003-learning-continuity-semantics.md) | Learning Continuity Semantics ✓ |
| [CG-FLL-1E](docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md) | FLL-1 Execution Plan ✓ |

### Inherited reference (ChessBuddy lineage)

| Document | Title |
|----------|--------|
| [CB-000](docs/governance/chessbuddy/CB-000-federation-alignment.md) | Federation Alignment ✓ |
| [CB-001](docs/governance/chessbuddy/CB-001-product-vision.md) | Product Vision ✓ |
| [CB-000A](docs/governance/chessbuddy/CB-000A-longitudinal-learning-model.md) | Longitudinal Learning Model |
| [CB-002](docs/governance/chessbuddy/CB-002-longitudinal-skill-development-domain.md) | Longitudinal Skill Development Domain |
| [CB-003](docs/governance/chessbuddy/CB-003-roadmap-and-delivery-strategy.md) | Roadmap & Delivery Strategy |
| [CB-004](docs/governance/chessbuddy/CB-004-buddy-persona-and-product-principles.md) | Buddy Persona & Product Principles |
| [CB-005](docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md) | LearningTrace Product Schema |
| [CB-006](docs/governance/chessbuddy/CB-006-user-modes.md) | User Modes |
| [CB-007](docs/governance/chessbuddy/CB-007-physical-chess-and-amr-product-requirements.md) | Physical Chess & AMR Product Requirements |
| [ALP-1](docs/governance/chessbuddy/ALP-1-artifact-learning-pilot.md) | Artifact Learning Pilot (Reference experiment) ✓ |
| [ALP-2](docs/governance/chessbuddy/ALP-2-longitudinal-learning-model-pilot.md) | Longitudinal Learning Model Pilot (Meta-learning) |
| [ALP-3](docs/governance/chessbuddy/ALP-3-multi-artifact-learning-pilot.md) | Multi-Artifact Learning Pilot (FLL-0X Reference) ✓ |

---

## Development (legacy)

Technical setup and stack notes for the current codebase: [doc/dev.md](doc/dev.md) · [doc/overview.md](doc/overview.md)

---

## Credits

Inspired by [React chess with WASM bots (eddmann.com)](https://eddmann.com/posts/creating-a-react-based-chess-game-with-wasm-bots-in-typescript/).
