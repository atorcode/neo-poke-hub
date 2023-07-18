import { Hero } from "../hero";
import { DisplayedPokemon } from "../displayed-pokemon";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";
import { DisplayedPokemonProvider } from "@/app/contexts/displayed-pokemon-context";
import { ExpandedModalProvider } from "@/app/contexts/expanded-modal-context";

type HomePageContent = {
  pokedex: PokedexEntryType[];
};

export const HomePageContent = ({ pokedex }: HomePageContent) => {
  return (
    <DisplayedPokemonProvider pokedex={pokedex}>
      <ExpandedModalProvider>
        <main className="w-screen overflow-hidden">
          <div className="relative" style={{ backgroundColor: "#101114" }}>
            <Hero {...pokedex[815]} />
          </div>
          <DisplayedPokemon pokedex={pokedex} />
        </main>
      </ExpandedModalProvider>
    </DisplayedPokemonProvider>
  );
};
