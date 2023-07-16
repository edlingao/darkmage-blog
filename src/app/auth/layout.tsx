import { LogoBig } from '@/assets/Logo/Big.svg';
import {  } from 'next/navigation'
import { DiscordLoginButton } from '@/client/components/DiscordLogin';
import '../../styles/globals.css';
import { headers } from 'next/dist/client/components/headers';
import { AccountLink } from '@/client/components/AccountLink';

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
          <div className="flex justify-between items-center">
            <div className="line w-1/3 h-0.5 bg-text"></div>
            <p className="font-orbitron text-base">OR</p>
            <div className="line w-1/3 h-0.5 bg-text"></div>
          </div>
          <DiscordLoginButton />
          <AccountLink />
        </div>
      </body>
    </html>
  )
}
