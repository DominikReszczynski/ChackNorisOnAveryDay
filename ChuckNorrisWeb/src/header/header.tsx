import Logo from "../assets/hat.svg";
import "./style.css";
export const AppHeader = () => {
  return (
    <section className="top-nav">
      <img className="logo" src={Logo} alt="" />
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" for="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
    </section>
  );
};
