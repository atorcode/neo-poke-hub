import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroDetails } from "@/app/components/hero-details";
import { rest, RestRequest, ResponseComposition, RestContext } from "msw";
import { setupServer } from "msw/node";
import { StatType } from "@/app/types/StatType";

const mockData = {
  id: 151,
  name: "mew",
  height: 4,
  weight: 40,
  types: [
    {
      slot: 1,
      type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    },
  ],
  stats: [
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "hp" as StatType,
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "attack" as StatType,
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "defense" as StatType,
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "special-attack" as StatType,
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "special-defense" as StatType,
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 100,
      effort: 0,
      stat: {
        name: "speed" as StatType,
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
  sprites: {
    other: {
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png",
      },
    },
  },
};

const server = setupServer(
  rest.get(
    `https://pokeapi.co/api/v2/pokemon/mew/`,
    (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json([mockData]));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("HeroDetails", () => {
  describe("heading", () => {
    it("displays the correct text from fetched data", async () => {
      render(<HeroDetails {...mockData} />);
      const headingElement = await screen.findByRole("heading", {
        level: 1,
        name: /^mew$/i,
      });
      expect(headingElement).toBeInTheDocument();
    });
  });
});
