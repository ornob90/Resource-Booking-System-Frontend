/* eslint-disable @typescript-eslint/no-explicit-any */
import { structureQuery } from "@/utils/query-params.utils";
import React from "react";
import NextLink from "../shared/NextLink";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface BookingTablePaginationProps {
  page: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  queryParams: any;
  total?: number;
  currentCount?: number;
}

const BookingTablePagination = ({
  page,
  hasNextPage,
  hasPrevPage,
  queryParams,
  currentCount, 
  total
}: BookingTablePaginationProps) => {
  return (
    <section className="flex justify-between items-center">
      <p className=" text-gray-500">Showing {currentCount} of {total}</p>
      <section className=" flex justify-end gap-2 pt-2">
      <NextLink
        href={`/${structureQuery(queryParams, "page", `${+page + 1}`)}`}
        className=" size-10 rounded-full text-sm border cursor-pointer border-gray-300 flex justify-center items-center hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed"
        disabled={!hasPrevPage}
      >
        <MdKeyboardArrowLeft size={20} />
      </NextLink>
      <NextLink
        href={`/${structureQuery(queryParams, "page", `${+page - 1}`)}`}
        className=" rounded-full text-sm disabled:opacity-50 bg-primary cursor-pointer text-white   size-10 flex justify-center   items-center hover:opacity-90 disabled:cursor-not-allowed"
        disabled={!hasNextPage}
      >
        <MdKeyboardArrowRight size={20} />
      </NextLink>
    </section>
    </section>
  );
};

export default BookingTablePagination;
