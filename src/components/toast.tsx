"use client"

import { Toaster as SonnerToaster } from "sonner"

export { toast } from "sonner"

export interface ToasterProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"
}

export function Toaster({ position = "bottom-right" }: ToasterProps) {
  return (
    <SonnerToaster
      position={position}
      closeButton
      toastOptions={{
        className: "toast",
        classNames: {
          toast: "toast",
          title: "toast-title",
          description: "toast-message",
          actionButton: "toast-action",
          closeButton: "toast-dismiss",
          success: "success",
          error: "error",
          warning: "warning",
          icon: "toast-icon",
        },
      }}
    />
  )
}
