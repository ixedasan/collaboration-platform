'use client'

import { memo, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MoreVertical, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import DeleteConfirmationModal from './DeleteConfirmationModal'

const Item = memo(({ workspaceList, onDelete }) => {
  const router = useRouter()
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [workspaceToDelete, setWorkspaceToDelete] = useState(null)

  const onClickRoute = id => router.push(`/workspace/${id}`)

  const handleDeleteClick = workspace => {
    setWorkspaceToDelete(workspace)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = () => {
    if (workspaceToDelete) {
      onDelete(workspaceToDelete.id)
      setDeleteModalOpen(false)
      setWorkspaceToDelete(null)
    }
  }

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {workspaceList?.map(workspace => (
          <div
            key={workspace.id}
            className="relative overflow-hidden rounded-xl border shadow-xl transition-all hover:scale-105"
          >
            <div
              className="cursor-pointer"
              onClick={() => onClickRoute(workspace.id)}
            >
              <div className="relative h-0 pb-[56.25%]">
                <Image
                  src={workspace.cover}
                  alt={`${workspace.name} cover`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="rounded-b-xl p-3 sm:p-4">
                <h2 className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-lg sm:text-xl">{workspace.emoji}</span>
                  <span className="truncate">{workspace.name}</span>
                </h2>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="absolute right-2 top-2 h-8 w-8 p-0"
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleDeleteClick(workspace)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
      <DeleteConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        workspaceName={workspaceToDelete?.name}
      />
    </>
  )
})

export default Item
