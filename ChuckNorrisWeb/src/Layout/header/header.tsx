import { Link } from "react-router-dom";
import Logo from "../../assets/hat.svg";
import "./style.css";
export const AppHeader = () => {
  return (
    <section className="top-nav">
      <Link to="/">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <Link to="/joke">joke</Link>
        </li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
    </section>
  );
};
