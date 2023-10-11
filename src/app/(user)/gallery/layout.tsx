import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Realia | Gallery',
  description: 'Deconstructing Disinformation',
  keywords: ['realia', 'realia.live', 'asas', 'dhiu', 
  'darul huda', 'dhiu arts fest',
   'dhiu rabee fest', 'rabee fest dhiu', 'realia23'
    , 'sibaq' , 'result portal realia' , 'gallery realia']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="w-full h-full flex">{children}</div>
 
  )
}