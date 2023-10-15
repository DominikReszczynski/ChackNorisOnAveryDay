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
  // console.log("enemy number" + enemyNumber);
  // console.log("enemy health" + enemyHealth);
  // console.log("enemy health max" + Badass[enemyNumber].health);

  return (
    <div className="game_main_container">
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
                setEnemyHealth(enemyHealth - data.power);
              }}
            >
              {data.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
