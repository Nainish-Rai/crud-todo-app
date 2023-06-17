import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo-App',
  description: 'Simple CRUD Todo App',
}

declare global {
  interface Window {
    my_modal_1:any,
    my_modal_2:any,
    my_modal_3:any
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
