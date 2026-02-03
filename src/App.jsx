import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Topics from "./pages/Topics";
import Frameworks from "./pages/Frameworks";
import QuestionBank from "./pages/QuestionBank";
import MockInterview from "./pages/MockInterview";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 dark:text-white transition">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/frameworks" element={<Frameworks />} />
                <Route path="/questions" element={<QuestionBank />} />
                <Route path="/mock" element={<MockInterview />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}
