"use client";
import { RiCloseCircleLine } from "react-icons/ri";
import { DividerGraphic } from "../divider-graphic";
import { PokedexEntryDetailsModalPokemonSection } from "../pokedex-entry-details-modal-pokemon-section";
import { PokemonStats } from "../pokemon-stats";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";

type PokedexEntryDetailsModalProps = {
  entry: PokedexEntryType;
  setExpandedModal: React.Dispatch<React.SetStateAction<number>>;
};

export const PokedexEntryDetailsModal = ({
  entry,
  setExpandedModal,
}: PokedexEntryDetailsModalProps) => {
  return (
    <article
      className="fixed left-1/2 top-1/2 z-50 flex h-96 -translate-x-1/2 -translate-y-1/2 justify-start gap-32 rounded-3xl text-white"
      style={{
        width: "60rem",
        backgroundColor: "#00011a",
        border: "1px solid rgb(35, 40, 60)",
      }}
    >
      <PokedexEntryDetailsModalPokemonSection {...entry} />
      <DividerGraphic size="5rem" dividerLength="7rem" gap="3" left="318px" />
      <PokemonStats stats={entry.stats} gap="4" />
      <button
        className="absolute right-3 top-3"
        onClick={() => setExpandedModal(-1)}
      >
        <RiCloseCircleLine className="h-10 w-10" />
      </button>
    </article>
  );
};
