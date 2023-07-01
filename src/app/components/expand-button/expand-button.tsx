"use client";
import { FiPlusCircle } from "react-icons/fi";

type ExpandButtonProps = {
  id: number;
  setExpandedModal: React.Dispatch<React.SetStateAction<number>>;
};

export const ExpandButton = ({ id, setExpandedModal }: ExpandButtonProps) => {
  return (
    <button
      className="text-md relative mb-5 flex h-12 w-full items-center justify-center gap-2 rounded-t-3xl bg-lime-400 font-bold text-white"
      onClick={() => setExpandedModal((prev) => (prev === -1 ? id : -1))}
    >
      <FiPlusCircle className="text-2xl" />
      Expand
    </button>
  );
};
