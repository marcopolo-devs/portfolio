import type { Metadata } from 'next'
import './globals.css'

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
    </html>
  )
}
