import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TypeBox } from "@/app/components/type-box";

const testType = {
  type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
};

describe("TypeBox", () => {
  it("displays the correct text", () => {
    render(<TypeBox type={testType} />);
    // getByText instead of getByRole because the fact that element is a span is an implementation detail that doesn't matter for the end user.
    const spanElement = screen.getByText(/^psychic$/i);
  });
});
