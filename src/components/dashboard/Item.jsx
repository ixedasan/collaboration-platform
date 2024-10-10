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

const Item = memo(({ workspaceList, onDelete, layout }) => {
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

  const GridLayout = () => (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {workspaceList?.map(workspace => (
        <div
          key={workspace.id}
          className="relative overflow-hidden rounded-xl border shadow-xl transition-all hover:scale-105"
        >
          <div
            className="cursor-pointer"
            onClick={() => onClickRoute(workspace.id)}
            tabIndex={0}
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
          <div className="absolute right-2 top-2">
            <WorkspaceMenu workspace={workspace} />
          </div>
        </div>
      ))}
    </div>
  )

  const ListLayout = () => (
    <div className="mt-6 space-y-4">
      {workspaceList?.map(workspace => (
        <div
          key={workspace.id}
          className="flex cursor-pointer items-center justify-between rounded-xl border p-4 shadow-md transition-all hover:bg-gray-50"
          onClick={() => onClickRoute(workspace.id)}
          tabIndex={0}
        >
          <div className="flex items-center space-x-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-lg">
              <Image
                src={workspace.cover}
                alt={`${workspace.name} cover`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="flex items-center gap-2 text-lg">
              <span>{workspace.emoji}</span>
              <span>{workspace.name}</span>
            </h2>
          </div>
          <WorkspaceMenu workspace={workspace} />
        </div>
      ))}
    </div>
  )

  const WorkspaceMenu = ({ workspace }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
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
  )

  return (
    <>
      {layout === 'grid' ? <GridLayout /> : <ListLayout />}
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
