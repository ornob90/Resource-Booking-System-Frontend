"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export type Option = {
  show: string;
  value: string;
};

export interface SelectProps {
  value: string;
  id: string;
  placeholder?: string | undefined | null;
  options: Option[];
  onChange: (value: string) => void;
}

export const fadeUpAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.3 },
};

const Select = ({ value, id, placeholder, options, onChange }: SelectProps) => {
  const [isOpen, toggleIsOpen] = useOutsideClick("booking-home-page", id || "");

  return (
    <section
      id={id}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="  relative cursor-pointer w-full border  border-gray-200 rounded-lg py-2 text-sm px-4"
    >
      <div
        onClick={toggleIsOpen}
        className="flex justify-between items-center "
      >
        <p>{value || placeholder || "Select Option"}</p>
        <IoIosArrowDown />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            {...fadeUpAnimation}
            className=" absolute bg-white border  border-gray-200   top-[calc(100%+8px)] left-0 w-full  rounded-lg max-h-[200px] overflow-y-auto"
          >
            <div>
              {value && (
                <li
                  onClick={() => {
                    onChange("");
                    toggleIsOpen();
                  }}
                  className={` px-4 py-2 tegr60 hover:bg-gray-50 duration-200 cursor-pointer`}
                >
                  {placeholder || "Select Option"}
                </li>
              )}

              {options.map((option) => (
                <li
                  onClick={() => {
                    onChange(option.value);
                    toggleIsOpen();
                  }}
                  key={option.value}
                  className={` px-4 py-2 hover:bg-gray-50 duration-200 cursor-pointer`}
                >
                  {option?.value}
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Select;
