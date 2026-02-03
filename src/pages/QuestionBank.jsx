import React, { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import Pagination from "../components/Pagination";

/* Import JSON datasets */
import manual from "../data/questions/manual.json";
import selenium from "../data/questions/selenium.json";
import cypress from "../data/questions/cypress.json";
import playwright from "../data/questions/playwright.json";
import api from "../data/questions/api_testing.json";
import sql from "../data/questions/sql.json";

const datasets = {
  Manual: manual,
  Selenium: selenium,
  Cypress: cypress,
  Playwright: playwright,
  API: api,
  SQL: sql
};

export default function QuestionBank() {
  const [category, setCategory] = useState("Manual");
  const [search, setSearch] = useState("");

  // Pagination
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const questions = datasets[category];

  /* Filter questions by search */
  const filtered = questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  /* Pagination math */
  const totalPages = Math.ceil(filtered.length / pageSize);

  const currentQuestions = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-3">Interview Question Bank</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Practice real QA interview questions with click-to-expand answers.
      </p>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Category Selector */}
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="p-3 rounded-xl border dark:bg-gray-900 dark:border-gray-700"
        >
          {Object.keys(datasets).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="flex-1 p-3 rounded-xl border dark:bg-gray-900 dark:border-gray-700"
        />
      </div>

      {/* Question List */}
      <div className="space-y-4">
        {currentQuestions.length > 0 ? (
          currentQuestions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))
        ) : (
          <p className="text-gray-500">No questions found.</p>
        )}
      </div>

      {/* Pagination */}
      {filtered.length > pageSize && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      )}
    </div>
  );
}
