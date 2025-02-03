import axios from "axios";
import qs from "qs";

export const strapiApi = axios.create({
  baseURL: process.env.STRAPI_URL || "http://localhost:1337/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const find = async (collection: string, parameters?: any) => {
  const response = await strapiApi.get(
    `${collection}?${qs.stringify(parameters)}`
  );
  return response.data?.data;
};

export const findOne = async (
  collection: string,
  id: string,
  parameters?: any
) => {
  const response = await strapiApi.get(
    `${collection}/${id}?${qs.stringify(parameters)}`
  );
  return response.data?.data;
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
