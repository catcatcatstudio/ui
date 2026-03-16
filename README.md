# @catcatcat/ui

React component library for the cat-1a design system.

## Install

```bash
pnpm add @catcatcat/ui
```

## Setup

1. Load IBM Plex Mono (via `next/font/google` or `<link>` tag)

2. Add CSS to your layout — either as link tags or CSS imports:

```html
<link rel="stylesheet" href="node_modules/@catcatcat/ui/styles/tokens.css" />
<link rel="stylesheet" href="node_modules/@catcatcat/ui/styles/components.css" />
<link rel="stylesheet" href="node_modules/@catcatcat/ui/styles/radix-compat.css" />
<link rel="stylesheet" href="node_modules/@catcatcat/ui/styles/motion.css" />
```

Or copy the CSS files to your public directory and reference them there.

3. Wrap your app with providers:

```tsx
import { TooltipProvider, Toaster } from "@catcatcat/ui"

<TooltipProvider>
  {children}
</TooltipProvider>
<Toaster />
```

## Usage

```tsx
import { Button, Card, CardBody, Dialog, Tabs } from "@catcatcat/ui"

<Button variant="solid" size="sm">Save</Button>
```

## Components

20 components built on Radix UI primitives with cat-1a styling:

Button, Input, Textarea, Label, Separator, Card, Badge, Avatar, Progress, Slider, Accordion, Tabs, Tooltip, Popover, DropdownMenu, Select, Switch, Checkbox, Dialog, Toast

## Architecture

- **Radix UI** for accessible headless primitives
- **Catalog CSS** (components.css) for visual styling — loaded via link tags, not through Tailwind
- **radix-compat.css** bridges catalog class selectors to Radix data-state attributes
- **motion.css** provides cat-1a blur materialization animations
- **Tailwind** for layout utilities only (consumer's choice)
