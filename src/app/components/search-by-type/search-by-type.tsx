import { TypeBoxGroup } from "../type-box-group";
import { PokemonTypeType } from "@/app/types/PokemonTypeType";
import { POKEMON_TYPES } from "@/app/constants/constants";

const types: PokemonTypeType[] = POKEMON_TYPES;

export const SearchByType = () => {
  return (
    <div>
      <TypeBoxGroup types={types} layout="grid" />
    </div>
  );
};
