import { h } from "preact";

const Button = ({ children, className, clickHandler }) => (
  <button
    type="button"
    className={`${className} button button-primary`}
    onClick={clickHandler}
  >
    {children}
  </button>
);

export default Button;
