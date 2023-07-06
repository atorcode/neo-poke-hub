"use client";

import { SearchSection } from "../search-section";
import { Pokedex } from "../pokedex";
import { DisplayedPokemonProvider } from "@/app/contexts/displayed-pokemon-context";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";

type DisplayedPokemonProps = {
  pokedex: PokedexEntryType[];
};

export const DisplayedPokemon = ({ pokedex }: DisplayedPokemonProps) => {
  return (
    <section>
      <DisplayedPokemonProvider pokedex={pokedex}>
        <SearchSection pokedex={pokedex} />
        <Pokedex pokedex={pokedex} />
      </DisplayedPokemonProvider>
    </section>
  );
};
