'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth, useUser } from '@clerk/nextjs'
import { db } from '@config/firebaseConfig'
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore'
import { AlignLeft, LayoutGrid } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

import Item from './Item'

const List = () => {
  const { user } = useUser()
  const { orgId } = useAuth()
  const [workspaceList, setWorkspaceList] = useState([])
  const [layout, setLayout] = useState('grid')

  const fetchWorkspaceList = useCallback(() => {
    if (!user) return

    const q = query(
      collection(db, 'workspaces'),
      where(
        'organization',
        '==',
        orgId || user?.primaryEmailAddress?.emailAddress,
      ),
    )

    return onSnapshot(q, snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setWorkspaceList(data)
    })
  }, [user, orgId])

  useEffect(() => {
    const unsubscribe = fetchWorkspaceList()
    return () => unsubscribe && unsubscribe()
  }, [fetchWorkspaceList])

  const handleDelete = async id => {
    try {
      await deleteDoc(doc(db, 'workspaces', id))
      toast('Workspace deleted successfully')
    } catch (error) {
      console.error('Error deleting workspace:', error)
    }
  }

  return (
    <div className="container my-10 p-10">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Hello, {user?.fullName}</h2>
        <Link href="/setupworkspace">
          <Button>+</Button>
        </Link>
      </div>
      <div className="mt-10 flex justify-between">
        <h2 className="font-medium text-primary">Workspaces</h2>
        <ToggleGroup
          type="single"
          value={layout}
          onValueChange={value => value && setLayout(value)}
        >
          <ToggleGroupItem value="grid" aria-label="Grid layout">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List layout">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {workspaceList.length === 0 ? (
        <div className="my-10 flex flex-col items-center justify-center">
          <Image
            src="/images/workspace.png"
            width={216}
            height={216}
            alt="Empty workspace"
          />
          <Link href="/setupworkspace">
            <Button variant="outline" className="my-3">
              + New Workspace
            </Button>
          </Link>
        </div>
      ) : (
        <Item
          workspaceList={workspaceList}
          onDelete={handleDelete}
          layout={layout}
        />
      )}
    </div>
  )
}

export default List
