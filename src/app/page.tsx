import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  
  return (
    <div>
    </div>
  )
}
