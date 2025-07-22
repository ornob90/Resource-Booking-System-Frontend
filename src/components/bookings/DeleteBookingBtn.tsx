"use client";

import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import ConfirmModal from "../shared/ConfirmModal";
import { AnimatePresence } from "framer-motion";

const DeleteBookingBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center"
      >
        <MdDeleteSweep className=" text-red-500 text-2xl cursor-pointer" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <ConfirmModal
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteBookingBtn;
