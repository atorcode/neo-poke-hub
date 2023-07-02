import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "@/app/components/footer";

describe("Footer", () => {
  it("renders text correctly", () => {
    render(<Footer />);
    const attributionElement = screen.getByText(
      /^NeoPokeHub consumes PokeAPI but is not officially affiliated with The Pokemon Company$/i
    );
    expect(attributionElement).toBeInTheDocument();
  });
  it("renders social buttons correctly", () => {
    render(<Footer />);
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements.length).toBe(2);
    buttonElements.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
