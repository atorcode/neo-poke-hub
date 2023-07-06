import { PokemonMeasurements } from "../pokemon-measurements";
import { TypeBoxGroup } from "../type-box-group";
import { addLeadingZeros } from "@/app/utils/add-leading-zeros";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";

type PokedexEntryDetailsModalPokemonSectionProps = PokedexEntryType;

export const PokedexEntryDetailsModalPokemonSection = (
  entry: PokedexEntryDetailsModalPokemonSectionProps
) => {
  return (
    <section className="z-50 flex h-full items-start">
      <div
        className="relative flex flex-col items-center justify-center gap-2 overflow-hidden px-5 pt-4 font-bold"
        style={{ width: "318px" }}
      >
        <h3 className="text-lg">#{addLeadingZeros(entry.id)}</h3>
        <h2 className="mb-2 text-3xl">{entry.name.toUpperCase()}</h2>
        <TypeBoxGroup types={entry.types} />
        <PokemonMeasurements height={entry.height} weight={entry.weight} />
      </div>
      <div className="absolute bottom-0 left-0 w-64 translate-x-8 translate-y-14">
        <img src={entry.sprites.other.home.front_default} alt={entry.name} />
      </div>
    </section>
  );
};
