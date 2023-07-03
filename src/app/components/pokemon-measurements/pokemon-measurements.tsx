import { RxRulerSquare } from "react-icons/rx";
import { IoScale } from "react-icons/io5";
import { formatMeasurements } from "@/app/utils/formatMeasurements";

type PokemonMeasurementsProps = {
  height: number;
  weight: number;
};

export const PokemonMeasurements = ({
  height,
  weight,
}: PokemonMeasurementsProps) => {
  return (
    <ul className="flex gap-6 pt-3">
      <li className="flex items-center justify-center gap-3">
        <RxRulerSquare className="text-2xl" />
        {formatMeasurements(height)} m
      </li>
      <li className="flex items-center justify-center gap-3">
        <IoScale className="text-2xl" />
        {formatMeasurements(weight)} kg
      </li>
    </ul>
  );
};
