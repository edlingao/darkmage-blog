import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";

import '../styles/globals.css';
import { AuthProvider } from "@/client/components/AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = getServerSession(authOptions)

  return (
    <AuthProvider session={session}>
      {children}
    </AuthProvider>
  );
}
