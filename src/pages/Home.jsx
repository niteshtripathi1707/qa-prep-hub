import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center py-16">
      <h1 className="text-5xl font-bold leading-tight mb-6">
        Prepare Smarter for{" "}
        <span className="text-blue-600">QA Interviews</span>
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
        QA Prep Hub helps Manual QA, Automation Engineers, and SDETs practice
        frameworks, interview questions, SQL, APIs, and real-world scenarios —
        all in one place.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow hover:opacity-90"
        >
          Go to Dashboard →
        </Link>

        <Link
          to="/questions"
          className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Explore Questions
        </Link>
      </div>
    </div>
  );
}
