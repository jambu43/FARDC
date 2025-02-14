"use server";
import { create, update, findOne } from "../../services/client";

export const createDonation = async (data: any) => {
  const campaign = await findOne("campaigns", data.campaign, {
    fields: ["amountCollected"],
  });

  try {
    const response = await create("donations", {
      data: {
        amount: Number(data.amount) - (Number(data.amount) * 2) / 100,
        date: new Date().toISOString(),
        campaign: data.campaign,
        noms: data.noms,
        telephone: data.telephone,
        ville: data.ville,
        pays: data.pays,
        email: data?.email || "no@email.com",
        organization: data.organization,
      },
    });
    await update("campaigns", data.campaign, {
      data: {
        amountCollected:
          Number(campaign?.amountCollected || 0) +
          Math.round(Number(data.amount) - (Number(data.amount) * 2) / 100),
      },
    });
    return response;
  } catch (error) {
    console.error(`Error creating item: ${error}`);
    throw error;
  }
};
