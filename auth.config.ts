import type { NextAuthConfig, User } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn)
          return NextResponse.redirect(new URL("/dashboard", nextUrl));
        return false;
      } else if (isLoggedIn) {
        return NextResponse.redirect(new URL("/", nextUrl));
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-ignore
      session.user = token.user as User;
      return session;
    },
  },
  providers: [],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 10 * 60 * 60,
  },
} satisfies NextAuthConfig;
