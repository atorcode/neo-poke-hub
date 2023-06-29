import { TypeBox } from "../type-box/type-box";

type TypeBoxGroupProps = {
  types: { slot: number; type: { name: string; url: string } }[];
};

export const TypeBoxGroup = ({ types }: TypeBoxGroupProps) => {
  return (
    <ul className="flex justify-start gap-2">
      {types.map((type, index) => {
        return (
          <li
            key={index}
            className="flex items-center justify-center px-3 py-1"
            style={{ backgroundColor: `var(--${type.type.name}-type)` }}
          >
            <TypeBox type={type} />
          </li>
        );
      })}
    </ul>
  );
};
