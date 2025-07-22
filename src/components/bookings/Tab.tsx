import { tabs } from "@/data/bookings.data";
import Link from "next/link";
import React from "react";

interface TabProps {
  status: string;
}

const Tab = ({ status }: TabProps) => {
  return (
    <ul className="flex w-full items-center max-md:max-w-full overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={`/?status=${tab.name}`}
          className={` px-4 border-b-2 flex justify-center text-sm items-center py-2 min-w-[116px]  duration-200 cursor-pointer ${
            status === tab?.name
              ? " font-medium  border-b-primary text-primary"
              : " border-b-white font-normal  hover:bg-gray-200 hover:rounded-lg"
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </ul>
  );
};

export default Tab;
