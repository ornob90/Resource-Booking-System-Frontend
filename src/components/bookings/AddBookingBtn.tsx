import React from "react";
import { MdDateRange } from "react-icons/md";

const AddBookingBtn = () => {
  return (
    <>
      <button className=" flex justify-center items-center gap-x-2 text-sm text-nowrap px-4  py-2  bg-dark text-white rounded-full cursor-pointer  active:scale-95 duration-200">
        Create Booking <MdDateRange />
      </button>
    </>
  );
};

export default AddBookingBtn;
