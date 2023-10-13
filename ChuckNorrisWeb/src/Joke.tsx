import { useEffect, useState } from "react";
import axios from "axios";
import { TranslatorProvider, useTranslate } from "react-translate";
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
    <>
      <p>{translate ? chuckNorrisJokePL : chuckNorrisJoke}</p>
      <button onClick={() => setTranslate(!translate)}>{`change on ${
        translate ? "ENG" : "PL"
      }`}</button>
    </>
  );
};
