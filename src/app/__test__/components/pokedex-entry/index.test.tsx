import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokedexEntry } from "@/app/components/pokedex-entry";
import { mewData } from "../../mocks/mew-data";

describe("PokedexEntry", () => {
  const mockState = -1;
  const mockSetState = jest.fn();

  it("displays the correct Pokemon name", () => {
    render(
      <PokedexEntry
        entry={mewData}
        expandedModal={mockState as number}
        setExpandedModal={
          mockSetState as React.Dispatch<React.SetStateAction<number>>
        }
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
      <PokedexEntry
        entry={mewData}
        expandedModal={mockState as number}
        setExpandedModal={
          mockSetState as React.Dispatch<React.SetStateAction<number>>
        }
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
      <PokedexEntry
        entry={mewData}
        expandedModal={mockState as number}
        setExpandedModal={
          mockSetState as React.Dispatch<React.SetStateAction<number>>
        }
      />
    );
    const pokemonTypeElement = screen.getByText(/^psychic$/i);
    expect(pokemonTypeElement).toBeInTheDocument();
  });
  it("renders the image correctly", () => {
    render(
      <PokedexEntry
        entry={mewData}
        expandedModal={mockState as number}
        setExpandedModal={
          mockSetState as React.Dispatch<React.SetStateAction<number>>
        }
      />
    );
    const imgElement = screen.getByAltText(/^mew$/i);
    expect(imgElement).toBeInTheDocument();
  });
});
