import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/topics", label: "Topics" },
  { path: "/frameworks", label: "Frameworks" },
  { path: "/questions", label: "Question Bank" },
  { path: "/mock", label: "Mock Interview" }
];

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      {/* Top Row */}
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-xl font-bold text-blue-600">
          QA Prep Hub
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:opacity-80 text-sm"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Navigation Row */}
      <nav className="flex justify-end gap-6 px-8 pb-3 text-sm font-medium">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `pb-2 transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
