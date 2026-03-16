import { forwardRef } from "react"
import { cn } from "../utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline" | "ghost"
  intent?: "success" | "error" | "warning"
  size?: "sm" | "md"
  dot?: boolean
  count?: boolean
  attention?: boolean
  enter?: boolean
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "solid", intent, size = "md", dot, count, attention, enter, className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "badge",
        variant,
        intent,
        size !== "md" && size,
        dot && "dot",
        count && "count",
        attention && "attention",
        enter && "enter",
        className
      )}
      {...props}
    />
  )
)
Badge.displayName = "Badge"

export const BadgeDismiss = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn("badge-dismiss", className)} {...props} />
  )
)
BadgeDismiss.displayName = "BadgeDismiss"

export const BadgeGroup = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("badge-group", className)} {...props} />
  )
)
BadgeGroup.displayName = "BadgeGroup"
