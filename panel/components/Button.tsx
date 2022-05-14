import { h } from "preact";

const Button = ({ children, className, clickHandler, ...props }) => (
  <button
    type="button"
    className={`button ${className}`}
    onClick={clickHandler}
    {...props}
  >
    {children}
  </button>
);

export default Button;
