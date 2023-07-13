"use client";

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";
import styles from "./search-bar.module.css";
import { useDisplayedPokemonContext } from "@/app/contexts/displayed-pokemon-context";

type SearchBarProps = {
  pokedex: PokedexEntryType[];
};

export const SearchBar = ({ pokedex }: SearchBarProps) => {
  const [pokemonName, setPokemonName] = useState<string>("");

  const { setDisplayedPokemon } = useDisplayedPokemonContext();
  const filterPokemon = (name: string) => {
    const filteredPokemon = pokedex.filter((entry) => {
      return entry.name.toLowerCase().includes(name);
    });
    setDisplayedPokemon(filteredPokemon);
  };

  return (
    <div
      className={`${styles["search-bar"]} relative h-12 rounded-md border-2 bg-gray-200`}
    >
      <BsSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-100"
        style={{ backgroundColor: "transparent" }}
      />
      <input
        type="text"
        placeholder="Search for a Pokemon"
        className="absolute left-12 h-full w-10/12 bg-gray-200 text-gray-100 outline-none placeholder:text-gray-400"
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
