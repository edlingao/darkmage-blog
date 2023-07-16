import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/server/auth";

import '../styles/globals.css';

export default function Page() {  
  return (
    <div>
      <h1>ADIOS MUNDO</h1>
      

      <a href="/auth/signin">Sign in</a>

    </div>
  );
}