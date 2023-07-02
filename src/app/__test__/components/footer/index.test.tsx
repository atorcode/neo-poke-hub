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
  it("renders external links correctly", () => {
    render(<Footer />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(3);
    linkElements.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
