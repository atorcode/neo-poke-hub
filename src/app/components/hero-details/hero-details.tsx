import { StatBar } from "../stat-bar";
import { addLeadingZeros } from "@/utils/addLeadingZeros";
import { formatMeasurements } from "@/utils/formatHeightAndWeight";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";
import { StatType } from "@/app/types/StatType";

type HeroDetailsProps = PokedexEntryType;

export const HeroDetails = ({
  id,
  name,
  weight,
  height,
  types,
  stats,
  sprites,
}: HeroDetailsProps) => {
  const formatStatName = (stat: StatType) => {
    switch (stat) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      case "speed":
        return "Speed";
      default:
        const _exhaustiveCheck: never = stat;
        return _exhaustiveCheck;
    }
  };
  return (
    <>
      <section className="flex w-3/6 flex-col items-center">
        <div>
          <span className="text-xl">#{addLeadingZeros(id)}</span>
          <h1 className="text-8xl">{name.toUpperCase()}</h1>
          <ul className="flex gap-2">
            {types.map((type, index) => {
              return <li key={index}>{type.type.name}</li>;
            })}
          </ul>
          <ul>
            {stats.map((stat, index) => {
              return (
                <li key={index} className="relative flex items-center gap-4">
                  <h2 className="w-16">{formatStatName(stat.stat.name)}</h2>{" "}
                  <span className="flex w-10 justify-center">
                    {stat.base_stat}
                  </span>
                  <StatBar value={stat.base_stat} />
                </li>
              );
            })}
          </ul>
          <p>{formatMeasurements(height)} m</p>
          <p>{formatMeasurements(weight)} kg</p>
        </div>
      </section>
      <div className="flex w-3/6 items-center justify-center">
        <img src={sprites.other.home.front_default} alt={name} />
      </div>
    </>
  );
};
