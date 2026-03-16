"use client"

import { forwardRef } from "react"
import * as RadixSwitch from "@radix-ui/react-switch"
import { cn } from "../utils"

export interface SwitchProps extends RadixSwitch.SwitchProps {
  size?: "sm" | "md" | "lg"
  pill?: boolean
  label?: string
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ size = "md", pill, label, className, ...props }, ref) => {
    const switchEl = (
      <RadixSwitch.Root
        ref={ref}
        className={cn(
          "toggle-track",
          pill && "pill",
          size !== "md" && size,
          className
        )}
        {...props}
      >
        <RadixSwitch.Thumb className="toggle-knob" />
      </RadixSwitch.Root>
    )

    if (label) {
      return (
        <label className={cn(
          "toggle",
          size !== "md" && size,
          props.disabled && "disabled"
        )}>
          {switchEl}
          {label}
        </label>
      )
    }

    return switchEl
  }
)
Switch.displayName = "Switch"
