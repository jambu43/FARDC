"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { registerUser as register } from "@/lib/auth";
import { update, remove } from "./strapi/services/client";
import { redirect } from "next/navigation";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Le nom d'utilisateur ou le mot de passe est incorrect.";
        default:
          return "Une erreur est survenue.";
      }
    }
    throw error;
  }
}

export const registerUser = async (
  prevState: string | undefined,
  formData: FormData
) => {
  let id = null;
  const data = Object.fromEntries(formData);
  const { username, email, password, noms } = data;
  if (!username || !email || !password) {
    return "Veuillez remplir tous les champs.";
  }
  try {
    const user = await register(
      username as string,
      email as string,
      password as string
    );
    if (user) {
      id = user.documentId;
    }
  } catch (error) {
    console.log(error);
    return "Une erreur est survenue.";
  }
  redirect("/login");
};
