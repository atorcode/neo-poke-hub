import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavBar } from "@/app/components/nav-bar";

describe("NavBar", () => {
  it("renders correctly", () => {
    render(<NavBar />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
  it("displays correct text", () => {
    render(<NavBar />);
    const navElement = screen.getByRole("heading", {
      level: 1,
      name: "NeoPokeHub",
    });
    expect(navElement).toBeInTheDocument();
  });
  // Same test is in Footer. Break tests files down to correspond to components to avoid repeat tests.
  it("renders external links correctly", () => {
    render(<NavBar />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(3);
    linkElements.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
