"use client";

import { NUMBER_OF_POKEMON } from "@/app/constants/constants";
import { HomePageContent } from "./components/home-page-content";
import { PokedexEntryType } from "./types/pokedex-entry-type";

const fetchData = async () => {
  let pokedex = [];
  for (let i = 816; i <= 845; i++) {
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
      <HomePageContent pokedex={pokedex} />
    </>
  );
};

export default Home;
