"use client";

import { Pokedex } from "../pokedex";
import { SearchSection } from "../search-section";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";
import { useState } from "react";

type DisplayedPokemonProps = {
  pokedex: PokedexEntryType[];
};

export const DisplayedPokemon = ({ pokedex }: DisplayedPokemonProps) => {
  const [displayedPokemon, setDisplayedPokemon] =
    useState<PokedexEntryType[]>(pokedex);
  return (
    <>
      <SearchSection
        pokedex={pokedex}
        setDisplayedPokemon={setDisplayedPokemon}
      />
      <Pokedex pokedex={displayedPokemon} />
    </>
  );
};
