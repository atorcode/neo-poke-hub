import { NavBar } from "./components/nav-bar";
import { Hero } from "./components/hero";
// import { SearchBar } from "./components/search-bar";
import { Pokedex } from "./components/pokedex";
import { NUMBER_OF_POKEMON } from "@/app/constants/constants";
import { PokedexEntryType } from "./types/PokedexEntryType";

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
      {/* <NavBar /> */}
      <main>
        <div
          className="relative h-screen"
          style={{ backgroundColor: "#101114" }}
        >
          <Hero {...pokedex[0]} />
        </div>
        <Pokedex pokedex={pokedex} />
      </main>
      {/* <SearchBar /> */}
    </>
  );
};

export default Home;
