import { forwardRef } from "react"
import { cn } from "../utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  src?: string
  alt?: string
  fallback?: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ size = "md", src, alt, fallback, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("avatar", size !== "md" && size, className)}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt || ""} className="avatar-img" />
      ) : (
        <span className="avatar-fallback">{fallback}</span>
      )}
    </div>
  )
)
Avatar.displayName = "Avatar"

export const AvatarGroup = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("avatar-group", className)} {...props} />
  )
)
AvatarGroup.displayName = "AvatarGroup"
