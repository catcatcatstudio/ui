"use client"

import {
  Button, Input, Field, FieldLabel, FieldHelper, Textarea, Label, Separator,
  Card, CardHeader, CardTitle, CardBody, CardFooter,
  Dialog, DialogTrigger, DialogClose, DialogContent,
  DialogHeader, DialogTitleBlock, DialogBody, DialogFooter,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Tooltip, TooltipTrigger, TooltipContent,
  Popover, PopoverTrigger, PopoverContent,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuGroup, DropdownMenuShortcut,
  Select, SelectTrigger, SelectValue, SelectContent, SelectViewport,
  SelectItem, SelectGroup, SelectLabel,
  Switch,
  Checkbox,
  toast,
  Badge, BadgeGroup,
  Avatar, AvatarGroup,
  Progress,
  Slider,
} from "@catcatcat/ui"

export default function Test() {
  return (
    <div className="mx-auto max-w-[720px] px-8 py-16">
      <h1>@catcatcat/ui</h1>
      <p>All static components from the package.</p>

      {/* BUTTON */}
      <div className="mt-12 flex flex-col gap-4">
        <h2>Button</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="solid" size="sm">Solid SM</Button>
          <Button variant="solid">Solid MD</Button>
          <Button variant="solid" size="lg">Solid LG</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm">Outline SM</Button>
          <Button variant="outline">Outline MD</Button>
          <Button variant="outline" size="lg">Outline LG</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="sm">Ghost SM</Button>
          <Button variant="ghost">Ghost MD</Button>
          <Button variant="ghost" size="lg">Ghost LG</Button>
        </div>
        <div className="flex gap-3">
          <Button>Save</Button>
          <Button variant="ghost">Cancel</Button>
        </div>
        <div className="flex gap-3">
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </div>

      <Separator className="my-12" />

      {/* INPUT */}
      <div className="flex flex-col gap-4 max-w-md">
        <h2>Input</h2>
        <Field><FieldLabel>Bordered</FieldLabel><Input placeholder="Standard" /><FieldHelper>Helper text</FieldHelper></Field>
        <Field><FieldLabel>Underline</FieldLabel><Input variant="underline" placeholder="Compact" /></Field>
        <Field><FieldLabel>Ghost</FieldLabel><Input variant="ghost" placeholder="Property panel" /></Field>
        <Field><FieldLabel>Flush</FieldLabel><Input variant="flush" placeholder="Inline editable" /></Field>
        <Field><FieldLabel>Error</FieldLabel><Input error placeholder="Something wrong" /></Field>
        <Field><FieldLabel>Disabled</FieldLabel><Input disabled placeholder="Cannot edit" /></Field>
      </div>

      <Separator className="my-12" />

      {/* TEXTAREA */}
      <div className="flex flex-col gap-4 max-w-md">
        <h2>Textarea</h2>
        <Field><FieldLabel>Description</FieldLabel><Textarea placeholder="Write something..." /></Field>
      </div>

      <Separator className="my-12" />

      {/* CARD */}
      <div className="flex flex-col gap-4">
        <h2>Card</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card variant="bordered">
            <CardHeader><CardTitle><h3>Bordered</h3><p>Standard container</p></CardTitle></CardHeader>
            <CardBody>Content inside the card body.</CardBody>
            <CardFooter spread>
              <span style={{ fontSize: '10px', opacity: 0.5 }}>Updated 2h ago</span>
              <Button variant="ghost" size="sm">View</Button>
            </CardFooter>
          </Card>
          <Card variant="elevated">
            <CardHeader><CardTitle><h3>Elevated</h3><p>Shadow separation</p></CardTitle></CardHeader>
            <CardBody>No visible border, shadow provides depth.</CardBody>
          </Card>
        </div>
      </div>

      <Separator className="my-12" />

      {/* BADGE */}
      <div className="flex flex-col gap-4">
        <h2>Badge</h2>
        <BadgeGroup>
          <Badge variant="solid">Solid</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="solid" intent="success">Success</Badge>
          <Badge variant="solid" intent="error">Error</Badge>
          <Badge variant="outline" intent="warning">Warning</Badge>
        </BadgeGroup>
        <BadgeGroup>
          <Badge dot intent="success" />
          <Badge dot intent="error" />
          <Badge dot intent="warning" />
          <Badge count>42</Badge>
          <Badge count size="sm">7</Badge>
        </BadgeGroup>
      </div>

      <Separator className="my-12" />

      {/* AVATAR */}
      <div className="flex flex-col gap-4">
        <h2>Avatar</h2>
        <div className="flex items-center gap-4">
          <Avatar size="sm" fallback="SM" />
          <Avatar fallback="MD" />
          <Avatar size="lg" fallback="LG" />
        </div>
      </div>

      <Separator className="my-12" />

      {/* PROGRESS */}
      <div className="flex flex-col gap-4 max-w-md">
        <h2>Progress</h2>
        <Progress value={75} />
        <Progress value={40} intent="success" />
        <Progress value={90} intent="error" />
      </div>

      <Separator className="my-12" />

      {/* SLIDER */}
      <div className="flex flex-col gap-4 max-w-md">
        <h2>Slider</h2>
        <Slider defaultValue={50} showValue />
        <Slider sliderSize="sm" defaultValue={30} label="Volume" showValue />
      </div>

      <Separator className="my-12" />

      <Separator className="my-12" />

      {/* ACCORDION */}
      <div className="flex flex-col gap-4">
        <h2>Accordion</h2>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is cat-1a?</AccordionTrigger>
            <AccordionContent>The tool aesthetic — warm greige, IBM Plex Mono, uppercase system text. The UI disappears so the output is the focus.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does the motion system work?</AccordionTrigger>
            <AccordionContent>Three curves: ease (state changes), ease-out (entrances), ease-spring (physical surfaces). Blur materialization is the signature.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What about dark mode?</AccordionTrigger>
            <AccordionContent>Three colorways (greige, mint, light) plus dark mode. Colors defined in OKLCH for perceptual uniformity.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Separator className="my-12" />

      {/* TABS */}
      <div className="flex flex-col gap-4">
        <h2>Tabs</h2>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            Overview content. The tab panel transitions smoothly when switching.
          </TabsContent>
          <TabsContent value="analytics">
            Analytics dashboard with charts and metrics.
          </TabsContent>
          <TabsContent value="settings">
            Settings panel with configuration options.
          </TabsContent>
        </Tabs>
      </div>

      <Separator className="my-12" />

      {/* TOOLTIP */}
      <div className="flex flex-col gap-4">
        <h2>Tooltip</h2>
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger><Button variant="outline" iconOnly>?</Button></TooltipTrigger>
            <TooltipContent>Info</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><Button variant="outline" iconOnly>!</Button></TooltipTrigger>
            <TooltipContent side="bottom">Below</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><Button variant="outline" iconOnly>→</Button></TooltipTrigger>
            <TooltipContent side="right">Side hint</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><Button variant="outline" iconOnly>←</Button></TooltipTrigger>
            <TooltipContent side="left">Side hint</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <Separator className="my-12" />

      {/* POPOVER */}
      <div className="flex flex-col gap-4">
        <h2>Popover</h2>
        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger><Button variant="outline">Bottom</Button></PopoverTrigger>
            <PopoverContent>
              <div style={{ padding: '12px 16px' }}>
                <p>Action one</p>
                <p>Action two</p>
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger><Button variant="outline">Top</Button></PopoverTrigger>
            <PopoverContent side="top">
              <div style={{ padding: '12px 16px' }}>
                <p>Action one</p>
                <p>Action two</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Separator className="my-12" />

      {/* SWITCH (Radix) */}
      <div className="flex flex-col gap-4">
        <h2>Switch</h2>
        <div className="flex gap-6">
          <Switch label="Notifications" />
          <Switch label="Dark mode" defaultChecked />
          <Switch label="Disabled" disabled />
        </div>
        <div className="flex gap-6">
          <Switch pill label="Pill off" />
          <Switch pill label="Pill on" defaultChecked />
        </div>
        <div className="flex gap-6">
          <Switch size="sm" label="Small" />
          <Switch size="lg" label="Large" defaultChecked />
        </div>
      </div>

      <Separator className="my-12" />

      {/* CHECKBOX (Radix) */}
      <div className="flex flex-col gap-4">
        <h2>Checkbox</h2>
        <div className="flex gap-6">
          <Checkbox label="Accept terms" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Disabled" disabled />
        </div>
      </div>

      <Separator className="my-12" />

      {/* DROPDOWN MENU */}
      <div className="flex flex-col gap-4">
        <h2>Dropdown Menu</h2>
        <div className="flex gap-3"><DropdownMenu>
          <DropdownMenuTrigger><Button variant="outline">Actions ▾</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Project</DropdownMenuLabel>
              <DropdownMenuItem>Edit <DropdownMenuShortcut>⌘E</DropdownMenuShortcut></DropdownMenuItem>
              <DropdownMenuItem>Duplicate <DropdownMenuShortcut>⌘D</DropdownMenuShortcut></DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem danger>Delete <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu></div>
      </div>

      <Separator className="my-12" />

      {/* TOAST */}
      <div className="flex flex-col gap-4">
        <h2>Toast</h2>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => toast("Settings updated.")}>Default</Button>
          <Button variant="outline" onClick={() => toast.success("File saved successfully.")}>Success</Button>
          <Button variant="outline" onClick={() => toast.error("Upload failed. Check your connection.")}>Error</Button>
          <Button variant="outline" onClick={() => toast.warning("Storage almost full. 94% used.")}>Warning</Button>
        </div>
      </div>

      <Separator className="my-12" />

      {/* SELECT */}
      <div className="flex flex-col gap-4">
        <h2>Select</h2>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger style={{ width: 200 }}>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectViewport>
                <SelectGroup>
                  <SelectLabel>Roles</SelectLabel>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                  <SelectItem value="guest" disabled>Guest</SelectItem>
                </SelectGroup>
              </SelectViewport>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator className="my-12" />

      {/* DIALOG */}
      <div className="flex flex-col gap-4">
        <h2>Dialog</h2>
        <div className="flex gap-3">
          <Dialog>
            <DialogTrigger><Button variant="outline">Open Dialog</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitleBlock heading="Create Project" description="Set up a new project workspace." />
              </DialogHeader>
              <DialogBody>
                <Field>
                  <FieldLabel>Project Name</FieldLabel>
                  <Input placeholder="my-project" />
                </Field>
              </DialogBody>
              <DialogFooter>
                <DialogClose><Button variant="ghost">Cancel</Button></DialogClose>
                <Button>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger><Button variant="outline">Danger Dialog</Button></DialogTrigger>
            <DialogContent size="sm" danger>
              <DialogHeader>
                <DialogTitleBlock heading="Delete Project" description="This action cannot be undone." />
              </DialogHeader>
              <DialogBody>
                <p>All files and history will be permanently removed.</p>
              </DialogBody>
              <DialogFooter>
                <DialogClose><Button variant="ghost">Cancel</Button></DialogClose>
                <Button>Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
