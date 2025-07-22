/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { MdEventAvailable } from "react-icons/md";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import Modal from "../shared/Modal";
import BookingCalendar from "./BookingChalender";
import { getTimezone } from "@/actions/globals.actions";

const CheckAvailableSlots = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gaps, setGaps] = useState([]);

  const handleCheck = async () => {
    setLoading(true);
    try {
      const timezone = await getTimezone()
      const currentTime = new Date().toISOString();
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/available-slots`,
        {
          currentTime,
          timezone
        }
      );

      //   console.log("Available slots:", res.data?.data?.gaps || []);
      setGaps(res.data?.data || []);
      setIsOpen(true);
    } catch (err: any) {
      console.error("Error checking available slots:", err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("gaps", gaps);

  return (
    <>
      <button
        onClick={handleCheck}
        disabled={loading}
        className="flex justify-center items-center gap-x-2 text-sm text-nowrap px-4 py-2 border-dark text-black border-2 rounded-full cursor-pointer hover:opacity-90 active:scale-95 duration-200 disabled:opacity-50 w-[212px]"
      >
        {loading ? (
          <>
            <ImSpinner9 className="animate-spin text-lg" />
            Checking...
          </>
        ) : (
          <>
            Check Available Slots
            <MdEventAvailable className="text-lg" />
          </>
        )}
      </button>

      {isOpen && gaps?.length > 0 && (
        <Modal
          onClose={() => setIsOpen(false)}
          removeMaxWidth
          className=" lg:!w-[80%] flex justify-center items-center"
        >
          <section>
            <BookingCalendar slots={gaps} />
          </section>
        </Modal>
      )}
    </>
  );
};

export default CheckAvailableSlots;
