import Analytics from '@/components/Analytics'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Development by Simon Kowalski',
  description: 'My name is Simon and I develop web apps',
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
