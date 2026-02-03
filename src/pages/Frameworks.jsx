import React, { useState } from "react";

const frameworks = {
  Cypress: {
    Beginner: [
      {
        question: "What is Cypress used for?",
        answer:
          "Cypress is an end-to-end testing framework for modern web apps with fast execution and built-in waits."
      }
    ],
    Intermediate: [
      {
        question: "Explain Cypress fixtures.",
        answer:
          "Fixtures are external test data files (JSON) that can be loaded inside Cypress tests."
      }
    ],
    Advanced: [
      {
        question: "How does Cypress handle automatic waiting?",
        answer:
          "Cypress automatically retries DOM queries and assertions until they pass or timeout."
      }
    ]
  },

  Playwright: {
    Beginner: [
      {
        question: "What is Playwright?",
        answer:
          "Playwright is a browser automation framework supporting Chromium, Firefox, and WebKit with strong parallel support."
      }
    ],
    Intermediate: [
      {
        question: "Playwright vs Selenium?",
        answer:
          "Playwright provides built-in auto waits, modern browser control, and faster execution than Selenium."
      }
    ],
    Advanced: [
      {
        question: "Explain Playwright parallel execution.",
        answer:
          "Playwright runs tests in parallel using workers defined in the config file."
      }
    ]
  },

  Selenium: {
    Beginner: [
      {
        question: "What is Selenium WebDriver?",
        answer:
          "Selenium WebDriver is a tool used to automate browser interactions for functional testing."
      }
    ],
    Intermediate: [
      {
        question: "What is Page Object Model?",
        answer:
          "POM is a design pattern where each page is represented as a class containing locators and methods."
      }
    ],
    Advanced: [
      {
        question: "How to handle stale elements?",
        answer:
          "Re-locate the element after DOM refresh or use explicit waits before interacting."
      }
    ]
  }
};

export default function Frameworks() {
  const [activeFramework, setActiveFramework] = useState("Cypress");
  const [level, setLevel] = useState("Beginner");

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Automation Frameworks</h2>

      {/* Framework Selector */}
      <div className="flex gap-3 mb-6">
        {Object.keys(frameworks).map((fw) => (
          <button
            key={fw}
            onClick={() => setActiveFramework(fw)}
            className={`px-5 py-2 rounded-2xl border transition ${
              activeFramework === fw
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
            }`}
          >
            {fw}
          </button>
        ))}
      </div>

      {/* Level Selector */}
      <div className="flex gap-3 mb-8">
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

      {/* Questionnaire */}
      <div className="space-y-4">
        {frameworks[activeFramework][level].map((q, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <h3 className="font-semibold">Q: {q.question}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              ✅ {q.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
