"use server";
import { find } from "../../services/client";

export const getDonationsCategories = async () => {
  const { data } = await find("donation-categories", {
    fields: ["name", "documentId"],
  });
  return data.data?.map((item: any) => {
    return {
      value: item.documentId,
      label: item.name,
    };
  });
};
