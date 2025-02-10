import Link from "next/link"
import { File, Folder, MoreVertical } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { DriveItem } from "../types"

export function FileList({ items }: { items: DriveItem[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <FileItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

function FileItem({ item }: { item: DriveItem }) {
  return (
    <li className="flex items-center p-2 hover:bg-gray-800 rounded">
      {item.type === "folder" ? (
        <Folder className="w-5 h-5 mr-3 text-blue-400" />
      ) : (
        <File className="w-5 h-5 mr-3 text-gray-400" />
      )}
      <Link
        href={item.type === "folder" ? `/folder/${item.id}` : `/file/${item.id}`}
        className="flex-1 hover:underline"
      >
        {item.name}
      </Link>
      <FileItemActions />
    </li>
  )
}

function FileItemActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-auto">
          <MoreVertical className="w-4 h-4" />
          <span className="sr-only">Actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-800 text-gray-100">
        <DropdownMenuItem>Open</DropdownMenuItem>
        <DropdownMenuItem>Share</DropdownMenuItem>
        <DropdownMenuItem>Move</DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem className="text-red-400">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

