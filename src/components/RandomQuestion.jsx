import { useState } from "react";
import { questions } from "../questions.js";

export default function RandomQuestion() {
  const [question, setQuestion] = useState(() => {
    return questions[Math.floor(Math.random() * questions.length)];
  });

  function handleClick() {
    setQuestion(questions[Math.floor(Math.random() * questions.length)]);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">{question}</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={handleClick}>
        Show Another Question
      </button>
    </div>
  );
}
