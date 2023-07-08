"use client";

import { TypeBox } from "../type-box/type-box";
import { PokemonTypeType } from "@/app/types/pokemon-type-type";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";
import {
  DisplayedPokemonProvider,
  useDisplayedPokemonContext,
} from "@/app/contexts/displayed-pokemon-context";

type TypeBoxGroupProps = {
  types:
    | { slot: number; type: { name: string; url: string } }[]
    | PokemonTypeType[];
  layout?: "flex" | "grid";
  isButton?: boolean;
  // pokedex should be passed for the SearchByTypes TypeBoxGroup
  pokedex?: PokedexEntryType[];
};

export const TypeBoxGroup = ({
  types,
  layout,
  isButton,
  pokedex,
}: TypeBoxGroupProps) => {
  return (
    // <DisplayedPokemonProvider pokedex={pokedex as PokedexEntryType[]}>
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
            <TypeBox type={type} isButton={isButton} pokedex={pokedex} />
          </li>
        );
      })}
    </ul>
    // </DisplayedPokemonProvider>
  );
};
