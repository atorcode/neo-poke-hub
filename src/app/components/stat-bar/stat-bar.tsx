type StatBarProps = {
  value: number;
};

export const StatBar = ({ value }: StatBarProps) => {
  const innerBarColor =
    value > 100 ? "bg-red-200" : value < 50 ? "bg-red-500" : "bg-amber-400";
  return (
    <div className="h-3 w-80 overflow-hidden rounded-md bg-slate-600">
      <div
        className={`h-3 ${innerBarColor}`}
        style={{ width: `${value}%` }}
        data-testid="inner-bar"
      ></div>
    </div>
  );
};
