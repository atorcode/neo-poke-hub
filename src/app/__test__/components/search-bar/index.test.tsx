import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchBar } from "@/app/components/search-bar";
import { mewData } from "../../mocks/mew-data";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";

const mockedPokedex: PokedexEntryType[] = [mewData];

describe("SearchBar", () => {
  it("renders properly", () => {
    render(<SearchBar pokedex={mockedPokedex} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});
