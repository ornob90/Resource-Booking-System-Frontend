import { Booking } from "@/types/booking.types";
import React, { ReactNode } from "react";
import DeleteBookingBtn from "./DeleteBookingBtn";
import { QueryParamsType } from "@/types/global.types";
import { formatDateToDisplay } from "@/utils/date.utils";
import BookingStatus from "./BookingStatus";

interface BookingRowProps {
  booking: Booking;
  rowNo: number;
}

const BookingRow = ({ booking, rowNo }: BookingRowProps) => {
  return (
    <section className=" grid grid-cols-12 py-2">
      <BookingCell value={`${rowNo}`} className=" col-span-1" />
      <BookingCell
        value={`${booking.requestedBy}`}
        className=" justify-start col-span-2"
      />
      <BookingCell value={booking?.resource} className=" col-span-2" />

      <BookingCell
        value={formatDateToDisplay(booking.startTime)}
        className=" col-span-2"
      />
      <BookingCell
        value={formatDateToDisplay(booking.endTime)}
        className=" col-span-2"
      />
      <BookingCell
        value={<BookingStatus status={booking?.status} />}
        className="  col-span-2"
      />
      <BookingCell
        value={<DeleteBookingBtn bookingId={booking.id} />}
        className="  col-span-1 pl-4"
      />
    </section>
  );
};

function BookingCell({
  value,
  className,
}: {
  value: string | ReactNode;
  className?: string;
}) {
  return (
    <div className={` text-sm flex justify-start items-center ${className}`}>
      {value}
    </div>
  );
}

export default BookingRow;
