import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <div className="relative h-12 w-2/6 rounded-md border-2">
      <BsSearch className="absolute left-4 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search..."
        className="absolute left-12 h-full w-11/12 outline-none"
      />
    </div>
  );
};
