"use server";

"use server";

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

  query.set("page", page.toString());
  query.set("limit", limit.toString());

  if (resource) query.set("resource", resource);
  if (date) query.set("date", date);

  const cacheKey = `bookings-${query.toString()}`;

  const url = `${process.env.BASE_URL}/bookings?${query.toString()}`;
  console.log("url", url);

  // Use fetch with cache tags — Next.js will cache per input combo
  const res = await fetch(url, {
    method: "GET",
    next: {
      tags: [cacheKey],
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


