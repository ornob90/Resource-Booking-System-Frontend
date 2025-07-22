import { bookingTableHeaders } from "@/data/bookings.data";
import React from "react";
import BookingRow from "./BookingRow";
import { Booking } from "@/types/booking.types";
import NoBookings from "./NoBookings";

interface BookingsTableProps {
  bookings: Booking[];
}

const BookingsTable = ({ bookings = [] }: BookingsTableProps) => {
  //   const bookings = dummyBookings;

  // console.log('bookings in table', bookings)

  return (
    <section className="px-6 py-3  min-w-[630px] shadow-sm border  border-gray-200 bg-gray-50 rounded-xl">
      <BookingTableHeader />
      {!bookings || bookings?.length === 0 ? (
        <NoBookings />
      ) : (
        <>
          {bookings.map((booking, index) => (
            <BookingRow
              key={booking.id}
              booking={booking as unknown as Booking}
              rowNo={index + 1}
            />
          ))}
        </>
      )}
    </section>
  );
};

function BookingTableHeader() {
  return (
    <div className=" grid grid-cols-12  text-gray-500 text-xs md:text-sm  lg:text-base  py-2  rounded-t-lg">
      <div className=" max-w-12">No.</div>
      {bookingTableHeaders.map((header) => (
        <p key={header.name} className={`flex-1 font-medium  ${header?.className}`}>
          {header.name}
        </p>
      ))}
    </div>
  );
}

export default BookingsTable;
