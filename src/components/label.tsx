import { forwardRef } from "react"
import { cn } from "../utils"

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  hoverReveal?: boolean
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ hoverReveal, className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("field-label", hoverReveal && "hover-reveal", className)}
      {...props}
    />
  )
)
Label.displayName = "Label"
