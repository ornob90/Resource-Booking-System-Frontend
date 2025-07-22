/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import ResourceDropdown from "../shared/ResourceDropdown";
import { useRouter } from "next/navigation";
import { useSearchParamsObject } from "@/hooks/useSearchParamsObject";
import { structureQuery } from "@/utils/query-params.utils";

const BookingFilters = () => {
  const [resource, setResource] = useState("");
  const router = useRouter();
  const searchParams = useSearchParamsObject();

  useEffect(() => {
    if (!resource) {
      setResource(searchParams?.resource || "");
    }
  }, [searchParams?.resource]);

  return (
    <section>
      <section className=" w-[300px]">
        <ResourceDropdown
          value={resource}
          onChange={(value) => {
            setResource(value);
            router.push(`/${structureQuery(searchParams, "resource", value)}`);
          }}
          id="resource-filter"
          placeholder={"Filter Resource"}
        />
      </section>
    </section>
  );
};

export default BookingFilters;
