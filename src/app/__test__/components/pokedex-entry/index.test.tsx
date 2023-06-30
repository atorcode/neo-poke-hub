// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokedexEntry } from "@/app/components/pokedex-entry";
import { pokedexEntryTests } from "../../shared-tests/pokedex-entry-tests";
import { mewData } from "../../mocks/mew-data";

describe("PokedexEntry", () => {
  pokedexEntryTests(PokedexEntry, mewData);
});
