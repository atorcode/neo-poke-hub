import { PokedexEntryType } from "@/app/types/PokedexEntryType";

type PokedexEntryProps = PokedexEntryType;

export const PokedexEntry = (entry: PokedexEntryProps) => {
  return (
    <article className="w-3/12 bg-green-700">
      <h2>{entry.id}</h2>
      <h1>{entry.name}</h1>
      <ul>
        {entry.types.map((type) => (
          <li>{type.type.name}</li>
        ))}
      </ul>
      <div>
        <img src={entry.sprites.other.home.front_default} alt={entry.name} />
      </div>
    </article>
  );
};
