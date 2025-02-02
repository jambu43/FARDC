import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    "/((?!api|forgot-password|marketing|a-propos|campagnes|faq|contact|_next/data|_next/static|_next/image|.*\\.png$|.*\\.webp$).*)",
  ],
};
