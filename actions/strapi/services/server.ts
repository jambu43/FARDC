"use server";
import { auth } from "@/auth";
import axios from "axios";

export const getToken = async () => {
  const session = await auth();
  if (session) {
    // @ts-ignore
    return session?.user?.jwt || null;
  }
};

export const getStrapiUser = async () => {
  const token = await getToken();
  try {
    const response = await axios.get(
      `${process.env.API_URL}/users/me?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const user = response.data;
    return {
      id: user?.documentId,
      username: user?.username,
      email: user?.email,
      role: user?.role?.name,
      names: user?.names,
      phone: user?.phone,
    };
  } catch (error) {
    console.error(`Error fetching user: ${error}`);
    throw error;
  }
};

/**
 * Fetch a Strapi collection by name.
 *
 * @param collection - The name of the Strapi collection to fetch.
 * @returns The collection data as a JSON object.
 */
export const getCollection = async <T>(collection: string): Promise<T> => {
  const token = await getToken();
  try {
    const response = await axios.get(`${process.env.API_URL}/${collection}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response?.data;
  } catch (error) {
    console.error(`Error fetching collection: ${error}`);
    throw error;
  }
};
/**
 * Fetch a Strapi collection by ID.
 *
 * @param collection - The name of the Strapi collection to fetch.
 * @param id - The ID of the item to fetch.
 * @returns The collection item data as a JSON object.
 */
export const getCollectionById = async <T>(
  collection: string,
  id: string
): Promise<T> => {
  const token = await getToken();
  try {
    const response = await axios.get(
      `${process.env.API_URL}/${collection}/${id}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching collection: ${error}`);
    throw error;
  }
};

/**
 * Post a new item to a Strapi collection.
 *
 * @param collection - The name of the Strapi collection to post to.
 * @param data - The data to post to the collection as a JSON object.
 * @returns The created item as a JSON object with the full Strapi response.
 */
export const postCollection = async <T>(
  collection: string,
  data: Record<string, unknown>
): Promise<T> => {
  const token = await getToken();
  if (!token) throw new Error("No token found");
  try {
    const response = await fetch(`${process.env.API_URL}/${collection}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    // if (!response.ok) {
    //   throw new Error(
    //     `Failed to post to collection: ${response.statusText || "unknown"}`
    //   );
    // }
    const responseData = await response.json();
    //console.log(responseData?.error.);

    return responseData;
  } catch (error) {
    console.error(`Error posting to collection: ${error}`);
    throw error;
  }
};

/**
 * Update an item in a Strapi collection.
 *
 * @param collection - The name of the Strapi collection to update.
 * @param id - The ID of the item to update.
 * @param data - The data to update the item with as a JSON object.
 * @returns The updated item as a JSON object with the full Strapi response.
 */
export const putCollection = async <T>(
  collection: string,
  id: string,
  data: Record<string, unknown>
): Promise<T> => {
  const token = await getToken();
  try {
    const response = await fetch(`${process.env.API_URL}/${collection}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log(responseData?.error);
    if (!response.ok) {
      throw new Error(
        `Failed to update collection: ${response.statusText || "unknown"}`
      );
    }
    return responseData as T;
  } catch (error) {
    console.error(`Error updating collection: ${error}`);
    throw error;
  }
};

/**
 * Delete an item from a Strapi collection.
 *
 * @param collection - The name of the Strapi collection to delete from.
 * @param id - The ID of the item to delete.
 * @returns The deleted item as a JSON object with the full Strapi response.
 */
export const deleteCollection = async <T>(
  collection: string,
  id: string
): Promise<T> => {
  const token = await getToken();
  try {
    const response = await axios.delete(
      `${process.env.API_URL}/${collection}/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.data) {
      const error = await response.data;
      throw new Error(
        `Failed to delete collection: ${error.error.message} (${error.error.status})`
      );
    }
    return response.data as Promise<T>;
  } catch (error) {
    console.error(`Error deleting collection: ${error}`);
    throw error;
  }
};
