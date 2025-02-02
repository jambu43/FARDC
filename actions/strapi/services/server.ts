import axios from "axios";
import qs from "qs";
import { auth } from "@/auth";

export const getToken = async () => {
  const session = await auth();
  if (session) {
    // @ts-ignore
    return session?.user?.jwt || null;
  }
};
const token = await getToken();

export const strapiApi = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://backend-pamoja.145.223.88.104.sslip.io/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const find = (collection: string, parameters?: any) => {
  return strapiApi.get(`${collection}?${qs.stringify(parameters)}`);
};

export const findOne = (collection: string, id: string, parameters?: any) => {
  return strapiApi.get(`${collection}/${id}?${qs.stringify(parameters)}`);
};

export const create = (collection: string, data: any) => {
  return strapiApi.post(`${collection}`, { data });
};

export const update = (collection: string, id: string, data: any) => {
  return strapiApi.put(`${collection}/${id}`, { data });
};

export const remove = (collection: string, id: string) => {
  return strapiApi.delete(`${collection}/${id}`);
};
