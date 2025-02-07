"use server";
import { getCollection } from "../../services/server";
import { getStrapiUser } from "../../services/server";

export const getStats = async () => {
  const user = await getStrapiUser();
  const userId = user?.id;

  const [
    {
      data: campaigns,
      meta: {
        pagination: { total: totalsCampaigns },
      },
    },
    {
      meta: {
        pagination: { total: totalsDonations },
      },
    },
  ] = await Promise.all([
    getCollection(
      `campaigns?fields=amountCollected&filters[users_permissions_user][documentId][$eq]=${userId}&pagination[pageSize]=25`
    ),
    getCollection(
      `donations?populate=*&filters[campaign][users_permissions_user][documentId][$eq]=${userId}&pagination[pageSize]=1`
    ),
  ]);

  const amountCollected = campaigns?.reduce(
    (sum: number, campaign: any) => sum + campaign?.amountCollected,
    0
  );

  return {
    totalsCampaigns,
    totalsDonations,
    amountCollected,
  };
};
