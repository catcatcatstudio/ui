"use client"

import { forwardRef } from "react"
import * as RadixTabs from "@radix-ui/react-tabs"
import { cn } from "../utils"

// Root
export interface TabsProps extends RadixTabs.TabsProps {
  size?: "sm" | "md" | "lg"
  pill?: boolean
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ size = "md", pill, className, ...props }, ref) => (
    <RadixTabs.Root
      ref={ref}
      className={cn(
        "tabs",
        size !== "md" && size,
        pill && "pill",
        className
      )}
      {...props}
    />
  )
)
Tabs.displayName = "Tabs"

// List (nav)
export interface TabsListProps extends RadixTabs.TabsListProps {
  align?: "start" | "center" | "stretch"
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ align, className, ...props }, ref) => (
    <RadixTabs.List
      ref={ref}
      className={cn("tabs-nav", align, className)}
      {...props}
    />
  )
)
TabsList.displayName = "TabsList"

// Trigger
export const TabsTrigger = forwardRef<HTMLButtonElement, RadixTabs.TabsTriggerProps>(
  ({ className, ...props }, ref) => (
    <RadixTabs.Trigger
      ref={ref}
      className={cn("tabs-trigger", className)}
      {...props}
    />
  )
)
TabsTrigger.displayName = "TabsTrigger"

// Content (panel)
export const TabsContent = forwardRef<HTMLDivElement, RadixTabs.TabsContentProps>(
  ({ className, ...props }, ref) => (
    <RadixTabs.Content
      ref={ref}
      className={cn("tabs-panel", className)}
      {...props}
    />
  )
)
TabsContent.displayName = "TabsContent"
