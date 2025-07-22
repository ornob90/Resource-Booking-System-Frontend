/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

"use server";

import { AvailableSlotsResult } from "@/types/booking.types";
import { getTimezone } from "./globals.actions";

type GetBookingsParams = {
  page?: number;
  limit?: number;
  resource?: string;
  date?: string;
};

export async function getBookings({
  page = 1,
  limit = 10,
  resource,
  date,
}: GetBookingsParams) {
  const query = new URLSearchParams();

  console.log('getTimezone()', await getTimezone())

  query.set("page", page.toString());
  query.set("limit", limit.toString());

  if (resource) query.set("resource", resource);
  if (date) query.set("date", date);

  const cacheKey = `bookings-${query.toString()}`;

  const url = `${process.env.BASE_URL}/bookings?${query.toString()}`;
  console.log("cacheKey", cacheKey);

  // Use fetch with cache tags — Next.js will cache per input combo
  const res = await fetch(url, {
    method: "GET",
    next: {
      tags: [cacheKey, "get-bookings"],
    },
  });

  if (!res.ok) {
    return {
      success: false,
      message: `Failed to fetch bookings: ${res.statusText}`,
      data: null,
    };
  }

  const result = await res.json();

  //   console.log('result', result)

  return {
    success: true,
    message: result.message,
    ...(result?.data || {}),
  };
}
