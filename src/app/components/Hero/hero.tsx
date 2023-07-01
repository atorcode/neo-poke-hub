import Image from "next/image";
import { HeroDetails } from "../hero-details";
import { PokedexEntryType } from "@/app/types/PokedexEntryType";
import { DividerGraphic } from "../divider-graphic";

type HeroProps = PokedexEntryType;

export const Hero = (pokedexEntry: HeroProps) => {
  return (
    <article
      className="flex h-screen items-center justify-center bg-blue-500"
      style={{ height: "95%" }}
    >
      <Image
        src="/Pokemon_Logo.svg"
        alt="Pokemon Logo"
        // width and height must explicitly be set here to avoid error but styles determine true size
        width={0}
        height={0}
        className="absolute bottom-0 left-10 h-2/5"
        style={{ width: "40vw", maxWidth: "600px" }}
      />
      <HeroDetails {...pokedexEntry} />
      <DividerGraphic
        size="7rem"
        positionType="absolute"
        dividerLength="13rem"
      />
      <div className="z-10 flex w-3/6 items-center justify-center">
        <img
          src={pokedexEntry.sprites.other.home.front_default}
          alt={pokedexEntry.name}
        />
      </div>
    </article>
  );
};
