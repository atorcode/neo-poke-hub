import { StatType } from "../types/StatType";

export const formatStatName = (stat: StatType) => {
  switch (stat) {
    case "hp":
      return "HP";
    case "attack":
      return "Attack";
    case "defense":
      return "Defense";
    case "special-attack":
      return "Sp. Atk";
    case "special-defense":
      return "Sp. Def";
    case "speed":
      return "Speed";
    default:
      const _exhaustiveCheck: never = stat;
      return _exhaustiveCheck;
  }
};
