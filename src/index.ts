"use client"

// @catcatcat/ui — cat-1a design system

// Static components — batch 1
export { Button, type ButtonProps } from "./components/button"
export { Input, Field, FieldLabel, FieldHelper, FieldError, type InputProps, type FieldProps } from "./components/input"
export { Textarea, type TextareaProps } from "./components/textarea"
export { Label, type LabelProps } from "./components/label"
export { Separator, type SeparatorProps } from "./components/separator"

// Static components — batch 2
export { Card, CardHeader, CardTitle, CardActions, CardBody, CardFooter, CardMedia, type CardProps } from "./components/card"
export { Badge, BadgeDismiss, BadgeGroup, type BadgeProps } from "./components/badge"
export { Avatar, AvatarGroup, type AvatarProps } from "./components/avatar"
export { Progress, type ProgressProps } from "./components/progress"
export { Slider, type SliderProps } from "./components/slider"

// Interactive components — batch 1
export {
  Dialog, DialogTrigger, DialogClose, DialogContent,
  DialogHeader, DialogTitleBlock, DialogTitle, DialogDescription, DialogBody, DialogFooter,
  type DialogContentProps, type DialogTitleBlockProps, type DialogHeaderProps
} from "./components/dialog"
export {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  type AccordionProps
} from "./components/accordion"
export {
  Tabs, TabsList, TabsTrigger, TabsContent,
  type TabsProps, type TabsListProps
} from "./components/tabs"
export {
  TooltipProvider, Tooltip, TooltipTrigger, TooltipContent,
} from "./components/tooltip"
export {
  Popover, PopoverTrigger, PopoverClose, PopoverContent,
} from "./components/popover"
export {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuGroup, DropdownMenuShortcut,
} from "./components/dropdown-menu"
export {
  Select, SelectTrigger, SelectValue, SelectContent, SelectViewport,
  SelectItem, SelectGroup, SelectLabel, SelectSeparator,
  type SelectTriggerProps,
} from "./components/select"
export { Switch, type SwitchProps } from "./components/switch"
export { Checkbox, type CheckboxProps } from "./components/checkbox"
export { Toaster, toast, type ToasterProps } from "./components/toast"
