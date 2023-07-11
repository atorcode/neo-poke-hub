"use client";

import { capitalizeFirst } from "@/app/utils/capitalize-first";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";
import { PokemonTypeType } from "@/app/types/pokemon-type-type";
import { useDisplayedPokemonContext } from "@/app/contexts/displayed-pokemon-context";

type TypeBoxFilterProps = {
  type: { type: { name: string; url: string } } | PokemonTypeType;
  pokedex: PokedexEntryType[];
  index: number;
  selectedButtons: boolean[];
  setSelectedButtons: React.Dispatch<React.SetStateAction<boolean[]>>;
};

export const TypeBoxFilter = ({
  type,
  pokedex,
  index,
  selectedButtons,
  setSelectedButtons,
}: TypeBoxFilterProps) => {
  const { setDisplayedPokemon } = useDisplayedPokemonContext();

  const filterByType = (type: PokemonTypeType) => {
    if (!pokedex) {
      return null;
    }
    const filteredPokemon = pokedex.filter((entry) => {
      // filtered types
      const givenPokemonTypes = entry.types.map((type) => {
        return type.type.name;
      });
      return givenPokemonTypes.includes(type);
    });
    setDisplayedPokemon(filteredPokemon);
  };

  return (
    <button
      className="w-full"
      onClick={() => {
        setSelectedButtons &&
          index &&
          setSelectedButtons((prev) => {
            return [...prev, (prev[index] = true)];
          });
        filterByType(type as PokemonTypeType);
      }}
    >
      <div
        className="flex h-full w-full items-center justify-center gap-1 rounded-lg px-2 py-1 text-gray-200"
        style={{
          backgroundColor: selectedButtons[index]
            ? "red"
            : `var(--${typeof type === "object" ? type.type.name : type}-type)`,
        }}
      >
        <img
          // capitalizeFirst isn't strictly necessary in file path, but adding it provides some safety
          src={`/Pokemon_Type_Icon_${capitalizeFirst(
            typeof type === "object" ? type.type.name : type
          )}.png`}
          alt="bug icon"
          className="h-6 w-6"
        />
        <span className="pr-1">
          {capitalizeFirst(typeof type === "object" ? type.type.name : type)}
        </span>
      </div>
    </button>
  );
};
