import { useEffect, useState } from "react";
import "./Joke.css";
import axios from "axios";
export const Joke = () => {
  const [chuckNorrisJoke, setChuckNorrisJoke] = useState();
  const [chuckNorrisJokePL, setChuckNorrisJokePL] = useState();
  const [translate, setTranslate] = useState(false);
  let data = {
    q: chuckNorrisJoke,
    source: "auto",
    target: "pl",
    format: "text",
    api_key: "",
  };
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Wystąpił błąd podczas wysyłania żądania.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Odpowiedź serwera:", data.value);
        setChuckNorrisJoke(data.value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);
  useEffect(() => {
    axios
      .post(`https://libretranslate.de/translate`, data)
      .then((response) => {
        console.log(response.data.translatedText);
        setChuckNorrisJokePL(response.data.translatedText);
      })
      .catch((err) => {
        console.error(`error ${err}`);
      });
  }, [chuckNorrisJoke]);
  return (
    <div className="site_conteiner">
      <p>Do następnego żartu:</p>

      <h3>{`${24 - time.getHours() < 10 ? "0" : ""}${24 - time.getHours()}:${
        60 - time.getMinutes() < 10 ? "0" : ""
      }${60 - time.getMinutes()}:${60 - time.getSeconds() < 10 ? "0" : ""}${
        60 - time.getSeconds()
      }`}</h3>

      <p>{translate ? chuckNorrisJokePL : chuckNorrisJoke}</p>

      <button onClick={() => setTranslate(!translate)}>{`${
        translate ? "ENG" : "PL"
      }`}</button>
    </div>
  );
};
