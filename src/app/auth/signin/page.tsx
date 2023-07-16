import { Button } from "@/client/components/Button"
import Form from "@/client/components/Form"
import { Input } from "@/client/components/Input"

export default function LoginPage() {

  return (
    <>
      <Form action="signIn">
        <Input placeHolder="Email or Username..." name="username"/>
        <Input placeHolder="Password..." type="password" name="password" />
        <Button text="Login" />
      </Form>
    </>
  )
}
