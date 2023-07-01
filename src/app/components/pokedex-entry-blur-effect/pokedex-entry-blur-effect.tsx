export const PokedexEntryBlurEffect = () => {
  return (
    <div className="relative">
      <div
        className="absolute left-1/2 h-48 w-48 -translate-x-1/2"
        data-testid="blur-effect"
        style={{
          zIndex: 0,
          backgroundColor: "#4d64f3",
          filter: "blur(128px)",
        }}
      ></div>
    </div>
  );
};
