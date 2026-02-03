import React, { useState } from "react";

export default function QuestionCard({ question }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition"
    >
      {/* Question Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center"
      >
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Q: {question.question}
        </h3>

        <span className="text-sm text-gray-500">
          {open ? "▲" : "▼"}
        </span>
      </button>

      {/* Difficulty */}
      <p className="text-xs mt-2 text-blue-600 font-medium">
        Level: {question.level}
      </p>

      {/* Expandable Answer */}
      {open && (
        <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <strong>Answer:</strong> {question.answer}
        </div>
      )}
    </div>
  );
}
