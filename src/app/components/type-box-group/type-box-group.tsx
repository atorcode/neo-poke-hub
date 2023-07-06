import { TypeBox } from "../type-box/type-box";
import { PokemonTypeType } from "@/app/types/pokemon-type-type";

type TypeBoxGroupProps = {
  types:
    | { slot: number; type: { name: string; url: string } }[]
    | PokemonTypeType[];
  layout?: "flex" | "grid";
  isButton?: boolean;
};

export const TypeBoxGroup = ({
  types,
  layout,
  isButton,
}: TypeBoxGroupProps) => {
  return (
    <ul
      className={
        layout === "grid"
          ? `grid grid-cols-6 gap-3`
          : `flex justify-start gap-2`
      }
    >
      {types.map((type, index) => {
        return (
          <li key={index} className="flex items-center justify-center">
            <TypeBox type={type} isButton={isButton} />
          </li>
        );
      })}
    </ul>
  );
};
