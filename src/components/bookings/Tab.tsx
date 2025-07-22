import { tabs } from "@/data/bookings.data";
import Link from "next/link";
import React from "react";

interface TabProps {
  status: string;
}

const Tab = ({ status }: TabProps) => {
  return (
    <ul className="flex w-full items-center">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={`/?status=${tab.name}`}
          className={` px-4 border-b-2 flex justify-center items-center py-2 min-w-[116px]  duration-200 cursor-pointer ${
            status === tab?.name
              ? " font-medium  border-b-dark"
              : " border-b-white font-normal  hover:border-b-dark"
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </ul>
  );
};

export default Tab;
