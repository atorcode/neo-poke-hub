"use client";
import { FiPlusCircle } from "react-icons/fi";
import { useExpandedModalContext } from "@/app/contexts/expanded-modal-context";

type ExpandButtonProps = {
  id: number;
  type: string;
};

export const ExpandButton = ({ id, type }: ExpandButtonProps) => {
  const { setExpandedModal } = useExpandedModalContext();
  return (
    <button
      className="text-md relative mb-5 flex h-12 w-full items-center justify-center gap-2 rounded-t-3xl font-bold text-white"
      style={{ backgroundColor: `var(--${type}-type)` }}
      onClick={() => setExpandedModal((prev) => (prev === -1 ? id : -1))}
    >
      <FiPlusCircle className="text-2xl" />
      Expand
    </button>
  );
};
