import { Logout } from "@/client/components/Logout";
import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";
import Image from 'next/image';
export default async function Page() {
  const session = await getServerSession(authOptions);
  
  return (
    <>
      {session ? (
        <>
          <h1>{session.user.name}</h1>
          {session.user.image && (
            <Image src={session.user.image} alt={session.user.name} width={100} height={100}/>
          )}
          <Logout />
        </>
      ) : (
        <a href="/auth/signin">Sign in</a>
      )}
    </>
  );
}
