import { PokedexEntryType } from "./pokedex-entry-type";

export type PokedexEntryProps = {
  entry: PokedexEntryType;
  expandedModal: number;
  setExpandedModal: React.Dispatch<React.SetStateAction<number>>;
};
