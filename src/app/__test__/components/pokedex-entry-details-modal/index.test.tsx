import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokedexEntryDetailsModal } from "@/app/components/pokedex-entry-details-modal";
import { mewData } from "../../mocks/mew-data";
import { ExpandedModalProvider } from "@/app/contexts/expanded-modal-context";

describe("PokedexEntryDetailsModal", () => {
  it("displays the correct Pokemon name", () => {
    render(
      <ExpandedModalProvider>
        <PokedexEntryDetailsModal entry={mewData} />
      </ExpandedModalProvider>
    );
    const headingElement = screen.getByRole("heading", {
      level: 2,
      name: /^mew$/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
  it("displays the correct Pokedex number", () => {
    render(
      <ExpandedModalProvider>
        <PokedexEntryDetailsModal entry={mewData} />
      </ExpandedModalProvider>
    );
    const headingElement = screen.getByRole("heading", {
      level: 3,
      name: /^#151$/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
  it("displays the correct types", () => {
    render(
      <ExpandedModalProvider>
        <PokedexEntryDetailsModal entry={mewData} />
      </ExpandedModalProvider>
    );
    const pokemonTypeElement = screen.getByText(/^psychic$/i);
    expect(pokemonTypeElement).toBeInTheDocument();
  });
  it("renders the image correctly", () => {
    render(
      <ExpandedModalProvider>
        <PokedexEntryDetailsModal entry={mewData} />
      </ExpandedModalProvider>
    );
    const imgElement = screen.getByAltText(/^mew$/i);
    expect(imgElement).toBeInTheDocument();
  });
  it("renders the stats correctly", () => {
    render(
      <ExpandedModalProvider>
        <PokedexEntryDetailsModal entry={mewData} />
      </ExpandedModalProvider>
    );
    // failing for some reason
    const statElements = screen.getAllByText(/100/);
    expect(statElements.length).toBe(6);
    statElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
