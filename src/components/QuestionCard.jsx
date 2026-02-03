import React, { useState } from "react";

export default function QuestionCard({ question }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
      
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center"
      >
        <h3 className="text-lg font-semibold leading-snug">
          Q: {question.question}
        </h3>

        <span className="text-gray-500 text-sm">
          {open ? "▲" : "▼"}
        </span>
      </button>

      {/* Difficulty */}
      <p className="mt-2 text-sm font-medium text-blue-600">
        Level: {question.level}
      </p>

      {/* Answer */}
      {open && (
        <div className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          <strong className="block mb-2 text-gray-900 dark:text-white">
            Answer:
          </strong>
          {question.answer}
        </div>
      )}
    </div>
  );
}
