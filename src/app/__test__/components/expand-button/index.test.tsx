import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ExpandButton } from "@/app/components/expand-button";
import { ExpandedModalProvider } from "@/app/contexts/expanded-modal-context";

describe("ExpandButton", () => {
  it("renders the correct text", () => {
    render(
      <ExpandedModalProvider>
        <ExpandButton id={151} type="psychic" />
      </ExpandedModalProvider>
    );
    const buttonElement = screen.getByRole("button", {
      name: /^expand$/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
