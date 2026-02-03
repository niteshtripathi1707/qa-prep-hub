import React from "react";

export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-center items-center gap-3 mt-6">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 disabled:opacity-50"
      >
        Prev
      </button>

      <p className="text-sm">
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </p>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
