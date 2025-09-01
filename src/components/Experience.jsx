// src/components/Experience.jsx
import React from "react";

const experience = [
    {
        role: "Frontend Developer",
        company: "Tech Solutions Inc.",
        duration: "2023 - Present",
        description: "Built responsive React apps with Tailwind and API integrations."
    },
    {
        role: "Intern",
        company: "Startup Hub",
        duration: "2022",
        description: "Contributed to UI improvements and bug fixes."
    }
    ];

    const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-10">Experience</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
            {experience.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded shadow text-left">
                <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400">{item.role} @ {item.company}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Experience;
