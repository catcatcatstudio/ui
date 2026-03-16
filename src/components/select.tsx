"use client"

import { forwardRef } from "react"
import * as RadixSelect from "@radix-ui/react-select"
import { ChevronDownIcon, CheckIcon } from "lucide-react"
import { cn } from "../utils"

// Root
export function Select(props: RadixSelect.SelectProps) {
  return <RadixSelect.Root {...props} />
}

// Trigger
export interface SelectTriggerProps extends RadixSelect.SelectTriggerProps {
  variant?: "bordered" | "underline" | "ghost"
  selectSize?: "sm" | "md" | "lg"
}

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ variant = "bordered", selectSize = "md", className, children, ...props }, ref) => (
    <RadixSelect.Trigger
      ref={ref}
      className={cn(
        "select",
        variant,
        selectSize !== "md" && selectSize,
        className
      )}
      {...props}
    >
      {children}
      <RadixSelect.Icon className="select-chevron">
        <ChevronDownIcon />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  )
)
SelectTrigger.displayName = "SelectTrigger"

// Value
export function SelectValue(props: RadixSelect.SelectValueProps) {
  return <RadixSelect.Value className="select-value" {...props} />
}

// Content (dropdown)
export const SelectContent = forwardRef<HTMLDivElement, RadixSelect.SelectContentProps>(
  ({ className, position = "popper", sideOffset = 4, ...props }, ref) => (
    <RadixSelect.Portal>
      <RadixSelect.Content
        ref={ref}
        position={position}
        sideOffset={sideOffset}
        className={cn("select-dropdown", className)}
        {...props}
      />
    </RadixSelect.Portal>
  )
)
SelectContent.displayName = "SelectContent"

// Viewport
export const SelectViewport = forwardRef<HTMLDivElement, RadixSelect.SelectViewportProps>(
  ({ className, ...props }, ref) => (
    <RadixSelect.Viewport ref={ref} className={className} {...props} />
  )
)
SelectViewport.displayName = "SelectViewport"

// Item
export const SelectItem = forwardRef<HTMLDivElement, RadixSelect.SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <RadixSelect.Item
      ref={ref}
      className={cn("select-option", className)}
      {...props}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="check">
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
)
SelectItem.displayName = "SelectItem"

// Group
export function SelectGroup(props: RadixSelect.SelectGroupProps) {
  return <RadixSelect.Group {...props} />
}

// Group label
export const SelectLabel = forwardRef<HTMLDivElement, RadixSelect.SelectLabelProps>(
  ({ className, ...props }, ref) => (
    <RadixSelect.Label ref={ref} className={cn("select-group-label", className)} {...props} />
  )
)
SelectLabel.displayName = "SelectLabel"

// Separator
export const SelectSeparator = forwardRef<HTMLDivElement, RadixSelect.SelectSeparatorProps>(
  ({ className, ...props }, ref) => (
    <RadixSelect.Separator ref={ref} className={cn("select-divider", className)} {...props} />
  )
)
SelectSeparator.displayName = "SelectSeparator"
