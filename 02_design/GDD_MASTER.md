---
doc_id: gdd_master
version: 0.1.0
status: draft
owner: game_design
last_updated: 2026-04-27
---

# GDD Master

## Executive Summary

`Fantasy Dice Tales` is a casual fantasy board adventure. Players roll dice to move through a magical board map, land on tiles, resolve events, earn rewards, and unlock new regions. The board is both the play space and progression surface.

Product identity:

- Mobile casual board adventure
- Fantasy storybook world
- Cartoon-border art style
- Dice-driven movement and reward anticipation

Unique selling proposition:

- A friendly fantasy exploration board where every roll can reveal a new tile, treasure, encounter, or story moment.

Emotional hook:

- "One more roll" curiosity plus visible map completion.

Target audience:

- Casual mobile players who like board games, collections, map completion, fantasy characters, and short-session progress.

Platform and business model:

- Mobile F2P, with optional dice/energy packs, event pass, RV reward doubling, cosmetics or boosters.

## Core Loop

`enter map -> choose roll option -> roll dice -> move token -> land on tile -> resolve event -> receive reward/cost -> update map/progression -> decide next roll or spend/exit`

## System Map

Moment-to-moment gameplay:

- Roll dice
- Watch movement
- Land on tile
- Resolve tile event
- Collect feedback/reward

Session progression:

- Consume dice/energy
- Complete board segments
- Claim chests/milestones
- Spend rewards on map/character/meta

Meta progression:

- Unlock regions
- Complete map chapters
- Upgrade landmarks or party base
- Collect characters, relics, stickers, creatures, cosmetics

Economy:

- Dice/energy as action fuel
- Coins as soft currency
- Gems as premium currency
- Stars/map points as progression currency
- Event tokens as seasonal currency

UX/UI:

- Board is first screen after loading/home
- One primary CTA: Roll
- Tile result panel after landing
- Clear next objective and reward preview

Content pipeline:

- Data-driven board nodes
- Tile type definitions
- Reward tables
- Encounter tables
- Region theme packs

Live-ops layer:

- Limited-time event boards
- Dice milestones
- Map collection events
- Daily missions
- Reward calendars

## Success And Fail States

Win state:

- Complete board segment, clear encounter, unlock landmark, finish region, claim milestone chest.

Loss state:

- No hard fail for core prototype. Some encounter tiles may cause minor resource loss, delay, or require retry.

Recovery state:

- Use free dice regen, claim daily reward, watch RV, spend booster, choose alternate path.

Replay trigger:

- Unexplored tile, near chest progress, event milestone, next region preview, dice refill.

## Dependencies

Strategy docs required:

- Project brief
- Product strategy
- Audience monetization

Genre pack required:

- Custom board dice adventure pack to be authored in this project.

Shared libraries required:

- UI/UX shared
- Liveops/economy shared
- Data model
- Tracking control
