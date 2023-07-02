import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <section
      className="flex h-24 w-10/12 items-start justify-between text-sm text-gray-200"
      style={{
        backgroundColor: "#101114",
        borderTop: "1px solid #9fa0a1",
      }}
    >
      <div className="flex h-full flex-col items-start justify-evenly">
        <p>
          NeoPokeHub consumes PokeAPI but is not officially affiliated with The
          Pokemon Company
        </p>
        <p>&#169; 2023 Alberto Torrigiotti</p>
      </div>
      <div className="flex h-full items-center gap-8 text-3xl">
        <button>
          <FaGithub />
        </button>
        <button>
          <FaLinkedin />
        </button>
      </div>
    </section>
  );
};
