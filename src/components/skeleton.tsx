"use client"

import { forwardRef } from "react"
import { cn } from "../utils"

// Skeleton
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "heading" | "circle" | "rounded"
  shimmer?: boolean
  inline?: boolean
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant, shimmer, inline, className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "skeleton",
        variant,
        shimmer && "shimmer",
        inline && "inline",
        className
      )}
      style={style}
      {...props}
    />
  )
)
Skeleton.displayName = "Skeleton"

// Skeleton group (for staggered entrance)
export interface SkeletonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  stagger?: boolean
}

export const SkeletonGroup = forwardRef<HTMLDivElement, SkeletonGroupProps>(
  ({ stagger, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("skeleton-group", stagger && "stagger", className)}
      {...props}
    />
  )
)
SkeletonGroup.displayName = "SkeletonGroup"
