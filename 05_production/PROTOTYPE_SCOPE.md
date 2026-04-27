---
doc_id: prototype_scope
version: 0.1.0
status: draft
owner: production
last_updated: 2026-04-27
---

# Prototype Scope

## Prototype Goal

Validate whether the dice-board loop is understandable, fun, and repeatable.

Core question:

- Does the player want to roll again after resolving a tile?

## In Scope

- One fantasy region: Greenvale
- One chapter board
- 30-50 nodes
- Normal dice
- Dice resource
- 8-10 tile types
- Basic rewards
- One simple upgrade sink
- One chest milestone
- One gate or checkpoint
- First-session tutorial
- Basic telemetry

## Out Of Scope

- Full liveops
- IAP tuning
- Complex combat
- Social attack/steal
- Multiple regions
- Deep character builds
- Advanced dice inventory
- PvP

## Prototype Success Criteria

- Players understand Roll within 3 seconds.
- Players understand landing tile result without external explanation.
- 70%+ complete first 10 rolls.
- 60%+ complete first board segment.
- Less than 15% quit during loading/tutorial.
- Dice empty state is understood.
- Designers can adjust board nodes and tile rewards in data.

## Build Order

1. Static board scene
2. Dice roll and token movement
3. Tile landing result
4. Reward delivery
5. Dice resource spend/refill
6. Segment checkpoint/chest
7. Upgrade sink
8. Tutorial
9. Tracking
10. Balance pass
