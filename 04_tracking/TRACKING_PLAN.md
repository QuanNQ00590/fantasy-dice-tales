# Tracking Plan

## Goal

Tracking must explain the full player journey and the board economy:

- Where players enter
- Which screens they see
- Which rolls they take
- Which tiles they land on
- Which flows they complete/drop
- Why they quit
- Whether dice/coin economy is balanced

## Three Tracking Layers

1. Behavior journey
   - screen enter/exit
   - action intent/result
   - feature flow start/step/end
   - quit context

2. Board economy
   - dice source/spend
   - tile reward
   - board progress
   - upgrade source/sink

3. Control/anomaly
   - config version
   - reward cap
   - economy budget snapshot
   - anomaly flag

## P0 Events

| Event | Purpose |
|---|---|
| app_lifecycle_event | Distinguish foreground, background, crash, kill |
| loading_step | Detect pre-game drop |
| screen_enter | Reconstruct journey |
| screen_exit | Measure time spent and exit reason |
| user_action_intent | Track what player wanted to do |
| user_action_result | Track success/fail/block |
| board_roll_start | Roll intent and dice spend |
| board_roll_result | Dice result and movement |
| board_tile_land | Tile landed on |
| tile_event_result | Tile reward/cost/outcome |
| board_segment_complete | Progress checkpoint |
| dice_source | Dice earned |
| dice_spend | Dice consumed |
| dice_empty | Roll blocker |
| upgrade_result | Meta sink |
| friction_event | Explicit blocker |
| quit_context | Why/where user left |

## First Session Funnel

1. app_open
2. loading_complete
3. login/guest_ready
4. board_first_view
5. first_roll_start
6. first_roll_result
7. first_tile_land
8. first_reward_claim
9. first_upgrade_or_progress
10. first_segment_checkpoint
11. dice_empty_or_session_end

## Board Economy KPIs

- Rolls per user per session
- Dice earned/spent per day
- Dice empty rate
- Coin per roll
- Tile distribution observed
- Reward EV by board
- Segment completion per roll
- Quit after dice empty
- Quit after blocked gate
- Upgrade affordability rate

## Required Context Fields

- user_id
- session_id
- install_day
- board_id
- region_id
- node_id
- tile_type
- dice_balance
- coin_balance
- config_version
- economy_version
