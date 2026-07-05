# Creator Gateway ChessGuide Public Summary v1

ChessGuide owns this public summary contract and remains the source of truth for ChessGuide memory, runtime, validation, and learning state.

Creator may validate only the checked-in public summary artifact at `data/public/creator-gateway/chessguide-public-summary.v1.json`. Creator must not import ChessGuide source memory, private user data, private student data, learning session source data, browser captures, runtime DBs, secrets, write tools, MCP runtime, or Chrome Extension runtime.

thewilhelmsen.com may project only Creator-validated public-safe metadata. The website remains a projection surface and does not become source of truth for ChessGuide.

The allowed public-safe fields are:

- `project_identity`
- `public_learning_surface`
- `contract_status`
- `validation_command`
- `recommended_next_step`

Validation:

```sh
python scripts/creator_gateway_chessguide_public_summary.py
python -m pytest tests/unit/test_creator_gateway_chessguide_public_summary.py -q
```
