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

const Page = async ({ searchParams }: PageProps) => {
  const queryParams = await searchParams;

  const status = queryParams?.status || tabs[0].name;

  const {
    bookings: dbBookings,
    hasPrevPage,
    hasNextPage,
  } = await getBookings({});

  const bookings = dbBookings
    ?.map((b) => ({
      ...b,
      status: getBookingStatus(b?.startTime, b?.endTime),
    }))
    ?.filter((b: Booking) => status === "All" || status === b?.status);

  // console.log('queryParams', queryParams)

  return (
    <section className=" space-y-4 pb-4">
      <Navbar />
      <section className=" space-y-4 px-[3%]">
        <div className="flex justify-between items-center">
          <Tab status={status} />
          <AddBookingBtn />
        </div>
        <section className=" space-y-2">
          <BookingsTable bookings={bookings} />
          <BookingTablePagination
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            page={queryParams?.page}
            queryParams={queryParams}
          />
        </section>
      </section>
    </section>
  );
};

export default Page;
