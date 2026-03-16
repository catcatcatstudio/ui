"use client"

import { forwardRef } from "react"
import * as RadixCheckbox from "@radix-ui/react-checkbox"
import { CheckIcon, MinusIcon } from "lucide-react"
import { cn } from "../utils"

export interface CheckboxProps extends RadixCheckbox.CheckboxProps {
  size?: "sm" | "md"
  error?: boolean
  label?: string
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ size = "md", error, label, className, ...props }, ref) => {
    const checkboxEl = (
      <RadixCheckbox.Root
        ref={ref}
        className={cn(
          "checkbox-box",
          size === "sm" && "sm",
          error && "error",
          className
        )}
        {...props}
      >
        <RadixCheckbox.Indicator>
          {props.checked === "indeterminate" ? (
            <MinusIcon />
          ) : (
            <CheckIcon />
          )}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    )

    if (label) {
      return (
        <label className={cn("checkbox", size === "sm" && "sm", props.disabled && "disabled")}>
          {checkboxEl}
          {label}
        </label>
      )
    }

    return checkboxEl
  }
)
Checkbox.displayName = "Checkbox"
