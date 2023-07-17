import { addLeadingZeros } from "@/app/utils/add-leading-zeros";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";
import { TypeBoxGroup } from "../type-box-group";
import { PokemonStats } from "../pokemon-stats";
import { PokemonMeasurements } from "../pokemon-measurements";

// type StatsInfoType = {
//   base_stat: number;
//   effort: number;
//   stat: {
//     name: StatType;
//     url: string;
//   };
// };

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
      <section className="flex w-3/6 flex-col items-center text-gray-100">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">#{addLeadingZeros(id)}</h3>
          <h2 className="text-5xl font-bold sm:text-7xl">
            {name.toUpperCase()}
          </h2>
          <TypeBoxGroup types={types} />
          <PokemonStats stats={stats} zIndex="10" justify="start" />
          <PokemonMeasurements height={height} weight={weight} />
        </div>
      </section>
    </>
  );
};
