import { capitalizeFirst } from "@/app/utils/capitalize-first";

type TypeBoxProps = {
  type: { type: { name: string; url: string } };
};

export const TypeBox = ({ type }: TypeBoxProps) => {
  return (
    <div
      className="flex h-full w-full items-center justify-center gap-1 rounded-lg px-2 py-1"
      style={{ backgroundColor: `var(--${type.type.name}-type)` }}
    >
      <img
        // capitalizeFirst isn't strictly necessary in file path, but adding it provides some safety
        src={`/Pokemon_Type_Icon_${capitalizeFirst(type.type.name)}.png`}
        alt="bug icon"
        className="h-6 w-6"
      />
      <span className="pr-1">{capitalizeFirst(type.type.name)}</span>
    </div>
  );
};
