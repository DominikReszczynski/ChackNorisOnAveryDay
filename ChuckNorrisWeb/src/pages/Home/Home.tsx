import ChuckNorisLogo from "../../assets/ChuckNorrisLogo.svg";
import sygnature from "../../assets/1920px-Chuck_Norris'_signature.svg.png";
import "./Home.css";
export const Home = () => {
  return (
    <div className="site_conteiner">
      <div id="title_conteiner">
        <h1 id="title">CHUCK NORRIS WEB</h1>
        <p id="title_footer">WSZYSTKO NA TEMAT CHUCK'A I JEGO PRZYGÓD</p>
      </div>

      <img
        className="chuckNorris_face"
        src={ChuckNorisLogo}
        alt="bad request"
      />
      <ul>
        <li>FULL NAME: CARLOS RAY NORRIS</li>
        <li>DATE OF BIRTH: 10.03.1940</li>
        <li>PLACE OF BIRTH: RYAN, OKLACHOMA</li>
      </ul>
      <p>
        Chuck Norris is an American actor, film and television producer, martial
        arts champion - including a six-time world karate champion. He has
        English, Scottish and German roots.
      </p>
      <p>
        Norris is known for his roles in films such as "The Delta Force" (1986),
        "Missing in Action" (1984) and "Walker, Texas Ranger" (1993-2001). In
        his career, he has starred in more than 30 films and TV series 14.
      </p>
      <p>
        In his spare time, Norris is an active social and charitable activist.
      </p>
      <img className="sygnature" src={sygnature} alt="" />
    </div>
  );
};
