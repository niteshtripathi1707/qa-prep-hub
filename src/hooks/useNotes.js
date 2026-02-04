import { useEffect, useState } from "react";

const STORAGE_KEY = "qa_prep_notes_v1";

export default function useNotes() {
  const [notes, setNotes] = useState({});

  // ✅ Load saved notes
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  // ✅ Persist notes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  // ✅ Update note for specific question
  const updateNote = (questionId, text) => {
    setNotes((prev) => ({
      ...prev,
      [questionId]: text
    }));
  };

  return { notes, updateNote };
}
