import axios from "axios";
import qs from "qs";

export const strapiApi = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://backend-pamoja.145.223.88.104.sslip.io/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});

export const find = async (collection: string, parameters?: any) => {
  return await strapiApi.get(`${collection}?${qs.stringify(parameters)}`);
};

export const findOne = async (
  collection: string,
  id: string,
  parameters?: any
) => {
  return await strapiApi.get(`${collection}/${id}?${qs.stringify(parameters)}`);
};

export const create = async (collection: string, data: any) => {
  const response = await strapiApi.post(`${collection}`, data);
  return response.data;
};

export const update = async (collection: string, id: string, data: any) => {
  return await strapiApi.put(`${collection}/${id}`, data);
};

export const remove = async (collection: string, id: string) => {
  return await strapiApi.delete(`${collection}/${id}`);
};
