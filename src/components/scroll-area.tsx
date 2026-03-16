"use client"

import { forwardRef } from "react"
import * as RadixScrollArea from "@radix-ui/react-scroll-area"
import { cn } from "../utils"

export interface ScrollAreaProps extends RadixScrollArea.ScrollAreaProps {
  orientation?: "vertical" | "horizontal" | "both"
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ orientation = "vertical", className, children, ...props }, ref) => (
    <RadixScrollArea.Root
      ref={ref}
      className={cn("scroll-area", className)}
      {...props}
    >
      <RadixScrollArea.Viewport className="scroll-area-viewport">
        {children}
      </RadixScrollArea.Viewport>
      {(orientation === "vertical" || orientation === "both") && (
        <RadixScrollArea.Scrollbar orientation="vertical" className="scroll-area-scrollbar">
          <RadixScrollArea.Thumb className="scroll-area-thumb" />
        </RadixScrollArea.Scrollbar>
      )}
      {(orientation === "horizontal" || orientation === "both") && (
        <RadixScrollArea.Scrollbar orientation="horizontal" className="scroll-area-scrollbar horizontal">
          <RadixScrollArea.Thumb className="scroll-area-thumb" />
        </RadixScrollArea.Scrollbar>
      )}
      <RadixScrollArea.Corner />
    </RadixScrollArea.Root>
  )
)
ScrollArea.displayName = "ScrollArea"
