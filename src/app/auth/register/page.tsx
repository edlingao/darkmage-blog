import { Button } from "@/client/components/Button";
import Form from "@/client/components/Form";
import { Input } from "@/client/components/Input";

export default function RegisterPage() {
  return (
    <Form action="signUp">
      <Input placeHolder="Username..." name="username" />
      <Input placeHolder="Email..." name="email" />
      <Input placeHolder="Password..." type="password" name="password" />
      <Button text="Register" />
    </Form>
  );  
}
