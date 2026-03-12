# 🧠 Gemini — Project Constitution

> This file is LAW. All schemas, rules, and architectural decisions are defined here.
> Update only when: a schema changes, a rule is added, or architecture is modified.

---

## Project Identity
- **Name:** _TBD (awaiting Discovery)_
- **North Star:** _TBD_
- **Owner:** Moustafa

## Data Schema

### Input Shape
```json
{
  "_comment": "Pending — define after Discovery Questions are answered"
}
```

### Output Shape (Payload)
```json
{
  "_comment": "Pending — define after Discovery Questions are answered"
}
```

## Integrations
| Service | Purpose | Key Ready? |
|---------|---------|------------|
| _TBD_   | _TBD_   | ❌         |

## Behavioral Rules
1. _Pending Discovery answers_

## Architectural Invariants
1. All business logic is deterministic (no LLM inference in tools/)
2. `.env` holds all secrets — never hardcoded
3. `.tmp/` for intermediates — ephemeral, deleteable
4. SOPs in `architecture/` are updated BEFORE code changes
5. Payload is only "done" when it reaches its final cloud destination

## Maintenance Log
| Date | Change | Reason |
|------|--------|--------|
| 2026-03-12 | Initialized Constitution | Protocol 0 |
