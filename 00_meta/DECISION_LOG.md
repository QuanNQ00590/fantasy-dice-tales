---
doc_id: decision_log
version: 0.1.0
status: draft
owner: production
last_updated: 2026-04-27
---

# Decision Log

## Purpose

Track decisions that move an open question into an implementation-ready answer.

Use this log to prevent teams from implementing different interpretations of the same system.

## Status Keys

- `Open`: not decided
- `Decided`: approved and ready to implement
- `Changed`: previously decided, then revised

## Decision Table

| ID | Topic | Decision | Status | Owner | Date | Impacted Docs |
|---|---|---|---|---|---|---|
| D-001 | Board topology | Linear chapter board with limited branch nodes for prototype | Decided | Design | 2026-04-27 | `02_design/BOARD_MAP_SYSTEM.md`, `05_production/PROTOTYPE_SCOPE.md` |
| D-002 | Starter region | Greenvale is the first playable region for prototype and visual direction | Decided | Design / Art | 2026-04-27 | `02_design/BOARD_MAP_SYSTEM.md`, `02_design/ART_AUDIO_DIRECTION.md`, `05_production/PROTOTYPE_SCOPE.md` |
| D-003 | Prototype platform | Web prototype remains the primary validation reference for the board loop | Decided | Product / Engineering | 2026-04-27 | `07_prototype/web/README.md`, `05_production/PROTOTYPE_SCOPE.md` |

## Active Open Decisions To Close Before Full Team Execution

| ID | Topic | Needed From | Blocking Teams |
|---|---|---|---|
| D-004 | Branch choice rules | Design | Engineering, UX |
| D-005 | Dice influence model | Design / Product | Engineering, Economy |
| D-006 | Encounter resolution model | Design | Engineering, UX, Audio |
| D-007 | First upgrade sink | Product / Design | Engineering, Art, Analytics |
