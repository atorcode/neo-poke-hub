import { RxRulerSquare } from "react-icons/rx";
import { IoScale } from "react-icons/io5";
import { PokedexEntryBlurEffect } from "../pokedex-entry-blur-effect/pokedex-entry-blur-effect";

import { TypeBoxGroup } from "../type-box-group";
import { addLeadingZeros } from "@/app/utils/addLeadingZeros";
import { formatMeasurements } from "@/app/utils/formatMeasurements";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";

type PokedexEntryDetailsModalPokemonSectionProps = PokedexEntryType;

export const PokedexEntryDetailsModalPokemonSection = (
  entry: PokedexEntryDetailsModalPokemonSectionProps
) => {
  return (
    <section className="flex h-full items-start">
      <div
        className="relative flex flex-col items-center justify-center gap-2 overflow-hidden px-5 pt-4 font-bold"
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
      <div className="absolute bottom-0 left-0 w-64 translate-x-8 translate-y-14">
        <img src={entry.sprites.other.home.front_default} alt={entry.name} />
      </div>
    </section>
  );
};
