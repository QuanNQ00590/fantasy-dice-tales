const diceBalanceEl = document.getElementById("diceBalance");
const coinBalanceEl = document.getElementById("coinBalance");
const starBalanceEl = document.getElementById("starBalance");
const routeTitleEl = document.getElementById("routeTitle");
const objectiveTextEl = document.getElementById("objectiveText");
const mapTextEl = document.getElementById("mapText");
const progressTextEl = document.getElementById("progressText");
const progressFillEl = document.getElementById("progressFill");
const selectedIslandNameEl = document.getElementById("selectedIslandName");
const selectedIslandSummaryEl = document.getElementById("selectedIslandSummary");
const selectedIslandRewardEl = document.getElementById("selectedIslandReward");
const selectedIslandStarsEl = document.getElementById("selectedIslandStars");
const selectedIslandPreviewEl = document.getElementById("selectedIslandPreview");
const harborStatusEl = document.getElementById("harborStatus");
const shipTokenEl = document.getElementById("shipToken");
const overworldScreenEl = document.getElementById("overworldScreen");
const expeditionScreenEl = document.getElementById("expeditionScreen");
const primaryDockEl = document.querySelector(".primary-dock");
const embarkButton = document.getElementById("embarkButton");
const returnButton = document.getElementById("returnButton");
const expeditionTitleEl = document.getElementById("expeditionTitle");
const boardBannerEl = document.getElementById("boardBanner");
const boardEl = document.getElementById("board");
const tileTitleEl = document.getElementById("tileTitle");
const tileDescriptionEl = document.getElementById("tileDescription");
const runStateEl = document.getElementById("runState");
const diceFaceEl = document.getElementById("diceFace");
const rollButton = document.getElementById("rollButton");
const sceneOverlayEl = document.getElementById("sceneOverlay");
const sceneBackdropEl = document.getElementById("sceneBackdrop");
const sceneLabelEl = document.getElementById("sceneLabel");
const sceneTitleEl = document.getElementById("sceneTitle");
const sceneTextEl = document.getElementById("sceneText");
const sceneRewardsEl = document.getElementById("sceneRewards");
const sceneArtEl = document.getElementById("sceneArt");
const sceneActionsEl = document.getElementById("sceneActions");

const VISIBLE_AHEAD = 3;

const dicePipMap = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

const TILE_THEME = {
  start: { marker: "DOCK" },
  coin: { marker: "LOOT" },
  story: { marker: "LORE" },
  encounter: { marker: "BOSS" },
  chest: { marker: "CHEST" },
  shrine: { marker: "TIDE" },
  shop: { marker: "SHOP" },
  finish: { marker: "PORT" },
};

const ISLANDS = [
  {
    id: "shoals",
    chapter: "Chapter 1",
    name: "Whispering Shoals",
    subtitle: "Shipyard Ruins",
    summary: "Recover the broken harbor beacon and open the first safe route through the misty sea.",
    reward: "Harbor Build Parts",
    preview: "./assets/island1_level.png",
    boardBackground: "./assets/island1_bg.png",
    worldPosition: { left: "30px", top: "206px" },
    locked: false,
    completion: 0,
    startDice: 8,
    cols: 5,
    rows: 10,
    scenery: [
      { kind: "tree", x: 18, y: 76 },
      { kind: "stone", x: 72, y: 84 },
      { kind: "bush", x: 78, y: 28 },
      { kind: "sign", x: 28, y: 36 },
    ],
    nodes: [
      { id: 0, x: 1, y: 8, type: "start", name: "Broken Dock", next: [1] },
      { id: 1, x: 2, y: 8, type: "coin", name: "Driftwood Cache", next: [2] },
      { id: 2, x: 3, y: 8, type: "story", name: "Old Tide Journal", next: [3] },
      { id: 3, x: 3, y: 7, type: "encounter", name: "Coral Raider", next: [4] },
      { id: 4, x: 3, y: 6, type: "shop", name: "Wandering Quartermaster", next: [5] },
      { id: 5, x: 2, y: 6, type: "chest", name: "Barnacle Crate", next: [6] },
      { id: 6, x: 1, y: 6, type: "coin", name: "Shell Purse", next: [7] },
      { id: 7, x: 1, y: 5, type: "shrine", name: "Moonwater Shrine", next: [8] },
      { id: 8, x: 2, y: 5, type: "encounter", name: "Reef Stalker", next: [9] },
      { id: 9, x: 3, y: 5, type: "story", name: "Beacon Memory", next: [10] },
      { id: 10, x: 3, y: 4, type: "chest", name: "Signal Locker", next: [11] },
      { id: 11, x: 3, y: 3, type: "shop", name: "Harbor Salvager", next: [12] },
      { id: 12, x: 2, y: 3, type: "shrine", name: "Wind Compass", next: [13] },
      { id: 13, x: 2, y: 2, type: "finish", name: "Beacon Mast", next: [] },
    ],
  },
  {
    id: "bazaar",
    chapter: "Chapter 2",
    name: "Coral Bazaar",
    subtitle: "Trade Reef",
    summary: "Navigate the floating market channels, barter for route charts, and survive ambushes hidden behind bright lanterns.",
    reward: "Bazaar Build Schematics",
    preview: "./assets/island2_level.png",
    boardBackground: "./assets/island2_bg.png",
    worldPosition: { left: "252px", top: "102px" },
    locked: false,
    completion: 0,
    startDice: 9,
    cols: 5,
    rows: 10,
    scenery: [
      { kind: "tree", x: 75, y: 72 },
      { kind: "stone", x: 18, y: 86 },
      { kind: "bush", x: 28, y: 22 },
      { kind: "sign", x: 66, y: 34 },
    ],
    nodes: [
      { id: 0, x: 1, y: 8, type: "start", name: "Canal Pier", next: [1] },
      { id: 1, x: 1, y: 7, type: "coin", name: "Market Tithe", next: [2] },
      { id: 2, x: 2, y: 7, type: "shop", name: "Pearl Broker", next: [3] },
      { id: 3, x: 3, y: 7, type: "story", name: "Coral Ledger", next: [4] },
      { id: 4, x: 3, y: 6, type: "encounter", name: "Debt Collector", next: [5] },
      { id: 5, x: 2, y: 6, type: "chest", name: "Hidden Till", next: [6] },
      { id: 6, x: 1, y: 6, type: "coin", name: "Lantern Fee", next: [7] },
      { id: 7, x: 1, y: 5, type: "shrine", name: "Current Altar", next: [8] },
      { id: 8, x: 2, y: 5, type: "encounter", name: "Eel Assassin", next: [9] },
      { id: 9, x: 3, y: 5, type: "shop", name: "Tide Cartographer", next: [10] },
      { id: 10, x: 3, y: 4, type: "story", name: "Merchant Rumor", next: [11] },
      { id: 11, x: 2, y: 4, type: "coin", name: "Anchor Tax", next: [12] },
      { id: 12, x: 2, y: 3, type: "chest", name: "Sunken Lockbox", next: [13] },
      { id: 13, x: 2, y: 2, type: "finish", name: "Grand Exchange", next: [] },
    ],
  },
  {
    id: "stormglass",
    chapter: "Chapter 3",
    name: "Stormglass Reach",
    subtitle: "Tempest Route",
    summary: "A future late-ocean route. Clear the first two islands to unlock this storm corridor.",
    reward: "Tempest Route Key",
    preview: "./assets/island1_bg.png",
    boardBackground: "./assets/bg_board_crownchase.png",
    worldPosition: { left: "150px", top: "282px" },
    locked: true,
    completion: 0,
    startDice: 10,
    cols: 5,
    rows: 10,
    scenery: [],
    nodes: [],
  },
];

let state;
let tokenEl;
let isMoving = false;

function initialState() {
  return {
    screen: "overworld",
    selectedIslandIndex: 0,
    currentIslandIndex: null,
    board: null,
    position: 0,
    dice: 8,
    coin: 0,
    relics: 0,
    completed: false,
    lastRoll: 1,
    overlay: null,
    visited: new Set(),
    tracking: [],
    nextRollOverride: null,
  };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function track(eventName, params = {}) {
  state.tracking.push({
    event_name: eventName,
    time: new Date().toISOString(),
    screen: state.screen,
    island_id: state.currentIslandIndex === null ? null : ISLANDS[state.currentIslandIndex].id,
    position: state.position,
    dice: state.dice,
    coin: state.coin,
    relics: state.relics,
    ...params,
  });
}

function currentIsland() {
  if (state.currentIslandIndex === null) return null;
  return ISLANDS[state.currentIslandIndex];
}

function currentNode() {
  return state.board.nodes[state.position];
}

function setDiceFace(value) {
  const pips = Array.from(diceFaceEl.querySelectorAll("span"));
  pips.forEach((pip) => pip.classList.remove("active"));
  (dicePipMap[value] || []).forEach((index) => pips[index].classList.add("active"));
}

function selectIsland(index) {
  const island = ISLANDS[index];
  if (!island || island.locked) return;
  state.selectedIslandIndex = index;
  track("overworld_island_select", { island_id: island.id });
  renderAll();
}

function startExpedition(index = state.selectedIslandIndex) {
  const island = ISLANDS[index];
  if (!island || island.locked) return;
  state.currentIslandIndex = index;
  state.screen = "expedition";
  state.board = {
    name: island.name,
    cols: island.cols,
    rows: island.rows,
    nodeCount: island.nodes.length,
    scenery: island.scenery,
    nodes: island.nodes,
  };
  state.position = 0;
  state.dice = island.startDice;
  state.completed = false;
  state.overlay = null;
  state.visited = new Set([0]);
  state.nextRollOverride = null;
  createBoard();
  setDiceFace(1);
  setTileResult("Docked at Harbor", "Embark, roll, and let the island scenes resolve one stop at a time.");
  track("expedition_start", { island_id: island.id, node_count: island.nodes.length });
  renderAll();
}

function returnHome() {
  state.screen = "overworld";
  state.currentIslandIndex = null;
  state.board = null;
  state.position = 0;
  state.completed = false;
  state.overlay = null;
  isMoving = false;
  track("expedition_return_home", {});
  renderAll();
}

function createScenery(item) {
  const decor = document.createElement("div");
  decor.className = `scenery ${item.kind}`;
  decor.dataset.y = String(item.y);
  decor.style.left = `${item.x}%`;
  decor.style.top = `${item.y}%`;
  decor.setAttribute("aria-hidden", "true");
  return decor;
}

function gridToPercentX(gridX) {
  const padding = 15;
  const usableWidth = 100 - padding * 2;
  if (state.board.cols <= 1) return 50;
  return padding + (gridX / (state.board.cols - 1)) * usableWidth;
}

function gridToPercentY(gridY) {
  const topPadding = 10;
  const bottomPadding = 12;
  const usableHeight = 100 - topPadding - bottomPadding;
  if (state.board.rows <= 1) return 50;
  return topPadding + (gridY / (state.board.rows - 1)) * usableHeight;
}

function getNodeScreenPosition(node) {
  return {
    x: gridToPercentX(node.x),
    y: gridToPercentY(node.y),
  };
}

function createConnector(from, to) {
  const fromPos = getNodeScreenPosition(from);
  const toPos = getNodeScreenPosition(to);
  const dx = toPos.x - fromPos.x;
  const dy = toPos.y - fromPos.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  const connector = document.createElement("div");
  connector.className = "connector";
  connector.dataset.to = String(to.id);
  connector.style.left = `${fromPos.x}%`;
  connector.style.top = `${fromPos.y}%`;
  connector.style.width = `${distance}%`;
  connector.style.transform = `translateY(-50%) rotate(${angle}deg)`;
  return connector;
}

function createTrailPoint(x, y) {
  const point = document.createElement("div");
  point.className = "trail-point";
  point.style.left = `${x}%`;
  point.style.top = `${y}%`;
  point.setAttribute("aria-hidden", "true");
  return point;
}

function createTile(node) {
  const pos = getNodeScreenPosition(node);
  const tile = document.createElement("div");
  tile.className = `tile ${node.type}`;
  tile.dataset.index = String(node.id);
  tile.style.left = `${pos.x}%`;
  tile.style.top = `${pos.y}%`;
  tile.innerHTML = `
    <div class="tile-inner">
      <span class="tile-art" aria-hidden="true"></span>
      <span class="tile-icon" aria-hidden="true"></span>
      <span class="tile-marker" aria-hidden="true">${TILE_THEME[node.type]?.marker || "?"}</span>
      <span class="tile-index">${node.id + 1}</span>
      <span class="tile-name sr-only">${node.name}</span>
    </div>
  `;
  return tile;
}

function createBoard() {
  if (!state.board) return;
  const island = currentIsland();
  boardEl.innerHTML = "";
  boardEl.style.backgroundImage = `linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.14)), url("${island.boardBackground}")`;

  state.board.scenery.forEach((item) => boardEl.appendChild(createScenery(item)));
  state.board.nodes.forEach((node) => {
    if (!node.next.length) return;
    const nextNode = state.board.nodes[node.next[0]];
    const fromPos = getNodeScreenPosition(node);
    const toPos = getNodeScreenPosition(nextNode);
    boardEl.appendChild(createConnector(node, nextNode));
    boardEl.appendChild(createTrailPoint((fromPos.x + toPos.x) / 2, (fromPos.y + toPos.y) / 2));
  });
  state.board.nodes.forEach((node) => boardEl.appendChild(createTile(node)));

  tokenEl = document.createElement("div");
  tokenEl.className = "token";
  tokenEl.setAttribute("aria-label", "Ship token");
  boardEl.appendChild(tokenEl);
}

function tileCenter(index) {
  const tileEl = boardEl.querySelector(`[data-index="${index}"]`);
  const boardRect = boardEl.getBoundingClientRect();
  const tileRect = tileEl.getBoundingClientRect();
  return {
    left: tileRect.left - boardRect.left + tileRect.width / 2,
    top: tileRect.top - boardRect.top + tileRect.height / 2,
  };
}

function updateTokenPosition() {
  if (!state.board || !tokenEl) return;
  requestAnimationFrame(() => {
    const center = tileCenter(state.position);
    tokenEl.style.left = `${center.left}px`;
    tokenEl.style.top = `${center.top}px`;
  });
}

function overlayOpen() {
  return Boolean(state.overlay);
}

function renderScreen() {
  const inExpedition = state.screen === "expedition";
  overworldScreenEl.classList.toggle("hidden", inExpedition);
  expeditionScreenEl.classList.toggle("hidden", !inExpedition);
  primaryDockEl.style.display = inExpedition ? "none" : "block";
  embarkButton.style.display = inExpedition ? "none" : "block";
  document.body.classList.toggle("screen-expedition", inExpedition);
  document.body.classList.toggle("screen-overworld", !inExpedition);
}

function renderOverworld() {
  const totalCompletions = ISLANDS.reduce((sum, island) => sum + island.completion, 0);
  const island = ISLANDS[state.selectedIslandIndex];
  routeTitleEl.textContent = island.name;
  objectiveTextEl.textContent = "Select an island, sail out, then clear its node path to bring resources home.";
  mapTextEl.textContent = "Sea Chart";
  progressTextEl.textContent = "Overworld";
  progressFillEl.style.width = `${Math.min(100, totalCompletions * 16.6)}%`;
  selectedIslandNameEl.textContent = island.name;
  selectedIslandSummaryEl.textContent = island.summary;
  selectedIslandRewardEl.textContent = island.reward;
  selectedIslandStarsEl.textContent = `${island.completion} / 3 Stars`;
  harborStatusEl.textContent = `${totalCompletions} / 3 island clears complete.`;
  selectedIslandPreviewEl.style.backgroundImage = `url("${island.preview}")`;
  shipTokenEl.style.left = island.worldPosition.left;
  shipTokenEl.style.top = island.worldPosition.top;
  document.querySelectorAll(".island-pin").forEach((pin) => {
    const pinIndex = Number(pin.dataset.island);
    pin.classList.toggle("active", pinIndex === state.selectedIslandIndex);
    pin.classList.toggle("locked", ISLANDS[pinIndex].locked);
  });
}

function renderBoardState() {
  if (!state.board) return;
  document.querySelectorAll(".tile").forEach((tileEl) => {
    const index = Number(tileEl.dataset.index);
    const isVisible = index <= state.position + VISIBLE_AHEAD || state.visited.has(index);
    tileEl.classList.toggle("current", index === state.position);
    tileEl.classList.toggle("reached", state.visited.has(index));
    tileEl.classList.toggle("fogged", !isVisible);
  });

  document.querySelectorAll(".connector").forEach((connectorEl) => {
    const toIndex = Number(connectorEl.dataset.to);
    const isVisible = toIndex <= state.position + VISIBLE_AHEAD || state.visited.has(toIndex);
    connectorEl.classList.toggle("fogged", !isVisible);
  });

  document.querySelectorAll(".trail-point").forEach((trailPointEl, index) => {
    const isVisible = index + 1 <= state.position + VISIBLE_AHEAD || state.visited.has(index + 1);
    trailPointEl.classList.toggle("fogged", !isVisible);
  });

  document.querySelectorAll(".scenery").forEach((sceneryEl) => {
    const sceneryY = Number(sceneryEl.dataset.y);
    const revealNode = state.board.nodes[Math.min(state.position + VISIBLE_AHEAD, state.board.nodeCount - 1)];
    const thresholdY = gridToPercentY(Math.min(state.board.rows - 1, revealNode.y + 1));
    sceneryEl.classList.toggle("fogged", sceneryY < thresholdY - 36);
  });

  updateTokenPosition();
}

function renderExpedition() {
  const island = currentIsland();
  if (!island) return;
  const progress = ((state.position + 1) / state.board.nodeCount) * 100;
  routeTitleEl.textContent = island.name;
  expeditionTitleEl.textContent = island.name;
  boardBannerEl.textContent = `${VISIBLE_AHEAD}-Node Vision`;
  mapTextEl.textContent = island.chapter;
  progressTextEl.textContent = `${state.position + 1} / ${state.board.nodeCount}`;
  progressFillEl.style.width = `${progress}%`;
  diceBalanceEl.textContent = state.dice;
  coinBalanceEl.textContent = state.coin;
  starBalanceEl.textContent = state.relics;
  rollButton.disabled = isMoving || overlayOpen();

  if (overlayOpen()) {
    runStateEl.textContent = "Scene active";
    objectiveTextEl.textContent = "Resolve the current island scene before rolling again.";
    rollButton.textContent = "Wait";
  } else if (state.completed) {
    runStateEl.textContent = "Route cleared";
    objectiveTextEl.textContent = "The island route is complete. Return to the overworld to bank your story progress.";
    rollButton.textContent = "Return";
  } else if (state.dice <= 0) {
    runStateEl.textContent = "Out of dice";
    objectiveTextEl.textContent = "The voyage is spent. Return home and prepare another run.";
    rollButton.textContent = "Retreat";
  } else if (isMoving) {
    runStateEl.textContent = "Ship moving";
    objectiveTextEl.textContent = `Sailing ${state.lastRoll} step${state.lastRoll > 1 ? "s" : ""} through adjacent route nodes only.`;
    rollButton.textContent = "Sailing";
  } else {
    runStateEl.textContent = "Ready to sail";
    objectiveTextEl.textContent = "Roll to move the ship deeper into the island route. Fog shows only the next 3 nodes.";
    rollButton.textContent = "Roll";
  }

  renderBoardState();
}

function renderOverlay() {
  if (!state.overlay) {
    sceneOverlayEl.classList.add("hidden");
    sceneActionsEl.innerHTML = "";
    return;
  }

  sceneOverlayEl.classList.remove("hidden");
  sceneBackdropEl.className = `scene-backdrop ${state.overlay.sceneClass}`;
  sceneArtEl.className = `scene-art ${state.overlay.sceneClass}`;
  sceneLabelEl.textContent = state.overlay.label;
  sceneTitleEl.textContent = state.overlay.title;
  sceneTextEl.textContent = state.overlay.text;
  sceneRewardsEl.textContent = state.overlay.rewardText || "";
  sceneRewardsEl.classList.toggle("empty", !state.overlay.rewardText);
  sceneActionsEl.innerHTML = "";

  state.overlay.actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `scene-action ${action.variant || "primary"}`;
    button.textContent = action.label;
    button.addEventListener("click", () => resolveOverlayAction(action.id));
    sceneActionsEl.appendChild(button);
  });
}

function renderAll() {
  renderScreen();
  renderOverworld();
  if (state.screen === "expedition") {
    renderExpedition();
  } else {
    diceBalanceEl.textContent = state.dice;
    coinBalanceEl.textContent = state.coin;
    starBalanceEl.textContent = state.relics;
  }
  renderOverlay();
}

function setTileResult(title, description) {
  tileTitleEl.textContent = title;
  tileDescriptionEl.textContent = description;
}

function reward(type, amount) {
  if (type === "coin") state.coin += amount;
  if (type === "dice") state.dice += amount;
  if (type === "relic") state.relics += amount;
}

function makeRewardText(parts) {
  return parts.filter(Boolean).join("  |  ");
}

function openScene(config) {
  state.overlay = config;
  renderAll();
}

function closeScene() {
  state.overlay = null;
  renderAll();
}

function openPassiveScene(options) {
  openScene({
    label: options.label,
    title: options.title,
    text: options.text,
    rewardText: options.rewardText,
    sceneClass: options.sceneClass,
    actions: [
      {
        id: "continue",
        label: "Continue",
        apply: options.apply,
        nextText: options.nextText,
      },
    ],
  });
}

function resolveOverlayAction(actionId) {
  if (!state.overlay) return;
  const currentOverlay = state.overlay;
  const action = currentOverlay.actions.find((item) => item.id === actionId);
  if (!action) return;
  if (action.apply) action.apply();
  if (state.overlay === currentOverlay && action.nextText) {
    setTileResult(currentOverlay.title, action.nextText);
  }
  track("scene_action_resolve", {
    scene_type: currentOverlay.sceneClass,
    action_id: action.id,
    scene_title: currentOverlay.title,
  });
  if (state.overlay === currentOverlay) {
    closeScene();
  }
}

function buildBattleScene(node) {
  const scoutStrikeGain = randomInt(180, 280);
  const scoutGuardLoss = Math.min(state.coin, randomInt(20, 70));
  const chargeGain = randomInt(240, 420);
  const chargeLoss = Math.min(state.coin, randomInt(90, 160));

  openScene({
    label: "Battle",
    title: node.name,
    text: "A sea-born threat blocks the route. Scout first for a safer plan, or charge straight in for a bigger swing.",
    rewardText: makeRewardText(["Scout unlocks safe tactics", `Charge can grant +${chargeGain} coins or cost -${chargeLoss}`]),
    sceneClass: "encounter",
    actions: [
      {
        id: "scout",
        label: "Scout",
        variant: "secondary",
        apply: () => {
          openScene({
            label: "Battle",
            title: node.name,
            text: "The crew spots a weak flank in the reef monster and marks safe tide cover for the ship.",
            rewardText: makeRewardText([`Strike: +${scoutStrikeGain} Coins`, `Guard: -${scoutGuardLoss} Coins and +1 Dice`]),
            sceneClass: "encounter",
            actions: [
              {
                id: "strike",
                label: "Strike",
                variant: "primary",
                apply: () => {
                  reward("coin", scoutStrikeGain);
                  setTileResult(node.name, `The crew times the strike and secures ${scoutStrikeGain} coins from the wreckage.`);
                },
              },
              {
                id: "guard",
                label: "Guard",
                variant: "secondary",
                apply: () => {
                  state.coin = Math.max(0, state.coin - scoutGuardLoss);
                  reward("dice", 1);
                  setTileResult(node.name, `The crew rides the impact, loses ${scoutGuardLoss} coins, and gains 1 die for the next leg.`);
                },
              },
            ],
          });
        },
      },
      {
        id: "charge",
        label: "Charge",
        variant: "primary",
        apply: () => {
          const success = Math.random() < 0.62;
          if (success) {
            reward("coin", chargeGain);
            reward("relic", 1);
            setTileResult(node.name, `The charge lands cleanly. Gain ${chargeGain} coins and 1 relic.`);
          } else {
            state.coin = Math.max(0, state.coin - chargeLoss);
            setTileResult(node.name, `The charge misfires in rough surf and costs ${chargeLoss} coins.`);
          }
        },
      },
    ],
  });
}

function buildShopScene(node) {
  const offers = [
    { id: "supply_dice", label: "2 Dice", price: 180, apply: () => reward("dice", 2), result: "The quartermaster loads 2 more dice into the voyage chest." },
    { id: "map_relic", label: "1 Relic", price: 260, apply: () => reward("relic", 1), result: "A sealed chart case reveals 1 relic." },
    { id: "coin_cache", label: "Coin Crate", price: 140, apply: () => reward("coin", 220), result: "You buy low and resell cargo for a net gain of 220 coins." },
  ];

  openScene({
    label: "Shop",
    title: node.name,
    text: `The harbor trader opens a compact sale menu. Current purse: ${state.coin} coins.`,
    rewardText: offers.map((offer) => `${offer.label}: ${offer.price} Coins`).join("  |  "),
    sceneClass: "shop",
    actions: [
      ...offers.map((offer) => ({
        id: offer.id,
        label: offer.label,
        variant: offer.id === "supply_dice" ? "primary" : "secondary",
        apply: () => {
          if (state.coin < offer.price) {
            setTileResult(node.name, `Not enough coins for ${offer.label}. The trader waves you on.`);
            return;
          }
          state.coin -= offer.price;
          offer.apply();
          setTileResult(node.name, offer.result);
        },
      })),
      {
        id: "leave",
        label: "Leave",
        variant: "ghost",
        apply: () => {
          setTileResult(node.name, "You pass the trader and keep the ship moving.");
        },
      },
    ],
  });
}

function resolveTile() {
  const node = currentNode();
  track("board_tile_land", {
    node_index: node.id + 1,
    tile_type: node.type,
    tile_name: node.name,
  });

  if (node.type === "start") {
    setTileResult(node.name, "The ship clears the dock and begins the island route.");
    renderAll();
    return;
  }

  if (node.type === "coin") {
    const amount = randomInt(120, 240);
    setTileResult(node.name, "A resource pickup is found near the shore.");
    openPassiveScene({
      label: "Treasure",
      title: node.name,
      text: "Floating cargo and tide-worn purses wash against the route. Haul them aboard before the current shifts.",
      rewardText: makeRewardText([`+${amount} Coins`]),
      sceneClass: "loot",
      apply: () => reward("coin", amount),
      nextText: `The crew recovers ${amount} coins from the tide.`,
    });
    return;
  }

  if (node.type === "story") {
    setTileResult(node.name, "A story scene opens.");
    openPassiveScene({
      label: "Story",
      title: node.name,
      text: "The island reveals another fragment of the sea route's history. Log it before the voyage continues.",
      rewardText: makeRewardText(["+1 Relic"]),
      sceneClass: "story",
      apply: () => reward("relic", 1),
      nextText: "You secure 1 relic and update the route journal.",
    });
    return;
  }

  if (node.type === "encounter") {
    setTileResult(node.name, "A battle scene is triggered.");
    buildBattleScene(node);
    return;
  }

  if (node.type === "chest") {
    const coins = randomInt(260, 420);
    setTileResult(node.name, "A salvage chest is found.");
    openPassiveScene({
      label: "Chest",
      title: node.name,
      text: "The tide lock cracks open and spills prize cargo across the deck.",
      rewardText: makeRewardText([`+${coins} Coins`, "+1 Relic"]),
      sceneClass: "chest",
      apply: () => {
        reward("coin", coins);
        reward("relic", 1);
      },
      nextText: `The salvage chest yields ${coins} coins and 1 relic.`,
    });
    return;
  }

  if (node.type === "shrine") {
    const diceGain = randomInt(1, 2);
    setTileResult(node.name, "A tide shrine pulses with energy.");
    openPassiveScene({
      label: "Shrine",
      title: node.name,
      text: "Sea glass light flows through the hull and restores the crew's momentum.",
      rewardText: makeRewardText([`+${diceGain} Dice`]),
      sceneClass: "shrine",
      apply: () => reward("dice", diceGain),
      nextText: `The shrine restores ${diceGain} dice to the voyage stock.`,
    });
    return;
  }

  if (node.type === "shop") {
    setTileResult(node.name, "A trading scene opens.");
    buildShopScene(node);
    return;
  }

  if (node.type === "finish") {
    const island = currentIsland();
    setTileResult(node.name, "The island objective is within reach.");
    openPassiveScene({
      label: "Port",
      title: node.name,
      text: "The route objective is secured. Mark the chart, bank the spoils, and sail home with new story progress.",
      rewardText: makeRewardText(["+2 Relics", "+1 Island Star"]),
      sceneClass: "finish",
      apply: () => {
        reward("relic", 2);
        state.completed = true;
        island.completion = Math.min(3, island.completion + 1);
        if (ISLANDS[0].completion >= 1 && ISLANDS[1].completion >= 1) {
          ISLANDS[2].locked = false;
        }
      },
      nextText: "The harbor route is restored. Return to the sea chart to choose the next voyage.",
    });
    return;
  }

  renderAll();
}

async function moveAlongPath(steps) {
  isMoving = true;
  renderAll();

  while (steps > 0) {
    const node = currentNode();
    const nextIndex = node.next[0];
    if (nextIndex === undefined) break;

    await new Promise((resolve) => setTimeout(resolve, 280));
    state.position = nextIndex;
    state.visited.add(nextIndex);
    renderBoardState();
    steps -= 1;

    if (state.position === state.board.nodeCount - 1) break;
  }

  isMoving = false;
  resolveTile();
}

function rollDice() {
  if (overlayOpen() || isMoving) return;

  if (state.completed || state.dice <= 0) {
    returnHome();
    return;
  }

  state.dice -= 1;
  const result = state.nextRollOverride ?? randomInt(1, 6);
  state.nextRollOverride = null;
  state.lastRoll = result;
  setDiceFace(result);
  track("board_roll_result", {
    board_id: state.board.name,
    dice_result: result,
    node_id_start: state.position + 1,
    dice_balance_after: state.dice,
  });
  moveAlongPath(result);
}

function setNextRoll(value) {
  state.nextRollOverride = value;
}

function initBindings() {
  document.querySelectorAll(".island-pin").forEach((pin) => {
    pin.addEventListener("click", () => selectIsland(Number(pin.dataset.island)));
  });
  embarkButton.addEventListener("click", () => startExpedition());
  returnButton.addEventListener("click", returnHome);
  rollButton.addEventListener("click", rollDice);
  window.addEventListener("resize", updateTokenPosition);
}

function init() {
  state = initialState();
  setDiceFace(1);
  setTileResult("Docked at Harbor", "Select an island from the sea chart and sail out when ready.");
  initBindings();
  window.gameDebug = {
    getState: () => state,
    selectIsland,
    embark: startExpedition,
    returnHome,
    setNextRoll,
  };
  track("session_start", { screen: state.screen });
  renderAll();
}

init();
