type HeroDetailsProps = {
  name: string;
};

export const HeroDetails = ({ name }: HeroDetailsProps) => {
  console.log(name);
  return <h1>{name}</h1>;
};
