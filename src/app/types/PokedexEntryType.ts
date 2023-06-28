import { StatType } from "./StatType";

export type PokedexEntryType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { slot: number; type: { name: string; url: string } }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: StatType; url: string };
  }[];
  sprites: { other: { home: { front_default: string } } };
};
