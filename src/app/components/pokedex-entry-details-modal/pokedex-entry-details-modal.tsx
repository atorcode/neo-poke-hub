import { TypeBoxGroup } from "../type-box-group";
import { addLeadingZeros } from "@/app/utils/addLeadingZeros";
import { formatMeasurements } from "@/app/utils/formatMeasurements";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";
import { RxRulerSquare } from "react-icons/rx";
import { IoScale } from "react-icons/io5";
import { PokedexEntryBlurEffect } from "../pokedex-entry-blur-effect/pokedex-entry-blur-effect";
import { DividerGraphic } from "../divider-graphic";

type PokedexEntryProps = PokedexEntryType;

export const PokedexEntryDetailsModal = (entry: PokedexEntryProps) => {
  return (
    <article
      className="fixed left-1/2 top-1/2 z-50 h-96  -translate-x-1/2 -translate-y-1/2 rounded-3xl"
      style={{
        width: "60rem",
        backgroundColor: "#00011a",
        border: "1px solid rgb(35, 40, 60)",
      }}
    >
      <div className="absolute left-0 h-full overflow-hidden rounded-3xl">
        <div
          className="relative flex flex-col items-center justify-center gap-2 px-5 pt-4 font-bold text-white"
          style={{ width: "318px" }}
        >
          <h3 className="text-lg">#{addLeadingZeros(entry.id)}</h3>
          <h2 className="mb-2 text-3xl">{entry.name.toUpperCase()}</h2>
          <TypeBoxGroup types={entry.types} />
          <ul className="flex gap-6 pt-3">
            <li className="flex items-center justify-center gap-3">
              <RxRulerSquare className="text-2xl" />
              {formatMeasurements(entry.height)} m
            </li>
            <li className="flex items-center justify-center gap-3">
              <IoScale className="text-2xl" />
              {formatMeasurements(entry.weight)} kg
            </li>
          </ul>
        </div>
      </div>
      <DividerGraphic
        size="5rem"
        positionType="relative"
        dividerLength="7rem"
        gap="3"
      />
      <div className="absolute bottom-0 left-0 w-64 translate-x-8 translate-y-14">
        <img src={entry.sprites.other.home.front_default} alt={entry.name} />
      </div>
    </article>
  );
};
