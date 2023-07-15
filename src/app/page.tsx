import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/server/auth";

export default function Page() {

  
  return (
    <div>
      <h1>ADIOS MUNDO</h1>
    </div>
  );
}