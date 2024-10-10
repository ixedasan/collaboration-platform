'use client'

import { useEffect } from 'react'
import {
  OrganizationSwitcher,
  useAuth,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import { doc, setDoc } from 'firebase/firestore'

import { db } from '@config/firebaseConfig'
import Logo from "../Logo"

const Header = () => {
  const { orgId } = useAuth()
  const { user } = useUser()

  const saveUserData = async () => {
    const documentID = user?.primaryEmailAddress?.emailAddress
    try {
      await setDoc(doc(db, 'users', documentID), {
        name: user?.fullName,
        avatar: user?.imageUrl,
        email: user?.primaryEmailAddress?.emailAddress,
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    user && saveUserData()
  }, [user])

  return (
    <div className="flex items-center justify-between p-3 shadow-sm">
      <Logo />
      <OrganizationSwitcher
        afterCreateOrganizationUrl={'/dashboard'}
        afterLeaveOrganizationUrl={'/dashboard'}
      />
      <UserButton />
    </div>
  )
}

export default Header
