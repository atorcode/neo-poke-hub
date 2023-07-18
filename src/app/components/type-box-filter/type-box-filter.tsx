"use client";

import Image from "next/image";
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
          index !== undefined &&
          setSelectedButtons((prev) => {
            const updatedArray = prev.map((_button, buttonIndex) => {
              return index === buttonIndex ? !prev[index] : false;
            });
            return updatedArray;
          });
        if (selectedButtons[index]) {
          setDisplayedPokemon(pokedex);
        } else {
          filterByType(type as PokemonTypeType);
        }
      }}
    >
      <div
        className="box-border flex h-full w-full items-center justify-center gap-1 overflow-hidden rounded-lg px-2 py-1 font-bold text-white"
        style={{
          backgroundColor: `var(--${
            typeof type === "object" ? type.type.name : type
          }-type)`,
          border: selectedButtons[index]
            ? "2px solid rgb(243, 244, 246)"
            : "2px solid transparent",
        }}
      >
        <Image
          // capitalizeFirst isn't strictly necessary in file path, but adding it provides some safety
          src={`/Pokemon_Type_Icon_${capitalizeFirst(
            typeof type === "object" ? type.type.name : type
          )}.png`}
          width={24}
          height={24}
          alt="bug icon"
        />
        <span className="pr-1">
          {capitalizeFirst(typeof type === "object" ? type.type.name : type)}
        </span>
      </div>
    </button>
  );
};
