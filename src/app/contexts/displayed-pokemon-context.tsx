import React, { useContext, useState } from "react";
import { PokedexEntryType } from "../types/pokedex-entry-type";

type DisplayedPokemonContextType = {
  displayedPokemon: PokedexEntryType[];
  setDisplayedPokemon: React.Dispatch<React.SetStateAction<PokedexEntryType[]>>;
};

const DisplayedPokemonContext = React.createContext<
  DisplayedPokemonContextType | undefined
>(undefined);

const DisplayedPokemonProvider = ({
  children,
  pokedex,
}: {
  children: React.ReactNode;
  pokedex: PokedexEntryType[];
}) => {
  const [displayedPokemon, setDisplayedPokemon] =
    useState<PokedexEntryType[]>(pokedex);

  return (
    <DisplayedPokemonContext.Provider
      value={{ displayedPokemon, setDisplayedPokemon }}
    >
      {children}
    </DisplayedPokemonContext.Provider>
  );
};

const useDisplayedPokemonContext = (): DisplayedPokemonContextType => {
  const context = useContext(DisplayedPokemonContext);
  if (!context) {
    throw new Error(
      "useDisplayedPokemonContext must be used within a DisplayedPokemonProvider"
    );
  }
  return context;
};

export { DisplayedPokemonProvider, useDisplayedPokemonContext };
