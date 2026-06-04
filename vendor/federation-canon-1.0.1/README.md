# Federation Canon 1.0.1

Read-only contract package for federated continuity: JSON Schemas, registries, golden fixtures, and standalone conformance validation.

**Release tag:** `federation-canon-1.0.1`

## What this package is

- **ContinuityEnvelope** and **Provenance** (`schemas/common/`)
- **ObservationRecord** (`schemas/observation/`)
- **FederationRef** (`schemas/references/`)
- **Registries** for `continuity_id_type`, `payload_profile`, and `source_type`
- **Golden fixtures** (Creator normative + BioChronos example)
- **Conformance** script for ObservationRecord (T1–T3 path)

## What this package is not

- Not a runtime, service, database, or Neo4j integration
- Not domain payload canon (payload bodies are opaque objects)
- Not Attention, REA, Knowledge, Transformation, or Validation schemas (later canon releases)
- Not Creator `app/oat/` code — domains **validate against** this package; they do not import it as a shared runtime

## Participant path

1. Pin git ref `federation-canon-1.0.1` (or `federation-canon-1.0.0` for Creator/BioChronos-only registry; schemas identical).
2. Emit or map domain observations to `ObservationRecord`.
3. Run `tests/conformance/validate_observation.py` on fixtures or mapped output.
4. Reach T3 with a sovereign-specific normative golden fixture:
   - **Creator:** `fixtures/golden/creator_readme_observation.v1.json`
   - **BioChronos:** `biochronos/tests/fixtures/federation/biochronos_normative_user_day.v1.json` (sovereign repo; FCI-3b)
5. Cross-sovereign validation: [docs/reviews/fci-3c/](../docs/reviews/fci-3c/) (FCI-3c).

See `VERSIONS.md` for schema version matrix and `CHANGELOG.md` for release notes.

## Constitution (draft)

- [FEDERATION-CONSTITUTION-v0.1.md](./constitution/FEDERATION-CONSTITUTION-v0.1.md) — sovereignty, contracts, anti-centralization (FC-0.1)
- [FEDERATION-PRINCIPLES-v0.1.md](./constitution/FEDERATION-PRINCIPLES-v0.1.md) — ten principles
- Review: [docs/reviews/fc-0.1/](../docs/reviews/fc-0.1/)
