import { Nunito } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'sonner'
import "@liveblocks/react-ui/styles.css";

import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Collaboration Platform',
  description: 'A platform to collaborate on projects in real-time.',
  keywords: ['collaboration', 'real-time', 'projects', 'teamwork'],
  author: 'ixedasan',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          <Toaster position="top-right"/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
