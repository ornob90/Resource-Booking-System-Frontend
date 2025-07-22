"use server"
import { revalidateTag } from "next/cache";

export async function revalidateTagServerAction(tag: string) {
  revalidateTag(tag);
}
