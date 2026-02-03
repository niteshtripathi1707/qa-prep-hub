import React, { useState } from "react";

/* Import dataset for mock */
import manual from "../data/questions/manual.json";

export default function MockInterview() {
  const [question, setQuestion] = useState(null);

  function generateRandom() {
    const random =
      manual[Math.floor(Math.random() * manual.length)];
    setQuestion(random);
  }

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold mb-3">Mock Interview Simulator</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Click below to generate a random interview question.
      </p>

      <button
        onClick={generateRandom}
        className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow hover:opacity-90"
      >
        Generate Random Question
      </button>

      {question && (
        <div className="mt-10 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="font-semibold text-lg mb-3">
            Q: {question.question}
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            <strong>Answer:</strong> {question.answer}
          </p>
        </div>
      )}
    </div>
  );
}
