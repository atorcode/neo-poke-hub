import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InvisibleModalBackdrop } from "@/app/components/invisible-modal-backdrop";

const mockSetState = jest.fn();

describe("InvisibleModalBackdrop", () => {
  it("renders properly", () => {
    render(<InvisibleModalBackdrop setExpandedModal={mockSetState} />);
    const backdropElement = screen.getByTestId("modal-backdrop");
    expect(backdropElement).toBeInTheDocument();
  });
});
