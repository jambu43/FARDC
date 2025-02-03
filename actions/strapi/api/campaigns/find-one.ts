"use server";
import { findOne } from "../../services/client";

export const getCampaign = async (id: string) => {
  const campaign = await findOne("campaigns", id);
  return campaign;
};
