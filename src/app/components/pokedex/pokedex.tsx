import { PokedexEntryType } from "@/app/types/PokedexEntryType";
import { PokedexEntry } from "../pokedex-entry";

type PokedexProps = {
  pokedex: PokedexEntryType[];
};

export const Pokedex = ({ pokedex }: PokedexProps) => {
  return (
    <section
      className="flex flex-wrap items-center justify-center gap-10"
      style={{ backgroundColor: "#00022e" }}
    >
      {pokedex.map((entry) => {
        return <PokedexEntry key={entry.id} {...entry} />;
      })}
    </section>
  );
};
