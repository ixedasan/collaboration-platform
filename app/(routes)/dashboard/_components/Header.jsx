import { UserButton } from '@clerk/nextjs'

import Logo from '@/app/_components/Logo'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-3 shadow-sm">
      <Logo />
      <UserButton />
    </div>
  )
}

export default Header
