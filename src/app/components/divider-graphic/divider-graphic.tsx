"use client";
import { CgPokemon } from "react-icons/cg";
import { useEffect, useState } from "react";
import styles from "./divider-graphic.module.css";

type DividerGraphicProps = {
  gap: string;
  left?: string;
  zIndex: string;
  isHeroGraphic: boolean;
};

export const DividerGraphic = ({
  gap,
  left,
  zIndex,
  isHeroGraphic,
}: DividerGraphicProps) => {
  return (
    <div
      className={`${
        isHeroGraphic ? styles["divider-group-hero"] : styles["divider-group"]
      } absolute z-${zIndex} h-full gap-${gap} text-gray-100`}
      style={{ left: `${left}` }}
    >
      <div
        className={
          isHeroGraphic ? styles["first-divider-hero"] : styles["first-divider"]
        }
        data-testid="divider-top"
      ></div>
      <CgPokemon
        className={
          isHeroGraphic ? styles["divider-icon-hero"] : styles["divider-icon"]
        }
        data-testid="divider-logo"
      />
      <div
        className={
          isHeroGraphic
            ? styles["second-divider-hero"]
            : styles["second-divider"]
        }
        data-testid="divider-bottom"
      ></div>
    </div>
  );
};
