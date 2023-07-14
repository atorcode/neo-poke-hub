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
        className="grid w-10/12 gap-x-10 gap-y-20 pb-60 pt-24 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        style={{
          minHeight: "800px",
          maxWidth: "1400px",
          backgroundColor: "#101114",
        }}
      >
        {displayedPokemon.map((entry) => {
          return (
            <div className="flex items-start justify-center" key={entry.id}>
              <PokedexEntry
                expandedModal={expandedModal}
                setExpandedModal={setExpandedModal}
                entry={entry}
              />
            </div>
          );
        })}
      </article>
    </section>
  );
};
