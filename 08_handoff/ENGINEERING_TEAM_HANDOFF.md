---
doc_id: engineering_team_handoff
version: 0.1.0
status: draft
owner: product_design
last_updated: 2026-04-27
---

# Engineering Team Handoff

## Engineering Mission

Implement a prototype that proves the board loop is understandable, responsive, and tunable without overbuilding production systems.

## Read In This Order

1. [Project Manifest](../00_meta/PROJECT_MANIFEST.md)
2. [Prototype Scope](../05_production/PROTOTYPE_SCOPE.md)
3. [GDD Master](../02_design/GDD_MASTER.md)
4. [Core Loop And Systems](../02_design/CORE_LOOP_AND_SYSTEMS.md)
5. [Board Map System](../02_design/BOARD_MAP_SYSTEM.md)
6. [Dice System](../02_design/DICE_SYSTEM.md)
7. [Board Data Schema](../03_data/BOARD_DATA_SCHEMA.md)
8. [Tracking Plan](../04_tracking/TRACKING_PLAN.md)
9. [Web Prototype README](../07_prototype/web/README.md)
10. [Playable Web Prototype](../07_prototype/web/index.html)

## Engineering Expectations

- keep board configuration data-driven where possible
- support simple iteration on nodes, tile types, rewards, and pacing
- instrument prototype-critical events only
- avoid production-grade architecture that slows validation

## Minimum Inputs Required Before Engineering Starts

- `board topology` is decided and documented
- `tile types` and `tile behaviors` are locked for the current milestone
- `reward sources and sinks` are defined for the prototype loop
- `board data schema` is approved as implementation baseline
- `tracking P0 events` are approved by product and analytics
- `prototype scope` is signed off by production

## Immediate Questions For Engineering Review

- which systems should remain hardcoded for prototype speed
- minimum save/progression persistence needed for testing
- prototype runtime target and platform constraints
- handoff path from web prototype to future production client
