import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavBar } from "@/app/components/nav-bar";

describe("NavBar", () => {
  it("renders correctly", () => {
    render(<NavBar />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
});
