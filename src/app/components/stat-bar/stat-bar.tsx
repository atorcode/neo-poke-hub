type StatBarProps = {
  value: number;
};

export const StatBar = ({ value }: StatBarProps) => {
  const innerBarColor =
    value > 100
      ? "rgb(0, 160, 255)"
      : value < 50
      ? "rgb(255, 32, 32)"
      : "rgb(0, 192, 0)";
  return (
    <div className="h-3 w-80 overflow-hidden rounded-md bg-slate-600">
      <div
        className="h-3"
        style={{ width: `${value}%`, backgroundColor: `${innerBarColor}` }}
        data-testid="inner-bar"
      ></div>
    </div>
  );
};
