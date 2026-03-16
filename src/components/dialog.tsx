"use client"

import { forwardRef } from "react"
import * as RadixDialog from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { cn } from "../utils"

// Root
export function Dialog(props: RadixDialog.DialogProps) {
  return <RadixDialog.Root {...props} />
}

// Trigger
export function DialogTrigger(props: RadixDialog.DialogTriggerProps) {
  return <RadixDialog.Trigger asChild {...props} />
}

// Close
export function DialogClose(props: RadixDialog.DialogCloseProps) {
  return <RadixDialog.Close asChild {...props} />
}

// Content (portal + overlay + panel)
export interface DialogContentProps extends RadixDialog.DialogContentProps {
  size?: "sm" | "md" | "lg"
  danger?: boolean
  showDismiss?: boolean
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ size = "md", danger, showDismiss = true, className, children, ...props }, ref) => (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="modal-overlay" />
      <RadixDialog.Content
        ref={ref}
        className={cn(
          "modal",
          size !== "md" && size,
          danger && "danger",
          className
        )}
        data-show-dismiss={showDismiss ? "" : undefined}
        {...props}
      >
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  )
)
DialogContent.displayName = "DialogContent"

// Header (includes dismiss button in modal-actions)
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showDismiss?: boolean
}

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ showDismiss = true, className, children, ...props }, ref) => (
    <div ref={ref} className={cn("modal-header", className)} {...props}>
      {children}
      {showDismiss && (
        <div className="modal-actions">
          <RadixDialog.Close className="modal-dismiss" aria-label="Close">
            <XIcon />
          </RadixDialog.Close>
        </div>
      )}
    </div>
  )
)
DialogHeader.displayName = "DialogHeader"

// Title block (wraps both title h2 and description p in modal-title div)
export interface DialogTitleBlockProps {
  heading: React.ReactNode
  description?: React.ReactNode
  className?: string
}

export const DialogTitleBlock = forwardRef<HTMLDivElement, DialogTitleBlockProps>(
  ({ heading, description, className }, ref) => (
    <div ref={ref} className={cn("modal-title", className)}>
      <RadixDialog.Title asChild>
        <h2>{heading}</h2>
      </RadixDialog.Title>
      {description && (
        <RadixDialog.Description asChild>
          <p>{description}</p>
        </RadixDialog.Description>
      )}
    </div>
  )
)
DialogTitleBlock.displayName = "DialogTitleBlock"

// Standalone Title (if you need just the h2 without the wrapper)
export const DialogTitle = forwardRef<HTMLHeadingElement, RadixDialog.DialogTitleProps>(
  ({ className, children, ...props }, ref) => (
    <RadixDialog.Title ref={ref} asChild {...props}>
      <h2 className={className}>{children}</h2>
    </RadixDialog.Title>
  )
)
DialogTitle.displayName = "DialogTitle"

// Standalone Description
export const DialogDescription = forwardRef<HTMLParagraphElement, RadixDialog.DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <RadixDialog.Description ref={ref} asChild {...props}>
      <p className={className} />
    </RadixDialog.Description>
  )
)
DialogDescription.displayName = "DialogDescription"

// Body
export const DialogBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("modal-body", className)} {...props} />
  )
)
DialogBody.displayName = "DialogBody"

// Footer
export const DialogFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { spread?: boolean }>(
  ({ spread, className, ...props }, ref) => (
    <div ref={ref} className={cn("modal-footer", spread && "spread", className)} {...props} />
  )
)
DialogFooter.displayName = "DialogFooter"
