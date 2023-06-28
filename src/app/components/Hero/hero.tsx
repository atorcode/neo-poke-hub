import { HeroDetails } from "../hero-details";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";

type HeroProps = PokedexEntryType[];

export const Hero = (pokedex: HeroProps) => {
  return (
    <section
      className="flex w-screen items-center justify-center bg-blue-500"
      style={{ height: "95%" }}
    >
      <HeroDetails {...pokedex[420]} />
    </section>
  );
};
