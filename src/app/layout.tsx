import { getServerSession } from "next-auth";
import { AuthProvider } from "@/client/components/AuthProvider";
import { authOptions } from "@/server/auth";
import { type Session } from "next-auth/core/types";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session: Session = await getServerSession(authOptions);
  
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap" rel="stylesheet" />
    </head>

      <AuthProvider session={session}>
        <body className="bg-background p-8">{children}</body>
      </AuthProvider>
    </html>
  )
}
