'use client';
import type { UserRegister } from "@/lib/types/User";
import { signIn } from "next-auth/react";

interface LoginFormProps {
  children: React.ReactNode;
  action: "signUp" | "signIn";
}

interface Actions {
  signIn?: (params: ActionParams) => Promise<void>;
  signUp?: (params: ActionParams) => Promise<UserRegister>;
}

interface ActionParams {
  username: string;
  password: string;
  email?: string;
}

const actions: Actions = ({
  signIn: async ({username, password}: ActionParams) => {
    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/",
    })
  },
  signUp: async ({username, password, email}: ActionParams) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: username, password, email}),
    });
    
    const data = await response.json() as UserRegister;
    return data;
  },
})

export default function Form({ children, action }: LoginFormProps) {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {username, password, email} = Object.fromEntries(new FormData(e.currentTarget)) as {username: string, password: string, email: string};
    const actionCallback = actions[action];
    if(actionCallback && username && password) {
      actionCallback({username, password, email})
        .then(async () => {
          if (action === "signUp") {
            await signIn("credentials", {
              username,
              password,
              callbackUrl: "/",
            });
          }
        })
        .catch(() => console.log("Error"))
    }
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
