import { TypeBoxFilterGroup } from "../type-box-filter-group";
import { POKEMON_TYPES } from "@/app/constants/constants";
import { PokemonTypeType } from "@/app/types/pokemon-type-type";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";

const types: PokemonTypeType[] = POKEMON_TYPES;

type SearchByTypeProps = {
  pokedex: PokedexEntryType[];
};

export const SearchByType = ({ pokedex }: SearchByTypeProps) => {
  return <TypeBoxFilterGroup types={types} pokedex={pokedex} />;
};
