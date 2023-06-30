import { CgPokemon } from "react-icons/cg";

export const HeroDivider = () => {
  return (
    <div className="absolute z-10 flex flex-col items-center justify-center gap-6 text-white">
      <div
        className="h-52"
        style={{
          width: "1px",
          background: "linear-gradient(rgb(255,255,255,0), white)",
        }}
        data-testid="divider-top"
      ></div>
      <CgPokemon style={{ fontSize: "7rem" }} data-testid="divider-logo" />
      <div
        className="z-10 h-52 bg-white"
        style={{
          width: "1px",
          background: "linear-gradient(white, rgb(255,255,255,0))",
        }}
        data-testid="divider-bottom"
      ></div>
    </div>
  );
};
