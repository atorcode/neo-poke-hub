import { NavBar } from "./components/nav-bar";
import { Hero } from "./components/hero";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="flex h-screen justify-center">
        <Hero />
      </main>
    </>
  );
};

export default Home;
