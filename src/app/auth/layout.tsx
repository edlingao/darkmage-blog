export const metadata = {
  title: 'BlackMage Auth',
  description: 'BlackMage Login and Registration Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
