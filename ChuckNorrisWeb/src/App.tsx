import React, { useEffect, useState } from "react";
import "./App.css";
import { Joke } from "./joke generator/Joke";

import { AppHeader } from "./header/header";
function App() {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000); // Aktualizuje czas co minutę
  return (
    <>
      <AppHeader />
      <p>Do następnego żartu:</p>
      <h3>{`${24 - time.getHours() < 10 ? "0" : ""}${24 - time.getHours()}:${
        60 - time.getMinutes() < 10 ? "0" : ""
      }${60 - time.getMinutes()}:${60 - time.getSeconds() < 10 ? "0" : ""}${
        60 - time.getSeconds()
      }`}</h3>
      <Joke />
    </>
  );
}

export default App;
