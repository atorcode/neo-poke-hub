import { addLeadingZeros } from "@/utils/addLeadingZeros";
import { formatMeasurements } from "@/utils/formatHeightAndWeight";

type HeroDetailsProps = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { slot: number; type: { name: string; url: string } }[];
  stats: {
    base_state: number;
    effort: number;
    stat: { name: number; url: string };
  }[];
};

export const HeroDetails = ({
  id,
  name,
  weight,
  height,
  types,
  stats,
}: HeroDetailsProps) => {
  console.log(addLeadingZeros(id));
  return (
    <section>
      <h2>#{addLeadingZeros(id)}</h2>
      <h1 className="text-8xl">{name.toUpperCase()}</h1>
      <ul>
        {types.map((type, index) => {
          return <li key={index}>{type.type.name}</li>;
        })}
      </ul>
      <ul>
        {stats.map((stat, index) => {
          return (
            <li key={index}>
              {stat.stat.name} - {stat.stat.url}
            </li>
          );
        })}
      </ul>
      <p>{formatMeasurements(height)} m</p>
      <p>{formatMeasurements(weight)} kg</p>
    </section>
  );
};
