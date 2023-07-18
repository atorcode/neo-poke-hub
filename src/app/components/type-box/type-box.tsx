import Image from "next/image";
import { capitalizeFirst } from "@/app/utils/capitalize-first";

type TypeBoxProps = {
  type: { type: { name: string; url: string } };
};

export const TypeBox = ({ type }: TypeBoxProps) => {
  return (
    <div
      className="flex h-full w-full items-center justify-center gap-1 rounded-lg px-2 py-1 font-bold text-white"
      style={{ backgroundColor: `var(--${type.type.name}-type)` }}
    >
      <Image
        // capitalizeFirst isn't strictly necessary in file path, but adding it provides some safety
        src={`/Pokemon_Type_Icon_${capitalizeFirst(type.type.name)}.png`}
        alt="bug icon"
        width={24}
        height={24}
      />
      <span className="pr-1">{capitalizeFirst(type.type.name)}</span>
    </div>
  );
};
