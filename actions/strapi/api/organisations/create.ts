"use server";

import { create } from "../../services/client";

export type CreateOrganisationData = {
  nom: string;
  description?: string;
  users_permissions_user: string;
};

export const createOrganisation = async ({
  nom,
  description,
  users_permissions_user,
}: CreateOrganisationData) => {
  try {
    const response = await create("organizations", {
      data: {
        nom,
        description,
        users_permissions_user,
      },
    });
    return response.data.documentId;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createOrganisationWithForm = async (
  prevState: any | undefined,
  formData: FormData
) => {
  try {
    const data = Object.fromEntries(formData);
    const { nom, description, users_permissions_user } = data;
    console.log(nom, description, users_permissions_user);
    const id = await createOrganisation({
      nom: nom as string,
      description: description as string,
      users_permissions_user: users_permissions_user as string,
    });
    return {
      statut: true,
      message: "Organisation crée avec successe",
      id,
    };
  } catch (error) {
    console.log(error);
    return {
      statut: false,
      message: "Une erreur est survenue.",
    };
  }
};
