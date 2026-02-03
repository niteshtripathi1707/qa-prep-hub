import React, { useState } from "react";

/* ✅ Import JSON datasets */
import cypress from "../data/questions/cypress.json";
import playwright from "../data/questions/playwright.json";
import selenium from "../data/questions/selenium.json";

/* ✅ Map framework name → dataset */
const frameworkData = {
  Cypress: cypress,
  Playwright: playwright,
  Selenium: selenium
};

export default function Frameworks() {
  const [framework, setFramework] = useState("Cypress");
  const [level, setLevel] = useState("Beginner");

  /* ✅ Filter questions by level */
  const questions = frameworkData[framework].filter(
    (q) => q.level === level
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Automation Frameworks</h2>

      {/* Framework Tabs */}
      <div className="flex gap-3 mb-6">
        {Object.keys(frameworkData).map((fw) => (
          <button
            key={fw}
            onClick={() => setFramework(fw)}
            className={`px-5 py-2 rounded-2xl border transition ${
              framework === fw
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
            }`}
          >
            {fw}
          </button>
        ))}
      </div>

      {/* Level Tabs */}
      <div className="flex gap-3 mb-10">
        {["Beginner", "Intermediate", "Advanced"].map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            className={`px-4 py-2 rounded-xl text-sm transition ${
              level === l
                ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Render Questions */}
      <div className="space-y-5">
        {questions.length > 0 ? (
          questions.map((q) => (
            <div
              key={q.id}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <h3 className="font-semibold text-lg">
                Q: {q.question}
              </h3>

              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                ✅ {q.answer}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No questions available for this level yet.
          </p>
        )}
      </div>
    </div>
  );
}
