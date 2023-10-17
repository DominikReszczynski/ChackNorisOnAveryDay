import React, { useState } from "react";
import { Howl, Howler } from "howler";
import { questions } from "./Questions";
import shotSound from "../../assets/shotSound.mp3";
import "./Quiz.css";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const sound = new Howl({ src: [shotSound] });

  const handleAnswer = (answerIndex: number) => {
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="site_conteiner">
        <h1>Quiz finished!</h1>
        <p>
          Your score is {score} out of {questions.length}.
        </p>
        <button
          onClick={() => {
            setCurrentQuestion(0), setScore(0);
          }}
        >
          TRY AGAIN
        </button>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const playSound = () => {
    sound.play();
  };

  return (
    <div className="site_conteiner">
      <h2>{currentQuestionData.question}</h2>

      <div className="button-container">
        {currentQuestionData.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => {
              handleAnswer(index);
              playSound();
            }}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};
