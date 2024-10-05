import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-col justify-between p-6">
      <header className="mb-6 flex w-full justify-between p-2">
        <Image src="/images/logo.svg" alt="logo" width={32} height={32} />
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-5xl font-bold">Collaborate Seamlessly</h1>
          <p className="mb-8 max-w-2xl text-xl text-gray-600">
            Empower your team with our intuitive collaboration platform. Share
            ideas, manage projects, and boost productivity like never before.
          </p>
          <div className="mb-12 flex space-x-4">
            <Link href="/dashboard">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="relative mb-4 aspect-video w-full">
                <Image
                  src="/api/placeholder/400/225"
                  alt="Real-time Editing"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Real-time Editing</h3>
              <p className="text-gray-600">
                Collaborate on documents with your team in real-time.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="relative mb-4 aspect-video w-full">
                <Image
                  src="/api/placeholder/400/225"
                  alt="Project Management"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Lorem</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="relative mb-4 aspect-video w-full">
                <Image
                  src="/api/placeholder/400/225"
                  alt="Secure File Sharing"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Lorem</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                consequuntur numquam!
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p className="py-8 text-center text-gray-500">
          Made with <Heart className="mb-1 inline-block text-primary" /> by{' '}
          <Link
            href="https://github.com/ixedasan"
            target="_blank"
            className="text-lg text-primary"
          >
            ixedasan
          </Link>
        </p>
      </footer>
    </div>
  )
}
