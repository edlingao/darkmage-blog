'use client';

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function LoginLink() {
  const { data } = useSession();

  const handleClick = () => {
    signOut({callbackUrl: "/"})
      .then(() => console.log("Signed out"))
      .catch(() => console.log("Error signing out"))
  }
  

  return data?.user ? (
    <button onClick={handleClick} className="font-orbitron text-base text-text">
      SIGN OUT
    </button>
  ) : (
    <Link href="/auth/signin" className="font-orbitron text-base text-text">
      SIGN IN
    </Link>
  )
}
