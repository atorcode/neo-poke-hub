import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ExpandButton } from "@/app/components/expand-button";

describe("ExpandButton", () => {
  it("renders the correct text", () => {
    const mockSetState = jest.fn();
    render(
      <ExpandButton id={151} setExpandedModal={mockSetState} type="psychic" />
    );
    const buttonElement = screen.getByRole("button", {
      name: /^expand$/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
