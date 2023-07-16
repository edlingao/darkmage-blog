'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const AUTH_REGISTER = '/auth/register';
const AUTH_LOGIN = '/auth/signin';

function getAuthInfo(view: string) {
  switch (view) {
    case AUTH_REGISTER:
      return {
        text: "Already have an account?",
        url: AUTH_LOGIN,
        linkText: "Login",
      }
    case AUTH_LOGIN:
      return {
        text: "Don't have an account?",
        url: AUTH_REGISTER,
        linkText: "Register",
      }
    default:
      return {
        text: "Don't have an account?",
        url: AUTH_REGISTER,
        linkText: "Register",
      }
  }
}

export function AccountLink() {
  const view = usePathname();
  const info = getAuthInfo(view);

  return (
    <div className="flex flex-row gap-2">
      <p className="font-orbitron text-base text-center">
        {info.text}
      </p>
      <Link href={info.url} className="font-orbitron text-base text-center text-primary">
        {info.linkText}
      </Link>
    </div>
  )
}
