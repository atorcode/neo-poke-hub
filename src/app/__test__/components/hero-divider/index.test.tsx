import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroDivider } from "@/app/components/hero-divider";

describe("HeroDivider", () => {
  it("displays top divider properly", () => {
    render(<HeroDivider />);
    const dividerElement = screen.getByTestId("divider-top");
    expect(dividerElement).toBeInTheDocument();
  });
  it("displays bottom divider properly", () => {
    render(<HeroDivider />);
    const dividerElement = screen.getByTestId("divider-bottom");
    expect(dividerElement).toBeInTheDocument();
  });
  it("displays divider logo properly", () => {
    render(<HeroDivider />);
    const logoElement = screen.getByTestId("divider-logo");
    expect(logoElement).toBeInTheDocument();
  });
});
