"use server";

import { create } from "../../services/client";

export const createCampaign = async (
  prevState: any | undefined,
  formData: FormData
) => {
  const data = Object.fromEntries(formData);
  const {
    title,
    description,
    startDate,
    endDate,
    banner,
    featuredImage,
    categories,
  } = data;
  if (
    !title ||
    !description ||
    !startDate ||
    !endDate
    // !banner ||
    // !featuredImage ||
    // !categories
  ) {
    return {
      error: "Veuillez remplir tous les champs.",
    };
  }
  console.log("data", data);
  return {
    success: "ok",
  };
};
