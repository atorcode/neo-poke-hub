import { HeroDetails } from "../HeroDetails";

const fetchData = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  return response.json();
};

export const Hero = async () => {
  const data = await fetchData("pikachu");
  console.log(data);
  return (
    <section className="w-screen bg-red-500">
      <HeroDetails {...data} />
    </section>
  );
};
