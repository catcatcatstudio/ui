import { forwardRef } from "react"
import { cn } from "../utils"

export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical"
}

export const Separator = forwardRef<HTMLHRElement, SeparatorProps>(
  ({ orientation = "horizontal", className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn(
        orientation === "horizontal" ? "section-divider" : "section-divider-vertical",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = "Separator"
