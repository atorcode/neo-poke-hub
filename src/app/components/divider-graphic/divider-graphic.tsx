"use client";
import { CgPokemon } from "react-icons/cg";
import { useEffect, useState } from "react";

type DividerGraphicProps = {
  size: string;
  dividerLength: string;
  gap: string;
  left?: string;
  zIndex: string;
};

export const DividerGraphic = ({
  size,
  dividerLength,
  gap,
  left,
  zIndex,
}: DividerGraphicProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSmallScreen(false);
      } else {
        setIsSmallScreen(true);
      }
    };

    // Checks size of viewport on mount once to ensure correct styles
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const firstVerticalDividerStyles = {
    width: "1px",
    height: `${dividerLength}`,
    background: "linear-gradient(rgb(255,255,255,0), white)",
  };
  const secondVerticalDividerStyles = {
    width: "1px",
    height: `${dividerLength}`,
    background: "linear-gradient(white, rgb(255,255,255,0))",
  };
  const firstHorizontalDividerStyles = {
    width: `${dividerLength}`,
    height: "1px",
    background: "linear-gradient(to right, rgb(255,255,255,0), white)",
  };
  const secondHorizontalDividerStyles = {
    width: `${dividerLength}`,
    height: "1px",
    background: "linear-gradient(to left, rgb(255,255,255,0), white)",
  };

  return (
    <div
      className={`absolute z-${zIndex} flex h-full flex-row items-center justify-center lg:flex-col gap-${gap} text-gray-100`}
      style={{ left: `${left}` }}
    >
      <div
        style={
          isSmallScreen
            ? firstHorizontalDividerStyles
            : firstVerticalDividerStyles
        }
        data-testid="divider-top"
      ></div>
      <CgPokemon
        style={{ fontSize: isSmallScreen ? "4rem" : size }}
        data-testid="divider-logo"
      />
      <div
        style={
          isSmallScreen
            ? secondHorizontalDividerStyles
            : secondVerticalDividerStyles
        }
        data-testid="divider-bottom"
      ></div>
    </div>
  );
};
