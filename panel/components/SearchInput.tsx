import { h, Fragment } from "preact";

const SearchInput = ({ setValue, placeholder }) => (
  <Fragment>
    <input
      className="search-input"
      type="text"
      onChange={(e) => setValue(e.currentTarget.value)}
      placeholder={placeholder || ""}
    />
  </Fragment>
);

export default SearchInput;
