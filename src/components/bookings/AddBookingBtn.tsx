"use client";
import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";
import Modal from "../shared/Modal";
import { useForm } from "react-hook-form";
import { AnimatePresence } from "framer-motion";

type BookingFormInputs = {
  resource: string;
  startTime: string;
  endTime: string;
  requestedBy: string;
};

const resources = [
  "Meeting Room A",
  "Meeting Room B",
  "Conference Hall",
  "Lab 1",
  "Lab 2",
];

const AddBookingBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<BookingFormInputs>();

  const onSubmit = (data: BookingFormInputs) => {
    console.log("Booking Submitted:", data);
    setIsOpen(false);
    reset();
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
          <Modal onClose={() => setIsOpen(false)}>
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
                  <select
                    {...register("resource")}
                    className="w-full border border-gray-200 px-4 py-2 text-sm placeholder:text-sm rounded-md"
                  >
                    <option value="">Select a resource</option>
                    {resources.map((resource) => (
                      <option key={resource} value={resource}>
                        {resource}
                      </option>
                    ))}
                  </select>
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
                    type="email"
                    placeholder="user@example.com"
                    {...register("requestedBy")}
                    className="w-full border border-gray-200 px-4 py-2 text-sm placeholder:text-sm rounded-md"
                  />
                </div>

                <div className="col-span-2 flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm border cursor-pointer border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-dark cursor-pointer text-white rounded-md hover:opacity-90"
                  >
                    Submit
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
