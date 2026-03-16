"use client"

import { forwardRef, createContext, useContext } from "react"
import { cn } from "../utils"

// Context for collapsed state
const SidebarContext = createContext(false)

// Sidebar root
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ collapsed = false, className, children, ...props }, ref) => (
    <SidebarContext.Provider value={collapsed}>
      <aside
        ref={ref}
        className={cn("sidebar", collapsed && "collapsed", className)}
        {...props}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  )
)
Sidebar.displayName = "Sidebar"

// Header
export const SidebarHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sidebar-header", className)} {...props} />
  )
)
SidebarHeader.displayName = "SidebarHeader"

// Logo
export const SidebarLogo = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sidebar-logo", className)} {...props} />
  )
)
SidebarLogo.displayName = "SidebarLogo"

// Title
export const SidebarTitle = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("sidebar-title", className)} {...props} />
  )
)
SidebarTitle.displayName = "SidebarTitle"

// Collapse button
export const SidebarCollapse = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn("sidebar-collapse", className)} {...props} />
  )
)
SidebarCollapse.displayName = "SidebarCollapse"

// Nav container
export const SidebarNav = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} className={cn("sidebar-nav", className)} {...props} />
  )
)
SidebarNav.displayName = "SidebarNav"

// Nav item
export interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  asChild?: boolean
}

export const SidebarItem = forwardRef<HTMLButtonElement, SidebarItemProps>(
  ({ active, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn("sidebar-item", active && "active", className)}
      {...props}
    />
  )
)
SidebarItem.displayName = "SidebarItem"

// Icon wrapper
export const SidebarIcon = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("sidebar-icon", className)} {...props} />
  )
)
SidebarIcon.displayName = "SidebarIcon"

// Label
export const SidebarLabel = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("sidebar-label", className)} {...props} />
  )
)
SidebarLabel.displayName = "SidebarLabel"

// Group
export const SidebarGroup = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sidebar-group", className)} {...props} />
  )
)
SidebarGroup.displayName = "SidebarGroup"

// Group label
export const SidebarGroupLabel = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sidebar-group-label", className)} {...props} />
  )
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

// Nested nav
export const SidebarNested = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} className={cn("sidebar-nested", className)} {...props} />
  )
)
SidebarNested.displayName = "SidebarNested"

// Divider
export const SidebarDivider = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sidebar-divider", className)} {...props} />
  )
)
SidebarDivider.displayName = "SidebarDivider"

// Footer
export const SidebarFooter = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <footer ref={ref} className={cn("sidebar-footer", className)} {...props} />
  )
)
SidebarFooter.displayName = "SidebarFooter"

// Avatar
export const SidebarAvatar = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sidebar-avatar", className)} {...props} />
  )
)
SidebarAvatar.displayName = "SidebarAvatar"

// User info
export const SidebarUser = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sidebar-user", className)} {...props} />
  )
)
SidebarUser.displayName = "SidebarUser"

// User name
export const SidebarUserName = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sidebar-user-name", className)} {...props} />
  )
)
SidebarUserName.displayName = "SidebarUserName"

// User role
export const SidebarUserRole = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("sidebar-user-role", className)} {...props} />
  )
)
SidebarUserRole.displayName = "SidebarUserRole"
