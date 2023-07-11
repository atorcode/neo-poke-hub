import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TypeBoxGroup } from "@/app/components/type-box-group";
import { PokemonTypeType } from "@/app/types/pokemon-type-type";

const testTypes1 = [
  {
    slot: 1,
    type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
  },
];
const testTypes2: PokemonTypeType[] = ["psychic"];

describe("TypeBoxGroup", () => {
  it("renders properly with test object and grid", () => {
    render(<TypeBoxGroup types={testTypes1} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toHaveClass("grid");
  });

  it("renders properly with test string", () => {
    render(<TypeBoxGroup types={testTypes2} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });
});
