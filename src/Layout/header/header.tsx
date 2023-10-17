import { Link } from "react-router-dom";
import Logo from "../../assets/hat.svg";
import Hamburger from "../../assets/Hamburger_icon.svg.png";
import sygnature from "../../assets/1920px-Chuck_Norris_signature.svg.png";
import "./style.css";
export const AppHeader = () => {
  return (
    <section className="top-nav">
      <Link to="/">
        <img className="logo" src={Logo} alt="logo" />
        <img id="sygnature_logo" src={sygnature} alt="" />
      </Link>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <img src={Hamburger} alt="" />
      </label>
      <ul className="menu">
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/joke">JOKE</Link>
        </li>
        <li>
          <Link to="/filmography">FILMOGRAPHY</Link>
        </li>
        <li>
          <Link to="game">GAME</Link>
        </li>
        <li>
          <Link to="quiz">QUIZ</Link>
        </li>
      </ul>
    </section>
  );
};
