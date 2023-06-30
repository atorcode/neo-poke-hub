import { NavBar } from "./components/nav-bar";
import { Hero } from "./components/hero";
// import { SearchBar } from "./components/search-bar";
import { Pokedex } from "./components/pokedex";
import { NUMBER_OF_POKEMON } from "@/app/constants/constants";
import { PokedexEntryType } from "./types/PokedexEntryType";

const fetchData = async () => {
  let pokedex = [];
  for (let i = 1; i <= 40; i++) {
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
      {/* <NavBar /> */}
      <main className="h-screen">
        <Hero {...pokedex[4]} />
        <Pokedex pokedex={pokedex} />
      </main>
      {/* <SearchBar /> */}
    </>
  );
};

export default Home;
