import { FiPlusCircle } from "react-icons/fi";

export const ExpandButton = () => {
  return (
    <button className="text-md relative mb-7 flex h-10 w-full items-center justify-center gap-2 rounded-t-3xl bg-lime-400 font-bold text-white">
      <FiPlusCircle className="text-2xl" />
      Expand
    </button>
  );
};
