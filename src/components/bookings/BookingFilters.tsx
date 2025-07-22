"use client";
import React from "react";
import ResourceDropdown from "../shared/ResourceDropdown";
import { useRouter } from "next/navigation";
import { useSearchParamsObject } from "@/hooks/useSearchParamsObject";
import { structureQuery } from "@/utils/query-params.utils";

const BookingFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParamsObject();
  const resource = searchParams?.resource || "";
  const date = searchParams?.date || "";

  const handleQueryChange = (key: string, value: string) => {
    router.push(`/${structureQuery(searchParams, key, value)}`);
  };

  return (
    <section className="flex items-center gap-x-2 mb-2">
      <section className="w-[250px]">
        <ResourceDropdown
          value={resource}
          onChange={(value) => handleQueryChange("resource", value)}
          id="resource-filter"
          placeholder="Filter Resource"
        />
      </section>

      <input
        type="date"
        className="border border-gray-200 px-4 py-2 text-sm placeholder:text-sm rounded-md w-[250px]"
        value={date}
        onChange={(e) => handleQueryChange("date", e.target.value)}
      />
    </section>
  );
};

export default BookingFilters;
