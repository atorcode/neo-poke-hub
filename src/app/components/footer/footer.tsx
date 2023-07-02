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
        <a href="https://github.com/atorcode" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alberto-torrigiotti/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://atorcode.com" target="_blank" rel="noreferrer">
          <img
            src="/portfolio-icon.svg"
            alt="Portfolio Icon"
            style={{ width: "30px", height: "30px" }}
          />
        </a>
      </div>
    </section>
  );
};
