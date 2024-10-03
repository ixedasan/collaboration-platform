'use client'

import { memo } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Item = memo(({ workspaceList }) => {
  const router = useRouter()
  const onClickRoute = id => router.push(`/workspace/${id}`)

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {workspaceList?.map(workspace => (
        <div
          key={workspace.id}
          className="cursor-pointer overflow-hidden rounded-xl border shadow-xl transition-all hover:scale-105"
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
      ))}
    </div>
  )
})

export default Item
