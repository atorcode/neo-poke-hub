import { Hero } from "./components/hero";
import { NUMBER_OF_POKEMON } from "@/app/constants/constants";
import { PokedexEntryType } from "./types/pokedex-entry-type";
import { DisplayedPokemon } from "./components/displayed-pokemon";

const fetchData = async () => {
  let pokedex = [];
  for (let i = 816; i <= 840; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    const data = await response.json();
    pokedex.push(data);
  }
  return pokedex;
};

const Home = async () => {
  const pokedex: PokedexEntryType[] = await fetchData();
  return (
    <>
      <main>
        <div
          className="relative h-screen"
          style={{ backgroundColor: "#101114" }}
        >
          <Hero {...pokedex[0]} />
        </div>
        <DisplayedPokemon pokedex={pokedex} />
      </main>
    </>
  );
};

export default Home;
