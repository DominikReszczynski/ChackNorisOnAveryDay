// @ts-nocheck
import "./Game.css";
import { Moves, Hero, Badass } from "./GameInfo";
import chuckNorrisBack from "../../assets/chuckNorrisBack.png";
import bruceLee from "../../assets/bruceLee.png";
import { HealthBar } from "./HealthBar/HealthBar";
import { useEffect, useState } from "react";
import { LoseResult, WinResult } from "./Result/Result";
export const restart = ({
  setLose,
  setWin,
  setEnemyHealth,
  setHeroHealth,
  enemyNumber,
}) => {
  setLose(false);
  setWin(false);
  setEnemyHealth(Badass[enemyNumber].health);
  setHeroHealth(Hero.health);
};
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
    useEnemyMove();
  }, [enemyHealth]);

  const useEnemyMove = () => {
    const randomNumberAccuracy = Math.floor(Math.random() * 100);
    const moveNumber = Math.floor(Math.random() * (Moves.length - 1));
    if (
      enemyHealth !== Badass[enemyNumber].health &&
      Moves[moveNumber].accuracy > randomNumberAccuracy
    ) {
      setHeroHealth(heroHealth - Moves[moveNumber].power);
    } else console.log("pudło dla wroga");
  };

  const useHeroMove = (movePower, moveName, moveAccuracy) => {
    const randomNumberAccuracy = Math.floor(Math.random() * 100);
    if (moveAccuracy > randomNumberAccuracy) {
      // zadawanie obrażeń przeciwnikowi
      enemyHealth > movePower
        ? setEnemyHealth(enemyHealth - movePower)
        : setEnemyHealth(0),
        // sprawdzanie wygranej
        enemyHealth === 0 ? setWin(true) : null;
      // sprawdzanie przegranej
      moveName === "RUN" || heroHealth <= 0 ? setLose(true) : null;
    } else {
      console.log("pudło dla bohatera");
      setEnemyHealth(enemyHealth - 0.01);
    }
  };

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
                disabled={win || lose}
                onClick={() => {
                  useHeroMove(data.power, data.name, data.accuracy);
                }}
              >
                {data.name}
              </button>
            );
          })}
        </div>
      </div>
      {lose && (
        <LoseResult
          setLose={setLose}
          setWin={setWin}
          setEnemyHealth={setEnemyHealth}
          setHeroHealth={setHeroHealth}
          enemyNumber={enemyNumber}
        />
      )}
      {win && (
        <WinResult
          setLose={setLose}
          setWin={setWin}
          setEnemyHealth={setEnemyHealth}
          setHeroHealth={setHeroHealth}
          enemyNumber={enemyNumber}
        />
      )}
    </div>
  );
};
