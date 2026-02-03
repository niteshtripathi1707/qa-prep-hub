import React from "react";
import StreakTracker from "../components/StreakTracker";
import Badge from "../components/Badge";


const modules = [
    { title: "Manual Testing", desc: "SDLC, STLC, Test Design, Bug Lifecycle" },
    { title: "Automation Frameworks", desc: "Cypress, Playwright, Selenium" },
    { title: "API Testing", desc: "REST, Postman, Status Codes, Automation" },
    { title: "SQL for QA", desc: "Joins, Queries, Interview Practice" },
    { title: "Question Bank", desc: "500+ QA Interview Questions" },
    { title: "Mock Interviews", desc: "Simulate real interview practice" }
];

export default function Dashboard() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-3">Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                Track your learning and prepare systematically.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {modules.map((m) => (
                    <div
                        key={m.title}
                        className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition"
                    >
                        <h3 className="font-semibold text-lg mb-2">{m.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {m.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Gamification Section */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
                <StreakTracker />

                <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                    <h3 className="font-semibold text-lg mb-3">🏆 Badges</h3>

                    <div className="flex gap-2 flex-wrap">
                        <Badge text="Manual Master" />
                        <Badge text="Automation Starter" />
                        <Badge text="API Challenger" />
                        <Badge text="SQL Explorer" />
                    </div>

                    <p className="text-sm text-gray-500 mt-4">
                        Earn more badges by completing question sets daily.
                    </p>
                </div>
            </div>


            {/* Progress Section */}
            <div className="mt-12 p-6 rounded-2xl bg-blue-50 dark:bg-gray-900 border border-blue-200 dark:border-gray-800">
                <h3 className="font-semibold mb-2">🔥 Weekly Goal</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    Complete 20 interview questions + 1 mock interview session this week.
                </p>
            </div>
        </div>
    );
}
