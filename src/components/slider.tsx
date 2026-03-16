import { forwardRef, useState, useCallback } from "react"
import { cn } from "../utils"

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  sliderSize?: "sm" | "md"
  label?: string
  showValue?: boolean
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ sliderSize = "md", label, showValue, className, onChange, defaultValue, value, min = 0, max = 100, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(Number(defaultValue ?? value ?? 0))
    const pct = ((internalValue - Number(min)) / (Number(max) - Number(min))) * 100

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(Number(e.target.value))
      onChange?.(e)
    }, [onChange])

    return (
      <div className={cn("slider", sliderSize !== "md" && sliderSize, className)}>
        {(label || showValue) && (
          <div className="slider-header">
            {label && <span className="slider-label">{label}</span>}
            {showValue && <span className="slider-value">{internalValue}</span>}
          </div>
        )}
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          value={internalValue}
          onChange={handleChange}
          style={{ '--slider-fill': `${pct}%` } as React.CSSProperties}
          {...props}
        />
      </div>
    )
  }
)
Slider.displayName = "Slider"
