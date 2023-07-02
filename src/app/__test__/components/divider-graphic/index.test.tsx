import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DividerGraphic } from "@/app/components/divider-graphic";

describe("DividerGraphic", () => {
  it("displays top divider properly", () => {
    render(
      <DividerGraphic size="5rem" dividerLength="7rem" gap="3" zIndex="10" />
    );
    const dividerElement = screen.getByTestId("divider-top");
    expect(dividerElement).toBeInTheDocument();
  });
  it("displays bottom divider properly", () => {
    render(
      <DividerGraphic size="5rem" dividerLength="7rem" gap="3" zIndex="10" />
    );
    const dividerElement = screen.getByTestId("divider-bottom");
    expect(dividerElement).toBeInTheDocument();
  });
  it("displays divider logo properly", () => {
    render(
      <DividerGraphic size="5rem" dividerLength="7rem" gap="3" zIndex="10" />
    );
    const logoElement = screen.getByTestId("divider-logo");
    expect(logoElement).toBeInTheDocument();
  });
});
