import React from "react";

export default function Badge({ text }) {
  return (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-gray-800 dark:text-blue-300">
      {text}
    </span>
  );
}
