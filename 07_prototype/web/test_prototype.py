from pathlib import Path
from playwright.sync_api import sync_playwright, expect


ROOT = Path(__file__).resolve().parent
URL = ROOT.joinpath("index.html").as_uri()


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 430, "height": 932})
    page.goto(URL, wait_until="domcontentloaded")
    page.wait_for_timeout(500)

    expect(page.locator("text=Tidebound Fortune")).to_be_visible()
    expect(page.locator("#embarkButton")).to_be_enabled()
    expect(page.locator("#selectedIslandName")).to_have_text("Whispering Shoals")
    expect(page.locator("#progressText")).to_have_text("Overworld")

    page.locator("#embarkButton").click()
    page.wait_for_timeout(400)

    expect(page.locator("#expeditionScreen")).to_be_visible()
    expect(page.locator("#rollButton")).to_be_enabled()
    expect(page.locator("#mapText")).to_have_text("Chapter 1")
    expect(page.locator(".tile")).to_have_count(14)

    state = page.evaluate("window.gameDebug.getState()")
    nodes = state["board"]["nodes"]
    assert len(nodes) == 14, f"Expected 14 nodes, got {len(nodes)}"
    for index, node in enumerate(nodes[:-1]):
        assert len(node["next"]) == 1, f"Expected linear path at node {index}: {node}"
        assert node["next"][0] == index + 1, f"Unexpected next node ordering at node {index}: {node}"
        nxt = nodes[node["next"][0]]
        dx = abs(node["x"] - nxt["x"])
        dy = abs(node["y"] - nxt["y"])
        assert dx + dy == 1, f"Expected orthogonal adjacency only at node {index}: {node} -> {nxt}"

    page.evaluate("window.gameDebug.setNextRoll(2)")
    page.locator("#rollButton").click()
    page.wait_for_timeout(2200)

    first_pos = page.locator("#progressText").inner_text()
    first_state = page.evaluate("window.gameDebug.getState()")
    assert first_pos != "1 / 14", f"Ship did not move: {first_pos}"
    assert first_state["lastRoll"] == 2, f"Forced roll not applied: {first_state['lastRoll']}"

    if page.locator("#sceneOverlay").is_visible():
      for _ in range(3):
          buttons = page.locator("#sceneActions button")
          count = buttons.count()
          assert count >= 1, "Expected at least one scene action button"
          buttons.first.click()
          page.wait_for_timeout(250)
          if not page.locator("#sceneOverlay").is_visible():
              break
      expect(page.locator("#sceneOverlay")).to_be_hidden()

    current_tile = page.locator("#tileTitle").inner_text()
    assert current_tile != "Docked at Harbor", f"Tile event did not change: {current_tile}"

    page.locator("#returnButton").click()
    page.wait_for_timeout(250)
    expect(page.locator("#overworldScreen")).to_be_visible()
    expect(page.locator("#embarkButton")).to_be_enabled()

    page.screenshot(path=str(ROOT / "prototype_smoke_test.png"), full_page=True)
    browser.close()
