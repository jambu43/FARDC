"use server";

import { createClient } from "@/actions/supabase/config";
import { revalidatePath } from "next/cache";

export async function addCampaign(prevState: any, formData: FormData) {
  const supabase = createClient();

  try {
    const startDate = new Date(formData.get("startDate") as string);
    const endDate = new Date(formData.get("endDate") as string);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return { error: "Invalid date range" };
    }

    if (startDate >= endDate) {
      return { error: "End date must be after start date" };
    }

    const banner = formData.get("banner") as File;
    const featuredImage = formData.get("featuredImage") as File;

    const { data: bannerData, error: bannerError } = await supabase.storage
      .from("banners")
      .upload(`${Date.now()}-${banner.name}`, banner);

    if (bannerError) throw bannerError;

    const { data: featuredImageData, error: featuredImageError } =
      await supabase.storage
        .from("featured-images")
        .upload(`${Date.now()}-${featuredImage.name}`, featuredImage);

    if (featuredImageError) throw featuredImageError;

    const { data: bannerUrl } = supabase.storage
      .from("banners")
      .getPublicUrl(bannerData.path);
    const { data: featuredImageUrl } = supabase.storage
      .from("featured-images")
      .getPublicUrl(featuredImageData.path);

    const campaignData = {
      title: formData.get("title"),
      description: formData.get("description"),
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      goal: formData.get("goal"),
      banner: bannerUrl.publicUrl,
      featuredImage: featuredImageUrl.publicUrl,
    };

    const { error } = await supabase.from("campaigns").insert(campaignData);

    if (error) throw error;

    revalidatePath("/campaigns");
    return { success: true, message: "Campaign added successfully" };
  } catch (error) {
    console.error("Error adding campaign:", error);
    return { error: "Failed to add campaign. Please try again." };
  }
}
