//@ts-nocheck
"use server";
import { getCollection, getStrapiUser } from "../../services/server";

export const getOrganisationUser = async () => {
  const user = await getStrapiUser();
  const userId = user?.id;
  console.log(userId);
  const org = await getCollection(
    `organizations?populate=*&filters[users_permissions_user][documentId][$eq]=${userId}`
  );
  const organisation = org?.data[0];
  return {
    nom: organisation?.nom,
    description: organisation?.description,
    username: organisation?.users_permissions_user?.username,
    email: organisation?.users_permissions_user?.email,
    id: organisation?.documentId,
  };
};
