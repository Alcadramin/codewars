import { h } from "preact";

const Dropdown = ({ isOpen, children }) => {
  return isOpen && <div className="dropdown">{children}</div>;
};

export default Dropdown;
