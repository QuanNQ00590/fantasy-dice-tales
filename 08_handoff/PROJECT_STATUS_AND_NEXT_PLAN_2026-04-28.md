---
doc_id: project_status_and_next_plan
version: 0.1.0
status: active
owner: design_prototype_handoff
last_updated: 2026-04-28
source_project: Fantasy Dice Tales
---

# Fantasy Dice Tales: Current Status and Next Plan

## Purpose

This document records the current project state, completed work, prototype direction, open gaps, and the recommended next execution plan.

This file is intended to function as a handoff log for design, art, UI/UX, client, and production stakeholders.

## Executive Summary

The project has moved away from a generic land-based board prototype and is now aligned to a hybrid direction:

- Core run loop based on `Mini Tales`
- Meta shell, system feeling, and UI inspiration based on `Atlantis Fortune`
- Theme changed to `fantasy / ocean adventure`
- Player traversal changed from `walking on land` to `sailing a ship between islands`
- Runtime target for current prototype changed from `landscape board demo` to `mobile portrait prototype`

The playable prototype currently supports:

- Portrait mobile shell
- Sea overworld with island selection
- Island expedition run
- Orthogonal square-grid node path only
- Fog of war showing the next `3` nodes
- Event scene overlays
- Basic progression between islands
- Functional smoke test automation

## Current Product Direction

### High-Level Game Vision

The current direction is:

- The player progresses through a larger ocean overworld
- Each major island represents a self-contained run
- Each run uses node-based dice traversal
- The player rolls dice, moves through adjacent nodes, and triggers scenes
- Rewards from runs feed back into the broader harbor/meta progression

### Core Hybrid Model

The project is currently structured around this split:

- `Mini Tales` provides:
  - dice-driven movement loop
  - node progression pacing
  - event interruption structure
  - run-based board exploration
- `Atlantis Fortune` provides:
  - meta shell feeling
  - resource HUD discipline
  - progression presentation
  - economy and tracking thinking
  - overall screen hierarchy inspiration

### Current Theme Direction

- Genre tone: fantasy adventure
- World framing: sea voyage / island exploration
- Movement fantasy: ship travel
- Macro environment: ocean overworld
- Micro environment: island node routes

## Work Completed So Far

### 1. Documentation and Structure Review

Completed:

- Compared existing project structure against the reference documentation structure in `D:\BoardGame Project`
- Evaluated which structure is more suitable for pre-production and cross-team handoff
- Confirmed need to standardize toward a stronger GDD/pre-production documentation format
- Read the current project content to identify what the game already has conceptually

Outcome:

- The project is now moving toward a more handoff-ready documentation mindset rather than an isolated prototype-only mindset

### 2. Reference Research

Completed:

- Studied `Mini Tales` reference material
- Studied `Atlantis Fortune` folder contents and extracted useful patterns
- Confirmed `Atlantis Fortune` is not being treated as gameplay core, but as meta/UI/system reference
- Confirmed `Mini Tales` remains the base reference for board traversal and event pacing

Reference conclusions:

- `Mini Tales` is the correct model for the playable run loop
- `Atlantis Fortune` is the correct model for shell, economy framing, and feature layering

### 3. Prototype Direction Reset

Completed:

- Removed the previous horizontal-first assumption
- Reoriented the prototype to `mobile portrait`
- Reframed the world from land exploration to sea exploration
- Reframed player movement from hero-on-foot to ship traversal
- Simplified interaction goals toward:

`roll -> move -> trigger event`

Outcome:

- The prototype direction is now narrower, clearer, and closer to production intent

### 4. Prototype Refactor

Completed inside `07_prototype/web`:

- Rebuilt `index.html`
- Rebuilt `styles.css`
- Rebuilt `game.js`
- Updated `test_prototype.py`

Current implemented screens:

- Overworld screen
- Expedition screen
- Full-screen event scene overlay

Current implemented gameplay structure:

- Island selection from overworld
- Enter expedition
- Roll dice
- Move forward along a predefined path
- Trigger event on landing
- Resolve event scene
- Reach finish node
- Return to overworld

### 5. Board Rules and Visibility Rules

Completed:

- Path now follows square-grid logic
- No diagonal movement
- Nodes connect only by orthogonal adjacency
- Path is currently linear for prototype simplicity
- Fog of war reveals only the next `3` nodes ahead

Outcome:

- The board logic is now aligned with the requested node-rule constraints

### 6. Event Flow Upgrade

Completed:

- Replaced overly simple tile popups with more scene-like event handling
- Added distinct event resolution behavior
- Added branching interaction for battle scenes
- Added compact purchase choices for shop scenes
- Added reward resolution for passive scenes
- Added route completion handling at finish nodes

Current event categories implemented:

- `start`
- `coin`
- `story`
- `encounter`
- `chest`
- `shrine`
- `shop`
- `finish`

Battle flow currently supports:

- `Scout`
- `Charge`
- secondary tactical choice after `Scout`

### 7. Visual Direction Pass

Completed:

- Moved the prototype shell toward a stronger Atlantis-like mobile framing
- Added sea/ocean visual language
- Added ship-based presence on overworld and expedition
- Switched away from a desktop-like board presentation
- Reduced redundant UI controls
- Cleaned the mobile portrait hierarchy

Most recent cleanup:

- Removed the decorative bottom nav that was blocking map/board readability
- Kept the primary CTA only where needed
- Improved portrait spacing and safe-area behavior

### 8. Testing and Validation

Completed:

- Updated smoke test for portrait mobile flow
- Verified expedition start works
- Verified board renders with expected node count
- Verified path remains orthogonal and linear
- Verified forced dice roll debug flow works
- Verified scene overlay can be resolved
- Verified return-to-overworld flow works

Current validation status:

- `python test_prototype.py` passes

## Current Prototype Scope

### Implemented Prototype Features

- Mobile portrait shell
- Resource HUD
- Story/objective header
- Overworld island selection
- Ship token on sea map
- Island preview and reward summary
- Expedition run screen
- Dice roll interaction
- Ship movement token on board
- 14-node island route
- Fog-of-war reveal window
- Event scene overlays
- Island completion progression
- Unlock condition for a later island
- Debug hooks through `window.gameDebug`

### Current Prototype Files

Primary working files:

- `07_prototype/web/index.html`
- `07_prototype/web/styles.css`
- `07_prototype/web/game.js`
- `07_prototype/web/test_prototype.py`

Generated validation images currently present:

- `07_prototype/web/portrait_home_v2.png`
- `07_prototype/web/portrait_expedition_v2.png`
- `07_prototype/web/portrait_scene.png`

## Current Known Limitations

The prototype is directionally correct, but not yet production-ready.

### Design Gaps

- No final GDD structure has been fully written yet
- No system-by-system production spec exists yet
- Event taxonomy is still prototype-level, not content-ready
- Meta loop exists only conceptually, not as a defined implementation spec

### Gameplay Gaps

- Board path is still a controlled linear route, not yet a richer route structure
- No full battle system, only scene-based decision resolution
- No persistent inventory/loadout layer
- No companion/crew system implemented yet
- No true session progression loop across multiple runs

### Meta Gaps

- Harbor progression is only represented textually
- No build/upgrade feature is implemented yet
- No collection system is implemented yet
- No task/mission/live-ops layer is implemented yet
- No server-backed economy exists

### UI/UX Gaps

- Overworld still needs stronger route readability and more production-level polish
- Event scenes need stronger differentiation per scene type
- Reward/result states can be clearer after resolution
- No full navigation map for all future screens yet

### Technical Gaps

- No persistence
- No backend integration
- No data-driven content schema yet
- No telemetry pipeline beyond lightweight in-memory event logs
- No build pipeline or deployment packaging defined in this prototype folder

## Current State Assessment

### What Is Stable Enough Right Now

- Core prototype direction
- Portrait mobile framing
- Mini Tales inspired run loop
- Ocean/island theme pivot
- Orthogonal node rule
- Fog visibility rule
- Basic event trigger structure

### What Is Not Yet Stable

- Full feature scope
- Meta system definitions
- Production economy structure
- Content scale plan
- Final UI architecture
- Final technical architecture

## Recommended Next Plan

The next phase should focus on converting the current prototype direction into a real production foundation.

### Phase 1: Documentation Lock

Priority: highest

Deliverables:

- Full GDD skeleton
- Game loop definitions
- Meta loop definitions
- Event taxonomy
- Economy overview
- Content module list
- Role-based handoff structure for:
  - design
  - UI/UX
  - art
  - client
  - backend
  - data/tracking

Goal:

- Ensure all teams can build from a shared source of truth after pre-production

### Phase 2: Prototype Gameplay Consolidation

Priority: high

Deliverables:

- Stronger overworld route presentation
- Better ship travel feedback
- Cleaner expedition readability
- More differentiated event scenes
- Improved result states after battle/shop/reward events
- Standardized island-run flow from entry to completion

Goal:

- Make the prototype feel like one coherent product instead of a stitched reference merge

### Phase 3: Meta System Definition

Priority: high

Deliverables:

- Harbor/home progression spec
- Build/upgrade system spec
- Currency source/sink design
- Collection/relic/crew progression spec
- Unlock progression map

Goal:

- Translate Atlantis-inspired layer into actual implementable systems

### Phase 4: Data and Technical Foundation

Priority: medium-high

Deliverables:

- Board configuration schema
- Event configuration schema
- Reward table schema
- Tracking event schema
- Save-state model
- Client-side state flow definition

Goal:

- Remove ambiguity before engineering implementation scales

### Phase 5: Art and UI Production Handoff

Priority: medium-high

Deliverables:

- Screen map
- UI component inventory
- Asset list by screen
- Environment art list
- Node/event visual requirements
- Motion and FX guidance

Goal:

- Let art/UI proceed without blocking on unclear prototype interpretation

## Immediate Next Actions Recommended

Recommended execution order:

1. Write the production-facing GDD skeleton
2. Write the feature/module breakdown by team
3. Define the meta progression model
4. Define the event content structure
5. Refine the prototype visuals and flow to match the written specs

## Suggested Team Handoff Package

The project should next produce a package with the following documents:

- `Game Overview`
- `Core Loop Spec`
- `Meta Loop Spec`
- `Event System Spec`
- `Economy Spec`
- `UI Flow Spec`
- `Art Direction Brief`
- `Tracking Spec`
- `Prototype Build Notes`

## Full Work Log

### Log Summary

This section records the major work already performed in chronological project order.

### Historical Log

1. Reviewed existing project documentation structure and compared it against the reference board game documentation structure.
2. Evaluated which document structure is more suitable for pre-production and later handoff to implementation teams.
3. Standardized the project direction toward a more complete GDD/handoff mindset.
4. Read the current project content to understand what gameplay and systems already existed conceptually.
5. Started prototype direction changes around a dice-board model.
6. Shifted the prototype toward a `Mini Tales` style node-based exploration loop.
7. Requested stronger event flow and less UI clutter.
8. Enforced square-matrix adjacency rules with no diagonal movement.
9. Pulled and used AssetRipper-related materials to inspect reference content.
10. Studied `Mini Tales` extracted references for scene structure, board style, and event flow clues.
11. Studied `Atlantis Fortune` folder for UI shell, meta systems, economy framing, and tracking discipline.
12. Defined the hybrid vision:
    - Mini Tales for gameplay core
    - Atlantis Fortune for meta systems and UI shell
13. Pivoted thematic framing from land exploration to ship-based island exploration.
14. Reframed the world into an overworld sea map plus local island runs.
15. Rewrote the prototype into a portrait mobile shell.
16. Added overworld and expedition screen separation.
17. Added orthogonal 14-node island route logic.
18. Added fog of war with `3` nodes of forward visibility.
19. Added event scene overlays and branching battle flow.
20. Added shop, shrine, story, treasure, and finish flow handling.
21. Added island progression and partial unlock logic.
22. Updated smoke tests for portrait flow and board validation.
23. Captured validation screenshots for home, expedition, and scene states.
24. Removed decorative bottom navigation that interfered with mobile readability.
25. Rechecked portrait layout and confirmed the smoke test still passes.

## Current Decision Log

These decisions should be treated as active unless replaced by later design review.

- Runtime demo target is `mobile portrait`
- Core gameplay remains `dice roll -> move -> trigger event`
- Board path rule is `orthogonal adjacency only`
- Player vision rule is `show only the next 3 nodes`
- Macro exploration is `ship on sea overworld`
- Micro exploration is `island node board`
- Theme is `fantasy / ocean adventure`
- Meta/UI direction is `Atlantis Fortune inspired`
- Core board/event pacing direction is `Mini Tales inspired`

## Recommended File Ownership Next

Suggested next documentation targets:

- `02_design` for GDD and feature specs
- `03_data` for schema design
- `04_tracking` for event definitions
- `05_production` for milestone and pipeline planning
- `08_handoff` for stakeholder summaries and decision logs

## Status Conclusion

The project has successfully completed its direction reset and first meaningful playable prototype refactor.

The most important thing completed is not just the prototype itself, but the convergence on a clearer product identity:

- mobile portrait
- sea/island fantasy adventure
- Mini Tales core traversal loop
- Atlantis Fortune meta and UI influence

The next critical milestone is to turn this direction into a formal, modular, handoff-ready production document set.
