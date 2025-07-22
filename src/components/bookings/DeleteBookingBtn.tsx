"use client";

import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import ConfirmModal from "../shared/ConfirmModal";
import { AnimatePresence } from "framer-motion";
import { useSearchParamsObject } from "@/hooks/useSearchParamsObject";
import { revalidateTagServerAction } from "@/actions/globals.actions";
import { structureQuery } from "@/utils/query-params.utils";

type DeleteBookingBtnProps = {
  bookingId: string;
};

const DeleteBookingBtn = ({ bookingId }: DeleteBookingBtnProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParamsObject();

  const handleDelete = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/${bookingId}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete booking");
      }

      await revalidateTagServerAction(
        `bookings-${structureQuery(searchParams, "", "")}`
      );

    } catch (err) {
      console.error(err);

    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center"
      >
        <MdDeleteSweep className="text-red-500 text-2xl cursor-pointer" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <ConfirmModal
            onClose={() => setIsOpen(false)}
            onConfirm={handleDelete}
            loading={loading}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteBookingBtn;
