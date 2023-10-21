import Analytics from '@/components/Analytics'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reverie Zero',
  description: 'A collection of tools made by myself for myself with the hopes of helping others',
}

export default function RootLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
