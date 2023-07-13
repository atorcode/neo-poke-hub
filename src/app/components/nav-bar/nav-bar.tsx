import { ExternalLinkIconGroup } from "../external-link-icon-group";

export const NavBar = () => {
  return (
    <nav
      className="relative flex w-full justify-center text-gray-100"
      style={{ backgroundColor: "#000565" }}
    >
      <div className="z-50 flex h-28 w-11/12 items-center justify-between sm:h-32 sm:w-10/12 md:h-36">
        <div className="flex items-center gap-1 sm:gap-4 md:gap-6">
          <img
            src="/neopokehub-logo.png"
            alt="NeoPokeHub logo"
            className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl">NeoPokeHub</h1>
        </div>
        <ExternalLinkIconGroup />
      </div>
    </nav>
  );
};
