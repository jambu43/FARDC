//@ts-nocheck
import { createClient } from "./config";

/**
 * Upload a file to Supabase Storage.
 *
 * @param bucket - The name of the storage bucket.
 * @param filePath - The path (including file name) where the file should be stored.
 * @param file - The file to upload (e.g., a File object from an <input>).
 * @returns The data returned from Supabase upon successful upload.
 */
export const uploadFile = async (
  bucket: string,
  filePath: string,
  file: File
) => {
  const { data, error } = await createClient?.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) {
    console.error("Error uploading file:", error);
    throw error;
  }

  return data;
};

/**
 * Update (overwrite) an existing file in Supabase Storage.
 * This is similar to uploading, but uses the upsert option to overwrite any existing file.
 *
 * @param bucket - The name of the storage bucket.
 * @param filePath - The path (including file name) where the file should be stored.
 * @param file - The new file data to upload.
 * @returns The data returned from Supabase upon successful update.
 */
export const updateFile = async (
  bucket: string,
  filePath: string,
  file: File
) => {
  // Using upsert: true will overwrite the file if it already exists.
  const { data, error } = await createClient.storage
    .from(bucket)
    .upload(filePath, file, { upsert: true });

  if (error) {
    console.error("Error updating file:", error);
    throw error;
  }

  return data;
};

/**
 * Delete a file from Supabase Storage.
 *
 * @param bucket - The name of the storage bucket.
 * @param filePath - The path (including file name) of the file to delete.
 * @returns The data returned from Supabase upon successful deletion.
 */
export const deleteFile = async (bucket: string, filePath: string) => {
  // The remove method accepts an array of file paths.
  const { data, error } = await createClient.storage
    .from(bucket)
    .remove([filePath]);

  if (error) {
    console.error("Error deleting file:", error);
    throw error;
  }

  return data;
};
