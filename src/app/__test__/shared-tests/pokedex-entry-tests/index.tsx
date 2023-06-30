import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";

export const pokedexEntryTests = (
  Component: React.ComponentType<PokedexEntryType>,
  mockData: PokedexEntryType
) => {
  it("displays the correct Pokemon name", () => {
    render(<Component {...mockData} />);
    const headingElement = screen.getByRole("heading", {
      level: 2,
      name: /^mew$/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
  it("displays the correct Pokedex number", () => {
    render(<Component {...mockData} />);
    const headingElement = screen.getByRole("heading", {
      level: 3,
      name: /^#151$/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
  it("displays the correct types", () => {
    render(<Component {...mockData} />);
    const pokemonTypeElement = screen.getByText(/^psychic$/i);
    expect(pokemonTypeElement).toBeInTheDocument();
  });
  it("renders the image correctly", () => {
    render(<Component {...mockData} />);
    const imgElement = screen.getByAltText(/^mew$/i);
    expect(imgElement).toBeInTheDocument();
  });
};
