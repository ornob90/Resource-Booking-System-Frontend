/* eslint-disable @typescript-eslint/no-explicit-any */
import { structureQuery } from "@/utils/query-params.utils";
import React from "react";
import NextLink from "../shared/NextLink";

interface BookingTablePaginationProps {
  page: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  queryParams: any;
}

const BookingTablePagination = ({
  page,
  hasNextPage,
  hasPrevPage,
  queryParams,
}: BookingTablePaginationProps) => {
  return (
    <section className="col-span-2 flex justify-end gap-2 pt-2">
      <NextLink
        href={`/${structureQuery(queryParams, "page", `${+page + 1}`)}`}
        className="px-4 py-2 text-sm border cursor-pointer border-gray-300 rounded-md hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed"
        disabled={!hasPrevPage}
      >
        Prev
      </NextLink>
      <NextLink
        href={`/${structureQuery(queryParams, "page", `${+page - 1}`)}`}
        className="px-4 py-2 text-sm disabled:opacity-50 bg-dark cursor-pointer text-white rounded-md hover:opacity-90 disabled:cursor-not-allowed"
        disabled={!hasNextPage}
      >
        Next
      </NextLink>
    </section>
  );
};

export default BookingTablePagination;
