import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokedexEntryDetailsModal } from "@/app/components/pokedex-entry-details-modal";
import { mewData } from "../../mocks/mew-data";

const mockSetState = jest.fn();

describe("PokedexEntryDetailsModal", () => {
  it("displays the correct Pokemon name", () => {
    render(
      <PokedexEntryDetailsModal
        entry={mewData}
        setExpandedModal={mockSetState}
      />
    );
    const headingElement = screen.getByRole("heading", {
      level: 2,
      name: /^mew$/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
  it("displays the correct Pokedex number", () => {
    render(
      <PokedexEntryDetailsModal
        entry={mewData}
        setExpandedModal={mockSetState}
      />
    );
    const headingElement = screen.getByRole("heading", {
      level: 3,
      name: /^#151$/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
  it("displays the correct types", () => {
    render(
      <PokedexEntryDetailsModal
        entry={mewData}
        setExpandedModal={mockSetState}
      />
    );
    const pokemonTypeElement = screen.getByText(/^psychic$/i);
    expect(pokemonTypeElement).toBeInTheDocument();
  });
  it("renders the image correctly", () => {
    render(
      <PokedexEntryDetailsModal
        entry={mewData}
        setExpandedModal={mockSetState}
      />
    );
    const imgElement = screen.getByAltText(/^mew$/i);
    expect(imgElement).toBeInTheDocument();
  });
  it("renders the stats correctly", () => {
    render(
      <PokedexEntryDetailsModal
        entry={mewData}
        setExpandedModal={mockSetState}
      />
    );
    // failing for some reason
    const statElements = screen.getAllByText(/100/);
    expect(statElements.length).toBe(6);
    statElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
