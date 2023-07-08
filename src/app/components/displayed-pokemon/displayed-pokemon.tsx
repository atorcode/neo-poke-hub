"use client";

import { SearchSection } from "../search-section";
import { Pokedex } from "../pokedex";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";

type DisplayedPokemonProps = {
  pokedex: PokedexEntryType[];
};

export const DisplayedPokemon = ({ pokedex }: DisplayedPokemonProps) => {
  return (
    <section>
      <SearchSection pokedex={pokedex} />
      <Pokedex pokedex={pokedex} />
    </section>
  );
};
