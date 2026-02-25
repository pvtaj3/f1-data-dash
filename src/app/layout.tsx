import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'F1 Data Dashboard - Bearman vs Ocon',
  description: 'Interactive Formula 1 data visualization dashboard comparing Oliver Bearman and Esteban Ocon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-f1-dark text-white font-f1">{children}</body>
    </html>
  )
}
