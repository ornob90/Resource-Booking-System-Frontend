/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";
import Modal from "../shared/Modal";
import { useForm } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { useSearchParamsObject } from "@/hooks/useSearchParamsObject";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";
import { revalidateTagServerAction } from "@/actions/globals.actions";
import { structureQuery } from "@/utils/query-params.utils";
import axios from "axios";
import ResourceDropdown from "../shared/ResourceDropdown";

type BookingFormInputs = {
  resource: string;
  startTime: string;
  endTime: string;
  requestedBy: string;
};

const AddBookingBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resource, setResource] = useState("");
  const { register, handleSubmit, reset } = useForm<BookingFormInputs>();

  const searchParams = useSearchParamsObject();

  const onSubmit = async (data: BookingFormInputs) => {
    const { startTime, endTime, requestedBy } = data;

    const start = new Date(startTime);
    const end = new Date(endTime);

    // const durationInMinutes = (end.getTime() - start.getTime()) / (1000 * 60);

    // if (start >= end) {
    //   toast.error("Start time must be earlier than end time");
    //   return;
    // }

    // if (durationInMinutes < 15 || durationInMinutes > 120) {
    //   toast.error("Meeting duration must be between 15 and 120 minutes");
    //   return;
    // }

    try {
      setLoading(true);

      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bookings`,
        {
          resource,
          startTime: start,
          endTime: end,
          requestedBy,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // ✅ Revalidate page=1 for current filters
      const updatedParams = { ...searchParams, page: "1", limit: '10' };
      const tagKey = new URLSearchParams(updatedParams).toString();
      await revalidateTagServerAction(`get-bookings`);

      // ✅ Update browser URL to ?...&page=1
      const url = structureQuery(searchParams, "page", "1");
      window.history.replaceState(null, "", url);

      setIsOpen(false);
      reset();
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Failed to create booking";
      toast.error(message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center gap-x-2 text-sm text-nowrap px-4 py-2 bg-dark text-white rounded-full  cursor-pointer hover:opacity-90 active:scale-95 duration-200"
      >
        Create Booking <MdDateRange />
      </button>

      <AnimatePresence>
        {isOpen && (
          <Modal
            onClose={() => {
              setIsOpen(false);
            }}
            disabledOutsideClick
          >
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">Create Booking</h3>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-2 gap-4"
              >
                {/* Resource Select */}
                <div className="col-span-2">
                  <label className="block mb-1 text-sm font-medium">
                    Resource
                  </label>

                  <ResourceDropdown
                    id="create-booking-resource"
                    value={resource}
                    onChange={(value) => setResource(value)}
                    
                  />
                </div>

                {/* Start Time */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Start Time
                  </label>
                  <input
                    type="datetime-local"
                    {...register("startTime")}
                    className="w-full border border-gray-200 px-4 py-2 text-sm placeholder:text-sm rounded-md"
                  />
                </div>

                {/* End Time */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    End Time
                  </label>
                  <input
                    type="datetime-local"
                    {...register("endTime")}
                    className="w-full border border-gray-200 px-4 py-2 text-sm placeholder:text-sm rounded-md"
                  />
                </div>

                {/* Requested By */}
                <div className="col-span-2">
                  <label className="block mb-1 text-sm font-medium">
                    Requested By
                  </label>
                  <input
                    type="text"
                    placeholder="user@example.com"
                    {...register("requestedBy")}
                    className="w-full border border-gray-200 px-4 py-2 text-sm placeholder:text-sm rounded-md"
                  />
                </div>

                <div className="col-span-2 flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm border cursor-pointer border-gray-300 rounded-md hover:bg-gray-100 disabled:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 text-sm bg-dark cursor-pointer w-[89px] text-white rounded-md hover:opacity-90 disabled:opacity-50 flex justify-center items-center"
                  >
                    {loading ? (
                      <ImSpinner9 className=" animate-spin text-lg" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </section>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddBookingBtn;
