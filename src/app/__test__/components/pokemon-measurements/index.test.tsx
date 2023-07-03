import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokemonMeasurements } from "@/app/components/pokemon-measurements";

const mockHeight = 7;
const mockWeight = 115;

describe("PokemonMeasurements", () => {
  it("displays height corretly", () => {
    render(<PokemonMeasurements height={mockHeight} weight={mockWeight} />);
    const heightElement = screen.getByText(/0\.7 m/);
    expect(heightElement).toBeInTheDocument();
  });
  it("displays weight corretly", () => {
    render(<PokemonMeasurements height={mockHeight} weight={mockWeight} />);
    const weightElement = screen.getByText(/11\.5 kg/);
    expect(weightElement).toBeInTheDocument();
  });
});
