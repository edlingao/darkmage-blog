/* eslint-disable @typescript-eslint/no-explicit-any */
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
  type Session,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";
import { hash, compare } from "bcrypt";
import { env } from "@/env.mjs";
import UserModel from "@/models/User";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session }) => ({
        ...session,
      })
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),

    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "User name" },
        password: { label: "Password", type: "password", placeholder: "Password"},
      },
      async authorize(credentials) {
        try {
          if(!credentials) return null;

          const user = await UserModel.getByNameOrEmail(credentials?.username);
          // if user doesn't exist or password is not provided, return null
          if(!user || !user.password || !credentials || !credentials.password || !credentials.username) return null;

          const correctPassword = await comparePassword(credentials.password, user.password);

          if (user && correctPassword) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return {
              id: user.id,
              name: user.name,
              image: user.image,
              email: user.email,
            } as any;
          }
        } catch (error) {
          console.error(error);
        }

        return null;
      },
    }),

    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  pages: {
    signIn: "/auth/signin",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
  },
  session: {
    strategy: "jwt",
  }
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}): Promise<Session | null> => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

export async function encryptPassword(password: string) {
  return await hash(password, parseInt(process.env.SALT || "10"));
}

export async function comparePassword(password: string, hash: string) {
  return await compare(password, hash);
}

