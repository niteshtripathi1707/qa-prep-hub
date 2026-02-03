import React, { useState } from "react";

const topics = [
  {
    title: "Manual Testing",
    content:
      "Learn SDLC/STLC, test case writing, bug lifecycle, types of testing, and Agile QA fundamentals."
  },
  {
    title: "API Testing",
    content:
      "Master REST vs SOAP, Postman usage, authentication, HTTP status codes, and API automation basics."
  },
  {
    title: "SQL for QA",
    content:
      "Practice SELECT queries, JOINS, GROUP BY, subqueries, and real interview SQL challenges."
  }
];

export default function Topics() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Topics</h2>

      {/* Topic Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {topics.map((t) => (
          <button
            key={t.title}
            onClick={() => setActive(t)}
            className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md text-left transition"
          >
            <h3 className="font-semibold text-lg">{t.title}</h3>
            <p className="text-sm mt-2 text-gray-500">
              Click to start learning →
            </p>
          </button>
        ))}
      </div>

      {/* Learning Panel */}
      {active && (
        <div className="mt-10 p-8 rounded-2xl bg-blue-50 dark:bg-gray-900 border border-blue-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold mb-3">{active.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {active.content}
          </p>
        </div>
      )}
    </div>
  );
}
