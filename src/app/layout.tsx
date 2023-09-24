import { GlobalContextProvider } from '@/context/context'
import './globals.css'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: 'RMS Front',
  description: 'Created by Farrago',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <GlobalContextProvider >
          {children}
          <ToastContainer
            position="top-right"
            autoClose={4000}
            toastStyle={{ backgroundColor: "white", color: "black" }}
            pauseOnFocusLoss={true}
          />
        </GlobalContextProvider>
      </body>
    </html>
  )
}
