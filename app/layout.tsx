import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: 'MarcoPolo Digital',
  description: 'MarcoPolo Digital',
  generator: 'MarcoPolo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toaster position='bottom-right'/>
    </html>
  )
}
