import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getUser } from "@/lib/auth";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials: any): Promise<any> {
        const parsedCredentials = z
          .object({
            identifier: z.string().email().or(z.string().min(3)),
            password: z.string().min(8),
          })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { identifier, password } = parsedCredentials.data;
          const user = await getUser({
            identifier,
            password,
          });

          if (!user) return null;
          else return user;
        }
        return null;
      },
    }),
  ],
});
