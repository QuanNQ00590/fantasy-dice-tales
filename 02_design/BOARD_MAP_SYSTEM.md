---
doc_id: board_map_system
version: 0.1.0
status: draft
owner: game_design
last_updated: 2026-04-27
---

# Board Map System

## Purpose

The board map is the core gameplay surface. It replaces the old slot-machine reward surface and becomes the place where players make progress, discover content, and experience short fantasy events.

## Board Topology Options

### Option A: Linear Chapter Board

Description:

- Player moves along a mostly linear path.
- Easy to teach.
- Strong pacing control.

Pros:

- Best for prototype.
- Easy to balance.
- Easy to author.

Cons:

- Lower agency.
- Can feel repetitive if tile variety is weak.

### Option B: Branching Board

Description:

- Path has junctions where player chooses route.

Pros:

- Adds light strategy.
- Lets players chase reward types.

Cons:

- Harder to balance.
- Needs route preview UI.

### Option C: Loop Board

Description:

- Player circles a board and completes laps.

Pros:

- Good for event boards and milestone loops.

Cons:

- Less discovery if not refreshed.

### Recommended Prototype

Use `Linear Chapter Board + limited branch nodes`.

Reason:

- Keeps production simple while proving agency through occasional route choice.

## Board Unit

Board consists of:

- Region
- Chapter
- Segment
- Node
- Tile
- Path connection

Suggested hierarchy:

`Region -> Chapter Board -> Segment -> Node`

## Node Data Schema

| Field | Type | Description |
|---|---|---|
| node_id | string | Unique node identifier |
| region_id | string | Region owning node |
| chapter_id | string | Chapter board |
| index | int | Order in path |
| tile_type | enum | Tile behavior |
| reward_table_id | string | Reward reference |
| event_id | string | Optional event/encounter |
| next_node_ids | string[] | Path connections |
| is_hidden | bool | Hidden until discovered |
| is_checkpoint | bool | Saves segment progress |
| visual_theme | string | Tile visual variant |

## Tile Types V1

| Tile Type | Purpose | Player Feeling | Notes |
|---|---|---|---|
| coin | Soft currency reward | Safe gain | Common |
| dice | Refill roll resource | Continue playing | Valuable |
| chest | Larger reward | Anticipation | Milestone tile |
| encounter | Light challenge | Risk/reward | Avoid complex combat first |
| story | Narrative beat | Charm | Short text only |
| trader | Spend/convert | Choice | Optional |
| material | Upgrade resource | Progress | Tied to landmarks |
| event_token | Liveops progress | Event motivation | Event-only if needed |
| mystery | Random tile | Surprise | Use carefully |
| gate | Unlock requirement | Goal | Requires stars/key/material |

## Segment Completion

A segment completes when:

- Player reaches a checkpoint/chest/gate.
- Segment objective is fulfilled.

Segment rewards:

- Chest progress
- Star
- Map unlock
- Landmark material
- Character fragment

## Region Themes

Starter region candidates:

1. Greenvale
   - Bright forest, villages, mushrooms, bridges, small ruins.

2. Emberfall
   - Cozy volcanic valley, orange glow, black rocks, fire sprites.

3. Moonmarsh
   - Blue-purple swamp, glowing plants, frogs, mist.

4. Cloudspire
   - Floating islands, windmills, sky bridges.

Prototype recommendation:

- Start with `Greenvale`.

## Board Readability Rules

- Player token must always be visible.
- Next 6-10 nodes should be readable.
- Current objective must be visible.
- Rare/special tiles must have distinct silhouettes.
- Branch choice must show preview reward category.

## Risks

- Too many tile types early will confuse players.
- Too many random outcomes will reduce trust.
- Too little route choice will make board feel like a disguised progress bar.
