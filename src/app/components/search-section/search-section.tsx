import { PokedexEntryType } from "@/app/types/PokedexEntryType";
import { SearchBar } from "../search-bar";
import { SearchByType } from "../search-by-type";

type SearchSectionProps = {
  pokedex: PokedexEntryType[];
  setDisplayedPokemon: React.Dispatch<React.SetStateAction<PokedexEntryType[]>>;
};

export const SearchSection = ({
  pokedex,
  setDisplayedPokemon,
}: SearchSectionProps) => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-8"
      style={{
        height: "600px",
        background: "linear-gradient(rgb(77,144,213), #101114",
      }}
    >
      <SearchBar pokedex={pokedex} setDisplayedPokemon={setDisplayedPokemon} />
      <SearchByType />
    </section>
  );
};
