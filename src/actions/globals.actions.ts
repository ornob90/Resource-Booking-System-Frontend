"use server"
import { revalidateTag } from "next/cache";

export async function revalidateTagServerAction(tag: string) {
        console.log('cachekey-after-add', tag)
  
  revalidateTag(tag);
}
