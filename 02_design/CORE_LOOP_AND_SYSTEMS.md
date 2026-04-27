---
doc_id: core_loop_and_systems
version: 0.1.0
status: draft
owner: game_design
last_updated: 2026-04-27
---

# Core Loop And Systems

## Core Gameplay Loop

Player intent:

- "I want to roll and see what happens next on the map."

Input:

- Tap Roll
- Optional: choose dice item, path branch, tile action, or reward claim

System response:

- Dice rolls
- Player token moves along board nodes
- Landing tile triggers event

Feedback:

- Dice animation
- Token movement
- Tile reveal/result panel
- Reward burst
- Map progress update

Reward:

- Coins
- Dice/energy
- Gems
- Map stars
- Event tokens
- Character fragments
- Chest progress
- Landmark progress

Next decision:

- Roll again
- Spend currency
- Choose path
- Claim/upgrade
- Enter event board
- Exit session

## Session Loop

| Step | Player action | System output | Reward / cost |
|---|---|---|---|
| 1 | Open map | Current board, objective, dice balance | Context |
| 2 | Tap Roll | Dice result and token movement | Spend dice/energy |
| 3 | Land on tile | Tile event starts | Event opportunity |
| 4 | Resolve tile | Reward, encounter, choice, or mini-result | Coins/resources/progress |
| 5 | Spend or continue | Build/upgrade/unlock or roll again | Meta progression |

## Primary Systems

### Dice Movement

- Dice result determines node movement.
- Base dice: 1-6.
- Optional special dice later:
  - Fixed dice
  - Range dice
  - Double dice
  - Lucky dice
  - Event dice

### Board Map

- Map is made of nodes and paths.
- Each node has a tile type.
- Some nodes are hidden until reached.
- Some junctions allow route choice.

### Tile Event System

Tile type defines what happens after landing.

Initial tile categories:

- Coin
- Dice/Energy
- Chest
- Encounter
- Story
- Shop/Trader
- Upgrade material
- Event token
- Mystery
- Empty/safe tile

### Reward Delivery

- Reward should be immediate and legible.
- Every roll should produce at least feedback, even if reward is small.
- High-value rewards should tie to map landmarks/chests, not only random tiles.

### Map Progression

- Complete segment objectives.
- Unlock region gates.
- Fill collection/book entries.
- Repair/upgrade fantasy landmarks.

## Secondary Systems

Tutorials:

- First roll
- First tile
- First reward
- First upgrade
- First branch
- First encounter

Daily hooks:

- Daily dice refill
- Daily board mission
- Login chest

Social/leaderboards:

- Later only. Prototype should not depend on social.

Collection/mastery:

- Character collection
- Relics
- Map stickers
- Region completion stars

Accessibility:

- Clear dice result
- Readable tile icons
- Low motion option
- Color + icon pairing

## Failure Points

Rule ambiguity:

- Player may not understand why they landed on a tile or what the tile does.

Readability overload:

- Board may become too dense if every tile has detail.

Input friction:

- Too many confirmations after every tile can slow the loop.

Balance instability:

- Dice supply and board reward EV can create either too much progression or hard stalls.

Content fatigue:

- Repeating the same tile events without variation will make rolling feel mechanical.
