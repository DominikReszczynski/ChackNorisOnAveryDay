import ChuckNorisLogo from "../../assets/ChuckNorrisLogo.svg";
import sygnature from "../../assets/1920px-Chuck_Norris_signature.svg.png";
import "./Home.css";
export const Home = () => {
  return (
    <div className="site_conteiner">
      <div id="title_conteiner">
        <h1 id="title">CHUCK NORRIS WEB</h1>
        <p id="title_footer">EVERYTHING YOU WANTED TO KNOW</p>
      </div>

      <img
        className="chuckNorris_face"
        src={ChuckNorisLogo}
        alt="bad request"
      />
      <h2 className="appointment_letter">WONTED</h2>
      <h2 className="appointment_letter">DEAD OR ALIVE</h2>
      <h2 className="appointment_letter">10.000.000$</h2>
      <img className="sygnature" src={sygnature} alt="" />
    </div>
  );
};
