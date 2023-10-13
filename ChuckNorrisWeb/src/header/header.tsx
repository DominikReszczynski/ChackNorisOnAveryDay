import Logo from "../assets/hat.svg";
import "./style.css";
export const AppHeader = () => {
  return (
    <div id="logo_conteiner">
      <img id="logo" src={Logo} alt="Logo" />
      <h3 id="title">CHUCK NORRIS WEB</h3>
    </div>
  );
};
