// @ts-nocheck
"use server";
import { find } from "../../services/client";
import {
  getCollection,
  getCollectionById,
} from "@/actions/strapi/services/server";
import { formatDate, dayLefts, percentage } from "@/lib/utils";
import { getPublicUrl } from "@/actions/supabase/storage";
import { getStrapiUser } from "@/actions/strapi/services/server";

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
      banner: item.banner,
      featuredImage: item.featuredImage,
      organization: item.users_permissions_user
        ? item.users_permissions_user?.username
        : "100% FARDC ",
      daysLeft: dayLefts(item.endDate),
      contributions: item.donations?.length || 0,
      categories:
        item.donation_categories?.map((category: any) => category.name) || [],
    };
  });
};

export const getCampaignsByUser = async () => {
  const user = await getStrapiUser();
  const today = new Date();
  const userId = user?.id;
  const campaigns = await getCollection(
    `campaigns?filters[users_permissions_user][documentId][$eq]=${userId}&sort=createdAt:desc`
  );
  return campaigns?.data?.map((item: any) => {
    return {
      id: item.documentId,
      title: item.title,
      status: today > new Date(item.endDate) ? "completed" : "active",
      progress: percentage(item.amountCollected, item.goal) || 0,
      goal: item.goal || 10000,
      raised: item.amountCollected || 0,
      daysLeft: dayLefts(item.endDate),
    };
  });
};

export const getStatsCampaigns = async () => {
  const user = await getStrapiUser();
  const today = new Date();
  const userId = user?.id;
  const allcampaigns = await getCollection(
    `campaigns?filters[users_permissions_user][documentId][$eq]=${userId}&sort=createdAt:descpagination[pageSize]=200`
  );
  const campaignsActive = allcampaigns?.data?.filter((item: any) => {
    const endDate = new Date(item.endDate);
    return endDate > today;
  }).length;
  const totalAmountCollected = allcampaigns?.data?.reduce(
    (sum: number, campaign: any) => sum + campaign?.amountCollected,
    0
  );
  const wincampaigns = allcampaigns?.data?.filter((item: any) => {
    return item.amountCollected >= item.goal;
  }).length;

  return {
    all: allcampaigns?.meta?.pagination?.total,
    active: campaignsActive,
    total: totalAmountCollected,
    reussite: Math.round(
      (wincampaigns / allcampaigns?.meta?.pagination?.total) * 100
    ),
  };
};

export const getCampaign = async (id: string) => {
  const campaign = await getCollectionById("campaigns", id);
  return campaign?.data;
};
