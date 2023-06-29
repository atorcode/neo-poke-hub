import { PokedexEntryType } from "@/app/types/PokedexEntryType";
import { ExpandButton } from "../expand-button";
import { addLeadingZeros } from "@/utils/addLeadingZeros";

type PokedexEntryProps = PokedexEntryType;

export const PokedexEntry = (entry: PokedexEntryProps) => {
  return (
    <article
      className="relative h-80 rounded-3xl bg-green-700 px-5"
      style={{ width: "20rem" }}
    >
      <ExpandButton />
      <h3>#{addLeadingZeros(entry.id)}</h3>
      <h2>{entry.name}</h2>
      <ul>
        {entry.types.map((type) => (
          <li>{type.type.name}</li>
        ))}
      </ul>
      <img
        className="absolute bottom-0 left-1/2 w-64 -translate-x-1/2 translate-y-12"
        src={entry.sprites.other.home.front_default}
        alt={entry.name}
      />
    </article>
  );
};
