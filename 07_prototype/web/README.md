---
doc_id: web_prototype_readme
version: 0.1.0
status: draft
owner: prototype_design
last_updated: 2026-04-27
---

# Fantasy Dice Tales Web Prototype

This is a standalone playable prototype for the new dice-board direction.

## Run

Open `index.html` in a browser.

No server or package install is required.

## Validation

Run `python test_prototype.py`.

The smoke test can generate local validation screenshots for layout and scene checks.

These generated `.png` files are intentionally ignored in git and should be treated as disposable QA artifacts.

## Included Gameplay

- 36-node Greenvale board
- Dice roll and token movement
- Dice resource
- Coin, star, and herb resources
- Tile types: start, coin, dice, material, story, chest, encounter, trader, mystery, gate, finish
- Focus Dice button for controlled prototype testing
- Moon Gate requirement
- Chapter completion
- Adventure log
- Lightweight in-memory tracking calls in `game.js`

## Prototype Goal

Validate the playable loop:

`roll -> move -> land on tile -> resolve event -> gain/spend resources -> progress`

## Not Included Yet

- Persistence
- Server economy
- Multiple boards
- Production art assets
- Monetization
- Full tutorial
