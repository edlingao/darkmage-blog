'use client';
import { Input } from "@/client/components/Input";
import { Button } from "@/client/components/Button";


export default function LoginForm() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <Input placeHolder="Email..."/>
      <Input placeHolder="Password..." type="password"/>
      <Button text="Login" />
      <div className="flex justify-between items-center">
        <div className="line w-1/3 h-0.5 bg-text"></div>
        <p className="font-orbitron text-base">OR</p>
        <div className="line w-1/3 h-0.5 bg-text"></div>
      </div>
      <Button text="Discord" icon="discord"/>
    </form>
  )
}
