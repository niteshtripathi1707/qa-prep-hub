import { useEffect, useState } from "react";

const STORAGE_KEY = "qa_prep_progress_v1";

export default function useProgress() {
  const [progress, setProgress] = useState({
    completed: [],
    bookmarked: []
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  // Save whenever updated
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Toggle Completed
  const toggleCompleted = (id) => {
    setProgress((prev) => ({
      ...prev,
      completed: prev.completed.includes(id)
        ? prev.completed.filter((x) => x !== id)
        : [...prev.completed, id]
    }));
  };

  // Toggle Bookmark
  const toggleBookmarked = (id) => {
    setProgress((prev) => ({
      ...prev,
      bookmarked: prev.bookmarked.includes(id)
        ? prev.bookmarked.filter((x) => x !== id)
        : [...prev.bookmarked, id]
    }));
  };

  return { progress, toggleCompleted, toggleBookmarked };
}
