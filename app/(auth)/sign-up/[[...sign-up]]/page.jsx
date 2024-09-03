import { SignUp } from '@clerk/nextjs'
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <SignUp
        appearance={{
          elements: {
            footer: {
              display: 'none',
            },
            form: {
              paddingBottom: '2rem',
            },
          },
        }}
      />
      <p className="absolute z-10 bottom-56 text-center text-sm">
        Don’t have an account?{' '}
        <Link className="hover:text-gray-600" href={'sign-in'}>
          Sign in
        </Link>
      </p>
    </div>
  )
}
