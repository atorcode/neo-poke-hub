import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TypeBoxGroup } from "@/app/components/type-box-group";

const testTypes = [
  {
    slot: 1,
    type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
  },
];

describe("TypeBoxGroup", () => {
  it("renders properly", () => {
    render(<TypeBoxGroup types={testTypes} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });
});
