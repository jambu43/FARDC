"use server";
import { create } from "../../services/client";
import { redirect } from "next/navigation";

export const createCampaign = async (
  prevState: any | undefined,
  formData: FormData
) => {
  let id = null;
  const data = Object.fromEntries(formData);
  const {
    title,
    description,
    startDate,
    endDate,
    banner,
    goal,
    featuredImage,
    categories,
  } = data;
  if (
    !title ||
    !description ||
    !startDate ||
    !endDate ||
    !goal ||
    !banner ||
    !featuredImage ||
    !categories
  ) {
    return {
      error: "Veuillez remplir tous les champs.",
    };
  }
  try {
    const data = await create("campaigns", {
      data: {
        title,
        description,
        startDate,
        endDate,
        goal,
        banner,
        featuredImage,
        donation_categories: JSON.parse(categories.toString()),
      },
    });
    id = data.data?.documentId;
  } catch (error) {
    console.log(error);
    return {
      error: "Une erreur est survenue.",
    };
  }
  if (id) redirect(`/campagnes/${id}`);
};
