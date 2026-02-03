import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/topics", label: "Topics" },
  { path: "/frameworks", label: "Automation Frameworks" },
  { path: "/questions", label: "Question Bank" },
  { path: "/mock", label: "Mock Interview" }
];

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-6">
      <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase">
        Navigation
      </h2>

      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
