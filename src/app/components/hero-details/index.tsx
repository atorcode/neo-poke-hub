import { StatBar } from "../stat-bar";

import { addLeadingZeros } from "@/utils/addLeadingZeros";
import { formatMeasurements } from "@/utils/formatHeightAndWeight";

type HeroDetailsProps = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { slot: number; type: { name: string; url: string } }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  sprites: { other: { home: { front_default: string } } };
};

export const HeroDetails = ({
  id,
  name,
  weight,
  height,
  types,
  stats,
  sprites,
}: HeroDetailsProps) => {
  return (
    <>
      <section className="flex w-3/6 flex-col items-center">
        <div>
          <h2>#{addLeadingZeros(id)}</h2>
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
                  {stat.stat.name} <StatBar value={stat.base_stat} />
                  {stat.base_stat}
                </li>
              );
            })}
          </ul>
          <p>{formatMeasurements(height)} m</p>
          <p>{formatMeasurements(weight)} kg</p>
        </div>
      </section>
      <div className="w-3/6">
        <img src={sprites.other.home.front_default} alt={name} />
      </div>
    </>
  );
};
