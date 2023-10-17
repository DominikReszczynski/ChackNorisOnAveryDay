import revolwer from "../../assets/crossRevolwer-removebg-preview.png";
import face from "../../assets/Chuck_Norris_Face-removebg-preview.png";
import "./About.css";
export const About = () => {
  return (
    <div className="site_conteiner">
      <img id="face_img" src={face} alt="cross revolwer" />
      <ul>
        <li>FULL NAME: CARLOS RAY NORRIS</li>
        <li>DATE OF BIRTH: 10.03.1940</li>
        <li>PLACE OF BIRTH: RYAN, OKLACHOMA</li>
      </ul>
      <img id="cross_revolwer" src={revolwer} alt="cross revolwer" />
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
    </div>
  );
};
