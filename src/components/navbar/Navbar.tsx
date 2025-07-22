import React from "react";
import { TbBrandBooking } from "react-icons/tb";
import Avatar from "../shared/Avatar";

const Navbar = () => {
  return (
    <section className="flex  justify-between  items-center py-2 border-b px-[3%] border-b-gray-200">
      {/* Left  */}
      <section className="flex items-center gap-x-2 text-2xl  md:text-3xl">
        <TbBrandBooking className=" text-3xl  md:text-4xl " />
        Booking
      </section>

      <Avatar />
    </section>
  );
};

export default Navbar;
