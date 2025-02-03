"use server";

import { findOne } from "../../services/client";
import { formatDate, dayLefts, percentage } from "@/lib/utils";
import { getPublicUrl } from "@/actions/supabase/storage";

export const getCampaign = async (id: string) => {
  const campaign = await findOne("campaigns", id, {
    populate: "*",
  });
  const formatData = {
    id: campaign?.documentId,
    title: campaign?.title,
    description: campaign?.description,
    startDate: formatDate(campaign?.startDate) as string,
    endDate: formatDate(campaign?.endDate) as string,
    goal: campaign?.goal || 10000,
    amountCollected: campaign?.amountCollected || 0,
    progress: percentage(campaign?.amountCollected, campaign?.goal) || 0,
    banner: getPublicUrl(campaign?.banner),
    featuredImage: getPublicUrl(campaign?.featuredImage),
    organization: campaign?.users_permissions_user
      ? campaign?.users_permissions_user?.username
      : "PAMOJA Congo",
    daysLeft: dayLefts(campaign?.endDate),
    contributions: campaign?.donations.length || 0,
    categories:
      campaign?.donation_categories?.map((category: any) => category.name) ||
      [],
  };

  return formatData;
};
