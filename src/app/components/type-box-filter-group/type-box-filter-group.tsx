"use client";

import { PokemonTypeType } from "@/app/types/pokemon-type-type";
import { useState } from "react";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";
import { TypeBoxFilter } from "../type-box-filter/type-box-filter";

type TypeBoxFilterGroupProps = {
  types:
    | { slot: number; type: { name: string; url: string } }[]
    | PokemonTypeType[];
  pokedex: PokedexEntryType[];
};

export const TypeBoxFilterGroup = ({
  types,
  pokedex,
}: TypeBoxFilterGroupProps) => {
  const [selectedButtons, setSelectedButtons] = useState<boolean[]>(
    Array(18).fill(false)
  );
  return (
    <ul className={"grid grid-cols-6 gap-3"}>
      {types.map((type, index) => {
        return (
          <li key={index} className="flex items-center justify-center">
            <TypeBoxFilter
              type={type}
              pokedex={pokedex}
              index={index}
              selectedButtons={selectedButtons}
              setSelectedButtons={setSelectedButtons}
            />
          </li>
        );
      })}
    </ul>
  );
};
