import { PokedexEntryType } from "@/app/types/pokedex-entry-type";
import { SearchBar } from "../search-bar";
import { SearchByType } from "../search-by-type";

type SearchSectionProps = {
  pokedex: PokedexEntryType[];
};

export const SearchSection = ({ pokedex }: SearchSectionProps) => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-8"
      style={{
        height: "600px",
        background: "linear-gradient(rgb(77,144,213), #101114",
      }}
    >
      <SearchBar pokedex={pokedex} />
      <SearchByType pokedex={pokedex} />
    </section>
  );
};
