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
  try {
    const response = await strapiApi.get(
      `${collection}?${qs.stringify(parameters)}`
    );
    return response.data?.data;
  } catch (error) {
    console.error(`Error fetching collection: ${error}`);
    throw error;
  }
};

export const findOne = async (
  collection: string,
  id: string,
  parameters?: any
) => {
  try {
    const response = await strapiApi.get(
      `${collection}/${id}?${qs.stringify(parameters)}`
    );
    return response.data?.data;
  } catch (error) {
    console.error(`Error fetching item: ${error}`);
    throw error;
  }
};

export const create = async (collection: string, data: any) => {
  try {
    const response = await strapiApi.post(`${collection}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error creating item: ${error}`);
    throw error;
  }
};

export const update = async (collection: string, id: string, data: any) => {
  try {
    return await strapiApi.put(`${collection}/${id}`, data);
  } catch (error) {
    console.error(`Error updating item: ${error}`);
    throw error;
  }
};

export const remove = async (collection: string, id: string) => {
  try {
    return await strapiApi.delete(`${collection}/${id}`);
  } catch (error) {
    console.error(`Error deleting item: ${error}`);
    throw error;
  }
};
