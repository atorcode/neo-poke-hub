import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokedexEntry } from "@/app/components/pokedex-entry";
import { ExpandedModalProvider } from "@/app/contexts/expanded-modal-context";
import { mewData } from "../../mocks/mew-data";

describe("PokedexEntry", () => {
  it("displays the correct Pokemon name", () => {
    render(
      <ExpandedModalProvider>
        <PokedexEntry entry={mewData} />
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
        <PokedexEntry entry={mewData} />
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
        <PokedexEntry entry={mewData} />
      </ExpandedModalProvider>
    );
    const pokemonTypeElement = screen.getByText(/^psychic$/i);
    expect(pokemonTypeElement).toBeInTheDocument();
  });
  it("renders the image correctly", () => {
    render(
      <ExpandedModalProvider>
        <PokedexEntry entry={mewData} />
      </ExpandedModalProvider>
    );
    const imgElement = screen.getByAltText(/^mew$/i);
    expect(imgElement).toBeInTheDocument();
  });
});
