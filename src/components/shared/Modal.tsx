"use client";
import { motion } from "framer-motion";
import React from "react";


interface ModalProps {
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  id?: string;
  disabledOutsideClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  className,
  id,
  disabledOutsideClick,
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/30"
      onClick={() => !disabledOutsideClick && onClose?.()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id={id}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-[615px] bg-white rounded-[15px] overflow-y-auto p-6 ${
          className ?? ""
        }`}
        variants={{
          hidden: {
            y: "-100vh",
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.1,
              type: "spring",
              damping: 25,
              stiffness: 500,
            },
          },
          exit: {
            y: "100vh",
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
