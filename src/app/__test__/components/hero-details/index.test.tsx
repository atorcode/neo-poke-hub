import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroDetails } from "@/app/components/hero-details";
import { rest, RestRequest, ResponseComposition, RestContext } from "msw";
import { setupServer } from "msw/node";
import { mewData } from "../../mocks/mew-data";

const server = setupServer(
  rest.get(
    `https://pokeapi.co/api/v2/pokemon/mew/`,
    (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json([mewData]));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// finish test cases
describe("HeroDetails", () => {
  describe("heading", () => {
    it("displays the correct text from fetched data", async () => {
      render(<HeroDetails {...mewData} />);
      const headingElement = await screen.findByRole("heading", {
        level: 1,
        name: /^mew$/i,
      });
      expect(headingElement).toBeInTheDocument();
    });
  });
});
