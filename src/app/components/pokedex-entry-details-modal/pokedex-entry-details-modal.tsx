"use client";
import styles from "./pokedex-entry-details-modal.module.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { DividerGraphic } from "../divider-graphic";
import { PokedexEntryDetailsModalPokemonSection } from "../pokedex-entry-details-modal-pokemon-section";
import { PokemonStats } from "../pokemon-stats";
import { InvisibleModalBackdrop } from "../invisible-modal-backdrop";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";

type PokedexEntryDetailsModalProps = {
  entry: PokedexEntryType;
  setExpandedModal: React.Dispatch<React.SetStateAction<number>>;
};

export const PokedexEntryDetailsModal = ({
  entry,
  setExpandedModal,
}: PokedexEntryDetailsModalProps) => {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full">
      <article
        className={`${styles["modal"]} fixed left-1/2 top-1/2 z-50 flex h-96 -translate-x-1/2 -translate-y-1/2 justify-start gap-32 rounded-3xl text-gray-100`}
        style={{
          width: "60rem",
          background: "linear-gradient(45deg, #00011a 0%, #220000 100%)",
          border: "1px solid rgb(35, 40, 60)",
        }}
      >
        <PokedexEntryDetailsModalPokemonSection {...entry} />
        <DividerGraphic
          gap="3"
          left="318px"
          zIndex="50"
          isHeroGraphic={false}
        />
        <PokemonStats stats={entry.stats} gap="4" zIndex="50" />
        <button
          className="absolute right-3 top-3"
          onClick={() => setExpandedModal(-1)}
        >
          <RiCloseCircleLine className="h-10 w-10" />
        </button>
      </article>
      <InvisibleModalBackdrop setExpandedModal={setExpandedModal} />
    </div>
  );
};
