import { h } from "preact";

const SearchInput = ({ setValue, placeholder }) => (
  <input
    className="search-input"
    type="text"
    onInput={(e) => setValue((e.target as HTMLInputElement).value)}
    placeholder={placeholder || ""}
  />
);

export default SearchInput;
