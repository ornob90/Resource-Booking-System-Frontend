import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const DeleteBookingBtn = () => {
  return (
    <button className="flex justify-center items-center">
      <MdDeleteSweep className=" text-red-500 text-2xl cursor-pointer" />
    </button>
  );
};

export default DeleteBookingBtn;
