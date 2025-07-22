import { getBookings } from "@/actions/bookings.actions";
import AddBookingBtn from "@/components/bookings/AddBookingBtn";
import BookingsTable from "@/components/bookings/BookingsTable";
import BookingTablePagination from "@/components/bookings/BookingTablePagination";
import Tab from "@/components/bookings/Tab";
import Navbar from "@/components/navbar/Navbar";
import { tabs } from "@/data/bookings.data";
import { Booking } from "@/types/booking.types";
import { PageProps } from "@/types/global.types";
import { getBookingStatus } from "@/utils/booking.utils";
import React from "react";

const LIMIT = 10;

const Page = async ({ searchParams }: PageProps) => {
  const queryParams = await searchParams;
  const page = parseInt(queryParams?.page || "1", 10);
  const status = queryParams?.status || tabs[0].name;

  // Fetch paginated bookings from server
  const { bookings: dbBookings } = await getBookings({
    page,
    limit: LIMIT,
    resource: queryParams?.resource,
    date: queryParams?.date,
  });

  // Add client-side status
  const fullBookings = dbBookings?.map((b: Booking) => ({
    ...b,
    status: getBookingStatus(b?.startTime, b?.endTime),
  }));

  // Filter by status client-side
  const filteredBookings = fullBookings?.filter(
    (b: Booking) => status === "All" || status === b?.status
  );

  // Manual pagination on filtered list
  const paginatedBookings = filteredBookings?.slice(
    (page - 1) * LIMIT,
    page * LIMIT
  );

  const hasPrevPage = page > 1;
  const hasNextPage = page * LIMIT < filteredBookings.length;

  return (
    <section className="space-y-4 pb-4">
      <Navbar />
      <section className="space-y-4 px-[3%]">
        <div className="flex justify-between items-center">
          <Tab status={status} />
          <AddBookingBtn />
        </div>
        <section className="space-y-2">
          <BookingsTable bookings={paginatedBookings} />
          <BookingTablePagination
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            page={`${page}`}
            queryParams={queryParams}
          />
        </section>
      </section>
    </section>
  );
};

export default Page;
