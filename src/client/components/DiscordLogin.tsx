'use client';

import { signIn } from "next-auth/react";
import { Button } from "./Button";

export function DiscordLoginButton() {

  const handleLogin = async () => {
    const status = await signIn("discord", {callbackUrl: "/"})
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Button text="Discord" icon="discord" onClick={handleLogin}/>
  )
}