import { forwardRef } from "react"
import { cn } from "../utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "bordered" | "elevated" | "ghost"
  interactive?: boolean
  compact?: boolean
  selected?: boolean
  loading?: boolean
  fullWidth?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "bordered", interactive, compact, selected, loading, fullWidth, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "card",
        variant,
        interactive && "interactive",
        compact && "compact",
        selected && "selected",
        loading && "loading",
        fullWidth && "full-width",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-header", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

export const CardTitle = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-title", className)} {...props} />
  )
)
CardTitle.displayName = "CardTitle"

export const CardActions = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-actions", className)} {...props} />
  )
)
CardActions.displayName = "CardActions"

export const CardBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-body", className)} {...props} />
  )
)
CardBody.displayName = "CardBody"

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { spread?: boolean }>(
  ({ spread, className, ...props }, ref) => (
    <div ref={ref} className={cn("card-footer", spread && "spread", className)} {...props} />
  )
)
CardFooter.displayName = "CardFooter"

export const CardMedia = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-media", className)} {...props} />
  )
)
CardMedia.displayName = "CardMedia"
