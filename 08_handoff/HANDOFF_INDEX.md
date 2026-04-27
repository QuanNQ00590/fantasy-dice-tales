---
doc_id: handoff_index
version: 0.1.0
status: draft
owner: product_design
last_updated: 2026-04-27
---

# Handoff Index

## Purpose

This folder is the role-based entry point for teams receiving the pre-production package.

Use it when:

- sharing the project with engineering, art, UI, analytics, or production teams
- onboarding external partners who do not need to read every document in order
- clarifying which docs are source-of-truth versus supporting references

## Source Of Truth Order

Teams should align to this order if documents appear to overlap:

1. `00_meta/PROJECT_MANIFEST.md`
2. `01_strategy/PROJECT_BRIEF.md`
3. `02_design/GDD_MASTER.md`
4. discipline-specific supporting docs
5. `05_production/PROTOTYPE_SCOPE.md`
6. `07_prototype/web/`

## Team Entry Points

- Product / Production: [PRODUCTION_TEAM_HANDOFF.md](PRODUCTION_TEAM_HANDOFF.md)
- Game Design: [DESIGN_TEAM_HANDOFF.md](DESIGN_TEAM_HANDOFF.md)
- Engineering / Prototype: [ENGINEERING_TEAM_HANDOFF.md](ENGINEERING_TEAM_HANDOFF.md)
- Art / Audio / UX: [ART_UX_TEAM_HANDOFF.md](ART_UX_TEAM_HANDOFF.md)
- Data / Analytics: [ANALYTICS_TEAM_HANDOFF.md](ANALYTICS_TEAM_HANDOFF.md)
- Delivery Control: [DELIVERY_CHECKLIST.md](DELIVERY_CHECKLIST.md)

## Current Project State

- Stage: pre-production
- Goal: validate the dice-board core loop before production expansion
- Deliverable focus: aligned design intent, prototype scope, data/tracking needs, and a playable reference

## Package Boundaries

This package is intended to support:

- concept alignment
- prototype implementation
- discipline estimation
- dependency planning

This package is not yet intended to lock:

- full production content volume
- final monetization tuning
- final liveops roadmap
- full asset list or final technical architecture
