import { HeroDetails } from "../hero-details";

const fetchData = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  return response.json();
};

export const Hero = async () => {
  const data = await fetchData("mewtwo");
  console.log(data);
  return (
    <section
      className="justify-cente flex w-screen items-center bg-blue-500"
      style={{ height: "95%" }}
    >
      <HeroDetails {...data} />
    </section>
  );
};
