import { CgPokemon } from "react-icons/cg";

type DividerGraphicProps = {
  size: string;
  positionType: "absolute" | "relative";
  dividerLength: string;
};

export const DividerGraphic = ({
  size,
  positionType,
  dividerLength,
}: DividerGraphicProps) => {
  return (
    <div
      className={`${positionType} z-10 flex flex-col items-center justify-center gap-6 text-white`}
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
