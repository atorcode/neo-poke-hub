import { CgPokemon } from "react-icons/cg";

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
  return (
    <div
      className={`absolute z-${zIndex} flex h-full flex-col items-center justify-center gap-${gap} text-white`}
      style={{ left: `${left}` }}
    >
      <div
        style={{
          width: "1px",
          height: `${dividerLength}`,
          background: "linear-gradient(rgb(255,255,255,0), white)",
        }}
        data-testid="divider-top"
      ></div>
      <CgPokemon style={{ fontSize: size }} data-testid="divider-logo" />
      <div
        style={{
          width: "1px",
          height: `${dividerLength}`,
          background: "linear-gradient(white, rgb(255,255,255,0))",
        }}
        data-testid="divider-bottom"
      ></div>
    </div>
  );
};
