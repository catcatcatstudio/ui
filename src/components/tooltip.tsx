"use client"

import { forwardRef } from "react"
import * as RadixTooltip from "@radix-ui/react-tooltip"
import { cn } from "../utils"

// Provider (wrap app once)
export function TooltipProvider({ children, ...props }: RadixTooltip.TooltipProviderProps) {
  return <RadixTooltip.Provider delayDuration={300} {...props}>{children}</RadixTooltip.Provider>
}

// Root
export function Tooltip(props: RadixTooltip.TooltipProps) {
  return <RadixTooltip.Root {...props} />
}

// Trigger
export const TooltipTrigger = forwardRef<HTMLButtonElement, RadixTooltip.TooltipTriggerProps>(
  (props, ref) => <RadixTooltip.Trigger ref={ref} asChild {...props} />
)
TooltipTrigger.displayName = "TooltipTrigger"

// Content
export const TooltipContent = forwardRef<HTMLDivElement, RadixTooltip.TooltipContentProps>(
  ({ className, sideOffset = 8, children, ...props }, ref) => (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn("tooltip", className)}
        {...props}
      >
        {children}
        <RadixTooltip.Arrow className="tooltip-arrow" />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  )
)
TooltipContent.displayName = "TooltipContent"
