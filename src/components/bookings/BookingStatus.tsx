import { getStatusStyles } from "@/utils/booking.utils";
import React from "react";

interface BookingStatusProps {
  status: string;
}

const BookingStatus = ({ status }: BookingStatusProps) => {
  const { background, color } = getStatusStyles(status);

  return (
    <p
      style={{
        backgroundColor: background,
        color: color,
      }}
      className="px-4 py-2 rounded-full text-sm"
    >
      {status}
    </p>
  );
};

export default BookingStatus;
