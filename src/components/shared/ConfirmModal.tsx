import React from "react";
import Modal from "./Modal";
import { TiInfoOutline } from "react-icons/ti";
import { ImSpinner9 } from "react-icons/im";

interface ConfirmModalProps {
  loading?: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
}

const ConfirmModal = ({ loading, onClose, onConfirm }: ConfirmModalProps) => {
  return (
    <Modal>
      <section className=" space-y-4 flex flex-col justify-center  items-center ">
        <TiInfoOutline size={100} />
        <p>Are you sure you want to remove this booking?</p>
        <div className="col-span-2 flex justify-end gap-2 pt-2">
          <button
            disabled={loading}
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm border cursor-pointer border-gray-300 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 text-sm w-[89px] bg-red-500 cursor-pointer text-white rounded-md hover:opacity-90 flex justify-center  items-center disabled:opacity-50"
          >
            {loading ? (
              <ImSpinner9 className=" animate-spin text-lg" />
            ) : (
              "Confirm"
            )}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default ConfirmModal;
