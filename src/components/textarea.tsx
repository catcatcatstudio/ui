import { forwardRef } from "react"
import { cn } from "../utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "bordered" | "underline" | "ghost"
  textareaSize?: "sm" | "md" | "lg"
  error?: boolean
  fullWidth?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant = "bordered", textareaSize = "md", error, fullWidth, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "input textarea",
          variant,
          textareaSize !== "md" && textareaSize,
          error && "error",
          props.disabled && "disabled",
          fullWidth && "full-width",
          className
        )}
      >
        <textarea ref={ref} {...props} />
      </div>
    )
  }
)
Textarea.displayName = "Textarea"
