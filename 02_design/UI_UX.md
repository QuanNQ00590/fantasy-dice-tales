---
doc_id: ui_ux
version: 0.1.0
status: draft
owner: ux_design
last_updated: 2026-04-27
---

# UI UX

## UX Principles

- One primary action: Roll.
- The board should explain itself visually.
- Player must know current objective within 3 seconds.
- Reward states must explain value, not only animate.
- Blocked states must explain recovery path.
- Route choices must preview consequence.

## Required Screens

| Screen | Goal | Primary CTA |
|---|---|---|
| Loading | Enter game reliably | None |
| Home / Board | Main play surface | Roll |
| Tile Result | Resolve landing event | Claim / Continue |
| Reward Summary | Confirm reward | Continue |
| Map Region | Show chapter/region progress | Play |
| Upgrade / Landmark | Spend coin/material | Upgrade |
| Inventory / Dice Bag | Manage dice items | Use |
| Event Board | Limited-time board | Roll |
| Shop | Buy dice/items | Buy |
| Settings | Control audio/account | Save |

## Core Board HUD

Required information:

- Dice balance
- Coin balance
- Gem balance
- Current objective
- Board progress
- Roll button
- Event/missions shortcut

Optional information:

- Next chest progress
- Active booster
- Route preview
- Tile tooltip

## Board Interaction Flow

1. User enters board.
2. Board centers on token.
3. Objective and next reward are visible.
4. Roll button is enabled if dice > 0.
5. User taps Roll.
6. Dice result is displayed.
7. Token moves node by node.
8. Landing tile pulses.
9. Tile result panel opens.
10. Reward resolves.
11. Board progress updates.
12. Roll button returns.

## Empty / Blocked States

Dice empty:

- Explain next free dice timer.
- Offer daily reward/RV/shop if available.
- Do not hard-block navigation.

Coin insufficient:

- Show required coin, current coin, gap, and ways to earn.

Gate blocked:

- Show required stars/key/material and where to get them.

Network/API error:

- Keep board state stable.
- Retry safely.

## Readability Checklist

- Can the player find the Roll button in under 1 second?
- Can the player identify current tile type after landing?
- Can the player tell whether they progressed?
- Can the player understand why they cannot roll/build/unlock?
- Does the board remain readable on small mobile screens?
