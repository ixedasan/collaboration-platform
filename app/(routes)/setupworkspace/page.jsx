'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import CoverModal from '@/app/_components/CoverModal'
import { EmojiSelector } from '@/app/_components/EmojiSelector'

const SetupWorkspace = () => {
  const [image, setImage] = useState('/images/cover.png')
  const [workspaceName, setWorkspaceName] = useState('')
  const [emojiIcon, setEmojiIcon] = useState(null)

  return (
    <div className="container px-6 py-20 md:px-20 lg:px-36 xl:px-48">
      <div className="rounded-xl bg-white shadow-lg">
        <CoverModal setNewCover={setImage}>
          <div className="group relative cursor-pointer">
            <p className="absolute inset-0 hidden items-center justify-center rounded-t-xl bg-black/50 text-lg font-semibold text-white group-hover:flex">
              Change Cover
            </p>
            <div className="group-hover:opacity-50">
              <Image
                src={image}
                alt="Workspace cover"
                width={2000}
                height={2000}
                className="h-[150px] w-full rounded-t-xl object-cover"
              />
            </div>
          </div>
        </CoverModal>
        <div className="p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-primary">
            Create new workspace
          </h2>
          <p className="mt-2 text-gray-600">
            This workspace is where your team can collaborate and organize
            projects. You can always update its name later.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <EmojiSelector setEmojiIcon={setEmojiIcon} emojiIcon={emojiIcon} />
            <Input
              placeholder="Workspace Name"
              value={workspaceName}
              onChange={e => setWorkspaceName(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Button disabled={!workspaceName.length}>Create</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetupWorkspace
