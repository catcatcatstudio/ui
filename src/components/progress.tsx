import { forwardRef } from "react"
import { cn } from "../utils"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  size?: "sm" | "md" | "lg"
  intent?: "success" | "error" | "warning"
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, max = 100, size = "md", intent, className, ...props }, ref) => {
    const pct = Math.min(100, Math.max(0, (value / max) * 100))
    return (
      <div
        ref={ref}
        className={cn("progress", size !== "md" && size, intent, className)}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        {...props}
      >
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>
    )
  }
)
Progress.displayName = "Progress"
