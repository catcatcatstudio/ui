"use client"

import { forwardRef } from "react"
import { cn } from "../utils"

// Table wrapper (for horizontal scroll)
export interface TableWrapProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollLeft?: boolean
  scrollRight?: boolean
}

export const TableWrap = forwardRef<HTMLDivElement, TableWrapProps>(
  ({ scrollLeft, scrollRight, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("table-wrap", scrollLeft && "scroll-left", scrollRight && "scroll-right", className)}
      {...props}
    >
      <div className="table-wrap-inner">{children}</div>
    </div>
  )
)
TableWrap.displayName = "TableWrap"

// Table
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  variant?: "default" | "striped" | "minimal"
  tableSize?: "sm" | "md"
  sticky?: boolean
  loading?: boolean
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ variant = "default", tableSize = "md", sticky, loading, className, ...props }, ref) => (
    <table
      ref={ref}
      className={cn(
        "table",
        variant !== "default" && variant,
        tableSize === "sm" && "sm",
        sticky && "sticky",
        loading && "loading",
        className
      )}
      {...props}
    />
  )
)
Table.displayName = "Table"

// TableHeader
export const TableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={className} {...props} />
  )
)
TableHeader.displayName = "TableHeader"

// TableBody
export const TableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={className} {...props} />
  )
)
TableBody.displayName = "TableBody"

// TableFooter
export const TableFooter = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={className} {...props} />
  )
)
TableFooter.displayName = "TableFooter"

// TableRow
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ selected, className, ...props }, ref) => (
    <tr ref={ref} className={cn(selected && "selected", className)} {...props} />
  )
)
TableRow.displayName = "TableRow"

// TableHead (th)
export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean
  sortDir?: "asc" | "desc" | null
}

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ sortable, sortDir, className, children, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        sortable && "sortable",
        sortDir === "asc" && "sort-asc",
        sortDir === "desc" && "sort-desc",
        className
      )}
      {...props}
    >
      {children}
      {sortable && <span className="sort-icon" />}
    </th>
  )
)
TableHead.displayName = "TableHead"

// TableCell (td)
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  truncate?: boolean
  textRight?: boolean
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ truncate, textRight, className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(truncate && "truncate", textRight && "text-right", className)}
      {...props}
    />
  )
)
TableCell.displayName = "TableCell"

// TableEmpty
export const TableEmpty = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("table-empty", className)} {...props} />
  )
)
TableEmpty.displayName = "TableEmpty"
