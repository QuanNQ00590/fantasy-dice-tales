---
doc_id: art_audio_direction
version: 0.1.0
status: draft
owner: art_direction
last_updated: 2026-04-27
---

# Art Audio Direction

## Visual Direction

Style family:

- Fantasy cartoon-border
- Storybook board game
- Soft 2D/2.5D mobile illustration

Shape language:

- Rounded silhouettes
- Bold readable outlines
- Chunky fantasy props
- Clear tile icons
- Expressive character tokens

Primary palette:

- Greenvale starter: fresh greens, warm yellows, sky blues, soft browns
- Avoid one-note palette by mixing foliage, stone, magic glow, cloth, and wood tones

Secondary palette:

- Magic accents: violet, cyan, gold
- Danger accents: crimson, ember orange
- Reward accents: gold, teal sparkle

Contrast rule:

- Player token, dice, current tile, and primary CTA must have strongest contrast.

Texture rule:

- Light painterly texture is allowed.
- Avoid noisy backgrounds under gameplay-critical tiles.

Background density rule:

- Board path remains readable at mobile scale.
- Decorative fantasy details should frame the board, not compete with nodes.

## UI Direction

Tone:

- Warm, playful, adventurous.

CTA treatment:

- Primary Roll button large and persistent.
- Dice icon integrated into button.
- Strong pressed/disabled states.

Secondary button treatment:

- Smaller icon+label buttons for map, bag, shop, quests.

Panel and card language:

- Parchment/cardboard fantasy panels with clean edges.
- Do not over-round panels; keep structure readable.

Icon style:

- Bold outlined icons matching cartoon-border art.
- Tile icons must be recognizable at small size.

Typography style:

- Friendly bold display font for headings.
- Highly readable sans font for numbers and descriptions.

## Audio Direction

BGM mood:

- Light fantasy travel, whimsical, loopable, low fatigue.

Core SFX set:

- Dice shake
- Dice land
- Token hop
- Tile activate
- Coin gain
- Chest open
- Encounter start
- Reward claim
- Gate unlock
- Region complete

Priority feedback moments:

- Dice result
- Landing tile
- Reward gain
- Segment complete
- Dice empty

Silence policy:

- Avoid constant audio clutter during movement.
- Let dice and landing sounds carry the loop.

## Asset Planning

Hero assets:

- Starter fantasy board map
- Player token/hero
- Dice set
- Region gate
- Chest
- Landmark

Repeatable assets:

- Tile bases
- Path nodes
- Reward icons
- UI panels
- Buttons

Variant assets:

- Tile rarity variants
- Region node skins
- Dice skins
- Character tokens

VFX moments:

- Dice sparkle
- Tile pulse
- Chest burst
- Gate unlock light
- Reward fly-to-HUD

Audio cue map:

- `dice_roll_start`
- `dice_result`
- `token_step`
- `tile_land`
- `reward_coin`
- `reward_dice`
- `chest_open`
- `gate_unlock`
- `error_blocked`
