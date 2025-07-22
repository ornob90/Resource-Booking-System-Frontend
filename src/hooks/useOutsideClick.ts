"use client";
import { useEffect, useState } from "react";

type UseOutsideClickReturn = [
  boolean, // isOpen
  () => void, // toggleState
  React.Dispatch<React.SetStateAction<boolean>> // setIsOpen
];

type UseOutsideClick = (
  containerId: string,
  dropdownId: string,
  defaultState?: boolean,
  callback?: () => void
) => UseOutsideClickReturn;

const useOutsideClick: UseOutsideClick = (
  containerId,
  dropdownId,
  defaultState = false,
  callback
) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultState);

  const toggleState = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (!containerId || !dropdownId) return;

    const wrapper = document.getElementById(containerId);
    const button = document.getElementById(dropdownId);

    if (!wrapper || !button) return;

    const abort = new AbortController();

    wrapper.addEventListener(
      "click",
      (e: MouseEvent) => {
        const target = e.target as Node;

        if (!button.contains(target)) {
          setIsOpen(false);
          if (typeof callback === "function") {
            callback();
          }
        }
      },
      {
        signal: abort.signal,
      }
    );

    return () => {
      abort.abort();
    };
  }, [containerId, dropdownId, callback]);

  return [isOpen, toggleState, setIsOpen];
};

export default useOutsideClick;
