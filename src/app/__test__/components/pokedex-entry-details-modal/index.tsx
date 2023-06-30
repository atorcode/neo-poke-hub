import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokedexEntryDetailsModal } from "@/app/components/pokedex-entry-details-modal";

describe("PokedexEntryDetailsModal", () => {
  it("displays the correct Pokemon name", () => {
    render(<PokedexEntryDetailsModal />);
    const headingElement = screen.getByRole("heading", {
      level: 2,
      name: /^mew$/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
  it("displays the correct Pokedex number", () => {
    render(<PokedexEntryDetailsModal />);
    const headingElement = screen.getByRole("heading", {
      level: 3,
      name: /^#151$/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
