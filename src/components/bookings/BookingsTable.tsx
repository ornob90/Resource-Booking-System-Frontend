import { bookingTableHeaders, dummyBookings } from "@/data/bookings.data";
import React from "react";
import BookingRow from "./BookingRow";
import { Booking } from "@/types/booking.types";

const BookingsTable = () => {
  const bookings = dummyBookings;

  return (
    <section className="px-6 py-3 shadow-sm border  border-gray-200 bg-gray-50 rounded-xl">
      <BookingTableHeader />
      {bookings.map((booking, index) => (
        <BookingRow
          key={booking.id}
          booking={booking as unknown as Booking}
          rowNo={index + 1}
        />
      ))}
    </section>
  );
};

function BookingTableHeader() {
  return (
    <div className=" grid grid-cols-12   text-gray-500  py-2  rounded-t-lg">
      <div className=" max-w-12">No.</div>
      {bookingTableHeaders.map((header) => (
        <p key={header.name} className={`flex-1 ${header?.className}`}>
          {header.name}
        </p>
      ))}
    </div>
  );
}

export default BookingsTable;
