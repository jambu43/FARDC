"use server";

import { find } from "../../services/client";
import { formatDate, dayLefts, percentage } from "@/lib/utils";
import { getPublicUrl } from "@/actions/supabase/storage";

export const getCampaigns = async () => {
  const campaigns = await find("campaigns", {
    populate: "*",
    sort: ["updatedAt:desc"],
  });
  return campaigns?.map((item: any) => {
    return {
      id: item.documentId,
      title: item.title,
      description: item.description,
      startDate: formatDate(item.startDate) as string,
      endDate: formatDate(item.endDate) as string,
      goal: item.goal || 10000,
      amountCollected: item.amountCollected || 0,
      progress: percentage(item.amountCollected, item.goal) || 0,
      banner: getPublicUrl(item.banner),
      featuredImage: getPublicUrl(item.featuredImage),
      organization: item.users_permissions_user
        ? item.users_permissions_user?.username
        : "Pamoja ",
      daysLeft: dayLefts(item.endDate),
      contributions: item.donations?.length || 0,
      categories:
        item.donation_categories?.map((category: any) => category.name) || [],
    };
  });
};
