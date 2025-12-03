"use server";

import { revalidatePath } from "next/cache";
import { deleteContact } from "../api/contact";
import { error } from "console";
import { getSession } from "../_lib/session";

export const createContactAction = async (
  prevState: any,
  formData: FormData
) => {
  if (!formData) {
    return { error: "form data is missing" };
  }
  const user = await getSession();
};

export const updateContactAction = async (
  prevState: any,
  formData: FormData
) => {};

export const deleteContactAction = async (
  prevState: any,
  formData: FormData
) => {
  const id = formData.get("id") as string;

  try {
    await deleteContact(id);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error deleting Contact:", error);
    return { error: "Failed to delete Contact" };
  }
};
