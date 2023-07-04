import { ExternalLinkIconGroup } from "../external-link-icon-group";

export const NavBar = () => {
  return (
    <nav className="absolute z-50 flex w-full justify-center text-gray-200">
      <div className="z-50 flex h-36 w-10/12 items-center justify-between">
        <div className="flex items-center gap-6">
          <img
            src="/neopokehub-logo.png"
            alt="NeoPokeHub logo"
            className="ml-5 h-20 w-20"
          />
          <h1 className="text-2xl">NeoPokeHub</h1>
        </div>
        <ExternalLinkIconGroup />
      </div>
    </nav>
  );
};
