"use client";

import { PokedexEntryType } from "@/app/types/pokedex-entry-type";
import { PokedexEntry } from "../pokedex-entry";
import { useState } from "react";
import { useDisplayedPokemonContext } from "@/app/contexts/displayed-pokemon-context";

type PokedexProps = {
  pokedex: PokedexEntryType[];
};

export const Pokedex = ({ pokedex }: PokedexProps) => {
  const [expandedModal, setExpandedModal] = useState<number>(-1);
  const { displayedPokemon } = useDisplayedPokemonContext();
  return (
    <section
      className="flex items-center justify-center"
      style={{ backgroundColor: "#101114" }}
    >
      <article
        className="grid w-10/12 grid-cols-4 gap-x-10 gap-y-20 pb-60 pt-24"
        style={{
          minHeight: "800px",
          maxWidth: "1400px",
          backgroundColor: "#101114",
        }}
      >
        {displayedPokemon.map((entry) => {
          return (
            <PokedexEntry
              key={entry.id}
              expandedModal={expandedModal}
              setExpandedModal={setExpandedModal}
              entry={entry}
            />
          );
        })}
      </article>
    </section>
  );
};
