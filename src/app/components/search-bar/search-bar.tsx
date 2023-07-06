"use client";

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";

type SearchBarProps = {
  pokedex: PokedexEntryType[];
  setDisplayedPokemon: React.Dispatch<React.SetStateAction<PokedexEntryType[]>>;
};

export const SearchBar = ({ pokedex, setDisplayedPokemon }: SearchBarProps) => {
  const [pokemonName, setPokemonName] = useState<string>("");
  console.log(setDisplayedPokemon);

  const filterPokemon = (name: string) => {
    const filteredPokemon = pokedex.filter((entry) => {
      return entry.name.toLowerCase().includes(name);
    });
    setDisplayedPokemon(filteredPokemon);
  };

  return (
    <div
      className="relative h-12 w-2/6 rounded-md border-2 bg-gray-200"
      style={{
        minWidth: "714px",
        backgroundColor: "transparent",
      }}
    >
      <BsSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200"
        style={{ backgroundColor: "transparent" }}
      />
      <input
        type="text"
        placeholder="Search for a Pokemon"
        className="absolute left-12 h-full w-10/12 bg-gray-200 text-gray-200 outline-none placeholder:text-gray-400"
        style={{ backgroundColor: "transparent" }}
        value={pokemonName}
        onChange={(e) => {
          setPokemonName(e.target.value);
          filterPokemon(e.target.value);
        }}
      />
    </div>
  );
};
