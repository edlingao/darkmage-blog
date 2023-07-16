'use client';
import { signOut } from "next-auth/react";
import { Button } from "./Button";

export function Logout() {
  return (
    <div>
      <Button text="Sign out" onClick={() => {
        signOut({callbackUrl: "/"})
          .then(() => console.log("Signed out"))
          .catch(() => console.log("Error signing out"))
      }}/>
    </div>
  );
}
