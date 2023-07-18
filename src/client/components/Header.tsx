'use client';

import { LogoSmall } from "@/assets/Logo/Small.svg";
import { LoginLink } from "@/server/components/LoginLink";
import Link from "next/link";

export function Header() {  
  return (
    <header className="w-full flex justify-between items-center mb-2">
      <Link href="/">
        <LogoSmall />
      </Link>
      <LoginLink />
    </header>
  );
}
