import { PokedexEntryType } from "@/app/types/PokedexEntryType";
import { PokedexEntry } from "../pokedex-entry";

type PokedexProps = {
  pokedex: PokedexEntryType[];
};

export const Pokedex = ({ pokedex }: PokedexProps) => {
  return (
    <section className="flex gap-10 bg-blue-800">
      {pokedex.map((entry) => {
        return <PokedexEntry key={entry.id} {...entry} />;
      })}
    </section>
  );
};

// export const Pokedex = () => {
//   return <section className="bg-blue-800"></section>;
// };
