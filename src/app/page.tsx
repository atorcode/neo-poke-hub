import { NavBar } from "./components/nav-bar";
import { Hero } from "./components/hero";
import { SearchBar } from "./components/search-bar";
import { Pokedex } from "./components/pokedex";
import { NUMBER_OF_POKEMON } from "@/app/constants/constants";

const fetchData = async () => {
  let pokedex = [];
  for (let i = 1; i <= NUMBER_OF_POKEMON; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    const data = await response.json();
    pokedex.push(data);
  }
  return pokedex;
};

const Home = async () => {
  const pokedex = await fetchData();
  return (
    <>
      <NavBar />
      <main className="flex h-screen flex-col justify-center">
        <Hero {...pokedex} />
        <Pokedex />
      </main>
      <SearchBar />
    </>
  );
};

export default Home;
