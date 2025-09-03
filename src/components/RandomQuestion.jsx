import { useState, useEffect } from "react";
import { questions } from "../questions.js";
import { getImageForQuestion } from "../utils/questionImages.js";

export default function RandomQuestion() {
  const [votes, setVotes] = useState({});
  const [isClient, setIsClient] = useState(false);
  
  // Track shown questions in current session
  const [shownQuestions, setShownQuestions] = useState([]);

  // Load votes from localStorage after component mounts
  useEffect(() => {
    setIsClient(true);
    const saved = window.localStorage.getItem("questionVotes");
    if (saved) {
      setVotes(JSON.parse(saved));
    }
  }, []);

  const getRandomQuestion = () => {
    // Filter out both downvoted and already shown questions
    const availableQuestions = questions.filter((q) => votes[q] !== -1 && !shownQuestions.includes(q));

    if (availableQuestions.length === 0) {
      // If no questions left, reset shown questions but keep votes
      setShownQuestions([]);
      // Get questions that weren't downvoted
      const nonDownvotedQuestions = questions.filter((q) => votes[q] !== -1);

      if (nonDownvotedQuestions.length === 0) {
        // If all questions were downvoted, reset votes
        if (isClient) {
          window.localStorage.removeItem("questionVotes");
        }
        setVotes({});
        const newQuestion = questions[Math.floor(Math.random() * questions.length)];
        setShownQuestions([newQuestion]);
        return newQuestion;
      }

      // Pick from non-downvoted questions
      const newQuestion = nonDownvotedQuestions[Math.floor(Math.random() * nonDownvotedQuestions.length)];
      setShownQuestions([newQuestion]);
      return newQuestion;
    }

    const newQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    setShownQuestions((prev) => [...prev, newQuestion]);
    return newQuestion;
  };

  const [question, setQuestion] = useState(getRandomQuestion);
  const [image, setImage] = useState(() => getImageForQuestion(question));

  useEffect(() => {
    if (isClient && Object.keys(votes).length > 0) {
      window.localStorage.setItem("questionVotes", JSON.stringify(votes));
    }
  }, [votes, isClient]);

  function handleClick() {
    const newQuestion = getRandomQuestion();
    setQuestion(newQuestion);
    setImage(getImageForQuestion(newQuestion));
  }

  function handleVote(value) {
    setVotes((prev) => ({ ...prev, [question]: value }));
    handleClick();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="question-card">
        <div key={image} className="text-7xl mb-8 text-center emoji-fade-in">
          {image}
        </div>
        <h1 key={question} style={{ fontFamily: "Satisfy" }} className="text-3xl text-center text-[#191970] mb-8 leading-relaxed typewriter">
          {question}
        </h1>
        <div className="flex justify-center gap-4 mb-8">
          <button onClick={() => handleVote(1)} className="p-2 text-2xl hover:scale-110 transition-transform" title="Great question!">
            👍
          </button>
          <button onClick={() => handleVote(-1)} className="p-2 text-2xl hover:scale-110 transition-transform" title="Skip this question next time">
            👎
          </button>
        </div>
        <div className="text-center">
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
