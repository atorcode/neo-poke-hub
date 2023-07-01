import { PokedexEntryType } from "./PokedexEntryType";

export type PokedexEntryProps = {
  entry: PokedexEntryType;
  expandedModal: number;
  setExpandedModal: React.Dispatch<React.SetStateAction<number>>;
};
