# SkiWatch Webcam Multi-View Plan

## 1) Immediate baseline (now)

Restore and keep the webcam page in single-view mode:

- Left: one webcam player area.
- Right: expandable resort list sidebar.
- Keep search field and favorites list in sidebar.
- Remove grid controls from normal browsing flow for now.

This gives us a stable baseline before introducing multi-view again.

## 2) Product goal for multi-view

Target behavior similar to Twitch Squad Stream:

- Left major section can show multiple webcams at once.
- Sidebar stays on the right as source list.
- Users can add webcams to multi-view by dragging from sidebar to left area.
- Multi-view remains optional; single-view is the default fallback.

## 3) Interaction model

### Add to multi-view

- Desktop: drag stream row **using a dedicated handle** on each item.
- Mobile/tablet: avoid drag-only UX; keep explicit `Add` button on each stream row.

### Remove from multi-view

- On each tile: clear `Remove` (X) button in top-right.
- Optional: long-press/drag to reorder on desktop only.

### Reorder

- Desktop only in phase 1 of multi-view.
- Mobile reorder can come later after base UX is stable.

## 4) Grid layout strategy (v1)

Use an adaptive, predictable layout:

- 1 item: `1 x 1`
- 2 items: `2 columns`
- 3-4 items: `2 columns`
- 5-6 items: `3 columns` on large screens, `2` on medium
- Mobile: always `1 column` or `2 columns` depending on width (`>= 420px` -> 2)

Tile sizing:

- Keep a fixed video ratio per tile (`16:9`) to avoid jumping.
- Container scroll should stay inside the grid area, not whole page.

## 5) State model

Separate states clearly:

- `activeStreamId`: currently focused stream in single-view mode.
- `multiViewItems[]`: ordered list of stream ids in multi-view.
- `viewMode`: `"single"` or `"multi"`.

Rules:

- If `multiViewItems.length === 0`, force `viewMode = "single"`.
- Drag/add creates `multiViewItems` and switches to `"multi"`.
- Removing last tile returns to `"single"` using last focused stream.

## 6) Handle placement plan

Sidebar item layout (desktop):

- Left: drag handle icon (small grip).
- Center: stream name (+ status/favorite).
- Right: action button (`Add` / `Added`).

Mobile:

- Hide drag handle.
- Keep large touch-friendly `Add` button.
- Preserve vertical list scrolling without drag conflicts.

## 7) Phased implementation

### Phase A (done now)

- Single-view only page with stable sidebar/search/favorites.

### Phase B

- Add `viewMode` and `multiViewItems` state.
- Add multi-view drop zone in left panel.
- Add desktop drag-handle DnD from sidebar to drop zone.
- Add mobile `Add` button path (no DnD requirement).

### Phase C

- Add tile remove, clear-all, and desktop reorder.
- Persist `multiViewItems` in localStorage.
- Add small onboarding hint the first time users open multi-view.

## 8) Open decisions to finalize together

1. Maximum tiles allowed at once (recommend `6`).
2. Should weather/slopes be allowed inside multi-view, or webcams only?
3. When switching back to single-view, should we keep last selected tile or first tile?
4. Do we want a visible `Single / Multi` toggle, or auto-switch only?
