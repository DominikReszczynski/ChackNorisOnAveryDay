import "./Game.css";
import { Moves, Hero, Badass } from "./GameInfo";
import chuckNorrisBack from "../../assets/chuckNorrisBack.png";
import bruceLee from "../../assets/bruceLee.png";
import { HealthBar } from "./HealthBar/HealthBar";
import { useEffect, useState } from "react";

export const Game = () => {
  const [enemyNumber, setEnemyNumber] = useState<number>(0);
  const [enemyHealth, setEnemyHealth] = useState<number>(0);
  const [heroHealth, setHeroHealth] = useState<number>(Hero.health);
  const [win, setWin] = useState<boolean>(false);
  const [lose, setLose] = useState<boolean>(false);

  useEffect(() => {
    const number = Math.floor(Math.random() * Badass.length);
    setEnemyNumber(number);
    setEnemyHealth(Badass[number].health);
  }, []);
  useEffect(() => {
    if (enemyHealth !== Badass[enemyNumber].health) {
      const number = Math.floor(Math.random() * (Moves.length - 1));
      console.log("moves number" + number);
      setHeroHealth(heroHealth - Moves[number].power);
    }
  }, [enemyHealth]);

  const useHeroMove = (movePower, moveName) => {
    // zadawanie obrażeń przeciwnikowi
    enemyHealth > movePower
      ? setEnemyHealth(enemyHealth - movePower)
      : setEnemyHealth(0);
    // sprawdzanie wygranej
    enemyHealth === 0 ? setWin(true) : null;
    // sprawdzanie przegranej
    moveName === "RUN" || heroHealth <= 0 ? setLose(true) : null;
  };

  const restart = () => {
    setLose(false);
    setWin(false);
    setEnemyHealth(Badass[enemyNumber].health);
    setHeroHealth(Hero.health);
  };
  console.log(win);
  console.log("lose" + lose);
  return (
    <div className="game_main_container">
      <div className="game_container">
        <div className="badass_health">
          <h2 id="enemy_name">{Badass[enemyNumber].name}</h2>
          <HealthBar
            currentHealth={enemyHealth}
            maxHealth={Badass[enemyNumber].health}
          />
        </div>

        <div className="badass">
          <img src={bruceLee} alt="hero" />
        </div>

        <div className="hero">
          <img src={chuckNorrisBack} alt="hero" />
        </div>

        <div className="hero_health">
          <h2 id="hero_name">{Hero.name}</h2>
          <HealthBar currentHealth={heroHealth + 3} maxHealth={Hero.health} />
        </div>

        <div className="moves">
          {Moves.map((data) => {
            return (
              <button
                key={data.name}
                onClick={() => {
                  useHeroMove(data.power, data.name);
                }}
              >
                {data.name}
              </button>
            );
          })}
        </div>
      </div>
      {lose && (
        <div className="result_info">
          <h2>YOU LOSE</h2>
          <button onClick={() => restart()}>RESTART</button>
        </div>
      )}
      {win && (
        <div className="result_info">
          <h2>YOU WIN</h2>
          <button onClick={() => restart()}>RESTART</button>
        </div>
      )}
    </div>
  );
};
