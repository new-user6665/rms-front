import { GlobalContextProvider } from '@/context/context'
import './globals.css'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: 'Realia 23',
  description: 'Deconstructing Disinformation',
  keywords: ['realia', 'realiaZlive', 'asas', 'dhiu', 
  'darul huda', 'dhiu arts fest',
   'dhiu rabee fest', 'rabee fest dhiu', 'realia23'
    , 'sibaq' , 'result portal realia' , 'dhiu chemmad']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
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


