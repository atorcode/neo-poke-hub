import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchBar } from "@/app/components/search-bar";
import { mewData } from "../../mocks/mew-data";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";

const mockedPokedex: PokedexEntryType[] = [mewData];
const mockedSetState = jest.fn();
describe("SearchBar", () => {
  it("renders properly", () => {
    render(
      <SearchBar pokedex={mockedPokedex} setDisplayedPokemon={mockedSetState} />
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});
