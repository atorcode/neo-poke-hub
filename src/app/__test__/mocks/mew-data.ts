import { StatType } from "@/app/types/StatType";

export const mewData = {
  id: 151,
  name: "mew",
  height: 4,
  weight: 40,
  types: [
    {
      slot: 1,
      type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    },
  ],
  stats: [
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "hp" as StatType,
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "attack" as StatType,
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "defense" as StatType,
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "special-attack" as StatType,
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "special-defense" as StatType,
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "speed" as StatType,
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
  sprites: {
    other: {
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png",
      },
    },
  },
};
