import React from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        QA Prep Hub <span className="text-gray-400 text-sm">v2</span>
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:opacity-80 text-sm"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}
