import { Hero } from "../hero";
import { DisplayedPokemon } from "../displayed-pokemon";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";
import { DisplayedPokemonProvider } from "@/app/contexts/displayed-pokemon-context";

type HomePageContent = {
  pokedex: PokedexEntryType[];
};

export const HomePageContent = ({ pokedex }: HomePageContent) => {
  return (
    <main>
      <DisplayedPokemonProvider pokedex={pokedex}>
        <div
          className="relative h-screen"
          style={{ backgroundColor: "#101114" }}
        >
          <Hero {...pokedex[0]} />
        </div>
        <DisplayedPokemon pokedex={pokedex} />
      </DisplayedPokemonProvider>
    </main>
  );
};
