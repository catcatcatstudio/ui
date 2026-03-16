"use client"

import { forwardRef } from "react"
import * as RadixDialog from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { cn } from "../utils"

// Root
export function Sheet(props: RadixDialog.DialogProps) {
  return <RadixDialog.Root {...props} />
}

// Trigger
export function SheetTrigger(props: RadixDialog.DialogTriggerProps) {
  return <RadixDialog.Trigger asChild {...props} />
}

// Close
export function SheetClose(props: RadixDialog.DialogCloseProps) {
  return <RadixDialog.Close asChild {...props} />
}

// Content
export interface SheetContentProps extends RadixDialog.DialogContentProps {
  side?: "left" | "right" | "top" | "bottom"
  size?: "sm" | "md" | "lg"
}

export const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = "right", size = "md", className, children, ...props }, ref) => (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="sheet-overlay" />
      <RadixDialog.Content
        ref={ref}
        className={cn("sheet", `sheet-${side}`, size !== "md" && size, className)}
        {...props}
      >
        {children}
        <RadixDialog.Close className="sheet-dismiss" aria-label="Close">
          <XIcon />
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  )
)
SheetContent.displayName = "SheetContent"

// Header
export const SheetHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sheet-header", className)} {...props} />
  )
)
SheetHeader.displayName = "SheetHeader"

// Title
export const SheetTitle = forwardRef<HTMLHeadingElement, RadixDialog.DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <RadixDialog.Title ref={ref} asChild {...props}>
      <h2 className={cn("sheet-title", className)}>{props.children}</h2>
    </RadixDialog.Title>
  )
)
SheetTitle.displayName = "SheetTitle"

// Description
export const SheetDescription = forwardRef<HTMLParagraphElement, RadixDialog.DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <RadixDialog.Description ref={ref} className={cn("sheet-description", className)} {...props} />
  )
)
SheetDescription.displayName = "SheetDescription"

// Body
export const SheetBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sheet-body", className)} {...props} />
  )
)
SheetBody.displayName = "SheetBody"

// Footer
export const SheetFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sheet-footer", className)} {...props} />
  )
)
SheetFooter.displayName = "SheetFooter"
