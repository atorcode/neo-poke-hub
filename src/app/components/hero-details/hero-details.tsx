import { addLeadingZeros } from "@/app/utils/addLeadingZeros";
import { formatMeasurements } from "@/app/utils/formatMeasurements";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";
import { TypeBoxGroup } from "../type-box-group";
import { PokemonStats } from "../pokemon-stats";

type HeroDetailsProps = PokedexEntryType;

export const HeroDetails = ({
  id,
  name,
  weight,
  height,
  types,
  stats,
}: HeroDetailsProps) => {
  return (
    <>
      <section className="flex w-3/6 flex-col items-center text-white">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl">#{addLeadingZeros(id)}</h2>
          <h1 className="text-7xl font-bold">{name.toUpperCase()}</h1>
          <TypeBoxGroup types={types} />
          <PokemonStats stats={stats} zIndex="10" justify="start" />
          <div>
            <p>{formatMeasurements(height)} m</p>
            <p>{formatMeasurements(weight)} kg</p>
          </div>
        </div>
      </section>
    </>
  );
};
