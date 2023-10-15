import React, { useState } from "react";

interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
}
const questions: Question[] = [
  {
    question: "Which movie was Chuck Norris' career breakthrough?",
    answers: [
      "A. 'A Force Of One'",
      "B. 'Fists Of Fury'",
      "C. 'Game Of Death'",
      "D. 'Lone Wolf McQuade'",
    ],
    correctAnswer: 3, // Index of the correct answer (0-indexed)
  },
  {
    question: "How old is Chuck Norris?",
    answers: ["A. 70", "B. 80", "C. 90", "D. 100"],
    correctAnswer: 1,
  },
  {
    question: "In which movie did Chuck Norris fight Bruce Lee?",
    answers: [
      'A. "Fists Of Fury" (1972)',
      'B. "Enter The Dragon" (1973)',
      'C. "Fury of The Dragon" (1976)',
      'D. "Return of the Dragon" (1972)',
    ],
    correctAnswer: 3,
  },
  {
    question:
      "What is the name of the son who contributed to several Chuck Norris films?",
    answers: [
      "A. Aaron Norris",
      "B. Eric Norris",
      "C. Charles Norris jr",
      "D. Adam Norris",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which actor starred alongside Chuck Norris in the movie 'An Eye For An Eye'?",
    answers: [
      "A. Lee van Cleef",
      "B. Christopher Lee",
      "C. Jean-Claude van Damme",
      "D. Steve McQueen",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What is the name of the theme song of the TV series 'Walker Texas Ranger'?",
    answers: [
      "A. Johnny Cash",
      "B. Don Henley",
      "C. Willie Nelson",
      "D. Chuck Norris",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which of these actors did not appear in a movie with Chuck Norris?",
    answers: [
      "A. Sylvester Stallone",
      "B. David Carradine",
      "C. Bruce Lee",
      "D. Jackie Chan",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the real name of Chuck Norris?",
    answers: [
      "A. Carlos Ray Norris",
      "B. Chester Norris",
      "C. Charles Norris",
      "D. Charles Edward Norris",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "In what martial arts has Chuck Norris won the world championship for many years in a row?",
    answers: [
      "A. Kyokushin karate",
      "B. Shotokan karate",
      "C. Goju-ryu karate",
      "D. Full contact karate",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "What is the name of the most famous partner with whom Chuck Norris trained in martial arts?",
    answers: [
      "A. Jean-Claude Van Damme",
      "B. Bruce Lee",
      "C. Steve McQueen",
      "D. Jackie Chan",
    ],
    correctAnswer: 1,
  },
];
export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

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

  return (
    <div className="site_conteiner">
      <h2>{currentQuestionData.question}</h2>

      {currentQuestionData.answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(index)}>
          {answer}
        </button>
      ))}
    </div>
  );
};
