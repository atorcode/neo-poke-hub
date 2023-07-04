import { FaLinkedin, FaGithub } from "react-icons/fa";

export const ExternalLinkIconGroup = () => {
  return (
    <div className="flex h-full items-center justify-end gap-2 text-3xl text-gray-200 sm:gap-4 md:gap-6 lg:gap-8">
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
  );
};
