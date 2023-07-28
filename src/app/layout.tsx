import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";

import { AuthProvider } from "@/client/components/AuthProvider";
import '@/styles/globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <AuthProvider session={session}>
      {children}
    </AuthProvider>
  );
}
