---
doc_id: board_data_schema
version: 0.1.0
status: draft
owner: systems_design
last_updated: 2026-04-27
---

# Board Data Schema

## board_config

| Field | Type | Example |
|---|---|---|
| board_id | string | greenvale_chapter_01 |
| region_id | string | greenvale |
| display_name | string | Greenvale Trail |
| board_type | enum | chapter |
| node_count | int | 40 |
| start_node_id | string | node_001 |
| completion_node_id | string | node_040 |
| reward_table_id | string | greenvale_ch01_complete |
| unlock_requirement | object | none |

## board_node

| Field | Type | Example |
|---|---|---|
| node_id | string | node_001 |
| board_id | string | greenvale_chapter_01 |
| node_index | int | 1 |
| tile_type | enum | coin |
| next_node_ids | array | node_002 |
| position_x | number | 0 |
| position_y | number | 0 |
| reward_table_id | string | coin_common_01 |
| event_id | string | empty |
| visual_variant | string | grass_01 |

## tile_type

| Field | Type | Example |
|---|---|---|
| tile_type | enum | chest |
| display_name | string | Treasure Chest |
| behavior_type | enum | reward |
| rarity | enum | uncommon |
| requires_interaction | bool | true |
| can_be_hidden | bool | false |
| default_sfx | string | chest_open |

## reward_table

| Field | Type | Example |
|---|---|---|
| reward_table_id | string | coin_common_01 |
| reward_type | enum | coin |
| min_amount | int | 100 |
| max_amount | int | 300 |
| weight | int | 100 |
| scaling_rule | string | board_level |

## dice_config

| Field | Type | Example |
|---|---|---|
| dice_id | string | normal_dice |
| display_name | string | Normal Dice |
| result_min | int | 1 |
| result_max | int | 6 |
| result_weights | map | even |
| cost_type | enum | dice |
| cost_amount | int | 1 |
| is_premium | bool | false |
