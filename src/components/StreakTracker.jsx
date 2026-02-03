import React, { useEffect, useState } from "react";

export default function StreakTracker() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("qa_streak");
    if (saved) setStreak(Number(saved));
  }, []);

  function incrementStreak() {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem("qa_streak", newStreak);
  }

  function resetStreak() {
    setStreak(0);
    localStorage.setItem("qa_streak", 0);
  }

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
      <h3 className="font-semibold text-lg mb-2">🔥 Daily Streak</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Current Streak: <strong>{streak} days</strong>
      </p>

      <div className="flex gap-3">
        <button
          onClick={incrementStreak}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:opacity-90"
        >
          Mark Today Complete
        </button>

        <button
          onClick={resetStreak}
          className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:opacity-80"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
