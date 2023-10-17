import { restart } from "../Game";
import "./Result.css";
interface WinLostInterface {
  setLose: boolean;
  setWin: boolean;
  setEnemyHealth: number;
  setHeroHealth: number;
  enemyNumber: number;
}
export const WinResult = ({
  setLose,
  setWin,
  setEnemyHealth,
  setHeroHealth,
  enemyNumber,
}: WinLostInterface) => {
  return (
    <div className="result_info">
      <h2>YOU WIN</h2>
      <button
        onClick={() =>
          restart({
            setLose,
            setWin,
            setEnemyHealth,
            setHeroHealth,
            enemyNumber,
          })
        }
      >
        RESTART
      </button>
    </div>
  );
};

export const LoseResult = ({
  setLose,
  setWin,
  setEnemyHealth,
  setHeroHealth,
  enemyNumber,
}: WinLostInterface) => {
  return (
    <div className="result_info">
      <h2>YOU LOSE</h2>
      <button
        onClick={() =>
          restart({
            setLose,
            setWin,
            setEnemyHealth,
            setHeroHealth,
            enemyNumber,
          })
        }
      >
        RESTART
      </button>
    </div>
  );
};
