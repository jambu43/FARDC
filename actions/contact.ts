import * as z from "zod";
import { ContactSchema } from "@/schemas";

export const submitContact = async (values: z.infer<typeof ContactSchema>) => {
  const validationFields = ContactSchema.safeParse(values);
  if (!validationFields.success)
    return {
      success: false,
      message: "une erreur s'est produite lors de la validation des données",
    };
  const body = validationFields.data;

  try {
    const response = await fetch("/api/mail/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok)
      return {
        success: false,
        message: "Une erreur s'est produite lors de l'envoi du message",
      };
    return {
      success: true,
      message: "Votre message a été envoyé avec succès",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Une erreur s'est produite lors de l'envoi du message",
      error,
    };
  }
};
