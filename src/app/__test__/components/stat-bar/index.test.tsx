import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StatBar } from "@/app/components/stat-bar";

describe("StatBar", () => {
  it("has correct color for low stats", () => {
    render(<StatBar value={25} />);
    const divElement = screen.getByTestId("inner-bar");
    expect(divElement).toHaveStyle("background-color: rgb(255, 32, 32)");
  });
  it("has correct color for medium stats", () => {
    render(<StatBar value={75} />);
    const divElement = screen.getByTestId("inner-bar");
    expect(divElement).toHaveStyle("background-color: rgb(0, 192, 0)");
  });
  it("has correct color for high stats", () => {
    render(<StatBar value={125} />);
    const divElement = screen.getByTestId("inner-bar");
    expect(divElement).toHaveStyle("background-color: rgb(0, 160, 255)");
  });
});
