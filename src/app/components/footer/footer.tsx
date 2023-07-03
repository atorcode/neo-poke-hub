import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <section
      className="flex h-24 w-10/12 items-start justify-between gap-10 text-xs text-gray-200 lg:text-sm"
      style={{
        backgroundColor: "#101114",
        borderTop: "1px solid #9fa0a1",
        maxWidth: "1400px",
      }}
    >
      <div className="flex h-full flex-col items-start justify-evenly lg:w-9/12">
        <p>
          NeoPokeHub consumes PokeAPI but is not officially affiliated with The
          Pokemon Company
        </p>
        <p>&#169; 2023 Alberto Torrigiotti</p>
      </div>
      <div className="flex h-full items-center gap-2 text-3xl sm:gap-4 md:gap-6 lg:gap-8">
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
            style={{ width: "30px", minWidth: "30px", height: "30px" }}
          />
        </a>
      </div>
    </section>
  );
};
