import { ExternalLinkIconGroup } from "../external-link-icon-group";

export const Footer = () => {
  return (
    <section
      className="flex h-24 w-10/12 items-start justify-between gap-4 text-xs text-gray-100 sm:gap-10 lg:text-sm"
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
      <ExternalLinkIconGroup />
    </section>
  );
};
