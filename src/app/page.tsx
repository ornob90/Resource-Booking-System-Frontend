import { getBookings } from "@/actions/bookings.actions";
import AddBookingBtn from "@/components/bookings/AddBookingBtn";
import BookingFilters from "@/components/bookings/BookingFilters";
import BookingsTable from "@/components/bookings/BookingsTable";
import BookingTablePagination from "@/components/bookings/BookingTablePagination";
import CheckAvailableSlots from "@/components/bookings/CheckAvailableSlots";
import Tab from "@/components/bookings/Tab";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { tabs } from "@/data/bookings.data";
import { Booking } from "@/types/booking.types";
import { PageProps } from "@/types/global.types";
import { getBookingStatus } from "@/utils/booking.utils";
import React from "react";

const LIMIT = 10;

export async function generateStaticParams() {
  const staticParams: { status: string; page: string }[] = [];

  for (const tab of tabs) {
    const status = tab.name;

    const { totalPages } = await getBookings({
      page: 1,
      limit: LIMIT,
      resource: undefined,
      date: undefined,
    });

    for (let page = 1; page <= totalPages; page++) {
      staticParams.push({ status, page: page.toString() });
    }
  }

  return staticParams;
}

const Page = async ({ searchParams }: PageProps) => {
  const queryParams = await searchParams;
  const page = parseInt(queryParams?.page || "1", 10);
  const status = queryParams?.status || tabs[0].name;

  // console.log('queryParams?.resource', queryParams?.resource?.replace(/\+/g, " "))

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
    <section className=" flex flex-col gap-y-4 pb-4 min-h-screen" id="booking-home-page">
      <Navbar />
      <section className="space-y-4 px-[3%] flex-1">
        <section className="  flex flex-col gap-y-5 p-4 bg-white rounded-lg shadow-sm border  border-gray-200">
          <div className="flex flex-col gap-4  md:flex-row md:justify-between md:items-center">
            <Tab status={status} />
            <div className="flex max-md:flex-col gap-4 md:flow-row  md:justify-end">
              <CheckAvailableSlots />
              <AddBookingBtn />
            </div>
          </div>
          <BookingFilters />
        </section>
        <section className=" flex flex-col gap-y-2">
          <section className="  max-w-full   overflow-x-auto">
            <BookingsTable bookings={paginatedBookings} />
          </section>
          <BookingTablePagination
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            page={`${page}`}
            queryParams={queryParams}
          />
        </section>
      </section>

      <Footer />
    </section>
  );
};

export default Page;
