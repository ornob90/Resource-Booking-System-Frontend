import React from "react";

const NoBookings = () => {
  return (
    <section className=" h-60 w-full border shadow-sm my-2 border-gray-200  rounded-xl flex justify-center items-center">
      <p className="  text-gray-600">{`You Don't have any bookings. Try create one?`}</p>
    </section>
  );
};

export default NoBookings;
