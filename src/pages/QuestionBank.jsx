import React, { useMemo, useState, useEffect } from "react";
import useProgress from "../hooks/useProgress";
import useNotes from "../hooks/useNotes";

/* ✅ Import all datasets */
import manual from "../data/questions/manual.json";
import selenium from "../data/questions/selenium.json";
import cypress from "../data/questions/cypress.json";
import playwright from "../data/questions/playwright.json";
import api from "../data/questions/api_testing.json";
import sql from "../data/questions/sql.json";

/* ✅ Dataset Map */
const datasets = {
  Manual: manual,
  Selenium: selenium,
  Cypress: cypress,
  Playwright: playwright,
  "API Testing": api,
  SQL: sql
};

export default function QuestionBank() {
  const [category, setCategory] = useState("Manual");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [filterMode, setFilterMode] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const { progress, toggleCompleted, toggleBookmarked } = useProgress();
  const { notes, updateNote } = useNotes();


  /* ✅ Load active dataset */
  const activeQuestions = datasets[category] || [];

  const filtered = useMemo(() => {
    let result = activeQuestions;

    // ✅ Search filter
    result = result.filter((q) =>
      q.question.toLowerCase().includes(search.toLowerCase())
    );

    // ✅ Completed filter
    if (filterMode === "Completed") {
      result = result.filter((q) =>
        progress.completed.includes(q.id)
      );
    }

    // ✅ Bookmarked filter
    if (filterMode === "Bookmarked") {
      result = result.filter((q) =>
        progress.bookmarked.includes(q.id)
      );
    }

    // ✅ Difficulty filter
    if (difficulty !== "All") {
      result = result.filter((q) => q.level === difficulty);
    }

    return result;
  }, [search, activeQuestions, filterMode, difficulty, progress]);



  /* ✅ Auto-select first question when category changes */
  useEffect(() => {
    if (filtered.length > 0) {
      setSelected(filtered[0]);
    }
  }, [category]);

  return (
    <div>
      {/* ✅ Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold">Interview Question Bank</h2>


      </div>

      {/* ✅ Hybrid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ✅ Left Panel */}
        <aside className="md:col-span-1 bg-white dark:bg-gray-900 border rounded-2xl p-4 h-[80vh] overflow-y-auto">
          {/* ✅ Category Switch */}
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSearch("");
              setFilterMode("All"); // reset
              setDifficulty("All");
            }}

            className="px-4 py-3 rounded-xl border dark:bg-gray-900"
            style={{ marginBottom: '10px' }}
          >
            {Object.keys(datasets).map((key) => (
              <option key={key}>{key}</option>
            ))}
          </select>

          {/* ✅ Filter Chips */}
          <div className="flex gap-2 mb-4">
            {["All", "Completed", "Bookmarked"].map((mode) => (
              <button
                key={mode}
                onClick={() => setFilterMode(mode)}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition ${filterMode === mode
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:opacity-80"
                  }`}
              >
                {mode}
              </button>
            ))}
          </div>

          {/* ✅ Difficulty Chips */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setDifficulty(lvl)}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition ${difficulty === lvl
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:opacity-80"
                  }`}
              >
                {lvl}
              </button>
            ))}
          </div>


          {/* Search */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="w-full mb-4 px-4 py-2 rounded-xl border dark:bg-gray-800"
          />

          <p className="text-xs text-gray-500 mb-3">
            Showing {filtered.length} questions
          </p>


          {/* Question List */}
          <div className="space-y-2">
            {filtered.map((q) => {
              const done = progress.completed.includes(q.id);
              const saved = progress.bookmarked.includes(q.id);

              return (
                <button
                  key={q.id}
                  onClick={() => setSelected(q)}
                  className={`w-full text-left p-3 rounded-xl flex justify-between items-center 
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition
                  ${selected?.id === q.id
                      ? "bg-blue-50 dark:bg-gray-800 border border-blue-400"
                      : ""
                    }`}
                >
                  <span className="text-sm font-medium">
                    {done ? "✅" : "⬜"} {q.question.slice(0, 42)}...
                  </span>

                  {saved && <span>⭐</span>}
                  {notes[q.id] && notes[q.id].trim().length > 0 && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                      Note
                    </span>
                  )}
                </button>
              );
            })}
            {filtered.length === 0 && (
              <p className="text-gray-500 text-sm mt-6">
                No questions found for this filter.
              </p>
            )}

          </div>
        </aside>

        {/* ✅ Right Panel */}
        <section className="md:col-span-2 bg-white dark:bg-gray-900 border rounded-2xl p-6 h-[80vh] overflow-y-auto">
          {selected ? (
            <>
              <h3 className="text-2xl font-bold leading-snug">
                {selected.question}
              </h3>

              <p className="mt-2 text-sm text-blue-600 font-medium">
                Level: {selected.level}
              </p>

              {/* Actions */}
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => toggleCompleted(selected.id)}
                  className="px-4 py-2 rounded-xl bg-green-600 text-white hover:opacity-90"
                >
                  {progress.completed.includes(selected.id)
                    ? "Completed ✅"
                    : "Mark Completed"}
                </button>

                <button
                  onClick={() => toggleBookmarked(selected.id)}
                  className="px-4 py-2 rounded-xl bg-yellow-500 text-white hover:opacity-90"
                >
                  {progress.bookmarked.includes(selected.id)
                    ? "Bookmarked ⭐"
                    : "Bookmark"}
                </button>
              </div>

              {/* Answer */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-3">Answer</h4>

                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {selected.answer}
                </p>
              </div>

              {/* ✅ Notes Section */}
              <div className="mt-10">
                <h4 className="font-semibold text-lg mb-3">
                  My Notes
                </h4>

                <textarea
                  value={notes[selected.id] || ""}
                  onChange={(e) => updateNote(selected.id, e.target.value)}
                  placeholder="Write your personal notes here... (saved automatically)"
                  className="
      w-full min-h-[140px]
      p-4 rounded-2xl border
      text-base leading-relaxed
      bg-gray-50 dark:bg-gray-800
      dark:border-gray-700
      focus:outline-none focus:ring-2 focus:ring-blue-400
    "
                />

                <p className="text-xs text-gray-500 mt-2">
                  Notes are saved automatically in this browser.
                </p>
              </div>

            </>
          ) : (
            <p className="text-gray-500">No question selected.</p>
          )}
        </section>
      </div>
    </div>
  );
}
