import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "ג'ליקס: חווית ג'ליבול יחידה במינה",
  description: 'The official website of jellyx',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/e4c421bb39.js" crossOrigin="anonymous"></script>
      </head>

      <body className={inter.className} >
        {children}
      </body>
    </html>
  )
}
