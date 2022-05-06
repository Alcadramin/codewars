import { h, Fragment } from "preact";

const Header = () => (
  <Fragment>
    <div className="flex justify-center items-center mt-2">
      <h1>Codewars JavaScript Kata Solutions</h1>
    </div>
    <div className="flex justify-center items-center mt-2">
      <a href="https://www.codewars.com/users/Alcadramin" target="_blank">
        <img
          src="https://www.codewars.com/users/Alcadramin/badges/large"
          alt="Codewars"
        />
      </a>
    </div>
    <hr className="flex justify-center items-center" />
  </Fragment>
);

export default Header;
