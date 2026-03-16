# @catcatcat/ui — React Component Library

## Execution Protocol

**Context recovery — read this first every iteration.**

Project: `@catcatcat/ui` at `~/catcatcat/ui/`
Architecture: Radix Primitives + catalog CSS (components.css) + radix-compat.css + motion.css
Design spec: `~/catcatcat/design/` — catalog CSS is the source of truth
Test app: `~/catcatcat/ui/test-app/` running at localhost:7720
Catalog reference: localhost:8090

Build: `cd ~/catcatcat/ui && pnpm build`
Dev server: Already running on port 7720 (Next.js)

CSS load order: tokens.css → components.css → radix-compat.css → motion.css
Component pattern: Radix Primitive + catalog CSS class names + radix-compat bridges data-state
Key file: `~/catcatcat/ui/styles/radix-compat.css` — bridges catalog class selectors to Radix data-state attributes

20 components: Button, Input, Textarea, Label, Separator, Card, Badge, Avatar, Progress, Slider, Dialog, Accordion, Tabs, Tooltip, Popover, DropdownMenu, Select, Switch, Checkbox, Toast

## Loop State

```
status: active
iteration: 3
interval: 10m
cron_id: a9d686fa
checkpoint_interval: 10
verification_baseline: pnpm build passes (23.28 KB ESM, 14.10 KB DTS)
project_goals: Fix all 20 components to match catalog spec via browser verification, then Stage 8 (integration test in fresh project), then Stage 9 (prep for npm publish)
current_focus: Stage 9b — create GitHub repo and push
last_action: Stage 9a COMPLETE. Package prepped: README.md, sideEffects for CSS, keywords, license MIT, repository field. Pack is 11 files / 64 KB. Build passes.
failure_log: []
blocked: [Stage 9 npm publish — needs user credentials/login]
```

### Up Next
1. [GREEN] Stage 9b: Create GitHub repo catcatcatstudio/ui, push code
2. [RED] Stage 9c: npm publish — needs user npm login/credentials

### Completed
- [0] Created radix-compat.css, fixed switch/popover/dropdown/accordion/tabs/toast. Browser-verified 8+ components passing.
- [1] Browser-verified select, dialog, tooltip, checkbox. All 20 components passing.
- [2] Stage 8: Integration test — fresh Next.js project, all 20 components render.
- [3] Stage 9a: Package prep — README, sideEffects, license, keywords, repository. 11 files / 64 KB.

### Momentum
- iter-0: GREEN (radix-compat.css systemic fix + 8 components verified)
- iter-1: GREEN (remaining 4 components verified — all 20 passing)
- iter-2: GREEN (Stage 8 integration test passes)
- iter-3: GREEN (Stage 9a package prep)

### Working Memory
- **radix-compat.css** is the bridge layer. Catalog CSS uses .open/.active/.visible classes; Radix uses [data-state]. The compat file overrides conflicting properties (opacity:0, position:absolute, ::before/::after arrows) and adds data-state selectors.
- **Floating elements** (popover, tooltip, dropdown, select dropdown): Radix portals to body. Catalog CSS positioning stripped. Radix handles placement. Motion.css handles blur entrance animation via [data-side][data-state].
- **Switch DOM mismatch**: Catalog expects input + .toggle-track::after. Radix renders button[role="switch"] + span.toggle-knob. Compat CSS hides ::after pseudo, styles .toggle-knob directly, uses [data-state="checked"].
- **Toast**: Sonner renders lazily on first toast() call. Styling via [data-sonner-toast] selectors with !important to override Sonner defaults.
- **Dropdown label fix**: Component used "dropdown-label" class but catalog CSS uses "dropdown-group". Fixed in component.
- **Test app public dir**: CSS files served from ~/catcatcat/ui/test-app/public/. Must copy radix-compat.css there when updating.
- **Dev server**: Next.js on port 7720, process 32110.
- **Build warnings**: "use client" directive warning from tsup bundling is expected/harmless. Post-build script re-adds it.
