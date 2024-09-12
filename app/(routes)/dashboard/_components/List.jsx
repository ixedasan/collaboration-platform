'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { AlignLeft, LayoutGrid } from 'lucide-react'

import { Button } from '@/components/ui/button'

import Item from './Item'

const List = () => {
  const { user } = useUser()
  const [workspaceList, setWorkspaceList] = useState([])

  return (
    <div className="container my-10 p-10">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Hello, {user?.fullName}</h2>
        <Link href={'/setupworkspace'}>
          {' '}
          <Button>+</Button>
        </Link>
      </div>
      <div className="mt-10 flex justify-between">
        <div>
          <h2 className="font-medium text-primary">Workspaces</h2>
        </div>
        <div className="flex gap-2">
          <LayoutGrid />
          <AlignLeft />
        </div>
      </div>
      {workspaceList?.length == 0 ? (
        <div className="my-10 flex flex-col items-center justify-center">
          <Image
            src={'/images/workspace.png'}
            width={216}
            height={216}
            alt="workspace"
          />
          <Link href={'/setupworkspace'}>
            <Button variant="outline" className="my-3">
              + New Workspace
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <Item workspaceList={workspaceList} />
        </div>
      )}
    </div>
  )
}

export default List
