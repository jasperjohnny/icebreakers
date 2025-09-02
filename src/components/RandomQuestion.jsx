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
      <h1 className="text-3xl font-bold text-center text-[#191970] mb-6">{question}</h1>
      <button className="px-4 py-2 bg-[#FF8B7B] text-[#191970] font-medium rounded hover:bg-[#FF7B6B] transition" onClick={handleClick}>
        Show Another Question
      </button>
    </div>
  );
}
