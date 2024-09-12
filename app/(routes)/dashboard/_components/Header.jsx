'use client'

import {
  OrganizationSwitcher,
  useAuth,
  UserButton,
  useUser,
} from '@clerk/nextjs'

import Logo from '@/app/_components/Logo'

const Header = () => {
  const { organizationId } = useAuth()
  const { user } = useUser()

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
