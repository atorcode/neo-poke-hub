import Image from "next/image";
import { HeroDetails } from "../hero-details";
import { PokedexEntryType } from "@/app/types/pokedex-entry-type";
import { DividerGraphic } from "../divider-graphic";
import { ParallaxWaves } from "../parallax-waves/parallax-waves";
import styles from "./hero.module.css";

type HeroProps = PokedexEntryType;

export const Hero = (pokedexEntry: HeroProps) => {
  return (
    <article
      className={`${styles["hero"]} relative flex min-h-screen items-center justify-center overflow-hidden`}
      style={{ backgroundColor: "#000565" }}
    >
      <Image
        src="/Pokemon_Logo.svg"
        alt="Pokemon Logo"
        // width and height must explicitly be set here to avoid error but styles determine true size
        width={0}
        height={0}
        className="absolute bottom-0 left-10 h-2/5"
        style={{ width: "30vw", maxWidth: "400px" }}
      />
      <HeroDetails {...pokedexEntry} />
      <DividerGraphic gap="6" zIndex="10" isHeroGraphic={true} />
      <div
        className={`${styles["image-container"]} z-10 flex w-3/6 items-center justify-center`}
      >
        <img
          className={styles["hero-image"]}
          src="/sobble.gif"
          alt="Sobble smiles and blinks while swaying side to side"
        />
      </div>
      <ParallaxWaves />
    </article>
  );
};
