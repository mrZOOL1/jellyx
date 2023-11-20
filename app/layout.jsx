import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "ג'ליקס: חווית ג'ליבול יחידה במינה",
  description: "jellyx extreme jellyball jerusalem האתר הרשמי של ג'ליקס פעילויות ג'ליבול כיף ואקסטרים לילדים בסינמה סיטי ירושלים גליבול",
  icons: {
    icon: ['/icon/favicon.ico'],
    apple: ['/icon/apple-touch.png'],
    shortcut: ['/icon/apple-touch.png']
  },
  manifest: '/icon/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="he">
      <head>
        <title>{metadata.title}</title>
        <script src="https://kit.fontawesome.com/e4c421bb39.js" crossOrigin="anonymous"></script>
        <link rel="icon" href={metadata.icons.icon[0]} />
      </head>

      <body className={inter.className} >
        {children}
      </body>
    </html>
  )
}
