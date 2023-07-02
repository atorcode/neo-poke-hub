import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroDetails } from "@/app/components/hero-details";
import { rest, RestRequest, ResponseComposition, RestContext } from "msw";
import { setupServer } from "msw/node";
import { mewData } from "../../mocks/mew-data";

// hero image is not tested in this file

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

describe("HeroDetails", () => {
  it("displays the correct heading", async () => {
    render(<HeroDetails {...mewData} />);
    const nameElement = await screen.findByRole("heading", {
      level: 1,
      name: /^mew$/i,
    });
    expect(nameElement).toBeInTheDocument();
  });
  it("displays the correct Pokedex number", async () => {
    render(<HeroDetails {...mewData} />);
    const pokedexNumberElement = await screen.findByRole("heading", {
      level: 2,
      name: "#151",
    });
    expect(pokedexNumberElement).toBeInTheDocument();
  });
  it("displays the correct types", async () => {
    render(<HeroDetails {...mewData} />);
    const typeElement = await screen.findByText(/^psychic$/i);
    expect(typeElement).toBeInTheDocument();
  });
  it("displays the correct stats", async () => {
    render(<HeroDetails {...mewData} />);
    const statElements = await screen.findAllByText("100");
    expect(statElements.length).toBe(6);
    statElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
