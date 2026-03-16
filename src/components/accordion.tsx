"use client"

import { forwardRef } from "react"
import * as RadixAccordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "../utils"

// Root
export interface AccordionMultiProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "multiple"
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  flush?: boolean
  disabled?: boolean
}

export interface AccordionSingleProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "single"
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  collapsible?: boolean
  flush?: boolean
  disabled?: boolean
}

export type AccordionProps = AccordionMultiProps | AccordionSingleProps

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ flush, className, ...props }, ref) => (
    <RadixAccordion.Root
      ref={ref}
      className={cn("accordion", flush && "flush", className)}
      {...(props as any)}
    />
  )
)
Accordion.displayName = "Accordion"

// Item
export const AccordionItem = forwardRef<HTMLDivElement, RadixAccordion.AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <RadixAccordion.Item
      ref={ref}
      className={cn("accordion-item", className)}
      {...props}
    />
  )
)
AccordionItem.displayName = "AccordionItem"

// Trigger (the clickable header)
export const AccordionTrigger = forwardRef<HTMLButtonElement, RadixAccordion.AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <RadixAccordion.Header asChild>
      <div>
        <RadixAccordion.Trigger
          ref={ref}
          className={cn("accordion-header", className)}
          {...props}
        >
          {children}
          <ChevronDownIcon className="accordion-chevron" />
        </RadixAccordion.Trigger>
      </div>
    </RadixAccordion.Header>
  )
)
AccordionTrigger.displayName = "AccordionTrigger"

// Content (the expandable panel)
export const AccordionContent = forwardRef<HTMLDivElement, RadixAccordion.AccordionContentProps>(
  ({ className, children, ...props }, ref) => (
    <RadixAccordion.Content
      ref={ref}
      className={cn("accordion-panel", className)}
      {...props}
    >
      <div className="accordion-panel-inner">
        <div className="accordion-panel-content">
          {children}
        </div>
      </div>
    </RadixAccordion.Content>
  )
)
AccordionContent.displayName = "AccordionContent"
