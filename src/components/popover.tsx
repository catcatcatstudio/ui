"use client"

import { forwardRef } from "react"
import * as RadixPopover from "@radix-ui/react-popover"
import { cn } from "../utils"

// Root
export function Popover(props: RadixPopover.PopoverProps) {
  return <RadixPopover.Root {...props} />
}

// Trigger
export const PopoverTrigger = forwardRef<HTMLButtonElement, RadixPopover.PopoverTriggerProps>(
  (props, ref) => <RadixPopover.Trigger ref={ref} asChild {...props} />
)
PopoverTrigger.displayName = "PopoverTrigger"

// Close
export const PopoverClose = forwardRef<HTMLButtonElement, RadixPopover.PopoverCloseProps>(
  (props, ref) => <RadixPopover.Close ref={ref} asChild {...props} />
)
PopoverClose.displayName = "PopoverClose"

// Content
export const PopoverContent = forwardRef<HTMLDivElement, RadixPopover.PopoverContentProps>(
  ({ className, sideOffset = 10, children, ...props }, ref) => (
    <RadixPopover.Portal>
      <RadixPopover.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn("popover", className)}
        {...props}
      >
        {children}
        <RadixPopover.Arrow className="popover-radix-arrow" />
      </RadixPopover.Content>
    </RadixPopover.Portal>
  )
)
PopoverContent.displayName = "PopoverContent"
