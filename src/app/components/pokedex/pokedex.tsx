import { PokedexEntryType } from "@/app/types/PokedexEntryType";
import { PokedexEntry } from "../pokedex-entry";

type PokedexProps = {
  pokedex: PokedexEntryType[];
};

export const Pokedex = ({ pokedex }: PokedexProps) => {
  return (
    <section
      className="flex flex-wrap justify-center gap-x-10 gap-y-20 pt-5"
      style={{ minHeight: "800px", backgroundColor: "#121316" }}
    >
      {pokedex.map((entry) => {
        return <PokedexEntry key={entry.id} {...entry} />;
      })}
    </section>
  );
};
