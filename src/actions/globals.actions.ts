"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function revalidateTagServerAction(tag: string) {
  console.log("cachekey-after-add", tag);

  revalidateTag(tag);
}

export const getTimezone = async () => {
  const cookieStore = await cookies();

  return cookieStore.get("timezone")?.value;
};
