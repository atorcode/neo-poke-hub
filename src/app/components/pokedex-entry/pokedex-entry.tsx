"use client";

import { ExpandButton } from "../expand-button";
import { TypeBoxGroup } from "../type-box-group";
import { addLeadingZeros } from "@/app/utils/add-leading-zeros";
import { PokedexEntryDetailsModal } from "../pokedex-entry-details-modal";
import { PokedexEntryProps } from "@/app/types/pokedex-entry-props";

export const PokedexEntry = ({
  entry,
  expandedModal,
  setExpandedModal,
}: PokedexEntryProps) => {
  return (
    <article
      className="relative h-96 w-full rounded-3xl"
      style={{
        maxWidth: "20rem",
        minWidth: "16rem",
        backgroundColor: "#00011a",
        border: "1px solid rgb(35, 40, 60)",
      }}
    >
      <div className="h-full overflow-hidden rounded-3xl">
        <div className="relative">
          <div
            className="absolute left-1/2 h-48 w-48 -translate-x-1/2"
            style={{
              zIndex: 0,
              backgroundColor: "#4d64f3",
              filter: "blur(128px)",
            }}
          ></div>
        </div>
        <ExpandButton
          id={entry.id}
          setExpandedModal={setExpandedModal}
          type={entry.types[0].type.name}
        />
        <div className="relative flex flex-col items-center justify-center gap-1 px-5 text-white">
          <h3 className="text-lg font-bold">#{addLeadingZeros(entry.id)}</h3>
          <h2 className="mb-2 text-3xl font-bold">
            {entry.name.toUpperCase()}
          </h2>
          <TypeBoxGroup types={entry.types} />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 w-64 -translate-x-1/2 translate-y-14">
        <img src={entry.sprites.other.home.front_default} alt={entry.name} />
      </div>
      {expandedModal === entry.id && (
        <PokedexEntryDetailsModal
          entry={entry}
          setExpandedModal={setExpandedModal}
        />
      )}
    </article>
  );
};
