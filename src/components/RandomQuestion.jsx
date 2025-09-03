import { useState } from "react";
import { questions } from "../questions.js";
import { getImageForQuestion } from "../utils/questionImages.js";

export default function RandomQuestion() {
  const [question, setQuestion] = useState(() => {
    return questions[Math.floor(Math.random() * questions.length)];
  });

  const [image, setImage] = useState(() => getImageForQuestion(question));

  function handleClick() {
    const newQuestion = questions[Math.floor(Math.random() * questions.length)];
    setQuestion(newQuestion);
    setImage(getImageForQuestion(newQuestion));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="question-card">
        <div key={image} className="text-7xl mb-8 text-center emoji-fade-in">
          {image}
        </div>
        <h1 key={question} style={{ fontFamily: "Satisfy" }} className="text-3xl text-center text-[#191970] mb-16 leading-relaxed typewriter">
          {question}
        </h1>
        <div className="text-center mt-8">
          <button
            style={{ fontFamily: "Outfit" }}
            className="px-6 py-3 bg-[#FF8B7B] text-[#191970] font-medium rounded-lg hover:bg-[#FF7B6B] transition shadow-md"
            onClick={handleClick}
          >
            Show Another Question
          </button>
        </div>
      </div>
    </div>
  );
}
