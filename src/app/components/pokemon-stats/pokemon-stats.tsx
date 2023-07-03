import { StatType } from "@/app/types/StatType";
import { StatBar } from "../stat-bar";
import { formatStatName } from "@/app/utils/formatStatName";

type PokemonStatsProps = {
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: StatType; url: string };
  }[];
  gap?: string;
  zIndex: string;
  justify?: string;
};

export const PokemonStats = ({
  stats,
  gap,
  zIndex,
  justify,
}: PokemonStatsProps) => {
  return (
    <section
      className={`z-${zIndex} flex items-center font-bold justify-${
        justify ? justify : "center"
      }`}
    >
      <ul className={`flex flex-col gap-${gap}`}>
        {stats.map((stat, index) => {
          return (
            <li key={index} className="relative flex items-center gap-4">
              <h2 className="w-16">{formatStatName(stat.stat.name)}</h2>{" "}
              <span className="flex w-10 justify-center">{stat.base_stat}</span>
              <StatBar value={stat.base_stat} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
