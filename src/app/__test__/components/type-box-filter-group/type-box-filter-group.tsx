import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TypeBoxFilterGroup } from "@/app/components/type-box-filter-group";
import { PokemonTypeType } from "@/app/types/pokemon-type-type";
import { mewData } from "../../mocks/mew-data";

const testTypes: PokemonTypeType[] = ["psychic"];

it("renders properly with test string", () => {
  render(<TypeBoxFilterGroup types={testTypes} pokedex={[mewData]} />);
  const ulElement = screen.getByRole("list");
  expect(ulElement).toBeInTheDocument();
  expect(ulElement).toHaveClass("grid");
});
