import { forwardRef } from "react"
import { cn } from "../utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  confirmed?: boolean
  error?: boolean
  iconOnly?: boolean
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", size = "md", loading, confirmed, error, iconOnly, fullWidth, className, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "btn",
          variant,
          size !== "md" && size,
          iconOnly && "icon-only",
          fullWidth && "full-width",
          loading && "loading",
          confirmed && "confirmed",
          error && "error",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"
