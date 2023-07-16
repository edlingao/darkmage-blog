import { LogoBig } from '@/assets/Logo/Big.svg';

import '../../styles/globals.css';

export const metadata = {
  title: 'DarkMage Auth',
  description: 'DarkMage Login and Registration Page',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body
        className="bg-background p-8"
      >
        <div className='flex flex-col gap-5'>
          <LogoBig className='self-center'/>
          <h1 className='font-orbitron text-3xl text-center' >Welcome Back</h1>
          {children}  
        </div>
      </body>
    </html>
  )
}
