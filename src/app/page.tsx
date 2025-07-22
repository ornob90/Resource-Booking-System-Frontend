import AddBookingBtn from "@/components/bookings/AddBookingBtn";
import BookingsTable from "@/components/bookings/BookingsTable";
import Tab from "@/components/bookings/Tab";
import Navbar from "@/components/navbar/Navbar";
import { tabs } from "@/data/bookings.data";
import { PageProps } from "@/types/global.types";
import React from "react";

const Page = async ({ searchParams }: PageProps) => {
  const status = (await searchParams)?.status || tabs[0].name;

  return (
    <section className=" space-y-4">
      <Navbar />
      <section className=" space-y-4 px-[3%]">
        <div className="flex justify-between items-center">
          <Tab status={status} />
          <AddBookingBtn />
        </div>
        <BookingsTable />
      </section>
    </section>
  );
};

export default Page;
