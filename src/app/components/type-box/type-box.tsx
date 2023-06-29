type TypeBoxProps = {
  type: { type: { name: string; url: string } };
};
export const TypeBox = ({ type }: TypeBoxProps) => {
  return <span>{type.type.name}</span>;
};
