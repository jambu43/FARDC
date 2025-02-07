"use client"

import * as React from "react"
import { ChevronRight, ChevronDown, type LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

interface NavItem {
  id: string
  name: string
  icon?: string
  path?: string
  items?: NavItem[]
}

interface TreeSidenavProps {
  items: NavItem[]
  currentPath: string
}

export function TreeSidenav({ items, currentPath }: TreeSidenavProps) {
  const router = useRouter()
  const [openFolders, setOpenFolders] = React.useState<Record<string, boolean>>({})

  React.useEffect(() => {
    const newOpenFolders: Record<string, boolean> = {}
    const openActiveItemParents = (items: NavItem[]) => {
      for (const item of items) {
        if (item.path === currentPath || (item.items && openActiveItemParents(item.items))) {
          if (item.items) {
            newOpenFolders[item.id] = true
          }
          return true
        }
      }
      return false
    }
    openActiveItemParents(items)
    setOpenFolders(newOpenFolders)
  }, [items, currentPath])

  const toggleFolder = (id: string) => {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleClick = (item: NavItem) => {
    if (item.items && item.items.length > 0) {
      toggleFolder(item.id)
    } else if (item.path) {
      router.push(item.path)
    }
  }

  const renderItem = (item: NavItem, level = 0, isLast = false) => {
    const isOpen = openFolders[item.id]
    const hasItems = item.items && item.items.length > 0
    const Icon = item.icon ? (LucideIcons[item.icon as keyof typeof LucideIcons] as LucideIcon) : null
    const isActive = item.path === currentPath

    return (
      <div key={item.id} className={cn("relative", level === 0 && !isLast && "mb-2 pb-2 border-b border-gray-200")}>
        <button
          onClick={() => handleClick(item)}
          className={cn(
            "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
            isActive
              ? "bg-gray-200 text-gray-900 font-medium dark:bg-gray-800 dark:text-gray-200"
              : "text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700",
            hasItems && "font-medium",
          )}
          style={{ paddingLeft: `${(level + 1) * 12}px` }}
        >
          {Icon && <Icon className={cn("h-4 w-4", isActive ? "text-gray-900" : "text-gray-500")} />}
          <span className="flex-grow text-left">{item.name}</span>
          {hasItems && (isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
        </button>
        {hasItems && isOpen && (
          <div className="relative mt-1">
            {item.items!.map((subItem, index) => renderItem(subItem, level + 1, index === item.items!.length - 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-64 overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="space-y-0.5">{items.map((item, index) => renderItem(item, 0, index === items.length - 1))}</div>
    </div>
  )
}
