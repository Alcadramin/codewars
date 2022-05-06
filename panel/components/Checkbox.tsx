import { h } from "preact";

const Checkbox = ({ value, setValue }) => (
  <input
    type="checkbox"
    className="mx-0-5"
    defaultChecked={value}
    onInput={setValue}
  />
);

export default Checkbox;
