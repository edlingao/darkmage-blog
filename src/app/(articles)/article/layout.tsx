import { Header } from "@/client/components/Header";
import '@/styles/globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <body className="bg-background p-8 pb-3 h-[100dvh] flex flex-col justify-between items-start">
      <Header />
      <div className="overflow-y-auto min-h-[65vh] mb-5">
        {children}
      </div>
    </body>
  )
}
