import { forwardRef } from "react"
import { cn } from "../utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "bordered" | "underline" | "ghost" | "flush"
  inputSize?: "sm" | "md" | "lg"
  error?: boolean
  success?: boolean
  icon?: React.ReactNode
  iconEnd?: React.ReactNode
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "bordered", inputSize = "md", error, success, icon, iconEnd, fullWidth, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "input",
          variant,
          inputSize !== "md" && inputSize,
          error && "error",
          success && "success",
          props.disabled && "disabled",
          props.readOnly && "readonly",
          fullWidth && "full-width",
          className
        )}
      >
        {icon && <span className="input-icon">{icon}</span>}
        <input ref={ref} {...props} />
        {iconEnd && <span className="input-icon">{iconEnd}</span>}
      </div>
    )
  }
)
Input.displayName = "Input"

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  ({ fullWidth, className, ...props }, ref) => (
    <div ref={ref} className={cn("field", fullWidth && "full-width", className)} {...props} />
  )
)
Field.displayName = "Field"

export const FieldLabel = forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn("field-label", className)} {...props} />
  )
)
FieldLabel.displayName = "FieldLabel"

export const FieldHelper = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("field-helper", className)} {...props} />
  )
)
FieldHelper.displayName = "FieldHelper"

export const FieldError = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("field-error", className)} {...props} />
  )
)
FieldError.displayName = "FieldError"
