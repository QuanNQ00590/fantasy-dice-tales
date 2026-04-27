---
doc_id: dice_system
version: 0.1.0
status: draft
owner: game_design
last_updated: 2026-04-27
---

# Dice System

## Purpose

Dice are the core action trigger. They create anticipation, movement, reward variance, and session pacing.

## Core Rules

- Base dice rolls from 1 to 6.
- One roll consumes one dice resource unless modified.
- Dice result moves the player token exactly that many nodes.
- Landing tile resolves after movement completes.
- Board may include branch choice before movement if a junction is reached.

## Dice Resource

Working options:

### Option A: Energy As Roll Fuel

- 1 roll = 1 energy
- Energy regenerates over time

Pros:

- Familiar F2P model.

Cons:

- Less thematically tied to board game.

### Option B: Dice Tokens

- 1 roll = 1 dice
- Dice regenerate or are rewarded

Pros:

- Stronger fantasy board identity.

Cons:

- Needs careful naming and economy clarity.

### Recommendation

Use `Dice` as the player-facing resource. Internally it can behave like energy.

## Dice Types

| Dice Type | Function | Use Case | Monetization Risk |
|---|---|---|---|
| normal_dice | Random 1-6 | Default action | Low |
| fixed_dice | Choose exact result | Route targeting | Medium |
| range_dice | Result within 1-3 or 4-6 | Controlled randomness | Medium |
| double_dice | Move twice or roll two dice | Faster progress | Medium |
| lucky_dice | Higher chance to hit rare tile | Event/offer | High |
| event_dice | Works only on event board | Liveops | Medium |

Prototype:

- Only normal dice.
- Add fixed dice if branch/targeting needs validation.

## Dice Feel

Required feedback:

- Dice shake
- Result reveal
- Token anticipation
- Node-by-node movement
- Landing impact

Timing target:

- Roll animation: 0.6-1.0s
- Movement: 0.12-0.2s per node
- Landing feedback: 0.3-0.6s

## Fairness Rules

- Dice odds must be transparent internally.
- Do not manipulate results invisibly to force monetization.
- FTUE forced dice results must be tracked with `is_forced_result`.
- Special dice must clearly explain their behavior.

## Data Schema

| Field | Type | Description |
|---|---|---|
| dice_id | string | Dice definition |
| display_name | string | Player-facing name |
| result_min | int | Minimum result |
| result_max | int | Maximum result |
| result_weights | map | Optional weighted outcomes |
| cost_type | enum | dice, gem, item |
| cost_amount | int | Cost to use |
| board_restriction | string | Optional event/region |
| is_premium | bool | Monetization flag |

## Balance Metrics

- Rolls per session
- Rolls per day
- Dice earned per day
- Dice spent per day
- Average nodes moved per day
- Board completion per dice spent
- Fixed dice use rate
- Dice shortage quit rate

## Risks

- If dice supply is too low, users quit before loop forms.
- If dice are too abundant, content burns too fast.
- If fixed dice are too common, board randomness disappears.
- If dice feel rigged, trust drops quickly.
