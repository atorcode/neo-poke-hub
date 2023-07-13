"use client";
import { CgPokemon } from "react-icons/cg";
import { useEffect, useState } from "react";
import styles from "./divider-graphic.module.css";

type DividerGraphicProps = {
  gap: string;
  left?: string;
  zIndex: string;
};

export const DividerGraphic = ({ gap, left, zIndex }: DividerGraphicProps) => {
  return (
    <div
      className={`${styles["divider-group"]} absolute z-${zIndex} h-full gap-${gap} text-gray-100`}
      style={{ left: `${left}` }}
    >
      <div className={styles["first-divider"]} data-testid="divider-top"></div>
      <CgPokemon
        className={styles["divider-icon"]}
        data-testid="divider-logo"
      />
      <div
        className={styles["second-divider"]}
        data-testid="divider-bottom"
      ></div>
    </div>
  );
};
