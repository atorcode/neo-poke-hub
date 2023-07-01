import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokedexEntryBlurEffect } from "@/app/components/pokedex-entry-blur-effect/pokedex-entry-blur-effect";

describe("PokedexEntryBlurEffect", () => {
  it("renders blur effect correctly", () => {
    render(<PokedexEntryBlurEffect />);
    const blurElement = screen.getByTestId("blur-effect");
    const blurStyle = window.getComputedStyle(blurElement);
    const blurValue = blurStyle.getPropertyValue("filter");
    expect(blurValue).toBe("blur(128px)");
  });
});
