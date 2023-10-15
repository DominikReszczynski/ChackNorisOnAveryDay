import React from "react";
import "./HealthBar.css";
interface HealthBarPropsTnterface {
  currentHealth: number;
  maxHealth: number;
}
export const HealthBar: React.FC<HealthBarPropsTnterface> = ({
  currentHealth,
  maxHealth,
}) => {
  const healthPercentage = (currentHealth / maxHealth) * 100;

  return (
    <div className="health-bar">
      <div
        className="health-bar__current"
        style={{ width: `${healthPercentage}%` }}
      />
    </div>
  );
};
