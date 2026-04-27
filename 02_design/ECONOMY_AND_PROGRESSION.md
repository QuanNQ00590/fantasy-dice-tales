---
doc_id: economy_and_progression
version: 0.1.0
status: draft
owner: game_design
last_updated: 2026-04-27
---

# Economy And Progression

## Economy Goal

The economy should make each roll feel useful while keeping map completion paced enough for retention.

Unlike the previous slot-based design, the dice board economy must be controlled through:

- Dice supply
- Board reward EV
- Tile distribution
- Map completion costs
- Event reward caps
- Optional spend acceleration

## Core Currencies

| Currency | Role | Source | Sink |
|---|---|---|---|
| dice | Roll fuel | Regen, tiles, rewards, shop, events | Roll |
| coin | Soft currency | Tiles, chests, encounters, idle, events | Landmark upgrades, shop |
| gem | Premium currency | IAP, rare reward, events | Dice packs, premium items |
| star | Map progression | Segment/chapter completion | Gate unlocks |
| material | Landmark/character upgrade | Tile/chest/event | Upgrades |
| event_token | Liveops progress | Event tiles/missions | Event milestones/shop |

## Primary Sources

- Dice regen
- Dice tile
- Coin tile
- Chest tile
- Encounter reward
- Segment completion
- Daily reward
- Event milestone
- RV reward
- IAP bundle

## Primary Sinks

- Roll cost
- Landmark upgrade
- Gate unlock
- Trader/shop offer
- Character upgrade
- Event shop

## Progression Axes

Skill progression:

- Learn tile meanings, route choices, dice item timing.

Content progression:

- Unlock new board segments, chapters, regions.

Power progression:

- Upgrade landmarks or helper characters that improve reward/control.

Collection progression:

- Characters, relics, stickers, region discoveries.

Cosmetic progression:

- Token skins, dice skins, board decorations.

## Prototype Progression

Prototype should include:

- 1 region
- 1 chapter board
- 30-50 nodes
- 8-10 tile types
- 3 segment chests
- 1 gate/unlock moment
- 1 lightweight encounter
- 1 upgrade sink

## Board EV Controls

Board economy is controlled by:

- Tile distribution
- Reward table per tile
- Dice earned on board
- Chests per segment
- Encounter risk/reward
- Completion bonus

Important derived metrics:

- Coin per roll
- Dice refund per roll
- Progress per roll
- Coin per board segment
- Rolls to complete segment
- Rolls to hit chest
- Rolls to reach gate

## Suggested Early Targets

These are draft targets for first prototype tuning:

| Metric | Target |
|---|---:|
| First session rolls | 20-40 |
| Normal session rolls | 10-20 |
| Dice refund rate | 10-25% of rolls |
| First segment completion | 5-8 minutes |
| First upgrade | Within first session |
| First region completion | Not in prototype unless testing long loop |

## Pacing Risks

- Too many dice rewards: content burn.
- Too few dice rewards: blocked sessions.
- Too much coin: upgrade sink irrelevant.
- Too little coin: board feels unrewarding.
- Too many mystery tiles: player loses agency.
- Too many negative tiles: board feels punitive.

## Required Tracking

- `dice_source`
- `dice_spend`
- `board_tile_land`
- `tile_reward_result`
- `board_segment_complete`
- `board_gate_blocked`
- `upgrade_intent`
- `upgrade_result`
- `dice_empty`
- `quit_context`
