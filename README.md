# Fantasy Dice Tales

Working title: `Fantasy Dice Tales`  
Status: V0/V1 pre-production draft  
Created: 2026-04-27  
Source context: new project direction based on board-game dice movement, fantasy theme, cartoon-border art style.

## Product Direction

`Fantasy Dice Tales` is a mobile casual adventure board game where players roll dice to travel across a fantasy map, trigger tile events, collect resources, clear encounters, unlock story regions, and build long-term progression through characters, landmarks, and seasonal maps.

Reference intent:

- Board movement and map exploration similar in spirit to Mini Tales-style dice board progression.
- Casual readability and fast sessions.
- Fantasy world with cartoon-border visual identity.
- Dice-driven exploration instead of slot-machine core gameplay.

## Folder Structure

- `00_meta`: project manifest, assumptions, open questions.
- `01_strategy`: brief, product strategy, audience, monetization.
- `02_design`: GDD, systems, board map, dice, economy, UI, art/audio.
- `03_data`: draft tables and tunable data schemas.
- `04_tracking`: behavioral, economy, and progression telemetry.
- `05_production`: roadmap and prototype scope.
- `06_references`: references, open questions, glossary.
- `07_prototype`: playable prototype builds and test scripts.
- `08_handoff`: role-based handoff entry points for downstream teams.

## Immediate Goal

Create a clean pre-production package for the new gameplay direction without modifying the original Atlantis Fortune files.

## Key Docs

- [Project Brief](01_strategy/PROJECT_BRIEF.md)
- [GDD Master](02_design/GDD_MASTER.md)
- [Core Loop And Systems](02_design/CORE_LOOP_AND_SYSTEMS.md)
- [Board Map System](02_design/BOARD_MAP_SYSTEM.md)
- [Dice System](02_design/DICE_SYSTEM.md)
- [Economy And Progression](02_design/ECONOMY_AND_PROGRESSION.md)
- [Tracking Plan](04_tracking/TRACKING_PLAN.md)
- [Playable Web Prototype](07_prototype/web/index.html)

## Handoff By Team

Use these entry points when sharing the package with other teams:

- Product / Production: [Handoff Index](08_handoff/HANDOFF_INDEX.md)
- Game Design: [Design Handoff](08_handoff/DESIGN_TEAM_HANDOFF.md)
- Engineering / Prototype: [Engineering Handoff](08_handoff/ENGINEERING_TEAM_HANDOFF.md)
- Art / Audio / UI: [Art And UX Handoff](08_handoff/ART_UX_TEAM_HANDOFF.md)
- Data / Analytics: [Analytics Handoff](08_handoff/ANALYTICS_TEAM_HANDOFF.md)

## Implementation Readiness

Use these docs once the GDD package is considered complete and teams are moving into execution:

- [Implementation Readiness Checklist](05_production/IMPLEMENTATION_READINESS_CHECKLIST.md)
- [Decision Log](00_meta/DECISION_LOG.md)
- [Delivery Checklist](08_handoff/DELIVERY_CHECKLIST.md)
