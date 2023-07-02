import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokedexEntryDetailsModal } from "@/app/components/pokedex-entry-details-modal";
import { mewData } from "../../mocks/mew-data";

describe("PokedexEntryDetailsModal", () => {
  it("displays the correct Pokemon name", () => {
    render(<PokedexEntryDetailsModal {...mewData} />);
    const headingElement = screen.getByRole("heading", {
      level: 2,
      name: /^mew$/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
  it("displays the correct Pokedex number", () => {
    render(<PokedexEntryDetailsModal {...mewData} />);
    const headingElement = screen.getByRole("heading", {
      level: 3,
      name: /^#151$/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
  it("displays the correct types", () => {
    render(<PokedexEntryDetailsModal {...mewData} />);
    const pokemonTypeElement = screen.getByText(/^psychic$/i);
    expect(pokemonTypeElement).toBeInTheDocument();
  });
  it("renders the image correctly", () => {
    render(<PokedexEntryDetailsModal {...mewData} />);
    const imgElement = screen.getByAltText(/^mew$/i);
    expect(imgElement).toBeInTheDocument();
  });
  // Add stats section tests
});
