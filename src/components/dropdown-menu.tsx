"use client"

import { forwardRef } from "react"
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu"
import { cn } from "../utils"

export function DropdownMenu(props: RadixDropdownMenu.DropdownMenuProps) {
  return <RadixDropdownMenu.Root {...props} />
}

export const DropdownMenuTrigger = forwardRef<HTMLButtonElement, RadixDropdownMenu.DropdownMenuTriggerProps>(
  (props, ref) => <RadixDropdownMenu.Trigger ref={ref} asChild {...props} />
)
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

export const DropdownMenuContent = forwardRef<HTMLDivElement, RadixDropdownMenu.DropdownMenuContentProps>(
  ({ className, sideOffset = 4, align = "start", ...props }, ref) => (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        ref={ref}
        sideOffset={sideOffset}
        align={align}
        className={cn("dropdown", className)}
        {...props}
      />
    </RadixDropdownMenu.Portal>
  )
)
DropdownMenuContent.displayName = "DropdownMenuContent"

export const DropdownMenuItem = forwardRef<HTMLDivElement, RadixDropdownMenu.DropdownMenuItemProps & { danger?: boolean }>(
  ({ danger, className, ...props }, ref) => (
    <RadixDropdownMenu.Item
      ref={ref}
      className={cn("dropdown-item", danger && "danger", className)}
      {...props}
    />
  )
)
DropdownMenuItem.displayName = "DropdownMenuItem"

export const DropdownMenuLabel = forwardRef<HTMLDivElement, RadixDropdownMenu.DropdownMenuLabelProps>(
  ({ className, ...props }, ref) => (
    <RadixDropdownMenu.Label
      ref={ref}
      className={cn("dropdown-group", className)}
      {...props}
    />
  )
)
DropdownMenuLabel.displayName = "DropdownMenuLabel"

export const DropdownMenuSeparator = forwardRef<HTMLDivElement, RadixDropdownMenu.DropdownMenuSeparatorProps>(
  ({ className, ...props }, ref) => (
    <RadixDropdownMenu.Separator
      ref={ref}
      className={cn("dropdown-divider", className)}
      {...props}
    />
  )
)
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

export const DropdownMenuGroup = forwardRef<HTMLDivElement, RadixDropdownMenu.DropdownMenuGroupProps>(
  (props, ref) => <RadixDropdownMenu.Group ref={ref} {...props} />
)
DropdownMenuGroup.displayName = "DropdownMenuGroup"

// Shortcut text (right-aligned in item)
export function DropdownMenuShortcut({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <kbd className={cn("dropdown-shortcut", className)} style={{ marginLeft: "auto", color: "var(--text-dim)", fontWeight: 400 }} {...props} />
}
